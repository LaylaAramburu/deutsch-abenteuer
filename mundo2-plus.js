(function() {
  'use strict';
  const id = Number(document.body.dataset.mission || 0);
  if (id < 6 || id > 10) return;

  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://googleapis.com';
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.textContent =
    'body { font-family: "Lexend", sans-serif !important; background: #FAF8F5 !important; color: #2D3748 !important; }' +
    'h1, h2, h3, button { font-family: "Baloo 2", cursive !important; }' +
    '.w2-stage-header { display: flex; align-items: center; gap: 14px; background: linear-gradient(135deg, #EBF5FB 0%, #FEF9C3 100%); border: 2px solid #93C5FD; border-radius: 18px; padding: 10px 14px; margin-bottom: 12px; }' +
    '.w2-stage-castle { width: 120px; height: 76px; border-radius: 12px; object-fit: cover; border: 2px solid #93C5FD; flex-shrink: 0; }' +
    '.felix-inline-tip { display: flex; align-items: center; gap: 12px; background: #FEF9C3; border: 2px solid #FACC15; border-radius: 16px; padding: 10px 14px; margin: 10px 0; }' +
    '.felix-inline-tip img { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 2px solid #F97316; background: #FFFDF9; flex-shrink: 0; }' +
    '.visual-board { background: #EBF5FB; border: 2px solid #93C5FD; border-radius: 18px; padding: 14px; margin: 14px 0; }' +
    '.visual-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(125px, 1fr)); gap: 10px; margin-top: 10px; }' +
    '.visual-card { background: #FAF8F5; border: 2px solid #CBD5E1; border-radius: 14px; padding: 10px 8px; text-align: center; cursor: pointer; transition: transform 0.15s; }' +
    '.visual-card:hover { transform: translateY(-2px); border-color: #F97316; }' +
    '.royal-table-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: linear-gradient(180deg, #FEF9C3 0%, #FAF8F5 100%); border: 2.5px solid #FACC15; border-radius: 18px; padding: 18px; margin: 14px 0; }' +
    '.royal-table-grid button { background: #FFFDF9 !important; color: #2D3748 !important; border: 2px solid #93C5FD !important; border-radius: 14px !important; padding: 14px 10px !important; font-size: 0.95rem !important; font-weight: 800 !important; box-shadow: 0 3px 0 #CBD5E1; }';
  document.head.appendChild(style);

  const FELIX_MENTOR = {
    6: {
      story: 'El Cocinero prepara el banquete real. Descubre quién (Wer) come y qué (Was) bebe cada invitado.',
      tip: '<b>WER</b> = personas (<i>Wer isst?</i>) · <b>WAS</b> = comida o bebida (<i>Was trinkst du?</i>).'
    },
    7: {
      story: 'La Reina busca a todos por el castillo. Usa el plano para decir dónde (Wo) está cada uno.',
      tip: 'Con <b>WO</b> (Dativo): 🔵 <b>der -> im</b> (<i>im Park</i>) · 🟢 <b>das -> im</b> (<i>im Bad</i>) · 🔴 <b>die -> in der</b> (<i>in der Küche / Schule</i>).'
    },
    8: {
      story: 'La Reina le da a Félix una lista de compras y 50 € para ir al Gran Mercado.',
      tip: '1 cosa: <b>Wie viel kostet...?</b> · Varias cosas: <b>Wie viel kosten...?</b> ¡Calcula bien tus 50 €!'
    },
    9: {
      story: 'El Búho organiza la rutina diaria del castillo para llegar puntual a cada actividad.',
      tip: 'Di la hora y los minutos seguidos: <b>7:30 = sieben Uhr dreißig</b> · <b>8:15 = acht Uhr fünfzehn</b>.'
    },
    10: {
      story: '¡Gran Banquete del Rey! Combina todas las W-Fragen y pide un menú completo con 35 €.',
      tip: 'Mira la <b>Königliche Speisekarte</b> (12 platos y bebidas), pregunta precios y arma tu pedido.'
    }
  };
  function renderVisualStimulus(container, missionId, stepNum) {
    if (container.querySelector('#w2-stimulus-board')) return;
    const board = document.createElement('div');
    board.id = 'w2-stimulus-board';
    board.className = 'visual-board';

    if (missionId === 6) {
      const items = [
        ['🍲', 'die Suppe', 'la sopa'], ['🥖', 'das Brot', 'el pan'],
        ['🧀', 'der Käse', 'el queso'], ['🍎', 'der Apfel', 'la manzana'],
        ['💧', 'das Wasser', 'el agua'], ['🧃', 'der Apfelsaft', 'el jugo de manzana'],
        ['🥛', 'die Milch', 'la leche'], ['🍰', 'der Kuchen', 'el pastel']
      ];
      board.innerHTML =
        '<strong style="color:#1E40AF;font-size:0.95rem;">🍽️ Der Tisch im Schloss · Toca cada alimento para escucharlo:</strong>' +
        '<div class="visual-grid">' +
          items.map(it =>
            '<div class="visual-card" onclick="speakPlus(\'' + it.at(1) + '\', false)">' +
              '<div style="font-size:1.9rem;">' + it.at(0) + '</div>' +
              '<div style="font-weight:800;font-size:0.86rem;color:#2D3748;">' + it.at(1) + '</div>' +
              '<div style="font-size:0.74rem;color:#64748B;">' + it.at(2) + '</div>' +
            '</div>'
          ).join('') +
        '</div>';
    }

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
        '<strong style="color:#1E40AF;font-size:0.95rem;">🏰 Plan des Schlosses · Toca cada lugar para oír el Dativo:</strong>' +
        '<div class="visual-grid">' +
          rooms.map(r =>
            '<div class="visual-card" onclick="speakPlus(\'' + r.at(1) + '\', false)">' +
              '<div style="font-size:1.8rem;">' + r.at(0) + '</div>' +
              '<div style="font-weight:800;font-size:0.86rem;color:#2D3748;">' + r.at(1) + '</div>' +
              '<div style="font-size:0.74rem;color:#64748B;">' + r.at(2) + '</div>' +
            '</div>'
          ).join('') +
        '</div>' +
        (stepNum >= 4 ? (
          '<div style="margin-top:12px;background:#FAF8F5;padding:12px;border-radius:14px;border:1.5px solid #93C5FD;">' +
            '<strong style="color:#1E40AF;font-size:0.88rem;display:block;margin-bottom:6px;">⚡ Entrenamiento rápido de Dativo (6 frases · im vs. in der):</strong>' +
            drills.map((d, idx) =>
              '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 0;border-bottom:1px dashed #CBD5E1;font-size:0.84rem;">' +
                '<span>' + (idx + 1) + '. ' + d.at(0) + '</span>' +
                '<div style="display:flex;gap:6px;">' +
                  '<button type="button" class="secondary" style="min-height:30px;padding:2px 10px;font-size:0.8rem;" onclick="this.style.background=(this.textContent===\'' + d.at(1) + '\'?\'#DCFCE7\':\'#F3E8FF\')">im</button>' +
                  '<button type="button" class="secondary" style="min-height:30px;padding:2px 10px;font-size:0.8rem;" onclick="this.style.background=(this.textContent===\'' + d.at(1) + '\'?\'#DCFCE7\':\'#F3E8FF\')">in der</button>' +
                '</div>' +
              '</div>'
            ).join('') +
          '</div>'
        ) : '');
    }

    if (missionId === 8) {
      const market = [
        ['🎒', 'die Schultasche', 24], ['⚽', 'der Ball', 14], ['📕', 'das Buch', 12],
        ['✏️', 'der Bleistift', 3], ['📓', 'das Heft', 4], ['🍎', 'der Apfel', 2],
        ['🧀', 'der Käse', 8], ['🥖', 'das Brot', 5], ['🧃', 'der Apfelsaft', 6], ['🍰', 'der Kuchen', 11]
      ];
      let spent = 0;
      board.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
          '<strong style="color:#1E40AF;font-size:0.95rem;">🏪 Der große Markt · Presupuesto: 50 €</strong>' +
          '<span id="market-budget" style="background:#FEF9C3;border:2px solid #FACC15;padding:4px 12px;border-radius:99px;font-weight:800;font-size:0.86rem;">Gastado: 0 € / Restan: 50 €</span>' +
        '</div>' +
        '<div style="background:#FFFDF9;border:1.5px dashed #F97316;border-radius:12px;padding:8px 12px;margin-top:8px;font-size:0.84rem;">' +
          '📜 <b>Lista de la Reina (compra los 4 artículos sin pasarte de 50 €):</b> 1 mochila (<i>Schultasche</i>) + 1 pelota (<i>Ball</i>) + 1 queso (<i>Käse</i>) + 1 pan (<i>Brot</i>).' +
        '</div>' +
        '<div class="visual-grid">' +
          market.map(m =>
            '<div class="visual-card" data-price="' + m.at(2) + '" data-name="' + m.at(1) + '">' +
              '<div style="font-size:1.75rem;">' + m.at(0) + '</div>' +
              '<div style="font-weight:800;font-size:0.84rem;">' + m.at(1) + '</div>' +
              '<div style="color:#F97316;font-weight:800;font-size:0.88rem;">' + m.at(2) + ' €</div>' +
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
        '<strong style="color:#1E40AF;font-size:0.95rem;">🕰️ Tagesablauf im Schloss · Toca cada reloj para oír la hora:</strong>' +
        '<div class="visual-grid">' +
          routine.map(r =>
            '<div class="visual-card" onclick="speakPlus(\'Es ist ' + r.at(1) + '\', true)">' +
              '<div style="font-size:1.2rem;font-weight:800;color:#F97316;">⏰ ' + r.at(0) + '</div>' +
              '<div style="font-weight:800;font-size:0.82rem;margin:4px 0;">' + r.at(1) + '</div>' +
              '<div style="font-size:0.78rem;color:#475569;">' + r.at(2) + '</div>' +
            '</div>'
          ).join('') +
        '</div>';
    }

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
          '<strong style="color:#1E40AF;font-size:0.95rem;">📜 Königliche Speisekarte · Arma tu banquete (Máx. 35 €):</strong>' +
          '<span id="menu-total" style="background:#FEF9C3;border:2px solid #FACC15;padding:4px 12px;border-radius:99px;font-weight:800;font-size:0.86rem;">Pedido: 0 € / Presupuesto: 35 €</span>' +
        '</div>' +
        '<div class="visual-grid">' +
          menu.map(item =>
            '<div class="visual-card" data-price="' + item.at(2) + '" data-name="' + item.at(1) + '">' +
              '<div style="font-size:1.65rem;">' + item.at(0) + '</div>' +
              '<div style="font-weight:800;font-size:0.82rem;">' + item.at(1) + '</div>' +
              '<div style="color:#F97316;font-weight:800;font-size:0.86rem;">' + item.at(2) + ' €</div>' +
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

  function initWorld2Header() {
    const story = document.getElementById('intro');
    const guide = FELIX_MENTOR[id];
    if (!story || !guide || document.getElementById('w2-compact-header')) return;

    const header = document.createElement('div');
    header.id = 'w2-compact-header';
    header.className = 'w2-stage-header';
    header.innerHTML =
      '<img src="mundo2-castillo.png" class="w2-stage-castle" alt="Schloss" onerror="this.style.display=\'none\'">' +
      '<div style="font-size:0.86rem;line-height:1.4;">' +
        '<strong style="color:#1E40AF;font-size:0.95rem;display:block;">🏰 Welt 2: Das Königsschloss · Misión ' + id + '</strong>' +
        '<span>' + guide.story + '</span>' +
      '</div>';
    story.parentNode.insertBefore(header, story);
  }

  function upgradeWorld2Step() {
    const content = document.getElementById('content');
    const guide = FELIX_MENTOR[id];
    if (!content || !guide) return;

    const stepText = content.querySelector('.step')?.textContent || 'Aufgabe 1';
    const matchStep = stepText.match(/Aufgabe\s+(\d+)/i);
    const stepNum = matchStep ? parseInt(matchStep.at(1), 10) : 1;

    const scene = content.querySelector('.scene');
    if (scene && !content.querySelector('#felix-step-tip')) {
      const tipBox = document.createElement('div');
      tipBox.id = 'felix-step-tip';
      tipBox.className = 'felix-inline-tip';
      tipBox.innerHTML =
        '<img src="felix-mentor.png" alt="Felix" onerror="this.style.display=\'none\'">' +
        '<div style="font-size:0.85rem;line-height:1.4;">' +
          '<strong style="color:#B45309;display:block;">🦊 Felix-Tipp:</strong>' + guide.tip +
        '</div>';
      scene.parentNode.insertBefore(tipBox, scene.nextSibling);
    }

    const bubble = content.querySelector('.comic-bubble');
    if (bubble) {
      const speaker = bubble.querySelector('div');
      if (speaker && speaker.textContent.includes('sagt:')) {
        speaker.textContent = speaker.textContent.replace(/\s*\([^)]+\)/g, '');
      }
      if (id === 8 && bubble.textContent.includes('Kaufe einen Apfel und einen Ball')) {
        bubble.innerHTML = bubble.innerHTML.replace(
          'Du hast sieben Euro. Kaufe einen Apfel und einen Ball!',
          'Du hast 50 Euro! Schau auf die Liste der Königin und kaufe alle vier Sachen.'
        );
      }
    }

    const mapBox = content.querySelector('.map');
    if (mapBox && !mapBox.dataset.styled) {
      mapBox.dataset.styled = '1';
      mapBox.className = 'royal-table-grid';
      mapBox.querySelectorAll('button').forEach(btn => {
        btn.textContent = btn.textContent.replace(/:\s*[A-Za-zÄÖÜäöüß]+/g, '');
      });
    }

    const activeSteps = new Set([2, 5, 7, 8, 9, 10]);
    if (activeSteps.has(stepNum)) {
      renderVisualStimulus(content, id, stepNum);
    }
  }

  initWorld2Header();
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
