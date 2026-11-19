(function() {
  'use strict';
  const id = Number(document.body.dataset.mission || 6);
  const mission = window.DEUTSCH_MISSIONS && window.DEUTSCH_MISSIONS[id];
  if (!mission) return;

  // 1. ESTILOS BLINDADOS PARA EVITAR SOLAPAMIENTOS
  const style = document.createElement('style');
  style.textContent =
    '.comic-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }' +
    '.comic-badge { background: white; padding: 4px 12px; border-radius: 99px; font-size: 0.82rem; font-weight: 800; color: #334155; }' +
    '.comic-body { display: flex; align-items: center; gap: 14px; text-align: left; }' +
    '.comic-avatar { background: white; border-radius: 50%; width: 66px; height: 66px; display: flex; align-items: center; justify-content: center; font-size: 2.3rem; flex-shrink: 0; box-shadow: 0 4px 8px rgba(0,0,0,0.08); }' +
    '.comic-bubble { background: white; border: 2px solid #cbd5e1; border-radius: 18px; padding: 14px 18px; flex: 1; box-shadow: 0 3px 0 #e2e8f0; }' +
    'article#content .oral { display: block !important; background: #eff6ff !important; border: 2px solid #93c5fd !important; border-radius: 16px !important; padding: 14px !important; margin: 18px 0 !important; line-height: 1.6 !important; clear: both !important; }' +
    'article#content .actions { display: flex !important; flex-wrap: wrap !important; gap: 12px !important; margin: 18px 0 !important; width: 100% !important; clear: both !important; }' +
    'article#content .footer { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-top: 24px !important; padding-top: 18px !important; border-top: 2px dashed #cbd5e1 !important; width: 100% !important; clear: both !important; }' +
    '.rec-bar { display: flex !important; flex-wrap: wrap !important; align-items: center !important; gap: 12px !important; background: #f0f9ff !important; border: 2px solid #7dd3fc !important; padding: 12px 16px !important; border-radius: 14px !important; margin: 16px 0 !important; width: 100% !important; clear: both !important; }' +
    '.rec-bar button { background: #0284c7 !important; color: white !important; border: none !important; padding: 8px 16px !important; border-radius: 10px !important; font-weight: 800 !important; cursor: pointer !important; min-height: 40px !important; }';
  document.head.appendChild(style);

  // 2. MICRO-REGLAS GRAMATICALES AUDITADAS (NIVEL A1 PROGRESIVO)
  const MISSION_GRAMMAR = {
    1: { title: 'Presentación y verbo en 2.ª posición', rule: '• <i>Ich <b>heiße</b>... / Ich <b>bin</b> neun Jahre alt.</i><br>• El verbo conjugado siempre ocupa la <b>2.ª posición</b>.' },
    2: { title: 'Ubicación con WO y direcciones', rule: '• <i><b>Wo</b> ist der Kompass?</i> (¿Dónde está?)<br>• <i>links</i> (izquierda), <i>rechts</i> (derecha), <i>in der Mitte</i> (en el centro).' },
    3: { title: 'Acusativo con HABEN y BRAUCHEN', rule: '• Solo cambia el masculino (<span style="color:#2563eb;font-weight:800">der -> den / einen</span>):<br><i>Ich habe <b>einen</b> Ball, <b>eine</b> Karte und <b>ein</b> Buch.</i>' },
    4: { title: 'Adjetivos predicativos de color', rule: '• Después de <i>ist / sind</i>, el color no lleva terminación:<br><i>Der Baum <b>ist grün</b>. Die Blumen <b>sind gelb</b>.</i>' },
    5: { title: 'Presente: terminaciones y cambio vocálico', rule: '• <i>ich lauf<b>e</b> · du läuf<b>st</b> · er/sie läuf<b>t</b> · wir lauf<b>en</b>.</i><br>• Atención al cambio <b>a -> ä</b> en <i>du</i> y <i>er/sie</i>.' },
    6: { title: 'W-Fragen: WER (persona) y WAS (objeto)', rule: '• <i><b>Wer</b> isst das Brot?</i> (Sujeto) · <i><b>Was</b> trinkt der Koch?</i> (Objeto).<br>• Verbo siempre en <b>2.ª posición</b>.' },
    7: { title: 'Lugar con Dativo: IN DER / IM', rule: '• <i><b>Wo</b> ist der Koch?</i> -> <i><b>In der</b> Küche</i> (<span style="color:#dc2626">die</span>) · <i><b>Im</b> Bad</i> (<span style="color:#16a34a">das</span>) · <i><b>Im</b> Garten</i> (<span style="color:#2563eb">der</span>).' },
    8: { title: 'Precios y plural: WIE VIEL KOSTET / KOSTEN?', rule: '• Singular: <i>Wie viel <b>kostet</b> der Apfel?</i><br>• Plural: <i>Wie viel <b>kosten</b> die Äpfel?</i>' },
    9: { title: 'Horas exactas y medias (WIE SPÄT IST ES?)', rule: '• Exacta: <i>Es ist <b>acht Uhr</b></i> (8:00).<br>• Media: <i>Es ist <b>halb neun</b></i> (8:30, media para las 9).' },
    10: { title: 'Síntesis de W-Fragen (Mundo 2)', rule: '• <b>Wer</b> (quién) · <b>Was</b> (qué) · <b>Wo</b> (dónde) · <b>Wann</b> (cuándo) · <b>Wie viel</b> (cuánto).' },
    11: { title: 'Acusativo con artículos definidos e indefinidos', rule: '• <i>Wir reparieren <b>den</b> Roboter (<span style="color:#2563eb">der</span>) und brauchen <b>eine</b> Batterie (<span style="color:#dc2626">die</span>).</i>' },
    12: { title: 'Negación de sustantivos: KEIN / KEINE / KEINEN', rule: '• <i>Das ist <b>kein</b> Wasser</i> (<span style="color:#16a34a">das</span>) · <i><b>keine</b> Milch</i> (<span style="color:#dc2626">die</span>).<br>• Acusativo masc.: <i>Ich habe <b>keinen</b> Schlüssel</i> (<span style="color:#2563eb">der</span>).' },
    13: { title: 'Números hasta 100 (Unidad + und + Decena)', rule: '• 24 = <i>vier<b>und</b>zwanzig</i> · 58 = <i>acht<b>und</b>fünfzig</i>.<br>• Se leen de derecha a izquierda.' },
    14: { title: 'Verbos irregulares: LESEN, SEHEN, SPRECHEN', rule: '• <i>du <b>liest</b> / er <b>liest</b></i> · <i>du <b>siehst</b> / er <b>sieht</b></i> · <i>du <b>sprichst</b> / er <b>spricht</b></i>.' },
    15: { title: 'Síntesis del Laboratorio (Números + Negación)', rule: '• Combina cantidad, negación y acusativo:<br><i>Wir haben <b>dreißig</b> Punkte, aber <b>keinen</b> Code.</i>' },
    16: { title: 'El clima: WIE IST DAS WETTER?', rule: '• <i>Es <b>regnet</b></i> (llueve) · <i>Es <b>schneit</b></i> (nieva) · <i>Die Sonne <b>scheint</b></i>.<br>• <i>Es ist kalt / warm / windig.</i>' },
    17: { title: 'Medios de transporte: MIT DEM / MIT DER', rule: '• <i>Ich fahre <b>mit dem</b> Zug / Bus</i> (<span style="color:#2563eb">der</span>) · <i><b>mit der</b> U-Bahn</i> (<span style="color:#dc2626">die</span>).' },
    18: { title: 'Dirección: WOHIN? (¿Adónde?)', rule: '• <i><b>Wohin</b> gehst du?</i> -> <i><b>Zum</b> Bahnhof</i> (<span style="color:#2563eb">der</span>) · <i><b>Zur</b> Schule</i> (<span style="color:#dc2626">die</span>) · <i><b>Nach</b> Hause</i>.' },
    19: { title: 'Preposiciones temporales: AM y IM', rule: '• Días y partes del día: <i><b>am</b> Montag, <b>am</b> Abend</i>.<br>• Meses y estaciones: <i><b>im</b> Juli, <b>im</b> Winter</i>.' },
    20: { title: 'Orden de la oración (Tiempo antes que Lugar)', rule: '• <i>Wir fahren <b>am Samstag</b> (cuándo) <b>in die Stadt</b> (dónde).</i>' },
    21: { title: 'Preposiciones espaciales con Dativo (Wo?)', rule: '• <i><b>auf</b> dem Tisch</i> (sobre) · <i><b>unter</b> dem Baum</i> (debajo) · <i><b>neben</b> der Brücke</i> (al lado).' },
    22: { title: 'Preguntas con WARUM y WANN', rule: '• <i><b>Warum</b> lernst du Deutsch?</i> (¿Por qué?) -> <i>Weil es Spaß macht!</i>' },
    23: { title: 'Verbo modal KÖNNEN + Trato formal SIE', rule: '• <i><b>Können</b> Sie mir bitte <b>helfen</b>?</i><br>• Modal en 2.ª posición, segundo verbo en infinitivo al final.' },
    24: { title: 'Gran Síntesis A1 · Conectores UND, ABER, ODER', rule: '• Une tus ideas: <i>Ich heiße Mia, ich wohne in Berlin <b>und</b> ich spreche Deutsch!</i>' }
  };
  // 3. OBJETIVOS PEDAGÓGICOS EN LENGUAJE MOTIVADOR PARA 10 AÑOS
  const KID_GOALS = {
    1: '🎯 Tu reto: Presentarte en alemán y ayudar a Félix a encontrar su brújula.',
    2: '🎯 Tu reto: Seguir las pistas del mapa usando izquierda, derecha y centro.',
    3: '🎯 Tu reto: Preparar la mochila usando ein, eine y einen en acusativo.',
    4: '🎯 Tu reto: Devolver los colores al bosque describiendo objetos.',
    5: '🎯 Tu reto: Dominar las terminaciones de los verbos (ich, du, er/sie).',
    6: '🎯 Tu reto: Descubrir quién come y bebe qué en el banquete (Wer / Was).',
    7: '🎯 Tu reto: Encontrar las habitaciones del castillo preguntando con Wo.',
    8: '🎯 Tu reto: Comprar en el mercado contando euros y precios en alemán.',
    9: '🎯 Tu reto: Reparar el gran reloj diciendo horas exactas y medias (halb).',
    10: '🎯 Tu reto: Resolver el acertijo final de la reina combinando W-Fragen.',
    11: '🎯 Tu reto: Reparar el robot pidiendo las piezas en acusativo.',
    12: '🎯 Tu reto: Clasificar los experimentos usando la negación kein y keine.',
    13: '🎯 Tu reto: Descifrar el código secreto con números hasta 100.',
    14: '🎯 Tu reto: Recuperar los datos usando verbos irregulares (liest, sieht, spricht).',
    15: '🎯 Tu reto: Superar el reto del laboratorio combinando números y negación.',
    16: '🎯 Tu reto: Calmar la tormenta describiendo el clima en alemán.',
    17: '🎯 Tu reto: Viajar en tren y autobús usando mit dem y mit der.',
    18: '🎯 Tu reto: Orientarte en la ciudad preguntando Wohin? (¿Adónde?).',
    19: '🎯 Tu reto: Arreglar el calendario con días de la semana (am) y meses (im).',
    20: '🎯 Tu reto: Abrir el portal combinando tiempo, clima y lugar en orden.',
    21: '🎯 Tu reto: Regresar al bosque usando preposiciones de lugar (auf, unter, neben).',
    22: '🎯 Tu reto: Responder al interrogatorio maestro con todas las W-Fragen.',
    23: '🎯 Tu reto: Hacer una visita cortés usando können y el trato formal Sie.',
    24: '🎯 Tu reto: Completar la aventura final demostrando todo tu alemán A1.'
  };

  // 4. CINCO PALABRAS NUEVAS POR MISIÓN (SUSTANTIVOS COTIDIANOS + ACCIONES ⚡)
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
    13: [['der Fehler', 'el error', 'm'], ['die Zahl', 'el número', 'f'], ['das Licht', 'la luz', 'n'], ['rechnen', 'calcular', 'v'], ['schreiben', 'escribir', 'v']],
    14: [['der Text', 'el texto', 'm'], ['die Nachricht', 'el mensaje', 'f'], ['das Wort', 'la palabra', 'n'], ['lesen', 'leer', 'v'], ['sprechen', 'hablar', 'v']],
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
  const worldNum = id <= 5 ? 1 : id <= 10 ? 2 : id <= 15 ? 3 : id <= 20 ? 4 : 5;
  const grammar = MISSION_GRAMMAR[id] || MISSION_GRAMMAR;

  const WORLD_THEMES = {
    1: { bg: 'linear-gradient(135deg, #dcfce7 0%, #fef9c3 100%)', border: '#22c55e', badge: '🌲 Der Zauberwald', char: '🦊', name: 'Felix' },
    2: { bg: 'linear-gradient(135deg, #f3e8ff 0%, #ffe4e6 100%)', border: '#a855f7', badge: '🏰 Das Königsschloss', char: '👑', name: 'Die Königin' },
    3: { bg: 'linear-gradient(135deg, #e0f2fe 0%, #f1f5f9 100%)', border: '#0ea5e9', badge: '🧪 Das Geheimlabor', char: '🧑‍🔬', name: 'Der Forscher' },
    4: { bg: 'linear-gradient(135deg, #fce7f3 0%, #fef3c7 100%)', border: '#ec4899', badge: '🌀 Die Zeitreise', char: '👨‍✈️', name: 'Der Schaffner' },
    5: { bg: 'linear-gradient(135deg, #fef3c7 0%, #dcfce7 100%)', border: '#f59e0b', badge: '🏆 Die Rückkehr', char: '👩', name: 'Die Nachbarin' }
  };

  // PERSONAJES CON ROLES COTIDIANOS ÚTILES PARA A1 (SIN FANTASÍA INNECESARIA)
  function getCharacter(emojis, worldTheme) {
    if (emojis.includes('🧑‍🍳')) return { icon: '🧑‍🍳', name: 'Der Koch (El cocinero)' };
    if (emojis.includes('👨‍✈️')) return { icon: '👨‍✈️', name: 'Der Schaffner (El revisor)' };
    if (emojis.includes('👩‍✈️')) return { icon: '👩‍✈️', name: 'Die Reisende (La viajera)' };
    if (emojis.includes('🧑‍🌾')) return { icon: '🧑‍🌾', name: 'Der Verkäufer (El vendedor)' };
    if (emojis.includes('🧑‍🔧')) return { icon: '🧑‍🔧', name: 'Der Techniker (El técnico)' };
    if (emojis.includes('👩')) return { icon: '👩', name: 'Die Nachbarin (La vecina)' };
    if (emojis.includes('👦')) return { icon: '👦', name: 'Der Freund (El amigo)' };
    if (emojis.includes('👑')) return { icon: '👑', name: 'Die Königin (La reina)' };
    if (emojis.includes('🦉')) return { icon: '🦉', name: 'Die Eule (El búho)' };
    if (emojis.includes('🦊')) return { icon: '🦊', name: 'Felix' };
    return { icon: worldTheme.char, name: worldTheme.name };
  }

  function extractVocab() {
    const map = new Map();
    const regex = /(?<!\b(?:in|auf|an|unter|über|vor|hinter|neben|zwischen|bei|mit|nach|seit|von|zu|aus)\s)\b(der|die|das|ein|eine|einen)\s+([A-ZÄÖÜ][a-zäöüß]+)/g;
    mission.tasks.forEach(t => {
      const text = String(t.at(4) || '');
      let match;
      while ((match = regex.exec(text)) !== null) {
        const art = match.at(1).toLowerCase(), noun = match.at(2);
        const isDef = ['der', 'die', 'das'].includes(art);
        if (!map.has(noun) || isDef) {
          const color = (art === 'der' || art === 'einen') ? '#2563eb' : (art === 'die' || art === 'eine') ? '#dc2626' : '#16a34a';
          map.set(noun, { full: match.at(1) + ' ' + noun, color: color });
        }
      }
    });
    return Array.from(map.values()).slice(0, 10);
  }

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

  function initSequenceUI() {
    const aside = document.querySelector('aside');
    const story = document.getElementById('intro');
    if (!aside || !story) return;

    if (!document.getElementById('kid-goal-banner')) {
      const goalDiv = document.createElement('div');
      goalDiv.id = 'kid-goal-banner';
      goalDiv.style.cssText = 'background:#dbeafe;border:2px solid #3b82f6;color:#1e3a8a;padding:12px 16px;border-radius:16px;font-weight:800;margin-bottom:14px;font-size:1rem;display:block;';
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

      const missionVocabHtml = vocabList.length
        ? '<strong style="font-size:0.85rem;color:#334155;display:block;margin-bottom:6px;">🔊 Palabras de la misión:</strong>' +
          '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">' +
            vocabList.map(w => '<button type="button" onclick="speakPlus(\'' + w.full.replace(/'/g, "\\'") + '\', false)" style="background:white;color:' + w.color + ';border:2px solid ' + w.color + ';padding:4px 8px;border-radius:10px;font-size:0.8rem;min-height:auto;font-weight:800;">🔊 ' + w.full + '</button>').join('') +
          '</div>'
        : '';

      const box = document.createElement('div');
      box.id = 'entdecker-box-fixed';
      box.style.cssText = 'background:#f8fafc;border:3px solid #8b5cf6;border-radius:18px;padding:14px;margin-bottom:16px;';
      box.innerHTML =
        '<div style="font-family:Fredoka,sans-serif;color:#5b21b6;font-size:1.1rem;margin-bottom:8px;">🧭 Entdecker-Box <small style="display:block;font-family:Nunito,sans-serif;font-size:0.78rem;color:#64748b;">Tu ayuda siempre disponible</small></div>' +
        '<div style="background:#f3e8ff;padding:10px;border-radius:12px;font-size:0.85rem;margin-bottom:10px;line-height:1.4;">' +
          '<strong style="color:#6d28d9;display:block;margin-bottom:4px;">💡 ' + grammar.title + '</strong>' + grammar.rule +
        '</div>' +
        missionVocabHtml +
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
  function renderPhaseMenu(stepNum, totalTasks) {
    const nav = document.getElementById('nav');
    if (!nav) return;

    let bar = document.getElementById('phase-menu-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'phase-menu-bar';
      bar.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:10px;margin-bottom:12px;';
      nav.parentNode.insertBefore(bar, nav);
    }

    const q1 = 0;
    const q2 = Math.floor(totalTasks * 0.3);
    const q3 = Math.floor(totalTasks * 0.6);
    const q4 = Math.max(q3 + 1, totalTasks - 2);

    const phases = [
      { label: '🧭 1. Entdecken', sub: 'Descubrir', start: q1, active: stepNum - 1 < q2 },
      { label: '🎮 2. Üben', sub: 'Practicar', start: q2, active: stepNum - 1 >= q2 && stepNum - 1 < q3 },
      { label: '🎤 3. Sprechen', sub: 'Hablar', start: q3, active: stepNum - 1 >= q3 && stepNum - 1 < q4 },
      { label: '🏆 4. Schatz', sub: 'Tesoro final', start: q4, active: stepNum - 1 >= q4 }
    ];

    bar.innerHTML = phases.map(p => {
      const bg = p.active ? '#8b5cf6' : '#ffffff';
      const color = p.active ? '#ffffff' : '#334155';
      const border = p.active ? '#6d28d9' : '#cbd5e1';
      return '<button type="button" onclick="document.querySelector(\'#nav [data-go=\\\'' + p.start + '\\\']\')?.click()" ' +
        'style="background:' + bg + ';color:' + color + ';border:2px solid ' + border + ';border-radius:14px;padding:8px 10px;text-align:center;cursor:pointer;box-shadow:0 3px 0 rgba(0,0,0,0.06);">' +
        '<div style="font-family:Fredoka,sans-serif;font-size:1rem;">' + p.label + '</div>' +
        '<div style="font-size:0.74rem;opacity:0.82;font-family:Nunito,sans-serif;">' + p.sub + '</div>' +
      '</button>';
    }).join('');
  }

  function getCommunicativePrompt(taskData) {
    const kind = taskData.at(0);
    const rawDe = String(taskData.at(3) || 'Hör zu!');
    const rawEs = String(taskData.at(2) || '');

    if (kind === 'dialogue') {
      const hasSpoiler = /^(Frag|Sag)/i.test(rawDe);
      return {
        tag: '🗣️ Dialog · Was sagst du? (¿Qué dices tú?)',
        main: hasSpoiler ? ('Situation: ' + rawEs) : ('«' + rawDe + '»'),
        sub: hasSpoiler ? 'Piensa cómo hacer la pregunta o respuesta en alemán (usa tu Entdecker-Box).' : rawEs
      };
    }
    if (kind === 'order') {
      const hasSpoiler = rawDe.includes(':');
      return {
        tag: '🧩 Satzbau · Ordena la oración',
        main: hasSpoiler ? 'Hör zu und baue den Satz! (Escucha y ordena la frase)' : ('«' + rawDe + '»'),
        sub: rawEs
      };
    }
    return {
      tag: null,
      main: '«' + rawDe + '»',
      sub: rawEs
    };
  }

  function enhanceStep() {
    const content = document.getElementById('content');
    if (!content) return;

    const stepText = content.querySelector('.step')?.textContent || 'Aufgabe 1';
    const matchStep = stepText.match(/Aufgabe\s+(\d+)/i);
    const stepNum = matchStep ? parseInt(matchStep.at(1), 10) : 1;

    renderPhaseMenu(stepNum, mission.tasks.length);

    const scene = content.querySelector('.scene');
    if (scene && !scene.dataset.upgraded) {
      scene.dataset.upgraded = '1';
      const theme = WORLD_THEMES[worldNum];
      const artText = scene.querySelector('.scene-art')?.textContent || '';
      const char = getCharacter(artText, theme);
      const taskData = mission.tasks[stepNum - 1] || [];
      const comm = getCommunicativePrompt(taskData);

      const oldH3 = content.querySelector('h3');
      const oldEs = content.querySelector('p.es');
      if (oldH3) oldH3.style.display = 'none';
      if (oldEs) oldEs.style.display = 'none';

      scene.style.background = theme.bg;
      scene.style.border = '3px solid ' + theme.border;
      scene.style.borderRadius = '22px';
      scene.style.padding = '18px';
      scene.style.margin = '14px 0';
      scene.style.minHeight = 'auto';

      scene.innerHTML =
        '<div class="comic-top">' +
          '<span class="comic-badge" style="border:1.5px solid ' + theme.border + ';">' + theme.badge + '</span>' +
          '<span style="font-size:1.5rem;letter-spacing:4px;">' + artText + '</span>' +
        '</div>' +
        '<div class="comic-body">' +
          '<div class="comic-avatar" style="border:3px solid ' + theme.border + ';">' + char.icon + '</div>' +
          '<div class="comic-bubble">' +
            '<div style="font-size:0.8rem;font-weight:800;color:' + (comm.tag ? '#7c3aed' : '#64748b') + ';margin-bottom:4px;">' + (comm.tag || ('💬 ' + char.name + ' sagt:')) + '</div>' +
            '<div style="font-family:Fredoka,sans-serif;font-size:1.18rem;color:#0f172a;line-height:1.3;">' + comm.main + '</div>' +
            '<div style="font-size:0.88rem;color:#475569;margin-top:4px;">' + comm.sub + '</div>' +
          '</div>' +
        '</div>';
    }

    // Reto Integrador en Misiones de Jefe (5, 10, 15, 20, 24) en el paso final
    const bossMissions = new Set([5, 10, 15, 20, 24]);
    if (bossMissions.has(id) && stepNum === mission.tasks.length && !content.querySelector('#boss-spiral-box')) {
      const bossBox = document.createElement('div');
      bossBox.id = 'boss-spiral-box';
      bossBox.style.cssText = 'background:#fef3c7;border:2px solid #f59e0b;border-radius:16px;padding:14px;margin:14px 0;';
      bossBox.innerHTML =
        '<strong style="color:#92400e;display:block;margin-bottom:4px;">👑 Reto Integrador del Mundo ' + worldNum + ' (Repaso en Espiral):</strong>' +
        '<p style="font-size:0.88rem;color:#78350f;margin:0;">Antes de reclamar tu tesoro, combina en voz alta <b>una palabra del Mundo anterior</b> + <b>una estructura nueva de este Mundo</b>.</p>';
      if (scene) scene.parentNode.insertBefore(bossBox, scene.nextSibling);
    }

    // Reto extra de números hasta 100 / horas en el Mundo 3 (Misión 13 y 15)
    if ((id === 13 || id === 15) && stepNum === 7 && !content.querySelector('#num-boost-box')) {
      const numBox = document.createElement('div');
      numBox.id = 'num-boost-box';
      numBox.style.cssText = 'background:#e0f2fe;border:2px solid #0284c7;border-radius:16px;padding:14px;margin:14px 0;';
      numBox.innerHTML =
        '<strong style="color:#0369a1;display:block;margin-bottom:6px;">🔢 Desafío Extra de Nivel (Números hasta 100):</strong>' +
        '<p style="font-size:0.88rem;margin:0 0 8px;">Escucha y escribe en cifras el código avanzado del laboratorio:</p>' +
        '<button type="button" class="secondary" onclick="speakPlus(\'vierundachtzig\', true)">🔊 Escuchar código (84)</button> ' +
        '<button type="button" class="secondary" onclick="speakPlus(\'siebenunddreißig\', true)">🔊 Escuchar código (37)</button>';
      if (scene) scene.parentNode.insertBefore(numBox, scene.nextSibling);
    }

    const slowBtns = content.querySelectorAll('[data-slow-plus]');
    if (slowBtns.length > 1) {
      for (let i = 1; i < slowBtns.length; i++) slowBtns[i].remove();
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

    const footerDiv = content.querySelector('.footer');
    if (footerDiv && !content.querySelector('.rec-bar')) {
      const recDiv = document.createElement('div');
      recDiv.className = 'rec-bar';
      recDiv.innerHTML =
        '<button type="button" onclick="toggleVoiceRec(this)">🎙️ Grabar mi voz</button>' +
        '<span style="font-size:0.85rem;color:#0369a1;font-weight:700;">Practica pronunciando en voz alta y escúchate</span>';
      footerDiv.parentNode.insertBefore(recDiv, footerDiv);
    }

    const optionsBox = content.querySelector('.options');
    if (optionsBox && stepNum >= 8 && !content.querySelector('#write-challenge') && !optionsBox.querySelector('button[disabled]')) {
      const targetBtn = Array.from(optionsBox.querySelectorAll('button')).find(b => b.dataset.answer !== undefined);
      if (targetBtn) {
        optionsBox.style.display = 'none';
        const challenge = document.createElement('div');
        challenge.id = 'write-challenge';
        challenge.style.cssText = 'background:#f0fdf4;border:2px solid #86efac;border-radius:16px;padding:14px;margin:14px 0;';
        challenge.innerHTML =
          '<strong style="color:#166534;display:block;margin-bottom:6px;">✍️ Reto Final de Escritura (Producción):</strong>' +
          '<input type="text" id="german-input" placeholder="Escribe la respuesta en alemán..." style="width:100%;margin-bottom:8px;padding:10px;border-radius:10px;border:2px solid #86efac;">' +
          '<div style="display:flex;gap:6px;margin-bottom:10px;">' +
            ['ä', 'ö', 'ü', 'ß'].map(ch => '<button type="button" class="secondary" style="min-height:36px;padding:4px 12px;" onclick="const i=document.getElementById(\'german-input\');i.value+=\'' + ch + '\';i.focus();">' + ch + '</button>').join('') +
          '</div>' +
          '<div id="write-feedback" style="font-size:0.85rem;color:#b45309;font-weight:700;margin-bottom:8px;display:none;"></div>' +
          '<button type="button" id="check-write-btn" style="background:#16a34a;color:white;padding:8px 16px;border-radius:10px;border:none;font-weight:800;cursor:pointer;">✅ Comprobar</button> ' +
          '<button type="button" class="secondary" id="show-opts-btn">Ver opciones</button>';
        optionsBox.parentNode.insertBefore(challenge, optionsBox);

document.getElementById('show-opts-btn').onclick = function() { challenge.remove(); optionsBox.style.display = 'grid'; };
document.getElementById('check-write-btn').onclick = function() {
const val = document.getElementById('german-input').value.trim().toLowerCase().replace(/[.!?]/g, '');
const match = Array.from(optionsBox.querySelectorAll('button')).find(b => b.textContent.trim().toLowerCase().replace(/[.!?]/g, '') === val);
if (match) {
match.click();
} else {
const fb = document.getElementById('write-feedback');
fb.textContent = '💡 Casi... Revisa las terminaciones o artículos en tu Entdecker-Box a la derecha e inténtalo de nuevo.';
fb.style.display = 'block';
}
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
