(function(t){function e(e){for(var n,u,c=e[0],i=e[1],s=e[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a=[];function u(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1326f0bb"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(t);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0456":function(t,e,r){},"30b4":function(t,e,r){"use strict";r("0456")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("router-view")],1)],1)},a=[],u={name:"App",data:function(){return{}}},c=u,i=r("2877"),s=r("6544"),l=r.n(s),f=r("7496"),p=r("f6c4"),v=Object(i["a"])(c,o,a,!1,null,null,null),d=v.exports;l()(v,{VApp:f["a"],VMain:p["a"]});r("d3b7"),r("3ca3"),r("ddb0");var m=r("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("div",{attrs:{id:"title"}},[t._v("ますお")])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("v-chip",{staticClass:"ma-2",attrs:{color:"red"}},[t._v("View")])],1),r("v-col",{attrs:{cols:"6"}},[r("math-field",{staticStyle:{"font-size":"32px"},attrs:{id:"formula","virtual-keyboard-mode":"manual"}},[t._v(" "+t._s(t.inputText)+" ")])],1)],1),r("v-row",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("textarea",{attrs:{id:"latex"}})])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("v-chip",{staticClass:"ma-2",attrs:{color:"red"}},[t._v("Text")])],1),r("v-col",{attrs:{cols:"6"}},[r("div",[t._v(" "+t._s(t.inputText)+" ")])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{color:"primary"},on:{click:t.copyText}},[t._v("Copy the text")])],1)],1)],1)},h=[],y={name:"Home",data:function(){return{inputText:"x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"}},mounted:function(){var t=document.querySelector("#formula"),e=document.querySelector("#latex");e.addEventListener("input",(function(){return t.setValue(e.value)})),t.addEventListener("input",this.updateLatex)},methods:{updateLatex:function(){var t=document.querySelector("#formula");document.querySelector("#latex").value=t.value,this.inputText=t.value},copyText:function(){navigator.clipboard.writeText(this.inputText)}}},w=y,x=(r("30b4"),r("8336")),g=r("cc20"),j=r("62ad"),_=r("0fd9"),T=Object(i["a"])(w,b,h,!1,null,"7c961bfa",null),O=T.exports;l()(T,{VBtn:x["a"],VChip:g["a"],VCol:j["a"],VRow:_["a"]}),n["a"].use(m["a"]);var S=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],P=new m["a"]({routes:S}),V=P,k=r("2f62");n["a"].use(k["a"]);var C=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=r("f309");n["a"].use(E["a"]);var q=new E["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:V,store:C,vuetify:q,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.d66dfc90.js.map