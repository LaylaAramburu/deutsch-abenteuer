(function() {
  'use strict';
  const id = Number(document.body.dataset.mission || 6);
  const mission = window.DEUTSCH_MISSIONS && window.DEUTSCH_MISSIONS[id];
  if (!mission) return;

  // 1. ESTILOS LIMPIOS PARA VIÑETAS, BOTONES Y ETIQUETAS CASA/CLASE
  const style = document.createElement('style');
  style.textContent =
    '.comic-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }' +
    '.comic-badge { background: white; padding: 4px 12px; border-radius: 99px; font-size: 0.82rem; font-weight: 800; color: #334155; }' +
    '.mode-tag { padding: 4px 12px; border-radius: 99px; font-size: 0.8rem; font-weight: 800; }' +
    '.mode-home { background: #fef3c7; color: #92400e; border: 1.5px solid #f59e0b; }' +
    '.mode-class { background: #e0e7ff; color: #3730a3; border: 1.5px solid #6366f1; }' +
    '.comic-body { display: flex; align-items: center; gap: 14px; text-align: left; }' +
    '.comic-avatar { background: white; border-radius: 50%; width: 66px; height: 66px; display: flex; align-items: center; justify-content: center; font-size: 2.3rem; flex-shrink: 0; box-shadow: 0 4px 8px rgba(0,0,0,0.08); }' +
    '.comic-bubble { background: white; border: 2px solid #cbd5e1; border-radius: 18px; padding: 14px 18px; flex: 1; box-shadow: 0 3px 0 #e2e8f0; }' +
    'article#content .oral { display: block !important; background: #eff6ff !important; border: 2px solid #93c5fd !important; border-radius: 16px !important; padding: 14px !important; margin: 18px 0 !important; line-height: 1.6 !important; clear: both !important; }' +
    'article#content .actions { display: flex !important; flex-wrap: wrap !important; gap: 12px !important; margin: 18px 0 !important; width: 100% !important; clear: both !important; }' +
    'article#content .footer { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-top: 24px !important; padding-top: 18px !important; border-top: 2px dashed #cbd5e1 !important; width: 100% !important; clear: both !important; }' +
    '.rec-bar { display: flex !important; flex-wrap: wrap !important; align-items: center !important; gap: 12px !important; background: #f0f9ff !important; border: 2px solid #7dd3fc !important; padding: 12px 16px !important; border-radius: 14px !important; margin: 16px 0 !important; width: 100% !important; clear: both !important; }' +
    '.rec-bar button { background: #0284c7 !important; color: white !important; border: none !important; padding: 8px 16px !important; border-radius: 10px !important; font-weight: 800 !important; cursor: pointer !important; min-height: 40px !important; }';
  document.head.appendChild(style);

  // 2. MICRO-REGLAS GRAMATICALES POR MISIÓN
  const MISSION_GRAMMAR = {
    1: { title: 'Presentación y amigos (SEIN / HEIßEN)', rule: '• <i>Ich <b>heiße</b>... / Das <b>ist</b> mein Freund.</i><br>• Verbo siempre en <b>2.ª posición</b>.' },
    2: { title: 'Ubicación con WO y direcciones', rule: '• <i><b>Wo</b> ist der Sportplatz?</i> (¿Dónde está?)<br>• <i>links</i> (izquierda), <i>rechts</i> (derecha), <i>in der Mitte</i> (centro).' },
    3: { title: 'Escuela y mochila en Acusativo', rule: '• Solo cambia masculino (<span style="color:#2563eb;font-weight:800">der -> den / einen</span>):<br><i>Ich habe <b>einen</b> Stift, <b>eine</b> Tasche und <b>ein</b> Heft.</i>' },
    4: { title: 'Adjetivos de color después de SEIN', rule: '• Sin terminación después del verbo:<br><i>Der Ball <b>ist rot</b>. Die Schuhe <b>sind blau</b>.</i>' },
    5: { title: 'Cuerpo y deporte: verbos en presente', rule: '• <i>ich lauf<b>e</b> · du läuf<b>st</b> · er/sie läuf<b>t</b> · wir spiel<b>en</b>.</i><br>• Cambio vocal <b>a -> ä</b> en <i>du</i> y <i>er/sie</i>.' },
    6: { title: 'W-Fragen: WER (quién) y WAS (qué)', rule: '• <i><b>Wer</b> isst?</i> (Persona) · <i><b>Was</b> trinkt der Freund?</i> (Objeto).<br>• Verbo siempre en <b>2.ª posición</b>.' },
    7: { title: 'Lugar con Dativo: IN DER / IM', rule: '• <i><b>Wo</b> bist du?</i> -> <i><b>In der</b> Schule</i> (<span style="color:#dc2626">die</span>) · <i><b>Im</b> Park</i> (<span style="color:#2563eb">der</span>) · <i><b>Im</b> Bad</i> (<span style="color:#16a34a">das</span>).' },
    8: { title: 'Precios y plural: WIE VIEL KOSTET / KOSTEN?', rule: '• Singular: <i>Wie viel <b>kostet</b> der Ball?</i><br>• Plural: <i>Wie viel <b>kosten</b> die Stifte?</i>' },
    9: { title: 'Horas exactas y medias (WIE SPÄT IST ES?)', rule: '• Exacta: <i>Es ist <b>acht Uhr</b></i> (8:00).<br>• Media: <i>Es ist <b>halb neun</b></i> (8:30, media para las 9).' },
    10: { title: 'Síntesis de W-Fragen (Mundo 2)', rule: '• <b>Wer</b> · <b>Was</b> · <b>Wo</b> · <b>Wann</b> · <b>Wie viel</b> + Verbo (pos. 2).' },
    11: { title: 'Acusativo con objetos y cuerpo', rule: '• <i>Ich brauche <b>den</b> Helm (<span style="color:#2563eb">der</span>) und <b>eine</b> Flasche (<span style="color:#dc2626">die</span>).</i>' },
    12: { title: 'Negación de sustantivos: KEIN / KEINE / KEINEN', rule: '• <i>Das ist <b>kein</b> Heft</i> (<span style="color:#16a34a">das</span>) · <i><b>keine</b> Pause</i> (<span style="color:#dc2626">die</span>) · <i><b>keinen</b> Ball</i> (<span style="color:#2563eb">der</span>).' },
    13: { title: 'Números hasta 100 (Unidad + und + Decena)', rule: '• 24 = <i>vier<b>und</b>zwanzig</i> · 65 = <i>fünf<b>und</b>sechzig</i>.' },
    14: { title: 'Escuela: LESEN, SEHEN, SPRECHEN', rule: '• <i>du <b>liest</b> / er <b>liest</b></i> · <i>du <b>siehst</b> / er <b>sieht</b></i> · <i>du <b>sprichst</b> / er <b>spricht</b></i>.' },
    15: { title: 'Síntesis del Laboratorio (Números + Negación)', rule: '• <i>Wir haben <b>vierzig</b> Punkte, aber <b>keinen</b> Fehler.</i>' },
    16: { title: 'Clima y deporte: WIE IST DAS WETTER?', rule: '• <i>Es <b>regnet</b></i> (llueve) · <i>Die Sonne <b>scheint</b></i>.<br>• <i>Bei Sonne spielen wir Fußball!</i>' },
    17: { title: 'Transporte a la escuela: MIT DEM / MIT DER', rule: '• <i>Ich fahre <b>mit dem</b> Bus / Fahrrad</i> (<span style="color:#2563eb">der</span>/<span style="color:#16a34a">das</span>) · <i><b>mit der</b> U-Bahn</i> (<span style="color:#dc2626">die</span>).' },
    18: { title: 'Dirección: WOHIN? (¿Adónde?)', rule: '• <i><b>Wohin</b> gehst du?</i> -> <i><b>Zum</b> Sportplatz</i> · <i><b>Zur</b> Schule</i> · <i><b>Nach</b> Hause</i>.' },
    19: { title: 'Horario escolar y amigos: AM y IM', rule: '• Días: <i><b>am</b> Montag, <b>am</b> Samstag</i>.<br>• Meses/estaciones: <i><b>im</b> Juli, <b>im</b> Sommer</i>.' },
    20: { title: 'Orden de la oración (Tiempo antes que Lugar)', rule: '• <i>Wir trainieren <b>am Freitag</b> (cuándo) <b>im Park</b> (dónde).</i>' },
    21: { title: 'Preposiciones espaciales con Dativo (Wo?)', rule: '• <i><b>auf</b> dem Tisch</i> · <i><b>unter</b> dem Stuhl</i> · <i><b>neben</b> der Tafel</i>.' },
    22: { title: 'Preguntas con WARUM y WANN', rule: '• <i><b>Warum</b> machst du Sport?</i> -> <i>Weil es Spaß macht!</i>' },
    23: { title: 'Verbo modal KÖNNEN + Trato formal SIE', rule: '• <i><b>Können</b> Sie mir bitte <b>helfen</b>?</i> (2.º verbo al final).' },
    24: { title: 'Gran Síntesis A1 · Conectores UND, ABER, ODER', rule: '• <i>Ich gehe in die Schule, spiele Fußball <b>und</b> spreche Deutsch!</i>' }
  };
  // 3. OBJETIVOS PEDAGÓGICOS EN LENGUAJE MOTIVADOR PARA 10 AÑOS
  const KID_GOALS = {
    1: '🎯 Tu reto: Presentarte a ti, a tus amigos y a tu familia en alemán.',
    2: '🎯 Tu reto: Seguir las pistas del mapa usando izquierda, derecha y centro.',
    3: '🎯 Tu reto: Preparar la mochila de la escuela usando ein, eine y einen.',
    4: '🎯 Tu reto: Devolver los colores a la ropa y objetos deportivos.',
    5: '🎯 Tu reto: Dominar las partes del cuerpo y las acciones de deporte.',
    6: '🎯 Tu reto: Descubrir quién come y bebe qué en familia usando Wer y Was.',
    7: '🎯 Tu reto: Encontrar las habitaciones de la casa y la escuela con Wo.',
    8: '🎯 Tu reto: Comprar material escolar y deportivo contando euros en alemán.',
    9: '🎯 Tu reto: Organizar el horario escolar y deportivo diciendo las horas.',
    10: '🎯 Tu reto: Resolver el acertijo final combinando todas las W-Fragen.',
    11: '🎯 Tu reto: Revisar el equipo deportivo y el cuerpo usando el acusativo.',
    12: '🎯 Tu reto: Clasificar objetos de la escuela y familia usando kein y keine.',
    13: '🎯 Tu reto: Descifrar los códigos matemáticos con números hasta 100.',
    14: '🎯 Tu reto: Contar qué leen, ven y hablan tus amigos y familia.',
    15: '🎯 Tu reto: Superar el reto integrador combinando números y negación.',
    16: '🎯 Tu reto: Elegir el deporte adecuado según el clima en alemán.',
    17: '🎯 Tu reto: Viajar a la escuela y al entrenamiento usando mit dem y mit der.',
    18: '🎯 Tu reto: Orientarte en la ciudad preguntando Wohin? (¿Adónde?).',
    19: '🎯 Tu reto: Planear cumpleaños familiares y partidos con días y meses.',
    20: '🎯 Tu reto: Ordenar frases combinando tiempo, clima y lugar.',
    21: '🎯 Tu reto: Ubicar objetos de clase y deporte con auf, unter y neben.',
    22: '🎯 Tu reto: Explicar por qué te gusta un deporte o materia con Warum.',
    23: '🎯 Tu reto: Pedir ayuda cortésmente en la escuela o club usando können y Sie.',
    24: '🎯 Tu reto: Completar la gran aventura final demostrando todo tu alemán A1.'
  };

  // 4. CINCO PALABRAS NUEVAS POR MISIÓN (FAMILIA · ESCUELA · AMIGOS · CUERPO · DEPORTE)
  const EXTRA_VOCAB = {
    1: [['der Bruder', 'el hermano', 'm'], ['die Schwester', 'la hermana', 'f'], ['das Kind', 'el niño / hijo', 'n'], ['heißen', 'llamarse', 'v'], ['wohnen', 'vivir', 'v']],
    2: [['der Freund', 'el amigo', 'm'], ['die Freundin', 'la amiga', 'f'], ['das Team', 'el equipo', 'n'], ['gehen', 'ir / caminar', 'v'], ['suchen', 'buscar', 'v']],
    3: [['der Bleistift', 'el lápiz', 'm'], ['die Schere', 'las tijeras', 'f'], ['das Lineal', 'la regla', 'n'], ['packen', 'empacar', 'v'], ['brauchen', 'necesitar', 'v']],
    4: [['der Radiergummi', 'la goma', 'm'], ['die Schultasche', 'la mochila escolar', 'f'], ['das Mäppchen', 'el estuche', 'n'], ['malen', 'pintar / dibujar', 'v'], ['finden', 'encontrar', 'v']],
    5: [['der Kopf', 'la cabeza', 'm'], ['die Hand', 'la mano', 'f'], ['das Bein', 'la pierna', 'n'], ['laufen', 'correr', 'v'], ['springen', 'saltar', 'v']],
    6: [['der Vater', 'el padre', 'm'], ['die Mutter', 'la madre', 'f'], ['das Frühstück', 'el desayuno', 'n'], ['essen', 'comer', 'v'], ['trinken', 'beber', 'v']],
    7: [['der Raum', 'el aula / sala', 'm'], ['die Schule', 'la escuela', 'f'], ['das Klassenzimmer', 'el salón de clase', 'n'], ['lernen', 'aprender', 'v'], ['sitzen', 'estar sentado', 'v']],
    8: [['der Ball', 'la pelota', 'm'], ['die Flasche', 'la botella', 'f'], ['das Trikot', 'la camiseta deportiva', 'n'], ['kaufen', 'comprar', 'v'], ['kosten', 'costar', 'v']],
    9: [['der Unterricht', 'la clase / lección', 'm'], ['die Pause', 'el recreo / pausa', 'f'], ['das Training', 'el entrenamiento', 'n'], ['beginnen', 'empezar', 'v'], ['warten', 'esperar', 'v']],
    10: [['der Großvater', 'el abuelo', 'm'], ['die Großmutter', 'la abuela', 'f'], ['das Rätsel', 'el acertijo', 'n'], ['fragen', 'preguntar', 'v'], ['wissen', 'saber', 'v']],
    11: [['der Fuß', 'el pie', 'm'], ['die Schulter', 'el hombro', 'f'], ['das Knie', 'la rodilla', 'n'], ['bewegen', 'mover', 'v'], ['helfen', 'ayudar', 'v']],
    12: [['der Fehler', 'el error', 'm'], ['die Hausaufgabe', 'la tarea', 'f'], ['das Heft', 'el cuaderno', 'n'], ['prüfen', 'comprobar', 'v'], ['ordnen', 'ordenar', 'v']],
    13: [['der Lehrer', 'el profesor', 'm'], ['die Tafel', 'la pizarra', 'f'], ['das Ergebnis', 'el resultado', 'n'], ['rechnen', 'calcular', 'v'], ['zählen', 'contar', 'v']],
    14: [['der Satz', 'la oración', 'm'], ['die Geschichte', 'la historia', 'f'], ['das Wort', 'la palabra', 'n'], ['lesen', 'leer', 'v'], ['schreiben', 'escribir', 'v']],
    15: [['der Sportler', 'el deportista', 'm'], ['die Mannschaft', 'el equipo deportivo', 'f'], ['das Ziel', 'la meta / portería', 'n'], ['gewinnen', 'ganar', 'v'], ['lösen', 'resolver', 'v']],
    16: [['der Sportplatz', 'la cancha deportiva', 'm'], ['die Sonne', 'el sol', 'f'], ['das Schwimmbad', 'la piscina', 'n'], ['schwimmen', 'nadar', 'v'], ['spielen', 'jugar', 'v']],
    17: [['der Schulbus', 'el autobús escolar', 'm'], ['die Haltestelle', 'la parada', 'f'], ['das Fahrrad', 'la bicicleta', 'n'], ['fahren', 'ir en vehículo', 'v'], ['ankommen', 'llegar', 'v']],
    18: [['der Park', 'el parque', 'm'], ['die Bibliothek', 'la biblioteca', 'f'], ['das Kino', 'el cine', 'n'], ['treffen', 'encontrarse', 'v'], ['besuchen', 'visitar', 'v']],
    19: [['der Onkel', 'el tío', 'm'], ['die Tante', 'la tía', 'f'], ['das Wochenende', 'el fin de semana', 'n'], ['feiern', 'celebrar', 'v'], ['planen', 'planear', 'v']],
    20: [['der Cousin', 'el primo', 'm'], ['die Cousine', 'la prima', 'f'], ['das Fest', 'la fiesta', 'n'], ['einladen', 'invitar', 'v'], ['tanzen', 'bailar', 'v']],
    21: [['der Arm', 'el brazo', 'm'], ['die Nase', 'la nariz', 'f'], ['das Auge', 'el ojo', 'n'], ['stehen', 'estar de pie', 'v'], ['zeigen', 'señalar', 'v']],
    22: [['der Grund', 'el motivo', 'm'], ['die Idee', 'la idea', 'f'], ['das Hobby', 'el pasatiempo', 'n'], ['erklären', 'explicar', 'v'], ['erzählen', 'contar', 'v']],
    23: [['der Trainer', 'el entrenador', 'm'], ['die Lehrerin', 'la profesora', 'f'], ['das Geschenk', 'el regalo', 'n'], ['danken', 'agradecer', 'v'], ['mitbringen', 'traer consigo', 'v']],
    24: [['der Sieger', 'el ganador', 'm'], ['die Familie', 'la familia', 'f'], ['das Abenteuer', 'la aventura', 'n'], ['schaffen', 'lograr', 'v'], ['verabschieden', 'despedirse', 'v']]
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

  // PERSONAJES CON ROLES COTIDIANOS ÚTILES PARA A1
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

  // RECOPILAR VOCABULARIO ACUMULADO DE MISIONES ANTERIORES (APRENDIZAJE EN ESPIRAL)
  function getSpiralVocab() {
    const past = [];
    for (let m = Math.max(1, id - 3); m < id; m++) {
      if (EXTRA_VOCAB[m]) {
        EXTRA_VOCAB[m].forEach(item => past.push(item));
      }
    }
    return past;
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
      const spiralList = getSpiralVocab();
      const typeColor = { m: '#2563eb', f: '#dc2626', n: '#16a34a', v: '#334155' };

      const missionVocabHtml = vocabList.length
        ? '<strong style="font-size:0.85rem;color:#334155;display:block;margin-bottom:6px;">🔊 Palabras de la misión:</strong>' +
          '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">' +
            vocabList.map(w => '<button type="button" onclick="speakPlus(\'' + w.full.replace(/'/g, "\\'") + '\', false)" style="background:white;color:' + w.color + ';border:2px solid ' + w.color + ';padding:4px 8px;border-radius:10px;font-size:0.8rem;min-height:auto;font-weight:800;">🔊 ' + w.full + '</button>').join('') +
          '</div>'
        : '';

      const spiralHtml = spiralList.length
        ? '<details style="margin-top:12px;background:#f1f5f9;padding:8px 10px;border-radius:12px;border:1.5px solid #cbd5e1;">' +
            '<summary style="font-weight:800;font-size:0.82rem;color:#475569;cursor:pointer;">📚 Ya sabes (Vocabulario anterior · ' + spiralList.length + ')</summary>' +
            '<div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;">' +
              spiralList.map(([de, es, tp]) => {
                const c = typeColor[tp] || '#334155';
                return '<button type="button" onclick="speakPlus(\'' + de.replace(/'/g, "\\'") + '\', false)" title="' + es + '" ' +
                  'style="background:white;color:' + c + ';border:1px solid ' + c + ';padding:3px 7px;border-radius:8px;font-size:0.75rem;min-height:auto;font-weight:700;">' +
                  de + '</button>';
              }).join('') +
            '</div>' +
          '</details>'
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
        '<strong style="font-size:0.85rem;color:#0f172a;display:block;margin-bottom:6px;">✨ 5 Palabras Nuevas (Familia, Escuela, Cuerpo):</strong>' +
        '<div style="display:flex;flex-direction:column;gap:5px;">' +
          extras.map(([de, es, tp]) => {
            const c = typeColor[tp] || '#334155';
            const icon = tp === 'v' ? '⚡' : '🔊';
            const tag = tp === 'v' ? 'acción' : tp === 'm' ? 'der' : tp === 'f' ? 'die' : 'das';
            return '<button type="button" onclick="speakPlus(\'' + de.replace(/'/g, "\\'") + '\', false)" ' +
              'style="display:flex;justify-content:space-between;align-items:center;background:white;color:' + c + ';border:1.5px solid ' + c + ';padding:5px 10px;border-radius:10px;font-size:0.82rem;min-height:auto;font-weight:800;text-align:left;">' +
'' + icon + ' ' + de + '' + es + ' (' + tag + ')';
}).join('') +
'' +
spiralHtml;
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
      { label: '🧭 1. Entdecken', sub: 'Descubrir · 🏠', start: q1, active: stepNum - 1 < q2 },
      { label: '🎮 2. Üben', sub: 'Practicar · 🏠', start: q2, active: stepNum - 1 >= q2 && stepNum - 1 < q3 },
      { label: '🎤 3. Sprechen', sub: 'Hablar · 🏫', start: q3, active: stepNum - 1 >= q3 && stepNum - 1 < q4 },
      { label: '🏆 4. Schatz', sub: 'Tesoro · 🏫/🏠', start: q4, active: stepNum - 1 >= q4 }
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
    const targetPhrase = String(taskData.at(4) || '');

    if (kind === 'dialogue') {
      const hasSpoiler = /^(Frag|Sag)/i.test(rawDe);
      const topicMatch = targetPhrase.match(/\b(der|die|das|ein|eine|einen)\s+([A-ZÄÖÜ][a-zäöüß]+)/);
      const topicHint = topicMatch ? (' sobre «' + topicMatch.at(0) + '»') : '';
      return {
        tag: '🗣️ Mini-Dialog · Tu objetivo comunicativo',
        main: hasSpoiler ? (rawEs + topicHint) : ('«' + rawDe + '»'),
        sub: 'Elige cómo iniciar la conversación en alemán y luego pronúncialo en voz alta.'
      };
    }
    if (kind === 'order') {
      const hasSpoiler = rawDe.includes(':');
      return {
        tag: '🧩 Satzbau · Ordena la oración',
        main: hasSpoiler ? 'Escucha el audio y ordena las palabras en alemán' : ('«' + rawDe + '»'),
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
      const isHomeTask = stepNum <= Math.floor(mission.tasks.length * 0.6);

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
          '<span class="mode-tag ' + (isHomeTask ? 'mode-home' : 'mode-class') + '">' +
            (isHomeTask ? '🏠 Casa · Práctica autónoma' : '🏫 Clase · Interacción oral') +
          '</span>' +
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

    // Respuesta del personaje en diálogos tras acertar
    const taskNow = mission.tasks[stepNum - 1] || [];
    if (taskNow.at(0) === 'dialogue' && content.querySelector('.notice') && !content.querySelector('#npc-reply-box')) {
      const replies = {
        1: 'Ich heiße Eule! Und wie heißt du?',
        3: 'Ja, ich habe ein Buch und einen Bleistift.',
        4: 'Die Schultasche ist gelb und blau!',
        6: 'Mein Vater isst Brot und meine Mutter trinkt Milch.',
        7: 'Das Klassenzimmer ist oben rechts!',
        8: 'Ein Ball kostet zwei Euro.',
        9: 'Der Unterricht beginnt um halb neun.',
        10: 'Mein Großvater weiß die Antwort!',
        16: 'Heute scheint die Sonne! Wir gehen auf den Sportplatz.',
        17: 'Der Schulbus fährt an Haltestelle zwei.',
        18: 'Der Bus fährt zum Sportplatz.',
        23: 'Ja, natürlich! Ich helfe dir gern.'
      };
      const replyDe = replies[id] || 'Sehr gut! Verstanden!';
      const replyBox = document.createElement('div');
      replyBox.id = 'npc-reply-box';
      replyBox.style.cssText = 'background:#ecfdf5;border:2px solid #10b981;border-radius:16px;padding:12px 16px;margin:12px 0;display:flex;justify-content:space-between;align-items:center;gap:10px;';
      replyBox.innerHTML =
        '<div><strong style="color:#065f46;font-size:0.82rem;display:block;">💬 Respuesta del personaje:</strong>' +
        '<span style="font-family:Fredoka,sans-serif;font-size:1.05rem;color:#0f172a;">«' + replyDe + '»</span></div>' +
        '<button type="button" class="secondary" style="min-height:38px;padding:6px 12px;" onclick="speakPlus(\'' + replyDe.replace(/'/g, "\\'") + '\', false)">🔊 Oír respuesta</button>';
      const oralEl = content.querySelector('.oral');
      if (oralEl) oralEl.parentNode.insertBefore(replyBox, oralEl);
    }

    // Reto Integrador en Misiones de Jefe (5, 10, 15, 20, 24)
    const bossMissions = new Set([5, 10, 15, 20, 24]);
    if (bossMissions.has(id) && stepNum === mission.tasks.length && !content.querySelector('#boss-spiral-box')) {
      const bossBox = document.createElement('div');
      bossBox.id = 'boss-spiral-box';
      bossBox.style.cssText = 'background:#fef3c7;border:2px solid #f59e0b;border-radius:16px;padding:14px;margin:14px 0;';
      bossBox.innerHTML =
        '<strong style="color:#92400e;display:block;margin-bottom:4px;">👑 Reto Integrador del Mundo ' + worldNum + ' (Repaso en Espiral):</strong>' +
        '<p style="font-size:0.88rem;color:#78350f;margin:0;">Antes de reclamar tu tesoro, combina en voz alta una palabra de <b>«📚 Ya sabes»</b> (familia, escuela, cuerpo o deporte) + una estructura nueva de este Mundo.</p>';
      if (scene) scene.parentNode.insertBefore(bossBox, scene.nextSibling);
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
'✍️ Reto Final de Escritura (Producción):' +
'' +
'' +
['ä', 'ö', 'ü', 'ß'].map(ch => '' + ch + '').join('') +
'' +
'' +
'✅ Comprobar ' +
'Ver opciones';
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
