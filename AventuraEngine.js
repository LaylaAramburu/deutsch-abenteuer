export const WORLDS=[
 {id:'bosque',name:'El Bosque de las Acciones',icon:'🌲',start:1,end:5},
 {id:'castillo',name:'El Castillo de las Rutinas',icon:'🏰',start:6,end:10},
 {id:'laboratorio',name:'Laboratorio de Moda y Movimiento',icon:'🧪',start:11,end:15},
 {id:'tiempo',name:'Portal del Tiempo y los Hobbies',icon:'⏳',start:16,end:20},
 {id:'regreso',name:'La Gran Expedición',icon:'🗺️',start:21,end:24}
];
const KEY='deutsch-abenteuer-v3';
const clean=()=>({version:4,completed:[],inventory:[],medals:[],activities:{}});
const ids=a=>Array.isArray(a)?[...new Set(a.filter(n=>Number.isInteger(n)&&n>=1&&n<=24))]:[];
export class AventuraEngine extends EventTarget {
 constructor(){super();this.state=this.load();this.teacherMode=false;this.speech=window.speechSynthesis||null;this.voices=[];this.refreshVoices();this.speech?.addEventListener?.('voiceschanged',()=>this.refreshVoices());}
 load(){try{const v=JSON.parse(localStorage.getItem(KEY));if(!v)return clean();return {...clean(),...v,version:4,activities:v.activities&&typeof v.activities==='object'?v.activities:{},completed:ids(v.completed),inventory:Array.isArray(v.inventory)?v.inventory.filter(x=>typeof x==='string'):[],medals:Array.isArray(v.medals)?v.medals.filter(x=>typeof x==='string'):[]};}catch{return clean();}}
 save(){try{localStorage.setItem(KEY,JSON.stringify(this.state));}catch(e){console.warn('Progreso no guardado',e);}this.dispatchEvent(new Event('change'));}
 refreshVoices(){this.voices=this.speech?.getVoices?.()||[];}
 speak(text,rate=.8){if(!this.speech||!window.SpeechSynthesisUtterance)return false;this.speech.cancel();const u=new SpeechSynthesisUtterance(String(text));u.lang='de-DE';u.rate=rate;const voice=this.voices.find(v=>v.lang.toLowerCase()==='de-de'&&v.localService)||this.voices.find(v=>v.lang.toLowerCase()==='de-de')||this.voices.find(v=>v.lang.toLowerCase().startsWith('de'));if(voice)u.voice=voice;this.speech.speak(u);return true;}
 stop(){this.speech?.cancel();}
 unlocked(id){return id===1||this.teacherMode||this.state.completed.includes(id-1);}
 completed(id){return this.state.completed.includes(id);}
 complete(id,item){if(!Number.isInteger(id)||id<1||id>24||!this.unlocked(id))return false;if(!this.state.completed.includes(id))this.state.completed.push(id);if(item&&!this.state.inventory.includes(item))this.state.inventory.push(item);const medal=`Medalla ${id}`;if(!this.state.medals.includes(medal))this.state.medals.push(medal);this.save();return true;}
 getActivity(id){const a=this.state.activities?.[id]||{};return {phase:Math.max(0,Math.min(3,Number(a.phase)||0)),found:Array.isArray(a.found)?a.found:[],validated:Array.isArray(a.validated)?a.validated:[],round:Math.max(0,Math.min(5,Number(a.round)||0)),oralOK:Math.max(0,Math.min(3,Number(a.oralOK)||0)),contextSolved:!!a.contextSolved};}
 saveActivity(id,activity){if(!Number.isInteger(id)||id<1||id>24)return;this.state.activities??={};this.state.activities[id]={...activity,updatedAt:Date.now()};this.save();}
 toggleTeacher(){this.teacherMode=!this.teacherMode;this.dispatchEvent(new Event('change'));return this.teacherMode;}
 reset(){this.state=clean();this.save();}
}
export const engine=new AventuraEngine();

/* BLOQUE 1 — AventuraEngine.js
   Persistencia por misión y navegación docente.
   No reemplaza el guardado de inventario existente.
*/

const MISSION_PROGRESS_KEY = "deutsch-aventura-steps-v1";

const SECTION_NAMES = [
  "activacion",
  "sintaxis",
  "guardian"
];

export function loadMissionProgress(missionId) {
  const id = String(missionId);

  const empty = {
    missionId: id,
    sections: {
      activacion: { completed: false, answers: {} },
      sintaxis: { completed: false, answers: {} },
      guardian: { completed: false, answers: {} }
    },
    currentSection: "activacion"
  };

  try {
    const store = JSON.parse(
      localStorage.getItem(MISSION_PROGRESS_KEY) || "{}"
    );

    const saved = store[id] || {};

    for (const section of SECTION_NAMES) {
      empty.sections[section] = {
        ...empty.sections[section],
        ...(saved.sections?.[section] || {})
      };
    }

    empty.currentSection =
      saved.currentSection || "activacion";

    return empty;
  } catch (error) {
    console.warn("No se pudo leer el progreso:", error);
    return empty;
  }
}

export function saveMissionProgress(missionId, stepData) {
  const id = String(missionId);
  const section = stepData.section;

  if (!SECTION_NAMES.includes(section)) {
    throw new Error("Sección no válida: " + section);
  }

  const current = loadMissionProgress(id);
  const previous = current.sections[section];

  current.sections[section] = {
    ...previous,
    completed: stepData.completed === undefined
      ? previous.completed
      : Boolean(stepData.completed),
    answers: {
      ...previous.answers,
      ...(stepData.answers || {})
    },
    updatedAt: new Date().toISOString()
  };

  current.currentSection = section;

  let store = {};

  try {
    store = JSON.parse(
      localStorage.getItem(MISSION_PROGRESS_KEY) || "{}"
    );
  } catch {
    store = {};
  }

  store[id] = current;

  try {
    localStorage.setItem(
      MISSION_PROGRESS_KEY,
      JSON.stringify(store)
    );
  } catch (error) {
    console.warn("No se pudo guardar el progreso:", error);
  }

  window.dispatchEvent(new CustomEvent(
    "aventura:progress",
    { detail: { missionId: id, progress: current } }
  ));

  return current;
}

/* Vincular a las pestañas actuales.

   HTML esperado:
   <button data-mission-tab="activacion">Activación</button>
   <button data-mission-tab="sintaxis">Sintaxis</button>
   <button data-mission-tab="guardian">Guardián</button>

   El modo profesora se recibe desde el motor actual.
*/

export function restoreMissionTabs(
  missionId,
  { teacherMode = false, onNavigate } = {}
) {
  const progress = loadMissionProgress(missionId);
  const tabs = document.querySelectorAll(
    "[data-mission-tab]"
  );

  const isAccessible = section => {
    if (teacherMode) return true;

    const index = SECTION_NAMES.indexOf(section);

    if (index <= 0) return true;

    return SECTION_NAMES
      .slice(0, index)
      .every(name => progress.sections[name].completed);
  };

  tabs.forEach(tab => {
    const section = tab.dataset.missionTab;
    const record = progress.sections[section];

    if (!record) return;

    tab.classList.toggle(
      "is-complete",
      record.completed
    );

    tab.classList.toggle(
      "is-locked",
      !isAccessible(section)
    );

    tab.disabled = !isAccessible(section);
    tab.setAttribute(
      "aria-disabled",
      String(!isAccessible(section))
    );

    const original = tab.dataset.label ||
      tab.textContent.replace(/^✓\s*/, "");

    tab.dataset.label = original;
    tab.textContent = record.completed
      ? "✓ " + original
      : original;

    tab.onclick = () => {
      if (!isAccessible(section)) return;

      saveMissionProgress(missionId, {
        section,
        answers: {}
      });

      onNavigate?.(section);
    };
  });

  return progress;
}

/* EJEMPLOS DE INTEGRACIÓN EN main.js:

saveMissionProgress(1, {
  section: "activacion",
  completed: true,
  answers: {
    dialogo: ["ich", "heiße", "Felix"]
  }
});

saveMissionProgress(1, {
  section: "sintaxis",
  completed: true,
  answers: {
    ronda1: "Ich habe einen Hund.",
    ronda2: "Du hast einen Hund."
  }
});

saveMissionProgress(1, {
  section: "guardian",
  completed: true,
  answers: {
    oralValidatedByTeacher: true
  }
});

// Después de renderizar las pestañas:
restoreMissionTabs(1, {
  teacherMode: engineTeacherMode,
  onNavigate: section => {
    // Sustituir por tu función actual
    // de renderizado de fases.
    renderMissionSection(section);
  }
});
*/
