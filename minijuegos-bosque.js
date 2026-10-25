// Tres minijuegos autónomos. Montar con mountForestEnigma({missionId,container,speak,onComplete}).
// Los controles de clic son equivalentes accesibles al arrastre táctil/ratón.
const NUM=['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn','zwanzig'];
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n};
const btn=(text,click,cls='forest-btn')=>{const b=el('button',cls,text);b.type='button';b.addEventListener('click',click);return b};
const listen=(speak,text)=>btn('🔊 Escuchar',()=>speak(text),'forest-btn listen');
const report=(node,message)=>{node.textContent=message};
const shuffle=a=>a.map(x=>({x,r:Math.random()})).sort((a,b)=>a.r-b.r).map(z=>z.x);
export function mountForestEnigma({missionId,container,speak,onComplete}){
  container.replaceChildren();const root=el('section','forest-game');root.dataset.mission=missionId;
  const title=el('h3','forest-title',missionId===1?'🌳 El árbol mágico de manzanas':missionId===2?'🦉 El bosque que cuenta':'🎒 La mochila del explorador');
  const stage=el('div','forest-stage');const feedback=el('p','forest-feedback','Felix: ¡Escucha la pista y explora!');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
  const controls=el('div','forest-controls');root.append(title,stage,controls,feedback);container.append(root);
  let ended=false;function finish(){if(ended)return;ended=true;feedback.textContent='✨ Geschafft! Has superado el enigma.';controls.replaceChildren(btn('Continuar al desafío oral →',onComplete,'forest-btn next'));}
  if(missionId===1)apples();else if(missionId===2)creatures();else if(missionId===3)backpack();
  else throw Error('Minijuego disponible solo para misiones 1–3');
  function apples(){
    const rounds=[{color:'rot',adjective:'rote',count:3,es:'rojas'},{color:'grün',adjective:'grüne',count:2,es:'verdes'},{color:'rot',adjective:'rote',count:4,es:'rojas'}];
    let round=0,collected=0,used=new Set();
    function paint(){const q=rounds[round];used=new Set();collected=0;stage.replaceChildren();controls.replaceChildren();
      const tree=el('div','apple-tree');tree.append(el('div','tree-crown','🌳'));
      const instruction=el('div','forest-speech',`${NUM[q.count]} ${q.adjective} Äpfel, bitte!`);
      const applesZone=el('div','apple-orchard');const basket=el('div','forest-drop','🧺');basket.setAttribute('aria-label','Cesta de Felix: suelta aquí las manzanas');basket.tabIndex=0;
      const counter=el('strong','forest-counter',`0 / ${q.count}`);
      const colors=shuffle([...Array(6).fill('rot'),...Array(4).fill('grün')]);
      colors.forEach((color,i)=>{const a=btn(color==='rot'?'🍎':'🍏',()=>pick(i),'apple');a.draggable=true;a.dataset.color=color;a.setAttribute('aria-label',`Manzana ${color==='rot'?'roja':'verde'} ${i+1}`);a.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',String(i));e.dataTransfer.effectAllowed='move'});applesZone.append(a)});
      basket.addEventListener('dragover',e=>e.preventDefault());basket.addEventListener('drop',e=>{e.preventDefault();const i=Number(e.dataTransfer.getData('text/plain'));if(Number.isInteger(i))pick(i)});
      stage.append(instruction,tree,applesZone,basket,counter);controls.append(listen(speak,`${NUM[q.count]} ${q.adjective} Äpfel, bitte!`));
      feedback.textContent=`Felix: coloca ${q.count} manzanas ${q.es} en la cesta. Puedes arrastrar o pulsar.`;
      function pick(i){if(ended||used.has(i))return;const a=applesZone.children[i];if(!a)return;
        if(a.dataset.color!==q.color){a.classList.remove('bounce');void a.offsetWidth;a.classList.add('bounce');feedback.textContent=`Felix: esa es ${a.dataset.color==='rot'?'rot':'grün'}. Necesitamos ${q.color}. ¡Observa el color!`;speak(q.color);return;}
        if(collected>=q.count){a.classList.add('bounce');feedback.textContent=`Felix: cuenta las manzanas de la cesta. Ya tenemos ${NUM[q.count]}.`;speak(NUM[q.count]);return;}
        used.add(i);a.disabled=true;a.classList.add('collected');collected++;counter.textContent=`${collected} / ${q.count}`;basket.textContent='🧺 '+Array(collected).fill(q.color==='rot'?'🍎':'🍏').join('');speak(NUM[collected]);
        if(collected===q.count){feedback.textContent='✨ Richtig! El árbol abre una nueva rama.';controls.append(btn(round===rounds.length-1?'Abrir el camino ✨':'Siguiente rama →',()=>{round++;if(round===rounds.length)finish();else paint()},'forest-btn next'));}
      }
    }paint();
  }
  function creatures(){
    const rounds=[{animal:'Eulen',icon:'🦉',count:4},{animal:'Füchse',icon:'🦊',count:7},{animal:'Hasen',icon:'🐇',count:12},{animal:'Vögel',icon:'🐦',count:18}];let round=0;
    function paint(){const q=rounds[round];stage.replaceChildren();controls.replaceChildren();
      const speech=el('div','forest-speech',`Wie viele ${q.animal} siehst du?`);const meadow=el('div','creature-meadow');
      for(let i=0;i<q.count;i++){const a=el('span','creature',q.icon);a.style.setProperty('--delay',`${(i%6)*.13}s`);a.setAttribute('aria-hidden','true');meadow.append(a)}
      const panel=el('div','count-panel');const input=el('input','count-input');input.type='number';input.min='1';input.max='20';input.inputMode='numeric';input.placeholder='1–20';input.setAttribute('aria-label','Escribe cuántos animales ves');
      const submit=btn('Comprobar',()=>check(Number(input.value)));const nums=el('div','number-pad');
      for(let n=1;n<=20;n++)nums.append(btn(String(n),()=>check(n),'number-key'));
      panel.append(input,submit,nums);stage.append(speech,meadow,panel);controls.append(listen(speak,`Wie viele ${q.animal} siehst du?`));input.addEventListener('keydown',e=>{if(e.key==='Enter')check(Number(input.value))});
      feedback.textContent='Cuenta las criaturas que aparecen. Puedes escribir o tocar un número.';
      function check(n){if(ended)return;if(n!==q.count){meadow.classList.remove('count-hint');void meadow.offsetWidth;meadow.classList.add('count-hint');feedback.textContent=`Felix: vuelve a contar. Señala cada criatura con el dedo: eins, zwei, drei…`;speak('Zähl noch einmal!');return;}
        feedback.textContent=`✨ Richtig! ${NUM[q.count]} ${q.animal}.`;speak(`${NUM[q.count]} ${q.animal}`);panel.querySelectorAll('button,input').forEach(b=>b.disabled=true);controls.append(btn(round===rounds.length-1?'Abrir el mapa ✨':'Buscar otras criaturas →',()=>{round++;if(round===rounds.length)finish();else paint()},'forest-btn next'));
      }
    }paint();
  }
  function backpack(){
    const things=[{id:'buch',icon:'📘',de:'ein Buch',es:'libro'},{id:'stift',icon:'✏️',de:'einen Stift',es:'lápiz'},{id:'heft',icon:'📓',de:'ein Heft',es:'cuaderno'},{id:'lineal',icon:'📏',de:'ein Lineal',es:'regla'},{id:'radiergummi',icon:'🧽',de:'einen Radiergummi',es:'goma'}];
    const order=['buch','stift','heft','lineal','radiergummi'];let step=0;
    const instruction=el('div','forest-speech');const table=el('div','school-table');const bag=el('div','school-bag','🎒');bag.setAttribute('aria-label','Mochila: arrastra aquí un objeto');bag.tabIndex=0;const bagContents=el('div','bag-contents');stage.append(instruction,table,bag,bagContents);
    const nodes=new Map();for(const thing of shuffle(things)){const b=btn(thing.icon,()=>choose(thing.id),'school-object');b.draggable=true;b.setAttribute('aria-label',thing.es);b.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',thing.id)});table.append(b);nodes.set(thing.id,b)}
    bag.addEventListener('dragover',e=>e.preventDefault());bag.addEventListener('drop',e=>{e.preventDefault();choose(e.dataTransfer.getData('text/plain'))});
    let currentLine='';const audio=btn('🔊 Escuchar',()=>speak(currentLine),'forest-btn listen');controls.append(audio);
    function prompt(){const item=things.find(x=>x.id===order[step]);const line=`Ich brauche ${item.de}, bitte.`;instruction.textContent=line;currentLine=line;feedback.textContent='Felix: escucha lo que necesito y guárdalo en mi mochila.';}
    function choose(id){if(ended)return;const target=order[step];const b=nodes.get(id);if(!b||b.disabled)return;
      if(id!==target){b.classList.remove('bounce');void b.offsetWidth;b.classList.add('bounce');feedback.textContent='Felix: escucha otra vez. Mira el objeto que te he pedido.';const item=things.find(x=>x.id===target);speak(item.de);nodes.get(target).classList.add('hint-glow');return;}
      b.disabled=true;b.classList.add('collected');const item=things.find(x=>x.id===id);bagContents.append(el('span','packed',item.icon));speak('Danke!');step++;
      if(step===order.length){feedback.textContent='✨ Super! La mochila está lista.';controls.append(btn('Cruzar el bosque ✨',finish,'forest-btn next'));}
      else prompt();
    }
    prompt();
  }
  return {destroy(){root.remove()}};
}
