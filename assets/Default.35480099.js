import{_ as ke}from"./_plugin-vue_export-helper.cdc0426e.js";import{p as W,i as Y,c as u,r as C,a as P,u as re,b as $,g as ce,o as de,d as Re,e as ze,f as Le,h as Pe,j as ve,k as Ae,l as ee,m as F,n as T,q as n,s as me,t as fe,v as ge,w as te,x as ye,y as A,z as pe,A as he,B as be,C as ae,D as He,V as Q,E as _e,F as Ne,G as Me,H as Ee,I as xe,J as q,K as Oe,L as oe,M as le,N as w,O as De,P as D,Q as X,R as je,S as Fe,T as qe}from"./index.596ea689.js";const j=Symbol.for("vuetify:layout"),Se=Symbol.for("vuetify:layout-item"),ie=1e3,Ke=W({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ve=W({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ue(){const e=Y(j);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ie(e){var c;const o=Y(j);if(!o)throw new Error("[Vuetify] Could not find injected layout");const a=(c=e.id)!=null?c:`layout-item-${Re()}`,t=ce("useLayoutItem");ve(Se,{id:a});const l=C(!1);ze(()=>l.value=!0),Le(()=>l.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:r}=o.register(t,{...e,active:u(()=>l.value?!1:e.active.value),id:a});return Pe(()=>o.unregister(a)),{layoutItemStyles:s,layoutRect:o.layoutRect,layoutItemScrimStyles:r}}const Ze=(e,o,a,t)=>{let l={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...l}}];for(const r of e){const c=o.get(r),f=a.get(r),y=t.get(r);if(!c||!f||!y)continue;const m={...l,[c.value]:parseInt(l[c.value],10)+(y.value?parseInt(f.value,10):0)};s.push({id:r,layer:m}),l=m}return s};function Qe(e){const o=Y(j,null),a=u(()=>o?o.rootZIndex.value-100:ie),t=C([]),l=P(new Map),s=P(new Map),r=P(new Map),c=P(new Map),f=P(new Map),{resizeRef:y,contentRect:m}=re(),h=u(()=>{var i;const d=new Map,p=(i=e.overlaps)!=null?i:[];for(const x of p.filter(v=>v.includes(":"))){const[v,b]=x.split(":");if(!t.value.includes(v)||!t.value.includes(b))continue;const B=l.get(v),R=l.get(b),z=s.get(v),O=s.get(b);!B||!R||!z||!O||(d.set(b,{position:B.value,amount:parseInt(z.value,10)}),d.set(v,{position:R.value,amount:-parseInt(O.value,10)}))}return d}),g=u(()=>{const d=[...new Set([...r.values()].map(i=>i.value))].sort((i,x)=>i-x),p=[];for(const i of d){const x=t.value.filter(v=>{var b;return((b=r.get(v))==null?void 0:b.value)===i});p.push(...x)}return Ze(p,l,s,c)}),S=u(()=>!Array.from(f.values()).some(d=>d.value)),V=u(()=>g.value[g.value.length-1].layer),H=u(()=>({"--v-layout-left":$(V.value.left),"--v-layout-right":$(V.value.right),"--v-layout-top":$(V.value.top),"--v-layout-bottom":$(V.value.bottom),...S.value?void 0:{transition:"none"}})),I=u(()=>g.value.slice(1).map((d,p)=>{let{id:i}=d;const{layer:x}=g.value[p],v=s.get(i),b=l.get(i);return{id:i,...x,size:Number(v.value),position:b.value}})),k=d=>I.value.find(p=>p.id===d),N=ce("createLayout"),M=C(!1);de(()=>{M.value=!0}),ve(j,{register:(d,p)=>{let{id:i,order:x,position:v,layoutSize:b,elementSize:B,active:R,disableTransitions:z,absolute:O}=p;r.set(i,x),l.set(i,v),s.set(i,b),c.set(i,R),z&&f.set(i,z);const ne=Ae(Se,N==null?void 0:N.vnode).indexOf(d);ne>-1?t.value.splice(ne,0,i):t.value.push(i);const se=u(()=>I.value.findIndex(L=>L.id===i)),K=u(()=>a.value+g.value.length*2-se.value*2),Ce=u(()=>{const L=v.value==="left"||v.value==="right",U=v.value==="right",we=v.value==="bottom",ue={[v.value]:0,zIndex:K.value,transform:`translate${L?"X":"Y"}(${(R.value?0:-110)*(U||we?-1:1)}%)`,position:O.value||a.value!==ie?"absolute":"fixed",...S.value?void 0:{transition:"none"}};if(!M.value)return ue;const _=I.value[se.value];if(!_)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const Z=h.value.get(i);return Z&&(_[Z.position]+=Z.amount),{...ue,height:L?`calc(100% - ${_.top}px - ${_.bottom}px)`:B.value?`${B.value}px`:void 0,left:U?void 0:`${_.left}px`,right:U?`${_.right}px`:void 0,top:v.value!=="bottom"?`${_.top}px`:void 0,bottom:v.value!=="top"?`${_.bottom}px`:void 0,width:L?B.value?`${B.value}px`:void 0:`calc(100% - ${_.left}px - ${_.right}px)`}}),Te=u(()=>({zIndex:K.value-1}));return{layoutItemStyles:Ce,layoutItemScrimStyles:Te,zIndex:K}},unregister:d=>{r.delete(d),l.delete(d),s.delete(d),c.delete(d),f.delete(d),t.value=t.value.filter(p=>p!==d)},mainRect:V,mainStyles:H,getLayoutItem:k,items:I,layoutRect:m,rootZIndex:a});const E=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Be=u(()=>({zIndex:a.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:E,layoutStyles:Be,getLayoutItem:k,items:I,layoutRect:m,layoutRef:y}}const Xe="/assets/mushroom.b6aa68c0.png";const G=ee()({name:"VToolbarTitle",props:{text:String,...F()},setup(e,o){let{slots:a}=o;return T(()=>{var t;const l=!!(a.default||a.text||e.text);return n(e.tag,{class:"v-toolbar-title"},{default:()=>[l&&n("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]})}),{}}}),Ge=[null,"prominent","default","comfortable","compact"],$e=W({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ge.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...me(),...fe(),...ge(),...F({tag:"header"}),...te()},"v-toolbar"),J=ee()({name:"VToolbar",props:$e(),setup(e,o){var a;let{slots:t}=o;const{backgroundColorClasses:l,backgroundColorStyles:s}=ye(A(e,"color")),{borderClasses:r}=pe(e),{elevationClasses:c}=he(e),{roundedClasses:f}=be(e),{themeClasses:y}=ae(e),m=C(!!(e.extended||(a=t.extension)!=null&&a.call(t))),h=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=u(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return He({VBtn:{variant:"text"}}),T(()=>{var S,V,H,I,k;const N=!!(e.title||t.title),M=!!(t.image||e.image),E=(S=t.extension)==null?void 0:S.call(t);return m.value=!!(e.extended||E),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,r.value,c.value,f.value,y.value],style:[s.value]},{default:()=>[M&&n("div",{key:"image",class:"v-toolbar__image"},[n(Q,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(V=t.image)==null?void 0:V.call(t):n(_e,null,null)]})]),n(Q,{defaults:{VTabs:{height:$(h.value)}}},{default:()=>[n("div",{class:"v-toolbar__content",style:{height:$(h.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(H=t.prepend)==null?void 0:H.call(t)]),N&&n(G,{key:"title",text:e.title},{text:t.title}),(I=t.default)==null?void 0:I.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}),n(Q,{defaults:{VTabs:{height:$(g.value)}}},{default:()=>[n(Ne,null,{default:()=>[m.value&&n("div",{class:"v-toolbar__extension",style:{height:$(g.value)}},[E])]})]})]})}),{contentHeight:h,extensionHeight:g}}});function Je(e){var o;return Me(e,Object.keys((o=J==null?void 0:J.props)!=null?o:{}))}const We=ee()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...$e(),...Ve(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const t=C(),l=Ee(e,"modelValue"),s=u(()=>{var h,g;var c,f;const y=(h=(c=t.value)==null?void 0:c.contentHeight)!=null?h:0,m=(g=(f=t.value)==null?void 0:f.extensionHeight)!=null?g:0;return y+m}),{layoutItemStyles:r}=Ie({id:e.name,order:u(()=>parseInt(e.order,10)),position:A(e,"location"),layoutSize:s,elementSize:s,active:l,absolute:A(e,"absolute")});return T(()=>{const[c]=Je(e);return n(J,xe({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...r.value,height:void 0}},c),a)}),{}}}),Ye=q({name:"VAppBarTitle",props:{...G.props},setup(e,o){let{slots:a}=o;return T(()=>n(G,xe(e,{class:"v-app-bar-title"}),a)),{}}}),et={setup(){const e=Oe();return e.global.name.value=localStorage.getItem("theme")||"dark",{theme:e,toggleTheme:()=>{e.global.name.value=e.global.current.value.dark?"light":"dark",localStorage.setItem("theme",e.global.name.value)}}}},tt={class:"d-inline-flex flex-row"};function at(e,o,a,t,l,s){return oe(),le(We,{flat:""},{append:w(()=>[n(De,{onClick:t.toggleTheme,icon:"mdi-theme-light-dark"},null,8,["onClick"])]),default:w(()=>[n(Ye,null,{default:w(()=>[D("div",tt,[n(_e,{width:25,src:Xe}),X(" MapleLegends Quest Finder ")])]),_:1})]),_:1})}const ot=ke(et,[["render",at]]);function lt(){const e=C(!1);return de(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:je(e)}}const nt=q({name:"VMain",props:{scrollable:Boolean,...F({tag:"main"})},setup(e,o){let{slots:a}=o;const{mainStyles:t}=Ue(),{ssrBootStyles:l}=lt();return T(()=>{var s,r;return n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,l.value]},{default:()=>[e.scrollable?n("div",{class:"v-main__scroller"},[(s=a.default)==null?void 0:s.call(a)]):(r=a.default)==null?void 0:r.call(a)]})}),{}}}),st={__name:"View",setup(e){return(o,a)=>{const t=Fe("router-view");return oe(),le(nt,null,{default:w(()=>[n(t)]),_:1})}}};const ut=q({name:"VApp",props:{...Ke({fullHeight:!0}),...te()},setup(e,o){let{slots:a}=o;const t=ae(e),{layoutClasses:l,layoutStyles:s,getLayoutItem:r,items:c,layoutRef:f}=Qe(e),{rtlClasses:y}=qe();return T(()=>{var m;return n("div",{ref:f,class:["v-application",t.themeClasses.value,l.value,y.value],style:s.value},[n("div",{class:"v-application__wrap"},[(m=a.default)==null?void 0:m.call(a)])])}),{getLayoutItem:r,items:c,theme:t}}});const it=q({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...me(),...fe(),...Ve(),...ge(),...F({tag:"footer"}),...te()},setup(e,o){let{slots:a}=o;const{themeClasses:t}=ae(e),{backgroundColorClasses:l,backgroundColorStyles:s}=ye(A(e,"color")),{borderClasses:r}=pe(e),{elevationClasses:c}=he(e),{roundedClasses:f}=be(e),y=C(32),{resizeRef:m}=re(S=>{!S.length||(y.value=S[0].target.clientHeight)}),h=u(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:g}=Ie({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:h,elementSize:u(()=>e.height==="auto"?void 0:h.value),active:u(()=>e.app),absolute:A(e,"absolute")});return T(()=>n(e.tag,{ref:m,class:["v-footer",t.value,l.value,r.value,c.value,f.value],style:[s.value,e.app?g.value:void 0]},a)),{}}}),rt=D("div",null,[X("If you see something wrong with the data, feel free to "),D("a",{href:"https://github.com/yeoji/maple-quest-finder/tree/master/data"},"update it here"),X(" or "),D("a",{href:"https://github.com/yeoji/maple-quest-finder/issues"},"open an issue.")],-1),mt={__name:"Default",setup(e){return(o,a)=>(oe(),le(ut,null,{default:w(()=>[n(ot),n(st),n(it,{class:"flex-column"},{default:w(()=>[rt]),_:1})]),_:1}))}};export{mt as default};
