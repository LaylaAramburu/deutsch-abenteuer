(function() {
  'use strict';
  const id = Number(document.body.dataset.mission || 6);
  const mission = window.DEUTSCH_MISSIONS && window.DEUTSCH_MISSIONS[id];
  if (!mission) return;

  // 1. ESTILOS 60-30-10 (CREMA CÁLIDO #FAF8F5 + GRIS CARBÓN #2D3748 + PASTELES)
  const style = document.createElement('style');
  style.textContent =
    'body { background: #FAF8F5 !important; color: #2D3748 !important; }' +
    'main, section, article#content, .card { background: #FFFDF9 !important; color: #2D3748 !important; border-color: #CBD5E1 !important; }' +
    '.comic-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }' +
    '.comic-badge { background: #FAF8F5; padding: 4px 12px; border-radius: 99px; font-size: 0.82rem; font-weight: 800; color: #2D3748; }' +
    '.mode-tag { padding: 4px 12px; border-radius: 99px; font-size: 0.8rem; font-weight: 800; }' +
    '.mode-home { background: #FEF9C3; color: #854D0E; border: 1.5px solid #FACC15; }' +
    '.mode-class { background: #EBF5FB; color: #1E40AF; border: 1.5px solid #93C5FD; }' +
    '.comic-body { display: flex; align-items: center; gap: 14px; text-align: left; }' +
    '.comic-avatar { background: #FAF8F5; border-radius: 50%; width: 66px; height: 66px; display: flex; align-items: center; justify-content: center; font-size: 2.3rem; flex-shrink: 0; box-shadow: 0 4px 8px rgba(45,55,72,0.08); }' +
    '.comic-bubble { background: #FAF8F5; border: 2px solid #CBD5E1; border-radius: 18px; padding: 14px 18px; flex: 1; }' +
    'article#content .oral { display: block !important; background: #EBF5FB !important; border: 2px solid #93C5FD !important; border-radius: 16px !important; padding: 14px !important; margin: 18px 0 !important; line-height: 1.6 !important; clear: both !important; }' +
    'article#content .actions { display: flex !important; flex-wrap: wrap !important; gap: 12px !important; margin: 18px 0 !important; width: 100% !important; clear: both !important; }' +
    'article#content .footer { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-top: 24px !important; padding-top: 18px !important; border-top: 2px dashed #CBD5E1 !important; width: 100% !important; clear: both !important; }' +
    'article#content .footer button.primary, button[data-check] { background: #F97316 !important; color: #FFFDF9 !important; border: none !important; }' +
    '.rec-bar { display: flex !important; flex-wrap: wrap !important; align-items: center !important; gap: 12px !important; background: #E8F8F5 !important; border: 2px solid #6EE7B7 !important; padding: 12px 16px !important; border-radius: 14px !important; margin: 16px 0 !important; width: 100% !important; clear: both !important; }' +
    '.rec-bar button { background: #F97316 !important; color: #FFFDF9 !important; border: none !important; padding: 8px 16px !important; border-radius: 10px !important; font-weight: 800 !important; cursor: pointer !important; min-height: 40px !important; }' +
    '.soft-retry { background: #F3E8FF !important; color: #5B21B6 !important; border: 1.5px solid #C4B5FD !important; padding: 8px 12px; border-radius: 10px; font-weight: 700; font-size: 0.86rem; margin: 8px 0; }';
  document.head.appendChild(style);

  // 2. MICRO-REGLAS GRAMATICALES POR MISIÓN
  const MISSION_GRAMMAR = {
    1: { title: 'Presentación y amigos (SEIN / HEIßEN)', rule: '• <i>Ich <b>heiße</b>... / Das <b>ist</b> mein Freund.</i><br>• Verbo siempre en <b>2.ª posición</b>.' },
    2: { title: 'Ubicación con WO y direcciones', rule: '• <i><b>Wo</b> ist der Sportplatz?</i> (¿Dónde está?)<br>• <i>links</i> (izquierda), <i>rechts</i> (derecha), <i>in der Mitte</i> (centro).' },
    3: { title: 'Escuela y mochila en Acusativo', rule: '• Solo cambia masculino (<span style="color:#2563eb;font-weight:800">der -> den / einen</span>):<br><i>Ich habe <b>einen</b> Stift, <b>eine</b> Tasche und <b>ein</b> Heft.</i>' },
    4: { title: 'Adjetivos de color después de SEIN', rule: '• Sin terminación después del verbo:<br><i>Der Ball <b>ist rot</b>. Die Schuhe <b>sind blau</b>.</i>' },
    5: { title: 'Cuerpo y deporte: verbos en presente', rule: '• <i>ich lauf<b>e</b> · du läuf<b>st</b> · er/sie läuf<b>t</b> · wir spiel<b>en</b>.</i><br>• Cambio vocal <b>a -> ä</b> en <i>du</i> y <i>er/sie</i>.' },
    6: { title: 'W-Fragen: WER (quién) y WAS (qué)', rule: '• <i><b>Wer</b> isst?</i> (Persona) · <i><b>Was</b> trinkt der Koch?</i> (Objeto).<br>• Verbo siempre en <b>2.ª posición</b>.' },
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
  const grammar = MISSION_GRAMMAR[id] || MISSION_GRAMMAR[1];

  // ESCENARIOS EN TONOS PASTELES CALMADOS (REGLA 60-30-10)
  const WORLD_THEMES = {
    1: { bg: 'linear-gradient(135deg, #E8F8F5 0%, #FAF8F5 100%)', border: '#6EE7B7', badge: '🌲 Der Zauberwald', char: '🦊', name: 'Felix' },
    2: { bg: 'linear-gradient(135deg, #EBF5FB 0%, #FAF8F5 100%)', border: '#93C5FD', badge: '🏰 Das Königsschloss', char: '👑', name: 'Die Königin' },
    3: { bg: 'linear-gradient(135deg, #E8F8F5 0%, #EBF5FB 100%)', border: '#5EEAD4', badge: '🧪 Das Geheimlabor', char: '🧑‍🔬', name: 'Der Forscher' },
    4: { bg: 'linear-gradient(135deg, #FEF9C3 0%, #EBF5FB 100%)', border: '#FDE047', badge: '🌀 Die Zeitreise', char: '👨‍✈️', name: 'Der Schaffner' },
    5: { bg: 'linear-gradient(135deg, #E8F8F5 0%, #FEF9C3 100%)', border: '#86EFAC', badge: '🏆 Die Rückkehr', char: '👩', name: 'Die Nachbarin' }
  };

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
      btn.style.background = '#F97316';
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
      btn.style.background = '#7C3AED';
    } catch (e) {
      alert('No se pudo activar el micrófono. Revisa los permisos del navegador.');
    }
  };

  const SPIRAL_CATS = {
    '👨‍👩‍👧 Familia y Amigos': ['der Bruder', 'die Schwester', 'das Kind', 'der Freund', 'die Freundin', 'der Vater', 'die Mutter', 'der Großvater', 'die Großmutter', 'der Onkel', 'die Tante', 'der Cousin', 'die Cousine', 'die Familie'],
    '🏫 Escuela': ['der Bleistift', 'die Schere', 'das Lineal', 'der Radiergummi', 'die Schultasche', 'das Mäppchen', 'der Raum', 'die Schule', 'das Klassenzimmer', 'der Unterricht', 'die Pause', 'die Hausaufgabe', 'das Heft', 'der Lehrer', 'die Tafel', 'der Satz', 'das Wort', 'die Bibliothek', 'die Lehrerin'],
    '⚽ Cuerpo y Deporte': ['das Team', 'der Kopf', 'die Hand', 'das Bein', 'der Ball', 'das Trikot', 'das Training', 'der Fuß', 'die Schulter', 'das Knie', 'der Sportler', 'die Mannschaft', 'das Ziel', 'der Sportplatz', 'das Schwimmbad', 'der Arm', 'die Nase', 'das Auge', 'das Hobby', 'der Trainer'],
    '⚡ Acciones': ['heißen', 'wohnen', 'gehen', 'suchen', 'packen', 'brauchen', 'malen', 'finden', 'laufen', 'springen', 'essen', 'trinken', 'lernen', 'sitzen', 'kaufen', 'kosten', 'beginnen', 'warten', 'fragen', 'wissen', 'bewegen', 'helfen', 'prüfen', 'ordnen', 'rechnen', 'zählen', 'lesen', 'schreiben', 'gewinnen', 'lösen', 'schwimmen', 'spielen', 'fahren', 'ankommen', 'treffen', 'besuchen', 'feiern', 'planen', 'einladen', 'tanzen', 'stehen', 'zeigen', 'erklären', 'erzählen', 'danken', 'mitbringen']
  };

  function getSpiralByCategory() {
    const past = [];
    for (let m = 1; m < id; m++) {
      if (EXTRA_VOCAB[m]) EXTRA_VOCAB[m].forEach(item => past.push(item));
    }
    if (!past.length) return {};
    const grouped = { '👨‍👩‍👧 Familia y Amigos': [], '🏫 Escuela': [], '⚽ Cuerpo y Deporte': [], '⚡ Acciones': [] };
    past.forEach(([de, es, tp]) => {
      if (tp === 'v') grouped['⚡ Acciones'].push([de, es, tp]);
      else if (SPIRAL_CATS['👨‍👩‍👧 Familia y Amigos'].includes(de)) grouped['👨‍👩‍👧 Familia y Amigos'].push([de, es, tp]);
      else if (SPIRAL_CATS['🏫 Escuela'].includes(de)) grouped['🏫 Escuela'].push([de, es, tp]);
      else grouped['⚽ Cuerpo y Deporte'].push([de, es, tp]);
    });
    return grouped;
  }

  function initSequenceUI() {
    const story = document.getElementById('intro');
    if (!story) return;

    if (!document.getElementById('kid-goal-banner')) {
      const goalDiv = document.createElement('div');
      goalDiv.id = 'kid-goal-banner';
      goalDiv.style.cssText = 'background:#EBF5FB;border:2px solid #93C5FD;color:#2D3748;padding:12px 16px;border-radius:16px;font-weight:800;margin-bottom:14px;font-size:1rem;display:block;';
      goalDiv.textContent = KID_GOALS[id] || ('🎯 Tu reto hoy: Completar "' + mission.es + '" en alemán.');
      story.parentNode.insertBefore(goalDiv, story);

      const pad = String(id).padStart(2, '0');
      const hubBar = document.createElement('div');
      hubBar.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;';
      hubBar.innerHTML =
        '<a href="tarjetas-interactivas.html?m=' + id + '" style="background:#F97316;color:#FFFDF9;padding:8px 14px;border-radius:12px;text-decoration:none;font-weight:800;font-size:0.9rem;">🃏 Tarjetas de la Misión ' + id + '</a>' +
        '<a href="TABLERO_VISUAL_MISION_' + pad + '.pdf" target="_blank" style="background:#38BDF8;color:#2D3748;padding:8px 14px;border-radius:12px;text-decoration:none;font-weight:800;font-size:0.9rem;">🎨 Tablero Visual (PDF)</a>' +
        '<a href="Mision_' + pad + '.pdf" download style="background:#34D399;color:#2D3748;padding:8px 14px;border-radius:12px;text-decoration:none;font-weight:800;font-size:0.9rem;">📄 Ficha de Ejercicios (PDF)</a>';
      story.parentNode.insertBefore(hubBar, story);
    }

    // CAJÓN LATERAL DESLIZABLE (PALETA 60-30-10)
    if (!document.getElementById('entdecker-drawer')) {
      const vocabList = extractVocab();
      const extras = EXTRA_VOCAB[id] || [];
      const groupedSpiral = getSpiralByCategory();
      const typeColor = { m: '#2563eb', f: '#dc2626', n: '#16a34a', v: '#2D3748' };

      const missionVocabHtml = vocabList.length
        ? '<strong style="font-size:0.85rem;color:#2D3748;display:block;margin-bottom:6px;">🔊 Palabras de la misión:</strong>' +
          '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">' +
            vocabList.map(w => '<button type="button" onclick="speakPlus(\'' + w.full.replace(/'/g, "\\'") + '\', false)" style="background:#FAF8F5;color:' + w.color + ';border:2px solid ' + w.color + ';padding:4px 8px;border-radius:10px;font-size:0.8rem;min-height:auto;font-weight:800;">🔊 ' + w.full + '</button>').join('') +
          '</div>'
        : '';

      const catKeys = Object.keys(groupedSpiral).filter(k => groupedSpiral[k].length > 0);
      const spiralHtml = catKeys.length
        ? '<details style="margin-top:12px;background:#E8F8F5;padding:8px 10px;border-radius:12px;border:1.5px solid #6EE7B7;">' +
            '<summary style="font-weight:800;font-size:0.82rem;color:#2D3748;cursor:pointer;">📚 Ya sabes (por categorías)</summary>' +
            catKeys.map(cat =>
              '<div style="margin-top:8px;"><div style="font-size:0.75rem;font-weight:800;color:#4A5568;margin-bottom:4px;">' + cat + '</div>' +
              '<div style="display:flex;flex-wrap:wrap;gap:4px;">' +
                groupedSpiral[cat].map(([de, es, tp]) => {
                  const c = typeColor[tp] || '#2D3748';
return '<button type="button" onclick="speakPlus('' + de.replace(/'/g, "\'") + '', false)" title="' + es + '" ' +
'style="background:#FAF8F5;color:' + c + ';border:1px solid ' + c + ';padding:3px 7px;border-radius:8px;font-size:0.74rem;min-height:auto;font-weight:700;">' +
de + '';
}).join('') +
''
).join('') +
''
: '';
const drawer = document.createElement('div');
drawer.id = 'entdecker-drawer';
drawer.style.cssText = 'position:fixed;top:90px;right:0;z-index:9999;display:flex;align-items:flex-start;transition:transform 0.3s ease;transform:translateX(330px);';
drawer.innerHTML =
'🧭 Entdecker-Box' +
'' +
'' +
'🧭 Entdecker-Box' +
'✕ Cerrar' +
'' +
'' +
'💡 ' + grammar.title + '' + grammar.rule +
'' +
missionVocabHtml +
'✨ 5 Palabras Nuevas:' +
'' +
extras.map(([de, es, tp]) => {
const c = typeColor[tp] || '#2D3748';
const icon = tp === 'v' ? '⚡' : '🔊';
return '<button type="button" onclick="speakPlus('' + de.replace(/'/g, "\'") + '', false)" ' +
'style="display:flex;justify-content:space-between;align-items:center;gap:8px;background:#FFFDF9;color:' + c + ';border:1.5px solid ' + c + ';padding:6px 10px;border-radius:10px;font-size:0.82rem;min-height:auto;font-weight:800;text-align:left;">' +
'' + icon + ' ' + de + '' +
' · ' + es + '';
}).join('') +
'' +
spiralHtml +
'';
document.body.appendChild(drawer);
let isOpen = false;
document.getElementById('entdecker-toggle').onclick = function() {
isOpen = !isOpen;
drawer.style.transform = isOpen ? 'translateX(0)' : 'translateX(330px)';
};
}
}
  const MINI_READINGS = {
    1: { title: '💬 Chat de Félix', text: 'Hallo! Ich heiße Felix. Ich bin neun Jahre alt und wohne im Wald. Das ist mein Freund Leo. Leo hat eine Schwester.', q: '¿Cómo se llama el amigo de Félix?', opts: ['Leo', 'Max'], ans: 'Leo' },
    2: { title: '🗺️ Nota en el mapa', text: 'Der Weg zum Sportplatz ist leicht: Geh zuerst links, dann geradeaus. Der Kompass liegt rechts neben dem Baum.', q: '¿Dónde está la brújula?', opts: ['A la derecha, junto al árbol', 'A la izquierda'], ans: 'A la derecha, junto al árbol' },
    3: { title: '🎒 Lista de la mochila', text: 'Heute ist Schule! Ich packe meine Schultasche: Ich brauche einen Bleistift, ein Heft, ein Lineal und eine Flasche Wasser.', q: '¿Qué lleva en la mochila?', opts: ['Un lápiz, un cuaderno, una regla y agua', 'Una pelota y un casco'], ans: 'Un lápiz, un cuaderno, una regla y agua' },
    4: { title: '🎨 Cartel de colores', text: 'Unsere Team-Kleidung: Das Trikot ist blau und gelb. Der Ball ist rot und weiß. Die Schuhe sind grün.', q: '¿De qué color es la pelota?', opts: ['Roja y blanca', 'Azul y amarilla'], ans: 'Roja y blanca' },
    5: { title: '⚽ Entrenamiento', text: 'Im Training bewegen wir den ganzen Körper: Wir laufen schnell, wir springen hoch und wir schießen den Ball mit dem Fuß.', q: '¿Con qué patean la pelota?', opts: ['Con el pie (mit dem Fuß)', 'Con la mano'], ans: 'Con el pie (mit dem Fuß)' },
    6: { title: '🍽️ Menú del banquete', text: 'Heute kocht der Koch für die Familie: Der Vater isst Suppe und Brot. Die Mutter trinkt Wasser und isst einen Apfel.', q: '¿Qué bebe la madre?', opts: ['Agua (Wasser)', 'Leche (Milch)'], ans: 'Agua (Wasser)' },
    7: { title: '🏫 Plano de la escuela', text: 'Wo sind alle? Der Lehrer ist im Klassenzimmer. Die Kinder spielen in der Pause im Garten. Das Bad ist unten links.', q: '¿Dónde están los niños en el recreo?', opts: ['En el jardín (im Garten)', 'En el aula'], ans: 'En el jardín (im Garten)' },
    8: { title: '🏪 Ticket de compra', text: 'Auf dem Markt: Ein Ball kostet fünf Euro. Zwei Hefte kosten vier Euro. Eine Flasche Wasser kostet nur einen Euro.', q: '¿Cuánto cuesta una pelota?', opts: ['5 euros', '4 euros'], ans: '5 euros' },
    9: { title: '🕰️ Horario del día', text: 'Der Unterricht beginnt um acht Uhr. Um halb elf haben wir Pause. Am Nachmittag um vier Uhr beginnt das Fußball-Training.', q: '¿A qué hora empieza el entrenamiento?', opts: ['A las 4:00 (um vier Uhr)', 'A las 8:30 (halb neun)'], ans: 'A las 4:00 (um vier Uhr)' },
    10: { title: '👑 Acertijo de la Reina', text: 'Mein Großvater und meine Großmutter wohnen im Schloss. Sie wissen alles! Frag sie: Wer hat den goldenen Schlüssel?', q: '¿Quién vive en el castillo?', opts: ['Los abuelos (Großvater und Großmutter)', 'El revisor'], ans: 'Los abuelos (Großvater und Großmutter)' },
    11: { title: '🤖 Ficha del Robot', text: 'Robo-X hat ein Problem: Sein rechter Arm und sein linkes Bein funktionieren nicht. Wir brauchen eine neue Batterie!', q: '¿Qué necesita el robot?', opts: ['Una batería nueva', 'Un cuaderno'], ans: 'Una batería nueva' },
    12: { title: '🧪 Notas del Laboratorio', text: 'Achtung! In dieser Flasche ist kein Wasser und keine Milch. Das ist eine geheime Mischung für das Experiment!', q: '¿Hay agua en la botella?', opts: ['No, no hay agua (kein Wasser)', 'Sí, hay leche'], ans: 'No, no hay agua (kein Wasser)' },
    13: { title: '🔢 Código de Seguridad', text: 'Der Lehrer schreibt drei Zahlen an die Tafel: fünfundzwanzig, vierzig und achtundsechzig. Das ist der Code!', q: '¿Qué número es "fünfundzwanzig"?', opts: ['25', '52'], ans: '25' },
    14: { title: '📖 Diario de Clase', text: 'In der Bibliothek: Mia liest eine spannende Geschichte. Tom schreibt einen Satz in sein Heft. Alle sprechen leise.', q: '¿Qué hace Mia en la biblioteca?', opts: ['Lee una historia (liest eine Geschichte)', 'Corre rápido'], ans: 'Lee una historia (liest eine Geschichte)' },
    15: { title: '🏆 Reporte Final', text: 'Unsere Mannschaft hat dreißig Punkte und keinen Fehler! Wir lösen das letzte Rätsel und gewinnen das Spiel.', q: '¿Cuántos errores tiene el equipo?', opts: ['Ninguno (keinen Fehler)', 'Treinta (dreißig)'], ans: 'Ninguno (keinen Fehler)' },
    16: { title: '🌦️ Pronóstico del Clima', text: 'Am Samstag scheint die Sonne und es ist warm: Wir gehen auf den Sportplatz. Am Sonntag regnet es: Wir bleiben zu Hause.', q: '¿Qué hacen el sábado si hace sol?', opts: ['Van a la cancha (Sportplatz)', 'Se quedan en casa'], ans: 'Van a la cancha (Sportplatz)' },
    17: { title: '🚌 Camino a la Escuela', text: 'Wie kommst du zur Schule? Ich fahre oft mit dem Schulbus. Mein Freund Leo fährt lieber mit dem Fahrrad.', q: '¿Cómo va Leo a la escuela?', opts: ['En bicicleta (mit dem Fahrrad)', 'En tren'], ans: 'En bicicleta (mit dem Fahrrad)' },
    18: { title: '🏙️ Plan de la Tarde', text: 'Wohin gehen wir heute? Zuerst gehen wir in die Bibliothek. Danach treffen wir unsere Freunde im Park.', q: '¿Adónde van primero?', opts: ['A la biblioteca', 'Al cine'], ans: 'A la biblioteca' },
    19: { title: '📅 Invitación Familiar', text: 'Im Juli feiert mein Onkel Geburtstag! Am Wochenende besuchen uns meine Tante, mein Cousin und meine Cousine.', q: '¿En qué mes es el cumpleaños del tío?', opts: ['En julio (im Juli)', 'En lunes'], ans: 'En julio (im Juli)' },
    20: { title: '🌀 Mensaje Temporal', text: 'Wir reisen am Freitag um neun Uhr durch das Portal. Bei gutem Wetter feiern wir ein großes Fest im Garten!', q: '¿Cuándo viajan por el portal?', opts: ['El viernes a las nueve', 'El domingo'], ans: 'El viernes a las nueve' },
    21: { title: '🌲 De vuelta en el Bosque', text: 'Schau mal! Der Rucksack liegt unter dem Baum. Das Buch liegt auf dem Tisch und der Ball ist neben dem Stein.', q: '¿Dónde está el libro?', opts: ['Sobre la mesa (auf dem Tisch)', 'Debajo del árbol'], ans: 'Sobre la mesa (auf dem Tisch)' },
    22: { title: '🗣️ Entrevista a un Amigo', text: 'Warum lernst du Deutsch? Weil ich gern reise und neue Freunde treffe! Mein Hobby ist Fußball.', q: '¿Por qué aprende alemán?', opts: ['Porque le gusta viajar y hacer amigos', 'Porque tiene hambre'], ans: 'Porque le gusta viajar y hacer amigos' },
    23: { title: '🤝 En el Club Deportivo', text: 'Entschuldigung, Herr Trainer, können Sie mir bitte helfen? Ich finde meine Trinkflasche nicht.', q: '¿A quién le pide ayuda?', opts: ['Al entrenador (Herr Trainer)', 'Al cocinero'], ans: 'Al entrenador (Herr Trainer)' },
    24: { title: '🎉 Gran Final A1', text: 'Wir haben es geschafft! Meine Familie, meine Freunde und Felix feiern zusammen. Ich spreche jetzt schon viel Deutsch!', q: '¿Con quién celebra el final?', opts: ['Con su familia, amigos y Félix', 'Solo en casa'], ans: 'Con su familia, amigos y Félix' }
  };

  function renderMiniReading(container, missionId) {
    if (container.querySelector('#mini-reading-card')) return;
    const data = MINI_READINGS[missionId];
    if (!data) return;

    const card = document.createElement('div');
    card.id = 'mini-reading-card';
    card.style.cssText = 'background:#EBF5FB;border:2px solid #93C5FD;border-radius:18px;padding:16px;margin:16px 0;';
    card.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
        '<strong style="color:#1E40AF;font-size:0.95rem;">📖 Leseverstehen · ' + data.title + '</strong>' +
        '<button type="button" class="secondary" style="min-height:34px;padding:4px 10px;font-size:0.8rem;" onclick="speakPlus(\'' + data.text.replace(/'/g, "\\'") + '\', true)">🐢 Oír lectura</button>' +
      '</div>' +
      '<p style="background:#FAF8F5;padding:12px;border-radius:12px;font-size:0.98rem;line-height:1.5;color:#2D3748;margin:0 0 10px;border:1px solid #CBD5E1;">' + data.text + '</p>' +
      '<div style="font-weight:800;font-size:0.88rem;color:#2D3748;margin-bottom:8px;">❓ ' + data.q + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px;">' +
        data.opts.map(o => '<button type="button" class="secondary" style="min-height:38px;padding:6px 14px;font-size:0.85rem;" data-ropt="' + o + '">' + o + '</button>').join('') +
      '</div>' +
      '<div id="read-fb" style="margin-top:8px;font-size:0.85rem;font-weight:800;"></div>';

    container.insertBefore(card, container.querySelector('.options') || container.querySelector('.footer'));

    card.querySelectorAll('[data-ropt]').forEach(btn => {
      btn.onclick = () => {
        const fb = document.getElementById('read-fb');
        if (btn.dataset.ropt === data.ans) {
          btn.style.background = '#DCFCE7'; btn.style.borderColor = '#22C55E';
          fb.style.color = '#15803D';
          fb.textContent = '✅ ¡Richtig! Comprensión perfecta. Ahora completa la actividad de abajo:';
        } else {
          fb.style.color = '#6D28D9';
          fb.textContent = '💜 Casi... Vuelve a leer el texto en el recuadro crema e inténtalo de nuevo.';
        }
      };
    });
  }
  function renderCoherentMatch(container) {
    if (container.querySelector('#match-mini-game')) return;
    const pairs = [];
    mission.tasks.forEach(t => {
      const de = String(t.at(4) || '').trim();
      const es = String(t.at(2) || '').trim();
      if (de && es && de.length < 45 && es.length < 45 && pairs.length < 3 && !pairs.some(p => p.at(0) === de)) {
        pairs.push([de, es]);
      }
    });
    if (pairs.length < 2) return;

    const rights = pairs.map((p, idx) => ({ text: p.at(1), idx })).sort(() => Math.random() - 0.5);
    let selectedLeft = null, solved = 0;

    const box = document.createElement('div');
    box.id = 'match-mini-game';
    box.style.cssText = 'background:#E8F8F5;border:2px solid #6EE7B7;border-radius:16px;padding:14px;margin:14px 0;';
    box.innerHTML =
      '<strong style="color:#065F46;display:block;margin-bottom:4px;">🔗 Conecta el alemán de esta misión con su significado:</strong>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px;">' +
        '<div style="display:flex;flex-direction:column;gap:8px;">' +
          pairs.map((p, i) => '<button type="button" data-l="' + i + '" class="secondary" style="text-align:left;padding:8px 12px;min-height:40px;font-size:0.84rem;">🔊 ' + p.at(0) + '</button>').join('') +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:8px;">' +
          rights.map(r => '<button type="button" data-r="' + r.idx + '" class="secondary" style="text-align:left;padding:8px 12px;min-height:40px;font-size:0.84rem;">' + r.text + '</button>').join('') +
        '</div>' +
      '</div>' +
      '<div id="match-status" style="margin-top:8px;font-size:0.85rem;font-weight:800;"></div>';

    container.insertBefore(box, container.querySelector('.options') || container.querySelector('.footer'));

    box.querySelectorAll('[data-l]').forEach(btn => {
      btn.onclick = () => {
        if (btn.disabled) return;
        speakPlus(btn.textContent.replace('🔊 ', ''), false);
        box.querySelectorAll('[data-l]').forEach(b => b.style.borderColor = '#CBD5E1');
        btn.style.borderColor = '#F97316';
        selectedLeft = btn;
      };
    });

    box.querySelectorAll('[data-r]').forEach(btn => {
      btn.onclick = () => {
        if (!selectedLeft || btn.disabled) return;
        const st = document.getElementById('match-status');
        if (selectedLeft.dataset.l === btn.dataset.r) {
          selectedLeft.style.background = '#DCFCE7'; selectedLeft.style.borderColor = '#22C55E'; selectedLeft.disabled = true;
          btn.style.background = '#DCFCE7'; btn.style.borderColor = '#22C55E'; btn.disabled = true;
          selectedLeft = null;
          solved++;
          if (solved === pairs.length) { st.style.color = '#15803D'; st.textContent = '🎉 ¡Muy bien! Vocabulario de la misión conectado.'; }
        } else {
          st.style.color = '#6D28D9';
          st.textContent = '💜 No coincide, escucha otra vez la frase en alemán.';
        }
      };
    });
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

    const q1 = 0, q2 = Math.floor(totalTasks * 0.3), q3 = Math.floor(totalTasks * 0.6), q4 = Math.max(q3 + 1, totalTasks - 2);
    const phases = [
      { label: '🧭 1. Entdecken', sub: 'Descubrir · 🏠', start: q1, active: stepNum - 1 < q2 },
      { label: '🎮 2. Üben', sub: 'Practicar · 🏠', start: q2, active: stepNum - 1 >= q2 && stepNum - 1 < q3 },
      { label: '🎤 3. Sprechen', sub: 'Hablar · 🏫', start: q3, active: stepNum - 1 >= q3 && stepNum - 1 < q4 },
      { label: '🏆 4. Schatz', sub: 'Tesoro · 🏫/🏠', start: q4, active: stepNum - 1 >= q4 }
    ];

    bar.innerHTML = phases.map(p => {
      const bg = p.active ? '#F97316' : '#FFFDF9', color = p.active ? '#FFFDF9' : '#2D3748', border = p.active ? '#EA580C' : '#CBD5E1';
      return '<button type="button" onclick="document.querySelector(\'#nav [data-go=\\\'' + p.start + '\\\']\')?.click()" ' +
        'style="background:' + bg + ';color:' + color + ';border:2px solid ' + border + ';border-radius:14px;padding:8px 10px;text-align:center;cursor:pointer;box-shadow:0 3px 0 rgba(45,55,72,0.06);">' +
        '<div style="font-family:Fredoka,sans-serif;font-size:1rem;">' + p.label + '</div>' +
        '<div style="font-size:0.74rem;opacity:0.85;font-family:Nunito,sans-serif;">' + p.sub + '</div>' +
      '</button>';
    }).join('');
  }

  function getCommunicativePrompt(taskData) {
    const kind = taskData.at(0), rawDe = String(taskData.at(3) || 'Hör zu!'), rawEs = String(taskData.at(2) || ''), targetPhrase = String(taskData.at(4) || '');
    if (kind === 'dialogue') {
      const hasSpoiler = /^(Frag|Sag)/i.test(rawDe);
      const topicMatch = targetPhrase.match(/\b(der|die|das|ein|eine|einen)\s+([A-ZÄÖÜ][a-zäöüß]+)/);
      const topicHint = topicMatch ? (' sobre «' + topicMatch.at(0) + '»') : '';
      return { tag: '🗣️ Mini-Dialog · Tu objetivo comunicativo', main: hasSpoiler ? (rawEs + topicHint) : ('«' + rawDe + '»'), sub: 'Elige cómo iniciar la conversación en alemán y luego pronúncialo en voz alta.' };
    }
    if (kind === 'order') {
      const hasSpoiler = rawDe.includes(':');
      return { tag: '🧩 Satzbau · Ordena la oración', main: hasSpoiler ? 'Escucha el audio y ordena las palabras en alemán' : ('«' + rawDe + '»'), sub: rawEs };
    }
    return { tag: null, main: '«' + rawDe + '»', sub: rawEs };
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

      const oldH3 = content.querySelector('h3'), oldEs = content.querySelector('p.es');
      if (oldH3) oldH3.style.display = 'none';
      if (oldEs) oldEs.style.display = 'none';

      scene.style.cssText = 'background:' + theme.bg + ';border:3px solid ' + theme.border + ';border-radius:22px;padding:18px;margin:14px 0;min-height:auto;';
      scene.innerHTML =
        '<div class="comic-top">' +
          '<span class="comic-badge" style="border:1.5px solid ' + theme.border + ';">' + theme.badge + '</span>' +
          '<span class="mode-tag ' + (isHomeTask ? 'mode-home' : 'mode-class') + '">' + (isHomeTask ? '🏠 Casa · Práctica autónoma' : '🏫 Clase · Interacción oral') + '</span>' +
          '<span style="font-size:1.5rem;letter-spacing:4px;">' + artText + '</span>' +
        '</div>' +
        '<div class="comic-body">' +
          '<div class="comic-avatar" style="border:3px solid ' + theme.border + ';">' + char.icon + '</div>' +
          '<div class="comic-bubble">' +
            '<div style="font-size:0.8rem;font-weight:800;color:' + (comm.tag ? '#1E40AF' : '#4A5568') + ';margin-bottom:4px;">' + (comm.tag || ('💬 ' + char.name + ' sagt:')) + '</div>' +
            '<div style="font-family:Fredoka,sans-serif;font-size:1.18rem;color:#2D3748;line-height:1.3;">' + comm.main + '</div>' +
            '<div style="font-size:0.88rem;color:#4A5568;margin-top:4px;">' + comm.sub + '</div>' +
          '</div>' +
        '</div>';
    }

    if (stepNum === 3) renderMiniReading(content, id);
    if (stepNum === 4) renderCoherentMatch(content);

    const bossSet = new Set([5, 10, 15, 20, 24]);
    if (bossSet.has(id) && stepNum === mission.tasks.length && !content.querySelector('#boss-spiral-box')) {
      const bossBox = document.createElement('div');
      bossBox.id = 'boss-spiral-box';
      bossBox.style.cssText = 'background:#FEF9C3;border:2px solid #FACC15;border-radius:16px;padding:14px;margin:14px 0;';
      bossBox.innerHTML =
        '<strong style="color:#854D0E;display:block;margin-bottom:4px;">👑 Gran Repaso del Mundo ' + worldNum + ' (Welt-Check):</strong>' +
        '<p style="font-size:0.88rem;color:#2D3748;margin:0;">Abre tu pestaña lateral <b>🧭 Entdecker-Box</b>, elige una palabra de <b>«📚 Ya sabes»</b> y úsala en una frase con la gramática de este Mundo.</p>';
      if (scene) scene.parentNode.insertBefore(bossBox, scene.nextSibling);
    }

    const slowBtns = content.querySelectorAll('[data-slow-plus]');
    if (slowBtns.length > 1) { for (let i = 1; i < slowBtns.length; i++) slowBtns[i].remove(); }
    const sayBtn = content.querySelector('[data-say]');
    if (sayBtn && !content.querySelector('[data-slow]') && !content.querySelector('[data-slow-plus]')) {
      const phrase = sayBtn.getAttribute('data-say');
      const slowBtn = document.createElement('button');
      slowBtn.type = 'button'; slowBtn.className = 'secondary'; slowBtn.setAttribute('data-slow-plus', '1');
      slowBtn.innerHTML = '🐢 Langsam <small>Despacio</small>';
      slowBtn.onclick = function() { window.speakPlus(phrase, true); };
      sayBtn.parentNode.insertBefore(slowBtn, sayBtn.nextSibling);
    }

    const footerDiv = content.querySelector('.footer');
    if (footerDiv && !content.querySelector('.rec-bar')) {
const recDiv = document.createElement('div');
recDiv.className = 'rec-bar';
recDiv.innerHTML = '🎙️ Grabar mi vozPractica pronunciando en voz alta y escúchate';
footerDiv.parentNode.insertBefore(recDiv, footerDiv);
}
const optionsBox = content.querySelector('.options');
if (optionsBox && stepNum >= 8 && !content.querySelector('#write-challenge') && !optionsBox.querySelector('button[disabled]')) {
const targetBtn = Array.from(optionsBox.querySelectorAll('button')).find(b => b.dataset.answer !== undefined);
if (targetBtn) {
optionsBox.style.display = 'none';
const challenge = document.createElement('div');
challenge.id = 'write-challenge';
challenge.style.cssText = 'background:#E8F8F5;border:2px solid #6EE7B7;border-radius:16px;padding:14px;margin:14px 0;';
challenge.innerHTML =
'✍️ Reto Final de Escritura (Producción):' +
'' +
'' + ['ä', 'ö', 'ü', 'ß'].map(ch => '' + ch + '').join('') + '' +
'' +
'✅ Comprobar ' +
'Ver opciones';
optionsBox.parentNode.insertBefore(challenge, optionsBox);
document.getElementById('show-opts-btn').onclick = function() { challenge.remove(); optionsBox.style.display = 'grid'; };
document.getElementById('check-write-btn').onclick = function() {
const val = document.getElementById('german-input').value.trim().toLowerCase().replace(/[.!?]/g, '');
const match = Array.from(optionsBox.querySelectorAll('button')).find(b => b.textContent.trim().toLowerCase().replace(/[.!?]/g, '') === val);
if (match) match.click();
else { const fb = document.getElementById('write-feedback'); fb.textContent = '💜 Casi... Abre tu pestaña 🧭 Entdecker-Box a la derecha, revisa la regla e inténtalo de nuevo.'; fb.style.display = 'block'; }
};
}
}
}
initSequenceUI();
enhanceStep();
const contentEl = document.getElementById('content');
if (contentEl) {
const observer = new MutationObserver(() => { observer.disconnect(); enhanceStep(); observer.observe(contentEl, { childList: true }); });
observer.observe(contentEl, { childList: true });
}
})();
