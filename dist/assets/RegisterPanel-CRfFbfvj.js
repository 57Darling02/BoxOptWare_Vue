import{d as c,r as m,f,c as w,a as s,w as l,v as i,g as v,n as g,h as y,i as r,b as k,j as _,e as b,u as x,o as h,k as V,_ as C}from"./index-CJ-_H11i.js";const U={id:"register-form"},R={class:"input-wrap"},q={class:"input-wrap"},A=["type"],B={class:"input-wrap"},L={class:"Lic"},M={class:"login"},N=c({__name:"RegisterPanel",setup(P){x();const t=m("password");function d(){t.value=t.value==="password"?"text":"password"}const a=f({username:"",password:"",anhao:"",lic:!1});async function u(){try{alert(`username: ${a.username} 
password: ${a.password} 
lic:${a.lic}`)}catch(n){alert("An error occurred: "+n.message)}}function p(){alert("114514")}return(n,e)=>(h(),w("form",U,[e[9]||(e[9]=s("h1",null," Welcome to Web ",-1)),s("div",R,[l(s("input",{type:"text",placeholder:"Your email","onUpdate:modelValue":e[0]||(e[0]=o=>a.username=o),spellcheck:"false",autocomplete:"username",pattern:"[a-zA-Z0-9_]{4,20}",required:""},null,512),[[i,a.username]]),e[4]||(e[4]=s("i",{class:"fa-solid fa-user"},null,-1))]),s("div",q,[l(s("input",{type:t.value,placeholder:"Your password","onUpdate:modelValue":e[1]||(e[1]=o=>a.password=o),spellcheck:"false",autocomplete:"current-password",title:"Username must be 4-20 characters long and can only contain letters, numbers, and underscores.",required:""},null,8,A),[[v,a.password]]),s("i",{class:g([t.value=="password"?"fa-solid fa-eye":"fa-solid fa-eye-slash","toggle-password"]),onClick:d},null,2)]),s("div",B,[l(s("input",{type:"number",placeholder:"请输入暗号","onUpdate:modelValue":e[2]||(e[2]=o=>a.anhao=o),spellcheck:"false",autocomplete:"username",required:""},null,512),[[i,a.anhao]]),e[5]||(e[5]=s("i",{class:"fa-solid fa-user"},null,-1))]),s("div",L,[s("label",null,[l(s("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=o=>a.lic=o)},null,512),[[y,a.lic]]),e[6]||(e[6]=r(" 同意用户协议 "))]),s("div",null,[s("a",{href:"#",onClick:p},"关于暗号")])]),s("button",{onClick:u},"register"),s("p",M,[e[8]||(e[8]=r("Already have account? ")),k(b(V),{to:{name:"login"}},{default:_(()=>e[7]||(e[7]=[r("Login")])),_:1})])]))}}),z=C(N,[["__scopeId","data-v-1afc83f7"]]);export{z as default};
