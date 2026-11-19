(function() {
  'use strict';
  const id = Number(document.body.dataset.mission || 6);
  const mission = window.DEUTSCH_MISSIONS && window.DEUTSCH_MISSIONS[id];
  if (!mission) return;

  // 1. ESTILOS BLINDADOS PARA BOTONES, GRABADORA Y ENTDECKER-BOX
  const style = document.createElement('style');
  style.textContent =
    '#content .actions { display: flex !important; flex-wrap: wrap !important; gap: 12px !important; margin: 18px 0 !important; align-items: center !important; clear: both !important; }' +
    '#content .footer { display: flex !important; justify-content: space-between !important; gap: 16px !important; margin-top: 26px !important; padding-top: 16px !important; border-top: 2px dashed #cbd5e1 !important; clear: both !important; }' +
    '#content button[data-check] { display: inline-block !important; margin: 14px 0 !important; background: #10b981 !important; color: white !important; padding: 10px 20px !important; border-radius: 12px !important; font-weight: 800 !important; }' +
    '.rec-bar { display: flex !important; flex-wrap: wrap !important; align-items: center !important; gap: 10px !important; background: #f0f9ff !important; border: 2px solid #7dd3fc !important; padding: 10px 14px !important; border-radius: 14px !important; margin: 16px 0 !important; }' +
    '.rec-bar button { min-height: 40px !important; padding: 8px 14px !important; font-size: 0.9rem !important; color: white !important; border-radius: 10px !important; border: none !important; cursor: pointer !important; font-weight: 800 !important; }';
  document.head.appendChild(style);

  // 2. REGLAS GRAMATICALES PROGRESIVAS POR MUNDO (A1 COMPLETO)
  const GRAMMAR_PILLS = {
    1: {
      title: 'Mundo 1 · Verbos y Artículos (der / die / das)',
      rule: 'El verbo siempre va en <b>2.ª posición</b>: <i>Ich <b>heiße</b> Felix.</i><br>Colores: <span style="color:#2563eb;font-weight:800">der (azul)</span> · <span style="color:#dc2626;font-weight:800">die (rojo)</span> · <span style="color:#16a34a;font-weight:800">das (verde)</span>.'
    },
    2: {
      title: 'Mundo 2 · Preguntas con W-Fragen',
      rule: 'La pregunta va <b>primero</b> y el verbo va en <b>2.ª posición</b>:<br>• <b>Wer</b> isst? (¿Quién?) · <b>Was</b> trinkt er? (¿Qué?)<br>• <b>Wo</b> ist es? (¿Dónde?) · <b>Wie viel</b> kostet das? (¿Cuánto?)'
    },
    3: {
      title: 'Mundo 3 · Acusativo, Negación y Verbos Fuertes',
      rule: '• <b>Acusativo:</b> Solo cambia masculino (<span style="color:#2563eb;font-weight:800">der -> den / einen</span>): <i>Ich habe <b>einen</b> Roboter.</i><br>• <b>Negación:</b> <i>kein / keine / keinen</i> para sustantivos.<br>• <b>Cambio vocálico:</b> <i>er <b>liest</b>, er <b>sieht</b>, er <b>spricht</b>.</i>'
    },
    4: {
      title: 'Mundo 4 · Tiempo, Transporte y Calendario',
      rule: '• <b>Días:</b> <i><b>am</b> Montag</i> · <b>Meses:</b> <i><b>im</b> Juli</i> · <b>Horas:</b> <i><b>um</b> 8 Uhr</i>.<br>• <b>Transporte:</b> <i><b>mit dem</b> Zug / Bus</i> (con el tren / autobús).'
    },
    5: {
      title: 'Mundo 5 · Lugar, Verbos Modales y Cortesía',
      rule: '• <b>Modal <i>können</i>:</b> El segundo verbo va al final: <i><b>Können</b> Sie das Tor <b>öffnen</b>?</i><br>• <b>Cortesía:</b> <i>Sie</i> (usted) siempre con mayúscula.'
    }
  };

  // 3. OBJETIVOS DE CADA MISIÓN EN LENGUAJE PARA NIÑO DE 10 AÑOS
  const KID_GOALS = {
    1: '🎯 Tu reto: Presentarte en alemán y ayudar a Félix a encontrar su brújula.',
    2: '🎯 Tu reto: Seguir las pistas del mapa usando izquierda, derecha y centro.',
    3: '🎯 Tu reto: Preparar la mochila usando ein, eine y einen en acusativo.',
    4: '🎯 Tu reto: Devolver los colores al bosque describiendo objetos.',
    5: '🎯 Tu reto: Superar las pruebas de movimiento del guardián.',
    6: '🎯 Tu reto: Descubrir quién come y bebe qué en el banquete (Wer / Was).',
    7: '🎯 Tu reto: Encontrar las habitaciones del castillo preguntando con Wo.',
    8: '🎯 Tu reto: Comprar en el mercado del castillo contando euros en alemán.',
    9: '🎯 Tu reto: Reparar el gran reloj diciendo las horas y momentos del día.',
    10: '🎯 Tu reto: Resolver el acertijo final de la reina combinando W-Fragen.',
    11: '🎯 Tu reto: Reparar el robot pidiendo las piezas en acusativo (einen/eine/ein).',
    12: '🎯 Tu reto: Clasificar los experimentos secretos usando kein y keine.',
    13: '🎯 Tu reto: Descifrar el código de las máquinas con números hasta 100.',
    14: '🎯 Tu reto: Recuperar los datos usando verbos irregulares (liest, sieht, spricht).',
    15: '🎯 Tu reto: Superar el gran acertijo del laboratorio combinando todo lo aprendido.',
    16: '🎯 Tu reto: Calmar el torbellino describiendo el clima en alemán.',
    17: '🎯 Tu reto: Viajar al pasado usando los medios de transporte (mit dem Zug).',
    18: '🎯 Tu reto: Orientarte en la ciudad del futuro preguntando Wohin? (¿Adónde?).',
    19: '🎯 Tu reto: Arreglar el calendario roto con días de la semana y meses.',
    20: '🎯 Tu reto: Abrir el último portal temporal combinando tiempo, clima y lugar.',
    21: '🎯 Tu reto: Regresar al bosque usando preposiciones de lugar (auf, unter, neben).',
    22: '🎯 Tu reto: Responder al interrogatorio maestro del zorro con todas las W-Fragen.',
    23: '🎯 Tu reto: Hacer una visita cortés usando können y el trato formal Sie.',
    24: '🎯 Tu reto: Completar la aventura final demostrando todo tu alemán A1.'
  };
  const worldNum = id <= 5 ? 1 : id <= 10 ? 2 : id <= 15 ? 3 : id <= 20 ? 4 : 5;
  const grammar = GRAMMAR_PILLS[worldNum];

  // 4. EXTRAER VOCABULARIO CON CÓDIGO DE COLORES (DER/DIE/DAS)
  function extractVocab() {
    const words = [], seen = new Set();
    const regex = /(?<!\b(?:in|auf|an|unter|über|vor|hinter|neben|zwischen|bei|mit|nach|seit|von|zu|aus)\s)\b(der|die|das|ein|eine|einen)\s+([A-ZÄÖÜ][a-zäöüß]+)/g;
    mission.tasks.forEach(t => {
      const text = String(t.at(4) || '');
      let match;
      while ((match = regex.exec(text)) !== null) {
        const art = match.at(1).toLowerCase(), noun = match.at(2), key = art + ' ' + noun;
        if (!seen.has(key) && words.length < 10) {
          seen.add(key);
          const color = (art === 'der' || art === 'einen') ? '#2563eb' : (art === 'die' || art === 'eine') ? '#dc2626' : '#16a34a';
          words.push({ full: match.at(1) + ' ' + noun, color: color });
        }
      }
    });
    return words;
  }

  // 5. VOZ ALEMANA NATURAL + MODO LENTO
  window.speakPlus = function(text, slow) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = slow ? 0.62 : 0.9;
    const voices = speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith('de'));
    const best = voices.find(v => /natural|google|katja|conrad|amala/i.test(v.name)) || voices.at(0);
    if (best) u.voice = best;
    speechSynthesis.speak(u);
  };

  // 6. GRABADORA DE VOZ INTEGRADA (PARA CASA Y CLASE)
  let recorder = null, chunks = [], isRec = false;
  window.toggleVoiceRec = async function(btn) {
    const box = btn.closest('.rec-bar');
    if (isRec && recorder) {
      recorder.stop();
      isRec = false;
      btn.textContent = '🎙️ Grabar mi voz';
      btn.style.background = '#0284c7';
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunks = [];
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
      recorder.onstop = () => {
        const url = URL.createObjectURL(new Blob(chunks, { type: 'audio/webm' }));
        stream.getTracks().forEach(tr => tr.stop());
        let audio = box.querySelector('audio');
        if (!audio) {
          audio = document.createElement('audio');
          audio.controls = true;
          audio.style.height = '36px';
          box.appendChild(audio);
        }
        audio.src = url;
      };
      recorder.start();
      isRec = true;
      btn.textContent = '⏹️ Detener';
      btn.style.background = '#ef4444';
    } catch (e) {
      alert('No se pudo activar el micrófono. Revisa los permisos del navegador.');
    }
  };

  // 7. CONSTRUIR EL OBJETIVO Y LA ENTDECKER-BOX SIEMPRE VISIBLE
    const EXTRA_VOCAB = {
    1: [['der Weg', 'el camino', 'm'], ['die Freundschaft', 'la amistad', 'f'], ['das Abenteuer', 'la aventura', 'n'], ['suchen', 'buscar', 'v'], ['finden', 'encontrar', 'v']],
    2: [['der Norden', 'el norte', 'm'], ['die Richtung', 'la dirección', 'f'], ['das Ziel', 'la meta', 'n'], ['gehen', 'ir / caminar', 'v'], ['zeigen', 'mostrar', 'v']],
    3: [['der Stift', 'el lápiz', 'm'], ['die Flasche', 'la botella', 'f'], ['das Heft', 'el cuaderno', 'n'], ['packen', 'empacar', 'v'], ['brauchen', 'necesitar', 'v']],
    4: [['der Pinsel', 'el pincel', 'm'], ['die Farbe', 'el color', 'f'], ['das Bild', 'el cuadro', 'n'], ['malen', 'pintar', 'v'], ['mischen', 'mezclar', 'v']],
    5: [['der Schritt', 'el paso', 'm'], ['die Bewegung', 'el movimiento', 'f'], ['das Spiel', 'el juego', 'n'], ['laufen', 'correr', 'v'], ['springen', 'saltar', 'v']],
    6: [['der Hunger', 'el hambre', 'm'], ['die Gabel', 'el tenedor', 'f'], ['das Messer', 'el cuchillo', 'n'], ['essen', 'comer', 'v'], ['trinken', 'beber', 'v']],
    7: [['der Garten', 'el jardín', 'm'], ['die Treppe', 'la escalera', 'f'], ['das Dach', 'el techo', 'n'], ['wohnen', 'vivir', 'v'], ['schlafen', 'dormir', 'v']],
    8: [['der Preis', 'el precio', 'm'], ['die Tasche', 'la bolsa', 'f'], ['das Geld', 'el dinero', 'n'], ['kaufen', 'comprar', 'v'], ['kosten', 'costar', 'v']],
    9: [['der Morgen', 'la mañana', 'm'], ['die Stunde', 'la hora', 'f'], ['das Viertel', 'el cuarto', 'n'], ['warten', 'esperar', 'v'], ['beginnen', 'empezar', 'v']],
    10: [['der König', 'el rey', 'm'], ['die Antwort', 'la respuesta', 'f'], ['das Rätsel', 'el acertijo', 'n'], ['fragen', 'preguntar', 'v'], ['wissen', 'saber', 'v']],
    11: [['der Knopf', 'el botón', 'm'], ['die Schraube', 'el tornillo', 'f'], ['das Werkzeug', 'la herramienta', 'n'], ['reparieren', 'reparar', 'v'], ['bauen', 'construir', 'v']],
    12: [['der Versuch', 'el experimento', 'm'], ['die Mischung', 'la mezcla', 'f'], ['das Glas', 'el vaso / frasco', 'n'], ['prüfen', 'comprobar', 'v'], ['ordnen', 'ordenar', 'v']],
    13: [['der Fehler', 'el error', 'm'], ['die Zahl', 'el número', 'f'], ['das Licht', 'el luz', 'n'], ['rechnen', 'calcular', 'v'], ['schreiben', 'escribir', 'v']],
    14: [['der Text', 'el texto', 'm'], ['die Nachricht', 'la mensaje', 'f'], ['das Wort', 'la palabra', 'n'], ['lesen', 'leer', 'v'], ['sprechen', 'hablar', 'v']],
    15: [['der Erfolg', 'el éxito', 'm'], ['die Lösung', 'la solución', 'f'], ['das Geheimnis', 'el secreto', 'n'], ['verstehen', 'entender', 'v'], ['lösen', 'resolver', 'v']],
    16: [['der Himmel', 'el cielo', 'm'], ['die Wolke', 'la nube', 'f'], ['das Gewitter', 'la tormenta', 'n'], ['regnen', 'llover', 'v'], ['scheinen', 'brillar', 'v']],
    17: [['der Bahnhof', 'la estación', 'm'], ['die Reise', 'el viaje', 'f'], ['das Gleis', 'el andén', 'n'], ['fahren', 'viajar / ir', 'v'], ['ankommen', 'llegar', 'v']],
    18: [['der Platz', 'la plaza', 'm'], ['die Straße', 'la calle', 'f'], ['das Gebäude', 'el edificio', 'n'], ['fliegen', 'volar', 'v'], ['besuchen', 'visitar', 'v']],
    19: [['der Monat', 'el mes', 'm'], ['die Woche', 'la semana', 'f'], ['das Jahr', 'el año', 'n'], ['feiern', 'celebrar', 'v'], ['planen', 'planear', 'v']],
    20: [['der Moment', 'el momento', 'm'], ['die Zeit', 'el tiempo', 'f'], ['das Tor', 'el portal', 'n'], ['öffnen', 'abrir', 'v'], ['schließen', 'cerrar', 'v']],
    21: [['der Stein', 'la piedra', 'm'], ['die Brücke', 'el puente', 'f'], ['das Blatt', 'la hoja', 'n'], ['stehen', 'estar de pie', 'v'], ['liegen', 'estar tumbado', 'v']],
    22: [['der Grund', 'el motivo', 'm'], ['die Idee', 'la idea', 'f'], ['das Gespräch', 'la charla', 'n'], ['erklären', 'explicar', 'v'], ['erzählen', 'contar', 'v']],
    23: [['der Gast', 'el invitado', 'm'], ['die Einladung', 'la invitación', 'f'], ['das Geschenk', 'el regalo', 'n'], ['helfen', 'ayudar', 'v'], ['danken', 'agradecer', 'v']],
    24: [['der Sieger', 'el ganador', 'm'], ['die Erinnerung', 'el recuerdo', 'f'], ['das Ende', 'el final', 'n'], ['schaffen', 'lograr', 'v'], ['verabschieden', 'despedirse', 'v']]
  };

  function initSequenceUI() {
    const aside = document.querySelector('aside');
    const story = document.getElementById('intro');
    if (!aside || !story) return;

    if (!document.getElementById('kid-goal-banner')) {
      const goalDiv = document.createElement('div');
      goalDiv.id = 'kid-goal-banner';
      goalDiv.style.cssText = 'background:#dbeafe;border:2px solid #3b82f6;color:#1e3a8a;padding:12px 16px;border-radius:16px;font-weight:800;margin-bottom:14px;font-size:1rem;';
      goalDiv.textContent = KID_GOALS[id] || ('🎯 Tu reto hoy: Completar "' + mission.es + '" en alemán.');
      story.parentNode.insertBefore(goalDiv, story);

      const pad = String(id).padStart(2, '0');
      const hubBar = document.createElement('div');
      hubBar.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;';
      hubBar.innerHTML =
        '<a href="tarjetas-interactivas.html?m=' + id + '" style="background:#8b5cf6;color:white;padding:8px 14px;border-radius:12px;text-decoration:none;font-weight:800;font-size:0.9rem;">🃏 Tarjetas de la Misión ' + id + '</a>' +
        '<a href="TABLERO_VISUAL_MISION_' + pad + '.pdf" target="_blank" style="background:#0ea5e9;color:white;padding:8px 14px;border-radius:12px;text-decoration:none;font-weight:800;font-size:0.9rem;">🎨 Tablero Visual (PDF)</a>' +
        '<a href="Mision_' + pad + '.pdf" download style="background:#f97316;color:white;padding:8px 14px;border-radius:12px;text-decoration:none;font-weight:800;font-size:0.9rem;">📄 Ficha de Ejercicios (PDF)</a>';
      story.parentNode.insertBefore(hubBar, story);
    }

    if (!document.getElementById('entdecker-box-fixed')) {
      const vocabList = extractVocab();
      const extras = EXTRA_VOCAB[id] || [];
      const typeColor = { m: '#2563eb', f: '#dc2626', n: '#16a34a', v: '#334155' };

      const box = document.createElement('div');
      box.id = 'entdecker-box-fixed';
      box.style.cssText = 'background:#f8fafc;border:3px solid #8b5cf6;border-radius:18px;padding:14px;margin-bottom:16px;';
      box.innerHTML =
        '<div style="font-family:Fredoka,sans-serif;color:#5b21b6;font-size:1.1rem;margin-bottom:8px;">🧭 Entdecker-Box <small style="display:block;font-family:Nunito,sans-serif;font-size:0.78rem;color:#64748b;">Tu ayuda siempre disponible</small></div>' +
        '<div style="background:#f3e8ff;padding:10px;border-radius:12px;font-size:0.85rem;margin-bottom:10px;line-height:1.4;">' +
          '<strong style="color:#6d28d9;display:block;margin-bottom:4px;">💡 ' + grammar.title + '</strong>' + grammar.rule +
        '</div>' +
        '<strong style="font-size:0.85rem;color:#334155;display:block;margin-bottom:6px;">🔊 Palabras de la misión:</strong>' +
        '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">' +
          vocabList.map(w => '<button type="button" onclick="speakPlus(\'' + w.full.replace(/'/g, "\\'") + '\', false)" style="background:white;color:' + w.color + ';border:2px solid ' + w.color + ';padding:4px 8px;border-radius:10px;font-size:0.8rem;min-height:auto;font-weight:800;">🔊 ' + w.full + '</button>').join('') +
        '</div>' +
        '<strong style="font-size:0.85rem;color:#0f172a;display:block;margin-bottom:6px;">✨ 5 Palabras Nuevas (haz clic para oír):</strong>' +
        '<div style="display:flex;flex-direction:column;gap:5px;">' +
          extras.map(([de, es, tp]) => {
            const c = typeColor[tp] || '#334155';
            const icon = tp === 'v' ? '⚡' : '🔊';
            const tag = tp === 'v' ? 'acción' : tp === 'm' ? 'der' : tp === 'f' ? 'die' : 'das';
            return '<button type="button" onclick="speakPlus(\'' + de.replace(/'/g, "\\'") + '\', false)" ' +
              'style="display:flex;justify-content:space-between;align-items:center;background:white;color:' + c + ';border:1.5px solid ' + c + ';padding:5px 10px;border-radius:10px;font-size:0.82rem;min-height:auto;font-weight:800;text-align:left;">' +
              '<span>' + icon + ' ' + de + '</span><span style="color:#64748b;font-weight:600;font-size:0.76rem;">' + es + ' (' + tag + ')</span></button>';
          }).join('') +
        '</div>';
      aside.insertBefore(box, aside.firstChild);
    }
  }


  // 8. ENRIQUECER CADA ACTIVIDAD (VIÑETA + AUDIO LENTO + GRABADORA + ESCRITURA)
  function enhanceStep() {
    const content = document.getElementById('content');
    if (!content) return;

    const slowBtns = content.querySelectorAll('[data-slow-plus]');
    if (slowBtns.length > 1) {
      for (let i = 1; i < slowBtns.length; i++) slowBtns[i].remove();
    }

    const scene = content.querySelector('.scene');
    if (scene && !scene.dataset.upgraded) {
      scene.dataset.upgraded = '1';
      scene.style.cssText = 'background:linear-gradient(135deg,#e0f2fe 0%,#fef9c3 100%);border:3px solid #38bdf8;border-radius:20px;padding:18px;margin:14px 0;text-align:center;';
    }

    const sayBtn = content.querySelector('[data-say]');
    if (sayBtn && !content.querySelector('[data-slow]') && !content.querySelector('[data-slow-plus]')) {
      const phrase = sayBtn.getAttribute('data-say');
      const slowBtn = document.createElement('button');
      slowBtn.type = 'button';
      slowBtn.className = 'secondary';
      slowBtn.setAttribute('data-slow-plus', '1');
      slowBtn.innerHTML = '🐢 Langsam <small>Despacio</small>';
      slowBtn.onclick = function() { window.speakPlus(phrase, true); };
      sayBtn.parentNode.insertBefore(slowBtn, sayBtn.nextSibling);
    }

    const footer = content.querySelector('.footer');
    if (footer && !content.querySelector('.rec-bar')) {
      const recDiv = document.createElement('div');
      recDiv.className = 'rec-bar';
      recDiv.innerHTML =
        '<button type="button" style="background:#0284c7;" onclick="toggleVoiceRec(this)">🎙️ Grabar mi voz</button>' +
        '<span style="font-size:0.85rem;color:#0369a1;font-weight:700;">Practica pronunciando en voz alta y escúchate</span>';
      footer.parentNode.insertBefore(recDiv, footer);
    }

    const optionsBox = content.querySelector('.options');
    const stepText = content.querySelector('.step');
    const stepNum = stepText ? parseInt(stepText.textContent.replace(/\D/g, ''), 10) : 1;
    if (optionsBox && stepNum % 3 === 0 && !content.querySelector('#write-challenge') && !optionsBox.querySelector('button[disabled]')) {
      const targetBtn = Array.from(optionsBox.querySelectorAll('button')).find(b => b.dataset.answer !== undefined);
      if (targetBtn) {
        optionsBox.style.display = 'none';
        const challenge = document.createElement('div');
        challenge.id = 'write-challenge';
        challenge.style.cssText = 'background:#f0fdf4;border:2px solid #86efac;border-radius:16px;padding:14px;margin:14px 0;';
        challenge.innerHTML =
          '<strong style="color:#166534;display:block;margin-bottom:6px;">✍️ Reto de Escritura (Práctica activa):</strong>' +
          '<input type="text" id="german-input" placeholder="Escribe la respuesta en alemán..." style="width:100%;margin-bottom:8px;padding:10px;border-radius:10px;border:2px solid #86efac;">' +
          '<div style="display:flex;gap:6px;margin-bottom:10px;">' +
            ['ä', 'ö', 'ü', 'ß'].map(ch => '<button type="button" class="secondary" style="min-height:36px;padding:4px 12px;" onclick="const i=document.getElementById(\'german-input\');i.value+=\'' + ch + '\';i.focus();">' + ch + '</button>').join('') +
          '</div>' +
          '<button type="button" id="check-write-btn" style="background:#16a34a;color:white;padding:8px 16px;border-radius:10px;border:none;font-weight:800;cursor:pointer;">✅ Comprobar</button> ' +
          '<button type="button" class="secondary" id="show-opts-btn">Ver opciones</button>';
        optionsBox.parentNode.insertBefore(challenge, optionsBox);

        document.getElementById('show-opts-btn').onclick = function() { challenge.remove(); optionsBox.style.display = 'grid'; };
        document.getElementById('check-write-btn').onclick = function() {
          const val = document.getElementById('german-input').value.trim().toLowerCase().replace(/[.!?]/g, '');
          const match = Array.from(optionsBox.querySelectorAll('button')).find(b => b.textContent.trim().toLowerCase().replace(/[.!?]/g, '') === val);
          if (match) match.click();
          else alert('Casi... Revisa tu Entdecker-Box a la derecha e inténtalo de nuevo.');
        };
      }
    }
  }

  initSequenceUI();
  enhanceStep();
  const contentEl = document.getElementById('content');
  if (contentEl) {
    const observer = new MutationObserver(() => {
      observer.disconnect();
      enhanceStep();
      observer.observe(contentEl, { childList: true });
    });
    observer.observe(contentEl, { childList: true });
  }
})();
