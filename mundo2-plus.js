(function() {
  'use strict';
  const id = Number(document.body.dataset.mission || 0);
  if (id < 6 || id > 10) return;

  // 1. TIPOGRAFÍA EDITORIAL (BALOO 2 + LEXEND) + PALETA 60-30-10
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://googleapis.com';
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.textContent =
    'body { font-family: "Lexend", sans-serif !important; background: #FAF8F5 !important; color: #2D3748 !important; }' +
    'h1, h2, h3, .comic-title, button { font-family: "Baloo 2", cursive !important; }' +
    '.world2-hero { position: relative; border-radius: 22px; overflow: hidden; margin-bottom: 16px; border: 3px solid #93C5FD; box-shadow: 0 6px 18px rgba(45,55,72,0.1); }' +
    '.world2-hero img { width: 100%; height: 175px; object-fit: cover; display: block; }' +
    '.world2-hero-caption { background: rgba(250,248,245,0.94); padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }' +
    '.felix-mentor-box { display: flex; align-items: center; gap: 14px; background: #FEF9C3; border: 2.5px solid #FACC15; border-radius: 20px; padding: 14px 16px; margin: 14px 0; }' +
    '.felix-mentor-box img { width: 78px; height: 78px; border-radius: 50%; object-fit: cover; border: 3px solid #F97316; background: #FAF8F5; flex-shrink: 0; }' +
    '.visual-board { background: #EBF5FB; border: 2px solid #93C5FD; border-radius: 18px; padding: 16px; margin: 16px 0; }' +
    '.visual-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(135px, 1fr)); gap: 10px; margin-top: 10px; }' +
    '.visual-card { background: #FAF8F5; border: 2px solid #CBD5E1; border-radius: 14px; padding: 10px; text-align: center; cursor: pointer; transition: transform 0.15s; }' +
    '.visual-card:hover { transform: translateY(-2px); border-color: #F97316; }';
  document.head.appendChild(style);

  // 2. GUÍA DE FÉLIX EL ZORRO (REGLA FÁCIL + NARRATIVA W-FRAGEN)
  const FELIX_MENTOR = {
    6: {
      story: '📖 Historia: El Cocinero prepara el banquete en el castillo. Félix investiga quién (Wer) come y qué (Was) bebe cada invitado.',
      tip: '¡Hola! Soy Félix 🦊. Usa <b>WER</b> para preguntar por personas (<i>Wer isst?</i>) y <b>WAS</b> para preguntar por comidas o bebidas (<i>Was trinkst du?</i>). ¡Vamos a practicarlo!'
    },
    7: {
      story: '📖 Historia: La Reina busca a todos por el castillo y la escuela. Félix usa su mapa para decir dónde (Wo) está cada uno.',
      tip: '¡Atención con <b>WO</b> (¿Dónde?)! En Dativo el artículo cambia:<br>🔵 <b>der</b> -> <b>im</b> (<i>im Park, im Garten</i>)<br>🟢 <b>das</b> -> <b>im</b> (<i>im Bad, im Klassenzimmer</i>)<br>🔴 <b>die</b> -> <b>in der</b> (<i>in der Küche, in der Schule</i>).'
    },
    8: {
      story: '📖 Historia: La Reina le da a Félix una lista de compras y 50 € para ir al Gran Mercado del Reino.',
      tip: 'Para preguntar el precio usa <b>Wie viel kostet...?</b> (1 cosa) o <b>Wie viel kosten...?</b> (varias cosas). ¡Suma bien tus 50 € para comprar toda la lista!'
    },
    9: {
      story: '📖 Historia: El Búho muestra la rutina diaria en el castillo para no llegar tarde a clase ni al entrenamiento.',
      tip: 'Decimos la hora exacta y luego los minutos seguidos:<br>⏰ <b>7:30</b> = <i>sieben Uhr dreißig</i><br>⏰ <b>8:15</b> = <i>acht Uhr fünfzehn</i><br>⏰ <b>16:30</b> = <i>sechzehn Uhr dreißig</i>.'
    },
    10: {
      story: '📖 Gran Final del Castillo: ¡Empieza el Banquete del Rey! Combina Wer, Was, Wo, Wann y Wie viel con la Carta Real.',
      tip: '¡Último reto del Mundo 2! Mira la <b>Königliche Speisekarte</b> (12 platos y bebidas), pregunta los precios y pide un menú completo sin pasarte de 35 €.'
    }
  };
  // 3. TABLEROS VISUALES INTERACTIVOS POR MISIÓN (ESTÍMULOS REALES PARA SPRECHEN Y SCHATZ)
  function renderVisualStimulus(container, missionId, stepNum) {
    if (container.querySelector('#w2-stimulus-board')) return;
    const board = document.createElement('div');
    board.id = 'w2-stimulus-board';
    board.className = 'visual-board';

    // MISIÓN 6: MESA DEL BANQUETE (8 ALIMENTOS Y BEBIDAS)
    if (missionId === 6) {
      const items = [
        ['🍲', 'die Suppe', 'la sopa'], ['🥖', 'das Brot', 'el pan'],
        ['🧀', 'der Käse', 'el queso'], ['🍎', 'der Apfel', 'la manzana'],
        ['💧', 'das Wasser', 'el agua'], ['🧃', 'der Apfelsaft', 'el jugo de manzana'],
        ['🥛', 'die Milch', 'la leche'], ['🍰', 'der Kuchen', 'el pastel']
      ];
      board.innerHTML =
        '<strong style="color:#1E40AF;font-size:1rem;">🍽️ Der Tisch im Schloss · Haz clic para escuchar y señalar:</strong>' +
        '<div class="visual-grid">' +
          items.map(it => '<div class="visual-card" onclick="speakPlus(\'' + it + '\', false)"><div style="font-size:2rem;">' + it + '</div><div style="font-weight:800;font-size:0.86rem;">' + it + '</div><div style="font-size:0.74rem;color:#64748B;">' + it + '</div></div>').join('') +
        '</div>';
    }

    // MISIÓN 7: PLANO DEL CASTILLO + BATERÍA DE 6 EJERCICIOS DE DATIVO (IM / IN DER)
    if (missionId === 7) {
      const rooms = [
        ['🍳', 'in der Küche', 'die Küche (f)'], ['🏫', 'in der Schule', 'die Schule (f)'],
        ['🌳', 'im Park', 'der Park (m)'], ['⚽', 'im Sportplatz', 'der Sportplatz (m)'],
        ['🛁', 'im Bad', 'das Bad (n)'], ['📚', 'im Klassenzimmer', 'das Klassenzimmer (n)']
      ];
      const drills = [
        ['Wo kocht der Koch? -> ___ Küche', 'in der'],
        ['Wo spielen die Kinder? -> ___ Park', 'im'],
        ['Wo lernen wir Deutsch? -> ___ Schule', 'in der'],
        ['Wo ist das Wasser? -> ___ Bad', 'im'],
        ['Wo ist der Lehrer? -> ___ Klassenzimmer', 'im'],
        ['Wo trainiert das Team? -> ___ Sportplatz', 'im']
      ];
      board.innerHTML =
        '<strong style="color:#1E40AF;font-size:1rem;">🏰 Plan des Schlosses · Toca cada lugar para oír el Dativo:</strong>' +
        '<div class="visual-grid">' +
          rooms.map(r => '<div class="visual-card" onclick="speakPlus(\'' + r + '\', false)"><div style="font-size:1.9rem;">' + r + '</div><div style="font-weight:800;font-size:0.86rem;">' + r + '</div><div style="font-size:0.74rem;color:#64748B;">' + r + '</div></div>').join('') +
        '</div>' +
        (stepNum >= 4 ? (
          '<div style="margin-top:14px;background:#FAF8F5;padding:12px;border-radius:14px;border:1.5px solid #93C5FD;">' +
            '<strong style="color:#1E40AF;font-size:0.9rem;display:block;margin-bottom:8px;">⚡ Entrenamiento rápido de Dativo (6 frases · im vs. in der):</strong>' +
            drills.map((d, idx) =>
              '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:6px 0;border-bottom:1px dashed #CBD5E1;font-size:0.85rem;">' +
                '<span>' + (idx + 1) + '. ' + d + '</span>' +
                '<div style="display:flex;gap:6px;">' +
                  '<button type="button" class="secondary" style="min-height:30px;padding:2px 10px;font-size:0.8rem;" onclick="this.style.background=(this.textContent===\'' + d + '\'?\'#DCFCE7\':\'#F3E8FF\')">im</button>' +
                  '<button type="button" class="secondary" style="min-height:30px;padding:2px 10px;font-size:0.8rem;" onclick="this.style.background=(this.textContent===\'' + d + '\'?\'#DCFCE7\':\'#F3E8FF\')">in der</button>' +
                '</div>' +
              '</div>'
            ).join('') +
          '</div>'
        ) : '');
    }

    // MISIÓN 8: GRAN MERCADO CON LISTA DE LA REINA Y PRESUPUESTO DE 50 €
    if (missionId === 8) {
      const market = [
        ['🎒', 'die Schultasche', 24], ['⚽', 'der Ball', 14], ['📕', 'das Buch', 12],
        ['✏️', 'der Bleistift', 3], ['📓', 'das Heft', 4], ['🍎', 'der Apfel', 2],
        ['🧀', 'der Käse', 8], ['🥖', 'das Brot', 5], ['🧃', 'der Apfelsaft', 6], ['🍰', 'der Kuchen', 11]
      ];
      let spent = 0;
      board.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
          '<strong style="color:#1E40AF;font-size:1rem;">🏪 Der große Markt · Presupuesto: 50 €</strong>' +
          '<span id="market-budget" style="background:#FEF9C3;border:2px solid #FACC15;padding:4px 12px;border-radius:99px;font-weight:800;font-size:0.88rem;">Gastado: 0 € / Restan: 50 €</span>' +
        '</div>' +
        '<div style="background:#FFFDF9;border:1.5px dashed #F97316;border-radius:12px;padding:8px 12px;margin-top:8px;font-size:0.84rem;">' +
          '📜 <b>Lista de la Reina (compra los 4 artículos sin pasarte de 50 €):</b> 1 mochila (<i>Schultasche</i>) + 1 pelota (<i>Ball</i>) + 1 queso (<i>Käse</i>) + 1 pan (<i>Brot</i>).' +
        '</div>' +
        '<div class="visual-grid">' +
          market.map(m =>
            '<div class="visual-card" data-price="' + m + '" data-name="' + m + '">' +
              '<div style="font-size:1.8rem;">' + m + '</div>' +
              '<div style="font-weight:800;font-size:0.84rem;">' + m + '</div>' +
              '<div style="color:#F97316;font-weight:800;font-size:0.9rem;">' + m + ' €</div>' +
            '</div>'
          ).join('') +
        '</div>';

      setTimeout(() => {
        board.querySelectorAll('.visual-card').forEach(c => {
          c.onclick = () => {
            const p = Number(c.dataset.price);
            const active = c.dataset.sel === '1';
            if (!active && spent + p > 50) { alert('¡Cuidado! Te pasas de los 50 € de la Reina.'); return; }
            c.dataset.sel = active ? '0' : '1';
            spent += active ? -p : p;
            c.style.background = active ? '#FAF8F5' : '#DCFCE7';
            c.style.borderColor = active ? '#CBD5E1' : '#22C55E';
            speakPlus(c.dataset.name + ', ' + p + ' Euro', false);
            const lbl = document.getElementById('market-budget');
            if (lbl) lbl.textContent = 'Gastado: ' + spent + ' € / Restan: ' + (50 - spent) + ' €';
          };
        });
      }, 50);
    }

    // MISIÓN 9: RUTINA DIARIA CON HORAS (UHR + MINUTOS, SIN HALB)
    if (missionId === 9) {
      const routine = [
        ['7:00', 'sieben Uhr', '🛏️ Aufstehen'],
        ['7:30', 'sieben Uhr dreißig', '🥣 Frühstück'],
        ['8:15', 'acht Uhr fünfzehn', '🏫 Schule'],
        ['13:00', 'dreizehn Uhr', '🍲 Mittagessen'],
        ['16:30', 'sechzehn Uhr dreißig', '⚽ Training'],
        ['20:00', 'zwanzig Uhr', '🌙 Schlafen']
      ];
      board.innerHTML =
        '<strong style="color:#1E40AF;font-size:1rem;">🕰️ Tagesablauf im Schloss · Haz clic para oír la hora exacta:</strong>' +
        '<div class="visual-grid">' +
          routine.map(r =>
            '<div class="visual-card" onclick="speakPlus(\'Es ist ' + r + '\', true)">' +
              '<div style="font-size:1.25rem;font-weight:800;color:#F97316;">⏰ ' + r + '</div>' +
              '<div style="font-weight:800;font-size:0.82rem;margin:4px 0;">' + r + '</div>' +
              '<div style="font-size:0.78rem;color:#475569;">' + r + '</div>' +
            '</div>'
          ).join('') +
        '</div>';
    }

    // MISIÓN 10: GRAN CARTA REAL DEL BANQUETE (12 PLATOS Y BEBIDAS + PRESUPUESTO 35 €)
    if (missionId === 10) {
      const menu = [
        ['🍲', 'die Suppe', 4], ['🍗', 'das Hähnchen', 9], ['🍝', 'die Nudeln', 7],
        ['🥗', 'der Salat', 5], ['🥖', 'das Brot', 3], ['🧀', 'der Käse', 6],
        ['🍎', 'der Apfel', 2], ['🍰', 'der Kuchen', 5], ['🍨', 'das Eis', 4],
        ['💧', 'das Wasser', 2], ['🧃', 'der Apfelsaft', 3], ['🥛', 'die Milch', 3]
      ];
      let bill = 0;
      board.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
          '<strong style="color:#1E40AF;font-size:1rem;">📜 Königliche Speisekarte · Elige tu menú (Máx. 35 €):</strong>' +
          '<span id="menu-total" style="background:#FEF9C3;border:2px solid #FACC15;padding:4px 12px;border-radius:99px;font-weight:800;font-size:0.88rem;">Pedido: 0 € / Presupuesto: 35 €</span>' +
        '</div>' +
        '<div class="visual-grid">' +
          menu.map(item =>
            '<div class="visual-card" data-price="' + item + '" data-name="' + item + '">' +
              '<div style="font-size:1.7rem;">' + item + '</div>' +
              '<div style="font-weight:800;font-size:0.82rem;">' + item + '</div>' +
              '<div style="color:#F97316;font-weight:800;font-size:0.88rem;">' + item + ' €</div>' +
            '</div>'
          ).join('') +
        '</div>';

      setTimeout(() => {
        board.querySelectorAll('.visual-card').forEach(c => {
          c.onclick = () => {
            const p = Number(c.dataset.price);
            const active = c.dataset.sel === '1';
            if (!active && bill + p > 35) { alert('¡El banquete no puede pasar de 35 €!'); return; }
            c.dataset.sel = active ? '0' : '1';
            bill += active ? -p : p;
            c.style.background = active ? '#FAF8F5' : '#DCFCE7';
            c.style.borderColor = active ? '#CBD5E1' : '#22C55E';
            speakPlus('Ich möchte ' + c.dataset.name + ', bitte.', false);
            const tot = document.getElementById('menu-total');
            if (tot) tot.textContent = 'Pedido: ' + bill + ' € / Presupuesto: 35 €';
          };
        });
      }, 50);
    }

    container.insertBefore(board, container.querySelector('.options') || container.querySelector('.footer'));
  }
  // 4. ACTIVAR ESCENARIO 2D (MUNDO2-CASTILLO.PNG) + MENTOR FÉLIX (FELIX-MENTOR.PNG)
  function initWorld2Hero() {
    const story = document.getElementById('intro');
    const guide = FELIX_MENTOR[id];
    if (!story || !guide || document.getElementById('world2-hero-banner')) return;

    const hero = document.createElement('div');
    hero.id = 'world2-hero-banner';
    hero.className = 'world2-hero';
    hero.innerHTML =
      '<img src="mundo2-castillo.png" alt="Das Königsschloss">' +
      '<div class="world2-hero-caption">' +
        '<strong style="color:#1E40AF;font-size:0.95rem;">🏰 Welt 2: Das Königsschloss · Misión ' + id + '</strong>' +
        '<span style="font-size:0.84rem;color:#475569;">' + guide.story + '</span>' +
      '</div>';
    story.parentNode.insertBefore(hero, story);

    const felixBox = document.createElement('div');
    felixBox.id = 'felix-mentor-card';
    felixBox.className = 'felix-mentor-box';
    felixBox.innerHTML =
      '<img src="felix-mentor.png" alt="Felix der Fuchs">' +
      '<div style="font-size:0.88rem;line-height:1.45;color:#2D3748;">' +
        '<strong style="color:#B45309;display:block;margin-bottom:3px;font-size:0.95rem;">🦊 Felix-Tipp (La regla fácil):</strong>' +
        guide.tip +
      '</div>';
    story.parentNode.insertBefore(felixBox, story);
  }

  // 5. LIMPIAR DIÁLOGOS (100% ALEMÁN SIN TRADUCCIONES INTRUSIVAS) Y ACTIVAR ESTÍMULOS VISUALES
  function upgradeWorld2Step() {
    const content = document.getElementById('content');
    if (!content) return;

    const stepText = content.querySelector('.step')?.textContent || 'Aufgabe 1';
    const matchStep = stepText.match(/Aufgabe\s+(\d+)/i);
    const stepNum = matchStep ? parseInt(matchStep.at(1), 10) : 1;

    // Eliminar traducciones entre paréntesis en nombres de personajes ("Der Koch (El cocinero)" -> "Der Koch")
    const bubble = content.querySelector('.comic-bubble');
    if (bubble) {
      const speaker = bubble.querySelector('div');
      if (speaker && speaker.textContent.includes('sagt:')) {
        speaker.textContent = speaker.textContent.replace(/\s*\([^)]+\)/g, '');
      }
      // Evitar enunciados que regalan la respuesta en Misión 8
      if (id === 8 && bubble.textContent.includes('Kaufe einen Apfel und einen Ball')) {
        bubble.innerHTML = bubble.innerHTML.replace(
          'Du hast sieben Euro. Kaufe einen Apfel und einen Ball!',
          'Du hast 50 Euro! Schau auf die Liste der Königin und kaufe alle vier Sachen.'
        );
      }
    }

    // Mostrar el Tablero Visual Interactivo en Pasos 2, 5, 7, 8, 9 y 10 (y siempre en Sprechen / Schatz)
    if ([2, 5, 7, 8, 9, 10].includes(stepNum)) {
      renderVisualStimulus(content, id, stepNum);
    }
  }

  initWorld2Hero();
  upgradeWorld2Step();

  const contentEl = document.getElementById('content');
  if (contentEl) {
    const obs = new MutationObserver(() => {
      obs.disconnect();
      upgradeWorld2Step();
      obs.observe(contentEl, { childList: true });
    });
    obs.observe(contentEl, { childList: true });
  }
})();
