(function() {
  'use strict';

  // 1. ESTILOS DE CÓDIGO DE COLORES Y MEJORAS DE JUEGO
  const style = document.createElement('style');
  style.textContent =
    '@import url("https://googleapis.com");' +
    'body { font-family: "Nunito", sans-serif !important; background: #eef2f6 !important; color: #1e293b !important; }' +
    'h1, h2, h3, button { font-family: "Fredoka", sans-serif !important; }' +
    'header { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important; border-bottom: 5px solid #f97316 !important; color: white !important; }' +
    '.controls button { border-radius: 14px !important; padding: 10px 18px !important; font-size: 1rem !important; box-shadow: 0 3px 0 rgba(0,0,0,0.15) !important; }' +
    '.cards > * { border-radius: 20px !important; border-width: 3px !important; transition: transform 0.15s !important; box-shadow: 0 6px 14px rgba(0,0,0,0.06) !important; }' +
    '.cards > *:hover { transform: translateY(-4px) !important; }' +
    '.art-badge { display: inline-block; padding: 2px 10px; border-radius: 99px; color: white; font-size: 0.78rem; font-weight: 800; margin-bottom: 6px; }' +
    '.german-keys { display: flex; gap: 8px; margin: 8px 0 12px; }' +
    '.german-keys button { background: #e2e8f0 !important; color: #0f172a !important; border: 2px solid #cbd5e1 !important; padding: 6px 14px !important; border-radius: 10px !important; min-height: 38px !important; }' +
    '.rec-oral-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; background: #f0f9ff; border: 2px solid #7dd3fc; padding: 10px 14px; border-radius: 14px; margin: 12px 0; }';
  document.head.appendChild(style);

  // 2. VOZ LENTA EN ALEMÁN
  window.speakCardSlow = function(text) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = 0.62;
    const voices = speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().startsWith('de'));
    const best = voices.find(v => /natural|google|katja|conrad|amala/i.test(v.name)) || voices.at(0);
    if (best) u.voice = best;
    speechSynthesis.speak(u);
  };

  // 3. GRABADORA DE VOZ PARA MODO HABLAR
  let rec = null, chunks = [], recording = false;
  window.toggleCardRec = async function(btn) {
    const bar = btn.closest('.rec-oral-bar');
    if (recording && rec) {
      rec.stop();
      recording = false;
      btn.textContent = '🎙️ Grabar mi frase';
      btn.style.background = '#0284c7';
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunks = [];
      rec = new MediaRecorder(stream);
      rec.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
      rec.onstop = () => {
        const url = URL.createObjectURL(new Blob(chunks, { type: 'audio/webm' }));
        stream.getTracks().forEach(tr => tr.stop());
        let audio = bar.querySelector('audio');
        if (!audio) {
          audio = document.createElement('audio');
          audio.controls = true;
          audio.style.height = '36px';
          bar.appendChild(audio);
        }
        audio.src = url;
      };
      rec.start();
      recording = true;
      btn.textContent = '⏹️ Detener';
      btn.style.background = '#ef4444';
    } catch (e) {
      alert('Activa el permiso del micrófono en tu navegador para grabarte.');
    }
  };

  // 4. PINTAR TARJETAS POR GÉNERO (DER/DIE/DAS) Y AÑADIR AUDIO LENTO
  function decorateCards() {
    const cardsContainer = document.getElementById('cards');
    if (!cardsContainer) return;

    Array.from(cardsContainer.children).forEach(card => {
      if (card.dataset.colored) return;
      card.dataset.colored = '1';
      const txt = card.textContent || '';
      const match = txt.match(/\b(der|die|das|ein|eine|einen)\b/i);
      if (match) {
        const art = match.at(1).toLowerCase();
        const isMasc = art === 'der' || art === 'einen';
        const isFem = art === 'die' || art === 'eine';
        const color = isMasc ? '#2563eb' : isFem ? '#dc2626' : '#16a34a';
        const label = isMasc ? '🔵 der (masc.)' : isFem ? '🔴 die (fem.)' : '🟢 das (neutro)';
        card.style.borderColor = color;
        const badge = document.createElement('div');
        badge.className = 'art-badge';
        badge.style.background = color;
        badge.textContent = label;
        card.insertBefore(badge, card.firstChild);
      }

      // Añadir botón tortuga en cada tarjeta
      const cleanPhrase = txt.replace(/[🔊🐢🔵🔴🟢()]/g, '').trim().split('\n').at(0);
      if (cleanPhrase) {
        const slowBtn = document.createElement('button');
        slowBtn.type = 'button';
        slowBtn.textContent = '🐢 Despacio';
        slowBtn.style.cssText = 'margin-top:8px;background:#f1f5f9;color:#334155;border:2px solid #cbd5e1;padding:4px 10px;border-radius:10px;font-size:0.82rem;cursor:pointer;';
        slowBtn.onclick = function(e) {
          e.stopPropagation();
          window.speakCardSlow(cleanPhrase);
        };
        card.appendChild(slowBtn);
      }
    });
  }

  // 5. TECLADO ALEMÁN + GRABADORA EN LA SECCIÓN ORAL (#oral)
  function enhanceOralBox() {
    const oralBox = document.getElementById('oral');
    const textarea = document.getElementById('sentence');
    if (!oralBox || !textarea || document.getElementById('german-keys-bar')) return;

    const keysDiv = document.createElement('div');
    keysDiv.id = 'german-keys-bar';
    keysDiv.className = 'german-keys';
    ['ä', 'ö', 'ü', 'ß'].forEach(ch => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = ch;
      b.onclick = () => { textarea.value += ch; textarea.focus(); };
      keysDiv.appendChild(b);
    });
    textarea.parentNode.insertBefore(keysDiv, textarea.nextSibling);

    const recBar = document.createElement('div');
    recBar.className = 'rec-oral-bar';
    recBar.innerHTML =
      '<button type="button" style="background:#0284c7;color:white;border:none;padding:8px 14px;border-radius:10px;cursor:pointer;" onclick="toggleCardRec(this)">🎙️ Grabar mi frase</button>' +
      '<span style="font-size:0.85rem;color:#0369a1;font-weight:700;">Di tu frase en voz alta y escúchate</span>';
    keysDiv.parentNode.insertBefore(recBar, keysDiv.nextSibling);
  }

  enhanceOralBox();
  decorateCards();
  const cardsEl = document.getElementById('cards');
  if (cardsEl) {
    new MutationObserver(() => decorateCards()).observe(cardsEl, { childList: true });
  }
})();
