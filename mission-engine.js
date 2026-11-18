(() => {
  'use strict';
  const id = Number(document.body.dataset.mission);
  const m = window.DEUTSCH_MISSIONS[id];
  const $ = x => document.getElementById(x);
  const key = 'da_v9_m' + id;
  const esc = x => String(x).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let state = AventuraCore.newState();
  let mode = 'auto', teacher = false, ready = false, selection = [], hint = 0, notice = '', event = '';
  let sortAssignments = {}, sortActive = null;
  let mediaRecorder = null, audioChunks = [], recordedUrl = null, isRecording = false;

  try {
    mode = localStorage.getItem(key + '_mode') || 'auto';
    if (!['auto', 'manual', 'off'].includes(mode)) mode = 'auto';
    if (mode !== 'off') state = AventuraCore.cleanState(JSON.parse(localStorage.getItem(key) || 'null'), m.tasks.length);
  } catch (e) {}

  $('mode').value = mode;
  $('heading').textContent = m.icon + ' ' + m.title;
  $('heading-es').textContent = m.es;

  function save(force = false) {
    if (mode === 'off') return false;
    if (mode === 'auto' || (force && mode === 'manual')) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
        return true;
      } catch (e) {
        notice = 'Speichern nicht möglich · No se pudo guardar';
        return false;
      }
    }
    return false;
  }

  function speak(s, slow = false) {
    if (!window.speechSynthesis) {
      notice = 'Audio nicht verfügbar · Audio no disponible';
      render();
      return;
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(s);
    u.lang = 'de-DE';
    u.rate = slow ? 0.62 : 0.88;
    const voices = speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith('de'));
    const bestVoice = voices.find(v => /natural|google|katja|conrad|amala/i.test(v.name)) || voices[0];
    if (bestVoice) u.voice = bestVoice;
    speechSynthesis.speak(u);
  }

  async function toggleRecord() {
    if (isRecording && mediaRecorder) {
      mediaRecorder.stop();
      isRecording = false;
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      notice = 'Mikrofon nicht verfügbar · Micrófono no disponible en este navegador.';
      render();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        recordedUrl = URL.createObjectURL(blob);
        stream.getTracks().forEach(tr => tr.stop());
        render();
      };
      mediaRecorder.start();
      isRecording = true;
      notice = '🎙️ Grabando... Habla en alemán y pulsa Detener.';
      render();
    } catch (err) {
      notice = 'Permiso de micrófono denegado. Puedes practicar en voz alta sin grabar.';
      render();
    }
  }

  const consequenceMap = {
    3: { kind: 'kit', effect: 'backpack_ready', title: '🎒 Der Rucksack ist gepackt!', es: 'La mochila quedó preparada.' },
    4: { kind: 'mix', effect: 'green_potion', title: '🟢 Der grüne Trank ist fertig!', es: 'La mezcla verde está lista.' },
    11: { kind: 'kit', effect: 'robot_repaired', title: '🤖 Der Roboter funktioniert wieder!', es: 'El robot ha sido reparado.' },
    12: { kind: 'sort', effect: 'labels_restored', title: '🧪 Die Etiketten sind wieder da!', es: 'Las etiquetas están recuperadas.' }
  };

  function completedEffects() {
    const effects = {};
    if (mode !== 'off') {
      for (const [n, flag] of [[3, 'backpack_ready'], [4, 'green_potion'], [11, 'robot_repaired'], [12, 'labels_restored']]) {
        try {
          if (localStorage.getItem(n === 2 ? 'da_v9_m2_11steps_mode' : 'da_v9_m' + n + '_mode') === 'off') continue;
          const other = JSON.parse(localStorage.getItem(n === 2 ? 'da_v9_m2_11steps' : 'da_v9_m' + n) || 'null');
          if (other && other.effects && other.effects[flag]) effects[flag] = true;
        } catch (e) {}
      }
    }
    return Object.assign(effects, state.effects || {});
  }

  function consequenceHtml() {
    const e = completedEffects(), msgs = [];
    if (e.backpack_ready) msgs.push('🎒 Die Ausrüstung ist bereit. · La mochila está preparada.');
    if (e.green_potion) msgs.push('🟢 Der grüne Trank ist fertig. · La mezcla verde está lista.');
    if (e.robot_repaired) msgs.push('🤖 Der Roboter hilft uns. · El robot nos acompaña.');
    if (e.labels_restored) msgs.push('🧪 Die Etiketten sind wieder da. · Las etiquetas están recuperadas.');
    return msgs.length ? '<section class="world-effects" aria-label="Geschichte und Folgen"><strong>✨ Unsere Abenteuer · Lo que hemos conseguido</strong><ul>' + msgs.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul></section>' : '';
  }

  function worldScene() {
    const e = completedEffects(), has = name => !!e[name];
    const scene = {
      3: { base: '🎒', details: [['🗺️', 'Karte'], ['📚', 'Buch']], flag: 'backpack_ready', title: 'Der Rucksack' },
      4: { base: '⚗️', details: [['🔵', 'Blau'], ['🟡', 'Gelb']], flag: 'green_potion', title: 'Die Farbenmaschine' },
      11: { base: '🤖', details: [['🦾', 'Arm'], ['🔋', 'Batterie']], flag: 'robot_repaired', title: 'Die Roboterwerkstatt' },
      12: { base: '🧪', details: [['🏷️', 'Etiketten'], ['🧴', 'Flaschen']], flag: 'labels_restored', title: 'Das Labor' },
      24: { base: '🏰', details: [['🧭', 'Kompass'], ['🦊', 'Felix']], flag: null, title: 'Die letzte Reise' }
    }[id];
    if (!scene) return '';
    const complete = scene.flag ? has(scene.flag) : ['backpack_ready', 'green_potion', 'robot_repaired', 'labels_restored'].filter(k => has(k)).length;
    const status = complete ? 'Geschafft! · ¡Conseguido!' : 'Noch nicht fertig · Todavía pendiente';
    const details = scene.details.map(([emoji, name], i) => '<div class="world-prop prop-' + i + ' ' + (complete ? 'activated' : '') + '">' + (complete ? emoji : '❔') + '<small>' + (complete ? esc(name) : '???') + '</small></div>').join('');
    const extra = id === 11 && has('backpack_ready') ? '<div class="world-guest">🎒 <small>Ausrüstung aus dem Wald</small></div>' : id === 12 && has('green_potion') ? '<div class="world-guest">🟢 <small>Trank aus dem Wald</small></div>' : '';
    const final = id === 24 ? '<div class="world-memories">' + [['🎒', 'backpack_ready'], ['🟢', 'green_potion'], ['🤖', 'robot_repaired'], ['🏷️', 'labels_restored']].map(([emoji, k]) => '<span class="memory ' + (has(k) ? 'found' : 'missing') + '">' + emoji + '</span>').join('') + '</div>' : '';
    const desc = complete ? (id === 3 ? 'Die Sachen sind im Rucksack! · ¡Los objetos están en la mochila!' : id === 4 ? 'Die Mischung ist grün! · ¡La mezcla es verde!' : id === 11 ? 'Der Roboter ist repariert! · ¡El robot está reparado!' : id === 12 ? 'Alle Etiketten sind zurück! · ¡Se recuperaron las etiquetas!' : 'Die Erinnerungen begleiten uns. · Los recuerdos nos acompañan.') : 'Löse die Aufgabe, um die Szene zu verändern. · Resuelve el desafío para cambiar la escena.';
    return '<section class="world-stage ' + (complete ? 'stage-complete' : 'stage-pending') + '"><div class="world-stage-head"><strong>' + esc(scene.title) + '</strong><span>' + esc(status) + '</span></div><div class="world-stage-art"><div class="world-base">' + scene.base + '</div>' + details + extra + final + '</div><p>' + desc + '</p></section>';
  }

  function finish() {
    const current = m.tasks[state.step], c = consequenceMap[id];
    if (c && current[0] === c.kind) state.effects[c.effect] = true;
    AventuraCore.finish(state, state.step, null);
    const missionComplete = state.done.length === m.tasks.length;
    if (missionComplete && !state.inventory.includes(m.reward)) state.inventory.push(m.reward);
    if (missionComplete) {
      try {
        const comp = JSON.parse(localStorage.getItem('da_completed') || '[]');
        if (!comp.includes(id)) {
          comp.push(id);
          localStorage.setItem('da_completed', JSON.stringify(comp));
        }
      } catch (e) {}
    }
    notice = 'Richtig! Gut gemacht! · ¡Muy bien!';
    event = missionComplete ? '🏆 ' + m.reward + ' (⭐⭐⭐ Misión completada en el mapa)' : (m.tasks[state.step][0] === 'kit' ? (id === 11 ? '🤖 Der Roboter hat jetzt die richtigen Teile! · ¡Robot equipado!' : '🎒 Der Rucksack ist gepackt! · ¡Mochila preparada!') : '✨ Ein Hinweis gefunden! · ¡Encontraste una pista!');
    save();
    render();
  }

  function go(i) {
    state.step = AventuraCore.nextStep(i, m.tasks.length);
    ready = false; selection = []; sortAssignments = {}; sortActive = null; hint = 0; notice = ''; event = ''; recordedUrl = null;
    save();
    render();
  }
  const VISUALS = {
    1: '🦊　🌲　🦉　🧭', 3: '🦊　🎒　🗺️　📚', 4: '🌳　🌊　🌻　🎨', 5: '🦊　🦉　🚪　🔑',
    6: ['🏰　🍽️　👑', '🍞　🥛　🧀', '👑　🍞', '🥛　🍽️', '🧑‍🍳　🥛', '🍰　🥣　🥖', '🍎　👦', '🥖　💧', '👑　🥣', '🍎　🎉'],
    7: ['🏰　🛏️', '🍳　🥣', '🚪　🛁', '🚪　🚪　🚪', '💂　🏰', '🛁　❓', '🚪　🛁', '🛏️　🪟', '↩️　🚪', '🗝️　🚪'],
    8: ['🍎　2€　📕　8€', '⚽　5€', '📕　8€', '🧑‍🌾　🍎', '🪙　⚽', '🪙　🪙　🪙', '🍎　🍎', '🛍️　🍎', '🔟　➖　8️⃣', '🪙　🤝'],
    9: ['🌅　🥣', '🕗　08:00', '🕙　10:00', '🧑‍🔧　🕰️', '🕒　🕕　🕘', '🌆　🍽️', '❓　🕰️', '🌅　☀️', '🌅　🌇　🌙', '🕕　🎉'],
    10: ['👑　🧑‍🍳', '🗝️　🪑', '❓　🗝️', '👑　💂', '🧰　✨　📦', '👑　🪙', '💂　🗝️', '❓　❓　❓', '🗝️　🪑', '👑　🏰'],
    11: ['🤖　🧩　🔍', '🤖　🔴　🔵　🟢', '🤖　🛠️　⚙️', '🤖　🔐　🚪', '🤖　❓　🗣️', '🤖　🧠　✨', '🤖　🔢　📜', '🤖　🗣️　📝', '🤖　🧪　🔎', '🤖　🏆　💡'],
    12: ['🧪　🧩　🔍', '🧪　🔴　🔵　🟢', '🧪　🛠️　⚙️', '🧪　🔐　🚪', '🧪　❓　🗣️', '🧪　🧠　✨', '🧪　🔢　📜', '🧪　🗣️　📝', '🧪　🧪　🔎', '🧪　🏆　💡'],
    13: ['💻　🧩　🔍', '💻　🔴　🔵　🟢', '💻　🛠️　⚙️', '💻　🔐　🚪', '💻　❓　🗣️', '💻　🧠　✨', '💻　🔢　📜', '💻　🗣️　📝', '💻　🧪　🔎', '💻　🏆　💡'],
    14: ['📊　🧩　🔍', '📊　🔴　🔵　🟢', '📊　🛠️　⚙️', '📊　🔐　🚪', '📊　❓　🗣️', '📊　🧠　✨', '📊　🔢　📜', '📊　🗣️　📝', '📊　🧪　🔎', '📊　🏆　💡'],
    15: ['🔬　🧩　🔍', '🔬　🔴　🔵　🟢', '🔬　🛠️　⚙️', '🔬　🔐　🚪', '🔬　❓　🗣️', '🔬　🧠　✨', '🔬　🔢　📜', '🔬　🗣️　📝', '🔬　🧪　🔎', '🔬　🏆　💡'],
    16: ['🌧️　☁️', '🥶　🌬️', '❄️　🚪', '🌪️　📝', '🌸　☀️', '🧚　🌤️', '🌪️　⚠️', '⛰️　🏞️', '🎤　🌦️', '🗺️　🌤️'],
    17: ['🚉　🚂', '🖼️　🚂', '🏠　🚉', '🚂　🕰️', '📷　🕰️', '👨‍✈️　🚉', '🕘　🚂', '🕘　🎟️', '🖼️　🚂', '🎟️　✨'],
    18: ['🚌　🚀', '🚌　🗼', '🌉　🌊', '🚌　💬', '🕙　🚏', '👨‍✈️　🚌', '🚌　🗼', '🚍　🚲', '🗺️　🚌', '🎟️　🤝'],
    19: ['📅　🌞', '📅　🖊️', '📆　🗓️', '🌷　📆', '🎂　📅', '🦊　🎂', '📆　🤝', '🌀　📅', '🗓️　📝', '📅　✨'],
    20: ['🌤️　🌀', '🕖　🌀', '📆　🌀', '🏡　🚀', '🟢　🔘', '👩‍✈️　🌀', '🌀　✨', '🚪　🌀', '🌤️　🕖　📅', '🗝️　🌀'],
    21: ['🌲　🧭', '🌲　🗺️', '🌉　↔️', '🧭　➡️', '🦊　🐇', '🦉　❓', '🦉　➡️', '🏡　➡️', '🗺️　🏡', '🌿　🏅'],
    22: ['❓　🦉', '❓　🧭', '🗺️　🪑', '❓　🦊', '🕕　❓', '🐇　❓', '🐇　🙂', '🕒　❓', '🎤　❓', '🃏　❓'],
    23: ['🤝　👩', '👩　❓', '🏡　❓', '👩　💬', '👩　🙂', '🚪　↔️', '🦊　💬', '🇩🇪　❓', '🎭　💬', '🗝️　🤝'],
    24: ['🦊　🏆', '🌉　➡️', '🥛　🍽️', '🤖　🟢', '📅　☀️', '👩　🚪', '🚪　✨', '🏠　🚶', '📜　🗣️', '🏆　🎉']
  };

  function render() {
    const t = m.tasks[state.step], kind = t[0], done = state.done.includes(state.step);
    $('counter').textContent = state.done.length + ' / ' + m.tasks.length;
    const collected = [];
    if (mode !== 'off') {
      for (let n = 1; n <= 24; n++) {
        try {
          if (localStorage.getItem(n === 2 ? 'da_v9_m2_11steps_mode' : 'da_v9_m' + n + '_mode') === 'off') continue;
          const v = JSON.parse(localStorage.getItem(n === 2 ? 'da_v9_m2_11steps' : 'da_v9_m' + n) || 'null');
          if (v && Array.isArray(v.inventory)) for (const item of v.inventory) if (!collected.includes(item)) collected.push(item);
        } catch (e) {}
      }
    }
    for (const item of state.inventory) if (!collected.includes(item)) collected.push(item);
    $('inventory').textContent = collected.length ? collected.join(', ') : 'Noch leer · Todavía vacío';
    $('intro').innerHTML = esc(m.intro) + '<small>' + esc(m.introEs) + '</small>' + consequenceHtml();
    $('nav').innerHTML = m.tasks.map((tk, i) => '<button data-go="' + i + '" class="' + (i === state.step ? 'active' : '') + '">' + (state.done.includes(i) ? '✓ ' : '') + (i + 1) + '</button>').join('');

    let visual = VISUALS[id] || '🌲';
    if (Array.isArray(visual)) visual = visual[state.step] || visual[0];

    let html = '<div class="step">Aufgabe ' + (state.step + 1) + ' / ' + m.tasks.length + '<small>Actividad ' + (state.step + 1) + '</small></div>' +
      '<h2>' + esc(t[1]) + '</h2>' +
      '<div class="scene" role="img"><span class="scene-art">' + visual + '</span><p>Hör zu und entdecke die Lösung! <small>Escucha y descubre la solución.</small></p></div>' +
      '<h3>' + esc(t[3]) + '</h3><p class="es">' + esc(t[2]) + '</p>' +
      '<div class="actions">' +
        '<button class="secondary" data-say="' + esc(t[4]) + '">🔊 Anhören <small>Escuchar normal</small></button>' +
        '<button class="secondary" data-slow="' + esc(t[4]) + '">🐢 Langsam <small>Despacio</small></button>' +
        '<button class="secondary" data-transcript="1">📖 Text zeigen <small>Mostrar texto</small></button>' +
      '</div>' +
      (hint >= 2 ? '<p class="transcript" style="background:#f8fafc;padding:10px;border-radius:10px;border:1px solid #cbd5e1;font-weight:700;">🇩🇪 ' + esc(t[4]) + '</p>' : '');

    if (state.effects && Object.values(state.effects).some(Boolean) && done) html += '<div class="world-change">🌟 Die Welt hat sich verändert! <small>¡Tu acción cambió el mundo!</small></div>';
    html += worldScene();

    if (kind === 'choice' || kind === 'route' || kind === 'dialogue') html += '<div class="options">' + t[5].map((x, i) => '<button data-answer="' + i + '" ' + (done ? 'disabled' : '') + '>' + esc(x) + '</button>').join('') + '</div>';
    if (kind === 'hotspot') html += '<section class="explore"><p>🧭 Zeig den richtigen Ort! <small>Señala el lugar correcto.</small></p><div class="explore-map">' + t[5].map((x, i) => '<button class="explore-place place-' + i + '" data-answer="' + i + '" ' + (done ? 'disabled' : '') + '><span class="place-marker">' + (i + 1) + '</span><span>' + esc(x) + '</span></button>').join('') + '</div></section>';
    if (kind === 'budget') {
      const prices = t[8], limit = t[9], sum = selection.reduce((a, i) => a + prices[i], 0);
      html += '<section class="budget-lab"><h4>🛒 Mein Einkaufswagen · Mi carrito</h4><p>💰 ' + limit + ' € zur Verfügung · Presupuesto</p><div class="budget-items">' + t[5].map((x, i) => '<button data-budget="' + i + '" class="' + (selection.includes(i) ? 'picked' : '') + '" ' + (done ? 'disabled' : '') + '>' + esc(x) + '</button>').join('') + '</div><div class="budget-total">🛍️ ' + (selection.length ? selection.map(i => esc(t[5][i])).join(' + ') : 'Noch leer') + '<strong> ' + sum + ' € / ' + limit + ' €</strong>' + (sum > limit ? ' ⚠️ Zu teuer!' : '') + '</div><button data-budget-check="1" ' + (!selection.length || done ? 'disabled' : '') + '>Bezahlen! <small>Pagar y comprobar</small></button></section>';
    }
    if (kind === 'kit') html += '<section class="kit-lab"><p>🎒 Wähle zwei passende Gegenstände! <small>Elige dos objetos adecuados.</small></p><div class="kit-scene"><div class="kit-target">' + (id === 11 ? '🤖' : '🎒') + '<small>' + (id === 11 ? 'Roboter' : 'Rucksack') + '</small><div class="kit-slots">' + (selection.map(i => '<span class="kit-item">' + esc(t[5][i]) + '</span>').join('') || '<span class="kit-empty">? + ?</span>') + '</div></div></div><div class="kit-options">' + t[5].map((x, i) => '<button data-kit="' + i + '" class="' + (selection.includes(i) ? 'picked' : '') + '" ' + (done ? 'disabled' : '') + '>' + esc(x) + '</button>').join('') + '</div><button data-kit-check="1" ' + (selection.length !== 2 || done ? 'disabled' : '') + '>Fertig! <small>Comprobar equipo</small></button></section>';
    if (kind === 'mix') html += '<section class="mix-lab"><p>🧪 Wähle genau zwei Farben! <small>Elige dos colores.</small></p><div class="mix-choices">' + t[5].map((x, i) => '<button data-mix="' + i + '" class="' + (selection.includes(i) ? 'picked' : '') + '" ' + (done ? 'disabled' : '') + '>' + esc(x) + '</button>').join('') + '</div><div class="mix-result">' + (selection.length === 2 ? '🔬 Zwei Farben bereit!' : '⚗️ + ⚗️ = ❓') + '</div><button data-mix-check="1" ' + (selection.length !== 2 || done ? 'disabled' : '') + '>Mischen! <small>Mezclar</small></button></section>';
    if (kind === 'sort') {
      const bins = t[8];
      html += '<section class="sort-lab"><p>🧩 Wähle eine Karte und dann eine Kategorie! <small>Clasifica cada tarjeta.</small></p><div class="sort-pool">' + t[5].map((x, i) => sortAssignments[i] === undefined ? '<button draggable="true" data-sort-item="' + i + '" class="' + (sortActive === i ? 'picked' : '') + '">' + esc(x) + '</button>' : '').join('') + '</div><div class="sort-bins">' + bins.map((x, i) => '<div class="sort-bin" data-drop-bin="' + i + '"><button data-sort-bin="' + i + '" ' + (done ? 'disabled' : '') + '>' + esc(x) + '</button><div class="sort-items">' + Object.entries(sortAssignments).filter(([k, v]) => v === i).map(([k]) => '<button data-sort-item="' + k + '" class="sort-card">' + esc(t[5][Number(k)]) + ' ✕</button>').join('') + '</div></div>').join('') + '</div><button data-sort-check="1" ' + (Object.keys(sortAssignments).length !== t[5].length || done ? 'disabled' : '') + '>Prüfen <small>Comprobar</small></button></section>';
    }
    if (kind === 'questionmatch') html += '<section class="question-match"><p>👑 Verbinde jede Situation mit dem passenden Fragewort.</p>' + t[8].map((sc, i) => '<div class="question-row"><strong>' + esc(sc) + '</strong><div class="question-words">' + t[5].map((w, j) => '<button data-question-row="' + i + '" data-question-word="' + j + '" class="' + (selection[i] === j ? 'picked' : '') + '" ' + (done ? 'disabled' : '') + '>' + esc(w) + '</button>').join('') + '</div></div>').join('') + '<button data-question-check="1" ' + (t[8].some((_, i) => selection[i] === undefined) || done ? 'disabled' : '') + '>🔑 Prüfen</button></section>';
    if (kind === 'order') html += '<div class="sentence">' + (selection.map((x, i) => '<button data-remove="' + i + '">' + esc(t[5][x]) + ' ✕</button>').join('') || '…') + '</div><div class="options">' + t[5].map((x, i) => '<button data-token="' + i + '" ' + (selection.includes(i) || done ? 'disabled' : '') + '>' + esc(x) + '</button>').join('') + '</div><button data-check="1" ' + (done ? 'disabled' : '') + '>Prüfen <small>Comprobar</small></button>';

    if (kind === 'oral' || kind === 'dialogue') {
      html += '<div class="oral" style="border:2px solid #93c5fd;">' +
        '<strong>🎤 Sprich laut! · ¡Practica hablando!</strong>' +
'En clase lo valida tu profesora. Si estás practicando solo en casa, graba tu voz para escucharte y luego marca la actividad:' +
'' +
'' + (isRecording ? '⏹️ Detener grabación' : '🎙️ Grabar mi voz') + '' +
(recordedUrl ? '' : '') +
'' +
'';
}
if (ready && kind === 'dialogue') html += 'Jetzt frag laut! · Ahora haz la pregunta en voz alta.';
const canSelfValidate = (kind === 'oral') || (kind === 'dialogue' && ready);
html += '' +
'💡 Tipp Pista' +
((kind === 'oral' || kind === 'dialogue') ? '<button data-validate="1" ' + (done || (kind === 'dialogue' && !ready) ? 'disabled' : '') + '>' + (teacher ? '✅ Validar (Profesora)' : '🏠 ¡Ya lo practiqué en voz alta!') + '' : '') +
'';
if (hint) {
const tipText = hint === 1 ? 'Hör noch einmal zu und schau auf die Szene. · Escucha y mira la escena.' :
hint === 2 ? 'Achte auf das Verb und die Schlüsselwörter. · Fíjate en el verbo y las palabras clave.' :
'Modelo en alemán: ' + esc(t[4]);
html += '' + tipText + '';
}
if (notice) html += '' + esc(notice) + '';
if (event) html += '' + esc(event) + '';
html += '' +
'<button data-prev="1" ' + (state.step === 0 ? 'disabled' : '') + '>← Zurück Atrás' +
'<button data-next="1" ' + (state.step === m.tasks.length - 1 ? 'disabled' : '') + '>Weiter → Siguiente' +
'';
$('content').innerHTML = html;
$('teacher').hidden = !teacher;
$('teacher-script').textContent = typeof t[7] === 'string' ? t[7] : '';
$('teacher-toggle').setAttribute('aria-expanded', String(teacher));
}
document.addEventListener('click', e => {
const b = e.target.closest('button');
if (!b) return;
const d = b.dataset;
if (d.go !== undefined) return go(Number(d.go));
if (d.prev) return go(state.step - 1);
if (d.next) return go(state.step + 1);
if (d.say) return speak(d.say, false);
if (d.slow) return speak(d.slow, true);
if (d.record) return toggleRecord();
if (d.hint) { hint = Math.min(3, hint + 1); return render(); }
if (d.transcript) { hint = Math.max(2, hint); return render(); }
if (d.token !== undefined) { selection.push(Number(d.token)); return render(); }
if (d.remove !== undefined) { selection.splice(Number(d.remove), 1); return render(); }
if (d.budget !== undefined) { const n = Number(d.budget); selection = selection.includes(n) ? selection.filter(x => x !== n) : [...selection, n]; notice = ''; return render(); }
if (d.budgetCheck) {
const t = m.tasks[state.step], sum = selection.reduce((a, i) => a + t[8][i], 0);
const ok = selection.length === t[6].length && selection.slice().sort((a, b) => a - b).join(',') === t[6].slice().sort((a, b) => a - b).join(',');
if (ok && sum <= t[9]) return finish();
notice = sum > t[9] ? 'Zu teuer! · Superaste el presupuesto.' : 'Revisa los objetos elegidos y vuelve a escuchar.';
return render();
}
if (d.kit !== undefined) { const n = Number(d.kit); selection = selection.includes(n) ? selection.filter(x => x !== n) : selection.length < 2 ? [...selection, n] : [selection[1], n]; notice = ''; return render(); }
if (d.kitCheck) {
const t = m.tasks[state.step], ok = selection.length === 2 && selection.slice().sort((a, b) => a - b).join(',') === t[6].slice().sort((a, b) => a - b).join(',');
if (ok) return finish();
notice = 'Estos dos objetos aún no coinciden. Revisa la pista de audio.';
return render();
}
if (d.mix !== undefined) { const n = Number(d.mix); selection = selection.includes(n) ? selection.filter(x => x !== n) : selection.length < 2 ? [...selection, n] : [selection[1], n]; notice = ''; return render(); }
if (d.mixCheck) {
const t = m.tasks[state.step], ok = selection.length === 2 && selection.slice().sort().join(',') === t[6].slice().sort().join(',');
if (ok) return finish();
notice = 'La mezcla no funciona; prueba otra combinación de colores.';
return render();
}
if (d.sortItem !== undefined) { if (state.done.includes(state.step)) return; const n = Number(d.sortItem); if (sortAssignments[n] !== undefined) delete sortAssignments[n]; sortActive = n; notice = ''; return render(); }
if (d.sortBin !== undefined) { if (sortActive === null || state.done.includes(state.step)) return; sortAssignments[sortActive] = Number(d.sortBin); sortActive = null; notice = ''; return render(); }
if (d.sortCheck) {
const t = m.tasks[state.step], wrong = t[6].map((expected, i) => sortAssignments[i] === expected ? null : i).filter(x => x !== null);
if (!wrong.length) return finish();
notice = wrong.length + ' tarjeta(s) por revisar. Escucha de nuevo.';
return render();
}
if (d.questionRow !== undefined) { selection[Number(d.questionRow)] = Number(d.questionWord); notice = ''; return render(); }
if (d.questionCheck) {
const t = m.tasks[state.step], wrong = t[6].filter((v, i) => selection[i] !== v).length;
if (!wrong) return finish();
notice = 'Revisa las preguntas (' + wrong + ' por corregir).';
return render();
}
if (d.check) {
const t = m.tasks[state.step];
if (selection.map(i => t[5][i]).join('|') === t[6].join('|')) finish();
else { notice = 'Revisa el verbo y el orden de las palabras.'; render(); }
return;
}
if (d.answer !== undefined) {
const t = m.tasks[state.step], ok = Number(d.answer) === t[6];
if (!ok) { notice = 'Esa respuesta todavía no corresponde. Escucha de nuevo.'; return render(); }
if (t[0] === 'dialogue') { ready = true; notice = 'Gut! Ahora haz la pregunta en voz alta.'; return render(); }
return finish();
}
if (d.validate) {
const t = m.tasks[state.step];
if (t[0] === 'oral' || (t[0] === 'dialogue' && ready)) return finish();
}
if (b.id === 'teacher-toggle') { teacher = !teacher; return render(); }
if (b.id === 'save') { const saved = save(true); notice = saved ? 'Gespeichert · Guardado' : 'Ohne Speichern'; return render(); }
if (b.id === 'reset') {
if (!teacher) return;
state = AventuraCore.newState();
if (mode !== 'off') try { localStorage.removeItem(key); } catch (e) {}
return go(0);
}
});
document.addEventListener('dragstart', e => { const el = e.target.closest('[data-sort-item]'); if (el && e.dataTransfer) { e.dataTransfer.setData('text/plain', el.dataset.sortItem); e.dataTransfer.effectAllowed = 'move'; } });
document.addEventListener('dragover', e => { if (e.target.closest('[data-drop-bin]')) e.preventDefault(); });
document.addEventListener('drop', e => {
const bin = e.target.closest('[data-drop-bin]');
if (!bin || !e.dataTransfer) return;
e.preventDefault();
const raw = e.dataTransfer.getData('text/plain');
if (!/^\d+$/.test(raw) || state.done.includes(state.step)) return;
const n = Number(raw);
if (n < 0 || n >= m.tasks[state.step][5].length) return;
sortAssignments[n] = Number(bin.dataset.dropBin);
sortActive = null; notice = ''; render();
});
$('mode').addEventListener('change', e => {
mode = e.target.value;
try { localStorage.setItem(key + '_mode', mode); } catch (err) {}
if (mode === 'auto') save(true);
render();
});
if (window.speechSynthesis) speechSynthesis.onvoiceschanged = () => {};
render();
})();
