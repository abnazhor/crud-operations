(function(e){function t(t){for(var n,c,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("ca80"),r("88cf"),r("3ef7"),r("1204");var n=r("132e"),a={class:"h-screen flex items-center justify-center bg-gray-100"};function o(e,t,r,o,c,i){var l=Object(n["h"])("CrudDisplay");return Object(n["f"])(),Object(n["c"])("div",a,[Object(n["e"])(l,{data:c.data,headers:c.headers,onDeletion:i.deleteRow,onSubmit:i.newRow,onModify:i.updateRow},null,8,["data","headers","onDeletion","onSubmit","onModify"])])}var c=r("c44a"),i=(r("22d3"),r("c981"),r("33c5"),r("bf7a"),{class:"h-4/6 bg-white shadow-sm rounded-md px-5 pt-5 w-8/12"}),l={id:"toolbar",class:"p-2 lg:flex-row flex mb-6 flex-col"},u=Object(n["e"])("i",{class:"ri-add-line text-2xl mr-1"},null,-1),s=Object(n["d"])(" Agregar "),d=Object(n["e"])("i",{class:"ri-delete-bin-line ri-add-line text-xl mr-1"},null,-1),p=Object(n["d"])(" Eliminar "),f=Object(n["e"])("i",{class:"ri-arrow-left-right-line ri-add-line text-xl mr-1"},null,-1),h=Object(n["d"])(" Modificar "),m={id:"display-table",class:"overflow-x-hidden lg:h-5/6 scrollbar-thin px-3 h-4/6"},b={class:"w-full h-full"},v={class:"sticky top-0"},y=Object(n["e"])("th",{class:"w-12 bg-blue-100 border"},null,-1),j={class:"w-12 border"},g={class:"p-2 border"},w={class:"p-2 border"},O={class:"p-2 border"},x={class:"p-2 border"},C={class:"p-2 border"};function k(e,t,r,a,o,c){return Object(n["f"])(),Object(n["c"])("div",i,[Object(n["e"])("div",l,[Object(n["e"])("button",{class:"border py-1 px-5 rounded-md mx-1 flex items-center justify-center font-light sm:mt-1",onClick:t[1]||(t[1]=function(){return c.showAddDialog&&c.showAddDialog.apply(c,arguments)})},[u,s]),Object(n["e"])("button",{class:"border py-1 px-5 rounded-md mx-1 flex items-center justify-center font-light sm:mt-1",onClick:t[2]||(t[2]=function(){return c.deleteRows&&c.deleteRows.apply(c,arguments)})},[d,p]),Object(n["e"])("button",{class:"border py-1 px-5 rounded-md mx-1 flex items-center justify-center font-light sm:mt-1",onClick:t[3]||(t[3]=function(){return c.showEditDialog&&c.showEditDialog.apply(c,arguments)})},[f,h])]),Object(n["e"])("div",m,[Object(n["e"])("table",b,[Object(n["e"])("tr",v,[y,(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(r.headers,(function(e){return Object(n["f"])(),Object(n["c"])("th",{key:e[0],class:"p-2 bg-blue-100 border"},Object(n["i"])(e),1)})),128))]),(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(r.data,(function(e){return Object(n["f"])(),Object(n["c"])("tr",{key:e.uuid},[Object(n["e"])("td",j,[Object(n["e"])("input",{type:"radio",name:"row",class:"h-full m-auto block w-full",value:e._id},null,8,["value"])]),Object(n["e"])("td",g,Object(n["i"])(e.date),1),Object(n["e"])("td",w,Object(n["i"])(e.hour),1),Object(n["e"])("td",O,Object(n["i"])(e.consumption),1),Object(n["e"])("td",x,Object(n["i"])(e.price),1),Object(n["e"])("td",C,Object(n["i"])(e.costPerHour),1)])})),128))])])])}r("872f"),r("f688"),r("a901"),r("0a0d"),r("4f51"),r("7e13");var D={name:"CrudDisplay",props:{data:Array,headers:Array},methods:{deleteRows:function(){var e=document.querySelectorAll("input[type='radio']:checked"),t=Array.from(e).map((function(e){return e.value}))[0];t?this.$emit("deletion",{deletionId:t}):alert("Tienes que seleccionar una fila para poder eliminarla.")},createDialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"Agregar una nueva entrada";console.log(e);var c=function(e){var t=e.placeholder,r=e.name,n=void 0===r?"":r,a=e.type,o=e.value,c=void 0===o?"":o,i=e.classes,l=void 0===i?"":i,u=e.id,s=void 0===u?"":u,d=e.step,p=void 0===d?"":d,f=document.createElement("input");return f.classList="border p-3 my-2 rounded-sm "+l,f.placeholder=t,f.name=n,f.type=a,f.value=c,f.id=s,f.step=p,f},i=document.createElement("form");return i.classList="bg-white shadow-md w-3/12 rounded-md p-1 py-5 flex flex-col items-center justify-center",i.appendChild(c({placeholder:"Fecha",name:"date",classes:"w-5/6",type:"date",value:e})),i.appendChild(c({placeholder:"Hora",name:"hour",classes:"w-5/6",type:"number",step:".01",value:parseFloat(t)})),i.appendChild(c({placeholder:"Consumo",name:"consumption",classes:"w-5/6",type:"number",step:".01",value:parseFloat(r)})),i.appendChild(c({placeholder:"Precio (€)",name:"price",classes:"w-5/6",type:"number",step:".00000000001",value:parseFloat(n)})),i.appendChild(c({placeholder:"Coste por hora (€)",name:"costPerHour",classes:"w-5/6",type:"number",step:".0000000000000001",value:parseFloat(a)})),i.appendChild(c({value:o,classes:"w-5/6 bg-green-200 text-center cursor-pointer",id:"",type:"submit"})),i},showAddDialog:function(){var e=document.createElement("div"),t=this.createDialog({}),r=this;e.style.backgroundColor="#00000063",e.classList="dialog-container fixed h-screen w-full top-0 left-0 flex items-center justify-center",t.addEventListener("submit",(function(t){t.preventDefault();var n=t.target,a={date:n["date"].value,hour:n["hour"].value,consumption:n["consumption"].value,price:n["price"].value,costPerHour:n["costPerHour"].value};r.$emit("submit",a),document.body.removeChild(e)})),e.appendChild(t),document.body.appendChild(e)},showEditDialog:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=document.createElement("div"),n=e,a=document.querySelectorAll("input[type='radio']:checked"),o=Array.from(a).map((function(e){return e.value}))[0],!o){t.next=16;break}return t.next=7,fetch("/api/consumption/".concat(o)).then((function(e){return e.json()}));case 7:c=t.sent,i=e.createDialog(c.date.replace(/\s/g,""),c.hour,c.consumption,c.price,c.costPerHour,"Modificar entrada"),r.style.backgroundColor="#00000063",r.classList="dialog-container fixed h-screen w-full top-0 left-0 flex items-center justify-center",i.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;console.log(t);var a={consumptionId:o,date:t["date"].value,hour:t["hour"].value,consumption:t["consumption"].value,price:t["price"].value,costPerHour:t["costPerHour"].value};n.$emit("modify",a),document.body.removeChild(r)})),r.appendChild(i),document.body.appendChild(r),t.next=17;break;case 16:alert("Tienes que seleccionar una fila para poder modificarla.");case 17:case"end":return t.stop()}}),t)})))()}}};D.render=k;var R=D,P={name:"App",components:{CrudDisplay:R},data:function(){return{data:[],headers:[]}},created:function(){this.queryData()},methods:{queryData:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/consumptions").then((function(e){return e.json()}));case 2:t=e.sent,this.data=t.flat().filter((function(e){return!!e.date})),this.headers=["Fecha","Hora","Consumo (Wh)","Precio (€/kWh)","Coste por hora (€)"];case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteRow:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://localhost:3000/api/consumption/".concat(e.deletionId),{method:"DELETE"}).then((function(e){return e.json()}));case 2:n=r.sent,n.deleted&&(t.data=t.data.filter((function(t){return t._id!==e.deletionId})));case 4:case"end":return r.stop()}}),r)})))()},newRow:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://localhost:3000/api/consumption",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()}));case 2:n=r.sent,n.inserted&&t.queryData();case 4:case"end":return r.stop()}}),r)})))()},updateRow:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://localhost:3000/api/consumption",{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()}));case 2:n=r.sent,n.updated&&t.queryData();case 4:case"end":return r.stop()}}),r)})))()}}};P.render=o;var E=P;r("a766");Object(n["b"])(E).mount("#app")},a766:function(e,t,r){}});
//# sourceMappingURL=app.3481a548.js.map