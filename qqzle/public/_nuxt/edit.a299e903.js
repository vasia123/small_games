import{_ as D}from"./InputText.vue.d807619c.js";import{_ as F}from"./InputTextarea.vue.0bdba224.js";import{_ as N}from"./nuxt-link.d31b60c2.js";import{_ as R}from"./TitleCard.vue.1933d09b.js";import{_ as $}from"./ModalError.vue.68c0c190.js";import{u as B}from"./useFirebaseDB.5baf7228.js";import{f as E,g as T,h as U,r as i,o as f,c as g,b as n,w as v,i as s,F as j,j as x,k as A,a as _,l as b,d as y,m as G,n as M}from"./entry.0534d1ea.js";const L={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Q={class:"flex justify-between mt-8"},q=["disabled"],z={key:0,class:"loading loading-spinner"},Z=E({__name:"edit",setup(H){const{gamesAndQuestionsCol:p}=B(),d=T(),V=U();let r;Array.isArray(d.params.gameId)?r=d.params.gameId.join(""):r=d.params.gameId;const l=i(""),c=i(!1),t=i(""),o=i("");(async()=>{try{const e=x(p,r),a=await A(e);if(a.exists()){const m=a.data();t.value=m.name,o.value=m.description}else l.value="Игра не найдена"}catch(e){e instanceof Error?l.value=e.message:console.error("Unexpected error",e)}})();const h=async()=>{c.value=!0;try{const e=x(p,r);await M(e,{name:t.value,description:o.value}),await V.push("/admin")}catch(e){c.value=!1,e instanceof Error?l.value=e.message:console.error("Unexpected error",e)}};return(e,a)=>{const m=D,k=F,w=N,C=R,I=$;return f(),g(j,null,[n(C,{title:`Редактирование игры: ${s(t)}`},{default:v(()=>[_("div",L,[n(m,{modelValue:s(t),"onUpdate:modelValue":a[0]||(a[0]=u=>b(t)?t.value=u:null),type:"text","label-title":"Название"},null,8,["modelValue"]),n(k,{modelValue:s(o),"onUpdate:modelValue":a[1]||(a[1]=u=>b(o)?o.value=u:null),"label-title":"Описание"},null,8,["modelValue"])]),_("div",Q,[n(w,{class:"btn btn-ghost",to:"/admin/"},{default:v(()=>[y("Отмена")]),_:1}),_("button",{class:"btn btn-primary",disabled:s(c),onClick:h},[s(c)?(f(),g("span",z)):G("",!0),y(" Сохранить изменения ")],8,q)])]),_:1},8,["title"]),n(I,{message:s(l)},null,8,["message"])],64)}}});export{Z as default};
