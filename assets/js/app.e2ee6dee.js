(function(e){function t(t){for(var r,s,c=t[0],l=t[1],i=t[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);b&&b(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return c.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"692f23b8"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var i=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}n[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/proffy-nlw2-web-vue/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"080e":function(e,t,a){e.exports=a.p+"assets/img/warning.6dfaa2f9.svg"},"0ed4":function(e,t,a){},"18be":function(e,t,a){},"202d":function(e,t,a){e.exports=a.p+"assets/img/purple-heart.bfdb3ebe.svg"},2391:function(e,t,a){},"263d":function(e,t,a){e.exports=a.p+"assets/img/landing.211f2bb0.svg"},"2ef6":function(e,t,a){},3449:function(e,t,a){"use strict";var r=a("2391"),n=a.n(r);n.a},3614:function(e,t,a){},"53ca":function(e,t,a){"use strict";var r=a("2ef6"),n=a.n(r);n.a},"7e55":function(e,t,a){},"88c4":function(e,t,a){"use strict";var r=a("ff2d"),n=a.n(r);n.a},"90ca":function(e,t,a){e.exports=a.p+"assets/img/study.e7a7e1b4.svg"},"9e9f":function(e,t,a){"use strict";var r=a("b9b1"),n=a.n(r);n.a},af81:function(e,t,a){e.exports=a.p+"assets/img/back.dc8c47fa.svg"},b9b1:function(e,t,a){},bdf8:function(e,t,a){e.exports=a.p+"assets/img/whatsapp.45c6e6ec.svg"},cbf6:function(e,t,a){"use strict";var r=a("18be"),n=a.n(r);n.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s=(a("3449"),a("2877")),c={},l=Object(s["a"])(c,n,o,!1,null,null,null),i=l.exports,u=(a("d3b7"),a("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page-landing"}},[r("div",{staticClass:"container",attrs:{id:"page-landing-content"}},[e._m(0),r("img",{staticClass:"hero-image",attrs:{src:a("263d"),alt:"landingImg"}}),r("div",{staticClass:"buttons-container"},[r("router-link",{staticClass:"study",attrs:{to:{name:"Study"}}},[r("img",{attrs:{src:a("90ca"),alt:"Estudar"}}),e._v(" Estudar ")]),r("router-link",{staticClass:"give-classes",attrs:{to:{name:"GiveClasses"}}},[r("img",{attrs:{src:a("f075"),alt:"Dar Aulas"}}),e._v(" Dar Aulas ")])],1),r("span",{staticClass:"total-connections"},[e._v(" Total de "+e._s(e.totalConnections)+" conexões ja realizadas "),r("img",{attrs:{src:a("202d"),alt:"heart"}})])])])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-container"},[r("img",{attrs:{src:a("e347"),alt:"proffy"}}),r("h2",[e._v("Sua plataforma de estudos online.")])])}],f=a("d4ec"),v=a("bee2"),d=a("262e"),m=a("2caf"),h=a("9ab4"),g=a("60a3"),j=a("bc3a"),O=a.n(j),_=O.a.create({baseURL:"http://localhost:3333"}),y=_,x=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){var e;return Object(f["a"])(this,a),e=t.apply(this,arguments),e.totalConnections=0,e}return Object(v["a"])(a,[{key:"created",value:function(){var e=this;y.get("/connections").then((function(t){e.totalConnections=t.data.total}))}}]),a}(g["c"]);x=Object(h["a"])([g["a"]],x);var w=x,C=w,k=(a("cbf6"),Object(s["a"])(C,b,p,!1,null,null,null)),S=k.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"page-teacher-list"}},[a("PageHeader",{attrs:{title:"Estes são os proffys disponíveis."}},[a("form",{attrs:{id:"search-teachers"}},[a("Select",{attrs:{name:"subject",label:"Matéria",options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ciẽncias",label:"Ciẽncias"},{value:"Física",label:"Física"},{value:"Geografia",label:"Geografia"}]}}),a("Select",{attrs:{name:"week_day",label:"Dia da Semana",options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Terça-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"Sábado"}]}}),a("Input",{attrs:{name:"week_day",label:"Dia da Semana"}}),a("Input",{attrs:{type:"time",name:"time",label:"Hora"}})],1)]),a("main",[a("TeacherListItem"),a("TeacherListItem"),a("TeacherListItem")],1)],1)},I=[],F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"page-header"},[r("div",{staticClass:"top-bar-container"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:a("af81"),alt:"Voltar"}})]),r("img",{attrs:{src:a("e347"),alt:"proffy"}})],1),r("div",{staticClass:"header-content"},[r("strong",[e._v(e._s(e.title))]),e.description?r("p",[e._v(e._s(e.description))]):e._e(),e._t("default")],2)])},E=[],P=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);Object(h["a"])([Object(g["b"])({required:!0})],P.prototype,"title",void 0),Object(h["a"])([Object(g["b"])()],P.prototype,"description",void 0),P=Object(h["a"])([g["a"]],P);var A=P,T=A,D=(a("53ca"),Object(s["a"])(T,F,E,!1,null,null,null)),L=D.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"teacher-item"},[r("header",[r("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/11306519?s=460&u=0f500de4f52a98468baee823e779838283576024&v=4",alt:"Roberto Arruda"}}),r("div",[r("strong",[e._v("Roberto Arruda")]),r("span",[e._v("Matemática")])])]),r("p",[e._v(" Entusiasta das melhores tecnologias de matemática avançada. "),r("br"),r("br"),e._v(" Apaixonado pelas melhores tecnicas metemaricas e por mudar a vida das pessoas atravex do calculo. ")]),r("footer",[r("p",[e._v(" Preço/hora "),r("strong",[e._v("R$ 80,00")])]),r("button",{attrs:{type:"button"}},[r("img",{attrs:{src:a("bdf8"),alt:"contato"}}),e._v(" Entrar em contato ")])])])}],G=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);G=Object(h["a"])([g["a"]],G);var B=G,Q=B,q=(a("ef9e"),Object(s["a"])(Q,H,M,!1,null,null,null)),N=q.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-block"},[a("label",{attrs:{for:e.name}},[e._v(e._s(e.label))]),a("input",e._b({attrs:{type:e.type,id:e.name},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"input",e.$attrs,!1))])},J=[],z=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);Object(h["a"])([Object(g["b"])()],z.prototype,"label",void 0),Object(h["a"])([Object(g["b"])()],z.prototype,"value",void 0),Object(h["a"])([Object(g["b"])()],z.prototype,"name",void 0),Object(h["a"])([Object(g["b"])({default:"text"})],z.prototype,"type",void 0),z=Object(h["a"])([g["a"]],z);var U=z,V=U,W=(a("e706"),Object(s["a"])(V,R,J,!1,null,null,null)),K=W.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select-block"},[a("label",{attrs:{for:e.name}},[e._v(e._s(e.label))]),a("select",e._b({attrs:{id:e.name},domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},"select",e.$attrs,!1),[a("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v("Selecione uma opção")]),e._l(e.options,(function(t){return a("option",{key:t.value,domProps:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])}))],2)])},Y=[],Z=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);Object(h["a"])([Object(g["b"])()],Z.prototype,"label",void 0),Object(h["a"])([Object(g["b"])()],Z.prototype,"value",void 0),Object(h["a"])([Object(g["b"])()],Z.prototype,"name",void 0),Object(h["a"])([Object(g["b"])()],Z.prototype,"options",void 0),Z=Object(h["a"])([g["a"]],Z);var ee=Z,te=ee,ae=(a("e851"),Object(s["a"])(te,X,Y,!1,null,null,null)),re=ae.exports,ne=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);ne=Object(h["a"])([Object(g["a"])({components:{PageHeader:L,TeacherListItem:N,Input:K,Select:re}})],ne);var oe=ne,se=oe,ce=(a("88c4"),Object(s["a"])(se,$,I,!1,null,null,null)),le=ce.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"page-teacher-form"}},[a("PageHeader",{attrs:{title:"Que incrivel que você quer dar aulas.",description:"O primeiro passo é preencher esse formulário."}}),a("main",[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleCreateClass(t)}}},[a("fieldset",[a("legend",[e._v("Seus dados")]),a("Input",{attrs:{name:"name",label:"Nome Completo"},model:{value:e.teacherForm.name,callback:function(t){e.$set(e.teacherForm,"name",t)},expression:"teacherForm.name"}}),a("Input",{attrs:{name:"avatar",label:"Avatar"},model:{value:e.teacherForm.avatar,callback:function(t){e.$set(e.teacherForm,"avatar",t)},expression:"teacherForm.avatar"}}),a("Input",{attrs:{name:"whatsapp",label:"Whatsapp"},model:{value:e.teacherForm.whatsapp,callback:function(t){e.$set(e.teacherForm,"whatsapp",t)},expression:"teacherForm.whatsapp"}}),a("Textarea",{attrs:{name:"bio",label:"Biografia"},model:{value:e.teacherForm.bio,callback:function(t){e.$set(e.teacherForm,"bio",t)},expression:"teacherForm.bio"}})],1),a("fieldset",[a("legend",[e._v("Sobre a aula")]),a("Select",{attrs:{name:"subject",label:"Matéria",options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ciẽncias",label:"Ciẽncias"},{value:"Física",label:"Física"},{value:"Geografia",label:"Geografia"}]},model:{value:e.teacherForm.subject,callback:function(t){e.$set(e.teacherForm,"subject",t)},expression:"teacherForm.subject"}}),a("Input",{attrs:{name:"cost",label:"Custo da sua hora por aula"},model:{value:e.teacherForm.cost,callback:function(t){e.$set(e.teacherForm,"cost",t)},expression:"teacherForm.cost"}})],1),a("fieldset",[a("legend",[e._v(" Horários Disponíveis "),a("button",{attrs:{type:"button"},on:{click:e.addNewScheduleItem}},[e._v(" + Novo Horário ")])]),e._l(e.scheduleItems,(function(t,r){return a("div",{key:r,staticClass:"schedule-item"},[a("Select",{attrs:{name:"week_day",label:"Dia da Semana",options:[{value:0,label:"Domingo"},{value:1,label:"Segunda-feira"},{value:2,label:"Terça-feira"},{value:3,label:"Quarta-feira"},{value:4,label:"Quinta-feira"},{value:5,label:"Sexta-feira"},{value:6,label:"Sábado"}]},model:{value:t.week_day,callback:function(a){e.$set(t,"week_day",a)},expression:"scheduleItem.week_day"}}),a("Input",{attrs:{name:"from",label:"Das",type:"time"},model:{value:t.from,callback:function(a){e.$set(t,"from",a)},expression:"scheduleItem.from"}}),a("Input",{attrs:{name:"to",label:"Até",type:"time"},model:{value:t.to,callback:function(a){e.$set(t,"to",a)},expression:"scheduleItem.to"}})],1)}))],2),e._m(0)])])],1)},ue=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("p",[r("img",{attrs:{src:a("080e"),alt:"Aviso importante"}}),e._v(" Importante! "),r("br"),e._v(" Preencha todos os dados ")]),r("button",{attrs:{type:"submit"}},[e._v("Salvar Cadastro")])])}],be=a("5530"),pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"textarea-block"},[a("label",{attrs:{for:e.name}},[e._v(e._s(e.label))]),a("textarea",e._b({attrs:{id:e.name},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"textarea",e.$attrs,!1))])},fe=[],ve=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(g["c"]);Object(h["a"])([Object(g["b"])()],ve.prototype,"label",void 0),Object(h["a"])([Object(g["b"])()],ve.prototype,"value",void 0),Object(h["a"])([Object(g["b"])()],ve.prototype,"name",void 0),ve=Object(h["a"])([g["a"]],ve);var de=ve,me=de,he=(a("9e9f"),Object(s["a"])(me,pe,fe,!1,null,null,null)),ge=he.exports,je=function(e){Object(d["a"])(a,e);var t=Object(m["a"])(a);function a(){var e;return Object(f["a"])(this,a),e=t.apply(this,arguments),e.scheduleItems=[{week_day:null,from:"",to:""}],e.teacherForm={name:"",avatar:"",whatsapp:"",bio:"",subject:"",cost:""},e}return Object(v["a"])(a,[{key:"addNewScheduleItem",value:function(){this.scheduleItems.push({week_day:null,from:"",to:""})}},{key:"handleCreateClass",value:function(){y.post("classes",Object(be["a"])(Object(be["a"])({},this.teacherForm),{},{schedule:this.scheduleItems})).then((function(){return alert("Cadastro efetuado com sucesso!")})).catch((function(){return alert("Erro no cadastro!")}))}}]),a}(g["c"]);je=Object(h["a"])([Object(g["a"])({components:{PageHeader:L,Input:K,Textarea:ge,Select:re}})],je);var Oe=je,_e=Oe,ye=(a("eeb6"),Object(s["a"])(_e,ie,ue,!1,null,null,null)),xe=ye.exports;r["a"].use(u["a"]);var we=[{path:"/",name:"Landing",component:S},{path:"/study",name:"Study",component:le},{path:"/give-classes",name:"GiveClasses",component:xe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Ce=new u["a"]({mode:"history",base:"/proffy-nlw2-web-vue/",routes:we}),ke=Ce;r["a"].config.productionTip=!1,new r["a"]({router:ke,render:function(e){return e(i)}}).$mount("#app")},e347:function(e,t,a){e.exports=a.p+"assets/img/logo.86fef799.svg"},e62b:function(e,t,a){},e706:function(e,t,a){"use strict";var r=a("7e55"),n=a.n(r);n.a},e851:function(e,t,a){"use strict";var r=a("3614"),n=a.n(r);n.a},eeb6:function(e,t,a){"use strict";var r=a("0ed4"),n=a.n(r);n.a},ef9e:function(e,t,a){"use strict";var r=a("e62b"),n=a.n(r);n.a},f075:function(e,t,a){e.exports=a.p+"assets/img/give-classes.156102ee.svg"},ff2d:function(e,t,a){}});
//# sourceMappingURL=app.e2ee6dee.js.map