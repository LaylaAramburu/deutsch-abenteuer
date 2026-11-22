window.DEUTSCH_MISSIONS={
  "1": {
    "title": "Der verlorene Kompass",
    "es": "La brújula perdida",
    "icon": "🧭",
    "intro": "Felix sucht seinen Kompass. Die Eule kann helfen. Stell dich vor, frage nach Namen und finde den Kompass!",
    "introEs": "Félix busca su brújula. Preséntate, pregunta al búho y encuéntrala.",
    "reward": "🧭 der Kompass",
    "tasks": [
      [
        "choice",
        "Ein neuer Freund",
        "¿Quién es?",
        "Wer ist das?",
        "Das ist Felix. Er ist ein Fuchs.",
        [
          "Das ist Felix.",
          "Ich bin Felix.",
          "Du bist Felix."
        ],
        0,
        "Mostrar la figura de Félix; pedir Das ist ... y Er ist ... antes de seleccionar."
      ],
      [
        "choice",
        "Wie heißt du?",
        "Escucha la presentación",
        "Wie heißt du?",
        "Hallo! Ich heiße Felix.",
        [
          "Ich heißt Felix.",
          "Ich heiße Felix.",
          "Ich heißen Felix."
        ],
        1,
        "Diferenciar heiße (ich) y heißt (du) mediante dos personajes."
      ],
      [
        "dialogue",
        "Frag die Eule",
        "Pregunta al búho",
        "Frag die Eule: Wie heißt du?",
        "Wie heißt du?",
        [
          "Guten Morgen!",
          "Wie heißt du?",
          "Auf Wiedersehen!"
        ],
        1,
        "La profesora responde Ich heiße Eule; comprobar entonación interrogativa."
      ],
      [
        "order",
        "Der Name",
        "Ordena la presentación",
        "Baue den Satz!",
        "Ich heiße Mia.",
        [
          "Mia.",
          "heiße",
          "Ich"
        ],
        [
          "Ich",
          "heiße",
          "Mia."
        ],
        "Tras ordenar, sustituir Mia por el nombre real del alumno."
      ],
      [
        "sort",
        "Die Freunde sprechen",
        "Clasifica las frases según si el sujeto es singular o plural",
        "Ist das Subjekt Singular oder Plural?",
        "Ich bin Felix. Du bist Mia. Er ist der Wächter. Wir sind Freunde. Ihr seid schnell. Hier sind sie.",
        [
          "Ich bin Felix.",
          "Wir sind Freunde.",
          "Du bist Mia.",
          "Ihr seid schnell.",
          "Er ist der Wächter.",
          "Hier sind sie."
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Pedir leer cada tarjeta en voz alta y clasificar por sujeto singular (ich/du/er) o plural (wir/ihr/sie). No confundir sie plural con Sie de cortesía.",
        [
          "👤 Eine Person",
          "👥 Mehrere Personen"
        ]
      ],
      [
        "hotspot",
        "Die Spuren",
        "Sigue las huellas",
        "Wo ist der Kompass?",
        "Der Kompass ist bei der Eule.",
        [
          "🌊 am Fluss",
          "🦉 bei der Eule",
          "🌲 im Wald"
        ],
        1,
        "Antes de pulsar, pedir Wo ist ...? y la respuesta completa con bei der Eule."
      ],
      [
        "oral",
        "Die Vorstellung",
        "Preséntate",
        "Sag deinen Namen und dein Alter.",
        "Ich heiße Mia. Ich bin neun Jahre alt.",
        null,
        null,
        "Comprobar dos frases independientes, sin penalizar edad inventada."
      ],
      [
        "oral",
        "Der Schatz",
        "Recupera la brújula",
        "Was hast du?",
        "Ich habe den Kompass!",
        null,
        null,
        "Pedir Ich habe den Kompass; distinguir der Kompass / den Kompass."
      ]
    ]
  },
  "3": {
    "title": "Der magische Rucksack",
    "es": "La mochila mágica",
    "icon": "🎒",
    "intro": "Der Rucksack ist verschlossen. Hilf Felix, die richtigen Sachen einzupacken!",
    "introEs": "La mochila está cerrada. Ayuda a Félix a preparar sus cosas para el viaje.",
    "reward": "🎒 der Zauberrucksack",
    "tasks": [
      [
        "choice",
        "Was ist das?",
        "Reconoce el objeto",
        "Was ist das?",
        "Das ist eine Karte.",
        [
          "Das ist ein Karte.",
          "Das ist eine Karte.",
          "Das sind eine Karte."
        ],
        1,
        "Contrastar eine Karte / ein Buch / einen Ball con objetos visibles."
      ],
      [
        "choice",
        "Felix hat ...",
        "Escucha y encuentra",
        "Was hat Felix?",
        "Felix hat einen Ball.",
        [
          "Felix habe einen Ball.",
          "Felix hast einen Ball.",
          "Felix hat einen Ball."
        ],
        2,
        "Usar Felix hat, no Felix habe. Preguntar Was hat Felix?"
      ],
      [
        "order",
        "In meinem Rucksack",
        "Construye la frase",
        "Baue den Satz!",
        "Ich habe eine Karte.",
        [
          "eine Karte.",
          "habe",
          "Ich"
        ],
        [
          "Ich",
          "habe",
          "eine Karte."
        ],
        "Cambiar Karte por Buch y Ball, reforzando acusativo."
      ],
      [
        "dialogue",
        "Der Händler",
        "Pregunta al vendedor",
        "Frag: Hast du ein Buch?",
        "Hast du ein Buch?",
        [
          "Hast du ein Buch?",
          "Ich bin ein Buch.",
          "Wo ist der Wald?"
        ],
        0,
        "Responder Ja, ich habe ein Buch / Nein, leider nicht."
      ],
      [
        "choice",
        "Die drei Personen",
        "Elige la conjugación",
        "Wir ... einen Rucksack.",
        "Wir haben einen Rucksack.",
        [
          "habt",
          "haben",
          "hat"
        ],
        1,
        "Pedir wir haben y luego ihr habt."
      ],
      [
        "kit",
        "Pack den Rucksack!",
        "Prepara la mochila con dos objetos útiles",
        "Pack zwei Dinge für die Reise ein!",
        "Wir brauchen eine Karte und ein Buch.",
        [
          "🗺️ die Karte",
          "📕 das Buch",
          "🍰 der Kuchen",
          "🧸 der Teddy"
        ],
        [
          0,
          1
        ],
        "Primero escuchar; pedir nombrar cada objeto con artículo antes de guardar."
      ],
      [
        "oral",
        "Inventarkontrolle",
        "Di qué llevas",
        "Was hast du im Rucksack?",
        "Ich habe eine Karte und ein Buch.",
        null,
        null,
        "Aceptar Ich habe eine Karte und ein Buch. Verificar artículos."
      ],
      [
        "oral",
        "Der Rucksack öffnet sich",
        "Abre la mochila",
        "Sag: Wir haben alles!",
        "Wir haben alles! Ich habe die Karte.",
        null,
        null,
        "Solicitar dos frases espontáneas, no mera repetición."
      ]
    ]
  },
  "4": {
    "title": "Die geheimen Farben",
    "es": "Los colores secretos",
    "icon": "🎨",
    "intro": "Die Farben des Waldes sind verschwunden! Die Eule zeigt dir eine geheimnisvolle Farbmaschine. Nur wer die Farben beschreibt, kann den Wald retten.",
    "introEs": "Los colores desaparecieron del bosque. Describe y combina colores para devolverlos.",
    "reward": "🎨 der Farbkristall",
    "tasks": [
      [
        "choice",
        "Der graue Wald",
        "El bosque sin colores",
        "Welche Farbe fehlt?",
        "Der Baum ist grün.",
        [
          "grün",
          "blau",
          "rot"
        ],
        0,
        "Identificar verde en el árbol, sin leer la transcripción inicialmente."
      ],
      [
        "choice",
        "Der blaue Fluss",
        "El río azul",
        "Welche Farbe hat der Fluss?",
        "Der Fluss ist blau.",
        [
          "gelb",
          "blau",
          "schwarz"
        ],
        1,
        "Pedir Der Fluss ist blau y señalar el río."
      ],
      [
        "order",
        "Der rote Pilz",
        "Ordena la descripción",
        "Baue den Satz: Der Pilz ist rot.",
        "Der Pilz ist rot.",
        [
          "rot.",
          "ist",
          "Der Pilz"
        ],
        [
          "Der Pilz",
          "ist",
          "rot."
        ],
        "Sustituir rot por blau / grün al terminar."
      ],
      [
        "dialogue",
        "Frag die Eule",
        "Pregunta por el color",
        "Frag die Eule: Welche Farbe hat die Blume?",
        "Welche Farbe hat die Blume?",
        [
          "Wie alt bist du?",
          "Welche Farbe hat die Blume?",
          "Wo ist mein Buch?"
        ],
        1,
        "Responder Die Blume ist gelb; repetir con Baum."
      ],
      [
        "mix",
        "Die Farbmaschine",
        "Mezcla dos colores para recuperar el verde",
        "Mische zwei Farben! Welche Farben ergeben Grün?",
        "Blau und Gelb ergeben Grün.",
        [
          "🔵 Blau",
          "🟡 Gelb",
          "🔴 Rot"
        ],
        [
          0,
          1
        ],
        "Antes de mezclar preguntar Welche Farben brauchst du?"
      ],
      [
        "hotspot",
        "Der Farbpfad",
        "Escoge el camino",
        "Geh zum grünen Baum!",
        "Der grüne Baum ist rechts.",
        [
          "🔴 roter Stein",
          "🟢 grüner Baum",
          "🔵 blauer Fluss"
        ],
        1,
        "Pedir links / rechts antes de elegir."
      ],
      [
        "choice",
        "Die Farben zurück",
        "Identifica la frase",
        "Welche Aussage stimmt?",
        "Die Blume ist gelb.",
        [
          "Die Blume sind gelb.",
          "Die Blume ist gelb.",
          "Die Blume bist gelb."
        ],
        1,
        "Justificar con Die Blume ist gelb."
      ],
      [
        "oral",
        "Beschreibe den Wald",
        "Describe el bosque",
        "Sag drei Sätze über den Wald.",
        "Der Baum ist grün. Der Fluss ist blau. Die Sonne ist gelb.",
        null,
        null,
        "Exigir tres frases con sustantivo + ist + color."
      ],
      [
        "oral",
        "Deine Lieblingsfarbe",
        "Habla de ti",
        "Welche Farbe magst du?",
        "Ich mag Blau. Meine Lieblingsfarbe ist Blau.",
        null,
        null,
        "Aceptar variación de colores y preguntar Warum? solo como extensión."
      ],
      [
        "oral",
        "Der Kristall leuchtet",
        "Devuelve los colores",
        "Was ist jetzt anders?",
        "Der Wald ist wieder bunt!",
        null,
        null,
        "Comparar escena inicial y final usando bunt / grau."
      ]
    ]
  },
  "5": {
    "title": "Der Wächter der Bewegungen",
    "es": "El guardián de las acciones",
    "icon": "🏃",
    "intro": "Ein Wächter blockiert den Ausgang des Waldes. Er öffnet das Tor nur, wenn du zeigen und sagen kannst, was die Tiere machen.",
    "introEs": "Un guardián bloquea la salida. Hay que describir acciones y dar instrucciones para abrirla.",
    "reward": "🔑 der Waldschlüssel",
    "tasks": [
      [
        "choice",
        "Felix läuft",
        "¿Qué hace Félix?",
        "Was macht Felix?",
        "Felix läuft.",
        [
          "Felix läuft.",
          "Felix laufe.",
          "Felix laufen."
        ],
        0,
        "Modelar Felix läuft; alternar ich laufe / er läuft."
      ],
      [
        "choice",
        "Die Eule fliegt",
        "¿Qué hace el búho?",
        "Was macht die Eule?",
        "Die Eule fliegt.",
        [
          "Die Eule fliegen.",
          "Die Eule fliegt.",
          "Die Eule fliegst."
        ],
        1,
        "Acompañar fliegt con gesto y contrastar läuft."
      ],
      [
        "order",
        "Ich springe",
        "Construye la frase",
        "Baue den Satz: Ich springe hoch.",
        "Ich springe hoch.",
        [
          "hoch.",
          "springe",
          "Ich"
        ],
        [
          "Ich",
          "springe",
          "hoch."
        ],
        "Probar Ich springe hoch / Du springst hoch."
      ],
      [
        "dialogue",
        "Frag den Wächter",
        "Pregunta al guardián",
        "Frag: Was machst du?",
        "Was machst du?",
        [
          "Was machst du?",
          "Wer bist du?",
          "Wo ist der Fluss?"
        ],
        0,
        "La profesora responde Ich laufe. Preguntar Und du?"
      ],
      [
        "choice",
        "Du und ich",
        "Escoge la conjugación",
        "Du ... schnell.",
        "Du läufst schnell.",
        [
          "läuft",
          "läufst",
          "laufen"
        ],
        1,
        "Distinguir du läufst / er läuft; verbo irregular."
      ],
      [
        "choice",
        "Wir gehen",
        "Escoge la forma",
        "Wir ... zum Tor.",
        "Wir gehen zum Tor.",
        [
          "geht",
          "gehen",
          "gehe"
        ],
        1,
        "Practicar wir gehen / ihr geht / sie gehen."
      ],
      [
        "hotspot",
        "Das Bewegungstor",
        "Abre la puerta",
        "Der Wächter sagt: Spring!",
        "Spring!",
        [
          "🧍 stehen",
          "🦘 springen",
          "🛌 schlafen"
        ],
        1,
        "Dar la instrucción oral Spring! antes de pulsar."
      ],
      [
        "oral",
        "Was macht ihr?",
        "Describe al grupo",
        "Sag: Wir laufen. Ihr springt.",
        "Wir laufen. Ihr springt.",
        null,
        null,
        "Pedir dos oraciones sin mostrar la transcripción."
      ],
      [
        "oral",
        "Sieben Pronomenformen",
        "Conjuga jugando",
        "Konjugiere gehen mit ich, du, er/sie/es, wir, ihr, sie und Sie.",
        "ich gehe, du gehst, er/sie/es geht, wir gehen, ihr geht, sie gehen, Sie gehen",
        null,
        null,
        "Pronombres: ich, du, er/sie/es, wir, ihr, sie, Sie. Son siete grupos; seis formas verbales distintas."
      ],
      [
        "oral",
        "Das Tor ist offen",
        "Gana la llave",
        "Was kannst du machen?",
        "Ich kann laufen und springen.",
        null,
        null,
        "Aceptar Ich kann laufen und springen; validar kann + infinitivo."
      ]
    ]
  },
    "6": {
    "title": "Das Festessen im Schloss",
    "es": "El banquete en el castillo",
    "icon": "🍽️",
    "intro": "Der Koch bereitet das Festessen vor. Felix hilft und fragt: Wer isst was und was trinken die Gäste?",
    "introEs": "El cocinero prepara el banquete. Félix ayuda y pregunta: ¿Quién come qué y qué beben los invitados?",
    "reward": "🥄 der goldene Löffel",
    "tasks": [
      [
        "listen",
        "Der Koch kocht",
        "Escucha al cocinero y elige qué prepara",
        "Ich koche heute Suppe und Brot für das Fest.",
        "Ich koche heute Suppe und Brot für das Fest.",
        ["Suppe und Brot", "Milch und Käse", "Apfel und Kuchen"],
        0,
        "Escucha las dos comidas: Suppe y Brot.",
        "🧑‍🍳🍲🥖"
      ],
      [
        "listen",
        "Die Königin hat Hunger",
        "Escucha qué pide la Reina y deduce",
        "Ich habe Hunger und Durst. Ich nehme einen Apfel und ein Glas Wasser.",
        "Ich nehme einen Apfel und ein Glas Wasser.",
        ["Einen Apfel und Wasser", "Eine Suppe und Milch", "Käse und Brot"],
        0,
        "Apfel = manzana, Wasser = agua.",
        "👑🍎💧"
      ],
      [
        "choice",
        "Was oder Wer?",
        "Completa la pregunta correcta sobre la comida",
        "___ isst der König?",
        "Was isst der König?",
        ["Was isst der König?", "Wer isst der König?", "Wo isst der König?"],
        0,
        "Para preguntar por una cosa o comida usamos WAS.",
        "🦊❓🍲"
      ],
      [
        "choice",
        "Wer trinkt?",
        "Completa la pregunta correcta sobre la persona",
        "___ trinkt die Milch?",
        "Wer trinkt die Milch?",
        ["Wer trinkt die Milch?", "Was trinkt die Milch?", "Wann trinkt die Milch?"],
        0,
        "Para preguntar por una persona usamos WER.",
        "👦❓🥛"
      ],
      [
        "choice",
        "essen · konjugieren",
        "Elige las dos formas verbales correctas",
        "Der Vater ___ Käse und Brot, und wir ___ zusammen.",
        "Der Vater isst Käse und Brot, und wir essen zusammen.",
        ["isst / essen", "esse / isst", "esst / isst"],
        0,
        "Con er/sie (der Vater) cambia la vocal: e -> i (isst). Con wir: essen.",
        "🍽️🥖🧀"
      ],
      [
        "order",
        "Satzbau · Essen & Trinken",
        "Ordena la frase completa del invitado",
        "Ordena las palabras:",
        "Das Kind isst einen Apfel und trinkt Apfelsaft.",
        ["Das Kind", "isst", "einen Apfel", "und trinkt", "Apfelsaft."],
        0,
        "Sujeto + verbo 1 + objeto + und + verbo 2 + objeto.",
        "🧩🧃🍎"
      ],
      [
        "dialogue",
        "Beim Koch bestellen",
        "Fórmula: Ich möchte ___ und ___, bitte.",
        "Der Koch fragt: Was möchtest du essen und trinken?",
        "Ich möchte Suppe und Wasser, bitte.",
        ["Ich möchte Suppe und Wasser, bitte.", "Ich heiße Felix und wohne im Wald.", "Der Ball ist rot und blau."],
        0,
        "Usa la fórmula: Ich möchte [comida] und [bebida], bitte.",
        "🧑‍🍳🗣️"
      ],
      [
        "dialogue",
        "Die Königin fragen",
        "Fórmula: Was möchten Sie trinken?",
        "Frag die Königin höflich nach ihrem Getränk!",
        "Was möchten Sie trinken?",
        ["Was möchten Sie trinken?", "Wo wohnen Sie?", "Wie spät ist es?"],
        0,
        "Para preguntar qué quiere beber con cortesía: Was möchten Sie trinken?",
        "👑🗣️"
      ],
      [
        "choice",
        "Wer ist das? · Logik",
        "Lee las pistas y descubre quién es (Vater: Suppe+Brot | Mutter: Apfel+Wasser | Kind: Kuchen+Milch)",
        "Diese Person trinkt keine Milch. Sie isst Suppe und Brot.",
        "Der Vater isst Suppe und Brot.",
        ["Der Vater", "Die Mutter", "Das Kind"],
        0,
        "Compara las pistas con cada miembro de la familia.",
        "🕵️‍♂️🍽️"
      ],
      [
        "speak",
        "Dein Menü bestellen",
        "Elige 2 comidas (Suppe, Brot, Käse, Apfel, Kuchen) y 1 bebida (Wasser, Milch, Apfelsaft) y pídelas con: Ich möchte..., bitte!",
        "Ich möchte Käse, Brot und Apfelsaft, bitte.",
        "Ich möchte Käse, Brot und Apfelsaft, bitte.",
        ["¡Listo! Ya pedí mi menú completo en voz alta"],
        0,
        "Combina 2 comidas + und + 1 bebida + bitte.",
        "🎤👑"
      ]
    ]
  },
  "7": {
    "title": "Die Räume im Schloss",
    "es": "Las salas del castillo (Wo? · Dativo)",
    "icon": "🏰",
    "intro": "Die Königin sucht alle im Schloss. Felix erklärt: Mit 'Wo?' benutzen wir 'im' (der/das) und 'in der' (die)!",
    "introEs": "La Reina busca a todos en el castillo. Félix explica: Con 'Wo?' usamos 'im' (der/das) e 'in der' (die).",
    "reward": "🗺️ der Schloss-Plan",
    "tasks": [
      [
        "listen",
        "Wo ist der Koch?",
        "Escucha dónde trabaja el cocinero",
        "Wo ist der Koch? Er kocht heute in der Küche.",
        "Er kocht heute in der Küche.",
        ["In der Küche", "Im Park", "Im Bad"],
        0,
        "die Küche (femenino) -> con Wo cambia a IN DER Küche.",
        "🏰🍳👑"
      ],
      [
        "map",
        "Der Weg zur Bibliothek",
        "Sigue la ruta: Geh zuerst links am Garten vorbei, dann geradeaus bis zur Mitte und dort rechts!",
        "Wohin kommst du?",
        "rechts: Bibliothek",
        ["links: Garten", "Mitte: Hof", "rechts: Bibliothek"],
        2,
        "Sigue los tres pasos: 1. links, 2. geradeaus, 3. rechts.",
        "🗺️🏰"
      ],
      [
        "choice",
        "Dativ · der Park -> im Park",
        "Elige la forma correcta con Wo? (der Park = masculino)",
        "Wo spielen die Kinder nach der Schule? Sie spielen ___ Park.",
        "Sie spielen im Park.",
        ["im", "in der", "in die"],
        0,
        "der Park es masculino (der) -> in + dem = im Park.",
        "🔵🌳"
      ],
      [
        "choice",
        "Dativ · die Schule -> in der Schule",
        "Elige la forma correcta con Wo? (die Schule = femenino)",
        "Wo lernen Felix und Leo Deutsch? Sie lernen ___ Schule.",
        "Sie lernen in der Schule.",
        ["in der", "im", "in das"],
        0,
        "die Schule es femenino (die) -> con Wo cambia a in der Schule.",
        "🔴🏫"
      ],
      [
        "choice",
        "Dativ · das Klassenzimmer -> im Klassenzimmer",
        "Elige la forma correcta con Wo? (das Klassenzimmer = neutro)",
        "Wo schreibt der Lehrer an die Tafel? Er ist ___ Klassenzimmer.",
        "Er ist im Klassenzimmer.",
        ["im", "in der", "in den"],
        0,
        "das Klassenzimmer es neutro (das) -> in + dem = im Klassenzimmer.",
        "🟢📚"
      ],
      [
        "choice",
        "Dativ-Training · im oder in der?",
        "Completa las dos ubicaciones correctamente",
        "Der Koch ist ___ Küche und der König ist ___ Garten.",
        "Der Koch ist in der Küche und der König ist im Garten.",
        ["in der / im", "im / in der", "im / im"],
        0,
        "die Küche (f) -> in der Küche; der Garten (m) -> im Garten.",
        "🔴🍳"
      ],
      [
        "order",
        "Satzbau · Wo ist sie?",
        "Ordena la respuesta sobre ubicación",
        "Ordena las palabras:",
        "Meine Schwester ist in der Bibliothek.",
        ["Meine Schwester", "ist", "in der", "Bibliothek."],
        0,
        "Sujeto + ist + in der + lugar femenino.",
        "🧩🏰"
      ],
      [
        "dialogue",
        "Wo bist du?",
        "Fórmula: Ich bin im ___ / Ich bin in der ___",
        "Die Königin fragt: Wo bist du jetzt?",
        "Ich bin in der Schule.",
        ["Ich bin in der Schule.", "Ich gehe die Schule.", "Ich habe eine Schule."],
        0,
        "Recuerda: die Schule (f) -> Ich bin in der Schule.",
        "👑🗣️"
      ],
      [
        "dialogue",
        "Den Weg erklären",
        "Fórmula: Geh zuerst ___, dann ___!",
        "Ein Freund fragt: Wie komme ich zur Küche?",
        "Geh zuerst geradeaus, dann links!",
        ["Geh zuerst geradeaus, dann links!", "Ich trinke gern Wasser.", "Der Apfel kostet zwei Euro."],
        0,
        "Usa: geradeaus (recto), links (izquierda), rechts (derecha).",
        "🦊🗺️"
      ],
      [
        "speak",
        "Wo sind alle im Schloss?",
        "Di en voz alta dónde están 3 personas usando IM y IN DER (ej. Der Koch ist in der Küche, mein Freund ist im Park...)",
        "Der Koch ist in der Küche und mein Freund ist im Park.",
        "Der Koch ist in der Küche und mein Freund ist im Park.",
        ["¡Listo! Ya ubiqué a 3 personas usando im y in der"],
        0,
        "Combina al menos un lugar femenino (in der) y uno masculino/neutro (im).",
        "🎤🏰"
      ]
    ]
  },
  "8": {
    "title": "Der große Markt",
    "es": "El gran mercado (50 € de presupuesto)",
    "icon": "🏪",
    "intro": "Die Königin gibt Felix eine Einkaufsliste und 50 Euro: Kauf alles auf der Liste, aber gib nicht mehr als 50 Euro aus!",
    "introEs": "La Reina le da a Félix una lista de compras y 50 euros: ¡Compra todo lo de la lista sin pasarte de 50 euros!",
    "reward": "💰 der Goldbeutel",
    "tasks": [
      [
        "listen",
        "Was kostet die Schultasche?",
        "Escucha el precio de la mochila en el puesto",
        "Die Schultasche kostet vierundzwanzig Euro.",
        "Die Schultasche kostet vierundzwanzig Euro.",
        ["24 Euro", "42 Euro", "14 Euro"],
        0,
        "vier (4) + und + zwanzig (20) = 24.",
        "🧑‍🌾🎒"
      ],
      [
        "choice",
        "Singular · Wie viel kostet...?",
        "Elige el verbo correcto para 1 objeto (der Ball)",
        "Wie viel ___ der Ball?",
        "Wie viel kostet der Ball?",
        ["kostet", "kosten", "koste"],
        0,
        "Para 1 objeto usamos singular: kostet.",
        "⚽💶"
      ],
      [
        "choice",
        "Plural · Wie viel kosten...?",
        "Elige el verbo correcto para varios objetos (die Hefte)",
        "Wie viel ___ die Hefte?",
        "Wie viel kosten die Hefte?",
        ["kosten", "kostet", "kostest"],
        0,
        "Para varios objetos usamos plural: kosten.",
        "📓💶"
      ],
      [
        "choice",
        "Rechnen auf dem Markt",
        "Calcula el total: Ball (14 €) + Buch (12 €) + Brot (5 €)",
        "Wie viel kosten der Ball, das Buch und das Brot zusammen?",
        "Sie kosten einunddreißig Euro.",
        ["Einunddreißig Euro (31 €)", "Dreiundzwanzig Euro (23 €)", "Vierzig Euro (40 €)"],
        0,
        "Suma: 14 + 12 + 5 = 31 (einunddreißig).",
        "🧮🛒"
      ],
      [
        "order",
        "Satzbau · Nach dem Preis fragen",
        "Ordena la pregunta del comprador",
        "Ordena las palabras:",
        "Wie viel kosten der Käse und das Brot?",
        ["Wie viel", "kosten", "der Käse", "und das Brot?"],
        0,
        "W-Frage (Wie viel) + verbo plural (kosten) + los dos productos.",
        "🧩💶"
      ],
      [
        "choice",
        "Budget-Check (50 Euro)",
        "Lista: Schultasche (24 €) + Ball (14 €) + Käse (8 €) = 46 €. Tienes 50 €. ¿Qué puedes añadir?",
        "Was kannst du noch kaufen?",
        "Ich kann noch einen Apfel oder ein Heft kaufen.",
        ["Einen Apfel (2 €) oder ein Heft (4 €)", "Ein Buch (12 €)", "Einen Kuchen (11 €)"],
        0,
        "Si llevas 46 € y tienes 50 €, solo te quedan 4 €.",
        "📜💰"
      ],
      [
        "dialogue",
        "Nach dem Preis fragen",
        "Fórmula: Entschuldigung, wie viel kostet / kosten ___?",
        "Frag den Verkäufer nach dem Preis!",
        "Entschuldigung, wie viel kostet der Käse?",
        ["Entschuldigung, wie viel kostet der Käse?", "Wo ist das Klassenzimmer?", "Ich bin neun Jahre alt."],
        0,
        "Empieza con Entschuldigung + wie viel kostet...",
        "🧑‍🌾🗣️"
      ],
      [
        "dialogue",
        "Einkaufen mit Liste",
        "Fórmula: Ich möchte ___ und ___, bitte.",
        "Der Verkäufer fragt: Was möchten Sie kaufen?",
        "Ich möchte einen Ball und ein Brot, bitte.",
        ["Ich möchte einen Ball und ein Brot, bitte.", "Es ist sieben Uhr dreißig.", "Wir spielen im Garten."],
        0,
        "Acusativo masculino: der Ball -> einen Ball.",
        "🛍️🗣️"
      ],
      [
        "choice",
        "Wechselgeld prüfen",
        "Pagas una compra de 43 € con un billete de 50 €. ¿Cuánto cambio recibes?",
        "Wie viel Euro bekommst du zurück?",
        "Du bekommst sieben Euro zurück.",
        ["Sieben Euro (7 €)", "Siebzehn Euro (17 €)", "Drei Euro (3 €)"],
        0,
        "50 - 43 = 7 (sieben Euro).",
        "🧾✅"
      ],
      [
        "speak",
        "Rollenspiel · Auf dem Markt",
        "Haz la compra en voz alta: 1) Saluda (Guten Tag!), 2) Pregunta precio de 2 cosas (Wie viel kostet...?), 3) Compra y agradece (Ich möchte..., bitte. Danke!).",
        "Guten Tag! Wie viel kostet der Ball? Ich möchte einen Ball, bitte. Danke!",
        "Guten Tag! Wie viel kostet der Ball? Ich möchte einen Ball, bitte. Danke!",
        ["¡Listo! Ya hice toda la compra en voz alta"],
        0,
        "Usa las tres fórmulas: saludo + pregunta de precio + pedido con bitte.",
        "🎤🏪"
      ]
    ]
  },

    "9": {
    "title": "Der Tagesablauf im Schloss",
    "es": "La rutina del castillo (Horas · Uhr + minutos)",
    "icon": "🕰️",
    "intro": "Die Eule zeigt Felix den Tagesablauf im Schloss: Wann beginnt der Unterricht und wann ist das Training?",
    "introEs": "El Búho muestra a Félix la rutina del castillo: ¿Cuándo empiezan las clases y cuándo es el entrenamiento?",
    "reward": "⏰ die goldene Uhr",
    "tasks": [
      [
        "listen",
        "Wie spät ist es jetzt?",
        "Escucha al Búho y elige la hora exacta",
        "Guten Morgen! Es ist sieben Uhr dreißig. Zeit für das Frühstück!",
        "Es ist sieben Uhr dreißig.",
        ["7:30 Uhr", "7:15 Uhr", "8:30 Uhr"],
        0,
        "sieben (7) + Uhr + dreißig (30) = 7:30.",
        "🦉⏰🥣"
      ],
      [
        "listen",
        "Wann beginnt der Unterricht?",
        "Escucha cuándo empieza la clase en el castillo",
        "Der Unterricht beginnt um acht Uhr fünfzehn im Klassenzimmer.",
        "Der Unterricht beginnt um acht Uhr fünfzehn.",
        ["Um 8:15 Uhr", "Um 8:50 Uhr", "Um 9:15 Uhr"],
        0,
        "acht (8) + Uhr + fünfzehn (15) = 8:15. Con horas usamos UM.",
        "🏫⏰📚"
      ],
      [
        "choice",
        "Uhrzeit lesen · 16:30",
        "Elige cómo se dice 16:30 en alemán",
        "Es ist 16:30 Uhr. Wie sagt man das?",
        "Es ist sechzehn Uhr dreißig.",
        ["Es ist sechzehn Uhr dreißig.", "Es ist sechs Uhr dreizehn.", "Es ist sechzig Uhr drei."],
        0,
        "16 = sechzehn · 30 = dreißig -> sechzehn Uhr dreißig.",
        "⚽⏰🌳"
      ],
      [
        "choice",
        "Präposition · UM + Uhrzeit",
        "Completa la frase con la preposición correcta para horas",
        "Wir essen ___ dreizehn Uhr zusammen Mittagessen.",
        "Wir essen um dreizehn Uhr zusammen Mittagessen.",
        ["um", "am", "im"],
        0,
        "Para decir 'a las...' con una hora exacta siempre usamos UM.",
        "🍲⏰👑"
      ],
      [
        "choice",
        "Logik · Tagesablauf",
        "Lee la rutina y responde: 7:30 Frühstück | 8:15 Schule | 13:00 Mittagessen | 16:30 Training",
        "Was macht Felix um sechzehn Uhr dreißig?",
        "Er hat Training.",
        ["Er hat Training.", "Er isst Frühstück.", "Er geht schlafen."],
        0,
        "Busca 16:30 (sechzehn Uhr dreißig) en el horario.",
        "🦊📅⏰"
      ],
      [
        "order",
        "Satzbau · Wann beginnt...?",
        "Ordena la pregunta sobre el horario",
        "Ordena las palabras:",
        "Wann beginnt heute das Training?",
        ["Wann", "beginnt", "heute", "das Training?"],
        0,
        "W-Frage (Wann) + verbo en 2.ª posición (beginnt) + sujeto.",
        "🧩⏰⚽"
      ],
      [
        "dialogue",
        "Nach der Uhrzeit fragen",
        "Fórmula: Entschuldigung, wie spät ist es?",
        "Du hast keine Uhr. Frag die Eule nach der Zeit!",
        "Entschuldigung, wie spät ist es?",
        ["Entschuldigung, wie spät ist es?", "Wie viel kostet das Brot?", "Wo ist der Sportplatz?"],
        0,
        "Para preguntar '¿Qué hora es?' usamos: Wie spät ist es?",
        "🦉🗣️"
      ],
      [
        "dialogue",
        "Über den Tagesablauf sprechen",
        "Fórmula: Ich stehe um ___ Uhr auf und gehe um ___ Uhr zur Schule.",
        "Felix fragt: Wann gehst du zur Schule?",
        "Ich gehe um acht Uhr zur Schule.",
        ["Ich gehe um acht Uhr zur Schule.", "Ich möchte eine Suppe, bitte.", "Der Ball ist unter dem Tisch."],
        0,
        "Usa UM + la hora + zur Schule.",
        "🦊🗣️"
      ],
      [
        "choice",
        "Pünktlich oder zu spät?",
        "La clase empieza a las 8:15 (acht Uhr fünfzehn). Son las 8:30 (acht Uhr dreißig). ¿Cómo llega Leo?",
        "Es ist acht Uhr dreißig. Leo kommt...",
        "zu spät (tarde)",
        ["zu spät (tarde)", "pünktlich (puntual)", "am Abend (por la noche)"],
        0,
        "8:30 es después de 8:15 -> llega tarde (zu spät).",
        "🏃‍♂️⏰🏫"
      ],
      [
        "speak",
        "Mein Tagesablauf",
        "Cuenta tu rutina en voz alta usando UM + hora + minutos (ej. Ich esse um sieben Uhr dreißig Frühstück und gehe um acht Uhr fünfzehn zur Schule.)",
        "Ich esse um sieben Uhr dreißig Frühstück und gehe um acht Uhr fünfzehn zur Schule.",
        "Ich esse um sieben Uhr dreißig Frühstück und gehe um acht Uhr fünfzehn zur Schule.",
        ["¡Listo! Ya conté mi rutina con horas en alemán"],
        0,
        "Usa al menos dos horas con 'um ... Uhr ...'.",
        "🎤⏰"
      ]
    ]
  },

    "10": {
    "title": "Das königliche Festbankett",
    "es": "El gran banquete real (Síntesis Mundo 2)",
    "icon": "👑",
    "intro": "Das große Fest im Schloss beginnt! Felix, die Königin und der Koch feiern zusammen. Kombiniere alle W-Fragen und bestelle von der Speisekarte!",
    "introEs": "¡Empieza el gran banquete en el castillo! Félix, la Reina y el Cocinero celebran juntos. ¡Combina todas las W-Fragen y pide de la carta real!",
    "reward": "👑 die Goldene Krone",
    "tasks": [
      [
        "listen",
        "Einladung zum Festbankett",
        "Escucha la invitación de la Reina y elige la hora y el lugar",
        "Das Festbankett beginnt um achtzehn Uhr dreißig im großen Saal!",
        "Das Festbankett beginnt um achtzehn Uhr dreißig im großen Saal!",
        ["Um 18:30 Uhr im großen Saal", "Um 8:30 Uhr in der Küche", "Um 16:00 Uhr im Park"],
        0,
        "achtzehn Uhr dreißig = 18:30; im großen Saal = en el gran salón.",
        "👑🎺🏰"
      ],
      [
        "choice",
        "W-Fragen · Das große Quiz",
        "Elige la palabra interrogativa correcta para cada pregunta",
        "Completa: '___ kocht die Suppe?' (persona) y '___ kostet das Menü?' (precio)",
        "Wer kocht die Suppe? / Wie viel kostet das Menü?",
        ["Wer / Wie viel", "Was / Wo", "Wann / Wer"],
        0,
        "Wer = quién (persona); Wie viel = cuánto (precio).",
        "🦊❓👑"
      ],
      [
        "choice",
        "Königliche Speisekarte · Was isst du?",
        "Lee la carta real: Suppe (4 €) · Hähnchen (9 €) · Nudeln (7 €) · Salat (5 €) · Kuchen (5 €) · Eis (4 €) · Apfelsaft (3 €) · Wasser (2 €). ¿Cuánto cuestan Hähnchen, Salat und Apfelsaft?",
        "Wie viel kosten das Hähnchen, der Salat und der Apfelsaft zusammen?",
        "Sie kosten siebzehn Euro.",
        ["Siebzehn Euro (17 €)", "Fünfzehn Euro (15 €)", "Zwanzig Euro (20 €)"],
        0,
        "Suma los tres precios de la carta: 9 + 5 + 3 = 17 (siebzehn).",
        "📜🍗🥗"
      ],
      [
        "choice",
        "Dativ-Check im Schloss",
        "Recuerda la regla de Félix: ¿Dónde está cada cosa en el banquete?",
        "Der Kuchen steht ___ Küche und die Gäste sitzen ___ Garten.",
        "Der Kuchen steht in der Küche und die Gäste sitzen im Garten.",
        ["in der / im", "im / in der", "in die / in den"],
        0,
        "die Küche (femenino) -> in der Küche; der Garten (masculino) -> im Garten.",
        "🍰🌳🏰"
      ],
      [
        "order",
        "Satzbau · Höflich bestellen",
        "Ordena la frase completa para pedir en el banquete",
        "Ordena las palabras:",
        "Ich möchte bitte Nudeln, Salat und ein Glas Wasser.",
        ["Ich möchte", "bitte", "Nudeln, Salat", "und ein Glas Wasser."],
        0,
        "Ich möchte + bitte + los platos + und + la bebida.",
        "🧩🍝💧"
      ],
      [
        "choice",
        "Budget-Challenge (35 Euro)",
        "Tienes 35 € para invitar a un amigo: 2x Hähnchen (18 €) + 2x Apfelsaft (6 €) = 24 €. ¿Qué dos postres de la carta (Kuchen 5 € / Eis 4 €) alcanzan?",
        "Was kannst du für dich und deinen Freund noch bestellen?",
        "Zwei Kuchen (10 €) oder zwei Eis (8 €)",
        ["Zwei Kuchen (10 €) oder zwei Eis (8 €)", "Noch zwei Hähnchen (18 €)", "Drei Kuchen (15 €)"],
        0,
        "35 - 24 = 11 € disponibles. Dos pasteles cuestan 10 € y dos helados 8 €.",
        "💰🍨🍰"
      ],
      [
        "dialogue",
        "Im Restaurant bestellen",
        "Fórmula: Guten Abend! Ich hätte gern ___ und ___, bitte.",
        "Der Kellner im Schloss fragt: Was darf ich Ihnen bringen?",
        "Guten Abend! Ich hätte gern Hähnchen und Apfelsaft, bitte.",
        ["Guten Abend! Ich hätte gern Hähnchen und Apfelsaft, bitte.", "Mein Bruder heißt Leo.", "Der Bleistift ist blau."],
        0,
        "Usa la fórmula cortés: Ich hätte gern [plato] und [bebida], bitte.",
        "🧑‍🍳🗣️"
      ],
      [
        "dialogue",
        "Nach der Rechnung fragen",
        "Fórmula: Entschuldigung, zahlen bitte! Wie viel macht das zusammen?",
        "Ihr seid fertig mit dem Essen. Frag nach der Rechnung!",
        "Entschuldigung, zahlen bitte! Wie viel macht das zusammen?",
        ["Entschuldigung, zahlen bitte! Wie viel macht das zusammen?", "Wie spät ist es jetzt?", "Wo ist mein Heft?"],
        0,
        "Para pedir la cuenta en alemán: Zahlen bitte! Wie viel macht das zusammen?",
        "💶🗣️"
      ],
      [
        "choice",
        "Welt-Check · W-Fragen & Uhrzeit",
        "Lee la nota final del Búho: 'Um neunzehn Uhr treffen wir die Königin im Park. Sie bringt Kuchen für alle!'",
        "Wann und wo treffen sie die Königin?",
        "Um 19:00 Uhr im Park.",
        ["Um 19:00 Uhr im Park.", "Um 9:00 Uhr in der Schule.", "Um 17:00 Uhr im Bad."],
        0,
        "neunzehn Uhr = 19:00; im Park = en el parque.",
        "🦉📜👑"
      ],
      [
        "speak",
        "Das große Bankett · Rollenspiel",
        "Juego de rol final en clase: 1) Saluda y pide 2 platos y 1 bebida de la carta real (Suppe, Hähnchen, Nudeln, Salat, Kuchen, Eis, Wasser, Apfelsaft), 2) Pregunta cuánto cuesta todo y 3) Despídete dando las gracias.",
        "Guten Abend! Ich möchte Nudeln, Eis und Apfelsaft, bitte. Wie viel macht das zusammen? Vielen Dank!",
        "Guten Abend! Ich möchte Nudeln, Eis und Apfelsaft, bitte. Wie viel macht das zusammen? Vielen Dank!",
        ["¡Misión 10 y Mundo 2 completados!"],
        0,
        "Usa las fórmulas: Ich möchte..., bitte + Wie viel macht das zusammen? + Vielen Dank!",
        "🎤👑"
      ]
    ]
  },
  "11": {
    "title": "Der kaputte Roboter",
    "es": "El robot desarmado",
    "icon": "🤖",
    "intro": "Im Labor fehlen dem Roboter Teile. Lies die Bauanleitung, frage nach den Teilen und hilf beim Zusammenbauen!",
    "introEs": "Al robot le faltan piezas. Comprende instrucciones y reconstruye al robot.",
    "reward": "🔋 die Roboterbatterie",
    "tasks": [
      [
        "choice",
        "Ein Roboter",
        "Reconoce al robot",
        "Was ist das?",
        "Das ist ein Roboter.",
        [
          "Ein Roboter.",
          "Ein Schloss.",
          "Ein Apfel."
        ],
        0,
        "Identificar Roboter y artículo ein."
      ],
      [
        "choice",
        "Die Teile",
        "Escucha la pieza",
        "Was fehlt?",
        "Der Roboter braucht einen Arm.",
        [
          "Ein Arm.",
          "Ein Buch.",
          "Eine Uhr."
        ],
        0,
        "Was fehlt? Ein Arm. Atención: sujeto en nominativo, no «einen Arm». Después: Ich brauche einen Arm (acusativo)."
      ],
      [
        "order",
        "Die Anleitung",
        "Construye una instrucción",
        "Baue den Satz!",
        "Nimm den roten Arm.",
        [
          "Arm.",
          "Nimm",
          "den roten"
        ],
        [
          "Nimm",
          "den roten",
          "Arm."
        ],
        "Explicar imperativo nimm solo en contexto; no exigir paradigma."
      ],
      [
        "kit",
        "Die Werkbank",
        "Monta el robot con las dos piezas necesarias",
        "Der Roboter braucht einen roten Arm und eine Batterie.",
        "Nimm den roten Arm und die Batterie.",
        [
          "🟦 blauer Arm",
          "🟥 roter Arm",
          "🔋 Batterie",
          "🟩 grünes Bein"
        ],
        [
          1,
          2
        ],
        "Pedir Nimm den roten Arm und die Batterie. Comparar nominativo der Arm con acusativo den Arm."
      ],
      [
        "dialogue",
        "Die Mechanikerin",
        "Pide una pieza",
        "Frag: Hast du eine Batterie?",
        "Hast du eine Batterie?",
        [
          "Hast du eine Batterie?",
          "Wo ist die Königin?",
          "Wie spät ist es?"
        ],
        0,
        "Escuchar la pregunta oral y responder Ja, hier ist sie."
      ],
      [
        "choice",
        "Links oder rechts?",
        "Sigue una instrucción",
        "Wo ist der blaue Arm?",
        "Der blaue Arm ist links.",
        [
          "links",
          "rechts",
          "in der Mitte"
        ],
        0,
        "Recuperación de M2: links/rechts."
      ],
      [
        "choice",
        "Wir bauen",
        "Conjuga el verbo",
        "Wir ... einen Roboter.",
        "Wir bauen einen Roboter.",
        [
          "baut",
          "bauen",
          "baue"
        ],
        1,
        "Contrastar wir bauen, ihr baut."
      ],
      [
        "oral",
        "Die Montage",
        "Explica el montaje",
        "Sag, welche zwei Teile du brauchst.",
        "Ich brauche einen Arm und eine Batterie.",
        null,
        null,
        "Aceptar dos piezas reales; validar artículos."
      ],
      [
        "oral",
        "Der Test",
        "Prueba el robot",
        "Frag den Roboter: Kannst du gehen?",
        "Kannst du gehen?",
        null,
        null,
        "Pregunta oral; profesora responde Ja, ich kann gehen."
      ],
      [
        "oral",
        "Energie!",
        "Enciende el robot",
        "Erkläre, was ihr gerade baut.",
        "Wir bauen einen Roboter.",
        null,
        null,
        "Validar frase en presente con wir + bauen y entregar batería."
      ]
    ]
  },
  "12": {
    "title": "Die geheimen Experimente",
    "es": "Los experimentos secretos",
    "icon": "🧪",
    "intro": "Drei Gläser haben ihre Etiketten verloren. Folge den Farben und Mengen, um das richtige Experiment zu retten!",
    "introEs": "Tres vasos perdieron sus etiquetas. Sigue colores y cantidades para salvar el experimento.",
    "reward": "🧪 das Zauberelixier",
    "tasks": [
      [
        "choice",
        "Drei Gläser",
        "Identifica los vasos",
        "Wie viele Gläser siehst du?",
        "Ich sehe drei Gläser.",
        [
          "zwei",
          "drei",
          "vier"
        ],
        1,
        "Contar visualmente tres recipientes."
      ],
      [
        "choice",
        "Die Farben",
        "Escucha un color",
        "Welche Farbe hat das Wasser?",
        "Das Wasser ist blau.",
        [
          "blau",
          "rot",
          "gelb"
        ],
        0,
        "Recuperación de colores M4."
      ],
      [
        "order",
        "Das Experiment",
        "Ordena la frase",
        "Baue den Satz!",
        "Ich nehme das blaue Glas.",
        [
          "das blaue Glas.",
          "nehme",
          "Ich"
        ],
        [
          "Ich",
          "nehme",
          "das blaue Glas."
        ],
        "Artículo das y adjetivo en contexto; no exigir declinación completa."
      ],
      [
        "route",
        "Die richtige Mischung",
        "Elige el vaso",
        "Nimm das blaue Glas, nicht das rote!",
        "Nimm das blaue Glas.",
        [
          "🟥 rotes Glas",
          "🟦 blaues Glas",
          "🟨 gelbes Glas"
        ],
        1,
        "La mezcla incorrecta cambia de color; reintentar."
      ],
      [
        "dialogue",
        "Die Forscherin",
        "Pregunta a la científica",
        "Frag: Wie viele Gläser brauchen wir?",
        "Wie viele Gläser brauchen wir?",
        [
          "Wer ist der König?",
          "Wie viele Gläser brauchen wir?",
          "Wo ist das Bad?"
        ],
        1,
        "Validar pregunta; responder Wir brauchen zwei Gläser."
      ],
      [
        "sort",
        "Ordne die Etiketten",
        "Clasifica los materiales para salvar el experimento",
        "Was ist eine Farbe? Was ist ein Gegenstand?",
        "Rot und Blau sind Farben. Glas und Flasche sind Gegenstände.",
        [
          "🔴 rot",
          "🥛 das Glas",
          "🔵 blau",
          "🧴 die Flasche",
          "🟡 gelb",
          "🥄 der Löffel"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Después de clasificar: Rot ist eine Farbe. Das Glas ist ein Gegenstand. Pide una frase nueva y señala los artículos.",
        [
          "🎨 Farben",
          "🧰 Gegenstände"
        ]
      ],
      [
        "choice",
        "Ich mische",
        "Conjuga el verbo",
        "Du ... die Farben.",
        "Du mischst die Farben.",
        [
          "mische",
          "mischt",
          "mischst"
        ],
        2,
        "ich mische, du mischst, er mischt."
      ],
      [
        "oral",
        "Mein Experiment",
        "Describe los ingredientes",
        "Was brauchst du?",
        "Ich brauche zwei Gläser und Wasser.",
        null,
        null,
        "Validar cantidad y objeto."
      ],
      [
        "oral",
        "Die Beobachtung",
        "Describe el resultado",
        "Welche Farbe siehst du?",
        "Ich sehe grünes Wasser.",
        null,
        null,
        "Aceptar un color plausible según la mezcla elegida."
      ],
      [
        "oral",
        "Das Elixier",
        "Presenta el resultado",
        "Erkläre dein Experiment in zwei Sätzen.",
        "Ich nehme zwei Gläser. Das Wasser ist grün.",
        null,
        null,
        "Validar dos frases antes de entregar elixir."
      ]
    ]
  },
  "13": {
    "title": "Der Code der Maschinen",
    "es": "El código de las máquinas",
    "icon": "💻",
    "intro": "Die Maschinen verstehen nur klare Befehle. Finde die richtige Reihenfolge, damit sich die Labortür öffnet!",
    "introEs": "Las máquinas solo entienden instrucciones claras. Ordena los comandos para abrir la puerta.",
    "reward": "💾 der Zugangscode",
    "tasks": [
      [
        "choice",
        "Die Maschine",
        "Identifica la acción",
        "Was macht die Maschine?",
        "Die Maschine läuft.",
        [
          "Sie schläft.",
          "Sie läuft.",
          "Sie isst."
        ],
        1,
        "Comparar laufen con máquina funcionando, no correr literalmente."
      ],
      [
        "sort",
        "Befehle oder Dinge?",
        "Separa órdenes y objetos para que el ordenador reconozca los comandos.",
        "Was ist ein Befehl? Was ist ein Gegenstand?",
        "Drück den Knopf! Warte! Das sind Befehle. Der Knopf und die Tür sind Gegenstände.",
        [
          "Drück den Knopf!",
          "der Knopf",
          "Warte!",
          "die Tür",
          "Öffne die Tür!",
          "der Computer"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Pedir al alumno que dé una orden real: Drück den Knopf! / Warte!; comprobar que distingue verbo imperativo de sustantivo.",
        [
          "⚡ Befehle",
          "📦 Gegenstände"
        ]
      ],
      [
        "order",
        "Der erste Befehl",
        "Construye el comando",
        "Baue den Satz!",
        "Drück den grünen Knopf.",
        [
          "Knopf.",
          "Drück",
          "den grünen"
        ],
        [
          "Drück",
          "den grünen",
          "Knopf."
        ],
        "Imperativo informal drück como instrucción simple."
      ],
      [
        "route",
        "Drei Knöpfe",
        "Pulsa el botón correcto",
        "Drück den grünen Knopf!",
        "Drück den grünen Knopf.",
        [
          "🔴 rot",
          "🟢 grün",
          "🔵 blau"
        ],
        1,
        "Solo el verde enciende el panel."
      ],
      [
        "dialogue",
        "Der Computer",
        "Haz una pregunta",
        "Frag: Was muss ich machen?",
        "Was muss ich machen?",
        [
          "Was muss ich machen?",
          "Wer ist die Königin?",
          "Was kostet der Ball?"
        ],
        0,
        "Validar pregunta oral; computadora responde Drück den grünen Knopf."
      ],
      [
        "choice",
        "Du drückst",
        "Elige la conjugación",
        "Du ... den Knopf.",
        "Du drückst den Knopf.",
        [
          "drücke",
          "drückst",
          "drückt"
        ],
        1,
        "Contrastar du drückst, er drückt."
      ],
      [
        "choice",
        "Der Code",
        "Comprende el número",
        "Der Code ist vier, zwei, eins.",
        "Vier, zwei, eins.",
        [
          "421",
          "241",
          "412"
        ],
        0,
        "Números de M8; leer 4-2-1."
      ],
      [
        "oral",
        "Drei Schritte",
        "Explica una secuencia",
        "Sag: Erst ... Dann ... Zum Schluss ...",
        "Erst drücke ich den Knopf. Dann warte ich. Zum Schluss öffne ich die Tür.",
        null,
        null,
        "Aceptar secuencia corta con erst/dann/zum Schluss."
      ],
      [
        "oral",
        "Du bist dran",
        "Da instrucciones",
        "Gib Felix zwei Befehle.",
        "Drück den Knopf! Warte!",
        null,
        null,
        "Profesor ejecuta instrucciones para comprobar comunicación."
      ],
      [
        "oral",
        "Die Tür öffnet sich",
        "Desbloquea la puerta",
        "Sag den Code und einen Befehl.",
        "Vier, zwei, eins. Drück den Knopf!",
        null,
        null,
        "Validar número y comando; entregar código."
      ]
    ]
  },
  "14": {
    "title": "Die verschwundenen Daten",
    "es": "Los datos desaparecidos",
    "icon": "📊",
    "intro": "Die Laboruhr hat die Messdaten gelöscht. Vergleiche die Bilder, frage nach Zahlen und bring die Daten zurück!",
    "introEs": "Se borraron las mediciones del laboratorio. Compara imágenes y recupera números y datos.",
    "reward": "📋 das Forschungsheft",
    "tasks": [
      [
        "choice",
        "Das Messgerät",
        "Identifica la medida",
        "Wie viele Sterne sind auf dem Bildschirm?",
        "Auf dem Bildschirm sind fünf Sterne.",
        [
          "drei",
          "fünf",
          "acht"
        ],
        1,
        "Mostrar cinco estrellas con dedos o dibujo."
      ],
      [
        "sort",
        "Warm oder kalt?",
        "Clasifica las pistas de temperatura del laboratorio",
        "Was ist normalerweise warm? Was ist kalt?",
        "Die Sonne und das Feuer sind warm. Eis und Schnee sind kalt.",
        [
          "☀️ die Sonne",
          "🧊 das Eis",
          "🔥 das Feuer",
          "❄️ der Schnee"
        ],
        [
          0,
          1,
          0,
          1
        ],
        "Aclarar que se clasifican ejemplos cotidianos; preguntar Was ist kalt? y aceptar explicaciones breves.",
        [
          "🔥 warm",
          "❄️ kalt"
        ]
      ],
      [
        "order",
        "Die Messung",
        "Construye un dato",
        "Baue den Satz!",
        "Heute ist es warm.",
        [
          "warm.",
          "Heute",
          "ist es"
        ],
        [
          "Heute",
          "ist es",
          "warm."
        ],
        "Recuperar heute y clima, anticipar mundo del tiempo."
      ],
      [
        "route",
        "Die richtige Datei",
        "Encuentra el registro",
        "Suche die Datei mit fünf Sternen.",
        "Die Datei hat fünf Sterne.",
        [
          "⭐ 1",
          "⭐⭐⭐⭐⭐ 5",
          "⭐⭐⭐ 3"
        ],
        1,
        "La carpeta correcta recupera un dato."
      ],
      [
        "dialogue",
        "Der Assistent",
        "Pregunta por el dato",
        "Frag: Wie viele Sterne sind das?",
        "Wie viele Sterne sind das?",
        [
          "Wo ist das Schloss?",
          "Wie viele Sterne sind das?",
          "Was isst du?"
        ],
        1,
        "Validar pregunta oral; respuesta Das sind fünf Sterne."
      ],
      [
        "choice",
        "Heute oder gestern?",
        "Identifica el tiempo",
        "Wann messen wir?",
        "Wir messen heute die Temperatur.",
        [
          "morgen",
          "gestern",
          "heute"
        ],
        2,
        "Distinguir heute, morgen, gestern solo receptivamente."
      ],
      [
        "choice",
        "Die Daten",
        "Conjuga en plural",
        "Die Forscher ... die Temperatur.",
        "Die Forscher messen die Temperatur.",
        [
          "misst",
          "messe",
          "messen"
        ],
        2,
        "Revisar sie messen frente a er misst."
      ],
      [
        "oral",
        "Mein Bericht",
        "Presenta dos datos",
        "Sag zwei Beobachtungen.",
        "Ich sehe fünf Sterne. Heute ist es warm.",
        null,
        null,
        "Validar cantidad y adjetivo."
      ],
      [
        "oral",
        "Die Rückfrage",
        "Pregunta y responde",
        "Frag deine Lehrkraft nach einer Zahl.",
        "Wie viele Sterne siehst du?",
        null,
        null,
        "La profesora muestra cantidad nueva; niño pregunta."
      ],
      [
        "oral",
        "Die Daten sind da!",
        "Entrega el informe",
        "Erkläre, welche Datei richtig ist.",
        "Die richtige Datei hat fünf Sterne.",
        null,
        null,
        "Validar justificación y entregar cuaderno."
      ]
    ]
  },
  "15": {
    "title": "Das große Laborrätsel",
    "es": "El gran acertijo del laboratorio",
    "icon": "🔬",
    "intro": "Das Labor ist dunkel. Nutze Roboter, Farben, Zahlen und Fragen aus den letzten Missionen, um das Licht einzuschalten!",
    "introEs": "El laboratorio quedó a oscuras. Recupera lo aprendido para volver a encender la luz.",
    "reward": "🔦 die Laborlampe",
    "tasks": [
      [
        "choice",
        "Die Dunkelheit",
        "Reconoce el problema",
        "Was brauchen wir?",
        "Wir brauchen Licht.",
        [
          "Licht",
          "Brot",
          "Schuhe"
        ],
        0,
        "Conectar necesidad con objetivo narrativo."
      ],
      [
        "sort",
        "Die Reparaturkiste",
        "Prepara el material para encender la luz; separa lo útil de lo que no sirve.",
        "Was brauchen wir für das Licht?",
        "Wir brauchen die Batterie, die Lampe und das Kabel. Brot, Schuhe und eine Krone brauchen wir nicht.",
        [
          "🔋 die Batterie",
          "🍞 das Brot",
          "💡 die Lampe",
          "👟 die Schuhe",
          "🔌 das Kabel",
          "👑 die Krone"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Hacer que explique Wir brauchen die Batterie. Wir brauchen keine Krone. Repetir con ich/wir.",
        [
          "💡 Für das Licht",
          "🚫 Nicht nötig"
        ]
      ],
      [
        "order",
        "Der Plan",
        "Construye el plan",
        "Baue den Satz!",
        "Wir brauchen die Batterie.",
        [
          "die Batterie.",
          "Wir",
          "brauchen"
        ],
        [
          "Wir",
          "brauchen",
          "die Batterie."
        ],
        "Contrastar wir brauchen con ich brauche."
      ],
      [
        "route",
        "Die Energiequelle",
        "Elige la fuente",
        "Nimm die grüne Batterie.",
        "Nimm die grüne Batterie.",
        [
          "🔴 rote Batterie",
          "🟢 grüne Batterie",
          "🔵 blaue Batterie"
        ],
        1,
        "Elegir pieza adecuada; una incorrecta no activa luz."
      ],
      [
        "dialogue",
        "Die Laborleitung",
        "Pide ayuda",
        "Frag höflich: Haben Sie eine Lampe?",
        "Haben Sie eine Lampe?",
        [
          "Haben Sie eine Lampe?",
          "Hast du ein Bett?",
          "Wer isst Brot?"
        ],
        0,
        "Validar Sie formal y respuesta Ja, hier ist eine Lampe."
      ],
      [
        "choice",
        "Die Zahl",
        "Recupera números",
        "Wie viel ist drei plus vier?",
        "Drei plus vier ist sieben.",
        [
          "sechs",
          "sieben",
          "acht"
        ],
        1,
        "Recuperación de cálculo M8."
      ],
      [
        "choice",
        "Das Team",
        "Conjuga en plural",
        "Ihr ... die Lampe.",
        "Ihr findet die Lampe.",
        [
          "finde",
          "findet",
          "finden"
        ],
        1,
        "Distinguir ihr findet de wir finden, sie finden."
      ],
      [
        "oral",
        "Der Laborplan",
        "Explica el procedimiento",
        "Sag zwei Schritte für die Reparatur.",
        "Zuerst nehme ich die Batterie. Dann drücke ich den Knopf.",
        null,
        null,
        "Profesor sigue dos instrucciones; evaluar claridad."
      ],
      [
        "oral",
        "Die große Frage",
        "Pregunta al compañero",
        "Stell eine W-Frage zum Labor.",
        "Wo ist die Lampe?",
        null,
        null,
        "Aceptar Wo/Was/Wie viele con respuesta pertinente."
      ],
      [
        "oral",
        "Licht an!",
        "Enciende la luz",
        "Erkläre, wie ihr das Licht einschaltet.",
        "Wir haben die Batterie. Wir drücken den Knopf. Das Licht ist an!",
        null,
        null,
        "Validar explicación en presente y entregar lámpara."
      ]
    ]
  },
  "16": {
    "title": "Der Wetterwirbel",
    "es": "El torbellino del tiempo",
    "icon": "🌦️",
    "intro": "Eine Zeitmaschine fliegt durch vier Jahreszeiten. Felix braucht einen Wetterbericht, damit die Maschine sicher landen kann.",
    "introEs": "La máquina del tiempo atraviesa las estaciones. Ayuda a Félix a describir el tiempo y aterrizar.",
    "reward": "🌦️ die Wetterkarte",
    "tasks": [
      [
        "choice",
        "Das Wetterfenster",
        "Observa el cielo",
        "Wie ist das Wetter?",
        "Es regnet.",
        [
          "Es schneit.",
          "Es regnet.",
          "Die Sonne scheint."
        ],
        1,
        "Mostrar lluvia con gestos; distinguir es regnet y es schneit."
      ],
      [
        "choice",
        "Ein kalter Morgen",
        "Escucha el pronóstico",
        "Wie ist das Wetter heute?",
        "Heute ist es kalt.",
        [
          "Heute ist es kalt.",
          "Heute ist es heiß.",
          "Heute ist es windstill."
        ],
        0,
        "Preguntar: Ist es kalt oder warm?"
      ],
      [
        "route",
        "Das sichere Tor",
        "Elige una puerta",
        "Es schneit. Welches Tor passt?",
        "Es schneit. Das passt zum Winter.",
        [
          "☀️ Sommer",
          "❄️ Winter",
          "🌷 Frühling"
        ],
        1,
        "El niño explica la estación elegida."
      ],
      [
        "order",
        "Der Wetterbericht",
        "Construye la frase",
        "Baue den Satz: Heute ist es windig.",
        "Heute ist es windig.",
        [
          "windig.",
          "Heute",
          "es",
          "ist"
        ],
        [
          "Heute",
          "ist",
          "es",
          "windig."
        ],
        "Señalar el verbo en segunda posición."
      ],
      [
        "sort",
        "Der Wetterkoffer",
        "Ordena señales del tiempo antes de viajar por las estaciones.",
        "Was ist Wetter? Was ist eine Jahreszeit?",
        "Regen, Schnee und Wind sind Wetter. Sommer, Winter und Herbst sind Jahreszeiten.",
        [
          "🌧️ der Regen",
          "☀️ der Sommer",
          "❄️ der Schnee",
          "🍂 der Herbst",
          "💨 der Wind",
          "⛄ der Winter"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Preguntar Wie ist das Wetter? y Welche Jahreszeit ist das?; evitar afirmar que siempre nieva en invierno.",
        [
          "🌦️ Wetter",
          "📅 Jahreszeiten"
        ]
      ],
      [
        "dialogue",
        "Frag die Wetterfee",
        "Pregunta por el clima",
        "Frag: Wie ist das Wetter?",
        "Wie ist das Wetter?",
        [
          "Wo ist Felix?",
          "Wie ist das Wetter?",
          "Wie heißt du?"
        ],
        1,
        "Validar pregunta oral; hada responde Es ist windig."
      ],
      [
        "choice",
        "Die Warnung",
        "Comprende la alerta",
        "Was sagt Felix?",
        "Achtung! Es ist sehr windig.",
        [
          "Es ist sehr windig.",
          "Es ist sehr heiß.",
          "Es ist dunkel."
        ],
        0,
        "Explicar sehr como intensificador."
      ],
      [
        "route",
        "Die Landung",
        "Decide el aterrizaje",
        "Es ist windig. Wo landen wir sicher?",
        "Wir landen im geschützten Tal.",
        [
          "🌪️ auf dem Berg",
          "🏞️ im geschützten Tal",
          "☁️ in den Wolken"
        ],
        1,
        "La decisión permite aterrizar; pedir razón simple: Es ist windig."
      ],
      [
        "oral",
        "Dein Wetterbericht",
        "Presenta el tiempo",
        "Sag zwei Sätze über das Wetter.",
        "Heute ist es kalt. Es regnet.",
        null,
        null,
        "Validar dos frases propias, sin lectura si es posible."
      ],
      [
        "oral",
        "Die Wetterkarte",
        "Gana el mapa meteorológico",
        "Was weißt du jetzt?",
        "Ich kann das Wetter beschreiben. Heute ist es windig.",
        null,
        null,
        "Recompensa tras un pronóstico oral; transferencia al clima local."
      ]
    ]
  },
  "17": {
    "title": "Die Reise in die Vergangenheit",
    "es": "Viaje al pasado",
    "icon": "🕰️",
    "intro": "Die Zeitmaschine landet in einer Stadt von gestern. Felix sucht das alte Bahnhofsschild und muss Menschen und Orte erkennen.",
    "introEs": "La máquina aterriza en una ciudad antigua. Busca la estación comparando lugares y personas.",
    "reward": "🎟️ das alte Ticket",
    "tasks": [
      [
        "choice",
        "Am Bahnhof",
        "Identifica el lugar",
        "Wo sind wir?",
        "Wir sind am Bahnhof.",
        [
          "Im Krankenhaus.",
          "Am Bahnhof.",
          "Im Schwimmbad."
        ],
        1,
        "Situar Bahnhof con imagen o gesto de tren."
      ],
      [
        "choice",
        "Das alte Foto",
        "Observa una foto",
        "Was siehst du?",
        "Ich sehe einen Zug.",
        [
          "Ich sehe einen Zug.",
          "Ich sehe eine Katze.",
          "Ich sehe einen Kuchen."
        ],
        0,
        "Recordar der Zug → einen Zug."
      ],
      [
        "route",
        "Drei Wege",
        "Elige el camino",
        "Das Schild sagt: Zum Bahnhof. Wohin gehen wir?",
        "Wir gehen zum Bahnhof.",
        [
          "🏠 zum Haus",
          "🚉 zum Bahnhof",
          "🌳 zum Park"
        ],
        1,
        "Mostrar el cartel Zum Bahnhof como pista."
      ],
      [
        "order",
        "Der alte Zug",
        "Construye una descripción",
        "Baue den Satz: Der Zug ist alt.",
        "Der Zug ist alt.",
        [
          "alt.",
          "ist",
          "Der Zug"
        ],
        [
          "Der Zug",
          "ist",
          "alt."
        ],
        "Contrastar alt/neu con objetos."
      ],
      [
        "sort",
        "Am alten Bahnhof",
        "Distingue medios de transporte y lugares para encontrar el tren.",
        "Was fährt? Wo warten wir?",
        "Der Zug, der Bus und das Fahrrad sind Verkehrsmittel. Der Bahnhof, der Park und das Haus sind Orte.",
        [
          "🚂 der Zug",
          "🚉 der Bahnhof",
          "🚌 der Bus",
          "🌳 der Park",
          "🚲 das Fahrrad",
          "🏠 das Haus"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Pedir dos frases: Der Zug fährt. Ich warte am Bahnhof. No exigir formas de pasado.",
        [
          "🚆 Verkehrsmittel",
          "📍 Orte"
        ]
      ],
      [
        "dialogue",
        "Frag den Schaffner",
        "Pregunta al revisor",
        "Frag: Wo ist der Zug?",
        "Wo ist der Zug?",
        [
          "Wo ist der Zug?",
          "Wie viel kostet die Suppe?",
          "Ich bin Zug."
        ],
        0,
        "Escuchar pregunta completa antes de validar."
      ],
      [
        "choice",
        "Das Ticket",
        "Comprende una respuesta",
        "Was sagt der Schaffner?",
        "Der Zug kommt um neun Uhr.",
        [
          "Um sechs Uhr.",
          "Um neun Uhr.",
          "Um zwölf Uhr."
        ],
        1,
        "Revisar um + hora."
      ],
      [
        "route",
        "Die Abfahrt",
        "Elige la hora",
        "Der Zug kommt um neun Uhr. Wann kommt der Zug?",
        "Der Zug kommt um neun Uhr.",
        [
          "🕕 06:00",
          "🕘 09:00",
          "🕛 12:00"
        ],
        1,
        "Pedir: Um neun Uhr."
      ],
      [
        "oral",
        "Erzähl vom Foto",
        "Describe el pasado visual",
        "Beschreibe das alte Foto mit zwei Sätzen.",
        "Das ist ein alter Zug. Der Zug ist rot.",
        null,
        null,
        "No enseñar pretérito todavía: describir foto en presente."
      ],
      [
        "oral",
        "Das alte Ticket",
        "Recupera el billete describiendo lo que encontraste.",
        "Was ist das? Zeig das Ticket und sag einen Satz im Präsens.",
        "Das ist ein altes Ticket. Es gehört zum Zug.",
        null,
        null,
        "Aceptar Das ist ein Ticket / Das Ticket ist alt. No exigir Perfekt; Preguntar Was ist das? y aceptar una descripción en presente."
      ]
    ]
  },
  "18": {
    "title": "Die Zukunftsstadt",
    "es": "La ciudad del futuro",
    "icon": "🚀",
    "intro": "In der Zukunftsstadt sind alle Verkehrsmittel durcheinander. Felix muss einen Weg zum Turm planen.",
    "introEs": "En una ciudad futurista, elige medios de transporte y explica cómo llegar a la torre.",
    "reward": "🚀 die Fahrkarte",
    "tasks": [
      [
        "choice",
        "Die neue Stadt",
        "Identifica transporte",
        "Was ist das?",
        "Das ist ein Bus.",
        [
          "Ein Bus.",
          "Ein Brot.",
          "Ein Buch."
        ],
        0,
        "Contrastar Bus/Buch con escucha."
      ],
      [
        "sort",
        "Die Verkehrszentrale",
        "Organiza los vehículos y los lugares para que funcione el transporte.",
        "Was ist ein Verkehrsmittel? Was ist ein Ort?",
        "Der Bus, das Fahrrad und das Auto sind Verkehrsmittel. Die Haltestelle, der Turm und der Bahnhof sind Orte.",
        [
          "🚌 der Bus",
          "🚏 die Haltestelle",
          "🚲 das Fahrrad",
          "🗼 der Turm",
          "🚗 das Auto",
          "🚉 der Bahnhof"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Preguntar Wie fährst du? y Wo ist der Bus?; construir Ich fahre mit dem Bus.",
        [
          "🚗 Verkehrsmittel",
          "📍 Orte"
        ]
      ],
      [
        "route",
        "Der richtige Weg",
        "Elige el camino para cruzar el río",
        "Wir müssen über den Fluss. Welchen Weg nehmen wir?",
        "Wir gehen über die Brücke.",
        [
          "🌊 durch den Fluss",
          "🌉 über die Brücke",
          "🏔️ über den Berg"
        ],
        1,
        "Relacionar ruta con mapa, no solo vocabulario."
      ],
      [
        "order",
        "Wir fahren",
        "Construye la frase",
        "Baue den Satz: Wir fahren mit dem Bus.",
        "Wir fahren mit dem Bus.",
        [
          "dem Bus.",
          "fahren",
          "Wir",
          "mit"
        ],
        [
          "Wir",
          "fahren",
          "mit",
          "dem Bus."
        ],
        "Introducir mit dem Bus como expresión fija A1."
      ],
      [
        "choice",
        "Der Plan",
        "Lee un cartel",
        "Wann fährt der Bus?",
        "Der Bus fährt um zehn Uhr.",
        [
          "Um acht Uhr.",
          "Um zehn Uhr.",
          "Um zwölf Uhr."
        ],
        1,
        "Mostrar horario 10:00 y pedir lectura."
      ],
      [
        "dialogue",
        "Frag den Fahrer",
        "Pregunta al conductor",
        "Frag: Fahren Sie zum Turm?",
        "Fahren Sie zum Turm?",
        [
          "Fährst du zum Turm?",
          "Fahren Sie zum Turm?",
          "Ich fahre zum Turm."
        ],
        1,
        "Diferenciar trato formal Sie en contexto público."
      ],
      [
        "choice",
        "Die Antwort",
        "Escucha al conductor",
        "Was sagt der Fahrer?",
        "Ja, ich fahre zum Turm.",
        [
          "Nein, ich fahre nach Hause.",
          "Ja, ich fahre zum Turm.",
          "Ich bin neun Jahre alt."
        ],
        1,
        "Practicar respuesta afirmativa."
      ],
      [
        "route",
        "Die Entscheidung",
        "Elige destino",
        "Der Bus fährt zum Turm. Steigst du in den Bus oder ins Auto ein?",
        "Ich steige in den Bus ein.",
        [
          "🚗 ins Auto",
          "🚌 in den Bus",
          "🚲 aufs Fahrrad"
        ],
        1,
        "Verificar comprensión; no exigir dominar separables."
      ],
      [
        "oral",
        "Dein Reiseplan",
        "Explica el trayecto",
        "Sag: Wohin fährst du? Wie fährst du?",
        "Ich fahre zum Turm. Ich fahre mit dem Bus.",
        null,
        null,
        "Escuchar dos frases propias y una pregunta de seguimiento."
      ],
      [
        "oral",
        "Die Fahrkarte",
        "Obtén el billete",
        "Bitte um eine Fahrkarte.",
        "Eine Fahrkarte, bitte. Danke!",
        null,
        null,
        "Role-play docente como conductor; recompensa."
      ]
    ]
  },
  "19": {
    "title": "Der kaputte Kalender",
    "es": "El calendario roto",
    "icon": "📅",
    "intro": "Alle Tage und Monate sind vertauscht. Ohne einen richtigen Kalender öffnet sich das Zeitportal nicht.",
    "introEs": "Los días y meses están desordenados. Reordena el calendario para abrir el portal.",
    "reward": "📅 der Zeitkalender",
    "tasks": [
      [
        "choice",
        "Heute und morgen",
        "Reconoce el día",
        "Auf dem ersten Kalenderblatt steht: Heute ist Montag. Was ist morgen?",
        "Morgen ist Dienstag.",
        [
          "Sonntag.",
          "Dienstag.",
          "Freitag."
        ],
        1,
        "Utilizar calendario real como apoyo visual."
      ],
      [
        "order",
        "Ein wichtiger Tag",
        "Ordena la frase",
        "Auf dem zweiten Kalenderblatt steht Freitag. Baue den Satz: Heute ist Freitag.",
        "Heute ist Freitag.",
        [
          "Freitag.",
          "ist",
          "Heute"
        ],
        [
          "Heute",
          "ist",
          "Freitag."
        ],
        "V2 con adverbio temporal al principio."
      ],
      [
        "choice",
        "Die Woche",
        "Encuentra el día",
        "Welcher Tag kommt nach Mittwoch?",
        "Donnerstag kommt nach Mittwoch.",
        [
          "Dienstag.",
          "Donnerstag.",
          "Montag."
        ],
        1,
        "Repasar secuencia con ritmo y palmas."
      ],
      [
        "sort",
        "Die Zeitmaschine sortieren",
        "La máquina distingue días y meses.",
        "Sortiere die Wörter: Wochentag oder Monat?",
        "Montag, Dienstag und Freitag sind Wochentage. April, Mai und Oktober sind Monate.",
        [
          "Montag",
          "April",
          "Freitag",
          "Mai",
          "Dienstag",
          "Oktober"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Pide al alumno que diga: Heute ist Montag. Mein Geburtstag ist im Mai. Pregunta: Welcher Monat kommt nach April?",
        [
          "📅 Wochentag",
          "🗓️ Monat"
        ]
      ],
      [
        "choice",
        "Der Geburtstag",
        "Lee una fecha",
        "Wann hat Felix Geburtstag?",
        "Felix hat am 3. Mai Geburtstag.",
        [
          "Am dritten Mai.",
          "Am dritten Juni.",
          "Am zweiten Mai."
        ],
        0,
        "Mostrar 03.05; ofrecer modelo sin exigir ordinales productivos."
      ],
      [
        "dialogue",
        "Frag Felix",
        "Pregunta su cumpleaños",
        "Frag: Wann hast du Geburtstag?",
        "Wann hast du Geburtstag?",
        [
          "Wie alt ist das Buch?",
          "Wann hast du Geburtstag?",
          "Wo ist der Bus?"
        ],
        1,
        "Validar pregunta oral y respuesta personalizada."
      ],
      [
        "choice",
        "Der Termin",
        "Comprende una cita",
        "Wann treffen wir uns?",
        "Wir treffen uns am Samstag.",
        [
          "Am Sonntag.",
          "Am Freitag.",
          "Am Samstag."
        ],
        2,
        "Relacionar am con día."
      ],
      [
        "route",
        "Das Portal",
        "Elige el día",
        "Wir treffen uns am Samstag. Welches Feld öffnet das Portal?",
        "Samstag öffnet das Portal.",
        [
          "📆 Freitag",
          "📆 Sonntag",
          "📆 Samstag"
        ],
        2,
        "La puerta solo se abre con día correcto."
      ],
      [
        "oral",
        "Dein Kalender",
        "Habla de tu semana",
        "Stell dir vor, heute ist Dienstag. Sag zwei Sätze über deine Woche.",
        "Heute ist Dienstag. Am Samstag spiele ich.",
        null,
        null,
        "Acepta frases en presente; no exigir verbos complejos."
      ],
      [
        "oral",
        "Der Zeitkalender",
        "Repara el calendario",
        "Stell dir vor, heute ist Dienstag. Frag und antworte: Welcher Tag ist heute?",
        "Welcher Tag ist heute? Heute ist Dienstag.",
        null,
        null,
        "Intercambio oral con docente; recompensa."
      ]
    ]
  },
  "20": {
    "title": "Das letzte Zeitportal",
    "es": "El último portal temporal",
    "icon": "🌀",
    "intro": "Das Zeitportal braucht vier richtige Signale: Wetter, Uhrzeit, Wochentag und Reiseziel. Nur dann können Felix und du zurückkehren.",
    "introEs": "El portal necesita cuatro señales: tiempo atmosférico, hora, día y destino. Combínalas para regresar.",
    "reward": "🌀 der Portalschlüssel",
    "tasks": [
      [
        "choice",
        "Signal eins",
        "Reconoce el clima",
        "Wie ist das Wetter?",
        "Es ist sonnig.",
        [
          "Es ist sonnig.",
          "Es schneit.",
          "Es regnet."
        ],
        0,
        "Reactivar misión 16."
      ],
      [
        "choice",
        "Signal zwei",
        "Comprende la hora",
        "Wann startet das Portal?",
        "Das Portal startet um sieben Uhr.",
        [
          "Um sechs Uhr.",
          "Um sieben Uhr.",
          "Um neun Uhr."
        ],
        1,
        "Reactivar misión 17/18."
      ],
      [
        "route",
        "Signal drei",
        "Elige el día",
        "Heute ist Freitag. Das Portal öffnet morgen. Wann?",
        "Das Portal öffnet sich am Samstag.",
        [
          "📅 Donnerstag",
          "📅 Samstag",
          "📅 Montag"
        ],
        1,
        "Reactivar misión 19; pedir justificación."
      ],
      [
        "order",
        "Signal vier",
        "Construye el destino",
        "Baue den Satz: Wir fahren nach Hause.",
        "Wir fahren nach Hause.",
        [
          "Hause.",
          "Wir",
          "nach",
          "fahren"
        ],
        [
          "Wir",
          "fahren",
          "nach",
          "Hause."
        ],
        "Revisar orden y expresión nach Hause."
      ],
      [
        "choice",
        "Das Warnlicht",
        "Identifica qué botón debes pulsar",
        "Welchen Knopf müssen wir drücken?",
        "Drück den grünen Knopf!",
        [
          "Den roten Knopf.",
          "Den grünen Knopf.",
          "Den blauen Knopf."
        ],
        1,
        "Introducir imperativo solo como comprensión."
      ],
      [
        "dialogue",
        "Die Zeitwächterin",
        "Pide ayuda",
        "Frag höflich: Können Sie mir helfen?",
        "Können Sie mir helfen?",
        [
          "Kannst du mir helfen?",
          "Können Sie mir helfen?",
          "Wo ist mein Ball?"
        ],
        1,
        "Practicar Sie formal con guardiana adulta desconocida."
      ],
      [
        "choice",
        "Die Antwort",
        "Comprende respuesta",
        "Was sagt die Wächterin?",
        "Ja. Das Portal ist jetzt offen.",
        [
          "Das Portal ist kaputt.",
          "Das Portal ist jetzt offen.",
          "Das Portal ist sehr klein."
        ],
        1,
        "Ahora se desbloquea narrativamente la salida."
      ],
      [
        "route",
        "Der letzte Schritt",
        "Elige ruta",
        "Das Portal ist offen. Wohin gehen wir?",
        "Wir gehen durch das Portal.",
        [
          "🚪 durch das Portal",
          "🌊 in den Fluss",
          "🏔️ auf den Berg"
        ],
        0,
        "Consecuencia visible: portal abierto."
      ],
      [
        "oral",
        "Die vier Signale",
        "Resume el viaje",
        "Nenne Wetter, Uhrzeit und den Tag, an dem sich das Portal öffnet.",
        "Es ist sonnig. Das Portal startet um sieben Uhr. Morgen ist Samstag.",
        null,
        null,
        "Validar tres elementos con apoyos graduados."
      ],
      [
        "oral",
        "Der Portalschlüssel",
        "Cierra el mundo",
        "Bitte die Wächterin um Hilfe und verabschiede dich.",
        "Können Sie mir helfen? Vielen Dank! Auf Wiedersehen!",
        null,
        null,
        "Role-play completo, recompensa y transición al mundo final."
      ]
    ]
  },
  "21": {
    "title": "Die Rückkehr in den Wald",
    "es": "El regreso al bosque",
    "icon": "🌲",
    "intro": "Felix und du seid zurück im Wald. Aber die Wege haben sich verändert! Vergleiche die alte Karte mit dem neuen Wald und finde den Heimweg.",
    "introEs": "Regresan al bosque, pero los caminos han cambiado. Compara las pistas y encuentra el camino a casa.",
    "reward": "🌿 das Waldabzeichen",
    "tasks": [
      [
        "choice",
        "Wieder zu Hause",
        "Reconoce el lugar",
        "Wo sind wir?",
        "Wir sind im Wald.",
        [
          "Im Schloss.",
          "Im Wald.",
          "Im Labor."
        ],
        1,
        "Pedir frase completa Wir sind im Wald."
      ],
      [
        "choice",
        "Die alte Karte",
        "Recuerda la brújula",
        "Was haben wir?",
        "Wir haben eine Karte und einen Kompass.",
        [
          "Eine Karte und einen Kompass.",
          "Ein Brot und Milch.",
          "Einen Roboter und einen Bus."
        ],
        0,
        "Recuperación espaciada misiones 1–3."
      ],
      [
        "route",
        "Die neue Kreuzung",
        "Elige el camino",
        "Die Brücke ist links. Wo gehen wir hin?",
        "Wir gehen nach links.",
        [
          "🌊 nach rechts",
          "🌉 nach links",
          "🏰 geradeaus"
        ],
        1,
        "Pedir justificar: Die Brücke ist links."
      ],
      [
        "order",
        "Der richtige Weg",
        "Ordena una indicación",
        "Baue den Satz: Wir gehen nach links.",
        "Wir gehen nach links.",
        [
          "links.",
          "gehen",
          "Wir",
          "nach"
        ],
        [
          "Wir",
          "gehen",
          "nach",
          "links."
        ],
        "Orden V2 y dirección."
      ],
      [
        "choice",
        "Ein alter Freund",
        "Identifica al animal",
        "Was sieht Felix?",
        "Er sieht einen Hasen.",
        [
          "Er sehen einen Hasen.",
          "Er sieht einen Hasen.",
          "Er siehst einen Hasen."
        ],
        1,
        "Recuperar sehen, tercera persona y einen Hasen."
      ],
      [
        "dialogue",
        "Frag die Eule",
        "Pregunta por el camino",
        "Frag: Wo ist der Weg nach Hause?",
        "Wo ist der Weg nach Hause?",
        [
          "Wo ist der Weg nach Hause?",
          "Wie viel kostet der Weg?",
          "Ich bin ein Weg."
        ],
        0,
        "Validar la pregunta oral; búho: Der Weg ist rechts."
      ],
      [
        "choice",
        "Die Antwort",
        "Comprende al búho",
        "Was sagt die Eule?",
        "Der Weg ist rechts.",
        [
          "Der Weg ist links.",
          "Der Weg ist rechts.",
          "Der Weg ist im Schloss."
        ],
        1,
        "No revelar texto antes de escuchar."
      ],
      [
        "route",
        "Die Entscheidung",
        "Toma la decisión",
        "Der Weg ist rechts. Welchen Weg nimmst du?",
        "Ich gehe nach rechts.",
        [
          "⬅️ links",
          "⬆️ geradeaus",
          "➡️ rechts"
        ],
        2,
        "Decisión conduce al hogar; pedir Ich gehe nach rechts."
      ],
      [
        "oral",
        "Der Heimweg",
        "Explica la ruta",
        "Erkläre den Weg mit zwei Sätzen.",
        "Die Brücke ist links. Der Weg nach Hause ist rechts. Wir gehen nach rechts.",
        null,
        null,
        "Exigir dos frases, ofrecer mapa de apoyo."
      ],
      [
        "oral",
        "Das Waldabzeichen",
        "Cuenta el regreso",
        "Was hast du jetzt?",
        "Ich habe eine Karte. Wir sind zu Hause!",
        null,
        null,
        "Validar oralmente y entregar insignia."
      ]
    ]
  },
  "22": {
    "title": "Die Fragen des Fuchses",
    "es": "Las preguntas del zorro",
    "icon": "❓",
    "intro": "Felix hat fünf Fragekarten verloren. Ohne die richtigen Fragen können die Tiere nicht helfen. Finde wer, was, wo, wann und wie!",
    "introEs": "Félix perdió las tarjetas de preguntas. Recupera wer, was, wo, wann y wie para pedir ayuda.",
    "reward": "❓ die Fragekarten",
    "tasks": [
      [
        "choice",
        "Wer ist das?",
        "Identifica la pregunta",
        "Du möchtest wissen, wer dort sitzt. Du siehst die Eule. Welche Frage passt?",
        "Wer ist das?",
        [
          "Wo ist das?",
          "Wer ist das?",
          "Wann ist das?"
        ],
        1,
        "Wer para persona/animal identificado."
      ],
      [
        "choice",
        "Was ist das?",
        "Pregunta por un objeto",
        "Du kennst den Gegenstand nicht. Du siehst einen Kompass. Welche Frage passt?",
        "Was ist das?",
        [
          "Wie alt bist du?",
          "Wer ist das?",
          "Was ist das?"
        ],
        2,
        "Was para cosa."
      ],
      [
        "route",
        "Wo ist die Karte?",
        "Busca un objeto",
        "Die Karte liegt auf dem Tisch. Wo suchst du?",
        "Auf dem Tisch.",
        [
          "🌳 im Baum",
          "🪑 auf dem Tisch",
          "🌊 im Fluss"
        ],
        1,
        "Comprensión espacial en contexto."
      ],
      [
        "order",
        "Eine richtige Frage",
        "Ordena una pregunta",
        "Baue die Frage: Wo ist Felix?",
        "Wo ist Felix?",
        [
          "Felix?",
          "ist",
          "Wo"
        ],
        [
          "Wo",
          "ist",
          "Felix?"
        ],
        "W-Frage + verbo + sujeto."
      ],
      [
        "choice",
        "Wann beginnt es?",
        "Identifica el momento",
        "Das Fest beginnt um sechs Uhr. Welche Frage passt?",
        "Wann beginnt das Fest?",
        [
          "Wann beginnt das Fest?",
          "Wo beginnt das Fest?",
          "Wer beginnt das Fest?"
        ],
        0,
        "Wann para tiempo; recuperar misión 9."
      ],
      [
        "dialogue",
        "Frag den Hasen",
        "Pregunta cómo está",
        "Frag: Wie geht es dir?",
        "Wie geht es dir?",
        [
          "Wo geht es dir?",
          "Wie geht es dir?",
          "Was geht es dir?"
        ],
        1,
        "Validar pregunta oral. Respuesta: Gut, danke!"
      ],
      [
        "choice",
        "Die Antwort",
        "Comprende la respuesta",
        "Du spielst den Hasen. Felix fragt: Wie geht es dir? Was antwortest du?",
        "Mir geht es gut, danke!",
        [
          "Er ist müde.",
          "Ihm geht es schlecht.",
          "Mir geht es gut, danke!"
        ],
        2,
        "Escuchar respuesta y referirse a él con ihm."
      ],
      [
        "sort",
        "Drei Frage-Schlüssel",
        "Tres llaves para abrir la puerta.",
        "Ordne die Fragen zu: Person, Ort oder Sache?",
        "Wer ist das? Wo ist Felix? Was ist das?",
        [
          "Wer ist das?",
          "Wo ist Felix?",
          "Was ist das?",
          "Wer hilft uns?",
          "Wo ist die Karte?",
          "Was brauchst du?"
        ],
        [
          0,
          1,
          2,
          0,
          1,
          2
        ],
        "Después de clasificar, que invente una pregunta para Félix y una para la profesora. Wer = persona, Wo = lugar, Was = cosa.",
        [
          "👤 Person",
          "📍 Ort",
          "🎒 Sache"
        ]
      ],
      [
        "oral",
        "Das Interview",
        "Entrevista al personaje",
        "Stell drei verschiedene Fragen.",
        "Wie heißt du? Wo bist du? Was magst du?",
        null,
        null,
        "Tres preguntas distintas; la docente responde como Félix."
      ],
      [
        "oral",
        "Die Fragekarten",
        "Recupera las tarjetas",
        "Erkläre: Welche Frage benutzt du für einen Ort?",
        "Wo ist die Karte?",
        null,
        null,
        "Aceptar Wo? como respuesta A1; entregar tarjetas."
      ]
    ]
  },
  "23": {
    "title": "Der höfliche Besuch",
    "es": "La visita cortés",
    "icon": "🤝",
    "intro": "Eine unbekannte Besucherin kommt in den Wald. Sie hat den Schlüssel zum letzten Tor. Sprich höflich mit ihr und hilf Felix!",
    "introEs": "Una visitante desconocida tiene la llave. Practica el trato formal Sie para conseguirla.",
    "reward": "🗝️ der goldene Schlüssel",
    "tasks": [
      [
        "choice",
        "Guten Tag!",
        "Elige saludo formal",
        "Du triffst eine Besucherin. Was sagst du zur Begrüßung?",
        "Guten Tag!",
        [
          "Hallo, du!",
          "Guten Tag!",
          "Tschüss!"
        ],
        1,
        "Distinguir saludo formal sin estereotipos."
      ],
      [
        "choice",
        "Wie heißen Sie?",
        "Pregunta su nombre",
        "Welche Frage ist höflich?",
        "Wie heißen Sie?",
        [
          "Wie heißt du?",
          "Wie heißen Sie?",
          "Wie heißt er?"
        ],
        1,
        "Sie mayúscula; heißen en plural formal."
      ],
      [
        "order",
        "Die höfliche Frage",
        "Ordena una pregunta",
        "Baue die Frage: Wo wohnen Sie?",
        "Wo wohnen Sie?",
        [
          "Sie?",
          "Wo",
          "wohnen"
        ],
        [
          "Wo",
          "wohnen",
          "Sie?"
        ],
        "W-Frage + verbo + Sie."
      ],
      [
        "dialogue",
        "Frag die Besucherin",
        "Pide ayuda",
        "Frag höflich: Können Sie mir helfen?",
        "Können Sie mir helfen?",
        [
          "Kannst du mir helfen?",
          "Können Sie mir helfen?",
          "Du helfen mir?"
        ],
        1,
        "Validar producción oral antes de continuar."
      ],
      [
        "choice",
        "Die Antwort",
        "Comprende la respuesta",
        "Was sagt die Besucherin?",
        "Ja, gern. Ich helfe Ihnen.",
        [
          "Nein, niemals.",
          "Ja, gern.",
          "Ich bin ein Schlüssel."
        ],
        1,
        "Escuchar Ja, gern; respuesta sin castigo."
      ],
      [
        "hotspot",
        "Das Tor",
        "Encuentra la puerta",
        "Die Besucherin sagt: Das Tor ist in der Mitte.",
        "Das Tor ist in der Mitte.",
        [
          "⬅️ links",
          "🚪 in der Mitte",
          "➡️ rechts"
        ],
        1,
        "Decisión espacial recupera misión 2."
      ],
      [
        "choice",
        "Du oder Sie?",
        "Distingue registros",
        "Du sprichst mit Felix. Ihr kennt euch gut. Welche Frage passt?",
        "Wie geht es dir?",
        [
          "Wie geht es dir?",
          "Wie geht es Ihnen?",
          "Wie geht es euch?"
        ],
        0,
        "Contrastar interlocutores conocidos y desconocidos."
      ],
      [
        "sort",
        "Zwei Stimmen",
        "Elige el registro apropiado para cada interlocutor.",
        "Sprichst du mit Felix oder mit der Besucherin? Ordne die Sätze zu.",
        "Felix ist mein Freund. Zu ihm sage ich du. Zur Besucherin sage ich Sie.",
        [
          "Wie heißt du?",
          "Wie heißen Sie?",
          "Kannst du mir helfen?",
          "Können Sie mir helfen?",
          "Wohnst du hier?",
          "Wohnen Sie hier?"
        ],
        [
          0,
          1,
          0,
          1,
          0,
          1
        ],
        "Haz dos escenas breves: Félix como amigo y una visitante desconocida. Señala la mayúscula de Sie y la terminación -en.",
        [
          "🦊 Felix: du",
          "👩 Besucherin: Sie"
        ]
      ],
      [
        "oral",
        "Zwei Gespräche",
        "Representa dos registros",
        "Sprich zuerst mit Felix, dann mit der Besucherin.",
        "Hallo, Felix! Wie geht es dir? Guten Tag! Wie heißen Sie?",
        null,
        null,
        "Role-play dos personajes, validar cambio de registro."
      ],
      [
        "oral",
        "Der Schlüssel",
        "Solicita la llave",
        "Bitte höflich um den Schlüssel.",
        "Kann ich bitte den Schlüssel haben? Vielen Dank!",
        null,
        null,
        "Validar solicitud y agradecimiento; entregar llave."
      ]
    ]
  },
  "24": {
    "title": "Das letzte Abenteuer",
    "es": "La aventura final",
    "icon": "🏆",
    "intro": "Das letzte Tor ist verschlossen. Felix braucht deine Hilfe: fünf Rätsel, ein Gespräch und einen Reisebericht. Nutze, was du gelernt hast!",
    "introEs": "La puerta final exige resolver desafíos de los cinco mundos, conversar y contar el viaje.",
    "reward": "🏆 das Abenteuer-Zertifikat",
    "tasks": [
      [
        "choice",
        "Die Freunde",
        "Recuerda la presentación",
        "Wie heißt unser Freund?",
        "Er heißt Felix.",
        [
          "Er heißen Felix.",
          "Er heißt Felix.",
          "Er heiße Felix."
        ],
        1,
        "Reactivar sein/heißen."
      ],
      [
        "hotspot",
        "Die Waldkarte",
        "Recuerda direcciones",
        "Die Brücke ist rechts. Wo gehst du hin?",
        "Ich gehe nach rechts.",
        [
          "⬅️ links",
          "⬆️ geradeaus",
          "➡️ rechts"
        ],
        2,
        "Explicar la decisión."
      ],
      [
        "choice",
        "Das Schloss",
        "Recuerda los alimentos",
        "Was trinkst du?",
        "Ich trinke Wasser.",
        [
          "Ich esse Wasser.",
          "Ich trinke Wasser.",
          "Ich bin Wasser."
        ],
        1,
        "Reactivar trinken/essen."
      ],
      [
        "order",
        "Der Roboter",
        "Ordena la instrucción",
        "Baue den Satz: Drück den grünen Knopf!",
        "Drück den grünen Knopf!",
        [
          "Knopf!",
          "den",
          "Drück",
          "grünen"
        ],
        [
          "Drück",
          "den",
          "grünen",
          "Knopf!"
        ],
        "Reactivar instrucciones del laboratorio."
      ],
      [
        "choice",
        "Das Zeitportal",
        "Recuerda el calendario",
        "Heute ist Montag. Was ist morgen?",
        "Morgen ist Dienstag.",
        [
          "Sonntag.",
          "Dienstag.",
          "Freitag."
        ],
        1,
        "Reactivar días de la semana."
      ],
      [
        "dialogue",
        "Die Wächterin",
        "Pide permiso cortés",
        "Frag: Können Sie das Tor öffnen?",
        "Können Sie das Tor öffnen?",
        [
          "Kannst du das Tor öffnen?",
          "Können Sie das Tor öffnen?",
          "Wo ist mein Buch?"
        ],
        1,
        "Validar Sie formal, cortesía y entonación."
      ],
      [
        "choice",
        "Die Antwort",
        "Comprende a la guardiana",
        "Was sagt die Wächterin?",
        "Ja, das Tor ist offen!",
        [
          "Das Tor ist geschlossen.",
          "Ja, das Tor ist offen!",
          "Der Zug kommt morgen."
        ],
        1,
        "La puerta se abre narrativamente."
      ],
      [
        "sort",
        "Die vier Welten öffnen das Tor",
        "Recupera cuatro mundos para activar la puerta final.",
        "Ordne die Erinnerungen: Wald, Schloss, Labor oder Zeitreise?",
        "Im Wald haben wir einen Kompass. Im Schloss treffen wir die Königin. Im Labor reparieren wir den Roboter. Auf der Zeitreise finden wir das Portal.",
        [
          "der Kompass",
          "die Königin",
          "der Roboter",
          "das Zeitportal",
          "die Brücke",
          "der Markt",
          "die Batterie",
          "der Kalender"
        ],
        [
          0,
          1,
          2,
          3,
          0,
          1,
          2,
          3
        ],
        "Antes de clasificar, pregunta qué recuerda de cada mundo. Después pide cuatro frases: Im Wald finde ich ...; Im Schloss ...; Im Labor ...; Auf der Zeitreise ... . No exige pasado gramatical.",
        [
          "🌲 Wald",
          "🏰 Schloss",
          "🧪 Labor",
          "🌀 Zeitreise"
        ]
      ],
      [
        "oral",
        "Deine Reise",
        "Cuenta la aventura",
        "Erzähle drei Sätze über deine Reise.",
        "Ich heiße Mia. Ich habe eine Karte. Wir gehen nach Hause.",
        null,
        null,
        "Tres frases personales, dos sin leer; evaluación formativa."
      ],
      [
        "oral",
        "Das große Finale",
        "Despídete de Félix",
        "Stell Felix eine Frage und verabschiede dich.",
        "Wie geht es dir, Felix? Danke! Auf Wiedersehen!",
        null,
        null,
        "Interacción auténtica: pregunta y despedida; certificado."
      ]
    ]
  }
};
