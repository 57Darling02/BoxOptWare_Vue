import{d as _,c as d,a as t,u as y,o as l,_ as u,r as g,b,e as v,F as f,f as M,g as c,h as $,R as k}from"./index-CLD_l2RJ.js";const x={class:"navbar"},w=_({__name:"navbar",setup(m){const n=y();function r(){n.push({name:"login"})}function i(){n.push({name:"workpage"})}function e(){n.push({name:"home"})}return(o,a)=>(l(),d("div",x,[t("button",{type:"button",class:"title",onClick:e},a[0]||(a[0]=[t("span",null,"智拼模组",-1),t("span",{class:"fa-solid fa-cubes"},null,-1)])),t("div",{class:"right-buttons"},[t("button",{type:"button",onClick:r},a[1]||(a[1]=[t("span",null,"登入",-1),t("span",{class:"fa-solid fa-user"},null,-1)])),t("button",{type:"button",onClick:i},a[2]||(a[2]=[t("span",null,"装箱",-1),t("span",{class:"fa-solid fa-cube"},null,-1)]))])]))}}),I=u(w,[["__scopeId","data-v-d79a0320"]]),C={id:"bg"},R={class:"body",id:"bodyId"},B=800,E=900,N={__name:"Starrysky",setup(m){let n=g(null);b(()=>{Array.from(n.value.children).forEach(o=>{let a=.2+Math.random()*1,s=E+Math.random()*300;o.style.transformOrigin=`0 0 ${s}px`,o.style.transform=`
          translate3d(0,0,-${s}px)
          rotateY(${Math.random()*360}deg)
          rotateX(${Math.random()*-50}deg)
          scale(${a},${a})`})});const r=()=>{let e=document.createElement("div");e.classList.add("meteor"),e.style.position="absolute",e.style.height="2px",e.style.background="linear-gradient(to right, #00ffff, rgba(0, 0, 0, 0))",e.style.width=Math.random()*10+100+"px",e.style.right=Math.random()*window.innerWidth+"px",e.style.top=Math.random()*(window.innerHeight/3)+"px",document.getElementById("bodyId").prepend(e);const o=e.getBoundingClientRect(),a=window.innerHeight/2-o.top+Math.random()*50,s=a/(160+Math.random()*50)*1e3;e.style.animation=`myMeteor ${s}ms linear forwards`;const h=`@keyframes myMeteor {
      0% {
        transform: translate(0, 0) rotate(-30deg); // ��ʼλ��
      }
      90%{
        opacity: .8;
      }
      100% {
        opacity: 0;
        transform: translate(-${a}px, ${a}px) rotate(-30deg); // �յ�λ��
      }
    }`,p=document.createElement("style");p.innerHTML=h,document.head.appendChild(p),setTimeout(()=>{e.remove()},s)},i=setInterval(()=>{r()},5e3+Math.random()*2e3);return v(()=>{clearInterval(i)}),(e,o)=>(l(),d("div",C,[t("div",R,[t("div",{class:"stars",ref_key:"starsRef",ref:n},[(l(),d(f,null,M(B,(a,s)=>t("div",{class:"star",key:s})),64))],512)])]))}},H=u(N,[["__scopeId","data-v-7d99f4f0"]]),L={class:"MainPage"},P={class:"nav"},V={class:"show"},F=_({__name:"MainPage",setup(m){return(n,r)=>(l(),d(f,null,[c(H),t("div",L,[t("div",P,[c(I)]),t("div",V,[c($(k))])])],64))}}),T=u(F,[["__scopeId","data-v-8e261bb8"]]);export{T as default};
