export const WORLDS=[
 {id:'bosque',name:'El Bosque',range:[1,5],icon:'🌲',level:'A1.1'},
 {id:'castillo',name:'El Castillo',range:[6,10],icon:'🏰',level:'A1.1'},
 {id:'laboratorio',name:'El Laboratorio',range:[11,15],icon:'🧪',level:'A1.1–A1.2'},
 {id:'tiempo',name:'El Tiempo',range:[16,20],icon:'⏳',level:'A1.2'},
 {id:'regreso',name:'El Regreso',range:[21,24],icon:'🗺️',level:'A1.2'}
];
const KEY='deutsch-abenteuer-v3';
const clean=()=>({version:3,completed:[],inventory:[],medals:[],teacherMode:false});
const validIds=a=>Array.isArray(a)?[...new Set(a.filter(n=>Number.isInteger(n)&&n>=1&&n<=24))]:[];
export class AventuraEngine extends EventTarget{
 constructor(){super();this.state=this.load();this.speech=window.speechSynthesis||null;this.voices=[];this.refreshVoices();if(this.speech)this.speech.addEventListener?.('voiceschanged',()=>this.refreshVoices());}
 load(){try{const x=JSON.parse(localStorage.getItem(KEY));if(!x||x.version!==3)return clean();return {...clean(),...x,completed:validIds(x.completed),inventory:Array.isArray(x.inventory)?x.inventory.filter(v=>typeof v==='string'):[],medals:Array.isArray(x.medals)?x.medals.filter(v=>typeof v==='string'):[],teacherMode:false};}catch{return clean();}}
 save(){try{localStorage.setItem(KEY,JSON.stringify({...this.state,teacherMode:false}));}catch(e){console.warn('No se pudo guardar el progreso',e);}this.dispatchEvent(new Event('change'));}
 refreshVoices(){this.voices=this.speech?.getVoices?.()||[];}
 speak(text,{rate=.83}={}){if(!this.speech)return false;this.speech.cancel();const u=new SpeechSynthesisUtterance(String(text));u.lang='de-DE';u.rate=rate;const de=this.voices.find(v=>v.lang.toLowerCase()==='de-de')||this.voices.find(v=>v.lang.toLowerCase().startsWith('de'));if(de)u.voice=de;this.speech.speak(u);return true;}
 stopSpeech(){this.speech?.cancel();}
 isUnlocked(id){return id===1||this.state.teacherMode||this.state.completed.includes(id-1);}
 isCompleted(id){return this.state.completed.includes(id);}
 complete(id,{item,medal}={}){if(!Number.isInteger(id)||id<1||id>24)throw Error('Misión inválida');if(!this.isUnlocked(id))throw Error('Misión bloqueada');if(!this.state.completed.includes(id))this.state.completed.push(id);if(item&&!this.state.inventory.includes(item))this.state.inventory.push(item);if(medal&&!this.state.medals.includes(medal))this.state.medals.push(medal);this.save();}
 toggleTeacher(){this.state.teacherMode=!this.state.teacherMode;this.dispatchEvent(new Event('change'));return this.state.teacherMode;}
 reset(){this.state=clean();this.save();}
 getWorld(id){return WORLDS.find(w=>id>=w.range[0]&&id<=w.range[1]);}
}
export const engine=new AventuraEngine();
