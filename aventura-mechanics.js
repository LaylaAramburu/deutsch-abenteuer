/* Reusable pure mechanics: branching routes, sentence assembly, dialogue consequences. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AventuraMechanics=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){'use strict';
const routes={river:{de:'Der Fluss ist zu tief. Geh zurück!',es:'El río es demasiado profundo. ¡Regresa!',next:'bridge',success:false},bridge:{de:'Du findest die Brücke und hörst die Eule.',es:'Encuentras el puente y escuchas al búho.',next:'owl',success:true},forest:{de:'Im Wald findest du eine Spur. Suche die Brücke!',es:'En el bosque encuentras una huella. Busca el puente.',next:'bridge',success:false}};
function route(key){return routes[key]||null}
function evaluateDialogue(intent){const choices={ask:{de:'Die Eule erklärt dir den Weg. Danke!',es:'El búho te explica el camino. ¡Gracias!',reward:'Hinweis der Eule',success:true},greet:{de:'Die Eule grüßt dich. Frag sie nach dem Weg!',es:'El búho te saluda. ¡Pregúntale por el camino!',reward:null,success:false},leave:{de:'Die Eule wartet. Du kannst zurückkommen.',es:'El búho espera. Puedes regresar.',reward:null,success:false}};return choices[intent]||null}
function sentence(tokens,expected){return Array.isArray(tokens)&&Array.isArray(expected)&&tokens.join(' ')===expected.join(' ')}
return {route,evaluateDialogue,sentence};});
