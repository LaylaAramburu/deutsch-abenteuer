(function() {
  'use strict';
  const id = Number(document.body.dataset.mission || 6);
  const mission = window.DEUTSCH_MISSIONS && window.DEUTSCH_MISSIONS[id];
  if (!mission) return;

  // 1. PÍLDORAS GRAMATICALES PROGRESIVAS POR MUNDO (A1)
  const GRAMMAR_PILLS = {
    1: {
      title: 'Regla Mágica: Verbos y Artículos (der / die / das)',
      rule: 'En alemán el verbo siempre va en 2.ª posición: <b>Ich heiße</b> Felix. / <b>Du bist</b> Mia.<br>Colores: <span style="color:#2563eb;font-weight:800">der (azul)</span> · <span style="color:#dc2626;font-weight:800">die (rojo)</span> · <span style="color:#16a34a;font-weight:800">das (verde)</span>.'
    },
    2: {
      title: 'Regla Mágica: Preguntas con W-Fragen',
      rule: 'La palabra pregunta va <b>primero</b> y el verbo va en <b>2.ª posición</b>:<br>• <b>Wer</b> isst? (¿Quién?) · <b>Was</b> trinkt der König? (¿Qué?)<br>• <b>Wo</b> kocht der Koch? (¿Dónde?) · <b>Wann</b> beginnt das Fest? (¿Cuándo?)'
    },
    3: {
      title: 'Regla Mágica: Acusativo (¿Qué tienes / necesitas?)',
      rule: 'Con verbos como <i>haben</i> o <i>brauchen</i>, solo cambia el masculino (<span style="color:#2563eb;font-weight:800">der -> den / einen</span>):<br>• Ich habe <b>einen</b> Roboter. / Ich brauche <b>die</b> Batterie / <b>das</b> Kabel.'
    },
    4: {
      title: 'Regla Mágica: Tiempo, Clima y Días (Wann? / Wie?)',
      rule: 'Para días y horas usamos <b>am</b> y <b>um</b>:<br>• <b>Am</b> Montag (El lunes) · <b>Um</b> 8 Uhr (A las 8).<br>• Verbo en 2.ª posición: <i>Heute <b>ist</b> es sonnig.</i>'
    },
    5: {
      title: 'Regla Mágica: Verbo Modal KÖNNEN y Cortesía (Sie)',
      rule: 'Con <b>können</b> (poder), el segundo verbo viaja al final de la frase:<br>• <b>Können</b> Sie das Tor <b>öffnen</b>? (¿Puede usted abrir la puerta?)'
    }
  };

  const worldNum = id <= 5 ? 1 : id <= 10 ? 2 : id <= 15 ? 3 : id <= 20 ? 4 : 5;
  const grammar = GRAMMAR_PILLS[worldNum];

  // 2. EXTRAER VOCABULARIO AUTOMÁTICAMENTE DE LA MISIÓN CON COLORES
  function extractVocab() {
    const words = [];
    const seen = new Set();
    const regex = /\b(der|die|das|ein|eine|einen)\s+([A-ZÄÖÜ][a-zäöüß]+)/g;
    mission.tasks.forEach(t => {
      const text = [t.at(3), t.at(4), ...(Array.isArray(t.at(5)) ? t.at(5) : [])].join(' ');
      let match;
      while ((match = regex.exec(text)) !== null) {
        const art = match.at(1).toLowerCase();
        const noun = match.at(2);
        const key = art + ' ' + noun;
        if (!seen.has(key) && words.length < 10) {
          seen.add(key);
          const color = (art === 'der' || art === 'einen') ? '#2563eb' : (art === 'die' || art === 'eine') ? '#dc2626' : '#16a34a';
          words.push({ full: match.at(1) + ' ' + noun, color: color });
        }
      }
    });
    return words;
  }

  // 3. VOZ ALEMANA NATURAL + MODO LENTO
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
  // 4. OBJETIVOS DE MISIÓN EN LENGUAJE PARA NIÑO DE 10 AÑOS
  const KID_GOALS = {
    1: '🎯 Tu reto: Presentarte en alemán y ayudar a Félix a encontrar su brújula.',
    2: '🎯 Tu reto: Seguir las pistas del mapa usando izquierda, derecha y centro.',
    3: '🎯 Tu reto: Preparar la mochila usando ein, eine y einen.',
    4: '🎯 Tu reto: Devolver los colores al bosque describiendo objetos.',
    5: '🎯 Tu reto: Superar las pruebas de movimiento del guardián.',
    6: '🎯 Tu reto: Descubrir quién come qué en el banquete usando Wer y Was.',
    7: '🎯 Tu reto: Encontrar las habitaciones del castillo preguntando con Wo.',
    8: '🎯 Tu reto: Comprar en el mercado del castillo contando euros en alemán.',
    9: '🎯 Tu reto: Reparar el gran reloj diciendo las horas y momentos del día.',
    10: '🎯 Tu reto: Resolver el acertijo final de la reina combinando W-Fragen.'
  };
  const goalText = KID_GOALS[id] || ('🎯 Tu reto hoy: Completar la misión "' + mission.es + '" en alemán.');

  // 5. CONSTRUIR LA ENTDECKER-BOX SIEMPRE VISIBLE + OBJETIVO + VIÑETA CÓMIC
  function initSequenceUI() {
    const aside = document.querySelector('aside');
    const story = document.getElementById('intro');
    if (!aside || !story) return;

    // A) Insertar Objetivo de la clase arriba de la historia
    if (!document.getElementById('kid-goal-banner')) {
      const goalDiv = document.createElement('div');
      goalDiv.id = 'kid-goal-banner';
      goalDiv.style.cssText = 'background:#dbeafe;border:2px solid #3b82f6;color:#1e3a8a;padding:12px 16px;border-radius:16px;font-weight:800;margin-bottom:14px;font-size:1rem;';
      goalDiv.textContent = goalText;
      story.parentNode.insertBefore(goalDiv, story);
    }

    // B) Insertar Entdecker-Box fija y siempre visible en la barra lateral
    if (!document.getElementById('entdecker-box-fixed')) {
      const vocabList = extractVocab();
      const box = document.createElement('div');
      box.id = 'entdecker-box-fixed';
      box.style.cssText = 'background:#f8fafc;border:3px solid #8b5cf6;border-radius:18px;padding:14px;margin-bottom:16px;';
      box.innerHTML =
        '<div style="font-family:Fredoka,sans-serif;color:#5b21b6;font-size:1.1rem;margin-bottom:8px;">🧭 Entdecker-Box <small style="display:block;font-family:Nunito,sans-serif;font-size:0.78rem;color:#64748b;">Tu ayuda siempre disponible</small></div>' +
        '<div style="background:#f3e8ff;padding:10px;border-radius:12px;font-size:0.85rem;margin-bottom:10px;line-height:1.4;">' +
          '<strong style="color:#6d28d9;display:block;margin-bottom:4px;">💡 ' + grammar.title + '</strong>' +
          grammar.rule +
        '</div>' +
        '<strong style="font-size:0.85rem;color:#334155;display:block;margin-bottom:6px;">🔊 Palabras clave (haz clic para oír):</strong>' +
        '<div style="display:flex;flex-wrap:wrap;gap:6px;">' +
          vocabList.map(w =>
            '<button type="button" onclick="speakPlus(\'' + w.full.replace(/'/g, "\\'") + '\', false)" ' +
            'style="background:white;color:' + w.color + ';border:2px solid ' + w.color + ';padding:4px 8px;border-radius:10px;font-size:0.82rem;min-height:auto;font-weight:800;">' +
            '🔊 ' + w.full + '</button>'
          ).join('') +
        '</div>';
      aside.insertBefore(box, aside.firstChild);
    }
  }

  // 6. MEJORAR CADA ACTIVIDAD COMO SECUENCIA DE JUEGO (VIÑETA + AUDIO LENTO + ESCRITURA + VOZ)
  function enhanceStep() {
    const content = document.getElementById('content');
    if (!content) return;

    // Transformar el cuadro verde/azul vacío en viñeta narrativa
    const scene = content.querySelector('.scene');
    if (scene && !scene.dataset.upgraded) {
      scene.dataset.upgraded = '1';
      scene.style.cssText = 'background:linear-gradient(135deg,#e0f2fe 0%,#fef9c3 100%);border:3px solid #38bdf8;border-radius:20px;padding:18px;margin:14px 0;text-align:center;';
    }

    // Añadir botón de audio lento (tortuga) junto al botón de escuchar
    const sayBtn = content.querySelector('[data-say]');
    if (sayBtn && !content.querySelector('[data-slow-plus]')) {
      const phrase = sayBtn.getAttribute('data-say');
      const slowBtn = document.createElement('button');
      slowBtn.type = 'button';
      slowBtn.className = 'secondary';
      slowBtn.setAttribute('data-slow-plus', '1');
      slowBtn.innerHTML = '🐢 Langsam <small>Despacio</small>';
      slowBtn.onclick = function() { window.speakPlus(phrase, true); };
      sayBtn.parentNode.insertBefore(slowBtn, sayBtn.nextSibling);
    }

    // Convertir 1 de cada 3 preguntas de selección en reto de ESCRITURA con teclado alemán
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
          '<p style="font-size:0.88rem;margin:0 0 8px;">Escribe la respuesta en alemán (puedes mirar tu <b>Entdecker-Box</b> a la derecha):</p>' +
          '<input type="text" id="german-input" placeholder="Escribe aquí en alemán..." style="width:100%;margin-bottom:8px;">' +
          '<div style="display:flex;gap:6px;margin-bottom:10px;">' +
            ['ä', 'ö', 'ü', 'ß'].map(ch => '<button type="button" class="secondary" style="min-height:36px;padding:4px 12px;" onclick="const i=document.getElementById(\'german-input\');i.value+=\'' + ch + '\';i.focus();">' + ch + '</button>').join('') +
          '</div>' +
          '<button type="button" id="check-write-btn">✅ Comprobar escritura</button> ' +
          '<button type="button" class="secondary" id="show-opts-btn">Ver opciones</button>';
        optionsBox.parentNode.insertBefore(challenge, optionsBox);

        document.getElementById('show-opts-btn').onclick = function() {
          challenge.remove();
          optionsBox.style.display = 'grid';
        };
        document.getElementById('check-write-btn').onclick = function() {
          const val = document.getElementById('german-input').value.trim().toLowerCase().replace(/[.!?]/g, '');
          const btns = Array.from(optionsBox.querySelectorAll('button'));
          const match = btns.find(b => b.textContent.trim().toLowerCase().replace(/[.!?]/g, '') === val);
          if (match) {
            match.click();
          } else {
            alert('Casi... Revisa las letras y artículos en tu Entdecker-Box e inténtalo de nuevo (o pulsa "Ver opciones").');
          }
        };
      }
    }
  }

  initSequenceUI();
  enhanceStep();
  const observer = new MutationObserver(() => enhanceStep());
  const contentEl = document.getElementById('content');
  if (contentEl) observer.observe(contentEl, { childList: true });
})();
