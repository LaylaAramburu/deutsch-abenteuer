export const WORLDS=[
 {id:'bosque',name:'El Bosque de las Acciones',icon:'🌲',start:1,end:5},
 {id:'castillo',name:'El Castillo de las Rutinas',icon:'🏰',start:6,end:10},
 {id:'laboratorio',name:'Laboratorio de Moda y Movimiento',icon:'🧪',start:11,end:15},
 {id:'tiempo',name:'Portal del Tiempo y los Hobbies',icon:'⏳',start:16,end:20},
 {id:'regreso',name:'La Gran Expedición',icon:'🗺️',start:21,end:24}
];
const KEY='deutsch-abenteuer-v3';
const clean=()=>({version:3,completed:[],inventory:[],medals:[]});
const ids=a=>Array.isArray(a)?[...new Set(a.filter(n=>Number.isInteger(n)&&n>=1&&n<=24))]:[];
export class AventuraEngine extends EventTarget {
 constructor(){super();this.state=this.load();this.teacherMode=false;this.speech=window.speechSynthesis||null;this.voices=[];this.refreshVoices();this.speech?.addEventListener?.('voiceschanged',()=>this.refreshVoices());}
 load(){try{const v=JSON.parse(localStorage.getItem(KEY));if(!v)return clean();return {...clean(),...v,version:3,completed:ids(v.completed),inventory:Array.isArray(v.inventory)?v.inventory.filter(x=>typeof x==='string'):[],medals:Array.isArray(v.medals)?v.medals.filter(x=>typeof x==='string'):[]};}catch{return clean();}}
 save(){try{localStorage.setItem(KEY,JSON.stringify(this.state));}catch(e){console.warn('Progreso no guardado',e);}this.dispatchEvent(new Event('change'));}
 refreshVoices(){this.voices=this.speech?.getVoices?.()||[];}
 speak(text,rate=.8){if(!this.speech||!window.SpeechSynthesisUtterance)return false;this.speech.cancel();const u=new SpeechSynthesisUtterance(String(text));u.lang='de-DE';u.rate=rate;const voice=this.voices.find(v=>v.lang.toLowerCase()==='de-de'&&v.localService)||this.voices.find(v=>v.lang.toLowerCase()==='de-de')||this.voices.find(v=>v.lang.toLowerCase().startsWith('de'));if(voice)u.voice=voice;this.speech.speak(u);return true;}
 stop(){this.speech?.cancel();}
 unlocked(id){return id===1||this.teacherMode||this.state.completed.includes(id-1);}
 completed(id){return this.state.completed.includes(id);}
 complete(id,item){if(!Number.isInteger(id)||id<1||id>24||!this.unlocked(id))return false;if(!this.state.completed.includes(id))this.state.completed.push(id);if(item&&!this.state.inventory.includes(item))this.state.inventory.push(item);const medal=`Medalla ${id}`;if(!this.state.medals.includes(medal))this.state.medals.push(medal);this.save();return true;}
 toggleTeacher(){this.teacherMode=!this.teacherMode;this.dispatchEvent(new Event('change'));return this.teacherMode;}
 reset(){this.state=clean();this.save();}
}
export const engine=new AventuraEngine();
