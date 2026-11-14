/* Deutsch Abenteuer! V9 — shared, testable state rules (browser + Node) */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AventuraCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){'use strict';
const newState=()=>({step:0,done:[],inventory:[],draft:[],attempts:{},effects:{}});
function cleanState(raw,total){let s=newState();if(!raw||typeof raw!=='object')return s;s.step=Number.isInteger(raw.step)?Math.max(0,Math.min(total-1,raw.step)):0;s.done=Array.isArray(raw.done)?[...new Set(raw.done.filter(x=>Number.isInteger(x)&&x>=0&&x<total))]:[];s.inventory=Array.isArray(raw.inventory)?[...new Set(raw.inventory.filter(x=>typeof x==='string'&&x.length<80))]:[];s.effects=raw.effects&&typeof raw.effects==='object'&&!Array.isArray(raw.effects)?Object.fromEntries(Object.entries(raw.effects).filter(([k,v])=>/^[a-z0-9_]{1,40}$/.test(k)&&typeof v==='boolean')):{};return s;}
function finish(s,idx,reward){if(!s.done.includes(idx))s.done.push(idx);if(reward&&!s.inventory.includes(reward))s.inventory.push(reward);return s;}
function nextStep(i,total){return Math.max(0,Math.min(total-1,Number.isFinite(i)?i:0));}
function correct(task,answer){if(task.kind==='choice')return answer===task.right;if(task.kind==='order')return Array.isArray(answer)&&answer.join('|')===task.answer.join('|');return null;}
function shouldSave(mode,event){return mode==='auto'&&(event==='progress'||event==='navigation');}
return {newState,cleanState,finish,nextStep,correct,shouldSave};
});
