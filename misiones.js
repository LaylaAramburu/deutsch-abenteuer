// Una misión = cuatro fases cronológicas con guion, mecánica y frase de producción.
const raw=[
['La brújula perdida','Hallo! Ich heiße Felix. Wie heißt du?','rot · blau · grün · eins–drei','Atrapar tres manzanas rojas y calibrar cristales','Hallo! Ich heiße … . Ich sehe drei rote Äpfel.','Cristal rojo'],
['El árbol que cuenta','Wie viele Äpfel? Eins, zwei, drei!','eins–zehn · Wie viele?','Contar frutos que aparecen en ramas y alimentar al búho','Ich sehe fünf Äpfel.','Pluma numérica'],
['La mochila mágica','Was hast du? Ich habe ein Buch.','ich habe · Buch · Stift · Tasche','Empacar objetos arrastrándolos según pistas','Ich habe einen Stift und ein Buch.','Mochila mágica'],
['Los colores secretos','Welche Farbe? Das ist blau.','Farben · Das ist …','Mezclar luces y encajar cristales cromáticos','Das ist grün. Ich habe zwei Kristalle.','Prisma'],
['El guardián del bosque','Ich bin Felix. Wer bist du?','ich bin · du bist · Wiederholung','Abrir portal con tres pistas de identidad','Hallo! Ich heiße … . Ich bin zehn.','Llave del bosque'],
['Retratos encantados','Das ist meine Mutter.','Familie · mein/meine','Reconstruir árbol genealógico con retratos parlantes','Das ist meine Familie. Das ist mein Vater.','Retrato familiar'],
['Habitaciones perdidas','Wo wohnst du? Ich wohne hier.','Zimmer · wohnen','Situar muebles en salas del castillo','Ich wohne in … . Das ist mein Zimmer.','Plano del castillo'],
['El reloj gigante','Wie spät ist es? Es ist drei Uhr.','Uhrzeit · volle Stunden','Mover manecillas para abrir puertas','Es ist vier Uhr.','Engranaje dorado'],
['El día del fantasma','Ich stehe auf. Ich spiele.','Tagesablauf · morgens/abends','Ordenar escenas de una rutina','Morgens stehe ich auf. Dann spiele ich.','Reloj espectral'],
['La fiesta del castillo','Das ist dein Geschenk!','mein/dein · Familie · Uhr','Entregar regalos al personaje correcto','Das ist mein Buch. Das ist dein Geschenk.','Corona amable'],
['El robot desarmado','Das ist der Arm.','Körper · Kopf/Arm/Bein','Construir robot con partes del cuerpo','Das ist mein Kopf. Ich habe zwei Arme.','Brazo robótico'],
['Alien grande, alien pequeño','Der Alien ist groß.','groß · klein · Farben','Crear alienígena según siluetas','Mein Alien ist klein und grün.','Miniatura alien'],
['Radar de animales','Der Fuchs kann laufen.','Tiere · können','Conectar animales con habilidades en radar','Der Vogel kann fliegen.','Radar vivo'],
['La cocina espacial','Ich mag Bananen.','Essen · ich mag / mag nicht','Preparar batido para criaturas con gustos','Ich mag Äpfel. Ich mag Milch nicht.','Receta estelar'],
['El monstruo hambriento','Was möchtest du?','Essen · bitte · Wiederholung','Alimentar criatura siguiendo peticiones','Ich möchte Wasser, bitte.','Cuchara lunar'],
['Tormenta temporal','Es regnet. Es ist kalt.','Wetter · regnen/kalt/warm','Activar refugios según meteorología','Es regnet. Es ist kalt.','Paraguas del tiempo'],
['La rueda de estaciones','Im Winter ist es kalt.','Jahreszeiten','Girar ruleta y reparar paisaje','Im Sommer ist es warm.','Rueda solar'],
['El armario de Felix','Ich trage eine Jacke.','Kleidung · tragen','Vestir a Felix según clima','Ich trage eine Jacke und Schuhe.','Bufanda mágica'],
['El calendario roto','Mein Geburtstag ist im Mai.','Monate · Geburtstag','Ordenar meses en calendario móvil','Mein Geburtstag ist im … .','Calendario de plata'],
['El festival del tiempo','Heute ist es sonnig.','Wetter · Monate · Kleidung','Combinar ropa y fecha para abrir festival','Im Juli ist es warm. Ich trage … .','Reloj de arena'],
['El tren del regreso','Ich fahre mit dem Zug.','Verkehrsmittel · fahren','Elegir rutas y vehículos en mapa','Ich fahre mit dem Bus.','Billete mágico'],
['El puente invisible','Der Schlüssel ist unter dem Tisch.','in · auf · unter','Buscar llave colocando objetos en posiciones','Der Ball ist unter dem Tisch.','Llave del puente'],
['La isla de los juegos','Ich spiele gern. Ich schwimme gern.','Hobbys · gern','Recorrer islas de actividades','Ich spiele gern Fußball.','Insignia de aficiones'],
['La gran vuelta a casa','Hallo! Ich heiße Felix. Ich bin zu Hause!','Integración A1 · repaso','Resolver cinco enigmas usando inventario','Ich heiße … . Ich mag … . Ich fahre … .','Brújula restaurada']
];
export const MISSIONS=raw.map((r,i)=>({id:i+1,title:r[0],input:r[1],language:r[2],mechanic:r[3],power:r[4],item:r[5],medal:`Medalla ${i+1}`,phases:[{minutes:'0–10',name:'Incidente narrativo',action:`Explora el escenario: ${r[3]}. Escucha y señala: ${r[1]}`},{minutes:'10–25',name:'Enigma mecánico',action:r[3]},{minutes:'25–40',name:'Desafío de producción',action:`La profesora interpreta al guardián. Modelo oral: ${r[4]}`},{minutes:'40–45',name:'Recompensa y bitácora',action:`Confirmación oral, ${r[5]} y ficha imprimible.`}]}));
