(this["webpackJsonpdata-ingestion"]=this["webpackJsonpdata-ingestion"]||[]).push([[0],{269:function(e){e.exports=JSON.parse('{"companyName":"Radix Engineering","templatesPage":{"title":"New Template","labelTemplateName":"My Template Name","labelAssetTypes":"Asset Types","labelAvailableFields":"Available Fields","labelSelectedFields":"Selected Fields"},"dataIngestionPage":{"title":"Data Ingestion","labelAssets":"Assets","labelTemplates":"Templates"},"sideMenu":{"dataIngestion":"Data Ingestion","templates":"Templates"},"saveButton":"Save"}')},270:function(e){e.exports=JSON.parse('{"companyName":"Radix Engenharia","templatesPage":{"title":"Novo template","labelTemplateName":"Meu nome de template","labelAssetTypes":"Tipos de asset","labelAvailableFields":"Campos Dispon\xedveis","labelSelectedFields":"Campos Selecionados"},"dataIngestionPage":{"title":"Ingest\xe3o de Dados","labelAssets":"Assets","labelTemplates":"Templates"},"sideMenu":{"dataIngestion":"Ingest\xe3o de Dados","templates":"Templates"},"saveButton":"Salvar"}')},294:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(35),s=a.n(n),i=(a(294),a(84)),c=a(0),l=a.n(c),r=a(59),o=a(12),d=a(77),j=a(434),b=a(418),u=a(417),p=a(416),m=a(265),h=a.n(m),g=a(264),O=a.n(g),x=a(353),f=a(419),v=a(420),w=a(262),N=a.n(w),y=a(263),C=a.n(y),S=a(91),T=a(412),k=a(436),I=Object(T.a)((function(e){return Object(k.a)({drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(r.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:0},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(S.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)})})),A=a(174),P=a(435),L=a(9);var B=function(e){var t,a,n=Object(P.a)().t,s=I(),i=Object(d.a)(),c=[{key:1,name:n("sideMenu.dataIngestion"),route:"/data-ingestion",icon:Object(L.jsx)(N.a,{})},{key:2,name:n("sideMenu.templates"),route:"/templates",icon:Object(L.jsx)(C.a,{})}];return Object(L.jsxs)(j.a,{variant:"permanent",className:Object(o.a)(s.drawer,(t={},Object(r.a)(t,s.drawerOpen,e.open),Object(r.a)(t,s.drawerClose,!e.open),t)),classes:{paper:Object(o.a)((a={},Object(r.a)(a,s.drawerOpen,e.open),Object(r.a)(a,s.drawerClose,!e.open),a))},children:[Object(L.jsx)("div",{className:s.toolbar,children:Object(L.jsx)(p.a,{onClick:e.handleDrawerClose,children:"rtl"===i.direction?Object(L.jsx)(O.a,{}):Object(L.jsx)(h.a,{})})}),Object(L.jsx)(u.a,{}),Object(L.jsx)(b.a,{children:c.map((function(e){return Object(L.jsxs)(x.a,{button:!0,component:A.b,to:e.route,children:[Object(L.jsx)(f.a,{children:e.icon}),Object(L.jsx)(v.a,{primary:e.name})]},e.key)}))})]})},F=a(421),D=a(422),W=a(102),z=a(267),E=a.n(z),M=Object(T.a)((function(e){return Object(k.a)({appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),display:"flex",flexDirection:"row",justifyContent:"space-between"},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},languageSelect:{color:"white !important"}})})),R=a(430);var J=function(e){var t=Object(P.a)().t,a=M();return Object(L.jsxs)(F.a,{position:"fixed",className:Object(o.a)(a.appBar,Object(r.a)({},a.appBarShift,e.open)),children:[Object(L.jsxs)(D.a,{children:[Object(L.jsx)(p.a,{color:"inherit","aria-label":"open drawer",onClick:e.handleDrawerOpen,edge:"start",className:Object(o.a)(a.menuButton,Object(r.a)({},a.hide,e.open)),children:Object(L.jsx)(E.a,{})}),Object(L.jsx)(W.a,{variant:"h6",noWrap:!0,children:t("companyName")})]}),Object(L.jsx)(R.a,{id:"language-selection",value:e.selectedLanguage,className:a.languageSelect,onChange:e.handleLanguageChange,children:e.availableLanguages.map((function(e){return Object(L.jsx)("option",{value:e,children:e},e)}))})]})},U=Object(T.a)((function(e){return Object(k.a)({root:{display:"flex"},toolbar:Object(S.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}})})),H=a(38),G=a(273),K=a(426),V=(a(305),a(432)),X=a(425);a(306);var $=function(e){var t=Object(P.a)().t;return Object(L.jsxs)("div",{className:"row w-100",children:[Object(L.jsx)("div",{className:"col-12 col-md-6 my-3 px-3",children:Object(L.jsx)(V.a,{id:"assets",select:!0,label:t("dataIngestionPage.labelAssets"),value:e.selectedAsset,onChange:e.handleChange,inputProps:{name:"asset",id:"asset"},variant:"outlined",children:e.assets.map((function(e){return Object(L.jsx)(X.a,{value:e.id,children:e.name},e.id)}))})}),Object(L.jsx)("div",{className:"col-12 col-md-6 my-3 px-3",children:Object(L.jsx)(V.a,{id:"templates",select:!0,label:t("dataIngestionPage.labelTemplates"),value:e.selectedTemplate,onChange:e.handleChange,inputProps:{name:"template",id:"template"},variant:"outlined",children:e.templates.map((function(e){return Object(L.jsx)(X.a,{value:e.id,children:e.name},e.id)}))})})]})},q=a(271),Q=[[]],Y=[{title:"Name"},{title:"Location"},{title:"Date"},{title:"Asset Uptime"}];var Z=function(){return Object(L.jsxs)("div",{className:"row",children:[Object(L.jsx)("div",{className:"col-12 d-none d-md-block",children:Object(L.jsx)("div",{id:"hot-app",children:Object(L.jsx)(q.a,{settings:{data:Q,colHeaders:!0,columns:Y,licenseKey:"non-commercial-and-evaluation"}})})}),Object(L.jsx)("div",{className:"col-12 d-block d-md-none my-2",children:Y.map((function(e){return Object(L.jsx)(V.a,{label:e.title,id:e.title},e.title)}))})]})},_=[{id:"1",name:"Asset 1"},{id:"2",name:"Asset 2"}],ee=[{id:"1",name:"Template 1"},{id:"2",name:"Template 2"}];var te=function(){var e=Object(P.a)().t,t=Object(c.useState)({asset:"",template:""}),a=Object(i.a)(t,2),n=a[0],s=a[1];return Object(L.jsxs)("div",{className:"container-fluid px-0",children:[Object(L.jsxs)("h3",{children:[" ",e("dataIngestionPage.title")]}),Object(L.jsxs)(G.a,{className:"paper p-2",children:[Object(L.jsx)($,{assets:_,templates:ee,selectedAsset:n.asset,selectedTemplate:n.template,handleChange:function(e){var t=e.target.name;s(Object(S.a)(Object(S.a)({},n),{},Object(r.a)({},t,e.target.value)))}}),n.asset&&n.template?Object(L.jsx)(Z,{}):Object(L.jsx)(L.Fragment,{}),Object(L.jsx)("div",{className:"row  justify-content-end my-2",children:Object(L.jsx)("div",{className:"col-12 col-md-2",children:Object(L.jsx)(K.a,{variant:"contained",color:"primary",size:"large",className:"save-button",children:e("saveButton")})})})]})]})};a(349),a(350);var ae=function(e){var t=Object(P.a)().t;return Object(L.jsxs)("div",{className:"row w-100",children:[Object(L.jsx)("div",{className:"col-12 col-md-6 my-3 px-3",children:Object(L.jsx)(V.a,{label:t("templatesPage.labelTemplateName"),id:"templateName",onChange:e.handleChange,inputProps:{name:"templateName",id:"templateName"}})}),Object(L.jsx)("div",{className:"col-12 col-md-6 my-3 px-3",children:Object(L.jsx)(V.a,{id:"assetType",select:!0,label:t("templatesPage.labelAssetTypes"),value:e.selectedAssetType,onChange:e.handleChange,inputProps:{name:"assetType",id:"assetType"},variant:"outlined",children:e.assetTypes.map((function(e){return Object(L.jsx)(X.a,{value:e.id,children:e.name},e.id)}))})})]})},ne=a(175),se=a(429),ie=a(427),ce=a(428),le=a(433),re=Object(T.a)((function(e){return Object(k.a)({cardHeader:{padding:e.spacing(1,2)},list:{width:250,height:400,backgroundColor:e.palette.background.paper,overflow:"auto"},button:{margin:e.spacing(.5,0)}})}));function oe(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function de(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function je(){var e=Object(P.a)().t,t=re(),a=l.a.useState([]),n=Object(i.a)(a,2),s=n[0],c=n[1],r=l.a.useState([0,1,2,3]),o=Object(i.a)(r,2),d=o[0],j=o[1],p=l.a.useState([4,5,6,7]),m=Object(i.a)(p,2),h=m[0],g=m[1],O=de(s,d),w=de(s,h),N=function(e){return function(){var t=s.indexOf(e),a=Object(ne.a)(s);-1===t?a.push(e):a.splice(t,1),c(a)}},y=function(e){return de(s,e).length},C=function(e){return function(){var t,a;y(e)===e.length?c(oe(s,e)):c((t=s,a=e,[].concat(Object(ne.a)(t),Object(ne.a)(oe(a,t)))))}},S=function(e,a){return Object(L.jsxs)(ie.a,{children:[Object(L.jsx)(ce.a,{className:t.cardHeader,avatar:Object(L.jsx)(le.a,{onClick:C(a),checked:y(a)===a.length&&0!==a.length,indeterminate:y(a)!==a.length&&0!==y(a),disabled:0===a.length,inputProps:{"aria-label":"all items selected"}}),title:e}),Object(L.jsx)(u.a,{}),Object(L.jsxs)(b.a,{className:t.list,dense:!0,component:"div",role:"list",children:[a.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return Object(L.jsxs)(x.a,{role:"listitem",button:!0,onClick:N(e),children:[Object(L.jsx)(f.a,{children:Object(L.jsx)(le.a,{checked:-1!==s.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(L.jsx)(v.a,{id:t,primary:"List item ".concat(e+1)})]},e)})),Object(L.jsx)(x.a,{})]})]})};return Object(L.jsxs)(se.a,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",className:"flex-column flex-md-row",children:[Object(L.jsx)(se.a,{item:!0,children:S(e("templatesPage.labelAvailableFields"),d)}),Object(L.jsx)(se.a,{item:!0,children:Object(L.jsxs)(se.a,{container:!0,direction:"column",alignItems:"center",children:[Object(L.jsx)(K.a,{variant:"outlined",size:"small",className:t.button,onClick:function(){g(h.concat(O)),j(oe(d,O)),c(oe(s,O))},disabled:0===O.length,"aria-label":"move selected right",children:">"}),Object(L.jsx)(K.a,{variant:"outlined",size:"small",className:t.button,onClick:function(){j(d.concat(w)),g(oe(h,w)),c(oe(s,w))},disabled:0===w.length,"aria-label":"move selected left",children:"<"})]})}),Object(L.jsx)(se.a,{item:!0,children:S(e("templatesPage.labelSelectedFields"),h)})]})}var be=[{id:"1",name:"Injection Point"},{id:"2",name:"Well"}];var ue=function(){var e=Object(P.a)().t,t=Object(c.useState)({assetType:"",templateName:""}),a=Object(i.a)(t,2),n=a[0],s=a[1];return Object(L.jsxs)("div",{className:"container-fluid px-0",children:[Object(L.jsxs)("h3",{children:[" ",e("templatesPage.title")]}),Object(L.jsxs)(G.a,{className:"paper p-2",children:[Object(L.jsx)(ae,{assetTypes:be,selectedAssetType:n.assetType,handleChange:function(e){var t=e.target.name;s(Object(S.a)(Object(S.a)({},n),{},Object(r.a)({},t,e.target.value)))}}),Object(L.jsx)(je,{}),Object(L.jsx)("div",{className:"row  justify-content-end my-2",children:Object(L.jsx)("div",{className:"col-12 col-md-2",children:Object(L.jsx)(K.a,{variant:"contained",color:"primary",size:"large",className:"save-button",children:e("saveButton")})})})]})]})};var pe=function(){return Object(L.jsxs)(H.c,{children:[Object(L.jsx)(H.a,{path:"/",exact:!0,children:Object(L.jsx)(ue,{})}),Object(L.jsx)(H.a,{path:"/templates",children:Object(L.jsx)(ue,{})}),Object(L.jsx)(H.a,{path:"/data-ingestion",children:Object(L.jsx)(te,{})}),Object(L.jsx)(H.a,{path:"*",children:Object(L.jsx)(ue,{})})]})},me=a(146);var he=function(){var e=U(),t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],s=a[1],l="current-language",r=Object(c.useState)(""),o=Object(i.a)(r,2),d=o[0],j=o[1];return Object(c.useEffect)((function(){var e,t=null!==(e=localStorage.getItem(l))&&void 0!==e?e:"en";me.a.changeLanguage(t),j(t)}),[]),Object(L.jsx)(A.a,{basename:"/",children:Object(L.jsxs)("div",{className:e.root,children:[Object(L.jsx)(J,{open:n,handleDrawerOpen:function(){s(!0)},availableLanguages:["en","pt"],selectedLanguage:d,handleLanguageChange:function(e){return function(e){localStorage.setItem(l,e),me.a.changeLanguage(e),j(e),window.location.reload()}(e.target.value)}}),Object(L.jsx)(B,{open:n,handleDrawerClose:function(){s(!1)}}),Object(L.jsxs)("main",{className:e.content,children:[Object(L.jsx)("div",{className:e.toolbar}),Object(L.jsx)(pe,{})]})]})})},ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,439)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))},fe=a(147),ve=a(269),we=a(270);me.a.use(fe.e).init({resources:{en:{translation:ve},pt:{translation:we}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}}),s.a.render(Object(L.jsx)(he,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/data-ingestion-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/data-ingestion-react","/service-worker.js");ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Oe(t,e)}))}}(),xe()}},[[351,1,2]]]);
//# sourceMappingURL=main.f4b254bf.chunk.js.map