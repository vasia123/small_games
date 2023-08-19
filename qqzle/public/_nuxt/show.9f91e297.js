import{u as V}from"./useFirebaseDB.5baf7228.js";import{f as $,g as j,r as v,j as C,A,B as D,$ as q,a0 as M,o as t,c as a,a as o,t as i,d as w,m as _,F as G,C as R,k as B,H as O,p as z,e as H,_ as L}from"./entry.0534d1ea.js";const J=g=>(z("data-v-87903ee2"),g=g(),H(),g),K={key:0},P={class:"py-5"},U={key:0},W=["src"],X={key:1,class:"grid grid-cols-2 gap-4"},Y=["onClick"],Z={key:1},ee={class:"py-5"},se={key:0},te=["src"],ae={key:1,class:"grid grid-cols-2 gap-4"},ne=["onClick"],oe={class:"py-5"},ue={key:2},le=J(()=>o("p",null,"Ожидание начала игры...",-1)),re=[le],ce=$({__name:"show",async setup(g){let u,m;const{gamesAndQuestionsCol:Q,ongoingGamesCol:S}=V(),p=j();let h;Array.isArray(p.params.gameId)?h=p.params.gameId.join(""):h=p.params.gameId;const s=v(null),l=v(null),n=v(null),r=v(null),y=v(null),I=C(S,h),f=([u,m]=A(()=>B(I)),u=await u,m(),u);if(!f.exists())throw D({statusCode:404,statusMessage:"Игра не найдена"});const E=f.data(),F=C(Q,E.gameID),k=([u,m]=A(()=>B(F)),u=await u,m(),u);if(!k.exists())throw D({statusCode:404,statusMessage:"Игра не найдена"});const N=k.data(),T=q(I,c=>{var x,e;if(c.exists()){const d=c.data();(d.currentQuestionIndex!==((x=s.value)==null?void 0:x.currentQuestionIndex)||d.currentRoundIndex!==((e=s.value)==null?void 0:e.currentRoundIndex))&&(s.value=d,r.value=N.rounds[s.value.currentRoundIndex],l.value=r.value.questions[s.value.currentQuestionIndex],s.value.currentAnswersIndex>-1?n.value=r.value.questions[s.value.currentAnswersIndex]:n.value=null)}});M(c=>{c(()=>{T()})});const b=c=>{y.value=c};return(c,x)=>(t(),a("div",null,[s.value&&s.value.status==="started"&&l.value&&r.value&&s.value.currentAnswersIndex<0?(t(),a("div",K,[o("div",null,i(r.value.name),1),o("div",P,[w(" Вопрос: "),o("b",null,i(l.value.text),1)]),l.value.image?(t(),a("div",U,[o("img",{src:l.value.image,alt:"Изображение вопроса"},null,8,W)])):_("",!0),l.value.guessType==="options"?(t(),a("div",X,[(t(!0),a(G,null,R(l.value.guessOptions,e=>(t(),a("button",{key:e,class:O(["btn",{"btn-accent":y.value===e,"btn-primary":y.value!==e}]),onClick:d=>b(e)},i(e),11,Y))),128))])):_("",!0)])):_("",!0),s.value&&s.value.status==="started"&&l.value&&r.value&&s.value.currentAnswersIndex>=0&&n.value?(t(),a("div",Z,[o("div",null,i(r.value.name),1),o("div",ee,[w(" Вопрос: "),o("b",null,i(n.value.text),1)]),n.value.image?(t(),a("div",se,[o("img",{src:n.value.image,alt:"Изображение вопроса"},null,8,te)])):_("",!0),n.value.guessType==="options"?(t(),a("div",ae,[(t(!0),a(G,null,R(n.value.guessOptions,e=>(t(),a("button",{key:e,class:O(["btn",{"btn-accent":n.value.answer===e,"btn-primary":n.value.answer!==e}]),onClick:d=>b(e)},i(e),11,ne))),128))])):_("",!0),o("div",oe,[w(" Ответ: "),o("b",null,i(n.value.answer),1)])])):(t(),a("div",ue,re))]))}});const ve=L(ce,[["__scopeId","data-v-87903ee2"]]);export{ve as default};
