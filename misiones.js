// Cada misión aporta cinco verbos en contexto y cinco objetos/acciones ilustradas.
// Los temas se repasan deliberadamente: no son 120 verbos nuevos independientes.
const data=[
 ['La brújula de los nombres','sein,haben,heißen,kommen,wohnen','hier,einen Kompass,Felix,aus Berlin,in Berlin','🦊,🧭,👋,🚂,🏠','Presentarse y decir origen/residencia'],
 ['Los animales se presentan','sein,haben,heißen,kommen,wohnen','klein,zwei Freunde,Luna,aus dem Wald,im Wald','🐰,🐿️,🦊,🐻,🌳','Identificar animales y hablar de su hogar'],
 ['La mochila con secretos','haben,brauchen,nehmen,suchen,finden','ein Buch,einen Stift,eine Tasche,den Schlüssel,den Schlüssel','📚,✏️,🎒,🔑,🔍','Pedir y encontrar objetos'],
 ['La puerta de los números','zählen,zeigen,haben,sehen,finden','bis zehn,drei Äpfel,fünf Sterne,zwei Füchse,den Weg','🔢,🍎,⭐,🦊,🗺️','Contar y describir cantidades'],
 ['El guardián de las acciones','sein,haben,kommen,wohnen,spielen','bereit,eine Karte,aus Spanien,in Berlin,im Wald','🗝️,🗺️,🚂,🏠,🎲','Consolidar sein/haben y verbos regulares'],
 ['El banquete del rey','essen,trinken,schlafen,spielen,sprechen','einen Apfel,Wasser,im Bett,Schach,Deutsch','🍎,🥤,🛏️,♟️,🗣️','Rutinas y cambio e→i / e→ie'],
 ['Retratos de familia','essen,trinken,schlafen,spielen,sprechen','Brot,Saft,im Zimmer,mit Oma,mit Papa','🥖,🧃,😴,👵,👨','Describir acciones familiares'],
 ['La cocina encantada','essen,trinken,kochen,machen,helfen','eine Banane,Milch,Suppe,einen Salat,der Mutter','🍌,🥛,🍲,🥗,🤝','Preparar y pedir alimentos'],
 ['El reloj de las rutinas','aufstehen,schlafen,lernen,spielen,lesen','um sieben Uhr,um neun Uhr,Deutsch,am Nachmittag,ein Buch','⏰,🛏️,📖,🎲,📚','Secuencia de rutina y verbo separable'],
 ['El fantasma conversador','sprechen,fragen,antworten,hören,verstehen','Deutsch,den König,dem König,Musik,die Frage','🗣️,❓,💬,🎵,💡','Preguntas y respuestas breves'],
 ['El robot de los movimientos','tragen,anziehen,laufen,fliegen,gehen','eine Jacke,eine Mütze,schnell,hoch,nach Hause','🧥,🧢,🏃,🛸,🚶','Movimientos y ropa'],
 ['El espejo de los mutantes','tragen,anziehen,laufen,schlafen,waschen','einen Mantel,Schuhe,schnell,im Bett,die Hände','🧥,👟,🏃,😴,🧼','Reconocer a→ä en du/er'],
 ['La carrera de los animales','laufen,fliegen,schwimmen,springen,gehen','schnell,über den Wald,im See,hoch,langsam','🐕,🦅,🐟,🐸,🐢','Expresar cómo se mueven'],
 ['El vestidor alienígena','tragen,anziehen,brauchen,kaufen,finden','ein rotes T-Shirt,eine Jacke,einen Hut,Schuhe,die Hose','👕,🧥,🎩,👟,👖','Acusativo en ropa y colores'],
 ['La pasarela espacial','tragen,anziehen,laufen,zeigen,sehen','eine blaue Hose,einen Pullover,schnell,die Schuhe,einen Hut','👖,🧶,🏃,👟,🎩','Describir atuendos en acción'],
 ['El portal del verano','können,wollen,mögen,schwimmen,lesen','schwimmen,spielen,den Sommer,im See,ein Buch','🌞,🎲,❤️,🏊,📖','Modales y ocio'],
 ['La tormenta de planes','können,wollen,müssen,gehen,spielen','zu Hause bleiben,ein Buch lesen,lernen,nach Hause,drinnen','🌧️,📖,📚,🏠,🎲','Planificar según el clima'],
 ['El lago de los hobbies','können,wollen,mögen,schwimmen,lesen','gut schwimmen,Fußball spielen,Bücher,im See,einen Comic','🏊,⚽,📚,🌊,📖','Expresar capacidades y gustos'],
 ['La biblioteca del tiempo','lesen,schreiben,lernen,können,wollen','einen Comic,eine Nachricht,Deutsch,gut lesen,ein Buch lesen','📖,✍️,📚,💡,📘','Comprensión y dos verbos'],
 ['El festival de talentos','können,wollen,mögen,tanzen,singen','tanzen,singen,Musik,zusammen,laut','💃,🎤,🎶,🕺,🎼','Presentar talentos'],
 ['El tren secreto','fahren,fliegen,finden,machen,gehen','mit dem Zug,nach Berlin,den Bahnhof,eine Reise,zum Bahnhof','🚆,✈️,🚉,🧳,🚶','Transportes y destino'],
 ['El mapa desaparecido','fahren,finden,suchen,gehen,sehen','mit dem Bus,die Karte,den Weg,nach Hause,den Bahnhof','🚌,🗺️,🔎,🏠,🚉','Pedir y seguir un itinerario'],
 ['El puente de los recuerdos','machen,spielen,lesen,essen,trinken','eine Pause,Fußball,einen Comic,einen Apfel,Wasser','⏸️,⚽,📖,🍎,🥤','Repaso de oraciones con objetos'],
 ['La gran expedición final','sein,haben,können,finden,fahren','bereit,einen Kompass,Deutsch sprechen,den Weg,nach Hause','🏁,🧭,🗣️,🗺️,🚆','Integración de la sintaxis A1']
];
export const MISSIONS=data.map((d,i)=>({id:i+1,title:d[0],verbs:d[1].split(','),complements:d[2].split(','),icons:d[3].split(','),goal:d[4],world: i<5?'bosque':i<10?'castillo':i<15?'laboratorio':i<20?'tiempo':'regreso',item:`${['🌲','🏰','🧪','⏳','🗺️'][i<5?0:i<10?1:i<15?2:i<20?3:4]} Reliquia ${i+1}`}));
export const PERSONS=['ich','du','er','wir','ihr'];
const irregular={
 sein:['bin','bist','ist','sind','seid'],haben:['habe','hast','hat','haben','habt'],heißen:['heiße','heißt','heißt','heißen','heißt'],
 essen:['esse','isst','isst','essen','esst'],sprechen:['spreche','sprichst','spricht','sprechen','sprecht'],schlafen:['schlafe','schläfst','schläft','schlafen','schlaft'],
 lesen:['lese','liest','liest','lesen','lest'],tragen:['trage','trägst','trägt','tragen','tragt'],laufen:['laufe','läufst','läuft','laufen','lauft'],
 fahren:['fahre','fährst','fährt','fahren','fahrt'],sehen:['sehe','siehst','sieht','sehen','seht'],nehmen:['nehme','nimmst','nimmt','nehmen','nehmt'],
 helfen:['helfe','hilfst','hilft','helfen','helft'],waschen:['wasche','wäschst','wäscht','waschen','wascht'],
 können:['kann','kannst','kann','können','könnt'],wollen:['will','willst','will','wollen','wollt'],mögen:['mag','magst','mag','mögen','mögt'],müssen:['muss','musst','muss','müssen','müsst'],
 finden:['finde','findest','findet','finden','findet'],antworten:['antworte','antwortest','antwortet','antworten','antwortet'],
 arbeiten:['arbeite','arbeitest','arbeitet','arbeiten','arbeitet'],anziehen:['ziehe','ziehst','zieht','ziehen','zieht'],aufstehen:['stehe','stehst','steht','stehen','steht']
};
export function conjugate(verb,person){const idx=PERSONS.indexOf(person);if(idx<0)throw Error('Persona desconocida');if(irregular[verb])return irregular[verb][idx];let stem=verb.endsWith('en')?verb.slice(0,-2):verb.slice(0,-1);let suffix=['e','st','t','en','t'][idx];if(/(t|d)$/.test(stem)&&['st','t'].includes(suffix))suffix='e'+suffix;if(/(s|ß|z|x)$/.test(stem)&&idx===1)suffix='t';return stem+suffix;}
export function splitVerb(verb,person){const form=conjugate(verb,person);const ending=['e','st','t','en','t'][PERSONS.indexOf(person)];if(form.endsWith(ending))return [form.slice(0,-ending.length),ending];return [form,''];}
export function sentenceParts(mission,round){const verb=mission.verbs[round];const person=PERSONS[round];const [stem,ending]=splitVerb(verb,person);const complement=mission.complements[round];const isModal=['können','wollen','müssen'].includes(verb);const sep=verb==='anziehen'?' an':verb==='aufstehen'?' auf':'';return {verb,person,stem,ending,complement:complement+sep,isModal,text:`${person} ${conjugate(verb,person)} ${complement}${sep}.`};}
