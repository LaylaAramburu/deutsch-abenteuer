(function() {
  'use strict';
  if (!window.DEUTSCH_MISSIONS) return;

  window.DEUTSCH_MISSIONS["6"] = {
    "title": "Das Festessen im Schloss",
    "es": "El banquete en el castillo",
    "icon": "🍽️",
    "intro": "Der Koch bereitet das Festessen vor. Felix hilft und fragt: Wer isst was und was trinken die Gäste?",
    "introEs": "El cocinero prepara el banquete. Félix ayuda y pregunta: ¿Quién come qué y qué beben los invitados?",
    "reward": "🥄 der goldene Löffel",
    "tasks": [
      ["choice", "Der Koch kocht", "Escucha al cocinero y elige qué prepara", "Ich koche heute Suppe und Brot für das Fest.", "Ich koche heute Suppe und Brot für das Fest.", ["Suppe und Brot", "Milch und Käse", "Apfel und Kuchen"], 0, "Escucha las dos comidas: Suppe y Brot.", "🧑‍🍳🍲🥖"],
      ["choice", "Die Königin hat Hunger", "Escucha qué pide la Reina y deduce", "Ich habe Hunger und Durst. Ich nehme einen Apfel und ein Glas Wasser.", "Ich nehme einen Apfel und ein Glas Wasser.", ["Einen Apfel und Wasser", "Eine Suppe und Milch", "Käse und Brot"], 0, "Apfel = manzana, Wasser = agua.", "👑🍎💧"],
      ["choice", "Was oder Wer?", "Completa la pregunta correcta sobre la comida", "___ isst der König?", "Was isst der König?", ["Was isst der König?", "Wer isst der König?", "Wo isst der König?"], 0, "Para preguntar por una cosa o comida usamos WAS.", "🦊❓🍲"],
      ["choice", "Wer trinkt?", "Completa la pregunta correcta sobre la persona", "___ trinkt die Milch?", "Wer trinkt die Milch?", ["Wer trinkt die Milch?", "Was trinkt die Milch?", "Wann trinkt die Milch?"], 0, "Para preguntar por una persona usamos WER.", "👦❓🥛"],
      ["choice", "essen · konjugieren", "Elige las dos formas verbales correctas", "Der Vater ___ Käse und Brot, und wir ___ zusammen.", "Der Vater isst Käse und Brot, und wir essen zusammen.", ["isst / essen", "esse / isst", "esst / isst"], 0, "Con er/sie (der Vater) cambia la vocal: e -> i (isst). Con wir: essen.", "🍽️🥖🧀"],
      ["order", "Satzbau · Essen & Trinken", "Ordena la frase completa del invitado", "Ordena las palabras:", "Das Kind isst einen Apfel und trinkt Apfelsaft.", ["Das Kind", "isst", "einen Apfel", "und trinkt", "Apfelsaft."], 0, "Sujeto + verbo 1 + objeto + und + verbo 2 + objeto.", "🧩🧃🍎"],
      ["dialogue", "Beim Koch bestellen", "Fórmula: Ich möchte ___ und ___, bitte.", "Der Koch fragt: Was möchtest du essen und trinken?", "Ich möchte Suppe und Wasser, bitte.", ["Ich möchte Suppe und Wasser, bitte.", "Ich heiße Felix und wohne im Wald.", "Der Ball ist rot und blau."], 0, "Usa la fórmula: Ich möchte [comida] und [bebida], bitte.", "🧑‍🍳🗣️"],
      ["dialogue", "Die Königin fragen", "Fórmula: Was möchten Sie trinken?", "Frag die Königin höflich nach ihrem Getränk!", "Was möchten Sie trinken?", ["Was möchten Sie trinken?", "Wo wohnen Sie?", "Wie spät ist es?"], 0, "Para preguntar qué quiere beber con cortesía: Was möchten Sie trinken?", "👑🗣️"],
      ["choice", "Wer ist das? · Logik", "Lee las pistas y descubre quién es (Vater: Suppe+Brot | Mutter: Apfel+Wasser | Kind: Kuchen+Milch)", "Diese Person trinkt keine Milch. Sie isst Suppe und Brot.", "Der Vater isst Suppe und Brot.", ["Der Vater", "Die Mutter", "Das Kind"], 0, "Compara las pistas con cada miembro de la familia.", "🕵️‍♂️🍽️"],
      ["choice", "Dein Menü bestellen", "Elige 2 comidas (Suppe, Brot, Käse, Apfel, Kuchen) y 1 bebida (Wasser, Milch, Apfelsaft) y pídelas con: Ich möchte..., bitte!", "Ich möchte Käse, Brot und Apfelsaft, bitte.", "Ich möchte Käse, Brot und Apfelsaft, bitte.", ["¡Listo! Ya pedí mi menú completo en voz alta"], 0, "Combina 2 comidas + und + 1 bebida + bitte.", "🎤👑"]
    ]
  };
  window.DEUTSCH_MISSIONS["7"] = {
    "title": "Die Räume im Schloss",
    "es": "Las salas del castillo (Wo? · Dativo)",
    "icon": "🏰",
    "intro": "Die Königin sucht alle im Schloss. Felix erklärt: Mit 'Wo?' benutzen wir 'im' (der/das) und 'in der' (die)!",
    "introEs": "La Reina busca a todos en el castillo. Félix explica: Con 'Wo?' usamos 'im' (der/das) e 'in der' (die).",
    "reward": "🗺️ der Schloss-Plan",
    "tasks": [
      ["choice", "Wo ist der Koch?", "Escucha dónde trabaja el cocinero", "Wo ist der Koch? Er kocht heute in der Küche.", "Er kocht heute in der Küche.", ["In der Küche", "Im Park", "Im Bad"], 0, "die Küche (femenino) -> con Wo cambia a IN DER Küche.", "🏰🍳👑"],
      ["map", "Der Weg zur Bibliothek", "Sigue la ruta: Geh zuerst links am Garten vorbei, dann geradeaus bis zur Mitte und dort rechts!", "Wohin kommst du?", "rechts: Bibliothek", ["links: Garten", "Mitte: Hof", "rechts: Bibliothek"], 2, "Sigue los tres pasos: 1. links, 2. geradeaus, 3. rechts.", "🗺️🏰"],
      ["choice", "Dativ · der Park -> im Park", "Elige la forma correcta con Wo? (der Park = masculino)", "Wo spielen die Kinder nach der Schule? Sie spielen ___ Park.", "Sie spielen im Park.", ["im", "in der", "in die"], 0, "der Park es masculino (der) -> in + dem = im Park.", "🔵🌳"],
      ["choice", "Dativ · die Schule -> in der Schule", "Elige la forma correcta con Wo? (die Schule = femenino)", "Wo lernen Felix und Leo Deutsch? Sie lernen ___ Schule.", "Sie lernen in der Schule.", ["in der", "im", "in das"], 0, "die Schule es femenino (die) -> con Wo cambia a in der Schule.", "🔴🏫"],
      ["choice", "Dativ · das Klassenzimmer -> im Klassenzimmer", "Elige la forma correcta con Wo? (das Klassenzimmer = neutro)", "Wo schreibt der Lehrer an die Tafel? Er ist ___ Klassenzimmer.", "Er ist im Klassenzimmer.", ["im", "in der", "in den"], 0, "das Klassenzimmer es neutro (das) -> in + dem = im Klassenzimmer.", "🟢📚"],
      ["choice", "Dativ-Training · im oder in der?", "Completa las dos ubicaciones correctamente", "Der Koch ist ___ Küche und der König ist ___ Garten.", "Der Koch ist in der Küche und der König ist im Garten.", ["in der / im", "im / in der", "im / im"], 0, "die Küche (f) -> in der Küche; der Garten (m) -> im Garten.", "🔴🍳"],
      ["order", "Satzbau · Wo ist sie?", "Ordena la respuesta sobre ubicación", "Ordena las palabras:", "Meine Schwester ist in der Bibliothek.", ["Meine Schwester", "ist", "in der", "Bibliothek."], 0, "Sujeto + ist + in der + lugar femenino.", "🧩🏰"],
      ["dialogue", "Wo bist du?", "Fórmula: Ich bin im ___ / Ich bin in der ___", "Die Königin fragt: Wo bist du jetzt?", "Ich bin in der Schule.", ["Ich bin in der Schule.", "Ich gehe die Schule.", "Ich habe eine Schule."], 0, "Recuerda: die Schule (f) -> Ich bin in der Schule.", "👑🗣️"],
      ["dialogue", "Den Weg erklären", "Fórmula: Geh zuerst ___, dann ___!", "Ein Freund fragt: Wie komme ich zur Küche?", "Geh zuerst geradeaus, dann links!", ["Geh zuerst geradeaus, dann links!", "Ich trinke gern Wasser.", "Der Apfel kostet zwei Euro."], 0, "Usa: geradeaus (recto), links (izquierda), rechts (derecha).", "🦊🗺️"],
      ["choice", "Wo sind alle im Schloss?", "Di en voz alta dónde están 3 personas usando IM y IN DER (ej. Der Koch ist in der Küche, mein Freund ist im Park...)", "Der Koch ist in der Küche und mein Freund ist im Park.", "Der Koch ist in der Küche und mein Freund ist im Park.", ["¡Listo! Ya ubiqué a 3 personas usando im y in der"], 0, "Combina al menos un lugar femenino (in der) y uno masculino/neutro (im).", "🎤🏰"]
    ]
  };
  window.DEUTSCH_MISSIONS["8"] = {
    "title": "Der große Markt",
    "es": "El gran mercado (50 € de presupuesto)",
    "icon": "🏪",
    "intro": "Die Königin gibt Felix eine Einkaufsliste und 50 Euro: Kauf alles auf der Liste, aber gib nicht mehr als 50 Euro aus!",
    "introEs": "La Reina le da a Félix una lista de compras y 50 euros: ¡Compra todo lo de la lista sin pasarte de 50 euros!",
    "reward": "💰 der Goldbeutel",
    "tasks": [
      ["choice", "Was kostet die Schultasche?", "Escucha el precio de la mochila en el puesto", "Die Schultasche kostet vierundzwanzig Euro.", "Die Schultasche kostet vierundzwanzig Euro.", ["24 Euro", "42 Euro", "14 Euro"], 0, "vier (4) + und + zwanzig (20) = 24.", "🧑‍🌾🎒"],
      ["choice", "Singular · Wie viel kostet...?", "Elige el verbo correcto para 1 objeto (der Ball)", "Wie viel ___ der Ball?", "Wie viel kostet der Ball?", ["kostet", "kosten", "koste"], 0, "Para 1 objeto usamos singular: kostet.", "⚽💶"],
      ["choice", "Plural · Wie viel kosten...?", "Elige el verbo correcto para varios objetos (die Hefte)", "Wie viel ___ die Hefte?", "Wie viel kosten die Hefte?", ["kosten", "kostet", "kostest"], 0, "Para varios objetos usamos plural: kosten.", "📓💶"],
      ["choice", "Rechnen auf dem Markt", "Calcula el total: Ball (14 €) + Buch (12 €) + Brot (5 €)", "Wie viel kosten der Ball, das Buch und das Brot zusammen?", "Sie kosten einunddreißig Euro.", ["Einunddreißig Euro (31 €)", "Dreiundzwanzig Euro (23 €)", "Vierzig Euro (40 €)"], 0, "Suma: 14 + 12 + 5 = 31 (einunddreißig).", "🧮🛒"],
      ["order", "Satzbau · Nach dem Preis fragen", "Ordena la pregunta del comprador", "Ordena las palabras:", "Wie viel kosten der Käse und das Brot?", ["Wie viel", "kosten", "der Käse", "und das Brot?"], 0, "W-Frage (Wie viel) + verbo plural (kosten) + los dos productos.", "🧩💶"],
      ["choice", "Budget-Check (50 Euro)", "Lista: Schultasche (24 €) + Ball (14 €) + Käse (8 €) = 46 €. Tienes 50 €. ¿Qué puedes añadir?", "Was kannst du noch kaufen?", "Ich kann noch einen Apfel oder ein Heft kaufen.", ["Einen Apfel (2 €) oder ein Heft (4 €)", "Ein Buch (12 €)", "Einen Kuchen (11 €)"], 0, "Si llevas 46 € y tienes 50 €, solo te quedan 4 €.", "📜💰"],
      ["dialogue", "Nach dem Preis fragen", "Fórmula: Entschuldigung, wie viel kostet / kosten ___?", "Frag den Verkäufer nach dem Preis!", "Entschuldigung, wie viel kostet der Käse?", ["Entschuldigung, wie viel kostet der Käse?", "Wo ist das Klassenzimmer?", "Ich bin neun Jahre alt."], 0, "Empieza con Entschuldigung + wie viel kostet...", "🧑‍🌾🗣️"],
      ["dialogue", "Einkaufen mit Liste", "Fórmula: Ich möchte ___ und ___, bitte.", "Der Verkäufer fragt: Was möchten Sie kaufen?", "Ich möchte einen Ball und ein Brot, bitte.", ["Ich möchte einen Ball und ein Brot, bitte.", "Es ist sieben Uhr dreißig.", "Wir spielen im Garten."], 0, "Acusativo masculino: der Ball -> einen Ball.", "🛍️🗣️"],
      ["choice", "Wechselgeld prüfen", "Pagas una compra de 43 € con un billete de 50 €. ¿Cuánto cambio recibes?", "Wie viel Euro bekommst du zurück?", "Du bekommst sieben Euro zurück.", ["Sieben Euro (7 €)", "Siebzehn Euro (17 €)", "Drei Euro (3 €)"], 0, "50 - 43 = 7 (sieben Euro).", "🧾✅"],
      ["choice", "Rollenspiel · Auf dem Markt", "Haz la compra en voz alta: 1) Saluda (Guten Tag!), 2) Pregunta precio de 2 cosas (Wie viel kostet...?), 3) Compra y agradece (Ich möchte..., bitte. Danke!).", "Guten Tag! Wie viel kostet der Ball? Ich möchte einen Ball, bitte. Danke!", "Guten Tag! Wie viel kostet der Ball? Ich möchte einen Ball, bitte. Danke!", ["¡Listo! Ya hice toda la compra en voz alta"], 0, "Usa las tres fórmulas: saludo + pregunta de precio + pedido con bitte.", "🎤🏪"]
    ]
  };
  window.DEUTSCH_MISSIONS["9"] = {
    "title": "Der Tagesablauf im Schloss",
    "es": "La rutina del castillo (Horas · Uhr + minutos)",
    "icon": "🕰️",
    "intro": "Die Eule zeigt Felix den Tagesablauf im Schloss: Wann beginnt der Unterricht und wann ist das Training?",
    "introEs": "El Búho muestra a Félix la rutina del castillo: ¿Cuándo empiezan las clases y cuándo es el entrenamiento?",
    "reward": "⏰ die goldene Uhr",
    "tasks": [
      ["choice", "Wie spät ist es jetzt?", "Escucha al Búho y elige la hora exacta", "Guten Morgen! Es ist sieben Uhr dreißig. Zeit für das Frühstück!", "Es ist sieben Uhr dreißig.", ["7:30 Uhr", "7:15 Uhr", "8:30 Uhr"], 0, "sieben (7) + Uhr + dreißig (30) = 7:30.", "🦉⏰🥣"],
      ["choice", "Wann beginnt der Unterricht?", "Escucha cuándo empieza la clase en el castillo", "Der Unterricht beginnt um acht Uhr fünfzehn im Klassenzimmer.", "Der Unterricht beginnt um acht Uhr fünfzehn.", ["Um 8:15 Uhr", "Um 8:50 Uhr", "Um 9:15 Uhr"], 0, "acht (8) + Uhr + fünfzehn (15) = 8:15. Con horas usamos UM.", "🏫⏰📚"],
      ["choice", "Uhrzeit lesen · 16:30", "Elige cómo se dice 16:30 en alemán", "Es ist 16:30 Uhr. Wie sagt man das?", "Es ist sechzehn Uhr dreißig.", ["Es ist sechzehn Uhr dreißig.", "Es ist sechs Uhr dreizehn.", "Es ist sechzig Uhr drei."], 0, "16 = sechzehn · 30 = dreißig -> sechzehn Uhr dreißig.", "⚽⏰🌳"],
      ["choice", "Präposition · UM + Uhrzeit", "Completa la frase con la preposición correcta para horas", "Wir essen ___ dreizehn Uhr zusammen Mittagessen.", "Wir essen um dreizehn Uhr zusammen Mittagessen.", ["um", "am", "im"], 0, "Para decir 'a las...' con una hora exacta siempre usamos UM.", "🍲⏰👑"],
      ["choice", "Logik · Tagesablauf", "Lee la rutina y responde: 7:30 Frühstück | 8:15 Schule | 13:00 Mittagessen | 16:30 Training", "Was macht Felix um sechzehn Uhr dreißig?", "Er hat Training.", ["Er hat Training.", "Er isst Frühstück.", "Er geht schlafen."], 0, "Busca 16:30 (sechzehn Uhr dreißig) en el horario.", "🦊📅⏰"],
      ["order", "Satzbau · Wann beginnt...?", "Ordena la pregunta sobre el horario", "Ordena las palabras:", "Wann beginnt heute das Training?", ["Wann", "beginnt", "heute", "das Training?"], 0, "W-Frage (Wann) + verbo en 2.ª posición (beginnt) + sujeto.", "🧩⏰⚽"],
      ["dialogue", "Nach der Uhrzeit fragen", "Fórmula: Entschuldigung, wie spät ist es?", "Du hast keine Uhr. Frag die Eule nach der Zeit!", "Entschuldigung, wie spät ist es?", ["Entschuldigung, wie spät ist es?", "Wie viel kostet das Brot?", "Wo ist der Sportplatz?"], 0, "Para preguntar '¿Qué hora es?' usamos: Wie spät ist es?", "🦉🗣️"],
      ["dialogue", "Über den Tagesablauf sprechen", "Fórmula: Ich stehe um ___ Uhr auf und gehe um ___ Uhr zur Schule.", "Felix fragt: Wann gehst du zur Schule?", "Ich gehe um acht Uhr zur Schule.", ["Ich gehe um acht Uhr zur Schule.", "Ich möchte eine Suppe, bitte.", "Der Ball ist unter dem Tisch."], 0, "Usa UM + la hora + zur Schule.", "🦊🗣️"],
      ["choice", "Pünktlich oder zu spät?", "La clase empieza a las 8:15 (acht Uhr fünfzehn). Son las 8:30 (acht Uhr dreißig). ¿Cómo llega Leo?", "Es ist acht Uhr dreißig. Leo kommt...", "zu spät (tarde)", ["zu spät (tarde)", "pünktlich (puntual)", "am Abend (por la noche)"], 0, "8:30 es después de 8:15 -> llega tarde (zu spät).", "🏃‍♂️⏰🏫"],
      ["choice", "Mein Tagesablauf", "Cuenta tu rutina en voz alta usando UM + hora + minutos (ej. Ich esse um sieben Uhr dreißig Frühstück und gehe um acht Uhr fünfzehn zur Schule.)", "Ich esse um sieben Uhr dreißig Frühstück und gehe um acht Uhr fünfzehn zur Schule.", "Ich esse um sieben Uhr dreißig Frühstück und gehe um acht Uhr fünfzehn zur Schule.", ["¡Listo! Ya conté mi rutina con horas en alemán"], 0, "Usa al menos dos horas con 'um ... Uhr ...'.", "🎤⏰"]
    ]
  };
  window.DEUTSCH_MISSIONS["10"] = {
    "title": "Das königliche Festbankett",
    "es": "El gran banquete real (Síntesis Mundo 2)",
    "icon": "👑",
    "intro": "Das große Fest im Schloss beginnt! Felix, die Königin und der Koch feiern zusammen. Kombiniere alle W-Fragen und bestelle von der Speisekarte!",
    "introEs": "¡Empieza el gran banquete en el castillo! Félix, la Reina y el Cocinero celebran juntos. ¡Combina todas las W-Fragen y pide de la carta real!",
    "reward": "👑 die Goldene Krone",
    "tasks": [
      ["choice", "Einladung zum Festbankett", "Escucha la invitación de la Reina y elige la hora y el lugar", "Das Festbankett beginnt um achtzehn Uhr dreißig im großen Saal!", "Das Festbankett beginnt um achtzehn Uhr dreißig im großen Saal!", ["Um 18:30 Uhr im großen Saal", "Um 8:30 Uhr in der Küche", "Um 16:00 Uhr im Park"], 0, "achtzehn Uhr dreißig = 18:30; im großen Saal = en el gran salón.", "👑🎺🏰"],
      ["choice", "W-Fragen · Das große Quiz", "Elige la palabra interrogativa correcta para cada pregunta", "Completa: '___ kocht die Suppe?' (persona) y '___ kostet das Menü?' (precio)", "Wer kocht die Suppe? / Wie viel kostet das Menü?", ["Wer / Wie viel", "Was / Wo", "Wann / Wer"], 0, "Wer = quién (persona); Wie viel = cuánto (precio).", "🦊❓👑"],
      ["choice", "Königliche Speisekarte · Was isst du?", "Lee la carta real: Suppe (4 €) · Hähnchen (9 €) · Nudeln (7 €) · Salat (5 €) · Kuchen (5 €) · Eis (4 €) · Apfelsaft (3 €) · Wasser (2 €). ¿Cuánto cuestan Hähnchen, Salat und Apfelsaft?", "Wie viel kosten das Hähnchen, der Salat und der Apfelsaft zusammen?", "Sie kosten siebzehn Euro.", ["Siebzehn Euro (17 €)", "Fünfzehn Euro (15 €)", "Zwanzig Euro (20 €)"], 0, "Suma los tres precios de la carta: 9 + 5 + 3 = 17 (siebzehn).", "📜🍗🥗"],
      ["choice", "Dativ-Check im Schloss", "Recuerda la regla de Félix: ¿Dónde está cada cosa en el banquete?", "Der Kuchen steht ___ Küche und die Gäste sitzen ___ Garten.", "Der Kuchen steht in der Küche und die Gäste sitzen im Garten.", ["in der / im", "im / in der", "in die / in den"], 0, "die Küche (femenino) -> in der Küche; der Garten (masculino) -> im Garten.", "🍰🌳🏰"],
      ["order", "Satzbau · Höflich bestellen", "Ordena la frase completa para pedir en el banquete", "Ordena las palabras:", "Ich möchte bitte Nudeln, Salat und ein Glas Wasser.", ["Ich möchte", "bitte", "Nudeln, Salat", "und ein Glas Wasser."], 0, "Ich möchte + bitte + los platos + und + la bebida.", "🧩🍝💧"],
      ["choice", "Budget-Challenge (35 Euro)", "Tienes 35 € para invitar a un amigo: 2x Hähnchen (18 €) + 2x Apfelsaft (6 €) = 24 €. ¿Qué dos postres de la carta (Kuchen 5 € / Eis 4 €) alcanzan?", "Was kannst du für dich und deinen Freund noch bestellen?", "Zwei Kuchen (10 €) oder zwei Eis (8 €)", ["Zwei Kuchen (10 €) oder zwei Eis (8 €)", "Noch zwei Hähnchen (18 €)", "Drei Kuchen (15 €)"], 0, "35 - 24 = 11 € disponibles. Dos pasteles cuestan 10 € y dos helados 8 €.", "💰🍨🍰"],
      ["dialogue", "Im Restaurant bestellen", "Fórmula: Guten Abend! Ich hätte gern ___ und ___, bitte.", "Der Kellner im Schloss fragt: Was darf ich Ihnen bringen?", "Guten Abend! Ich hätte gern Hähnchen und Apfelsaft, bitte.", ["Guten Abend! Ich hätte gern Hähnchen und Apfelsaft, bitte.", "Mein Bruder heißt Leo.", "Der Bleistift ist blau."], 0, "Usa la fórmula cortés: Ich hätte gern [plato] und [bebida], bitte.", "🧑‍🍳🗣️"],
      ["dialogue", "Nach der Rechnung fragen", "Fórmula: Entschuldigung, zahlen bitte! Wie viel macht das zusammen?", "Ihr seid fertig mit dem Essen. Frag nach der Rechnung!", "Entschuldigung, zahlen bitte! Wie viel macht das zusammen?", ["Entschuldigung, zahlen bitte! Wie viel macht das zusammen?", "Wie spät ist es jetzt?", "Wo ist mein Heft?"], 0, "Para pedir la cuenta en alemán: Zahlen bitte! Wie viel macht das zusammen?", "💶🗣️"],
      ["choice", "Welt-Check · W-Fragen & Uhrzeit", "Lee la nota final del Búho: 'Um neunzehn Uhr treffen wir die Königin im Park. Sie bringt Kuchen für alle!'", "Wann und wo treffen sie die Königin?", "Um 19:00 Uhr im Park.", ["Um 19:00 Uhr im Park.", "Um 9:00 Uhr in der Schule.", "Um 17:00 Uhr im Bad."], 0, "neunzehn Uhr = 19:00; im Park = en el parque.", "🦉📜👑"],
      ["choice", "Das große Bankett · Rollenspiel", "Juego de rol final en clase: 1) Saluda y pide 2 platos y 1 bebida de la carta real (Suppe, Hähnchen, Nudeln, Salat, Kuchen, Eis, Wasser, Apfelsaft), 2) Pregunta cuánto cuesta todo y 3) Despídete dando las gracias.", "Guten Abend! Ich möchte Nudeln, Eis und Apfelsaft, bitte. Wie viel macht das zusammen? Vielen Dank!", "Guten Abend! Ich möchte Nudeln, Eis und Apfelsaft, bitte. Wie viel macht das zusammen? Vielen Dank!", ["¡Misión 10 y Mundo 2 completados!"], 0, "Usa las fórmulas: Ich möchte..., bitte + Wie viel macht das zusammen? + Vielen Dank!", "🎤👑"]
    ]
  };
})();
