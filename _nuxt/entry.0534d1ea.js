function Ju(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Re={},fs=[],Qt=()=>{},TT=()=>!1,wT=/^on[^a-z]/,to=t=>wT.test(t),Yu=t=>t.startsWith("onUpdate:"),He=Object.assign,Xu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},IT=Object.prototype.hasOwnProperty,de=(t,e)=>IT.call(t,e),G=Array.isArray,ds=t=>Us(t)==="[object Map]",Fs=t=>Us(t)==="[object Set]",Yf=t=>Us(t)==="[object Date]",AT=t=>Us(t)==="[object RegExp]",re=t=>typeof t=="function",Ne=t=>typeof t=="string",Ci=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Zu=t=>we(t)&&re(t.then)&&re(t.catch),Yg=Object.prototype.toString,Us=t=>Yg.call(t),RT=t=>Us(t).slice(8,-1),Xg=t=>Us(t)==="[object Object]",eh=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bT=/-(\w)/g,mn=tc(t=>t.replace(bT,(e,n)=>n?n.toUpperCase():"")),PT=/\B([A-Z])/g,Bs=tc(t=>t.replace(PT,"-$1").toLowerCase()),nc=tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),rl=tc(t=>t?`on${nc(t)}`:""),Si=(t,e)=>!Object.is(t,e),ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ga=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Zg=t=>{const e=Ne(t)?Number(t):NaN;return isNaN(e)?t:e};let Xf;const jl=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?OT(r):rc(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ne(t))return t;if(we(t))return t}}const CT=/;(?![^(]*\))/g,ST=/:([^]+)/,kT=/\/\*[^]*?\*\//g;function OT(t){const e={};return t.replace(kT,"").split(CT).forEach(n=>{if(n){const r=n.split(ST);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sc(t){let e="";if(Ne(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=sc(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function NT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ne(e)&&(t.class=sc(e)),n&&(t.style=rc(n)),t}const DT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VT=Ju(DT);function em(t){return!!t||t===""}function MT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=no(t[r],e[r]);return n}function no(t,e){if(t===e)return!0;let n=Yf(t),r=Yf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ci(t),r=Ci(e),n||r)return t===e;if(n=G(t),r=G(e),n||r)return n&&r?MT(t,e):!1;if(n=we(t),r=we(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!no(t[o],e[o]))return!1}}return String(t)===String(e)}function th(t,e){return t.findIndex(n=>no(n,e))}const jV=t=>Ne(t)?t:t==null?"":G(t)||we(t)&&(t.toString===Yg||!re(t.toString))?JSON.stringify(t,tm,2):String(t),tm=(t,e)=>e&&e.__v_isRef?tm(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!G(e)&&!Xg(e)?String(e):e;let Vt;class nm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function rm(t){return new nm(t)}function xT(t,e=Vt){e&&e.active&&e.effects.push(t)}function sm(){return Vt}function LT(t){Vt&&Vt.cleanups.push(t)}const nh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},im=t=>(t.w&cr)>0,om=t=>(t.n&cr)>0,FT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=cr},UT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];im(s)&&!om(s)?s.delete(t):e[n++]=s,s.w&=~cr,s.n&=~cr}e.length=n}},_a=new WeakMap;let si=0,cr=1;const $l=30;let zt;const Or=Symbol(""),Hl=Symbol("");class rh{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xT(this,r)}run(){if(!this.active)return this.fn();let e=zt,n=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zt,zt=this,tr=!0,cr=1<<++si,si<=$l?FT(this):Zf(this),this.fn()}finally{si<=$l&&UT(this),cr=1<<--si,zt=this.parent,tr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zt===this?this.deferStop=!0:this.active&&(Zf(this),this.onStop&&this.onStop(),this.active=!1)}}function Zf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tr=!0;const am=[];function js(){am.push(tr),tr=!1}function $s(){const t=am.pop();tr=t===void 0?!0:t}function At(t,e,n){if(tr&&zt){let r=_a.get(t);r||_a.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=nh()),cm(s)}}function cm(t,e){let n=!1;si<=$l?om(t)||(t.n|=cr,n=!im(t)):n=!t.has(zt),n&&(t.add(zt),zt.deps.push(t))}function Sn(t,e,n,r,s,i){const o=_a.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?eh(n)&&a.push(o.get("length")):(a.push(o.get(Or)),ds(t)&&a.push(o.get(Hl)));break;case"delete":G(t)||(a.push(o.get(Or)),ds(t)&&a.push(o.get(Hl)));break;case"set":ds(t)&&a.push(o.get(Or));break}if(a.length===1)a[0]&&ql(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ql(nh(c))}}function ql(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&ed(r);for(const r of n)r.computed||ed(r)}function ed(t,e){(t!==zt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function BT(t,e){var n;return(n=_a.get(t))==null?void 0:n.get(e)}const jT=Ju("__proto__,__v_isRef,__isVue"),lm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ci)),$T=sh(),HT=sh(!1,!0),qT=sh(!0),td=WT();function WT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)At(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){js();const r=fe(this)[e].apply(this,n);return $s(),r}}),t}function KT(t){const e=fe(this);return At(e,"has",t),e.hasOwnProperty(t)}function sh(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?cw:pm:e?dm:fm).get(r))return r;const o=G(r);if(!t){if(o&&de(td,s))return Reflect.get(td,s,i);if(s==="hasOwnProperty")return KT}const a=Reflect.get(r,s,i);return(Ci(s)?lm.has(s):jT(s))||(t||At(r,"get",s),e)?a:Oe(a)?o&&eh(s)?a:a.value:we(a)?t?gm(a):kn(a):a}}const zT=um(),GT=um(!0);function um(t=!1){return function(n,r,s,i){let o=n[r];if(Fr(o)&&Oe(o)&&!Oe(s))return!1;if(!t&&(!ya(s)&&!Fr(s)&&(o=fe(o),s=fe(s)),!G(n)&&Oe(o)&&!Oe(s)))return o.value=s,!0;const a=G(n)&&eh(r)?Number(r)<n.length:de(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(a?Si(s,o)&&Sn(n,"set",r,s):Sn(n,"add",r,s)),c}}function QT(t,e){const n=de(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Sn(t,"delete",e,void 0),r}function JT(t,e){const n=Reflect.has(t,e);return(!Ci(e)||!lm.has(e))&&At(t,"has",e),n}function YT(t){return At(t,"iterate",G(t)?"length":Or),Reflect.ownKeys(t)}const hm={get:$T,set:zT,deleteProperty:QT,has:JT,ownKeys:YT},XT={get:qT,set(t,e){return!0},deleteProperty(t,e){return!0}},ZT=He({},hm,{get:HT,set:GT}),ih=t=>t,ic=t=>Reflect.getPrototypeOf(t);function xo(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&At(s,"get",e),At(s,"get",i));const{has:o}=ic(s),a=r?ih:n?ch:ki;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Lo(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&At(r,"has",t),At(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Fo(t,e=!1){return t=t.__v_raw,!e&&At(fe(t),"iterate",Or),Reflect.get(t,"size",t)}function nd(t){t=fe(t);const e=fe(this);return ic(e).has.call(e,t)||(e.add(t),Sn(e,"add",t,t)),this}function rd(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=ic(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Si(e,o)&&Sn(n,"set",t,e):Sn(n,"add",t,e),this}function sd(t){const e=fe(this),{has:n,get:r}=ic(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Sn(e,"delete",t,void 0),i}function id(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Sn(t,"clear",void 0,void 0),n}function Uo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?ih:t?ch:ki;return!t&&At(a,"iterate",Or),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Bo(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ih:e?ch:ki;return!e&&At(i,"iterate",c?Hl:Or),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){return t==="delete"?!1:this}}function ew(){const t={get(i){return xo(this,i)},get size(){return Fo(this)},has:Lo,add:nd,set:rd,delete:sd,clear:id,forEach:Uo(!1,!1)},e={get(i){return xo(this,i,!1,!0)},get size(){return Fo(this)},has:Lo,add:nd,set:rd,delete:sd,clear:id,forEach:Uo(!1,!0)},n={get(i){return xo(this,i,!0)},get size(){return Fo(this,!0)},has(i){return Lo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:Uo(!0,!1)},r={get(i){return xo(this,i,!0,!0)},get size(){return Fo(this,!0)},has(i){return Lo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:Uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Bo(i,!1,!1),n[i]=Bo(i,!0,!1),e[i]=Bo(i,!1,!0),r[i]=Bo(i,!0,!0)}),[t,n,e,r]}const[tw,nw,rw,sw]=ew();function oh(t,e){const n=e?t?sw:rw:t?nw:tw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,i)}const iw={get:oh(!1,!1)},ow={get:oh(!1,!0)},aw={get:oh(!0,!1)},fm=new WeakMap,dm=new WeakMap,pm=new WeakMap,cw=new WeakMap;function lw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uw(t){return t.__v_skip||!Object.isExtensible(t)?0:lw(RT(t))}function kn(t){return Fr(t)?t:ah(t,!1,hm,iw,fm)}function ro(t){return ah(t,!1,ZT,ow,dm)}function gm(t){return ah(t,!0,XT,aw,pm)}function ah(t,e,n,r,s){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=uw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function nr(t){return Fr(t)?nr(t.__v_raw):!!(t&&t.__v_isReactive)}function Fr(t){return!!(t&&t.__v_isReadonly)}function ya(t){return!!(t&&t.__v_isShallow)}function mm(t){return nr(t)||Fr(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function oc(t){return ga(t,"__v_skip",!0),t}const ki=t=>we(t)?kn(t):t,ch=t=>we(t)?gm(t):t;function _m(t){tr&&zt&&(t=fe(t),cm(t.dep||(t.dep=nh())))}function ym(t,e){t=fe(t);const n=t.dep;n&&ql(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Ft(t){return vm(t,!1)}function Oi(t){return vm(t,!0)}function vm(t,e){return Oe(t)?t:new hw(t,e)}class hw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:ki(e)}get value(){return _m(this),this._value}set value(e){const n=this.__v_isShallow||ya(e)||Fr(e);e=n?e:fe(e),Si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ki(e),ym(this))}}function ke(t){return Oe(t)?t.value:t}const fw={get:(t,e,n)=>ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Em(t){return nr(t)?t:new Proxy(t,fw)}function dw(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=wm(t,n);return e}class pw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return BT(fe(this._object),this._key)}}class gw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Tm(t,e,n){return Oe(t)?t:re(t)?new gw(t):we(t)&&arguments.length>1?wm(t,e,n):Ft(t)}function wm(t,e,n){const r=t[e];return Oe(r)?r:new pw(t,e,n)}class mw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new rh(e,()=>{this._dirty||(this._dirty=!0,ym(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return _m(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _w(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=Qt):(r=t.get,s=t.set),new mw(r,s,i||!s,n)}function rr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Hs(i,e,n)}return s}function Wt(t,e,n,r){if(re(t)){const i=rr(t,e,n,r);return i&&Zu(i)&&i.catch(o=>{Hs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}function Hs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){rr(c,null,10,[t,o,a]);return}}yw(t,n,s,r)}function yw(t,e,n,r=!0){console.error(t)}let Ni=!1,Wl=!1;const it=[];let sn=0;const gs=[];let wn=null,Ir=0;const Im=Promise.resolve();let lh=null;function pr(t){const e=lh||Im;return t?e.then(this?t.bind(this):t):e}function vw(t){let e=sn+1,n=it.length;for(;e<n;){const r=e+n>>>1;Di(it[r])<t?e=r+1:n=r}return e}function ac(t){(!it.length||!it.includes(t,Ni&&t.allowRecurse?sn+1:sn))&&(t.id==null?it.push(t):it.splice(vw(t.id),0,t),Am())}function Am(){!Ni&&!Wl&&(Wl=!0,lh=Im.then(bm))}function Ew(t){const e=it.indexOf(t);e>sn&&it.splice(e,1)}function Rm(t){G(t)?gs.push(...t):(!wn||!wn.includes(t,t.allowRecurse?Ir+1:Ir))&&gs.push(t),Am()}function od(t,e=Ni?sn+1:0){for(;e<it.length;e++){const n=it[e];n&&n.pre&&(it.splice(e,1),e--,n())}}function va(t){if(gs.length){const e=[...new Set(gs)];if(gs.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((n,r)=>Di(n)-Di(r)),Ir=0;Ir<wn.length;Ir++)wn[Ir]();wn=null,Ir=0}}const Di=t=>t.id==null?1/0:t.id,Tw=(t,e)=>{const n=Di(t)-Di(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bm(t){Wl=!1,Ni=!0,it.sort(Tw);const e=Qt;try{for(sn=0;sn<it.length;sn++){const n=it[sn];n&&n.active!==!1&&rr(n,null,14)}}finally{sn=0,it.length=0,va(),Ni=!1,lh=null,(it.length||gs.length)&&bm()}}function ww(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Re;f&&(s=n.map(d=>Ne(d)?d.trim():d)),h&&(s=n.map(ma))}let a,c=r[a=rl(e)]||r[a=rl(mn(e))];!c&&i&&(c=r[a=rl(Bs(e))]),c&&Wt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wt(l,t,6,s)}}function Pm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=Pm(l,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):He(o,i),we(t)&&r.set(t,o),o)}function cc(t,e){return!t||!to(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Bs(e))||de(t,e))}let Ge=null,lc=null;function Ea(t){const e=Ge;return Ge=t,lc=t&&t.type.__scopeId||null,e}function $V(t){lc=t}function HV(){lc=null}function uh(t,e=Ge,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ed(-1);const i=Ea(e);let o;try{o=t(...s)}finally{Ea(i),r._d&&Ed(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function sl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:_,inheritAttrs:E}=t;let w,y;const g=Ea(t);try{if(n.shapeFlag&4){const v=s||r;w=$t(u.call(v,v,h,i,d,f,_)),y=c}else{const v=e;w=$t(v.length>1?v(i,{attrs:c,slots:a,emit:l}):v(i,null)),y=e.props?c:Aw(c)}}catch(v){pi.length=0,Hs(v,t,1),w=Me(mt)}let I=w;if(y&&E!==!1){const v=Object.keys(y),{shapeFlag:R}=I;v.length&&R&7&&(o&&v.some(Yu)&&(y=Rw(y,o)),I=On(I,y))}return n.dirs&&(I=On(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),w=I,Ea(g),w}function Iw(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(As(r)){if(r.type!==mt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Aw=t=>{let e;for(const n in t)(n==="class"||n==="style"||to(n))&&((e||(e={}))[n]=t[n]);return e},Rw=(t,e)=>{const n={};for(const r in t)(!Yu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ad(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!cc(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ad(r,o,l):!0:!!o;return!1}function ad(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cc(n,i))return!0}return!1}function hh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cm=t=>t.__isSuspense,Pw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?Cw(e,n,r,s,i,o,a,c,l):Sw(t,e,n,r,s,o,a,c,l)},hydrate:kw,create:dh,normalize:Ow},fh=Pw;function Vi(t,e){const n=t.props&&t.props[e];re(n)&&n()}function Cw(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=dh(t,s,r,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(Vi(t,"onPending"),Vi(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),ms(f,t.ssFallback)):f.resolve(!1,!0)}function Sw(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:_,pendingBranch:E,isInFallback:w,isHydrating:y}=h;if(E)h.pendingBranch=f,Gt(f,E)?(c(E,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():w&&(c(_,d,n,r,s,null,i,o,a),ms(h,d))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=E):l(E,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),w?(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(_,d,n,r,s,null,i,o,a),ms(h,d))):_&&Gt(f,_)?(c(_,f,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(_&&Gt(f,_))c(_,f,n,r,s,h,i,o,a),ms(h,f);else if(Vi(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:I}=h;g>0?setTimeout(()=>{h.pendingId===I&&h.fallback(d)},g):g===0&&h.fallback(d)}}function dh(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:_,o:{parentNode:E,remove:w}}=l;let y;const g=Nw(t);g&&e!=null&&e.pendingBranch&&(y=e.pendingId,e.deps++);const I=t.props?Zg(t.props.timeout):void 0,v={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof I=="number"?I:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1,D=!1){const{vnode:V,activeBranch:A,pendingBranch:k,pendingId:B,effects:Q,parentComponent:j,container:ee}=v;if(v.isHydrating)v.isHydrating=!1;else if(!R){const te=A&&k.transition&&k.transition.mode==="out-in";te&&(A.transition.afterLeave=()=>{B===v.pendingId&&f(k,ee,ge,0)});let{anchor:ge}=v;A&&(ge=_(A),d(A,j,v,!0)),te||f(k,ee,ge,0)}ms(v,k),v.pendingBranch=null,v.isInFallback=!1;let q=v.parent,Ie=!1;for(;q;){if(q.pendingBranch){q.effects.push(...Q),Ie=!0;break}q=q.parent}Ie||Rm(Q),v.effects=[],g&&e&&e.pendingBranch&&y===e.pendingId&&(e.deps--,e.deps===0&&!D&&e.resolve()),Vi(V,"onResolve")},fallback(R){if(!v.pendingBranch)return;const{vnode:D,activeBranch:V,parentComponent:A,container:k,isSVG:B}=v;Vi(D,"onFallback");const Q=_(V),j=()=>{v.isInFallback&&(h(null,R,k,Q,A,null,B,a,c),ms(v,R))},ee=R.transition&&R.transition.mode==="out-in";ee&&(V.transition.afterLeave=j),v.isInFallback=!0,d(V,A,null,!0),ee||j()},move(R,D,V){v.activeBranch&&f(v.activeBranch,R,D,V),v.container=R},next(){return v.activeBranch&&_(v.activeBranch)},registerDep(R,D){const V=!!v.pendingBranch;V&&v.deps++;const A=R.vnode.el;R.asyncDep.catch(k=>{Hs(k,R,0)}).then(k=>{if(R.isUnmounted||v.isUnmounted||v.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:B}=R;Yl(R,k,!1),A&&(B.el=A);const Q=!A&&R.subTree.el;D(R,B,E(A||R.subTree.el),A?null:_(R.subTree),v,o,c),Q&&w(Q),hh(R,B.el),V&&--v.deps===0&&v.resolve()})},unmount(R,D){v.isUnmounted=!0,v.activeBranch&&d(v.activeBranch,n,R,D),v.pendingBranch&&d(v.pendingBranch,n,R,D)}};return v}function kw(t,e,n,r,s,i,o,a,c){const l=e.suspense=dh(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Ow(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=cd(r?n.default:n),t.ssFallback=r?cd(n.fallback):Me(mt)}function cd(t){let e;if(re(t)){const n=Is&&t._c;n&&(t._d=!1,on()),t=t(),n&&(t._d=!0,e=qt,Xm())}return G(t)&&(t=Iw(t)),t=$t(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Sm(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Rm(t)}function ms(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,hh(r,s))}function Nw(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function Dw(t,e){return ph(t,null,e)}const jo={};function Nr(t,e,n){return ph(t,e,n)}function ph(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Re){var a;const c=sm()===((a=je)==null?void 0:a.scope)?je:null;let l,u=!1,h=!1;if(Oe(t)?(l=()=>t.value,u=ya(t)):nr(t)?(l=()=>t,r=!0):G(t)?(h=!0,u=t.some(v=>nr(v)||ya(v)),l=()=>t.map(v=>{if(Oe(v))return v.value;if(nr(v))return Rr(v);if(re(v))return rr(v,c,2)})):re(t)?e?l=()=>rr(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Wt(t,c,3,[d])}:l=Qt,e&&r){const v=l;l=()=>Rr(v())}let f,d=v=>{f=g.onStop=()=>{rr(v,c,4)}},_;if(Rs)if(d=Qt,e?n&&Wt(e,c,3,[l(),h?[]:void 0,d]):l(),s==="sync"){const v=TI();_=v.__watcherHandles||(v.__watcherHandles=[])}else return Qt;let E=h?new Array(t.length).fill(jo):jo;const w=()=>{if(g.active)if(e){const v=g.run();(r||u||(h?v.some((R,D)=>Si(R,E[D])):Si(v,E)))&&(f&&f(),Wt(e,c,3,[v,E===jo?void 0:h&&E[0]===jo?[]:E,d]),E=v)}else g.run()};w.allowRecurse=!!e;let y;s==="sync"?y=w:s==="post"?y=()=>Ye(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),y=()=>ac(w));const g=new rh(l,y);e?n?w():E=g.run():s==="post"?Ye(g.run.bind(g),c&&c.suspense):g.run();const I=()=>{g.stop(),c&&c.scope&&Xu(c.scope.effects,g)};return _&&_.push(I),I}function Vw(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?km(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=je;lr(this);const a=ph(s,i.bind(r),n);return o?lr(o):sr(),a}function km(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Rr(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Rr(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Rr(t[n],e);else if(Fs(t)||ds(t))t.forEach(n=>{Rr(n,e)});else if(Xg(t))for(const n in t)Rr(t[n],e);return t}function qV(t,e){const n=Ge;if(n===null)return t;const r=dc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Re]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&Rr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function rn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(js(),Wt(c,n,8,[t.el,a,t,e]),$s())}}function Mw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gh(()=>{t.isMounted=!0}),hc(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],Om={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},xw={name:"BaseTransition",props:Om,setup(t,{slots:e}){const n=zr(),r=Mw();let s;return()=>{const i=e.default&&Dm(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==mt){o=E;break}}const a=fe(t),{mode:c}=a;if(r.isLeaving)return il(o);const l=ld(o);if(!l)return il(o);const u=Kl(l,a,r,n);Ta(l,u);const h=n.subTree,f=h&&ld(h);let d=!1;const{getTransitionKey:_}=l.type;if(_){const E=_();s===void 0?s=E:E!==s&&(s=E,d=!0)}if(f&&f.type!==mt&&(!Gt(l,f)||d)){const E=Kl(f,a,r,n);if(Ta(f,E),c==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},il(o);c==="in-out"&&l.type!==mt&&(E.delayLeave=(w,y,g)=>{const I=Nm(r,f);I[String(f.key)]=f,w._leaveCb=()=>{y(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},Lw=xw;function Nm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Kl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:_,onBeforeAppear:E,onAppear:w,onAfterAppear:y,onAppearCancelled:g}=e,I=String(t.key),v=Nm(n,t),R=(A,k)=>{A&&Wt(A,r,9,k)},D=(A,k)=>{const B=k[1];R(A,k),G(A)?A.every(Q=>Q.length<=1)&&B():A.length<=1&&B()},V={mode:i,persisted:o,beforeEnter(A){let k=a;if(!n.isMounted)if(s)k=E||a;else return;A._leaveCb&&A._leaveCb(!0);const B=v[I];B&&Gt(t,B)&&B.el._leaveCb&&B.el._leaveCb(),R(k,[A])},enter(A){let k=c,B=l,Q=u;if(!n.isMounted)if(s)k=w||c,B=y||l,Q=g||u;else return;let j=!1;const ee=A._enterCb=q=>{j||(j=!0,q?R(Q,[A]):R(B,[A]),V.delayedLeave&&V.delayedLeave(),A._enterCb=void 0)};k?D(k,[A,ee]):ee()},leave(A,k){const B=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return k();R(h,[A]);let Q=!1;const j=A._leaveCb=ee=>{Q||(Q=!0,k(),ee?R(_,[A]):R(d,[A]),A._leaveCb=void 0,v[B]===t&&delete v[B])};v[B]=t,f?D(f,[A,j]):j()},clone(A){return Kl(A,e,n,r)}};return V}function il(t){if(so(t))return t=On(t),t.children=null,t}function ld(t){return so(t)?t.children?t.children[0]:void 0:t}function Ta(t,e){t.shapeFlag&6&&t.component?Ta(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===wt?(o.patchFlag&128&&s++,r=r.concat(Dm(o.children,e,a))):(e||o.type!==mt)&&r.push(a!=null?On(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function gr(t,e){return re(t)?(()=>He({name:t.name},e,{setup:t}))():t}const Dr=t=>!!t.type.__asyncLoader;function ud(t){re(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),a)return new Promise((E,w)=>{a(_,()=>E(h()),()=>w(_),u+1)});throw _}).then(_=>d!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),l=_,_)))};return gr({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=je;if(l)return()=>ol(l,d);const _=g=>{c=null,Hs(g,d,13,!r)};if(o&&d.suspense||Rs)return f().then(g=>()=>ol(g,d)).catch(g=>(_(g),()=>r?Me(r,{error:g}):null));const E=Ft(!1),w=Ft(),y=Ft(!!s);return s&&setTimeout(()=>{y.value=!1},s),i!=null&&setTimeout(()=>{if(!E.value&&!w.value){const g=new Error(`Async component timed out after ${i}ms.`);_(g),w.value=g}},i),f().then(()=>{E.value=!0,d.parent&&so(d.parent.vnode)&&ac(d.parent.update)}).catch(g=>{_(g),w.value=g}),()=>{if(E.value&&l)return ol(l,d);if(w.value&&r)return Me(r,{error:w.value});if(n&&!y.value)return Me(n)}}})}function ol(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Me(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const so=t=>t.type.__isKeepAlive,Fw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=zr(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(g,I,v,R,D)=>{const V=g.component;l(g,I,v,0,a),c(V.vnode,g,I,v,V,a,R,g.slotScopeIds,D),Ye(()=>{V.isDeactivated=!1,V.a&&ps(V.a);const A=g.props&&g.props.onVnodeMounted;A&&Et(A,V.parent,g)},a)},r.deactivate=g=>{const I=g.component;l(g,f,null,1,a),Ye(()=>{I.da&&ps(I.da);const v=g.props&&g.props.onVnodeUnmounted;v&&Et(v,I.parent,g),I.isDeactivated=!0},a)};function d(g){al(g),u(g,n,a,!0)}function _(g){s.forEach((I,v)=>{const R=Xl(I.type);R&&(!g||!g(R))&&E(v)})}function E(g){const I=s.get(g);!o||!Gt(I,o)?d(I):o&&al(o),s.delete(g),i.delete(g)}Nr(()=>[t.include,t.exclude],([g,I])=>{g&&_(v=>ii(g,v)),I&&_(v=>!ii(I,v))},{flush:"post",deep:!0});let w=null;const y=()=>{w!=null&&s.set(w,cl(n.subTree))};return gh(y),Lm(y),hc(()=>{s.forEach(g=>{const{subTree:I,suspense:v}=n,R=cl(I);if(g.type===R.type&&g.key===R.key){al(R);const D=R.component.da;D&&Ye(D,v);return}d(g)})}),()=>{if(w=null,!e.default)return null;const g=e.default(),I=g[0];if(g.length>1)return o=null,g;if(!As(I)||!(I.shapeFlag&4)&&!(I.shapeFlag&128))return o=null,I;let v=cl(I);const R=v.type,D=Xl(Dr(v)?v.type.__asyncResolved||{}:R),{include:V,exclude:A,max:k}=t;if(V&&(!D||!ii(V,D))||A&&D&&ii(A,D))return o=v,I;const B=v.key==null?R:v.key,Q=s.get(B);return v.el&&(v=On(v),I.shapeFlag&128&&(I.ssContent=v)),w=B,Q?(v.el=Q.el,v.component=Q.component,v.transition&&Ta(v,v.transition),v.shapeFlag|=512,i.delete(B),i.add(B)):(i.add(B),k&&i.size>parseInt(k,10)&&E(i.values().next().value)),v.shapeFlag|=256,o=v,Cm(I.type)?I:v}}},Uw=Fw;function ii(t,e){return G(t)?t.some(n=>ii(n,e)):Ne(t)?t.split(",").includes(e):AT(t)?t.test(e):!1}function Vm(t,e){xm(t,"a",e)}function Mm(t,e){xm(t,"da",e)}function xm(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(uc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)so(s.parent.vnode)&&Bw(r,e,n,s),s=s.parent}}function Bw(t,e,n,r){const s=uc(e,t,r,!0);Fm(()=>{Xu(r[e],s)},n)}function al(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function cl(t){return t.shapeFlag&128?t.ssContent:t}function uc(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;js(),lr(n);const a=Wt(e,n,t,o);return sr(),$s(),a});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=je)=>(!Rs||t==="sp")&&uc(t,(...r)=>e(...r),n),jw=Ln("bm"),gh=Ln("m"),$w=Ln("bu"),Lm=Ln("u"),hc=Ln("bum"),Fm=Ln("um"),Hw=Ln("sp"),qw=Ln("rtg"),Ww=Ln("rtc");function Um(t,e=je){uc("ec",t,e)}const mh="components";function WV(t,e){return jm(mh,t,!0,e)||t}const Bm=Symbol.for("v-ndc");function Kw(t){return Ne(t)?jm(mh,t,!1)||t:t||Bm}function jm(t,e,n=!0,r=!1){const s=Ge||je;if(s){const i=s.type;if(t===mh){const a=Xl(i,!1);if(a&&(a===e||a===mn(e)||a===nc(mn(e))))return i}const o=hd(s[t]||i[t],e)||hd(s.appContext[t],e);return!o&&r?i:o}}function hd(t,e){return t&&(t[e]||t[mn(e)]||t[nc(mn(e))])}function KV(t,e,n,r){let s;const i=n&&n[r];if(G(t)||Ne(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function zV(t,e,n={},r,s){if(Ge.isCE||Ge.parent&&Dr(Ge.parent)&&Ge.parent.isCE)return e!=="default"&&(n.name=e),Me("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),on();const o=i&&$m(i(n)),a=In(wt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function $m(t){return t.some(e=>As(e)?!(e.type===mt||e.type===wt&&!$m(e.children)):!0)?t:null}const zl=t=>t?i_(t)?dc(t)||t.proxy:zl(t.parent):null,di=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zl(t.parent),$root:t=>zl(t.root),$emit:t=>t.emit,$options:t=>_h(t),$forceUpdate:t=>t.f||(t.f=()=>ac(t.update)),$nextTick:t=>t.n||(t.n=pr.bind(t.proxy)),$watch:t=>Vw.bind(t)}),ll=(t,e)=>t!==Re&&!t.__isScriptSetup&&de(t,e),zw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ll(r,e))return o[e]=1,r[e];if(s!==Re&&de(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,i[e];if(n!==Re&&de(n,e))return o[e]=4,n[e];Gl&&(o[e]=0)}}const u=di[e];let h,f;if(u)return e==="$attrs"&&At(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&de(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ll(s,e)?(s[e]=n,!0):r!==Re&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&de(t,o)||ll(e,o)||(a=i[0])&&de(a,o)||de(r,o)||de(di,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function GV(){return Gw().slots}function Gw(){const t=zr();return t.setupContext||(t.setupContext=a_(t))}function fd(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function QV(t){const e=zr();let n=t();return sr(),Zu(n)&&(n=n.catch(r=>{throw lr(e),r})),[n,()=>lr(e)]}let Gl=!0;function Qw(t){const e=_h(t),n=t.proxy,r=t.ctx;Gl=!1,e.beforeCreate&&dd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:E,deactivated:w,beforeDestroy:y,beforeUnmount:g,destroyed:I,unmounted:v,render:R,renderTracked:D,renderTriggered:V,errorCaptured:A,serverPrefetch:k,expose:B,inheritAttrs:Q,components:j,directives:ee,filters:q}=e;if(l&&Jw(l,r,null),o)for(const ge in o){const _e=o[ge];re(_e)&&(r[ge]=_e.bind(n))}if(s){const ge=s.call(n,n);we(ge)&&(t.data=kn(ge))}if(Gl=!0,i)for(const ge in i){const _e=i[ge],En=re(_e)?_e.bind(n,n):re(_e.get)?_e.get.bind(n,n):Qt,Un=!re(_e)&&re(_e.set)?_e.set.bind(n):Qt,en=Mt({get:En,set:Un});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>en.value,set:yt=>en.value=yt})}if(a)for(const ge in a)Hm(a[ge],r,n,ge);if(c){const ge=re(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(_e=>{Vr(_e,ge[_e])})}u&&dd(u,t,"c");function te(ge,_e){G(_e)?_e.forEach(En=>ge(En.bind(n))):_e&&ge(_e.bind(n))}if(te(jw,h),te(gh,f),te($w,d),te(Lm,_),te(Vm,E),te(Mm,w),te(Um,A),te(Ww,D),te(qw,V),te(hc,g),te(Fm,v),te(Hw,k),G(B))if(B.length){const ge=t.exposed||(t.exposed={});B.forEach(_e=>{Object.defineProperty(ge,_e,{get:()=>n[_e],set:En=>n[_e]=En})})}else t.exposed||(t.exposed={});R&&t.render===Qt&&(t.render=R),Q!=null&&(t.inheritAttrs=Q),j&&(t.components=j),ee&&(t.directives=ee)}function Jw(t,e,n=Qt){G(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;we(s)?"default"in s?i=at(s.from||r,s.default,!0):i=at(s.from||r):i=at(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function dd(t,e,n){Wt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hm(t,e,n,r){const s=r.includes(".")?km(n,r):()=>n[r];if(Ne(t)){const i=e[t];re(i)&&Nr(s,i)}else if(re(t))Nr(s,t.bind(n));else if(we(t))if(G(t))t.forEach(i=>Hm(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&Nr(s,i,t)}}function _h(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>wa(c,l,o,!0)),wa(c,e,o)),we(e)&&i.set(e,c),c}function wa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wa(t,i,n,!0),s&&s.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Yw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yw={data:pd,props:gd,emits:gd,methods:oi,computed:oi,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:oi,directives:oi,watch:Zw,provide:pd,inject:Xw};function pd(t,e){return e?t?function(){return He(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function Xw(t,e){return oi(Ql(t),Ql(e))}function Ql(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?He(Object.create(null),t,e):e}function gd(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:He(Object.create(null),fd(t),fd(e??{})):e}function Zw(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function qm(){return{app:null,config:{isNativeTag:TT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eI=0;function tI(t,e){return function(r,s=null){re(r)||(r=He({},r)),s!=null&&!we(s)&&(s=null);const i=qm(),o=new Set;let a=!1;const c=i.app={_uid:eI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:c_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Me(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,dc(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Mi=c;try{return l()}finally{Mi=null}}};return c}}let Mi=null;function Vr(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function at(t,e,n=!1){const r=je||Ge;if(r||Mi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Mi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}function yh(){return!!(je||Ge||Mi)}function nI(t,e,n,r=!1){const s={},i={};ga(i,fc,1),t.propsDefaults=Object.create(null),Wm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ro(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function rI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(cc(t.emitsOptions,f))continue;const d=e[f];if(c)if(de(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const _=mn(f);s[_]=Jl(c,a,_,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{Wm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Bs(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Jl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!de(e,h))&&(delete i[h],l=!0)}l&&Sn(t,"set","$attrs")}function Wm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fi(c))continue;const l=e[c];let u;s&&de(s,u=mn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:cc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=fe(n),l=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Jl(s,c,h,l[h],t,!de(l,h))}}return o}function Jl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&re(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(lr(s),r=l[n]=c.call(null,e),sr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Bs(n))&&(r=!0))}return r}function Km(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[f,d]=Km(h,e,!0);He(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&r.set(t,fs),fs;if(G(i))for(let u=0;u<i.length;u++){const h=mn(i[u]);md(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=mn(u);if(md(h)){const f=i[u],d=o[h]=G(f)||re(f)?{type:f}:He({},f);if(d){const _=vd(Boolean,d.type),E=vd(String,d.type);d[0]=_>-1,d[1]=E<0||_<E,(_>-1||de(d,"default"))&&a.push(h)}}}const l=[o,a];return we(t)&&r.set(t,l),l}function md(t){return t[0]!=="$"}function _d(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yd(t,e){return _d(t)===_d(e)}function vd(t,e){return G(e)?e.findIndex(n=>yd(n,t)):re(e)&&yd(e,t)?0:-1}const zm=t=>t[0]==="_"||t==="$stable",vh=t=>G(t)?t.map($t):[$t(t)],sI=(t,e,n)=>{if(e._n)return e;const r=uh((...s)=>vh(e(...s)),n);return r._c=!1,r},Gm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(zm(s))continue;const i=t[s];if(re(i))e[s]=sI(s,i,r);else if(i!=null){const o=vh(i);e[s]=()=>o}}},Qm=(t,e)=>{const n=vh(e);t.slots.default=()=>n},iI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),ga(e,"_",n)):Gm(e,t.slots={})}else t.slots={},e&&Qm(t,e);ga(t.slots,fc,1)},oI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(He(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Gm(e,s)),o=e}else e&&(Qm(t,e),o={default:1});if(i)for(const a in s)!zm(a)&&!(a in o)&&delete s[a]};function Ia(t,e,n,r,s=!1){if(G(t)){t.forEach((f,d)=>Ia(f,e&&(G(e)?e[d]:e),n,r,s));return}if(Dr(r)&&!s)return;const i=r.shapeFlag&4?dc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,de(h,l)&&(h[l]=null)):Oe(l)&&(l.value=null)),re(c))rr(c,a,12,[o,u]);else{const f=Ne(c),d=Oe(c);if(f||d){const _=()=>{if(t.f){const E=f?de(h,c)?h[c]:u[c]:c.value;s?G(E)&&Xu(E,i):G(E)?E.includes(i)||E.push(i):f?(u[c]=[i],de(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,de(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ye(_,n)):_()}}}let jn=!1;const $o=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ho=t=>t.nodeType===8;function aI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(y,g)=>{if(!g.hasChildNodes()){n(null,y,g),va(),g._vnode=y;return}jn=!1,h(g.firstChild,y,null,null,null),va(),g._vnode=y,jn&&console.error("Hydration completed but contains mismatches.")},h=(y,g,I,v,R,D=!1)=>{const V=Ho(y)&&y.data==="[",A=()=>E(y,g,I,v,R,V),{type:k,ref:B,shapeFlag:Q,patchFlag:j}=g;let ee=y.nodeType;g.el=y,j===-2&&(D=!1,g.dynamicChildren=null);let q=null;switch(k){case ws:ee!==3?g.children===""?(c(g.el=s(""),o(y),y),q=y):q=A():(y.data!==g.children&&(jn=!0,y.data=g.children),q=i(y));break;case mt:ee!==8||V?q=A():q=i(y);break;case sa:if(V&&(y=i(y),ee=y.nodeType),ee===1||ee===3){q=y;const Ie=!g.children.length;for(let te=0;te<g.staticCount;te++)Ie&&(g.children+=q.nodeType===1?q.outerHTML:q.data),te===g.staticCount-1&&(g.anchor=q),q=i(q);return V?i(q):q}else A();break;case wt:V?q=_(y,g,I,v,R,D):q=A();break;default:if(Q&1)ee!==1||g.type.toLowerCase()!==y.tagName.toLowerCase()?q=A():q=f(y,g,I,v,R,D);else if(Q&6){g.slotScopeIds=R;const Ie=o(y);if(e(g,Ie,null,I,v,$o(Ie),D),q=V?w(y):i(y),q&&Ho(q)&&q.data==="teleport end"&&(q=i(q)),Dr(g)){let te;V?(te=Me(wt),te.anchor=q?q.previousSibling:Ie.lastChild):te=y.nodeType===3?r_(""):Me("div"),te.el=y,g.component.subTree=te}}else Q&64?ee!==8?q=A():q=g.type.hydrate(y,g,I,v,R,D,t,d):Q&128&&(q=g.type.hydrate(y,g,I,v,$o(o(y)),R,D,t,h))}return B!=null&&Ia(B,null,v,g),q},f=(y,g,I,v,R,D)=>{D=D||!!g.dynamicChildren;const{type:V,props:A,patchFlag:k,shapeFlag:B,dirs:Q}=g,j=V==="input"&&Q||V==="option";if(j||k!==-1){if(Q&&rn(g,null,I,"created"),A)if(j||!D||k&48)for(const q in A)(j&&q.endsWith("value")||to(q)&&!fi(q))&&r(y,q,null,A[q],!1,void 0,I);else A.onClick&&r(y,"onClick",null,A.onClick,!1,void 0,I);let ee;if((ee=A&&A.onVnodeBeforeMount)&&Et(ee,I,g),Q&&rn(g,null,I,"beforeMount"),((ee=A&&A.onVnodeMounted)||Q)&&Sm(()=>{ee&&Et(ee,I,g),Q&&rn(g,null,I,"mounted")},v),B&16&&!(A&&(A.innerHTML||A.textContent))){let q=d(y.firstChild,g,y,I,v,R,D);for(;q;){jn=!0;const Ie=q;q=q.nextSibling,a(Ie)}}else B&8&&y.textContent!==g.children&&(jn=!0,y.textContent=g.children)}return y.nextSibling},d=(y,g,I,v,R,D,V)=>{V=V||!!g.dynamicChildren;const A=g.children,k=A.length;for(let B=0;B<k;B++){const Q=V?A[B]:A[B]=$t(A[B]);if(y)y=h(y,Q,v,R,D,V);else{if(Q.type===ws&&!Q.children)continue;jn=!0,n(null,Q,I,null,v,R,$o(I),D)}}return y},_=(y,g,I,v,R,D)=>{const{slotScopeIds:V}=g;V&&(R=R?R.concat(V):V);const A=o(y),k=d(i(y),g,A,I,v,R,D);return k&&Ho(k)&&k.data==="]"?i(g.anchor=k):(jn=!0,c(g.anchor=l("]"),A,k),k)},E=(y,g,I,v,R,D)=>{if(jn=!0,g.el=null,D){const k=w(y);for(;;){const B=i(y);if(B&&B!==k)a(B);else break}}const V=i(y),A=o(y);return a(y),n(null,g,A,V,I,v,$o(A),R),V},w=y=>{let g=0;for(;y;)if(y=i(y),y&&Ho(y)&&(y.data==="["&&g++,y.data==="]")){if(g===0)return i(y);g--}return y};return[u,h]}const Ye=Sm;function cI(t){return Jm(t)}function lI(t){return Jm(t,aI)}function Jm(t,e){const n=jl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Qt,insertStaticContent:_}=t,E=(p,m,T,b=null,S=null,O=null,$=!1,x=null,L=!!m.dynamicChildren)=>{if(p===m)return;p&&!Gt(p,m)&&(b=P(p),yt(p,S,O,!0),p=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:N,ref:X,shapeFlag:K}=m;switch(N){case ws:w(p,m,T,b);break;case mt:y(p,m,T,b);break;case sa:p==null&&g(m,T,b,$);break;case wt:j(p,m,T,b,S,O,$,x,L);break;default:K&1?R(p,m,T,b,S,O,$,x,L):K&6?ee(p,m,T,b,S,O,$,x,L):(K&64||K&128)&&N.process(p,m,T,b,S,O,$,x,L,F)}X!=null&&S&&Ia(X,p&&p.ref,O,m||p,!m)},w=(p,m,T,b)=>{if(p==null)r(m.el=a(m.children),T,b);else{const S=m.el=p.el;m.children!==p.children&&l(S,m.children)}},y=(p,m,T,b)=>{p==null?r(m.el=c(m.children||""),T,b):m.el=p.el},g=(p,m,T,b)=>{[p.el,p.anchor]=_(p.children,m,T,b,p.el,p.anchor)},I=({el:p,anchor:m},T,b)=>{let S;for(;p&&p!==m;)S=f(p),r(p,T,b),p=S;r(m,T,b)},v=({el:p,anchor:m})=>{let T;for(;p&&p!==m;)T=f(p),s(p),p=T;s(m)},R=(p,m,T,b,S,O,$,x,L)=>{$=$||m.type==="svg",p==null?D(m,T,b,S,O,$,x,L):k(p,m,S,O,$,x,L)},D=(p,m,T,b,S,O,$,x)=>{let L,N;const{type:X,props:K,shapeFlag:Z,transition:ie,dirs:le}=p;if(L=p.el=o(p.type,O,K&&K.is,K),Z&8?u(L,p.children):Z&16&&A(p.children,L,null,b,S,O&&X!=="foreignObject",$,x),le&&rn(p,null,b,"created"),V(L,p,p.scopeId,$,b),K){for(const Te in K)Te!=="value"&&!fi(Te)&&i(L,Te,null,K[Te],O,p.children,b,S,tt);"value"in K&&i(L,"value",null,K.value),(N=K.onVnodeBeforeMount)&&Et(N,b,p)}le&&rn(p,null,b,"beforeMount");const Ae=(!S||S&&!S.pendingBranch)&&ie&&!ie.persisted;Ae&&ie.beforeEnter(L),r(L,m,T),((N=K&&K.onVnodeMounted)||Ae||le)&&Ye(()=>{N&&Et(N,b,p),Ae&&ie.enter(L),le&&rn(p,null,b,"mounted")},S)},V=(p,m,T,b,S)=>{if(T&&d(p,T),b)for(let O=0;O<b.length;O++)d(p,b[O]);if(S){let O=S.subTree;if(m===O){const $=S.vnode;V(p,$,$.scopeId,$.slotScopeIds,S.parent)}}},A=(p,m,T,b,S,O,$,x,L=0)=>{for(let N=L;N<p.length;N++){const X=p[N]=x?Kn(p[N]):$t(p[N]);E(null,X,m,T,b,S,O,$,x)}},k=(p,m,T,b,S,O,$)=>{const x=m.el=p.el;let{patchFlag:L,dynamicChildren:N,dirs:X}=m;L|=p.patchFlag&16;const K=p.props||Re,Z=m.props||Re;let ie;T&&vr(T,!1),(ie=Z.onVnodeBeforeUpdate)&&Et(ie,T,m,p),X&&rn(m,p,T,"beforeUpdate"),T&&vr(T,!0);const le=S&&m.type!=="foreignObject";if(N?B(p.dynamicChildren,N,x,T,b,le,O):$||_e(p,m,x,null,T,b,le,O,!1),L>0){if(L&16)Q(x,m,K,Z,T,b,S);else if(L&2&&K.class!==Z.class&&i(x,"class",null,Z.class,S),L&4&&i(x,"style",K.style,Z.style,S),L&8){const Ae=m.dynamicProps;for(let Te=0;Te<Ae.length;Te++){const Fe=Ae[Te],Kt=K[Fe],ts=Z[Fe];(ts!==Kt||Fe==="value")&&i(x,Fe,Kt,ts,S,p.children,T,b,tt)}}L&1&&p.children!==m.children&&u(x,m.children)}else!$&&N==null&&Q(x,m,K,Z,T,b,S);((ie=Z.onVnodeUpdated)||X)&&Ye(()=>{ie&&Et(ie,T,m,p),X&&rn(m,p,T,"updated")},b)},B=(p,m,T,b,S,O,$)=>{for(let x=0;x<m.length;x++){const L=p[x],N=m[x],X=L.el&&(L.type===wt||!Gt(L,N)||L.shapeFlag&70)?h(L.el):T;E(L,N,X,null,b,S,O,$,!0)}},Q=(p,m,T,b,S,O,$)=>{if(T!==b){if(T!==Re)for(const x in T)!fi(x)&&!(x in b)&&i(p,x,T[x],null,$,m.children,S,O,tt);for(const x in b){if(fi(x))continue;const L=b[x],N=T[x];L!==N&&x!=="value"&&i(p,x,N,L,$,m.children,S,O,tt)}"value"in b&&i(p,"value",T.value,b.value)}},j=(p,m,T,b,S,O,$,x,L)=>{const N=m.el=p?p.el:a(""),X=m.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:ie}=m;ie&&(x=x?x.concat(ie):ie),p==null?(r(N,T,b),r(X,T,b),A(m.children,T,X,S,O,$,x,L)):K>0&&K&64&&Z&&p.dynamicChildren?(B(p.dynamicChildren,Z,T,S,O,$,x),(m.key!=null||S&&m===S.subTree)&&Ym(p,m,!0)):_e(p,m,T,X,S,O,$,x,L)},ee=(p,m,T,b,S,O,$,x,L)=>{m.slotScopeIds=x,p==null?m.shapeFlag&512?S.ctx.activate(m,T,b,$,L):q(m,T,b,S,O,$,L):Ie(p,m,L)},q=(p,m,T,b,S,O,$)=>{const x=p.component=gI(p,b,S);if(so(p)&&(x.ctx.renderer=F),mI(x),x.asyncDep){if(S&&S.registerDep(x,te),!p.el){const L=x.subTree=Me(mt);y(null,L,m,T)}return}te(x,p,m,T,S,O,$)},Ie=(p,m,T)=>{const b=m.component=p.component;if(bw(p,m,T))if(b.asyncDep&&!b.asyncResolved){ge(b,m,T);return}else b.next=m,Ew(b.update),b.update();else m.el=p.el,b.vnode=m},te=(p,m,T,b,S,O,$)=>{const x=()=>{if(p.isMounted){let{next:X,bu:K,u:Z,parent:ie,vnode:le}=p,Ae=X,Te;vr(p,!1),X?(X.el=le.el,ge(p,X,$)):X=le,K&&ps(K),(Te=X.props&&X.props.onVnodeBeforeUpdate)&&Et(Te,ie,X,le),vr(p,!0);const Fe=sl(p),Kt=p.subTree;p.subTree=Fe,E(Kt,Fe,h(Kt.el),P(Kt),p,S,O),X.el=Fe.el,Ae===null&&hh(p,Fe.el),Z&&Ye(Z,S),(Te=X.props&&X.props.onVnodeUpdated)&&Ye(()=>Et(Te,ie,X,le),S)}else{let X;const{el:K,props:Z}=m,{bm:ie,m:le,parent:Ae}=p,Te=Dr(m);if(vr(p,!1),ie&&ps(ie),!Te&&(X=Z&&Z.onVnodeBeforeMount)&&Et(X,Ae,m),vr(p,!0),K&&ye){const Fe=()=>{p.subTree=sl(p),ye(K,p.subTree,p,S,null)};Te?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=sl(p);E(null,Fe,T,b,p,S,O),m.el=Fe.el}if(le&&Ye(le,S),!Te&&(X=Z&&Z.onVnodeMounted)){const Fe=m;Ye(()=>Et(X,Ae,Fe),S)}(m.shapeFlag&256||Ae&&Dr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&Ye(p.a,S),p.isMounted=!0,m=T=b=null}},L=p.effect=new rh(x,()=>ac(N),p.scope),N=p.update=()=>L.run();N.id=p.uid,vr(p,!0),N()},ge=(p,m,T)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,rI(p,m.props,b,T),oI(p,m.children,T),js(),od(),$s()},_e=(p,m,T,b,S,O,$,x,L=!1)=>{const N=p&&p.children,X=p?p.shapeFlag:0,K=m.children,{patchFlag:Z,shapeFlag:ie}=m;if(Z>0){if(Z&128){Un(N,K,T,b,S,O,$,x,L);return}else if(Z&256){En(N,K,T,b,S,O,$,x,L);return}}ie&8?(X&16&&tt(N,S,O),K!==N&&u(T,K)):X&16?ie&16?Un(N,K,T,b,S,O,$,x,L):tt(N,S,O,!0):(X&8&&u(T,""),ie&16&&A(K,T,b,S,O,$,x,L))},En=(p,m,T,b,S,O,$,x,L)=>{p=p||fs,m=m||fs;const N=p.length,X=m.length,K=Math.min(N,X);let Z;for(Z=0;Z<K;Z++){const ie=m[Z]=L?Kn(m[Z]):$t(m[Z]);E(p[Z],ie,T,null,S,O,$,x,L)}N>X?tt(p,S,O,!0,!1,K):A(m,T,b,S,O,$,x,L,K)},Un=(p,m,T,b,S,O,$,x,L)=>{let N=0;const X=m.length;let K=p.length-1,Z=X-1;for(;N<=K&&N<=Z;){const ie=p[N],le=m[N]=L?Kn(m[N]):$t(m[N]);if(Gt(ie,le))E(ie,le,T,null,S,O,$,x,L);else break;N++}for(;N<=K&&N<=Z;){const ie=p[K],le=m[Z]=L?Kn(m[Z]):$t(m[Z]);if(Gt(ie,le))E(ie,le,T,null,S,O,$,x,L);else break;K--,Z--}if(N>K){if(N<=Z){const ie=Z+1,le=ie<X?m[ie].el:b;for(;N<=Z;)E(null,m[N]=L?Kn(m[N]):$t(m[N]),T,le,S,O,$,x,L),N++}}else if(N>Z)for(;N<=K;)yt(p[N],S,O,!0),N++;else{const ie=N,le=N,Ae=new Map;for(N=le;N<=Z;N++){const Rt=m[N]=L?Kn(m[N]):$t(m[N]);Rt.key!=null&&Ae.set(Rt.key,N)}let Te,Fe=0;const Kt=Z-le+1;let ts=!1,Gf=0;const Ys=new Array(Kt);for(N=0;N<Kt;N++)Ys[N]=0;for(N=ie;N<=K;N++){const Rt=p[N];if(Fe>=Kt){yt(Rt,S,O,!0);continue}let tn;if(Rt.key!=null)tn=Ae.get(Rt.key);else for(Te=le;Te<=Z;Te++)if(Ys[Te-le]===0&&Gt(Rt,m[Te])){tn=Te;break}tn===void 0?yt(Rt,S,O,!0):(Ys[tn-le]=N+1,tn>=Gf?Gf=tn:ts=!0,E(Rt,m[tn],T,null,S,O,$,x,L),Fe++)}const Qf=ts?uI(Ys):fs;for(Te=Qf.length-1,N=Kt-1;N>=0;N--){const Rt=le+N,tn=m[Rt],Jf=Rt+1<X?m[Rt+1].el:b;Ys[N]===0?E(null,tn,T,Jf,S,O,$,x,L):ts&&(Te<0||N!==Qf[Te]?en(tn,T,Jf,2):Te--)}}},en=(p,m,T,b,S=null)=>{const{el:O,type:$,transition:x,children:L,shapeFlag:N}=p;if(N&6){en(p.component.subTree,m,T,b);return}if(N&128){p.suspense.move(m,T,b);return}if(N&64){$.move(p,m,T,F);return}if($===wt){r(O,m,T);for(let K=0;K<L.length;K++)en(L[K],m,T,b);r(p.anchor,m,T);return}if($===sa){I(p,m,T);return}if(b!==2&&N&1&&x)if(b===0)x.beforeEnter(O),r(O,m,T),Ye(()=>x.enter(O),S);else{const{leave:K,delayLeave:Z,afterLeave:ie}=x,le=()=>r(O,m,T),Ae=()=>{K(O,()=>{le(),ie&&ie()})};Z?Z(O,le,Ae):Ae()}else r(O,m,T)},yt=(p,m,T,b=!1,S=!1)=>{const{type:O,props:$,ref:x,children:L,dynamicChildren:N,shapeFlag:X,patchFlag:K,dirs:Z}=p;if(x!=null&&Ia(x,null,T,p,!0),X&256){m.ctx.deactivate(p);return}const ie=X&1&&Z,le=!Dr(p);let Ae;if(le&&(Ae=$&&$.onVnodeBeforeUnmount)&&Et(Ae,m,p),X&6)Mo(p.component,T,b);else{if(X&128){p.suspense.unmount(T,b);return}ie&&rn(p,null,m,"beforeUnmount"),X&64?p.type.remove(p,m,T,S,F,b):N&&(O!==wt||K>0&&K&64)?tt(N,m,T,!1,!0):(O===wt&&K&384||!S&&X&16)&&tt(L,m,T),b&&Zr(p)}(le&&(Ae=$&&$.onVnodeUnmounted)||ie)&&Ye(()=>{Ae&&Et(Ae,m,p),ie&&rn(p,null,m,"unmounted")},T)},Zr=p=>{const{type:m,el:T,anchor:b,transition:S}=p;if(m===wt){es(T,b);return}if(m===sa){v(p);return}const O=()=>{s(T),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:$,delayLeave:x}=S,L=()=>$(T,O);x?x(p.el,O,L):L()}else O()},es=(p,m)=>{let T;for(;p!==m;)T=f(p),s(p),p=T;s(m)},Mo=(p,m,T)=>{const{bum:b,scope:S,update:O,subTree:$,um:x}=p;b&&ps(b),S.stop(),O&&(O.active=!1,yt($,p,m,T)),x&&Ye(x,m),Ye(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},tt=(p,m,T,b=!1,S=!1,O=0)=>{for(let $=O;$<p.length;$++)yt(p[$],m,T,b,S)},P=p=>p.shapeFlag&6?P(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),W=(p,m,T)=>{p==null?m._vnode&&yt(m._vnode,null,null,!0):E(m._vnode||null,p,m,null,null,null,T),od(),va(),m._vnode=p},F={p:E,um:yt,m:en,r:Zr,mt:q,mc:A,pc:_e,pbc:B,n:P,o:t};let J,ye;return e&&([J,ye]=e(F)),{render:W,hydrate:J,createApp:tI(W,J)}}function vr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ym(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Kn(s[i]),a.el=o.el),n||Ym(o,a)),a.type===ws&&(a.el=o.el)}}function uI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const hI=t=>t.__isTeleport,wt=Symbol.for("v-fgt"),ws=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),sa=Symbol.for("v-stc"),pi=[];let qt=null;function on(t=!1){pi.push(qt=t?null:[])}function Xm(){pi.pop(),qt=pi[pi.length-1]||null}let Is=1;function Ed(t){Is+=t}function Zm(t){return t.dynamicChildren=Is>0?qt||fs:null,Xm(),Is>0&&qt&&qt.push(t),t}function JV(t,e,n,r,s,i){return Zm(t_(t,e,n,r,s,i,!0))}function In(t,e,n,r,s){return Zm(Me(t,e,n,r,s,!0))}function As(t){return t?t.__v_isVNode===!0:!1}function Gt(t,e){return t.type===e.type&&t.key===e.key}const fc="__vInternal",e_=({key:t})=>t??null,ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||Oe(t)||re(t)?{i:Ge,r:t,k:e,f:!!n}:t:null);function t_(t,e=null,n=null,r=0,s=null,i=t===wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&e_(e),ref:e&&ia(e),scopeId:lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ge};return a?(Eh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Is>0&&!o&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const Me=fI;function fI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Bm)&&(t=mt),As(t)){const a=On(t,e,!0);return n&&Eh(a,n),Is>0&&!i&&qt&&(a.shapeFlag&6?qt[qt.indexOf(t)]=a:qt.push(a)),a.patchFlag|=-2,a}if(vI(t)&&(t=t.__vccOpts),e){e=n_(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=sc(a)),we(c)&&(mm(c)&&!G(c)&&(c=He({},c)),e.style=rc(c))}const o=Ne(t)?1:Cm(t)?128:hI(t)?64:we(t)?4:re(t)?2:0;return t_(t,e,n,r,s,o,i,!0)}function n_(t){return t?mm(t)||fc in t?He({},t):t:null}function On(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?s_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&e_(a),ref:e&&e.ref?n&&s?G(s)?s.concat(ia(e)):[s,ia(e)]:ia(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function r_(t=" ",e=0){return Me(ws,null,t,e)}function YV(t="",e=!1){return e?(on(),In(mt,null,t)):Me(mt,null,t)}function $t(t){return t==null||typeof t=="boolean"?Me(mt):G(t)?Me(wt,null,t.slice()):typeof t=="object"?Kn(t):Me(ws,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function Eh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Eh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(fc in e)?e._ctx=Ge:s===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),r&64?(n=16,e=[r_(e)]):n=8);t.children=e,t.shapeFlag|=n}function s_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sc([e.class,r.class]));else if(s==="style")e.style=rc([e.style,r.style]);else if(to(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Et(t,e,n,r=null){Wt(t,e,7,[n,r])}const dI=qm();let pI=0;function gI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dI,i={uid:pI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Km(r,s),emitsOptions:Pm(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ww.bind(null,i),t.ce&&t.ce(i),i}let je=null;const zr=()=>je||Ge;let Th,ns,Td="__VUE_INSTANCE_SETTERS__";(ns=jl()[Td])||(ns=jl()[Td]=[]),ns.push(t=>je=t),Th=t=>{ns.length>1?ns.forEach(e=>e(t)):ns[0](t)};const lr=t=>{Th(t),t.scope.on()},sr=()=>{je&&je.scope.off(),Th(null)};function i_(t){return t.vnode.shapeFlag&4}let Rs=!1;function mI(t,e=!1){Rs=e;const{props:n,children:r}=t.vnode,s=i_(t);nI(t,n,s,e),iI(t,r);const i=s?_I(t,e):void 0;return Rs=!1,i}function _I(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=oc(new Proxy(t.ctx,zw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?a_(t):null;lr(t),js();const i=rr(r,t,0,[t.props,s]);if($s(),sr(),Zu(i)){if(i.then(sr,sr),e)return i.then(o=>{Yl(t,o,e)}).catch(o=>{Hs(o,t,0)});t.asyncDep=i}else Yl(t,i,e)}else o_(t,e)}function Yl(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Em(e)),o_(t,n)}let wd;function o_(t,e,n){const r=t.type;if(!t.render){if(!e&&wd&&!r.render){const s=r.template||_h(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=He(He({isCustomElement:i,delimiters:a},o),c);r.render=wd(s,l)}}t.render=r.render||Qt}lr(t),js(),Qw(t),$s(),sr()}function yI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}}))}function a_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return yI(t)},slots:t.slots,emit:t.emit,expose:e}}function dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Em(oc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}}))}function Xl(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function vI(t){return re(t)&&"__vccOpts"in t}const Mt=(t,e)=>_w(t,e,Rs);function Ut(t,e,n){const r=arguments.length;return r===2?we(e)&&!G(e)?As(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&As(n)&&(n=[n]),Me(t,e,n))}const EI=Symbol.for("v-scx"),TI=()=>at(EI),c_="3.3.4",wI="http://www.w3.org/2000/svg",Ar=typeof document<"u"?document:null,Id=Ar&&Ar.createElement("template"),II={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ar.createElementNS(wI,t):Ar.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ar.createTextNode(t),createComment:t=>Ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Id.innerHTML=r?`<svg>${t}</svg>`:t;const a=Id.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function AI(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function RI(t,e,n){const r=t.style,s=Ne(n);if(n&&!s){if(e&&!Ne(e))for(const i in e)n[i]==null&&Zl(r,i,"");for(const i in n)Zl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ad=/\s*!important$/;function Zl(t,e,n){if(G(n))n.forEach(r=>Zl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bI(t,e);Ad.test(n)?t.setProperty(Bs(r),n.replace(Ad,""),"important"):t[r]=n}}const Rd=["Webkit","Moz","ms"],ul={};function bI(t,e){const n=ul[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return ul[e]=r;r=nc(r);for(let s=0;s<Rd.length;s++){const i=Rd[s]+r;if(i in t)return ul[e]=i}return e}const bd="http://www.w3.org/1999/xlink";function PI(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bd,e.slice(6,e.length)):t.setAttributeNS(bd,e,n);else{const i=VT(e);n==null||i&&!em(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function CI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=em(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Gn(t,e,n,r){t.addEventListener(e,n,r)}function SI(t,e,n,r){t.removeEventListener(e,n,r)}function kI(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=OI(e);if(r){const l=i[e]=VI(r,s);Gn(t,a,l,c)}else o&&(SI(t,a,o,c),i[e]=void 0)}}const Pd=/(?:Once|Passive|Capture)$/;function OI(t){let e;if(Pd.test(t)){e={};let r;for(;r=t.match(Pd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bs(t.slice(2)),e]}let hl=0;const NI=Promise.resolve(),DI=()=>hl||(NI.then(()=>hl=0),hl=Date.now());function VI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wt(MI(r,n.value),e,5,[r])};return n.value=t,n.attached=DI(),n}function MI(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Cd=/^on[a-z]/,xI=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?AI(t,r,s):e==="style"?RI(t,n,r):to(e)?Yu(e)||kI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LI(t,e,r,s))?CI(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),PI(t,e,r,s))};function LI(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Cd.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cd.test(e)&&Ne(n)?!1:e in t}const $n="transition",Xs="animation",pc=(t,{slots:e})=>Ut(Lw,FI(t),e);pc.displayName="Transition";const l_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pc.props=He({},Om,l_);const Er=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sd=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function FI(t){const e={};for(const j in t)j in l_||(e[j]=t[j]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=UI(s),E=_&&_[0],w=_&&_[1],{onBeforeEnter:y,onEnter:g,onEnterCancelled:I,onLeave:v,onLeaveCancelled:R,onBeforeAppear:D=y,onAppear:V=g,onAppearCancelled:A=I}=e,k=(j,ee,q)=>{Tr(j,ee?u:a),Tr(j,ee?l:o),q&&q()},B=(j,ee)=>{j._isLeaving=!1,Tr(j,h),Tr(j,d),Tr(j,f),ee&&ee()},Q=j=>(ee,q)=>{const Ie=j?V:g,te=()=>k(ee,j,q);Er(Ie,[ee,te]),kd(()=>{Tr(ee,j?c:i),Hn(ee,j?u:a),Sd(Ie)||Od(ee,r,E,te)})};return He(e,{onBeforeEnter(j){Er(y,[j]),Hn(j,i),Hn(j,o)},onBeforeAppear(j){Er(D,[j]),Hn(j,c),Hn(j,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave(j,ee){j._isLeaving=!0;const q=()=>B(j,ee);Hn(j,h),$I(),Hn(j,f),kd(()=>{j._isLeaving&&(Tr(j,h),Hn(j,d),Sd(v)||Od(j,r,w,q))}),Er(v,[j,q])},onEnterCancelled(j){k(j,!1),Er(I,[j])},onAppearCancelled(j){k(j,!0),Er(A,[j])},onLeaveCancelled(j){B(j),Er(R,[j])}})}function UI(t){if(t==null)return null;if(we(t))return[fl(t.enter),fl(t.leave)];{const e=fl(t);return[e,e]}}function fl(t){return Zg(t)}function Hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function kd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let BI=0;function Od(t,e,n,r){const s=t._endId=++BI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=jI(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function jI(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${$n}Delay`),i=r(`${$n}Duration`),o=Nd(s,i),a=r(`${Xs}Delay`),c=r(`${Xs}Duration`),l=Nd(a,c);let u=null,h=0,f=0;e===$n?o>0&&(u=$n,h=o,f=i.length):e===Xs?l>0&&(u=Xs,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?$n:Xs:null,f=u?u===$n?i.length:c.length:0);const d=u===$n&&/\b(transform|all)(,|$)/.test(r(`${$n}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Nd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Dd(n)+Dd(t[r])))}function Dd(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function $I(){return document.body.offsetHeight}const bs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ps(e,n):e};function HI(t){t.target.composing=!0}function Vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const XV={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=bs(s);const i=r||s.props&&s.props.type==="number";Gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ma(a)),t._assign(a)}),n&&Gn(t,"change",()=>{t.value=t.value.trim()}),e||(Gn(t,"compositionstart",HI),Gn(t,"compositionend",Vd),Gn(t,"change",Vd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=bs(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ma(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ZV={deep:!0,created(t,e,n){t._assign=bs(n),Gn(t,"change",()=>{const r=t._modelValue,s=xi(t),i=t.checked,o=t._assign;if(G(r)){const a=th(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Fs(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(u_(t,i))})},mounted:Md,beforeUpdate(t,e,n){t._assign=bs(n),Md(t,e,n)}};function Md(t,{value:e,oldValue:n},r){t._modelValue=e,G(e)?t.checked=th(e,r.props.value)>-1:Fs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=no(e,u_(t,!0)))}const eM={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Fs(e);Gn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ma(xi(o)):xi(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=bs(r)},mounted(t,{value:e}){xd(t,e)},beforeUpdate(t,e,n){t._assign=bs(n)},updated(t,{value:e}){xd(t,e)}};function xd(t,e){const n=t.multiple;if(!(n&&!G(e)&&!Fs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=xi(i);if(n)G(e)?i.selected=th(e,o)>-1:i.selected=e.has(o);else if(no(xi(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xi(t){return"_value"in t?t._value:t.value}function u_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const h_=He({patchProp:xI},II);let gi,Ld=!1;function qI(){return gi||(gi=cI(h_))}function WI(){return gi=Ld?gi:lI(h_),Ld=!0,gi}const KI=(...t)=>{const e=qI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=f_(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},zI=(...t)=>{const e=WI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=f_(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function f_(t){return Ne(t)?document.querySelector(t):t}const GI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,QI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,JI=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function YI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){XI(t);return}return e}function XI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ZI(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t[t.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!JI.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(GI.test(t)||QI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,YI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const e0=/#/g,t0=/&/g,n0=/=/g,wh=/\+/g,r0=/%5e/gi,s0=/%60/gi,i0=/%7c/gi,o0=/%20/gi;function a0(t){return encodeURI(""+t).replace(i0,"|")}function eu(t){return a0(typeof t=="string"?t:JSON.stringify(t)).replace(wh,"%2B").replace(o0,"+").replace(e0,"%23").replace(t0,"%26").replace(s0,"`").replace(r0,"^")}function dl(t){return eu(t).replace(n0,"%3D")}function Aa(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function c0(t){return Aa(t.replace(wh," "))}function l0(t){return Aa(t.replace(wh," "))}function u0(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=c0(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=l0(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function h0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${dl(t)}=${eu(n)}`).join("&"):`${dl(t)}=${eu(e)}`:dl(t)}function f0(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>h0(e,t[e])).filter(Boolean).join("&")}const d0=/^\w{2,}:([/\\]{1,2})/,p0=/^\w{2,}:([/\\]{2})?/,g0=/^([/\\]\s*){2,}[^/\\]/;function io(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?d0.test(t):p0.test(t)||(e.acceptRelative?g0.test(t):!1)}const m0=/\/$|\/\?/;function tu(t="",e=!1){return e?m0.test(t):t.endsWith("/")}function d_(t="",e=!1){if(!e)return(tu(t)?t.slice(0,-1):t)||"/";if(!tu(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function nu(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(tu(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function _0(t=""){return t.startsWith("/")}function Fd(t=""){return _0(t)?t:"/"+t}function y0(t,e){if(g_(e)||io(t))return t;const n=d_(e);return t.startsWith(n)?t:oo(n,t)}function Ud(t,e){if(g_(e))return t;const n=d_(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function p_(t,e){const n=gc(t),r={...u0(n.search),...e};return n.search=f0(r),w0(n)}function g_(t){return!t||t==="/"}function v0(t){return t&&t!=="/"}const E0=/^\.?\//;function oo(t,...e){let n=t||"";for(const r of e.filter(s=>v0(s)))if(n){const s=r.replace(E0,"");n=nu(n)+s}else n=r;return n}function T0(t,e,n={}){return n.trailingSlash||(t=nu(t),e=nu(e)),n.leadingSlash||(t=Fd(t),e=Fd(e)),n.encoding||(t=Aa(t),e=Aa(e)),t===e}function gc(t="",e){if(!io(t,{acceptRelative:!0}))return e?gc(e+t):Bd(t);const[n="",r,s=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",o=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Bd(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:i,pathname:a,search:c,hash:l}}function Bd(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function w0(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class I0 extends Error{constructor(){super(...arguments),this.name="FetchError"}}function A0(t,e,n){let r="";e&&(r=e.message),t&&n?r=`${r} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(r=`${r} (${t.toString()})`);const s=new I0(r);return Object.defineProperty(s,"request",{get(){return t}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),Object.defineProperty(s,"status",{get(){return n&&n.status}}),Object.defineProperty(s,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(s,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(s,"statusMessage",{get(){return n&&n.statusText}}),s}const R0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function jd(t="GET"){return R0.has(t.toUpperCase())}function b0(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const P0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),C0=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function S0(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return C0.test(e)?"json":P0.has(e)||e.startsWith("text/")?"text":"blob"}function k0(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const O0=new Set([408,409,425,429,500,502,503,504]);function m_(t){const{fetch:e,Headers:n}=t;function r(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let l;typeof o.options.retry=="number"?l=o.options.retry:l=jd(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(l>0&&O0.has(u))return s(o.request,{...o.options,retry:l-1})}const c=A0(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(a,c={}){const l={request:a,options:k0(c,t.defaults,n),response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=y0(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=p_(l.request,{...l.options.params,...l.options.query})),l.options.body&&jd(l.options.method)&&b0(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")));try{l.response=await e(l.request,l.options)}catch(h){return l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),await r(l)}const u=(l.options.parseResponse?"json":l.options.responseType)||S0(l.response.headers.get("content-type")||"");if(u==="json"){const h=await l.response.text(),f=l.options.parseResponse||ZI;l.response._data=f(h)}else u==="stream"?l.response._data=l.response.body:l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await r(l)):l.response},i=async function(a,c){return(await s(a,c))._data};return i.raw=s,i.native=e,i.create=(o={})=>m_({...t,defaults:{...t.defaults,...o}}),i}const __=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),N0=__.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),D0=__.Headers,V0=m_({fetch:N0,Headers:D0}),M0=V0,x0=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ra=x0().app,L0=()=>Ra.baseURL,F0=()=>Ra.buildAssetsDir,U0=(...t)=>oo(y_(),F0(),...t),y_=(...t)=>{const e=Ra.cdnURL||Ra.baseURL;return t.length?oo(e,...t):e};globalThis.__buildAssetsURL=U0,globalThis.__publicAssetsURL=y_;function ru(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?ru(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const B0={run:t=>t()},j0=()=>B0,v_=typeof console.createTask<"u"?console.createTask:j0;function $0(t,e){const n=e.shift(),r=v_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function H0(t,e){const n=e.shift(),r=v_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function pl(t,e){for(const n of[...t])n(e)}class q0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ru(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=ru(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith($0,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(H0,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&pl(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&pl(this._after,s)}):(this._after&&s&&pl(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function E_(){return new q0}function W0(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},l=()=>e===o?c:void 0;su.add(l);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{su.delete(l)}}}}function K0(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=W0({...t,...r})),e[n],e[n]}}}const ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},$d="__unctx__",z0=ba[$d]||(ba[$d]=K0()),G0=(t,e={})=>z0.get(t,e),Hd="__unctx_async_handlers__",su=ba[Hd]||(ba[Hd]=new Set);function Pa(t){const e=[];for(const s of su){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const T_=G0("nuxt-app"),Q0="__nuxt_plugin";function J0(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.5"},get vue(){return n.vueApp.version}},payload:kn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>Z0(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=E_(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;qo(n,o,i),qo(n.vueApp.config.globalProperties,o,i)},qo(n.vueApp,"$nuxt",n),qo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Le;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=kn(n.payload.config);return n.provide("config",r),n}async function Y0(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function X0(t,e){const n=[],r=[];for(const s of e){const i=Y0(t,s);s.parallel?n.push(i.catch(o=>r.push(o))):await i}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function Fn(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[Q0]:!0}))}function Z0(t,e,n){const r=()=>n?e(...n):e();return T_.set(t),t.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function Le(){var e;let t;if(yh()&&(t=(e=zr())==null?void 0:e.appContext.app.$nuxt),t=t||T_.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function mc(){return Le().$config}function qo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const eA="modulepreload",tA=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},qd={},nA=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=tA(i,r),i in qd)return;qd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":eA,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},We=(...t)=>nA(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),rA=-1,sA=-2,iA=-3,oA=-4,aA=-5,cA=-6;function lA(t,e){return uA(JSON.parse(t),e)}function uA(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===rA)return;if(i===iA)return NaN;if(i===oA)return 1/0;if(i===aA)return-1/0;if(i===cA)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=e==null?void 0:e[c];if(l)return r[i]=l(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let d=1;d<a.length;d+=1)u.add(s(a[d]));break;case"Map":const h=new Map;r[i]=h;for(let d=1;d<a.length;d+=2)h.set(s(a[d]),s(a[d+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const f=Object.create(null);r[i]=f;for(let d=1;d<a.length;d+=2)f[a[d]]=s(a[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let l=0;l<a.length;l+=1){const u=a[l];u!==sA&&(c[l]=s(u))}}else{const c={};r[i]=c;for(const l in a){const u=a[l];c[l]=s(u)}}return r[i]}return s(0)}function hA(t){return Array.isArray(t)?t:[t]}const fA=["title","script","style","noscript"],oa=["base","meta","link","style","script","noscript"],dA=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],pA=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Wd=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"],gA=typeof window<"u";function w_(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Kd(t){return t._h||w_(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function I_(t,e){const{props:n,tag:r}=t;if(pA.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function zd(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function mA(t,e,n){const r={tag:t,props:{}};return e instanceof Promise&&(e=await e),t==="templateParams"?(r.props=e,r):["title","titleTemplate"].includes(t)?(e&&typeof e=="object"?(r.textContent=e.textContent,e.tagPriority&&(r.tagPriority=e.tagPriority)):r.textContent=e,r):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?r.props.src=e:r.innerHTML=e,r):!1:(e.body&&(e.tagPosition="bodyClose",delete e.body),e.children&&(e.innerHTML=e.children,delete e.children),r.props=await yA({...e}),Object.keys(r.props).filter(s=>Wd.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||fA.includes(r.tag))&&(r[s]=r.props[s]),delete r.props[s]}),Wd.forEach(s=>{!r[s]&&n[s]&&(r[s]=n[s])}),["innerHTML","textContent"].forEach(s=>{if(r.tag==="script"&&typeof r[s]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[s]=JSON.parse(r[s])}catch{r[s]=""}typeof r[s]=="object"&&(r[s]=JSON.stringify(r[s]))}),r.props.class&&(r.props.class=_A(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r)}function _A(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function yA(t){for(const e of Object.keys(t)){const n=e.startsWith("data-");t[e]instanceof Promise&&(t[e]=await t[e]),String(t[e])==="true"?t[e]=n?"true":"":String(t[e])==="false"&&(n?t[e]="false":delete t[e])}return t}const vA=10;async function EA(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&dA.includes(n)).forEach(([n,r])=>{const s=hA(r);e.push(...s.map(i=>mA(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<vA)+r,n))}const Gd={base:-1,title:1},Qd={critical:-8,high:-1,low:2};function Ca(t){let e=10;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props.charset&&(e=-2),t.props["http-equiv"]==="content-security-policy"&&(e=0)):t.tag==="link"&&t.props.rel==="preconnect"?e=2:t.tag in Gd&&(e=Gd[t.tag]),typeof n=="string"&&n in Qd?e+Qd[n]:e)}const TA=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Zs(t,e){if(typeof t!="string")return t;function n(o){if(["s","pageTitle"].includes(o))return e.pageTitle;let a;return o.includes(".")?a=o.split(".").reduce((c,l)=>c&&c[l]||void 0,e):a=e[o],typeof a<"u"?a||"":!1}let r=t;try{r=decodeURI(t)}catch{}(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=n(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())});const i=e.separator;return t.includes(i)&&(t.endsWith(i)&&(t=t.slice(0,-i.length).trim()),t.startsWith(i)&&(t=t.slice(i.length).trim()),t=t.replace(new RegExp(`\\${i}\\s*\\${i}`,"g"),i)),t}function wA(t){const e={tag:t.tagName.toLowerCase(),props:t.getAttributeNames().reduce((n,r)=>({...n,[r]:t.getAttribute(r)}),{}),innerHTML:t.innerHTML};return e._d=I_(e),e}async function IA(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n)return;const r=(await t.resolveTags()).map(h=>({tag:h,id:oa.includes(h.tag)?Kd(h):h.tag,shouldRender:!0})),s={shouldRender:!0,tags:r};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const h of["body","head"]){const f=(u=n==null?void 0:n[h])==null?void 0:u.children;for(const d of[...f].filter(_=>oa.includes(_.tagName.toLowerCase())))i.elMap[d.getAttribute("data-hid")||Kd(wA(d))]=d}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(h,f,d){const _=`${h}:${f}`;i.sideEffects[_]=d,delete i.pendingSideEffects[_]}function a({id:h,$el:f,tag:d}){const _=d.tag.endsWith("Attrs");i.elMap[h]=f,_||(["textContent","innerHTML"].forEach(E=>{d[E]&&d[E]!==f[E]&&(f[E]=d[E])}),o(h,"el",()=>{i.elMap[h].remove(),delete i.elMap[h]})),Object.entries(d.props).forEach(([E,w])=>{w=String(w);const y=`attr:${E}`;if(E==="class")for(const g of(w||"").split(" ").filter(Boolean))_&&o(h,`${y}:${g}`,()=>f.classList.remove(g)),!f.classList.contains(g)&&f.classList.add(g);else f.getAttribute(E)!==w&&f.setAttribute(E,w),_&&o(h,y,()=>f.removeAttribute(E))})}const c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of r){const{tag:f,shouldRender:d,id:_}=h;if(d){if(f.tag==="title"){n.title=f.textContent;continue}h.$el=h.$el||i.elMap[_],h.$el?a(h):oa.includes(f.tag)&&c.push(h)}}for(const h of c){const f=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),a(h),l[f]=l[f]||n.createDocumentFragment(),l[f].appendChild(h.$el)}for(const h of r)await t.hooks.callHook("dom:renderTag",h,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose),Object.values(i.pendingSideEffects).forEach(h=>h()),t._dom=i,await t.hooks.callHook("dom:rendered",{renders:r})}async function AA(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await IA(t,e),delete t._domUpdatePromise,r()}))}function RA(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){AA(i,t)}}}}}const bA=["templateParams","htmlAttrs","bodyAttrs"],PA={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=I_(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&bA.includes(r.tag)&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(Ca(r)>Ca(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(oa.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n}}},CA=t=>({mode:"server",hooks:{"tags:resolve":function(e){const n={};e.tags.filter(r=>["titleTemplate","templateParams"].includes(r.tag)&&r._m==="server").forEach(r=>{n[r.tag]=r.tag==="titleTemplate"?r.textContent:r.props}),Object.keys(n).length&&e.tags.push({tag:"script",innerHTML:JSON.stringify(n),props:{type:"text/javascript",id:"unhead:payload"}})}}}),Jd=["script","link","bodyAttrs"];function Yd(t){const e={},n={};return Object.entries(t.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"?n[r]=s:e[r]=s}),{props:e,eventHandlers:n}}const SA={hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(!Jd.includes(e.tag)||!Object.entries(e.props).find(([n,r])=>n.startsWith("on")&&typeof r=="function")||(e.props=Yd(e).props),e))},"tags:resolve":function(t){t.tags=t.tags.map(e=>{if(!Jd.includes(e.tag))return e;const{props:n,eventHandlers:r}=Yd(e);return Object.keys(r).length&&(e.props=n,e._eventHandlers=r),e})},"dom:renderTag":function(t,e,n){if(!t.tag._eventHandlers)return;const r=t.tag.tag==="bodyAttrs"?e.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([s,i])=>{const o=`${t.tag._d||t.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(n(t.id,o,()=>{}),t.$el.hasAttribute(c))return;const l=i;t.$el.setAttribute(c,""),r.addEventListener(a,l),t.entry&&n(t.id,o,()=>{r.removeEventListener(a,l),t.$el.removeAttribute(c)})})}}},kA=["link","style","script","noscript"],OA={hooks:{"tag:normalise":({tag:t})=>{t.key&&kA.includes(t.tag)&&(t.props["data-hid"]=t._h=w_(t.key))}}},NA={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of TA)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Ca(n)-Ca(r))}}},DA={hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].props:{};s.separator=s.separator||"|",s.pageTitle=Zs(s.pageTitle||n||"",s);for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=Zs(o.textContent,s);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=Zs(o.props.content,s);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=Zs(o.props.href,s);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,c)=>typeof c=="string"?Zs(c,s):c)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}},VA={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=zd(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=zd(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}};let A_;function MA(t={}){const e=xA(t);return e.use(RA()),A_=e}function Xd(t,e){return!t||t==="server"&&e||t==="client"&&!e}function xA(t={}){const e=E_();e.addHooks(t.hooks||{}),t.document=t.document||(gA?document:void 0);const n=!t.document;t.plugins=[PA,CA,SA,OA,NA,DA,VA,...(t==null?void 0:t.plugins)||[]];const r=()=>e.callHook("entries:updated",o);let s=0,i=[];const o={resolvedOptions:t,hooks:e,headEntries(){return i},use(a){const c=typeof a=="function"?a(o):a;Xd(c.mode,n)&&e.addHooks(c.hooks||{})},push(a,c){const l={_i:s++,input:a,...c};return Xd(l.mode,n)&&(i.push(l),r()),{dispose(){i=i.filter(u=>u._i!==l._i),e.callHook("entries:updated",o),r()},patch(u){i=i.map(h=>(h._i===l._i&&(h.input=l.input=u),h)),r()}}},async resolveTags(){const a={tags:[],entries:[...i]};await e.callHook("entries:resolve",a);for(const c of a.entries){const l=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(l):l),c.resolvedInput)for(const u of await EA(c)){const h={tag:u,entry:c,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),a.tags},ssr:n};return t.plugins.forEach(a=>o.use(a)),o.hooks.callHook("init",o),o}function LA(){return A_}const FA=c_.startsWith("3");function UA(t){return typeof t=="function"?t():ke(t)}function Sa(t,e=""){if(t instanceof Promise)return t;const n=UA(t);return!t||!n?n:Array.isArray(n)?n.map(r=>Sa(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,ke(s)]:[r,Sa(s,r)])):n}const BA={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Sa(e.input)}}},R_="usehead";function jA(t){return{install(n){FA&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(R_,t))}}.install}function $A(t={}){t.domDelayFn=t.domDelayFn||(n=>pr(()=>n()));const e=MA(t);return e.use(BA),e.install=jA(e),e}function HA(){return zr()&&at(R_)||LA()}function tM(t,e={}){const n=HA();if(n)return n.ssr?n.push(t,e):qA(n,t,e)}function qA(t,e,n={}){const r=Ft(!1),s=Ft({});Dw(()=>{s.value=r.value?{}:Sa(e)});const i=t.push(s.value,n);return Nr(s,a=>{i.patch(a)}),zr()&&(hc(()=>{i.dispose()}),Mm(()=>{r.value=!0}),Vm(()=>{r.value=!1})),i}const WA={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},KA=!1,iu=!1,zA=!1,GA="__nuxt",QA=!0;function Zd(t,e={}){const n=JA(t,e),r=Le(),s=r._payloadCache=r._payloadCache||{};return s[n]||(s[n]=b_(n).then(i=>i||(delete s[n],null))),s[n]}const ep="json";function JA(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||io(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=e.hash||(e.fresh?Date.now():"");return oo(mc().app.baseURL,n.pathname,r?`_payload.${r}.${ep}`:`_payload.${ep}`)}async function b_(t){try{return QA?P_(await fetch(t).then(e=>e.text())):await We(()=>import(t),[],import.meta.url).then(e=>e.default||e)}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}function YA(){return!!Le().payload.prerenderedAt}let Wo=null;async function XA(){if(Wo)return Wo;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=P_(t.textContent||""),n=t.dataset.src?await b_(t.dataset.src):void 0;return Wo={...e,...n,...window.__NUXT__},Wo}function P_(t){return lA(t,Le()._payloadRevivers)}function ZA(t,e){Le()._payloadRevivers[t]=e}function gl(t){return t!==null&&typeof t=="object"}function ou(t,e,n=".",r){if(!gl(e))return ou(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:gl(o)&&gl(s[i])?s[i]=ou(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function eR(t){return(...e)=>e.reduce((n,r)=>ou(n,r,"",t),{})}const tR=eR();class au extends Error{constructor(e,n={}){super(e,n),this.statusCode=500,this.fatal=!1,this.unhandled=!1,n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:lu(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=C_(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}au.__h3_error__=!0;function cu(t){if(typeof t=="string")return new au(t);if(nR(t))return t;const e=new au(t.message??t.statusMessage??"",{cause:t.cause||t});if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=lu(t.statusCode,e.statusCode):t.status&&(e.statusCode=lu(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;C_(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function nR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const rR=/[^\u0009\u0020-\u007E]/g;function C_(t=""){return t.replace(rR,"")}function lu(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const sR="$s";function iR(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=sR+n,i=Le(),o=Tm(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Oe(a))return i.payload.state[s]=a,a;o.value=a}return o}const S_=Symbol("layout-meta"),ao=Symbol("route"),qs=()=>{var t;return(t=Le())==null?void 0:t.$router},k_=()=>yh()?at(ao,Le()._route):Le()._route;/*! @__NO_SIDE_EFFECTS__ */function nM(t){return t}const oR=()=>{try{if(Le()._processingMiddleware)return!0}catch{return!0}return!1},rM=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:p_(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:c={}}=e.open,l=Object.entries(c).filter(([u,h])=>h!==void 0).map(([u,h])=>`${u.toLowerCase()}=${h}`).join(", ");open(n,a,l)}return Promise.resolve()}const r=(e==null?void 0:e.external)||io(n,{acceptRelative:!0});if(r&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&gc(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const s=oR();if(!r&&s)return t;const i=qs(),o=Le();return r?(e!=null&&e.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},_c=()=>Tm(Le().payload,"error"),us=t=>{const e=Ih(t);try{const n=Le(),r=_c();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},aR=async(t={})=>{const e=Le(),n=_c();e.callHook("app:error:cleared",t),t.redirect&&await qs().replace(t.redirect),n.value=null},cR=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Ih=t=>{const e=cu(t);return e.__nuxt_error=!0,e},tp={NuxtError:t=>Ih(t),EmptyShallowRef:t=>Oi(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),EmptyRef:t=>Ft(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),ShallowRef:t=>Oi(t),ShallowReactive:t=>ro(t),Ref:t=>Ft(t),Reactive:t=>kn(t)},lR=Fn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in tp)ZA(r,tp[r]);Object.assign(t.payload,([e,n]=Pa(()=>t.runWithContext(XA)),e=await e,n(),e)),window.__NUXT__=t.payload}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof window<"u";function uR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const mi=()=>{},Yt=Array.isArray,hR=/\/$/,fR=t=>t.replace(hR,"");function _l(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function dR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function np(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ps(e.matched[r],n.matched[s])&&O_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function O_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gR(t[n],e[n]))return!1;return!0}function gR(t,e){return Yt(t)?rp(t,e):Yt(e)?rp(e,t):t===e}function rp(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Li;(function(t){t.pop="pop",t.push="push"})(Li||(Li={}));var _i;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_i||(_i={}));function _R(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fR(t)}const yR=/^[^#]+#/;function vR(t,e){return t.replace(yR,"#")+e}function ER(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yc=()=>({left:window.pageXOffset,top:window.pageYOffset});function TR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ER(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sp(t,e){return(history.state?history.state.position-e:-1)+t}const uu=new Map;function wR(t,e){uu.set(t,e)}function IR(t){const e=uu.get(t);return uu.delete(t),e}let AR=()=>location.protocol+"//"+location.host;function N_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),np(c,"")}return np(n,t)+r+s}function RR(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=N_(t,location),_=n.value,E=e.value;let w=0;if(f){if(n.value=d,e.value=f,o&&o===_){o=null;return}w=E?f.position-E.position:0}else r(d);s.forEach(y=>{y(n.value,_,{delta:w,type:Li.pop,direction:w?w>0?_i.forward:_i.back:_i.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ve({},f.state,{scroll:yc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function ip(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?yc():null}}function bR(t){const{history:e,location:n}=window,r={value:N_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:AR()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=ve({},e.state,ip(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ve({},s.value,e.state,{forward:c,scroll:yc()});i(u.current,u,!0);const h=ve({},ip(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function D_(t){t=_R(t);const e=bR(t),n=RR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ve({location:"",base:t,go:r,createHref:vR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PR(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),D_(t)}function CR(t){return typeof t=="string"||t&&typeof t=="object"}function V_(t){return typeof t=="string"||typeof t=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},M_=Symbol("");var op;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(op||(op={}));function Cs(t,e){return ve(new Error,{type:t,[M_]:!0},e)}function Tn(t,e){return t instanceof Error&&M_ in t&&(e==null||!!(t.type&e))}const ap="[^/]+?",SR={sensitive:!1,strict:!1,start:!0,end:!0},kR=/[.+*?^${}()[\]/\\]/g;function OR(t,e){const n=ve({},SR,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(kR,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:E,optional:w,regexp:y}=f;i.push({name:_,repeatable:E,optional:w});const g=y||ap;if(g!==ap){d+=10;try{new RegExp(`(${g})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${g}): `+v.message)}}let I=E?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(I=w&&l.length<2?`(?:/${I})`:"/"+I),w&&(I+="?"),s+=I,d+=20,w&&(d+=-8),E&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=i[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:E,optional:w}=d,y=_ in l?l[_]:"";if(Yt(y)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const g=Yt(y)?y.join("/"):y;if(!g)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function NR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DR(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(cp(r))return 1;if(cp(s))return-1}return s.length-r.length}function cp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VR={type:0,value:""},MR=/[a-zA-Z0-9_]/;function xR(t){if(!t)return[[]];if(t==="/")return[[VR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:MR.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function LR(t,e,n){const r=OR(xR(t.path),n),s=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FR(t,e){const n=[],r=new Map;e=hp({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,_=UR(u);_.aliasOf=f&&f.record;const E=hp(e,u),w=[_];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of I)w.push(ve({},_,{components:f?f.record.components:_.components,path:v,aliasOf:f?f.record:_}))}let y,g;for(const I of w){const{path:v}=I;if(h&&v[0]!=="/"){const R=h.record.path,D=R[R.length-1]==="/"?"":"/";I.path=h.record.path+(v&&D+v)}if(y=LR(I,h,E),f?f.alias.push(y):(g=g||y,g!==y&&g.alias.push(y),d&&u.name&&!up(y)&&o(u.name)),_.children){const R=_.children;for(let D=0;D<R.length;D++)i(R[D],y,f&&f.children[D])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return g?()=>{o(g)}:mi}function o(u){if(V_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&DR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!x_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!up(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},_,E;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Cs(1,{location:u});E=f.record.name,d=ve(lp(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&lp(u.params,f.keys.map(g=>g.name))),_=f.stringify(d)}else if("path"in u)_=u.path,f=n.find(g=>g.re.test(_)),f&&(d=f.parse(_),E=f.record.name);else{if(f=h.name?r.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw Cs(1,{location:u,currentLocation:h});E=f.record.name,d=ve({},h.params,u.params),_=f.stringify(d)}const w=[];let y=f;for(;y;)w.unshift(y.record),y=y.parent;return{name:E,path:_,params:d,matched:w,meta:jR(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function lp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function UR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:BR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function BR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function up(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jR(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function hp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function x_(t,e){return e.children.some(n=>n===t||x_(t,n))}const L_=/#/g,$R=/&/g,HR=/\//g,qR=/=/g,WR=/\?/g,F_=/\+/g,KR=/%5B/g,zR=/%5D/g,U_=/%5E/g,GR=/%60/g,B_=/%7B/g,QR=/%7C/g,j_=/%7D/g,JR=/%20/g;function Ah(t){return encodeURI(""+t).replace(QR,"|").replace(KR,"[").replace(zR,"]")}function YR(t){return Ah(t).replace(B_,"{").replace(j_,"}").replace(U_,"^")}function hu(t){return Ah(t).replace(F_,"%2B").replace(JR,"+").replace(L_,"%23").replace($R,"%26").replace(GR,"`").replace(B_,"{").replace(j_,"}").replace(U_,"^")}function XR(t){return hu(t).replace(qR,"%3D")}function ZR(t){return Ah(t).replace(L_,"%23").replace(WR,"%3F")}function eb(t){return t==null?"":ZR(t).replace(HR,"%2F")}function ka(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(F_," "),o=i.indexOf("="),a=ka(o<0?i:i.slice(0,o)),c=o<0?null:ka(i.slice(o+1));if(a in e){let l=e[a];Yt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function fp(t){let e="";for(let n in t){const r=t[n];if(n=XR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&hu(i)):[r&&hu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rb=Symbol(""),dp=Symbol(""),Rh=Symbol(""),bh=Symbol(""),fu=Symbol("");function ei(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Cs(4,{from:n,to:e})):h instanceof Error?a(h):CR(h)?a(Cs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function yl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(sb(a)){const l=(a.__vccOpts||a)[e];l&&s.push(zn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=uR(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&zn(f,n,r,i,o)()}))}}return s}function sb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pp(t){const e=at(Rh),n=at(bh),r=Mt(()=>e.resolve(ke(t.to))),s=Mt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ps.bind(null,u));if(f>-1)return f;const d=gp(c[l-2]);return l>1&&gp(u)===d&&h[h.length-1].path!==d?h.findIndex(Ps.bind(null,c[l-2])):f}),i=Mt(()=>s.value>-1&&cb(n.params,r.value.params)),o=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&O_(n.params,r.value.params));function a(c={}){return ab(c)?e[ke(t.replace)?"replace":"push"](ke(t.to)).catch(mi):Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ib=gr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pp,setup(t,{slots:e}){const n=kn(pp(t)),{options:r}=at(Rh),s=Mt(()=>({[mp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ut("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ob=ib;function ab(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function gp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mp=(t,e,n)=>t??e??n,lb=gr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=at(fu),s=Mt(()=>t.route||r.value),i=at(dp,0),o=Mt(()=>{let l=ke(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Mt(()=>s.value.matched[o.value]);Vr(dp,Mt(()=>o.value+1)),Vr(rb,a),Vr(fu,s);const c=Ft();return Nr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,_])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Ps(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return _p(n.default,{Component:f,route:l});const d=h.props[u],_=d?d===!0?l.params:typeof d=="function"?d(l):d:null,w=Ut(f,ve({},_,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return _p(n.default,{Component:w,route:l})||w}}});function _p(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $_=lb;function ub(t){const e=FR(t.routes,t),n=t.parseQuery||tb,r=t.stringifyQuery||fp,s=t.history,i=ei(),o=ei(),a=ei(),c=Oi(nn);let l=nn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,P=>""+P),h=ml.bind(null,eb),f=ml.bind(null,ka);function d(P,W){let F,J;return V_(P)?(F=e.getRecordMatcher(P),J=W):J=P,e.addRoute(J,F)}function _(P){const W=e.getRecordMatcher(P);W&&e.removeRoute(W)}function E(){return e.getRoutes().map(P=>P.record)}function w(P){return!!e.getRecordMatcher(P)}function y(P,W){if(W=ve({},W||c.value),typeof P=="string"){const T=_l(n,P,W.path),b=e.resolve({path:T.path},W),S=s.createHref(T.fullPath);return ve(T,b,{params:f(b.params),hash:ka(T.hash),redirectedFrom:void 0,href:S})}let F;if("path"in P)F=ve({},P,{path:_l(n,P.path,W.path).path});else{const T=ve({},P.params);for(const b in T)T[b]==null&&delete T[b];F=ve({},P,{params:h(T)}),W.params=h(W.params)}const J=e.resolve(F,W),ye=P.hash||"";J.params=u(f(J.params));const p=dR(r,ve({},P,{hash:YR(ye),path:J.path})),m=s.createHref(p);return ve({fullPath:p,hash:ye,query:r===fp?nb(P.query):P.query||{}},J,{redirectedFrom:void 0,href:m})}function g(P){return typeof P=="string"?_l(n,P,c.value.path):ve({},P)}function I(P,W){if(l!==P)return Cs(8,{from:W,to:P})}function v(P){return V(P)}function R(P){return v(ve(g(P),{replace:!0}))}function D(P){const W=P.matched[P.matched.length-1];if(W&&W.redirect){const{redirect:F}=W;let J=typeof F=="function"?F(P):F;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=g(J):{path:J},J.params={}),ve({query:P.query,hash:P.hash,params:"path"in J?{}:P.params},J)}}function V(P,W){const F=l=y(P),J=c.value,ye=P.state,p=P.force,m=P.replace===!0,T=D(F);if(T)return V(ve(g(T),{state:typeof T=="object"?ve({},ye,T.state):ye,force:p,replace:m}),W||F);const b=F;b.redirectedFrom=W;let S;return!p&&pR(r,J,F)&&(S=Cs(16,{to:b,from:J}),en(J,J,!0,!1)),(S?Promise.resolve(S):B(b,J)).catch(O=>Tn(O)?Tn(O,2)?O:Un(O):_e(O,b,J)).then(O=>{if(O){if(Tn(O,2))return V(ve({replace:m},g(O.to),{state:typeof O.to=="object"?ve({},ye,O.to.state):ye,force:p}),W||b)}else O=j(b,J,!0,m,ye);return Q(b,J,O),O})}function A(P,W){const F=I(P,W);return F?Promise.reject(F):Promise.resolve()}function k(P){const W=es.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(P):P()}function B(P,W){let F;const[J,ye,p]=hb(P,W);F=yl(J.reverse(),"beforeRouteLeave",P,W);for(const T of J)T.leaveGuards.forEach(b=>{F.push(zn(b,P,W))});const m=A.bind(null,P,W);return F.push(m),tt(F).then(()=>{F=[];for(const T of i.list())F.push(zn(T,P,W));return F.push(m),tt(F)}).then(()=>{F=yl(ye,"beforeRouteUpdate",P,W);for(const T of ye)T.updateGuards.forEach(b=>{F.push(zn(b,P,W))});return F.push(m),tt(F)}).then(()=>{F=[];for(const T of p)if(T.beforeEnter)if(Yt(T.beforeEnter))for(const b of T.beforeEnter)F.push(zn(b,P,W));else F.push(zn(T.beforeEnter,P,W));return F.push(m),tt(F)}).then(()=>(P.matched.forEach(T=>T.enterCallbacks={}),F=yl(p,"beforeRouteEnter",P,W),F.push(m),tt(F))).then(()=>{F=[];for(const T of o.list())F.push(zn(T,P,W));return F.push(m),tt(F)}).catch(T=>Tn(T,8)?T:Promise.reject(T))}function Q(P,W,F){a.list().forEach(J=>k(()=>J(P,W,F)))}function j(P,W,F,J,ye){const p=I(P,W);if(p)return p;const m=W===nn,T=os?history.state:{};F&&(J||m?s.replace(P.fullPath,ve({scroll:m&&T&&T.scroll},ye)):s.push(P.fullPath,ye)),c.value=P,en(P,W,F,m),Un()}let ee;function q(){ee||(ee=s.listen((P,W,F)=>{if(!Mo.listening)return;const J=y(P),ye=D(J);if(ye){V(ve(ye,{replace:!0}),J).catch(mi);return}l=J;const p=c.value;os&&wR(sp(p.fullPath,F.delta),yc()),B(J,p).catch(m=>Tn(m,12)?m:Tn(m,2)?(V(m.to,J).then(T=>{Tn(T,20)&&!F.delta&&F.type===Li.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(F.delta&&s.go(-F.delta,!1),_e(m,J,p))).then(m=>{m=m||j(J,p,!1),m&&(F.delta&&!Tn(m,8)?s.go(-F.delta,!1):F.type===Li.pop&&Tn(m,20)&&s.go(-1,!1)),Q(J,p,m)}).catch(mi)}))}let Ie=ei(),te=ei(),ge;function _e(P,W,F){Un(P);const J=te.list();return J.length?J.forEach(ye=>ye(P,W,F)):console.error(P),Promise.reject(P)}function En(){return ge&&c.value!==nn?Promise.resolve():new Promise((P,W)=>{Ie.add([P,W])})}function Un(P){return ge||(ge=!P,q(),Ie.list().forEach(([W,F])=>P?F(P):W()),Ie.reset()),P}function en(P,W,F,J){const{scrollBehavior:ye}=t;if(!os||!ye)return Promise.resolve();const p=!F&&IR(sp(P.fullPath,0))||(J||!F)&&history.state&&history.state.scroll||null;return pr().then(()=>ye(P,W,p)).then(m=>m&&TR(m)).catch(m=>_e(m,P,W))}const yt=P=>s.go(P);let Zr;const es=new Set,Mo={currentRoute:c,listening:!0,addRoute:d,removeRoute:_,hasRoute:w,getRoutes:E,resolve:y,options:t,push:v,replace:R,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:En,install(P){const W=this;P.component("RouterLink",ob),P.component("RouterView",$_),P.config.globalProperties.$router=W,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),os&&!Zr&&c.value===nn&&(Zr=!0,v(s.location).catch(ye=>{}));const F={};for(const ye in nn)Object.defineProperty(F,ye,{get:()=>c.value[ye],enumerable:!0});P.provide(Rh,W),P.provide(bh,ro(F)),P.provide(fu,c);const J=P.unmount;es.add(P),P.unmount=function(){es.delete(P),es.size<1&&(l=nn,ee&&ee(),ee=null,c.value=nn,Zr=!1,ge=!1),J()}}};function tt(P){return P.reduce((W,F)=>W.then(()=>k(F)),Promise.resolve())}return Mo}function hb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ps(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ps(l,c))||s.push(c))}return[n,r,s]}function fb(){return at(bh)}const bt={middleware:["auth"]},Pt={middleware:["auth"]},Ct={middleware:["auth"]},St={middleware:["auth"]},kt={middleware:["auth"],layout:"game"},Ot={middleware:["auth"],layout:"game"},Nt={middleware:["auth"]},Dt={middleware:["notauth"]},yp=[{name:(bt==null?void 0:bt.name)??"admin-games-gameId-edit",path:(bt==null?void 0:bt.path)??"/admin/games/:gameId()/edit",meta:bt||{},alias:(bt==null?void 0:bt.alias)||[],redirect:(bt==null?void 0:bt.redirect)||void 0,component:()=>We(()=>import("./edit.a299e903.js"),["./edit.a299e903.js","./InputText.vue.d807619c.js","./InputTextarea.vue.0bdba224.js","./nuxt-link.d31b60c2.js","./TitleCard.vue.1933d09b.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js"],import.meta.url).then(t=>t.default||t)},{name:"admin-games-gameId-rounds-roundId-edit",path:"/admin/games/:gameId()/rounds/:roundId()-edit",meta:{},alias:[],redirect:void 0,component:()=>We(()=>import("./_roundId_-edit.9196a1de.js"),["./_roundId_-edit.9196a1de.js","./InputText.vue.d807619c.js","./useUploadImage.f6406394.js","./InputTextarea.vue.0bdba224.js","./nuxt-link.d31b60c2.js","./TitleCard.vue.1933d09b.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js"],import.meta.url).then(t=>t.default||t)},{name:"admin-games-gameId-rounds-roundId-questions",path:"/admin/games/:gameId()/rounds/:roundId()-questions",meta:{},alias:[],redirect:void 0,component:()=>We(()=>import("./_roundId_-questions.88fd4735.js"),["./_roundId_-questions.88fd4735.js","./nuxt-link.d31b60c2.js","./TitleCard.vue.1933d09b.js","./InputTextarea.vue.0bdba224.js","./useUploadImage.f6406394.js","./InputText.vue.d807619c.js","./ModalDialog.vue.3f1ff245.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js"],import.meta.url).then(t=>t.default||t)},{name:"admin-games-gameId-rounds",path:"/admin/games/:gameId()/rounds",meta:{},alias:[],redirect:void 0,component:()=>We(()=>import("./index.18b81a44.js"),["./index.18b81a44.js","./nuxt-link.d31b60c2.js","./TitleCard.vue.1933d09b.js","./ModalError.vue.68c0c190.js","./ModalDialog.vue.3f1ff245.js","./useFirebaseDB.5baf7228.js"],import.meta.url).then(t=>t.default||t)},{name:"admin-games-gameId-rounds-new",path:"/admin/games/:gameId()/rounds/new",meta:{},alias:[],redirect:void 0,component:()=>We(()=>import("./new.a70c4b90.js"),["./new.a70c4b90.js","./InputText.vue.d807619c.js","./useUploadImage.f6406394.js","./InputTextarea.vue.0bdba224.js","./nuxt-link.d31b60c2.js","./TitleCard.vue.1933d09b.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js"],import.meta.url).then(t=>t.default||t)},{name:(Pt==null?void 0:Pt.name)??"admin-games-gameId-start",path:(Pt==null?void 0:Pt.path)??"/admin/games/:gameId()/start",meta:Pt||{},alias:(Pt==null?void 0:Pt.alias)||[],redirect:(Pt==null?void 0:Pt.redirect)||void 0,component:()=>We(()=>import("./start.02b22006.js"),["./start.02b22006.js","./InputText.vue.d807619c.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js"],import.meta.url).then(t=>t.default||t)},{name:(Ct==null?void 0:Ct.name)??"admin-games-new",path:(Ct==null?void 0:Ct.path)??"/admin/games/new",meta:Ct||{},alias:(Ct==null?void 0:Ct.alias)||[],redirect:(Ct==null?void 0:Ct.redirect)||void 0,component:()=>We(()=>import("./new.42a09a54.js"),["./new.42a09a54.js","./InputText.vue.d807619c.js","./InputTextarea.vue.0bdba224.js","./nuxt-link.d31b60c2.js","./TitleCard.vue.1933d09b.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js","./auth.af7fb95f.js"],import.meta.url).then(t=>t.default||t)},{name:(St==null?void 0:St.name)??"admin",path:(St==null?void 0:St.path)??"/admin",meta:St||{},alias:(St==null?void 0:St.alias)||[],redirect:(St==null?void 0:St.redirect)||void 0,component:()=>We(()=>import("./index.e646a711.js"),["./index.e646a711.js","./nuxt-link.d31b60c2.js","./TitleCard.vue.1933d09b.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js","./auth.af7fb95f.js"],import.meta.url).then(t=>t.default||t)},{name:(kt==null?void 0:kt.name)??"games-gameId",path:(kt==null?void 0:kt.path)??"/games/:gameId()",meta:kt||{},alias:(kt==null?void 0:kt.alias)||[],redirect:(kt==null?void 0:kt.redirect)||void 0,component:()=>We(()=>import("./index.31b33a09.js"),["./index.31b33a09.js","./InputText.vue.d807619c.js","./useFirebaseDB.5baf7228.js","./auth.af7fb95f.js","./index.b93946bb.css"],import.meta.url).then(t=>t.default||t)},{name:(Ot==null?void 0:Ot.name)??"games-gameId-show",path:(Ot==null?void 0:Ot.path)??"/games/:gameId()/show",meta:Ot||{},alias:(Ot==null?void 0:Ot.alias)||[],redirect:(Ot==null?void 0:Ot.redirect)||void 0,component:()=>We(()=>import("./show.9f91e297.js"),["./show.9f91e297.js","./useFirebaseDB.5baf7228.js","./show.0b33265d.css"],import.meta.url).then(t=>t.default||t)},{name:(Nt==null?void 0:Nt.name)??"index",path:(Nt==null?void 0:Nt.path)??"/",meta:Nt||{},alias:(Nt==null?void 0:Nt.alias)||[],redirect:(Nt==null?void 0:Nt.redirect)||void 0,component:()=>We(()=>import("./index.eccac4fe.js"),["./index.eccac4fe.js","./InputText.vue.d807619c.js","./ModalDialog.vue.3f1ff245.js","./ModalError.vue.68c0c190.js","./useFirebaseDB.5baf7228.js"],import.meta.url).then(t=>t.default||t)},{name:(Dt==null?void 0:Dt.name)??"login",path:(Dt==null?void 0:Dt.path)??"/login",meta:Dt||{},alias:(Dt==null?void 0:Dt.alias)||[],redirect:(Dt==null?void 0:Dt.redirect)||void 0,component:()=>We(()=>import("./login.c53c56b6.js"),["./login.c53c56b6.js","./ModalError.vue.68c0c190.js","./auth.af7fb95f.js","./login.80aa264c.css"],import.meta.url).then(t=>t.default||t)}],db={scrollBehavior(t,e,n){const r=Le();let s=n||void 0;if(!s&&e&&t&&t.meta.scrollToTop!==!1&&pb(e,t)&&(s={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:vp(t.hash)}}const i=a=>!!(a.meta.pageTransition??iu),o=i(e)&&i(t)?"page:transition:finish":"page:finish";return new Promise(a=>{r.hooks.hookOnce(o,async()=>{await pr(),t.hash&&(s={el:t.hash,top:vp(t.hash)}),a(s)})})}};function vp(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function pb(t,e){const n=e.matched.every((r,s)=>{var i,o,a;return((i=r.components)==null?void 0:i.default)===((a=(o=t.matched[s])==null?void 0:o.components)==null?void 0:a.default)});return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const gb={},vt={...gb,...db},mb=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=Le(),s=qs();if(([e,n]=Pa(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Ih({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=s.beforeResolve(l=>{if(a(),l===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>us(o)),window.history.pushState({},"",t.fullPath)});return!1}})},_b=[mb],yi={auth:()=>We(()=>import("./auth.d32d618e.js"),["./auth.d32d618e.js","./auth.af7fb95f.js"],import.meta.url),notauth:()=>We(()=>import("./notauth.6f01012b.js"),["./notauth.6f01012b.js","./auth.af7fb95f.js"],import.meta.url)};function yb(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const l=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(l);return u[0]!=="/"&&(u="/"+u),Ud(u,"")}const a=Ud(r,t),c=!n||T0(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const vb=Fn({name:"nuxt:router",enforce:"pre",async setup(t){var E,w;let e,n,r=mc().app.baseURL;vt.hashMode&&!r.includes("#")&&(r+="#");const s=((E=vt.history)==null?void 0:E.call(vt,r))??(vt.hashMode?PR(r):D_(r)),i=((w=vt.routes)==null?void 0:w.call(vt,yp))??yp;let o;const a=yb(r,window.location,t.payload.path),c=ub({...vt,scrollBehavior:(y,g,I)=>{var v;if(g===nn){o=I;return}return c.options.scrollBehavior=vt.scrollBehavior,(v=vt.scrollBehavior)==null?void 0:v.call(vt,y,nn,o||I)},history:s,routes:i});t.vueApp.use(c);const l=Oi(c.currentRoute.value);c.afterEach((y,g)=>{l.value=g}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=Oi(c.resolve(a)),h=()=>{u.value=c.currentRoute.value};t.hook("page:finish",h),c.afterEach((y,g)=>{var I,v,R,D;((v=(I=y.matched[0])==null?void 0:I.components)==null?void 0:v.default)===((D=(R=g.matched[0])==null?void 0:R.components)==null?void 0:D.default)&&h()});const f={};for(const y in u.value)Object.defineProperty(f,y,{get:()=>u.value[y]});t._route=ro(f),t._middleware=t._middleware||{global:[],named:{}};const d=_c();try{[e,n]=Pa(()=>c.isReady()),await e,n()}catch(y){[e,n]=Pa(()=>t.runWithContext(()=>us(y))),await e,n()}const _=iR("_layout");return c.beforeEach(async(y,g)=>{var I;y.meta=kn(y.meta),t.isHydrating&&_.value&&!Fr(y.meta.layout)&&(y.meta.layout=_.value),t._processingMiddleware=!0;{const v=new Set([..._b,...t._middleware.global]);for(const R of y.matched){const D=R.meta.middleware;if(D)if(Array.isArray(D))for(const V of D)v.add(V);else v.add(D)}for(const R of v){const D=typeof R=="string"?t._middleware.named[R]||await((I=yi[R])==null?void 0:I.call(yi).then(A=>A.default||A)):R;if(!D)throw new Error(`Unknown route middleware: '${R}'.`);const V=await t.runWithContext(()=>D(y,g));if(!t.payload.serverRendered&&t.isHydrating&&(V===!1||V instanceof Error)){const A=V||cu({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>us(A)),!1}if(V||V===!1)return V}}}),c.onError(()=>{delete t._processingMiddleware}),c.afterEach(async(y,g,I)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(aR),y.matched.length===0&&await t.runWithContext(()=>us(cu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${y.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await c.replace({...c.resolve(a),name:void 0,force:!0}),c.options.scrollBehavior=vt.scrollBehavior}catch(y){await t.runWithContext(()=>us(y))}}),{provide:{router:c}}}}),Eb=Fn({name:"nuxt:payload",setup(t){YA()&&(t.hooks.hook("link:prefetch",async e=>{gc(e).protocol||await Zd(e)}),qs().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Zd(e.path);r&&Object.assign(t.static.data,r.data)}))}}),Tb=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let H_;const co=t=>H_=t,q_=Symbol();function du(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var vi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vi||(vi={}));function wb(){const t=rm(!0),e=t.run(()=>Ft({}));let n=[],r=[];const s=oc({install(i){co(s),s._a=i,i.provide(q_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Tb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const W_=()=>{};function Ep(t,e,n,r=W_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&sm()&&LT(s),s}function rs(t,...e){t.slice().forEach(n=>{n(...e)})}const Ib=t=>t();function pu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];du(s)&&du(r)&&t.hasOwnProperty(n)&&!Oe(r)&&!nr(r)?t[n]=pu(s,r):t[n]=r}return t}const Ab=Symbol();function Rb(t){return!du(t)||!t.hasOwnProperty(Ab)}const{assign:Wn}=Object;function bb(t){return!!(Oe(t)&&t.effect)}function Pb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=dw(n.state.value[t]);return Wn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=oc(Mt(()=>{co(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=K_(t,l,e,n,r,!0),c}function K_(t,e,n={},r,s,i){let o;const a=Wn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],d;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),Ft({});let E;function w(A){let k;l=u=!1,typeof A=="function"?(A(r.state.value[t]),k={type:vi.patchFunction,storeId:t,events:d}):(pu(r.state.value[t],A),k={type:vi.patchObject,payload:A,storeId:t,events:d});const B=E=Symbol();pr().then(()=>{E===B&&(l=!0)}),u=!0,rs(h,k,r.state.value[t])}const y=i?function(){const{state:k}=n,B=k?k():{};this.$patch(Q=>{Wn(Q,B)})}:W_;function g(){o.stop(),h=[],f=[],r._s.delete(t)}function I(A,k){return function(){co(r);const B=Array.from(arguments),Q=[],j=[];function ee(te){Q.push(te)}function q(te){j.push(te)}rs(f,{args:B,name:A,store:R,after:ee,onError:q});let Ie;try{Ie=k.apply(this&&this.$id===t?this:R,B)}catch(te){throw rs(j,te),te}return Ie instanceof Promise?Ie.then(te=>(rs(Q,te),te)).catch(te=>(rs(j,te),Promise.reject(te))):(rs(Q,Ie),Ie)}}const v={_p:r,$id:t,$onAction:Ep.bind(null,f),$patch:w,$reset:y,$subscribe(A,k={}){const B=Ep(h,A,k.detached,()=>Q()),Q=o.run(()=>Nr(()=>r.state.value[t],j=>{(k.flush==="sync"?u:l)&&A({storeId:t,type:vi.direct,events:d},j)},Wn({},c,k)));return B},$dispose:g},R=kn(v);r._s.set(t,R);const D=r._a&&r._a.runWithContext||Ib,V=r._e.run(()=>(o=rm(),D(()=>o.run(e))));for(const A in V){const k=V[A];if(Oe(k)&&!bb(k)||nr(k))i||(_&&Rb(k)&&(Oe(k)?k.value=_[A]:pu(k,_[A])),r.state.value[t][A]=k);else if(typeof k=="function"){const B=I(A,k);V[A]=B,a.actions[A]=k}}return Wn(R,V),Wn(fe(R),V),Object.defineProperty(R,"$state",{get:()=>r.state.value[t],set:A=>{w(k=>{Wn(k,A)})}}),r._p.forEach(A=>{Wn(R,o.run(()=>A({store:R,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(R.$state,_),l=!0,u=!0,R}function sM(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=yh();return a=a||(l?at(q_,null):null),a&&co(a),a=H_,a._s.has(r)||(i?K_(r,e,s,a):Pb(r,s,a)),a._s.get(r)}return o.$id=r,o}function Cb(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Le().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Sb=Fn(t=>{const e=wb();return t.vueApp.use(e),co(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),kb=Fn({name:"nuxt:global-components"}),Ob=Fn({name:"nuxt:head",setup(t){const n=$A();n.push(WA),t.vueApp.use(n);{let r=!0;const s=()=>{r=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",i=>{i.shouldRender=!r}),t.hooks.hook("page:start",()=>{r=!0}),t.hooks.hook("page:finish",s),t.hooks.hook("app:suspense:resolve",s)}}}),br={default:()=>We(()=>import("./default.272a67dd.js"),[],import.meta.url).then(t=>t.default||t),game:()=>We(()=>import("./game.e5edc3d9.js"),["./game.e5edc3d9.js","./game.e613b8c4.css"],import.meta.url).then(t=>t.default||t)},Nb=Fn({name:"nuxt:prefetch",setup(t){const e=qs();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof br[r]=="function"&&await br[r]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,c,l;if(io(n))return;const r=e.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let i=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(c=r==null?void 0:r.meta)==null?void 0:c.middleware:[(l=r==null?void 0:r.meta)==null?void 0:l.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof yi[u]=="function"&&yi[u]();s&&typeof br[s]=="function"&&br[s]()})}}),Db=Fn({name:"nuxt:chunk-reload",setup(t){const e=qs(),n=mc(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:s})=>{r.add(s)}),e.onError((s,i)=>{if(r.has(s)){const a="href"in i&&i.href.startsWith("#")?n.app.baseURL+i.href:oo(n.app.baseURL,i.fullPath);Cb({path:a,persistState:!0})}})}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Mb;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xb=function(t){const e=z_(t);return G_.encodeByteArray(e,!0)},Oa=function(t){return xb(t).replace(/\./g,"")},Q_=function(t){try{return G_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=()=>Lb().__FIREBASE_DEFAULTS__,Ub=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q_(t[1]);return e&&JSON.parse(e)},vc=()=>{try{return Fb()||Ub()||Bb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J_=t=>{var e,n;return(n=(e=vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Y_=t=>{const e=J_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X_=()=>{var t;return(t=vc())===null||t===void 0?void 0:t.config},Z_=t=>{var e;return(e=vc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Oa(JSON.stringify(n)),Oa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $b(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function Hb(){var t;const e=(t=vc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function qb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kb(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zb(){try{return typeof indexedDB=="object"}catch{return!1}}function Gb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qb,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function Jb(t,e){return t.replace(Yb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yb=/\{\$([^}]+)}/g;function Xb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tp(i)&&Tp(o)){if(!Na(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zb(t,e){const n=new eP(t,e);return n.subscribe.bind(n)}class eP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vl),s.error===void 0&&(s.error=vl),s.complete===void 0&&(s.complete=vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sP(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rP(t){return t===wr?void 0:t}function sP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const oP={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},aP=pe.INFO,cP={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},lP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ph{constructor(e){this.name=e,this._logLevel=aP,this._logHandler=lP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const uP=(t,e)=>e.some(n=>t instanceof n);let wp,Ip;function hP(){return wp||(wp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fP(){return Ip||(Ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,gu=new WeakMap,ny=new WeakMap,El=new WeakMap,Ch=new WeakMap;function dP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ty.set(n,t)}).catch(()=>{}),Ch.set(e,t),e}function pP(t){if(gu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gu.set(t,e)}let mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gP(t){mu=t(mu)}function mP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tl(this),e,...n);return ny.set(r,e.sort?e.sort():[e]),ir(r)}:fP().includes(t)?function(...e){return t.apply(Tl(this),e),ir(ty.get(this))}:function(...e){return ir(t.apply(Tl(this),e))}}function _P(t){return typeof t=="function"?mP(t):(t instanceof IDBTransaction&&pP(t),uP(t,hP())?new Proxy(t,mu):t)}function ir(t){if(t instanceof IDBRequest)return dP(t);if(El.has(t))return El.get(t);const e=_P(t);return e!==t&&(El.set(t,e),Ch.set(e,t)),e}const Tl=t=>Ch.get(t);function yP(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ir(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ir(o.result),c.oldVersion,c.newVersion,ir(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const vP=["get","getKey","getAll","getAllKeys","count"],EP=["put","add","delete","clear"],wl=new Map;function Ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=EP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vP.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return wl.set(e,i),i}gP(t=>({...t,get:(e,n,r)=>Ap(e,n)||t.get(e,n,r),has:(e,n)=>!!Ap(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _u="@firebase/app",Rp="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Ph("@firebase/app"),IP="@firebase/app-compat",AP="@firebase/analytics-compat",RP="@firebase/analytics",bP="@firebase/app-check-compat",PP="@firebase/app-check",CP="@firebase/auth",SP="@firebase/auth-compat",kP="@firebase/database",OP="@firebase/database-compat",NP="@firebase/functions",DP="@firebase/functions-compat",VP="@firebase/installations",MP="@firebase/installations-compat",xP="@firebase/messaging",LP="@firebase/messaging-compat",FP="@firebase/performance",UP="@firebase/performance-compat",BP="@firebase/remote-config",jP="@firebase/remote-config-compat",$P="@firebase/storage",HP="@firebase/storage-compat",qP="@firebase/firestore",WP="@firebase/firestore-compat",KP="firebase",zP="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="[DEFAULT]",GP={[_u]:"fire-core",[IP]:"fire-core-compat",[RP]:"fire-analytics",[AP]:"fire-analytics-compat",[PP]:"fire-app-check",[bP]:"fire-app-check-compat",[CP]:"fire-auth",[SP]:"fire-auth-compat",[kP]:"fire-rtdb",[OP]:"fire-rtdb-compat",[NP]:"fire-fn",[DP]:"fire-fn-compat",[VP]:"fire-iid",[MP]:"fire-iid-compat",[xP]:"fire-fcm",[LP]:"fire-fcm-compat",[FP]:"fire-perf",[UP]:"fire-perf-compat",[BP]:"fire-rc",[jP]:"fire-rc-compat",[$P]:"fire-gcs",[HP]:"fire-gcs-compat",[qP]:"fire-fst",[WP]:"fire-fst-compat","fire-js":"fire-js",[KP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Map,vu=new Map;function QP(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(vu.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of Da.values())QP(n,t);return!0}function Ec(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},or=new lo("app","Firebase",JP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=zP;function ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw or.create("bad-app-name",{appName:String(s)});if(n||(n=X_()),!n)throw or.create("no-options");const i=Da.get(s);if(i){if(Na(n,i.options)&&Na(r,i.config))return i;throw or.create("duplicate-app",{appName:s})}const o=new iP(s);for(const c of vu.values())o.addComponent(c);const a=new YP(n,r,o);return Da.set(s,a),a}function Sh(t=yu){const e=Da.get(t);if(!e&&t===yu&&X_())return ry();if(!e)throw or.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let s=(r=GP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(a.join(" "));return}Br(new ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="firebase-heartbeat-database",ZP=1,Fi="firebase-heartbeat-store";let Il=null;function sy(){return Il||(Il=yP(XP,ZP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Il}async function eC(t){try{return await(await sy()).transaction(Fi).objectStore(Fi).get(iy(t))}catch(e){if(e instanceof vn)Ur.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function bp(t,e){try{const r=(await sy()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,iy(t)),await r.done}catch(n){if(n instanceof vn)Ur.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function iy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=1024,nC=30*24*60*60*1e3;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=nC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pp(),{heartbeatsToSend:n,unsentEntries:r}=sC(this._heartbeatsCache.heartbeats),s=Oa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Pp(){return new Date().toISOString().substring(0,10)}function sC(t,e=tC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zb()?Gb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cp(t){return Oa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){Br(new ur("platform-logger",e=>new TP(e),"PRIVATE")),Br(new ur("heartbeat",e=>new rC(e),"PRIVATE")),hn(_u,Rp,t),hn(_u,Rp,"esm2017"),hn("fire-js","")}oC("");var aC="firebase",cC="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(aC,cC,"app");function kh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function oy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lC=oy,ay=new lo("auth","Firebase",oy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Ph("@firebase/auth");function uC(t,...e){Va.logLevel<=pe.WARN&&Va.warn(`Auth (${Gr}): ${t}`,...e)}function aa(t,...e){Va.logLevel<=pe.ERROR&&Va.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw Oh(t,...e)}function fn(t,...e){return Oh(t,...e)}function cy(t,e,n){const r=Object.assign(Object.assign({},lC()),{[e]:n});return new lo("auth","Firebase",r).create(e,{appName:t.name})}function hC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_n(t,"argument-error"),cy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ay.create(t,...e)}function ae(t,e,...n){if(!t)throw Oh(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw aa(e),new Error(e)}function Nn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fC(){return Sp()==="http:"||Sp()==="https:"}function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fC()||qb()||"connection"in navigator)?navigator.onLine:!0}function pC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=$b()||Wb()}get(){return dC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new ho(3e4,6e4);function uy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fo(t,e,n,r,s={}){return hy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=uo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ly.fetch()(fy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gC),e);try{const s=new yC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ko(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cy(t,u,l);_n(t,u)}}catch(s){if(s instanceof vn)throw s;_n(t,"network-request-failed",{message:String(s)})}}async function _C(t,e,n,r,s={}){const i=await fo(t,e,n,r,s);return"mfaPendingCredential"in i&&_n(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nh(t.config,s):`${t.config.apiScheme}://${s}`}class yC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),mC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return fo(t,"POST","/v1/accounts:delete",e)}async function EC(t,e){return fo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TC(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=Dh(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ei(Al(s.auth_time)),issuedAtTime:Ei(Al(s.iat)),expirationTime:Ei(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Q_(n);return s?JSON.parse(s):(aa("Failed to decode base64 JWT payload"),null)}catch(s){return aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wC(t){const e=Dh(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&IC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ui(t,EC(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?PC(i.providerUserInfo):[],a=bC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function RC(t){const e=qe(t);await Ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function PC(t){return t.map(e=>{var{providerId:n}=e,r=kh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){const n=await hy(t,{},async()=>{const r=uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ly.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bi;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TC(this,e)}reload(){return RC(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ui(this,vC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:v,isAnonymous:R,providerData:D,stsTokenManager:V}=n;ae(I&&V,e,"internal-error");const A=Bi.fromJSON(this.name,V);ae(typeof I=="string",e,"internal-error"),qn(h,e.name),qn(f,e.name),ae(typeof v=="boolean",e,"internal-error"),ae(typeof R=="boolean",e,"internal-error"),qn(d,e.name),qn(_,e.name),qn(E,e.name),qn(w,e.name),qn(y,e.name),qn(g,e.name);const k=new Mr({uid:I,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:R,photoURL:_,phoneNumber:d,tenantId:E,stsTokenManager:A,createdAt:y,lastLoginAt:g});return D&&Array.isArray(D)&&(k.providerData=D.map(B=>Object.assign({},B))),w&&(k._redirectEventId=w),k}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bi;s.updateFromServerResponse(n);const i=new Mr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ma(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Map;function Rn(t){Nn(t instanceof Function,"Expected a class definition");let e=kp.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}py.type="NONE";const Op=py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=ca("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(Rn(Op),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Rn(Op);const o=ca(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Mr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _s(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _s(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vy(e))return"Blackberry";if(Ey(e))return"Webos";if(Vh(e))return"Safari";if((e.includes("chrome/")||my(e))&&!e.includes("edge/"))return"Chrome";if(yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gy(t=ht()){return/firefox\//i.test(t)}function Vh(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function my(t=ht()){return/crios\//i.test(t)}function _y(t=ht()){return/iemobile/i.test(t)}function yy(t=ht()){return/android/i.test(t)}function vy(t=ht()){return/blackberry/i.test(t)}function Ey(t=ht()){return/webos/i.test(t)}function Tc(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SC(t=ht()){var e;return Tc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kC(){return Kb()&&document.documentMode===10}function Ty(t=ht()){return Tc(t)||yy(t)||Ey(t)||vy(t)||/windows phone/i.test(t)||_y(t)}function OC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e=[]){let n;switch(t){case"Browser":n=Np(ht());break;case"Worker":n=`${Np(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e={}){return fo(t,"GET","/v2/passwordPolicy",uy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=6;class MC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new NC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ma(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DC(this),n=new MC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wc(t){return qe(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zb(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function FC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",LC().appendChild(r)})}function UC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t,e){const n=Ec(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Na(i,e??{}))return s;_n(s,"already-initialized")}return n.initialize({options:e})}function jC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $C(t,e,n){const r=wc(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Iy(e),{host:o,port:a}=HC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||qC()}function Iy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HC(t){const e=Iy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e){return _C(t,"POST","/v1/accounts:signInWithIdp",uy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="http://localhost";class jr extends Ay{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=kh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:WC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends po{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends po{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends po{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mr._fromIdTokenResponse(e,r,s),o=Mp(r);return new Ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mp(r);return new Ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xa(e,n,r,s)}}function Ry(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(t,i,e,r):i})}async function KC(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ui(t,Ry(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Dh(i.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(t.uid===a,r,"user-mismatch"),Ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e,n=!1){const r="signIn",s=await Ry(t,r,e),i=await Ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function QC(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function JC(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}const La="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(La,"1"),this.storage.removeItem(La),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(){const t=ht();return Vh(t)||Tc(t)}const XC=1e3,ZC=10;class Py extends by{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YC()&&OC(),this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Py.type="LOCAL";const eS=Py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends by{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cy.type="SESSION";const Sy=Cy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await tS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=xh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function rS(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function sS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oS(){return ky()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="firebaseLocalStorageDb",aS=1,Fa="firebaseLocalStorage",Ny="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function cS(){const t=indexedDB.deleteDatabase(Oy);return new go(t).toPromise()}function Tu(){const t=indexedDB.open(Oy,aS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:Ny})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await cS(),e(await Tu()))})})}async function xp(t,e,n){const r=Ac(t,!0).put({[Ny]:e,value:n});return new go(r).toPromise()}async function lS(t,e){const n=Ac(t,!1).get(e),r=await new go(n).toPromise();return r===void 0?null:r.value}function Lp(t,e){const n=Ac(t,!0).delete(e);return new go(n).toPromise()}const uS=800,hS=3;class Dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(oS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sS(),!this.activeServiceWorker)return;this.sender=new nS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tu();return await xp(e,La,"1"),await Lp(e,La),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ac(s,!1).getAll();return new go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dy.type="LOCAL";const fS=Dy;new ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t,e){return e?Rn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends Ay{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dS(t){return GC(t.auth,new Lh(t),t.bypassAuthState)}function pS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),zC(n,new Lh(t),t.bypassAuthState)}async function gS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),KC(n,new Lh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dS;case"linkViaPopup":case"linkViaRedirect":return gS;case"reauthViaPopup":case"reauthViaRedirect":return pS;default:_n(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new ho(2e3,1e4);async function iM(t,e,n){const r=wc(t);hC(t,e,Mh);const s=Vy(r,n);return new Pr(r,"signInViaPopup",e,s).executeNotNull()}class Pr extends My{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mS.get())};e()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="pendingRedirect",la=new Map;class yS extends My{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const r=await vS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vS(t,e){const n=wS(e),r=TS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ES(t,e){la.set(t._key(),e)}function TS(t){return Rn(t._redirectPersistence)}function wS(t){return ca(_S,t.config.apiKey,t.name)}async function IS(t,e,n=!1){const r=wc(t),s=Vy(r,e),o=await new yS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=10*60*1e3;class RS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fp(e))}saveEventToCache(e){this.cachedEventUids.add(Fp(e)),this.lastProcessedEventTime=Date.now()}}function Fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e={}){return fo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SS=/^https?/;async function kS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PS(t);for(const n of e)try{if(OS(n))return}catch{}_n(t,"unauthorized-domain")}function OS(t){const e=Eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SS.test(n))return!1;if(CS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new ho(3e4,6e4);function Up(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DS(t){return new Promise((e,n)=>{var r,s,i;function o(){Up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Up(),n(fn(t,"network-request-failed"))},timeout:NS.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const a=UC("iframefcb");return dn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},FC(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ua=null,e})}let ua=null;function VS(t){return ua=ua||DS(t),ua}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=new ho(5e3,15e3),xS="__/auth/iframe",LS="emulator/auth/iframe",FS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},US=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BS(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,LS):`https://${t.config.authDomain}/${xS}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=US.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${uo(r).slice(1)}`}async function jS(t){const e=await VS(t),n=dn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:BS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=dn().setTimeout(()=>{i(o)},MS.get());function c(){dn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HS=500,qS=600,WS="_blank",KS="http://localhost";class Bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zS(t,e,n,r=HS,s=qS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$S),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ht().toLowerCase();n&&(a=my(l)?WS:n),gy(l)&&(e=e||KS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,_])=>`${f}${d}=${_},`,"");if(SC(l)&&a!=="_self")return GS(e||"",a),new Bp(null);const h=window.open(e||"",a,u);ae(h,t,"popup-blocked");try{h.focus()}catch{}return new Bp(h)}function GS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="__/auth/handler",JS="emulator/auth/handler",YS=encodeURIComponent("fac");async function jp(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof Mh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof po){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${YS}=${encodeURIComponent(c)}`:"";return`${XS(t)}?${uo(a).slice(1)}${l}`}function XS({config:t}){return t.emulator?Nh(t,JS):`https://${t.authDomain}/${QS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="webStorageSupport";class ZS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sy,this._completeRedirectFn=IS,this._overrideRedirectResult=ES}async _openPopup(e,n,r,s){var i;Nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jp(e,n,r,Eu(),s);return zS(e,o,xh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jp(e,n,r,Eu(),s);return rS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jS(e),r=new RS(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rl,{type:Rl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rl];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||Vh()||Tc()}}const ek=ZS;var $p="@firebase/auth",Hp="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rk(t){Br(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wy(t)},l=new xC(r,s,i,c);return jC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new ur("auth-internal",e=>{const n=wc(e.getProvider("auth").getImmediate());return(r=>new tk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn($p,Hp,nk(t)),hn($p,Hp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=5*60,ik=Z_("authIdTokenMaxAge")||sk;let qp=null;const ok=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ik)return;const s=n==null?void 0:n.token;qp!==s&&(qp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ak(t=Sh()){const e=Ec(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BC(t,{popupRedirectResolver:ek,persistence:[fS,eS,Sy]}),r=Z_("authTokenSyncURL");if(r){const i=ok(r);JC(n,i,()=>i(n.currentUser)),QC(n,o=>i(o))}const s=J_("auth");return s&&$C(n,`http://${s}`),n}rk("Browser");var ck=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Fh=Fh||{},se=ck||self;function Rc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lk(t){return Object.prototype.hasOwnProperty.call(t,bl)&&t[bl]||(t[bl]=++uk)}var bl="closure_uid_"+(1e9*Math.random()>>>0),uk=0;function hk(t,e,n){return t.call.apply(t.bind,arguments)}function fk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=hk:ct=fk,ct.apply(null,arguments)}function zo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function mr(){this.s=this.s,this.o=this.o}var dk=0;mr.prototype.s=!1;mr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dk!=0)&&lk(this)};mr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ly=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Rc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var pk=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",()=>{},e),se.removeEventListener("test",()=>{},e)}catch{}return t}();function ji(t){return/^[\s\xa0]*$/.test(t)}function bc(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return bc().indexOf(t)!=-1}function Bh(t){return Bh[" "](t),t}Bh[" "]=function(){};function gk(t,e){var n=aO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var mk=an("Opera"),ks=an("Trident")||an("MSIE"),Fy=an("Edge"),wu=Fy||ks,Uy=an("Gecko")&&!(bc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),_k=bc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function By(){var t=se.document;return t?t.documentMode:void 0}var Iu;e:{var Pl="",Cl=function(){var t=bc();if(Uy)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fy)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_k)return/WebKit\/(\S+)/.exec(t);if(mk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cl&&(Pl=Cl?Cl[1]:""),ks){var Sl=By();if(Sl!=null&&Sl>parseFloat(Pl)){Iu=String(Sl);break e}}Iu=Pl}var Au;if(se.document&&ks){var Kp=By();Au=Kp||parseInt(Iu,10)||void 0}else Au=void 0;var yk=Au;function $i(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Uy){e:{try{Bh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$i.$.h.call(this)}}Je($i,lt);var vk={2:"touch",3:"pen",4:"mouse"};$i.prototype.h=function(){$i.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _o="closure_listenable_"+(1e6*Math.random()|0),Ek=0;function Tk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Ek,this.fa=this.ia=!1}function Pc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function jh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function jy(t){const e={};for(const n in t)e[n]=t[n];return e}const zp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $y(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<zp.length;i++)n=zp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Cc(t){this.src=t,this.g={},this.h=0}Cc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=bu(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Tk(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ru(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ly(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Pc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var $h="closure_lm_"+(1e6*Math.random()|0),kl={};function Hy(t,e,n,r,s){if(r&&r.once)return Wy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hy(t,e[i],n,r,s);return null}return n=Wh(n),t&&t[_o]?t.O(e,n,mo(r)?!!r.capture:!!r,s):qy(t,e,n,!1,r,s)}function qy(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=mo(s)?!!s.capture:!!s,a=qh(t);if(a||(t[$h]=a=new Cc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Ik(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(zy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ik(){function t(n){return e.call(t.src,t.listener,n)}const e=Ak;return t}function Wy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wy(t,e[i],n,r,s);return null}return n=Wh(n),t&&t[_o]?t.P(e,n,mo(r)?!!r.capture:!!r,s):qy(t,e,n,!0,r,s)}function Ky(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ky(t,e[i],n,r,s);else r=mo(r)?!!r.capture:!!r,n=Wh(n),t&&t[_o]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=bu(i,n,r,s),-1<n&&(Pc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=qh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bu(e,n,r,s)),(n=-1<t?e[t]:null)&&Hh(n))}function Hh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_o])Ru(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qh(e))?(Ru(n,t),n.h==0&&(n.src=null,e[$h]=null)):Pc(t)}}}function zy(t){return t in kl?kl[t]:kl[t]="on"+t}function Ak(t,e){if(t.fa)t=!0;else{e=new $i(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Hh(t),t=n.call(r,e)}return t}function qh(t){return t=t[$h],t instanceof Cc?t:null}var Ol="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wh(t){return typeof t=="function"?t:(t[Ol]||(t[Ol]=function(e){return t.handleEvent(e)}),t[Ol])}function Qe(){mr.call(this),this.i=new Cc(this),this.S=this,this.J=null}Je(Qe,mr);Qe.prototype[_o]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){Ky(this,t,e,n,r)};function et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var s=e;e=new lt(r,t),$y(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Go(o,r,!0,e)&&s}if(o=e.g=t,s=Go(o,r,!0,e)&&s,s=Go(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Go(o,r,!1,e)&&s}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Pc(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ru(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kh=se.JSON.stringify;class Rk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function bk(){var t=zh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pk{constructor(){this.h=this.g=null}add(e,n){const r=Gy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Gy=new Rk(()=>new Ck,t=>t.reset());class Ck{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function kk(t){se.setTimeout(()=>{throw t},0)}let Hi,qi=!1,zh=new Pk,Qy=()=>{const t=se.Promise.resolve(void 0);Hi=()=>{t.then(Ok)}};var Ok=()=>{for(var t;t=bk();){try{t.h.call(t.g)}catch(n){kk(n)}var e=Gy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qi=!1};function Sc(t,e){Qe.call(this),this.h=t||1,this.g=e||se,this.j=ct(this.qb,this),this.l=Date.now()}Je(Sc,Qe);U=Sc.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Gh(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Sc.$.N.call(this),Gh(this),delete this.g};function Qh(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function Jy(t){t.g=Qh(()=>{t.g=null,t.i&&(t.i=!1,Jy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Nk extends mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jy(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(t){mr.call(this),this.h=t,this.g={}}Je(Wi,mr);var Gp=[];function Yy(t,e,n,r){Array.isArray(n)||(n&&(Gp[0]=n.toString()),n=Gp);for(var s=0;s<n.length;s++){var i=Hy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Xy(t){jh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hh(e)},t),t.g={}}Wi.prototype.N=function(){Wi.$.N.call(this),Xy(this)};Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kc(){this.g=!0}kc.prototype.Ea=function(){this.g=!1};function Dk(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Vk(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function hs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xk(t,n)+(r?" "+r:"")})}function Mk(t,e){t.info(function(){return"TIMEOUT: "+e})}kc.prototype.info=function(){};function xk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kh(n)}catch{return e}}var Qr={},Qp=null;function Oc(){return Qp=Qp||new Qe}Qr.Ta="serverreachability";function Zy(t){lt.call(this,Qr.Ta,t)}Je(Zy,lt);function Ki(t){const e=Oc();et(e,new Zy(e))}Qr.STAT_EVENT="statevent";function ev(t,e){lt.call(this,Qr.STAT_EVENT,t),this.stat=e}Je(ev,lt);function gt(t){const e=Oc();et(e,new ev(e,t))}Qr.Ua="timingevent";function tv(t,e){lt.call(this,Qr.Ua,t),this.size=e}Je(tv,lt);function yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Nc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Jh(){}Jh.prototype.h=null;function Jp(t){return t.h||(t.h=t.i())}function rv(){}var vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yh(){lt.call(this,"d")}Je(Yh,lt);function Xh(){lt.call(this,"c")}Je(Xh,lt);var Pu;function Dc(){}Je(Dc,Jh);Dc.prototype.g=function(){return new XMLHttpRequest};Dc.prototype.i=function(){return{}};Pu=new Dc;function Eo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wi(this),this.P=Lk,t=wu?125:void 0,this.V=new Sc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sv}function sv(){this.i=null,this.g="",this.h=!1}var Lk=45e3,Cu={},Ua={};U=Eo.prototype;U.setTimeout=function(t){this.P=t};function Su(t,e,n){t.L=1,t.v=Mc(Dn(e)),t.s=n,t.S=!0,iv(t,null)}function iv(t,e){t.G=Date.now(),To(t),t.A=Dn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),dv(n.i,"t",r),t.C=0,n=t.l.J,t.h=new sv,t.g=Vv(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Nk(ct(t.Pa,t,t.g),t.O)),Yy(t.U,t.g,"readystatechange",t.nb),e=t.I?jy(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ki(),Dk(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&cn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=cn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||wu||this.g&&(this.h.h||this.g.ja()||eg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ki(3):Ki(2)),Vc(this);var n=this.g.da();this.ca=n;t:if(ov(this)){var r=eg(this.g);t="";var s=r.length,i=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ti(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Vk(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ji(a)){var l=a;break t}}l=null}if(n=l)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ku(this,n);else{this.i=!1,this.o=3,gt(12),Cr(this),Ti(this);break e}}this.S?(av(this,u,o),wu&&this.i&&u==3&&(Yy(this.U,this.V,"tick",this.mb),this.V.start())):(hs(this.j,this.m,o,null),ku(this,o)),u==4&&Cr(this),this.i&&!this.J&&(u==4?kv(this.l,this):(this.i=!1,To(this)))}else sO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),Cr(this),Ti(this)}}}catch{}finally{}};function ov(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function av(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Fk(t,n),s==Ua){e==4&&(t.o=4,gt(14),r=!1),hs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Cu){t.o=4,gt(15),hs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else hs(t.j,t.m,s,null),ku(t,s);ov(t)&&s!=Ua&&s!=Cu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sf(e),e.M=!0,gt(11))):(hs(t.j,t.m,n,"[Invalid Chunked Response]"),Cr(t),Ti(t))}U.mb=function(){if(this.g){var t=cn(this.g),e=this.g.ja();this.C<e.length&&(Vc(this),av(this,t,e),this.i&&t!=4&&To(this))}};function Fk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ua:(n=Number(e.substring(n,r)),isNaN(n)?Cu:(r+=1,r+n>e.length?Ua:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,Cr(this)};function To(t){t.Y=Date.now()+t.P,cv(t,t.P)}function cv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=yo(ct(t.lb,t),e)}function Vc(t){t.B&&(se.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Mk(this.j,this.A),this.L!=2&&(Ki(),gt(17)),Cr(this),this.o=2,Ti(this)):cv(this,this.Y-t)};function Ti(t){t.l.H==0||t.J||kv(t.l,t)}function Cr(t){Vc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gh(t.V),Xy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ku(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ou(n.i,t))){if(!t.K&&Ou(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$a(n),Fc(n);else break e;rf(n),gt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=yo(ct(n.ib,n),6e3));if(1>=mv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Sr(n,11)}else if((t.K||n.g==t)&&$a(n),!ji(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const _=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zh(i,i.h),i.h=null))}if(r.F){const E=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,be(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Dv(r,r.J?r.pa:null,r.Y),o.K){_v(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Vc(a),To(a)),r.g=o}else Cv(r);0<n.j.length&&Uc(n)}else l[0]!="stop"&&l[0]!="close"||Sr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Sr(n,7):nf(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ki(4)}catch{}}function Uk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Rc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Bk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Rc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function lv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Rc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Bk(t),r=Uk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var uv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function xr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xr){this.h=t.h,Ba(this,t.j),this.s=t.s,this.g=t.g,ja(this,t.m),this.l=t.l;var e=t.i,n=new zi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yp(this,n),this.o=t.o}else t&&(e=String(t).match(uv))?(this.h=!1,Ba(this,e[1]||"",!0),this.s=ai(e[2]||""),this.g=ai(e[3]||"",!0),ja(this,e[4]),this.l=ai(e[5]||"",!0),Yp(this,e[6]||"",!0),this.o=ai(e[7]||"")):(this.h=!1,this.i=new zi(null,this.h))}xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ci(e,Xp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ci(e,Xp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ci(n,n.charAt(0)=="/"?qk:Hk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ci(n,Kk)),t.join("")};function Dn(t){return new xr(t)}function Ba(t,e,n){t.j=n?ai(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ja(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yp(t,e,n){e instanceof zi?(t.i=e,zk(t.i,t.h)):(n||(e=ci(e,Wk)),t.i=new zi(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Mc(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ai(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ci(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$k),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $k(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xp=/[#\/\?@]/g,Hk=/[#\?:]/g,qk=/[#\?]/g,Wk=/[#\?@]/g,Kk=/#/g;function zi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _r(t){t.g||(t.g=new Map,t.h=0,t.i&&jk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=zi.prototype;U.add=function(t,e){_r(this),this.i=null,t=Ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hv(t,e){_r(t),e=Ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fv(t,e){return _r(t),e=Ws(t,e),t.g.has(e)}U.forEach=function(t,e){_r(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};U.ta=function(){_r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};U.Z=function(t){_r(this);let e=[];if(typeof t=="string")fv(this,t)&&(e=e.concat(this.g.get(Ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return _r(this),this.i=null,t=Ws(this,t),fv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function dv(t,e,n){hv(t,e),0<n.length&&(t.i=null,t.g.set(Ws(t,e),Uh(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zk(t,e){e&&!t.j&&(_r(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(hv(this,r),dv(this,s,n))},t)),t.j=e}var Gk=class{constructor(t,e){this.g=t,this.map=e}};function pv(t){this.l=t||Qk,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qk=10;function gv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mv(t){return t.h?1:t.g?t.g.size:0}function Ou(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zh(t,e){t.g?t.g.add(e):t.h=e}function _v(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pv.prototype.cancel=function(){if(this.i=yv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Uh(t.i)}var Jk=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function Yk(){this.g=new Jk}function Xk(t,e,n){const r=n||"";try{lv(t,function(s,i){let o=s;mo(s)&&(o=Kh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Zk(t,e){const n=new kc;if(se.Image){const r=new Image;r.onload=zo(Qo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=zo(Qo,n,r,"TestLoadImage: error",!1,e),r.onabort=zo(Qo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=zo(Qo,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Qo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function wo(t){this.l=t.fc||null,this.j=t.ob||!1}Je(wo,Jh);wo.prototype.g=function(){return new xc(this.l,this.j)};wo.prototype.i=function(t){return function(){return t}}({});function xc(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ef,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(xc,Qe);var ef=0;U=xc.prototype;U.open=function(t,e){if(this.readyState!=ef)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gi(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=ef};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vv(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vv(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Io(this):Gi(this),this.readyState==3&&vv(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Io(this))};U.Ya=function(t){this.g&&(this.response=t,Io(this))};U.ka=function(){this.g&&Io(this)};function Io(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gi(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eO=se.JSON.parse;function xe(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ev,this.L=this.M=!1}Je(xe,Qe);var Ev="",tO=/^https?$/i,nO=["POST","PUT"];U=xe.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pu.g(),this.C=this.u?Jp(this.u):Jp(Pu),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Zp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=se.FormData&&t instanceof se.FormData,!(0<=Ly(nO,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Iv(this),0<this.B&&((this.L=rO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Qh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Zp(this,i)}};function rO(t){return ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof Fh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Zp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tv(t),Lc(t)}function Tv(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Lc(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lc(this,!0)),xe.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?wv(this):this.kb())};U.kb=function(){wv(this)};function wv(t){if(t.h&&typeof Fh<"u"&&(!t.C[1]||cn(t)!=4||t.da()!=2)){if(t.v&&cn(t)==4)Qh(t.La,0,t);else if(et(t,"readystatechange"),cn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(uv)[1]||null;!s&&se.self&&se.self.location&&(s=se.self.location.protocol.slice(0,-1)),r=!tO.test(s?s.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var i=2<cn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Tv(t)}}finally{Lc(t)}}}}function Lc(t,e){if(t.g){Iv(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function Iv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function cn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eO(e)}};function eg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ev:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function sO(t){const e={};t=(t.g&&2<=cn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ji(t[r]))continue;var n=Sk(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}wk(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Av(t){let e="";return jh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function tf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Av(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rv(t){this.Ga=0,this.j=[],this.l=new kc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ti("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ti("baseRetryDelayMs",5e3,t),this.hb=ti("retryDelaySeedMs",1e4,t),this.eb=ti("forwardChannelMaxRetries",2,t),this.xa=ti("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new pv(t&&t.concurrentRequestLimit),this.Ja=new Yk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=Rv.prototype;U.ra=8;U.H=1;function nf(t){if(bv(t),t.H==3){var e=t.W++,n=Dn(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),Ao(t,n),e=new Eo(t,t.l,e),e.L=2,e.v=Mc(Dn(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),To(e)}Nv(t)}function Fc(t){t.g&&(sf(t),t.g.cancel(),t.g=null)}function bv(t){Fc(t),t.u&&(se.clearTimeout(t.u),t.u=null),$a(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Uc(t){if(!gv(t.i)&&!t.m){t.m=!0;var e=t.Na;Hi||Qy(),qi||(Hi(),qi=!0),zh.add(e,t),t.C=0}}function iO(t,e){return mv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=yo(ct(t.Na,t,e),Ov(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Eo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=jy(i),$y(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Pv(this,s,e),n=Dn(this.I),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),Ao(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Av(i)))+"&"+e:this.o&&tf(n,this.o,i)),Zh(this.i,s),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),s.aa=!0,Su(s,n,null)):Su(s,n,e),this.H=2}}else this.H==3&&(t?tg(this,t):this.j.length==0||gv(this.i)||tg(this))};function tg(t,e){var n;e?n=e.m:n=t.W++;const r=Dn(t.I);be(r,"SID",t.K),be(r,"RID",n),be(r,"AID",t.V),Ao(t,r),t.o&&t.s&&tf(r,t.o,t.s),n=new Eo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Pv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zh(t.i,n),Su(n,r,e)}function Ao(t,e){t.na&&jh(t.na,function(n,r){be(e,r,n)}),t.h&&lv({},function(n,r){be(e,r,n)})}function Pv(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ct(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Xk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Cv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Hi||Qy(),qi||(Hi(),qi=!0),zh.add(e,t),t.A=0}}function rf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=yo(ct(t.Ma,t),Ov(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,Sv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=yo(ct(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Fc(this),Sv(this))};function sf(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function Sv(t){t.g=new Eo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dn(t.wa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.V),be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&be(e,"TO",t.qa),be(e,"TYPE","xmlhttp"),Ao(t,e),t.o&&t.s&&tf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Mc(Dn(e)),n.s=null,n.S=!0,iv(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Fc(this),rf(this),gt(19))};function $a(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function kv(t,e){var n=null;if(t.g==e){$a(t),sf(t),t.g=null;var r=2}else if(Ou(t.i,e))n=e.F,_v(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Oc(),et(r,new tv(r,n)),Uc(t)}else Cv(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&iO(t,e)||r==2&&rf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Sr(t,5);break;case 4:Sr(t,10);break;case 3:Sr(t,6);break;default:Sr(t,2)}}}function Ov(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Sr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ct(t.pb,t);n||(n=new xr("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Ba(n,"https"),Mc(n)),Zk(n.toString(),r)}else gt(2);t.H=0,t.h&&t.h.za(e),Nv(t),bv(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function Nv(t){if(t.H=0,t.ma=[],t.h){const e=yv(t.i);(e.length!=0||t.j.length!=0)&&(Wp(t.ma,e),Wp(t.ma,t.j),t.i.i.length=0,Uh(t.j),t.j.length=0),t.h.ya()}}function Dv(t,e,n){var r=n instanceof xr?Dn(n):new xr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ja(r,r.m);else{var s=se.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new xr(null);r&&Ba(i,r),e&&(i.g=e),s&&ja(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&be(r,n,e),be(r,"VER",t.ra),Ao(t,r),r}function Vv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new wo({ob:!0})):new xe(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function Mv(){}U=Mv.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Ha(){if(ks&&!(10<=Number(yk)))throw Error("Environmental error: no available transport.")}Ha.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){Qe.call(this),this.g=new Rv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ji(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ji(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ks(this)}Je(Bt,Qe);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Dv(t,null,t.Y),Uc(t)};Bt.prototype.close=function(){nf(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kh(t),t=n);e.j.push(new Gk(e.fb++,t)),e.H==3&&Uc(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,nf(this.g),delete this.g,Bt.$.N.call(this)};function xv(t){Yh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(xv,Yh);function Lv(){Xh.call(this),this.status=1}Je(Lv,Xh);function Ks(t){this.g=t}Je(Ks,Mv);Ks.prototype.Ba=function(){et(this.g,"a")};Ks.prototype.Aa=function(t){et(this.g,new xv(t))};Ks.prototype.za=function(t){et(this.g,new Lv)};Ks.prototype.ya=function(){et(this.g,"b")};function oO(){this.blockSize=-1}function Xt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Je(Xt,oO);Xt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Xt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Nl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Nl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Nl(this,r),s=0;break}}this.h=s,this.i+=e};Xt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var aO={};function of(t){return-128<=t&&128>t?gk(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function ln(t){if(isNaN(t)||!isFinite(t))return vs;if(0>t)return Ze(ln(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nu;return new Ee(e,0)}function Fv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(Fv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(e,8)),r=vs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=ln(Math.pow(e,i)),r=r.R(i).add(ln(o))):(r=r.R(n),r=r.add(ln(o)))}return r}var Nu=4294967296,vs=of(0),Du=of(1),ng=of(16777216);U=Ee.prototype;U.ea=function(){if(Ht(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nu+r)*e,e*=Nu}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(bn(this))return"0";if(Ht(this))return"-"+Ze(this).toString(t);for(var e=ln(Math.pow(t,6)),n=this,r="";;){var s=Wa(n,e).g;n=qa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,bn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function bn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ht(t){return t.h==-1}U.X=function(t){return t=qa(this,t),Ht(t)?-1:bn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(Du)}U.abs=function(){return Ht(this)?Ze(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function qa(t,e){return t.add(Ze(e))}U.R=function(t){if(bn(this)||bn(t))return vs;if(Ht(this))return Ht(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Ht(t))return Ze(this.R(Ze(t)));if(0>this.X(ng)&&0>t.X(ng))return ln(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Jo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Jo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Jo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Jo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function Jo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ni(t,e){this.g=t,this.h=e}function Wa(t,e){if(bn(e))throw Error("division by zero");if(bn(t))return new ni(vs,vs);if(Ht(t))return e=Wa(Ze(t),e),new ni(Ze(e.g),Ze(e.h));if(Ht(e))return e=Wa(t,Ze(e)),new ni(Ze(e.g),e.h);if(30<t.g.length){if(Ht(t)||Ht(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Du,r=e;0>=r.X(t);)n=rg(n),r=rg(r);var s=ss(n,1),i=ss(r,1);for(r=ss(r,2),n=ss(n,2);!bn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=ss(r,1),n=ss(n,1)}return e=qa(t,s.R(e)),new ni(s,e)}for(s=vs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ln(n),o=i.R(e);Ht(o)||0<o.X(t);)n-=r,i=ln(n),o=i.R(e);bn(i)&&(i=Du),s=s.add(i),t=qa(t,o)}return new ni(s,t)}U.gb=function(t){return Wa(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function rg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}Ha.prototype.createWebChannel=Ha.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Nc.NO_ERROR=0;Nc.TIMEOUT=8;Nc.HTTP_ERROR=6;nv.COMPLETE="complete";rv.EventType=vo;vo.OPEN="a";vo.CLOSE="b";vo.ERROR="c";vo.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;Xt.prototype.digest=Xt.prototype.l;Xt.prototype.reset=Xt.prototype.reset;Xt.prototype.update=Xt.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=ln;Ee.fromString=Fv;var cO=function(){return new Ha},lO=function(){return Oc()},Dl=Nc,uO=nv,hO=Qr,sg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fO=wo,Yo=rv,dO=xe,pO=Xt,Es=Ee;const ig="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Ph("@firebase/firestore");function og(){return $r.logLevel}function z(t,...e){if($r.logLevel<=pe.DEBUG){const n=e.map(af);$r.debug(`Firestore (${zs}): ${t}`,...n)}}function Vn(t,...e){if($r.logLevel<=pe.ERROR){const n=e.map(af);$r.error(`Firestore (${zs}): ${t}`,...n)}}function Os(t,...e){if($r.logLevel<=pe.WARN){const n=e.map(af);$r.warn(`Firestore (${zs}): ${t}`,...n)}}function af(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Ce(t,e){t||ne()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class mO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _O{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new Uv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new rt(e)}}class yO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new EO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ke(0,0))}static max(){return new oe(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Qi{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const IO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Qi{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return IO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Pe.fromString(e))}static fromName(e){return new Y(Pe.fromString(e).popFirst(5))}static empty(){return new Y(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Pe(e.slice()))}}function AO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new hr(s,Y.empty(),e)}function RO(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(oe.min(),Y.empty(),-1)}static max(){return new hr(oe.max(),Y.empty(),-1)}}function bO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==PO)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function bo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}cf.ae=-1;function Bc(t){return t==null}function Ka(t){return t===0&&1/t==-1/0}function SO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xo(this.root,e,this.comparator,!0)}}class Xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cg(this.data.getIterator())}getIteratorFrom(e){return new cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new xt([])}unionWith(e){let n=new ut(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $v("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const kO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=kO.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uf(t){const e=t.mapValue.fields.__previous_value__;return lf(e)?uf(e):e}function Ji(t){const e=fr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lf(t)?4:NO(t)?9007199254740991:10:ne()}function yn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),a=fr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?Ka(o)===Ka(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ag(o)!==ag(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!yn(o[c],a[c])))return!1;return!0}(t,e);default:return ne()}}function Xi(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Be(i.integerValue||i.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return lg(t.timestampValue,e.timestampValue);case 4:return lg(Ji(t),Ji(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Hr(i),c=Hr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=me(a[l],c[l]);if(u!==0)return u}return me(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=me(Be(i.latitude),Be(o.latitude));return a!==0?a:me(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ds(a[l],c[l]);if(u)return u}return me(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Zo.mapValue&&o===Zo.mapValue)return 0;if(i===Zo.mapValue)return 1;if(o===Zo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=me(c[h],u[h]);if(f!==0)return f;const d=Ds(a[c[h]],l[u[h]]);if(d!==0)return d}return me(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function lg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=fr(t),r=fr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Vs(t){return Vu(t)}function Vu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vu(n.fields[o])}`;return s+"}"}(t.mapValue):ne()}function ug(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mu(t){return!!t&&"integerValue"in t}function hf(t){return!!t&&"arrayValue"in t}function hg(t){return!!t&&"nullValue"in t}function fg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ha(t){return!!t&&"mapValue"in t}function wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ha(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=wi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ha(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(wi(this.value))}}function Hv(t){const e=[];return Jr(t.fields,(n,r)=>{const s=new ot([n]);if(ha(r)){const i=Hv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,oe.min(),oe.min(),oe.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,oe.min(),oe.min(),It.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,oe.min(),oe.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.position=e,this.inclusive=n}}function dg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function DO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{}class $e extends qv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MO(e,n,r):n==="array-contains"?new FO(e,r):n==="in"?new UO(e,r):n==="not-in"?new BO(e,r):n==="array-contains-any"?new jO(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xO(e,r):new LO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ds(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Zt extends qv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Zt(e,n)}matches(e){return Wv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Wv(t){return t.op==="and"}function Kv(t){return VO(t)&&Wv(t)}function VO(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function xu(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(Kv(t))return t.filters.map(e=>xu(e)).join(",");{const e=t.filters.map(n=>xu(n)).join(",");return`${t.op}(${e})`}}function zv(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&zv(o,s.filters[a]),!0):!1}(t,e):void ne()}function Gv(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(Gv).join(" ,")+"}"}(t):"Filter"}class MO extends $e{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class xO extends $e{constructor(e,n){super(e,"in",n),this.keys=Qv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LO extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Qv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class FO extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hf(n)&&Xi(n.arrayValue,this.value)}}class UO extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xi(this.value.arrayValue,n)}}class BO extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xi(this.value.arrayValue,n)}}class jO extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function gg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $O(t,e,n,r,s,i,o)}function ff(t){const e=ce(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.he=n}return e.he}function df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pg(t.startAt,e.startAt)&&pg(t.endAt,e.endAt)}function Lu(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function HO(t,e,n,r,s,i,o,a){return new Po(t,e,n,r,s,i,o,a)}function jc(t){return new Po(t)}function mg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Jv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yv(t){return t.collectionGroup!==null}function Ai(t){const e=ce(t);if(e.Pe===null){e.Pe=[];const n=pf(e),r=Jv(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ii(n)),e.Pe.push(new Ii(ot.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ii(ot.keyField(),i))}}}return e.Pe}function Mn(t){const e=ce(t);return e.Ie||(e.Ie=qO(e,Ai(t))),e.Ie}function qO(t,e){if(t.limitType==="F")return gg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ii(s.field,i)});const n=t.endAt?new za(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new za(t.startAt.position,t.startAt.inclusive):null;return gg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fu(t,e){e.getFirstInequalityField(),pf(t);const n=t.filters.concat([e]);return new Po(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Uu(t,e,n){return new Po(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return df(Mn(t),Mn(e))&&t.limitType===e.limitType}function Xv(t){return`${ff(Mn(t))}|lt:${t.limitType}`}function Bu(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Gv(s)).join(", ")}]`),Bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Vs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Vs(s)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=dg(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ai(r),s)||r.endAt&&!function(o,a,c){const l=dg(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ai(r),s))}(t,e)}function WO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zv(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=KO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KO(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ds(c,l):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=new De(Y.comparator);function xn(){return zO}const eE=new De(Y.comparator);function li(...t){let e=eE;for(const n of t)e=e.insert(n.key,n);return e}function tE(t){let e=eE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return Ri()}function nE(){return Ri()}function Ri(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const GO=new De(Y.comparator),QO=new ut(Y.comparator);function ue(...t){let e=QO;for(const n of t)e=e.add(n);return e}const JO=new ut(me);function YO(){return JO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ka(e)?"-0":e}}function sE(t){return{integerValue:""+t}}function XO(t,e){return SO(e)?sE(e):rE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this._=void 0}}function ZO(t,e,n){return t instanceof Ga?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lf(i)&&(i=uf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zi?oE(t,e):t instanceof eo?aE(t,e):function(s,i){const o=iE(s,i),a=_g(o)+_g(s.Ee);return Mu(o)&&Mu(s.Ee)?sE(a):rE(s.serializer,a)}(t,e)}function e1(t,e,n){return t instanceof Zi?oE(t,e):t instanceof eo?aE(t,e):n}function iE(t,e){return t instanceof Qa?function(r){return Mu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ga extends qc{}class Zi extends qc{constructor(e){super(),this.elements=e}}function oE(t,e){const n=cE(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends qc{constructor(e){super(),this.elements=e}}function aE(t,e){let n=cE(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class Qa extends qc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function _g(t){return Be(t.integerValue||t.doubleValue)}function cE(t){return hf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function t1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Ns(r.elements,s.elements,yn):r instanceof Qa&&s instanceof Qa?yn(r.Ee,s.Ee):r instanceof Ga&&s instanceof Ga}(t.transform,e.transform)}class n1{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wc{}function lE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hE(t.key,pn.none()):new Co(t.key,t.data,pn.none());{const n=t.data,r=It.empty();let s=new ut(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new yr(t.key,r,new xt(s.toArray()),pn.none())}}function r1(t,e,n){t instanceof Co?function(s,i,o){const a=s.value.clone(),c=vg(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(s,i,o){if(!fa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=vg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(uE(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bi(t,e,n,r){return t instanceof Co?function(i,o,a,c){if(!fa(i.precondition,o))return a;const l=i.value.clone(),u=Eg(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(i,o,a,c){if(!fa(i.precondition,o))return a;const l=Eg(i.fieldTransforms,c,o),u=o.data;return u.setAll(uE(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return fa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function s1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=iE(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function yg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>t1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends Wc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yr extends Wc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vg(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,e1(o,a,n[s]))}return r}function Eg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZO(i,o,e))}return r}class hE extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i1 extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&r1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=lE(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>yg(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>yg(n,r))}}class gf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return GO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,he;function l1(t){switch(t){default:return ne();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function fE(t){if(t===void 0)return Vn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Ue.OK:return C.OK;case Ue.CANCELLED:return C.CANCELLED;case Ue.UNKNOWN:return C.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return C.INTERNAL;case Ue.UNAVAILABLE:return C.UNAVAILABLE;case Ue.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ue.NOT_FOUND:return C.NOT_FOUND;case Ue.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ue.ABORTED:return C.ABORTED;case Ue.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ue.DATA_LOSS:return C.DATA_LOSS;default:return ne()}}(he=Ue||(Ue={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ea}static getOrCreateInstance(){return ea===null&&(ea=new mf),ea}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ea=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new Es([4294967295,4294967295],0);function Tg(t){const e=u1().encode(t),n=new pO;return n.update(e),new Uint8Array(n.digest())}function wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Es([n,r],0),new Es([s,i],0)]}class _f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ui(`Invalid padding: ${n}`);if(r<0)throw new ui(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ui(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ui(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Es.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Es.fromNumber(r)));return s.compare(h1)===1&&(s=new Es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Tg(e),[r,s]=wg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _f(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Tg(e),[r,s]=wg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kc(oe.min(),s,new De(me),xn(),ue())}}class So{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class dE{constructor(e,n){this.targetId=e,this.ye=n}}class pE{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ig{constructor(){this.we=0,this.Se=Rg(),this.be=ft.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=ue(),n=ue(),r=ue();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new So(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Rg()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class f1{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=xn(),this.Ue=Ag(),this.We=new De(me)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){var n;const r=e.targetId,s=e.ye.count,i=this.et(r);if(i){const o=i.target;if(Lu(o))if(s===0){const a=new Y(o.path);this.je(r,a,st.newNoDocument(a,oe.min()))}else Ce(s===1);else{const a=this.tt(r);if(a!==s){const c=this.nt(e),l=c?this.rt(c,e,a):1;if(l!==0){this.Ze(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,u)}(n=mf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,d,_,E){var w,y,g,I,v,R;const D={localCacheCount:h,existenceFilterCount:f.count,databaseId:d.database,projectId:d.projectId},V=f.unchangedNames;return V&&(D.bloomFilter={applied:E===0,hashCount:(w=V==null?void 0:V.hashCount)!==null&&w!==void 0?w:0,bitmapLength:(I=(g=(y=V==null?void 0:V.bits)===null||y===void 0?void 0:y.bitmap)===null||g===void 0?void 0:g.length)!==null&&I!==void 0?I:0,padding:(R=(v=V==null?void 0:V.bits)===null||v===void 0?void 0:v.padding)!==null&&R!==void 0?R:0,mightContain:A=>{var k;return(k=_==null?void 0:_.mightContain(A))!==null&&k!==void 0&&k}}),D}(a,e.ye,this.Qe.it(),c,l))}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hr(r).toUint8Array()}catch(c){if(c instanceof $v)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new _f(o,s,i)}catch(c){return Os(c instanceof ui?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}ot(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Lu(a.target)){const c=new Y(a.target.path);this.$e.get(c)!==null||this._t(o,c)||this.je(o,c,st.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ue();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Kc(e,n,this.We,this.$e,r);return this.$e=xn(),this.Ue=Ag(),this.We=new De(me),s}ze(e,n){if(!this.Ye(e))return;const r=this._t(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ut(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this._t(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ut(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Ig,this.Ke.set(e,n)),n}ut(e){let n=this.Ue.get(e);return n||(n=new ut(me),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.ct(e)}Ze(e){this.Ke.set(e,new Ig),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}_t(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Ag(){return new De(Y.comparator)}function Rg(){return new De(Y.comparator)}const d1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),p1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),g1=(()=>({and:"AND",or:"OR"}))();class m1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ju(t,e){return t.useProto3Json||Bc(e)?e:{value:e}}function Ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _1(t,e){return Ja(t,e.toTimestamp())}function gn(t){return Ce(!!t),oe.fromTimestamp(function(n){const r=fr(n);return new Ke(r.seconds,r.nanos)}(t))}function yf(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function mE(t){const e=Pe.fromString(t);return Ce(EE(e)),e}function $u(t,e){return yf(t.databaseId,e.path)}function Vl(t,e){const n=mE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(_E(n))}function Hu(t,e){return yf(t.databaseId,e)}function y1(t){const e=mE(t);return e.length===4?Pe.emptyPath():_E(e)}function qu(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _E(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bg(t,e,n){return{name:$u(t,e),fields:n.value.mapValue.fields}}function v1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ce(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(Ce(u===void 0||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:fE(l.code);return new H(u,l.message||"")}(o);n=new pE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vl(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):oe.min(),a=new It({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new da(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vl(t,r.document),i=r.readTime?gn(r.readTime):oe.min(),o=st.newNoDocument(s,i),a=r.removedTargetIds||[];n=new da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vl(t,r.document),i=r.removedTargetIds||[];n=new da([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new c1(s,i),a=r.targetId;n=new dE(a,o)}}return n}function E1(t,e){let n;if(e instanceof Co)n={update:bg(t,e.key,e.value)};else if(e instanceof hE)n={delete:$u(t,e.key)};else if(e instanceof yr)n={update:bg(t,e.key,e.data),updateMask:S1(e.fieldMask)};else{if(!(e instanceof i1))return ne();n={verify:$u(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function T1(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(oe.min())&&(o=gn(i)),new n1(o,s.transformResults||[])}(n,e))):[]}function w1(t,e){return{documents:[Hu(t,e.path)]}}function I1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return vE(Zt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:as(h.field),direction:b1(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ju(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function A1(t){let e=y1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=yE(h);return f instanceof Zt&&Kv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new Ii(cs(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Bc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new za(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new za(d,f)}(n.endAt)),HO(e,s,o,i,a,"F",c,l)}function R1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>yE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function b1(t){return d1[t]}function P1(t){return p1[t]}function C1(t){return g1[t]}function as(t){return{fieldPath:t.canonicalString()}}function cs(t){return ot.fromServerFormat(t.fieldPath)}function vE(t){return t instanceof $e?function(n){if(n.op==="=="){if(fg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(hg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(hg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:P1(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>vE(s));return r.length===1?r[0]:{compositeFilter:{op:C1(n.op),filters:r}}}(t):ne()}function S1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function EE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.lt=e}}function O1(t){const e=A1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.on=new D1}addToCollectionParentIndex(e,n){return this.on.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(hr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class D1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ms(0)}static Nn(){return new Ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bi(r.mutation,s,xt.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=li();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=xn();const o=Ri(),a=function(){return Ri()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof yr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),bi(u.mutation,l,u.mutation.getFieldMask(),Ke.now())):o.set(l.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new M1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ri();let s=new De((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||xt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ue()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=nE();u.forEach(f=>{if(!i.has(f)){const d=lE(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(kr());let a=-1,c=i;return o.next(l=>M.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?M.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:tE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=li();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=li();return this.indexManager.getCollectionParents(e,s).next(o=>M.forEach(o,a=>{const c=function(u,h){return new Po(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,st.newInvalidDocument(l)))});let o=li();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&bi(l.mutation,c,xt.empty(),Ke.now()),Hc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return M.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:O1(s.bundledQuery),readTime:gn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.overlays=new De(Y.comparator),this.lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Pt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=kr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=kr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return M.resolve(a)}Pt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a1(n,r));let i=this.lr.get(n);i===void 0&&(i=ue(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.hr=new ut(ze.Pr),this.Ir=new ut(ze.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new ze(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Y(new Pe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Y(new Pe([])),r=new ze(n,e),s=new ze(n,e+1);let i=ue();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Y.comparator(e.key,n.key)||me(e.gr,n.gr)}static Tr(e,n){return me(e.gr,n.gr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ut(ze.Pr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(me);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),M.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Y(i),0);let a=new ut(me);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),M.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return M.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new ze(n,0),s=this.yr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.vr=e,this.docs=function(){return new De(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xn();const o=n.path,a=new Y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||bO(RO(u),r)<=0||(s.has(u.key)||Hc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne()}Cr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new j1(this)}getSize(e){return M.resolve(this.size)}}class j1 extends V1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.persistence=e,this.Fr=new Gs(n=>ff(n),df),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Mr=0,this.Or=new vf,this.targetCount=0,this.Nr=Ms.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),M.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.kn(n),M.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n){this.Br={},this.overlays={},this.Lr=new cf(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new $1(this),this.indexManager=new N1,this.remoteDocumentCache=function(s){return new B1(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new k1(n),this.Kr=new L1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new U1(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const s=new q1(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return M.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class q1 extends CO{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Gr=new vf,this.zr=null}static jr(e){return new Ef(e)}get Hr(){if(this.zr)return this.zr;throw ne()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Hr,r=>{const s=Y.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return M.or([()=>M.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.Ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(i=>i||this.Wi(e,n,s,r)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(mg(n))return M.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Uu(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.zi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,Uu(n,null,"F")):this.Hi(e,l,n,c)}))})))}Wi(e,n,r,s){return mg(n)||s.isEqual(oe.min())?this.Gi(e,n):this.$i.getDocuments(e,r).next(i=>{const o=this.zi(n,i);return this.ji(n,o,r,s)?this.Gi(e,n):(og()<=pe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bu(n)),this.Hi(e,o,n,AO(s,-1)))})}zi(e,n){let r=new ut(Zv(e));return n.forEach((s,i)=>{Hc(e,i)&&(r=r.add(i))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(e,n){return og()<=pe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Bu(n)),this.$i.getDocumentsMatchingQuery(e,n,hr.min())}Hi(e,n,r,s){return this.$i.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,s){this.persistence=e,this.Ji=n,this.serializer=s,this.Yi=new De(me),this.Zi=new Gs(i=>ff(i),df),this.Xi=new Map,this.es=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.ts(r)}ts(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x1(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Yi))}}function z1(t,e,n,r){return new K1(t,e,n,r)}async function TE(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ts(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ue();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ns:l,removedBatchIds:o,addedBatchIds:a}))})})}function G1(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.es.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let d=M.resolve();return f.forEach(_=>{d=d.next(()=>u.getEntry(c,_)).next(E=>{const w=l.docVersions.get(_);Ce(w!==null),E.version.compareTo(w)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ue();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wE(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Q1(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.Yi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.es.newChangeBuffer({trackRemovals:!0});s=n.Yi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(ft.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(E,w,y){return E.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.qr.updateTargetData(i,d))});let c=xn(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(J1(i,o,e.documentUpdates).next(u=>{c=u.rs,l=u.ss})),!r.isEqual(oe.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return M.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Yi=s,i))}function J1(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=xn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{rs:o,ss:s}})}function Y1(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function X1(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Yi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Yi=n.Yi.insert(r.targetId,r),n.Zi.set(e,r.targetId)),r})}async function Wu(t,e,n){const r=ce(t),s=r.Yi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bo(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Yi=r.Yi.remove(e),r.Zi.delete(s.target)}function Pg(t,e,n){const r=ce(t);let s=oe.min(),i=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ce(c),f=h.Zi.get(u);return f!==void 0?M.resolve(h.Yi.get(f)):h.qr.getTargetData(l,u)}(r,o,Mn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:ue())).next(a=>(Z1(r,WO(e),a),{documents:a,os:i})))}function Z1(t,e,n){let r=t.Xi.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class Cg{constructor(){this.activeTargetIds=YO()}Ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}Is(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eN{constructor(){this.Js=new Cg,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Js.Ps(e),this.Ys[e]||"not-current"}updateQueryState(e,n,r){this.Ys[e]=n}removeLocalQueryTarget(e){this.Js.Is(e)}isLocalQueryTarget(e){return this.Js.activeTargetIds.has(e)}clearQueryState(e){delete this.Ys[e]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(e){return this.Js.activeTargetIds.has(e)}start(){return this.Js=new Cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{Zs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(e){this.io.push(e)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.io)e(0)}ro(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.io)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta=null;function Ml(){return ta===null?ta=function(){return 268435456+Math.round(2147483648*Math.random())}():ta++,"0x"+ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.oo=e.oo,this._o=e._o}ao(e){this.uo=e}co(e){this.lo=e}onMessage(e){this.ho=e}close(){this._o()}send(e){this.oo(e)}Po(){this.uo()}Io(e){this.lo(e)}To(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class sN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${s}/databases/${i}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Vo(){return!1}mo(n,r,s,i,o){const a=Ml(),c=this.fo(n,r);z("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(l,i,o),this.yo(n,c,l,s).then(u=>(z("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Os("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}wo(n,r,s,i,o,a){return this.mo(n,r,s,i,o)}po(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}fo(n,r){const s=nN[n];return`${this.Eo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}yo(e,n,r,s){const i=Ml();return new Promise((o,a)=>{const c=new dO;c.setWithCredentials(!0),c.listenOnce(uO.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Dl.NO_ERROR:const u=c.getResponseJson();z(nt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Dl.TIMEOUT:z(nt,`RPC '${e}' ${i} timed out`),a(new H(C.DEADLINE_EXCEEDED,"Request time out"));break;case Dl.HTTP_ERROR:const h=c.getStatus();if(z(nt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const _=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(d.status);a(new H(_,d.message))}else a(new H(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(C.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{z(nt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);z(nt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}So(e,n,r){const s=Ml(),i=[this.Eo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cO(),a=lO(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new fO({})),this.po(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");z(nt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const _=new rN({oo:w=>{d?z(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(f||(z(nt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),z(nt,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},_o:()=>h.close()}),E=(w,y,g)=>{w.listen(y,I=>{try{g(I)}catch(v){setTimeout(()=>{throw v},0)}})};return E(h,Yo.EventType.OPEN,()=>{d||z(nt,`RPC '${e}' stream ${s} transport opened.`)}),E(h,Yo.EventType.CLOSE,()=>{d||(d=!0,z(nt,`RPC '${e}' stream ${s} transport closed`),_.Io())}),E(h,Yo.EventType.ERROR,w=>{d||(d=!0,Os(nt,`RPC '${e}' stream ${s} transport errored:`,w),_.Io(new H(C.UNAVAILABLE,"The operation could not be completed")))}),E(h,Yo.EventType.MESSAGE,w=>{var y;if(!d){const g=w.data[0];Ce(!!g);const I=g,v=I.error||((y=I[0])===null||y===void 0?void 0:y.error);if(v){z(nt,`RPC '${e}' stream ${s} received error:`,v);const R=v.status;let D=function(k){const B=Ue[k];if(B!==void 0)return fE(B)}(R),V=v.message;D===void 0&&(D=C.INTERNAL,V="Unknown error status: "+R+" with message "+v.message),d=!0,_.Io(new H(D,V)),h.close()}else z(nt,`RPC '${e}' stream ${s} received:`,g),_.To(g)}}),E(a,hO.STAT_EVENT,w=>{w.stat===sg.PROXY?z(nt,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===sg.NOPROXY&&z(nt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Po()},0),_}}function xl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return new m1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.bo=r,this.Do=s,this.vo=i,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(e){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),s=Math.max(0,n-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Mo=Date.now(),e())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Lo=r,this.ko=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new IE(e,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(e){this.Yo(),this.stream.send(e)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(e,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,e!==4?this.$o.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Xo(){}auth(){this.state=1;const e=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.qo===n&&this.t_(r,s)},r=>{e(()=>{const s=new H(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(s)})})}t_(e,n){const r=this.e_(this.qo);this.stream=this.r_(e,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(s=>{r(()=>this.n_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}e_(e){return n=>{this.si.enqueueAndForget(()=>this.qo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iN extends AE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}r_(e,n){return this.connection.So("Listen",e,n)}onMessage(e){this.$o.reset();const n=v1(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?gn(o.readTime):oe.min()}(e);return this.listener.i_(n,r)}s_(e){const n={};n.database=qu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Lu(c)?{documents:w1(i,c)}:{query:I1(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gE(i,o.resumeToken);const l=ju(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Ja(i,o.snapshotVersion.toTimestamp());const l=ju(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=R1(this.serializer,e);r&&(n.labels=r),this.Jo(n)}o_(e){const n={};n.database=qu(this.serializer),n.removeTarget=e,this.Jo(n)}}class oN extends AE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(e,n){return this.connection.So("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.__){this.$o.reset();const n=T1(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.c_(r,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const e={};e.database=qu(this.serializer),this.Jo(e)}u_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>E1(this.serializer,r))};this.Jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.P_=!1}I_(){if(this.P_)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}mo(e,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.mo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(C.UNKNOWN,s.toString())})}wo(e,n,r,s){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(C.UNKNOWN,i.toString())})}terminate(){this.P_=!0}}class cN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(e){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.V_("Offline")))}set(e){this.g_(),this.E_=0,e==="Online"&&(this.A_=!1),this.V_(e)}V_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}m_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(Vn(n),this.A_=!1):z("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=i,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ce(c);l.w_.add(4),await ko(l),l.D_.set("Unknown"),l.w_.delete(4),await Gc(l)}(this))})}),this.D_=new cN(r,s)}}async function Gc(t){if(Yr(t))for(const e of t.S_)await e(!0)}async function ko(t){for(const e of t.S_)await e(!1)}function RE(t,e){const n=ce(t);n.y_.has(e.targetId)||(n.y_.set(e.targetId,e),Af(n)?If(n):Qs(n).Wo()&&wf(n,e))}function bE(t,e){const n=ce(t),r=Qs(n);n.y_.delete(e),r.Wo()&&PE(n,e),n.y_.size===0&&(r.Wo()?r.jo():Yr(n)&&n.D_.set("Unknown"))}function wf(t,e){if(t.v_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).s_(e)}function PE(t,e){t.v_.Le(e),Qs(t).o_(e)}function If(t){t.v_=new f1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ct:e=>t.y_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.D_.R_()}function Af(t){return Yr(t)&&!Qs(t).Uo()&&t.y_.size>0}function Yr(t){return ce(t).w_.size===0}function CE(t){t.v_=void 0}async function uN(t){t.y_.forEach((e,n)=>{wf(t,e)})}async function hN(t,e){CE(t),Af(t)?(t.D_.f_(e),If(t)):t.D_.set("Unknown")}async function fN(t,e,n){if(t.D_.set("Online"),e instanceof pE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.y_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.y_.delete(a),s.v_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ya(t,r)}else if(e instanceof da?t.v_.Ge(e):e instanceof dE?t.v_.Xe(e):t.v_.He(e),!n.isEqual(oe.min()))try{const r=await wE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.v_.ot(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.y_.get(l);u&&i.y_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.y_.get(c);if(!u)return;i.y_.set(c,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),PE(i,c);const h=new er(u.target,c,l,u.sequenceNumber);wf(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Ya(t,r)}}async function Ya(t,e,n){if(!bo(e))throw e;t.w_.add(1),await ko(t),t.D_.set("Offline"),n||(n=()=>wE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.w_.delete(1),await Gc(t)})}function SE(t,e){return e().catch(n=>Ya(t,n,e))}async function Qc(t){const e=ce(t),n=dr(e);let r=e.p_.length>0?e.p_[e.p_.length-1].batchId:-1;for(;dN(e);)try{const s=await Y1(e.localStore,r);if(s===null){e.p_.length===0&&n.jo();break}r=s.batchId,pN(e,s)}catch(s){await Ya(e,s)}kE(e)&&OE(e)}function dN(t){return Yr(t)&&t.p_.length<10}function pN(t,e){t.p_.push(e);const n=dr(t);n.Wo()&&n.a_&&n.u_(e.mutations)}function kE(t){return Yr(t)&&!dr(t).Uo()&&t.p_.length>0}function OE(t){dr(t).start()}async function gN(t){dr(t).h_()}async function mN(t){const e=dr(t);for(const n of t.p_)e.u_(n.mutations)}async function _N(t,e,n){const r=t.p_.shift(),s=gf.from(r,e,n);await SE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Qc(t)}async function yN(t,e){e&&dr(t).a_&&await async function(r,s){if(function(o){return l1(o)&&o!==C.ABORTED}(s.code)){const i=r.p_.shift();dr(r).zo(),await SE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qc(r)}}(t,e),kE(t)&&OE(t)}async function kg(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.w_.add(3),await ko(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.w_.delete(3),await Gc(n)}async function vN(t,e){const n=ce(t);e?(n.w_.delete(2),await Gc(n)):e||(n.w_.add(2),await ko(n),n.D_.set("Unknown"))}function Qs(t){return t.C_||(t.C_=function(n,r,s){const i=ce(n);return i.I_(),new iN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ao:uN.bind(null,t),co:hN.bind(null,t),i_:fN.bind(null,t)}),t.S_.push(async e=>{e?(t.C_.zo(),Af(t)?If(t):t.D_.set("Unknown")):(await t.C_.stop(),CE(t))})),t.C_}function dr(t){return t.F_||(t.F_=function(n,r,s){const i=ce(n);return i.I_(),new oN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ao:gN.bind(null,t),co:yN.bind(null,t),l_:mN.bind(null,t),c_:_N.bind(null,t)}),t.S_.push(async e=>{e?(t.F_.zo(),await Qc(t)):(await t.F_.stop(),t.p_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.p_.length} pending writes`),t.p_=[]))})),t.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Rf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),bo(t))return new H(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=li(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.M_=new De(Y.comparator)}track(e){const n=e.doc.key,r=this.M_.get(n);r?e.type!==0&&r.type===3?this.M_=this.M_.insert(n,e):e.type===3&&r.type!==1?this.M_=this.M_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.M_=this.M_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.M_=this.M_.remove(n):e.type===1&&r.type===2?this.M_=this.M_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):ne():this.M_=this.M_.insert(n,e)}x_(){const e=[];return this.M_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,Ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.O_=void 0,this.listeners=[]}}class TN{constructor(){this.queries=new Gs(e=>Xv(e),$c),this.onlineState="Unknown",this.N_=new Set}}async function Pf(t,e){const n=ce(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new EN),s)try{i.O_=await n.onListen(r)}catch(o){const a=bf(o,`Initialization of query '${Bu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.B_(n.onlineState),i.O_&&e.L_(i.O_)&&Sf(n)}async function Cf(t,e){const n=ce(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function wN(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.L_(s)&&(r=!0);o.O_=s}}r&&Sf(n)}function IN(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sf(t){t.N_.forEach(e=>{e.next()})}class kf{constructor(e,n,r){this.query=e,this.k_=n,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.q_?this.K_(e)&&(this.k_.next(e),n=!0):this.U_(e,this.onlineState)&&(this.W_(e),n=!0),this.Q_=e,n}onError(e){this.k_.error(e)}B_(e){this.onlineState=e;let n=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,e)&&(this.W_(this.Q_),n=!0),n}U_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.G_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}K_(e){if(e.docChanges.length>0)return!0;const n=this.Q_&&this.Q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}W_(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.q_=!0,this.k_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.key=e}}class DE{constructor(e){this.key=e}}class AN{constructor(e,n){this.query=e,this.ea=n,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=ue(),this.mutatedKeys=ue(),this.ra=Zv(e),this.ia=new Ts(this.ra)}get sa(){return this.ea}oa(e,n){const r=n?n._a:new Og,s=n?n.ia:this.ia;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Hc(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),E=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let w=!1;f&&d?f.data.isEqual(d.data)?_!==E&&(r.track({type:3,doc:d}),w=!0):this.aa(f,d)||(r.track({type:2,doc:d}),w=!0,(c&&this.ra(d,c)>0||l&&this.ra(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),w=!0):f&&!d&&(r.track({type:1,doc:f}),w=!0,(c||l)&&(a=!0)),w&&(d?(o=o.add(d),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ia:o,_a:r,ji:a,mutatedKeys:i}}aa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ia;this.ia=e.ia,this.mutatedKeys=e.mutatedKeys;const i=e._a.x_();i.sort((l,u)=>function(f,d){const _=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return _(f)-_(d)}(l.type,u.type)||this.ra(l.doc,u.doc)),this.ua(r);const o=n?this.ca():[],a=this.na.size===0&&this.current?1:0,c=a!==this.ta;return this.ta=a,i.length!==0||c?{snapshot:new xs(this.query,e.ia,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new Og,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(e){return!this.ea.has(e)&&!!this.ia.has(e)&&!this.ia.get(e).hasLocalMutations}ua(e){e&&(e.addedDocuments.forEach(n=>this.ea=this.ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ea=this.ea.delete(n)),this.current=e.current)}ca(){if(!this.current)return[];const e=this.na;this.na=ue(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const n=[];return e.forEach(r=>{this.na.has(r)||n.push(new DE(r))}),this.na.forEach(r=>{e.has(r)||n.push(new NE(r))}),n}Pa(e){this.ea=e.os,this.na=ue();const n=this.oa(e.documents);return this.applyChanges(n,!0)}Ia(){return xs.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class RN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bN{constructor(e){this.key=e,this.Ta=!1}}class PN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new Gs(a=>Xv(a),$c),this.Aa=new Map,this.Ra=new Set,this.Va=new De(Y.comparator),this.ma=new Map,this.fa=new vf,this.ga={},this.pa=new Map,this.ya=Ms.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function CN(t,e){const n=FN(t);let r,s;const i=n.da.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ia();else{const o=await X1(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await SN(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&RE(n.remoteStore,o)}return s}async function SN(t,e,n,r,s){t.Sa=(h,f,d)=>async function(E,w,y,g){let I=w.view.oa(y);I.ji&&(I=await Pg(E.localStore,w.query,!1).then(({documents:D})=>w.view.oa(D,I)));const v=g&&g.targetChanges.get(w.targetId),R=w.view.applyChanges(I,E.isPrimaryClient,v);return Dg(E,w.targetId,R.la),R.snapshot}(t,h,f,d);const i=await Pg(t.localStore,e,!0),o=new AN(e,i.os),a=o.oa(i.documents),c=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Dg(t,n,l.la);const u=new RN(e,n,o);return t.da.set(e,u),t.Aa.has(n)?t.Aa.get(n).push(e):t.Aa.set(n,[e]),l.snapshot}async function kN(t,e){const n=ce(t),r=n.da.get(e),s=n.Aa.get(r.targetId);if(s.length>1)return n.Aa.set(r.targetId,s.filter(i=>!$c(i,e))),void n.da.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),bE(n.remoteStore,r.targetId),Ku(n,r.targetId)}).catch(Ro)):(Ku(n,r.targetId),await Wu(n.localStore,r.targetId,!0))}async function ON(t,e,n){const r=UN(t);try{const s=await function(o,a){const c=ce(o),l=Ke.now(),u=a.reduce((d,_)=>d.add(_.key),ue());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let _=xn(),E=ue();return c.es.getEntries(d,u).next(w=>{_=w,_.forEach((y,g)=>{g.isValidDocument()||(E=E.add(y))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,_)).next(w=>{h=w;const y=[];for(const g of a){const I=s1(g,h.get(g.key).overlayedDocument);I!=null&&y.push(new yr(g.key,I,Hv(I.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,y,a)}).next(w=>{f=w;const y=w.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(d,w.batchId,y)})}).then(()=>({batchId:f.batchId,changes:tE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.ga[o.currentUser.toKey()];l||(l=new De(me)),l=l.insert(a,c),o.ga[o.currentUser.toKey()]=l}(r,s.batchId,n),await Oo(r,s.changes),await Qc(r.remoteStore)}catch(s){const i=bf(s,"Failed to persist write");n.reject(i)}}async function VE(t,e){const n=ce(t);try{const r=await Q1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ma.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ta=!0:s.modifiedDocuments.size>0?Ce(o.Ta):s.removedDocuments.size>0&&(Ce(o.Ta),o.Ta=!1))}),await Oo(n,r,e)}catch(r){await Ro(r)}}function Ng(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.da.forEach((i,o)=>{const a=o.view.B_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ce(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.B_(a)&&(l=!0)}),l&&Sf(c)}(r.eventManager,e),s.length&&r.Ea.i_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NN(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ma.get(e),i=s&&s.key;if(i){let o=new De(Y.comparator);o=o.insert(i,st.newNoDocument(i,oe.min()));const a=ue().add(i),c=new Kc(oe.min(),new Map,new De(me),o,a);await VE(r,c),r.Va=r.Va.remove(i),r.ma.delete(e),Of(r)}else await Wu(r.localStore,e,!1).then(()=>Ku(r,e,n)).catch(Ro)}async function DN(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await G1(n.localStore,e);xE(n,r,null),ME(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oo(n,s)}catch(s){await Ro(s)}}async function VN(t,e,n){const r=ce(t);try{const s=await function(o,a){const c=ce(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ce(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);xE(r,e,n),ME(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Oo(r,s)}catch(s){await Ro(s)}}function ME(t,e){(t.pa.get(e)||[]).forEach(n=>{n.resolve()}),t.pa.delete(e)}function xE(t,e,n){const r=ce(t);let s=r.ga[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ga[r.currentUser.toKey()]=s}}function Ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Aa.get(e))t.da.delete(r),n&&t.Ea.ba(r,n);t.Aa.delete(e),t.isPrimaryClient&&t.fa.Rr(e).forEach(r=>{t.fa.containsKey(r)||LE(t,r)})}function LE(t,e){t.Ra.delete(e.path.canonicalString());const n=t.Va.get(e);n!==null&&(bE(t.remoteStore,n),t.Va=t.Va.remove(e),t.ma.delete(n),Of(t))}function Dg(t,e,n){for(const r of n)r instanceof NE?(t.fa.addReference(r.key,e),MN(t,r)):r instanceof DE?(z("SyncEngine","Document no longer in limbo: "+r.key),t.fa.removeReference(r.key,e),t.fa.containsKey(r.key)||LE(t,r.key)):ne()}function MN(t,e){const n=e.key,r=n.path.canonicalString();t.Va.get(n)||t.Ra.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Ra.add(r),Of(t))}function Of(t){for(;t.Ra.size>0&&t.Va.size<t.maxConcurrentLimboResolutions;){const e=t.Ra.values().next().value;t.Ra.delete(e);const n=new Y(Pe.fromString(e)),r=t.ya.next();t.ma.set(r,new bN(n)),t.Va=t.Va.insert(n,r),RE(t.remoteStore,new er(Mn(jc(n.path)),r,"TargetPurposeLimboResolution",cf.ae))}}async function Oo(t,e,n){const r=ce(t),s=[],i=[],o=[];r.da.isEmpty()||(r.da.forEach((a,c)=>{o.push(r.Sa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Tf.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ea.i_(s),await async function(c,l){const u=ce(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>M.forEach(l,f=>M.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>M.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!bo(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.Yi.get(f),_=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(_);u.Yi=u.Yi.insert(f,E)}}}(r.localStore,i))}async function xN(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await TE(n.localStore,e);n.currentUser=e,function(i,o){i.pa.forEach(a=>{a.forEach(c=>{c.reject(new H(C.CANCELLED,o))})}),i.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oo(n,r.ns)}}function LN(t,e){const n=ce(t),r=n.ma.get(e);if(r&&r.Ta)return ue().add(r.key);{let s=ue();const i=n.Aa.get(e);if(!i)return s;for(const o of i){const a=n.da.get(o);s=s.unionWith(a.view.sa)}return s}}function FN(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=VE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NN.bind(null,e),e.Ea.i_=wN.bind(null,e.eventManager),e.Ea.ba=IN.bind(null,e.eventManager),e}function UN(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VN.bind(null,e),e}class Vg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return z1(this.persistence,new W1,e.initialUser,this.serializer)}createPersistence(e){return new H1(Ef.jr,this.serializer)}createSharedClientState(e){return new eN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ng(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xN.bind(null,this.syncEngine),await vN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TN}()}createDatastore(e){const n=zc(e.databaseInfo.databaseId),r=function(i){return new sN(i)}(e.databaseInfo);return function(i,o,a,c){return new aN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new lN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ng(this.syncEngine,n,0),function(){return Sg.v()?new Sg:new tN}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new PN(s,i,o,a,c,l);return u&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ce(n);z("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await ko(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ca(this.observer.next,e)}error(e){this.observer.error?this.Ca(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}Fa(){this.muted=!0}Ca(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=Bv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ll(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await TE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HN(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>kg(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>kg(e.remoteStore,i)),t._onlineComponents=e}function $N(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!$N(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await Ll(t,new Vg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Ll(t,new Vg);return t._offlineComponents}async function FE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Mg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Mg(t,new BN))),t._onlineComponents}function qN(t){return FE(t).then(e=>e.syncEngine)}async function Xa(t){const e=await FE(t),n=e.eventManager;return n.onListen=CN.bind(null,e.syncEngine),n.onUnlisten=kN.bind(null,e.syncEngine),n}function WN(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Nf({next:f=>{o.enqueueAndForget(()=>Cf(i,h));const d=f.docs.has(a);!d&&f.fromCache?l.reject(new H(C.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&c&&c.source==="server"?l.reject(new H(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new kf(jc(a.path),u,{includeMetadataChanges:!0,G_:!0});return Pf(i,h)}(await Xa(t),t.asyncQueue,e,n,r)),r.promise}function KN(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Nf({next:f=>{o.enqueueAndForget(()=>Cf(i,h)),f.fromCache&&c.source==="server"?l.reject(new H(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new kf(a,u,{includeMetadataChanges:!0,G_:!0});return Pf(i,h)}(await Xa(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e,n){if(!n)throw new H(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zN(t,e,n,r){if(e===!0&&r===!0)throw new H(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lg(t){if(!Y.isDocumentKey(t))throw new H(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fg(t){if(Y.isDocumentKey(t))throw new H(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jc(t);throw new H(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ug({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ug(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gO;switch(r.type){case"firstParty":return new vO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xg.get(n);r&&(z("ComponentProvider","Removing Datastore"),xg.delete(n),r.terminate())}(this),Promise.resolve()}}function GN(t,e,n,r={}){var s;const i=(t=Jt(t,Yc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=rt.MOCK_USER;else{a=ey(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new rt(l)}t._authCredentials=new mO(new Uv(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class ar extends Xr{constructor(e,n,r){super(e,n,jc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new Y(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function lM(t,e,...n){if(t=qe(t),BE("collection","path",e),t instanceof Yc){const r=Pe.fromString(e,...n);return Fg(r),new ar(t,null,r)}{if(!(t instanceof _t||t instanceof ar))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Fg(r),new ar(t.firestore,null,r)}}function QN(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Bv.V()),BE("doc","path",e),t instanceof Yc){const r=Pe.fromString(e,...n);return Lg(r),new _t(t,null,new Y(r))}{if(!(t instanceof _t||t instanceof ar))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Lg(r),new _t(t.firestore,t instanceof ar?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new IE(this,"async_queue_retry"),this.eu=()=>{const n=xl();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const e=xl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.tu(),this.nu(e)}enterRestrictedMode(e){if(!this.ja){this.ja=!0,this.Za=e||!1;const n=xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(e){if(this.tu(),this.ja)return new Promise(()=>{});const n=new Pn;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.za.push(e),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(e){if(!bo(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(e){const n=this.Ga.then(()=>(this.Ya=!0,e().catch(r=>{this.Ja=r,this.Ya=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(e,n,r){this.tu(),this.Xa.indexOf(e)>-1&&(n=0);const s=Rf.createAndSchedule(this,e,n,r,i=>this.iu(i));return this.Ha.push(s),s}tu(){this.Ja&&ne()}verifyOperationInProgress(){}async su(){let e;do e=this.Ga,await e;while(e!==this.Ga)}ou(e){for(const n of this.Ha)if(n.timerId===e)return!0;return!1}_u(e){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.su()})}au(e){this.Xa.push(e)}iu(e){const n=this.Ha.indexOf(e);this.Ha.splice(n,1)}}function Bg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Wr extends Yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new JN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jE(this),this._firestoreClient.terminate()}}function YN(t,e){const n=typeof t=="object"?t:Sh(),r=typeof t=="string"?t:e||"(default)",s=Ec(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Y_("firestore");i&&GN(s,...i)}return s}function Xc(t){return t._firestoreClient||jE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jE(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new OO(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,UE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new jN(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ls(ft.fromBase64String(e))}catch(n){throw new H(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ls(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/^__.*__$/;class ZN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class $E{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Mf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.uu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.lu({path:r,Pu:!1});return s.Iu(e),s}Tu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.lu({path:r,Pu:!1});return s.uu(),s}Eu(e){return this.lu({path:void 0,Pu:!0})}du(e){return Za(e,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Iu(this.path.get(e))}Iu(e){if(e.length===0)throw this.du("Document fields must not be empty");if(HE(this.cu)&&XN.test(e))throw this.du('Document fields cannot begin and end with "__"')}}class eD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zc(e)}Vu(e,n,r,s=!1){return new Mf({cu:e,methodName:n,Ru:r,path:ot.emptyPath(),Pu:!1,Au:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xf(t){const e=t._freezeSettings(),n=zc(t._databaseId);return new eD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tD(t,e,n,r,s,i={}){const o=t.Vu(i.merge||i.mergeFields?2:0,e,n,s);Lf("Data must be an object, but it was:",o,r);const a=qE(r,o);let c,l;if(i.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=zu(e,h,n);if(!o.contains(f))throw new H(C.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);KE(u,f)||u.push(f)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ZN(new It(a),c,l)}class el extends Df{_toFieldTransform(e){if(e.cu!==2)throw e.cu===1?e.du(`${this._methodName}() can only appear at the top level of your update data`):e.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof el}}function nD(t,e,n,r){const s=t.Vu(1,e,n);Lf("Data must be an object, but it was:",s,r);const i=[],o=It.empty();Jr(r,(c,l)=>{const u=Ff(e,c,n);l=qe(l);const h=s.Tu(u);if(l instanceof el)i.push(u);else{const f=No(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new xt(i);return new $E(o,a,s.fieldTransforms)}function rD(t,e,n,r,s,i){const o=t.Vu(1,e,n),a=[zu(e,r,n)],c=[s];if(i.length%2!=0)throw new H(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(zu(e,i[f])),c.push(i[f+1]);const l=[],u=It.empty();for(let f=a.length-1;f>=0;--f)if(!KE(l,a[f])){const d=a[f];let _=c[f];_=qe(_);const E=o.Tu(d);if(_ instanceof el)l.push(d);else{const w=No(_,E);w!=null&&(l.push(d),u.set(d,w))}}const h=new xt(l);return new $E(u,h,o.fieldTransforms)}function sD(t,e,n,r=!1){return No(n,t.Vu(r?4:3,e))}function No(t,e){if(WE(t=qe(t)))return Lf("Unsupported field value:",e,t),qE(t,e);if(t instanceof Df)return function(r,s){if(!HE(s.cu))throw s.du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Pu&&e.cu!==4)throw e.du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=No(a,s.Eu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Ja(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ja(s.serializer,i)}}if(r instanceof Vf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ls)return{bytesValue:gE(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yf(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.du(`Unsupported field value: ${Jc(r)}`)}(t,e)}function qE(t,e){const n={};return jv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,s)=>{const i=No(s,e.hu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function WE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Vf||t instanceof Ls||t instanceof _t||t instanceof Df)}function Lf(t,e,n){if(!WE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Jc(n);throw r==="an object"?e.du(t+" a custom object"):e.du(t+" "+r)}}function zu(t,e,n){if((e=qe(e))instanceof Zc)return e._internalPath;if(typeof e=="string")return Ff(t,e);throw Za("Field path arguments must be of type string or ",t,!1,void 0,n)}const iD=new RegExp("[~\\*/\\[\\]]");function Ff(t,e,n){if(e.search(iD)>=0)throw Za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zc(...e.split("."))._internalPath}catch{throw Za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Za(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new H(C.INVALID_ARGUMENT,a+t+c)}function KE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oD extends zE{data(){return super.data()}}function Uf(t,e){return typeof e=="string"?Ff(t,e):e instanceof Zc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bf{}class aD extends Bf{}function uM(t,e,...n){let r=[];e instanceof Bf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof jf).length,a=i.filter(c=>c instanceof tl).length;if(o>1||o>0&&a>0)throw new H(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class tl extends aD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tl(e,n,r)}_apply(e){const n=this._parse(e);return QE(e._query,n),new Xr(e.firestore,e.converter,Fu(e._query,n))}_parse(e){const n=xf(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new H(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){$g(h,u);const d=[];for(const _ of h)d.push(jg(c,i,_));f={arrayValue:{values:d}}}else f=jg(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||$g(h,u),f=sD(a,o,h,u==="in"||u==="not-in");return $e.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function hM(t,e,n){const r=e,s=Uf("where",t);return tl._create(s,r,n)}class jf extends Bf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)QE(o,c),o=Fu(o,c)}(e._query,n),new Xr(e.firestore,e.converter,Fu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function jg(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new H(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yv(e)&&n.indexOf("/")!==-1)throw new H(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!Y.isDocumentKey(r))throw new H(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ug(t,new Y(r))}if(n instanceof _t)return ug(t,n._key);throw new H(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jc(n)}.`)}function $g(t,e){if(!Array.isArray(t)||t.length===0)throw new H(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QE(t,e){if(e.isInequality()){const r=pf(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new H(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Jv(t);i!==null&&cD(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cD(t,e,n){if(!n.isEqual(e))throw new H(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lD{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Vf(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=fr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ce(EE(r));const s=new Yi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JE extends zE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pa extends JE{data(e={}){return super.data(e)}}class YE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pa(this._firestore,this._userDataWriter,r.key,r,new hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new pa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new hi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new pa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new hi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:hD(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t){t=Jt(t,_t);const e=Jt(t.firestore,Wr);return WN(Xc(e),t._key).then(n=>ZE(e,t,n))}class $f extends lD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function dM(t){t=Jt(t,Xr);const e=Jt(t.firestore,Wr),n=Xc(e),r=new $f(e);return GE(t._query),KN(n,t._query).then(s=>new YE(e,r,t,s))}function pM(t,e,n,...r){t=Jt(t,_t);const s=Jt(t.firestore,Wr),i=xf(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof Zc?rD(i,"updateDoc",t._key,e,n,r):nD(i,"updateDoc",t._key,e),XE(s,[o.toMutation(t._key,pn.exists(!0))])}function gM(t,e){const n=Jt(t.firestore,Wr),r=QN(t),s=uD(t.converter,e);return XE(n,[tD(xf(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function mM(t,...e){var n,r,s;t=qe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Bg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof _t)l=Jt(t.firestore,Wr),u=jc(t._key.path),c={next:h=>{e[o]&&e[o](ZE(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Jt(t,Xr);l=Jt(h.firestore,Wr),u=h._query;const f=new $f(l);c={next:d=>{e[o]&&e[o](new YE(l,f,h,d))},error:e[o+1],complete:e[o+2]},GE(t._query)}return function(f,d,_,E){const w=new Nf(E),y=new kf(d,w,_);return f.asyncQueue.enqueueAndForget(async()=>Pf(await Xa(f),y)),()=>{w.Fa(),f.asyncQueue.enqueueAndForget(async()=>Cf(await Xa(f),y))}}(Xc(l),u,a,c)}function XE(t,e){return function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget(async()=>ON(await qN(r),s,i)),i.promise}(Xc(t),e)}function ZE(t,e,n){const r=n.docs.get(e._key),s=new $f(t);return new JE(t,s,e._key,r,new hi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){zs=s})(Gr),Br(new ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Wr(new _O(r.getProvider("auth-internal")),new TO(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hn(ig,"4.1.1",e),hn(ig,"4.1.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="firebasestorage.googleapis.com",tT="storageBucket",fD=2*60*1e3,dD=10*60*1e3,pD=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends vn{constructor(e,n,r=0){super(Fl(e),`Firebase Storage: ${n} (${Fl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Fl(t){return"storage/"+t}function Hf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Se.UNKNOWN,t)}function gD(t){return new Ve(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function mD(t){return new Ve(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _D(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Se.UNAUTHENTICATED,t)}function yD(){return new Ve(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vD(t){return new Ve(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nT(){return new Ve(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rT(){return new Ve(Se.CANCELED,"User canceled the upload/download.")}function ED(t){return new Ve(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function TD(t){return new Ve(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wD(){return new Ve(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tT+"' property when initializing the app?")}function sT(){return new Ve(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ID(){return new Ve(Se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function AD(){return new Ve(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RD(t){return new Ve(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gu(t){return new Ve(Se.INVALID_ARGUMENT,t)}function iT(){return new Ve(Se.APP_DELETED,"The Firebase app was deleted.")}function bD(t){return new Ve(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Pi(t,e){return new Ve(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ri(t){throw new Ve(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(r.path==="")return r;throw TD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),_={bucket:1,path:3},E=n===eT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",y=new RegExp(`^https?://${E}/${s}/${w}`,"i"),I=[{regex:a,indices:c,postModify:i},{regex:d,indices:_,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<I.length;v++){const R=I[v],D=R.regex.exec(e);if(D){const V=D[R.indices.bucket];let A=D[R.indices.path];A||(A=""),r=new Lt(V,A),R.postModify(r);break}}if(r==null)throw ED(e);return r}}class PD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(d,c())},w)}function f(){i&&clearTimeout(i)}function d(w,...y){if(l){f();return}if(w){f(),u.call(null,w,...y);return}if(c()||o){f(),u.call(null,w,...y);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let _=!1;function E(w){_||(_=!0,f(),!l&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function SD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){return t!==void 0}function OD(t){return typeof t=="function"}function ND(t){return typeof t=="object"&&!Array.isArray(t)}function nl(t){return typeof t=="string"||t instanceof String}function Hg(t){return qf()&&t instanceof Blob}function qf(){return typeof Blob<"u"&&!Hb()}function qg(t,e,n,r){if(r<e)throw Gu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function oT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lr||(Lr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,_)=>{this.resolve_=d,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new na(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Lr.NO_ERROR,c=i.getStatus();if(!a||aT(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Lr.ABORT;r(!1,new na(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new na(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());kD(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Hf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?iT():rT();o(c)}else{const c=nT();o(c)}};this.canceled_?n(!1,new na(!1,null,!0)):this.backoffId_=CD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class na{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function LD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FD(t,e,n,r,s,i,o=!0){const a=oT(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return xD(l,e),VD(l,n),MD(l,i),LD(l,r),new DD(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BD(...t){const e=UD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(qf())return new Blob(t);throw new Ve(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){if(typeof atob>"u")throw RD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ul{constructor(e,n){this.data=e,this.contentType=n||null}}function HD(t,e){switch(t){case un.RAW:return new Ul(cT(e));case un.BASE64:case un.BASE64URL:return new Ul(lT(t,e));case un.DATA_URL:return new Ul(WD(e),KD(e))}throw Hf()}function cT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qD(t){let e;try{e=decodeURIComponent(t)}catch{throw Pi(un.DATA_URL,"Malformed data URL.")}return cT(e)}function lT(t,e){switch(t){case un.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Pi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Pi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$D(e)}catch(s){throw s.message.includes("polyfill")?s:Pi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class uT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Pi(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function WD(t){const e=new uT(t);return e.base64?lT(un.BASE64,e.rest):qD(e.rest)}function KD(t){return new uT(t).contentType}function zD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){let r=0,s="";Hg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Hg(this.data_)){const r=this.data_,s=jD(r,e,n);return s===null?null:new Zn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zn(r,!0)}}static getBlob(...e){if(qf()){const n=e.map(r=>r instanceof Zn?r.data_:r);return new Zn(BD.apply(null,n))}else{const n=e.map(o=>nl(o)?HD(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Zn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t){let e;try{e=JSON.parse(t)}catch{return null}return ND(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function fT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t,e){return e}class dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||JD}}let ra=null;function YD(t){return!nl(t)||t.length<2?t:fT(t)}function dT(){if(ra)return ra;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(i,o){return YD(o)}const n=new dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new dt("size");return s.xform=r,t.push(s),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),ra=t,ra}function XD(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Lt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ZD(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return XD(r,t),r}function pT(t,e,n){const r=hT(e);return r===null?null:ZD(t,r,n)}function eV(t,e,n,r){const s=hT(e);if(s===null||!nl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=Do(f,n,r),_=oT({alt:"media",token:l});return d+_})[0]}function gT(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Js{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){if(!t)throw Hf()}function Wf(t,e){function n(r,s){const i=pT(t,s,e);return Cn(i!==null),i}return n}function tV(t,e){function n(r,s){const i=pT(t,s,e);return Cn(i!==null),eV(i,s,t.host,t._protocol)}return n}function Vo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=yD():s=_D():n.getStatus()===402?s=mD(t.bucket):n.getStatus()===403?s=vD(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function mT(t){const e=Vo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=gD(t.path)),i.serverResponse=s.serverResponse,i}return n}function nV(t,e,n){const r=e.fullServerUrl(),s=Do(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Js(s,i,Wf(t,n),o);return a.errorHandler=mT(e),a}function rV(t,e,n){const r=e.fullServerUrl(),s=Do(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Js(s,i,tV(t,n),o);return a.errorHandler=mT(e),a}function sV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _T(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sV(null,e)),r}function iV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let v=0;v<2;v++)I=I+Math.random().toString().slice(2);return I}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=_T(e,r,s),u=gT(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",d=Zn.getBlob(h,r,f);if(d===null)throw sT();const _={name:l.fullPath},E=Do(i,t.host,t._protocol),w="POST",y=t.maxUploadRetryTime,g=new Js(E,w,Wf(t,n),y);return g.urlParams=_,g.headers=o,g.body=d.uploadData(),g.errorHandler=Vo(e),g}class ec{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Kf(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Cn(!1)}return Cn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function oV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=_T(e,r,s),a={name:o.fullPath},c=Do(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=gT(o,n),f=t.maxUploadRetryTime;function d(E){Kf(E);let w;try{w=E.getResponseHeader("X-Goog-Upload-URL")}catch{Cn(!1)}return Cn(nl(w)),w}const _=new Js(c,l,d,f);return _.urlParams=a,_.headers=u,_.body=h,_.errorHandler=Vo(e),_}function aV(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=Kf(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Cn(!1)}h||Cn(!1);const f=Number(h);return Cn(!isNaN(f)),new ec(f,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Js(n,o,i,a);return c.headers=s,c.errorHandler=Vo(e),c}const Wg=256*1024;function cV(t,e,n,r,s,i,o,a){const c=new ec(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw ID();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,f=h+u;let d="";u===0?d="finalize":l===u?d="upload, finalize":d="upload";const _={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},E=r.slice(h,f);if(E===null)throw sT();function w(v,R){const D=Kf(v,["active","final"]),V=c.current+u,A=r.size();let k;return D==="final"?k=Wf(e,i)(v,R):k=null,new ec(V,A,D==="final",k)}const y="POST",g=e.maxUploadRetryTime,I=new Js(n,y,w,g);return I.headers=_,I.body=E.uploadData(),I.progressCallback=a||null,I.errorHandler=Vo(t),I}const Tt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Bl(t){switch(t){case"running":case"pausing":case"canceling":return Tt.RUNNING;case"paused":return Tt.PAUSED;case"success":return Tt.SUCCESS;case"canceled":return Tt.CANCELED;case"error":return Tt.ERROR;default:return Tt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n,r){if(OD(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class uV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ri("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ri("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ri("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ri("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ri("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hV extends uV{initXhr(){this.xhr_.responseType="text"}}function ls(){return new hV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=dT(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(aT(s.status,[]))if(i)s=nT();else{this.sleepTime=Math.max(this.sleepTime*2,pD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Se.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=oV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ls,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=aV(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ls,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Wg*this._chunkMultiplier,n=new ec(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=cV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ls,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Wg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=nV(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ls,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=iV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ls,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=rT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Bl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new lV(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Bl(this._state)){case Tt.SUCCESS:is(this._resolve.bind(null,this.snapshot))();break;case Tt.CANCELED:case Tt.ERROR:const n=this._reject;is(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Bl(this._state)){case Tt.RUNNING:case Tt.PAUSED:e.next&&is(e.next.bind(e,this.snapshot))();break;case Tt.SUCCESS:e.complete&&is(e.complete.bind(e))();break;case Tt.CANCELED:case Tt.ERROR:e.error&&is(e.error.bind(e,this._error))();break;default:e.error&&is(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Kr(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fT(this._location.path)}get storage(){return this._service}get parent(){const e=GD(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new Kr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bD(e)}}function dV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new fV(t,new Zn(e),n)}function pV(t){t._throwIfRoot("getDownloadURL");const e=rV(t.storage,t._location,dT());return t.storage.makeRequestWithTokens(e,ls).then(n=>{if(n===null)throw AD();return n})}function gV(t,e){const n=QD(t._location.path,e),r=new Lt(t._location.bucket,n);return new Kr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(t){return/^[A-Za-z]+:\/\//.test(t)}function _V(t,e){return new Kr(t,e)}function yT(t,e){if(t instanceof zf){const n=t;if(n._bucket==null)throw wD();const r=new Kr(n,n._bucket);return e!=null?yT(r,e):r}else return e!==void 0?gV(t,e):t}function yV(t,e){if(e&&mV(e)){if(t instanceof zf)return _V(t,e);throw Gu("To use ref(service, url), the first argument must be a Storage instance.")}else return yT(t,e)}function Kg(t,e){const n=e==null?void 0:e[tT];return n==null?null:Lt.makeFromBucketSpec(n,t)}function vV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ey(s,t.app.options.projectId))}class zf{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=eT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fD,this._maxUploadRetryTime=dD,this._requests=new Set,s!=null?this._bucket=Lt.makeFromBucketSpec(s,this._host):this._bucket=Kg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=Kg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new PD(iT());{const o=FD(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const zg="@firebase/storage",Gg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="storage";function _M(t,e,n){return t=qe(t),dV(t,e,n)}function yM(t){return t=qe(t),pV(t)}function vM(t,e){return t=qe(t),yV(t,e)}function EV(t=Sh(),e){t=qe(t);const r=Ec(t,vT).getImmediate({identifier:e}),s=Y_("storage");return s&&TV(r,...s),r}function TV(t,e,n,r={}){vV(t,e,n,r)}function wV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new zf(n,r,s,e,Gr)}function IV(){Br(new ur(vT,wV,"PUBLIC").setMultipleInstances(!0)),hn(zg,Gg,""),hn(zg,Gg,"esm2017")}IV();const AV=Fn(t=>{const e=mc(),n={apiKey:e.public.FB_API_KEY,authDomain:e.public.FB_AUTH_DOMAIN,projectId:e.public.FB_PROJECT_ID,storageBucket:e.public.FB_STORAGE_BUCKET,messagingSenderId:e.public.FB_MESSAGING_SENDER_ID,appId:e.public.FB_APP_ID,measurementId:e.public.FB_MEASUREMENT_ID},r=ry(n),s=ak(r),i=YN(r),o=EV(r);return{provide:{firestore:i,auth:s,firestorage:o}}}),RV=[lR,vb,Eb,Sb,kb,Ob,Nb,Db,AV],bV=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Qu=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&bV(t.route,n));return typeof r=="function"?r(t.route):r},PV=(t,e)=>({default:()=>t?Ut(Uw,t===!0?{}:t,e):e}),CV=gr({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return Vr(ao,ro(r)),()=>Ut(t.vnode,{ref:t.vnodeRef})}}),ET=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?Ut(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),SV=gr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const r=Le(),s=Ft(),i=at(ao,null);n({pageRef:s});const o=at(S_,null);let a;const c=r.deferHydration();return()=>Ut($_,{name:t.name,route:t.route,...e},{default:l=>{const u=NV(i,l.route,l.Component),h=i&&i.matched.length===l.route.matched.length;if(!l.Component)return a&&!h?a:void 0;if(a&&o&&!o.isCurrent(l.route))return a;if(u&&i&&(!o||o!=null&&o.isCurrent(i)))return h?a:null;const f=Qu(l,t.pageKey),d=!!(t.transition??l.route.meta.pageTransition??iu),_=d&&OV([t.transition,l.route.meta.pageTransition,iu,{onAfterLeave:()=>{r.callHook("page:transition:finish",l.Component)}}].filter(Boolean));return a=ET(pc,d&&_,PV(t.keepalive??l.route.meta.keepalive??zA,Ut(fh,{suspensible:!0,onPending:()=>r.callHook("page:start",l.Component),onResolve:()=>{pr(()=>r.callHook("page:finish",l.Component).finally(c))}},{default:()=>Ut(CV,{key:f,vnode:l.Component,route:l.route,renderKey:f,trackRootNodes:d,vnodeRef:s})}))).default(),a}})}});function kV(t){return Array.isArray(t)?t:t?[t]:[]}function OV(t){const e=t.map(n=>({...n,onAfterLeave:kV(n.onAfterLeave)}));return tR(...e)}function NV(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&Qu({route:e,Component:n})!==Qu({route:t,Component:n})}const DV=gr({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await br[t.name]().then(r=>r.default||r);return()=>Ut(n,t.layoutProps,e.slots)}}),VV=gr({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=Le(),r=at(ao),s=r===k_()?fb():r,i=Mt(()=>ke(t.name)??s.meta.layout??"default"),o=Ft();e.expose({layoutRef:o});const a=n.deferHydration();return()=>{const c=i.value&&i.value in br,l=s.meta.layoutTransition??KA;return ET(pc,c&&l,{default:()=>Ut(fh,{suspensible:!0,onResolve:()=>{pr(a)}},{default:()=>Ut(MV,{layoutProps:s_(e.attrs,{ref:o}),key:i.value,name:i.value,shouldProvide:!t.name,hasTransition:!!l},e.slots)})}).default()}}}),MV=gr({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Vr(S_,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in br)?(s=(r=e.slots).default)==null?void 0:s.call(r):Ut(DV,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),xV=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LV={};function FV(t,e){const n=SV,r=VV;return on(),In(r,null,{default:uh(()=>[Me(n)]),_:1})}const UV=xV(LV,[["render",FV]]),BV={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(h=>({text:h.replace("webpack:/","").replace(".vue",".js").trim(),internal:h.includes("node_modules")&&!h.includes(".cache")||h.includes("internal")||h.includes("new Promise")})).map(h=>`<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?ud(()=>We(()=>import("./error-404.6a87d63d.js"),["./error-404.6a87d63d.js","./nuxt-link.d31b60c2.js","./error-404.871584dc.css"],import.meta.url).then(h=>h.default||h)):ud(()=>We(()=>import("./error-500.447784a1.js"),["./error-500.447784a1.js","./error-500.5504fd74.css"],import.meta.url).then(h=>h.default||h));return(h,f)=>(on(),In(ke(u),NT(n_({statusCode:ke(r),statusMessage:ke(i),description:ke(o),stack:ke(a)})),null,16))}},Qg={__name:"nuxt-root",setup(t){const e=()=>null,n=Le(),r=n.deferHydration(),s=!1;Vr(ao,k_()),n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const i=_c();Um((a,c,l)=>{if(n.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),cR(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>us(a)),!1});const{islandContext:o}=!1;return(a,c)=>(on(),In(fh,{onResolve:ke(r)},{default:uh(()=>[ke(i)?(on(),In(ke(BV),{key:0,error:ke(i)},null,8,["error"])):ke(o)?(on(),In(ke(e),{key:1,context:ke(o)},null,8,["context"])):ke(s)?(on(),In(Kw(ke(s)),{key:2})):(on(),In(ke(UV),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=M0.create({baseURL:L0()}));let Jg;{let t;Jg=async function(){var i,o;if(t)return t;const r=!!((i=window.__NUXT__)!=null&&i.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?zI(Qg):KI(Qg),s=J0({vueApp:r});try{await X0(s,RV)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount("#"+GA),await s.hooks.callHook("app:mounted",r),await pr()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},t=Jg().catch(e=>{console.error("Error while mounting app:",e)})}export{mM as $,QV as A,us as B,KV as C,eM as D,In as E,wt as F,XV as G,sc as H,vM as I,_M as J,Le as K,uM as L,hM as M,Mt as N,dM as O,gM as P,GV as Q,io as R,gh as S,hc as T,Ut as U,WV as V,gc as W,u0 as X,nu as Y,d_ as Z,xV as _,t_ as a,Dw as a0,lM as a1,Jn as a2,iM as a3,nM as a4,gm as a5,sm as a6,LT as a7,Oi as a8,pr as a9,sM as aa,Me as b,JV as c,r_ as d,HV as e,gr as f,k_ as g,qs as h,ke as i,QN as j,fM as k,Oe as l,YV as m,pM as n,on as o,$V as p,yM as q,Ft as r,rM as s,jV as t,tM as u,Nr as v,uh as w,qV as x,ZV as y,zV as z};
