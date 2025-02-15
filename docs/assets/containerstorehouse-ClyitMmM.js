import{u as H}from"./Container-B9kWBGXR.js";import{_ as Q}from"./tres3dprop.vue_vue_type_style_index_0_lang-D4RO86zl.js";import{b as X,m as S}from"./show3d-B-zkq70T.js";import{d as Y,B as Z,r as f,f as ee,y as U,q as E,j as l,m as a,b as e,a as n,c as z,p as te,e as le,F as oe,h as V,s as ne,l as h,o as x,t as se,_ as ae}from"./index-v_keKozW.js";const ue="/assets/aau-BObzN6D1.png",ie="/assets/ake-kmJWk8pi.png",de="/assets/amf-slcw6Gj-.png",me={style:{padding:"12px","border-top":"1px solid var(--el-border-color)"}},re={class:"show"},ce={class:"config"},_e={class:"box-config"},pe={key:1},fe={class:"instruction"},xe={class:"word"},ve={key:2},ye={class:"instruction"},be={class:"word"},ge={key:3},we={class:"instruction"},Ve={class:"word"},he=Y({__name:"containerstorehouse",setup(ke){const d=H(),{container_list:N}=Z(d),k=f("1-1"),$=f(1),s=f(1),o=ee({name:"箱型",lx:1,ly:1,lz:1,mass:1,module:[]}),G=f([]),F=f([]),C=f([]),O=f([0,0,0]),j=()=>{const{lx:u,ly:t,lz:c,mass:g}=o;if([u,t,c,g].every(v=>typeof v=="number")&&s.value>3)C.value=[new X([u,t,c],[0,0,0],0,"#A39480",!0,.5,!1,"center")],F.value=[new S([u,t,c],[0,0,0],"#FFFFE0",!1,0,!0,"center")];else{let v=[];for(const w of N.value[s.value-1].module){const{x:I,y:_,z:p,lx:r,ly:y,lz:A}=w;v.push(new S([r,y,A],[I,_,p],"#FFFFE0",!0,.5,!1,"corner"))}F.value=v,C.value=[]}};U(o,(u,t)=>{j()},{immediate:!0}),U(k,(u,t)=>{console.log(u);const[c,g]=u.split("-");$.value=parseInt(c),s.value=parseInt(g);const m=N.value[s.value-1];o.name=m.name,o.lx=m.lx,o.ly=m.ly,o.lz=m.lz,o.mass=m.mass,o.module=m.module,console.log(o.module)});const D=u=>{k.value=u},K=()=>{d.container_list.push({name:"默认规则集装箱",lx:1,ly:1,lz:1,mass:1,module:[]})},R=()=>{s.value<=3?h({message:"无法修改经典箱型"}):(d.container_list[s.value-1]={...o},h({message:`集装箱 ${o.name} 信息修改成功`}))},T=()=>{if(s.value<=3){h({message:"无法修改经典箱型"});return}if(h({message:`集装箱 ${d.container_list[s.value-1].name} 信息删除成功`}),d.container_list.splice(s.value-1,1),d.container_list.length>0){const u=s.value-1>=d.container_list.length?d.container_list.length-1:s.value-1;k.value=`1-${u+1}`}else o.name="",o.lx=1,o.ly=1,o.lz=1,o.mass=1,h({message:"最后一个集装箱已被删除"})},q=[{num:"数量",box:"319"},{num:"载具重量",box:"220kg"},{num:"适载机型",box:"747,747F,777,Airbus"}],J=[{num:"数量",box:"319"},{num:"载具重量",box:"330kg"},{num:"适载机型",box:"747,747F,777,Airbus"}],L=[{num:"数量",box:"319"},{num:"载具重量",box:"355kg"},{num:"适载机型",box:"747,747F"}];return(u,t)=>{const c=a("el-menu-item"),g=a("el-sub-menu"),m=a("el-menu"),v=a("el-scrollbar"),w=a("el-button"),I=a("el-aside"),_=a("el-input"),p=a("el-form-item"),r=a("el-col"),y=a("el-row"),A=a("el-form"),b=a("el-table-column"),B=a("el-table"),P=a("el-main"),M=a("el-container");return x(),E(M,{class:"layout-container",style:{height:"100%"}},{default:l(()=>[e(I,{width:"200px",style:{display:"flex","flex-direction":"column"}},{default:l(()=>[e(v,null,{default:l(()=>[e(m,{"default-openeds":["1"],onSelect:D,"default-active":k.value},{default:l(()=>[e(g,{index:"1"},{title:l(()=>t[5]||(t[5]=[V("集装箱")])),default:l(()=>[(x(!0),z(oe,null,te(le(d).container_list,(i,W)=>(x(),E(c,{key:i.name,index:`1-${W+1}`},{default:l(()=>[V(se(i.name),1)]),_:2},1032,["index"]))),128))]),_:1})]),_:1},8,["default-active"])]),_:1}),n("div",me,[e(w,{type:"primary",style:{width:"100%"},onClick:K},{default:l(()=>t[6]||(t[6]=[V(" 添加箱型 ")])),_:1})])]),_:1}),e(M,null,{default:l(()=>[e(P,null,{default:l(()=>[n("div",re,[e(Q,{main_containers:G.value,module_containers:F.value,boxes:C.value,centerOfGravity:O.value},null,8,["main_containers","module_containers","boxes","centerOfGravity"])]),n("div",ce,[n("div",_e,[s.value>3?(x(),E(A,{key:0,model:o},{default:l(()=>[e(y,{gutter:15},{default:l(()=>[e(r,{span:24},{default:l(()=>[e(p,{label:"集装箱名称"},{default:l(()=>[e(_,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=i=>o.name=i),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,{gutter:15},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(p,{label:"长"},{default:l(()=>[e(_,{style:{"max-width":"80px"},modelValue:o.lx,"onUpdate:modelValue":t[1]||(t[1]=i=>o.lx=i),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(p,{label:"宽"},{default:l(()=>[e(_,{style:{"max-width":"80px"},modelValue:o.ly,"onUpdate:modelValue":t[2]||(t[2]=i=>o.ly=i),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,{gutter:15},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(p,{label:"高"},{default:l(()=>[e(_,{style:{"max-width":"80px"},modelValue:o.lz,"onUpdate:modelValue":t[3]||(t[3]=i=>o.lz=i),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(p,{label:"载重"},{default:l(()=>[e(_,{style:{"max-width":"80px"},modelValue:o.mass,"onUpdate:modelValue":t[4]||(t[4]=i=>o.mass=i),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,{gutter:15},{default:l(()=>[e(r,{span:12},{default:l(()=>[e(w,{type:"primary",style:{width:"100%"},onClick:R},{default:l(()=>t[7]||(t[7]=[V("修改")])),_:1})]),_:1}),e(r,{span:12},{default:l(()=>[e(w,{type:"danger",style:{width:"100%"},onClick:T},{default:l(()=>t[8]||(t[8]=[V("删除")])),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):s.value==1?(x(),z("div",pe,[t[10]||(t[10]=n("div",{class:"name"},[n("b",null,"AKE型集装器")],-1)),n("div",fe,[t[9]||(t[9]=n("img",{src:ue,alt:"aau型",style:{width:"100%"}},null,-1)),n("div",xe,[e(B,{data:L,"header-cell-style":{"text-align":"center"},"cell-style":{"text-align":"center"},"row-style":{height:"60px"},style:{"font-size":"13px"}},{default:l(()=>[e(b,{label:"内容量",prop:"num"}),e(b,{label:"505cu. ft., 14.3mc",prop:"box"})]),_:1})])])])):s.value==2?(x(),z("div",ve,[t[12]||(t[12]=n("div",{class:"name"},[n("b",null,"AKE型集装器")],-1)),n("div",ye,[t[11]||(t[11]=n("div",{class:"pic"},[n("img",{src:ie,alt:"ake型",style:{width:"100%"}})],-1)),n("div",be,[e(B,{data:q,"header-cell-style":{"text-align":"center"},"cell-style":{"text-align":"center"},"row-style":{height:"60px"},style:{"font-size":"13px"}},{default:l(()=>[e(b,{label:"内容量",prop:"num"}),e(b,{label:"371cu. ft., 10.51mc",prop:"box"})]),_:1})])])])):s.value==3?(x(),z("div",ge,[t[14]||(t[14]=n("div",{class:"name"},[n("b",null,"AMF型集装器")],-1)),n("div",we,[t[13]||(t[13]=n("div",{class:"pic"},[n("img",{src:de,alt:"amf型",style:{width:"100%"}})],-1)),n("div",Ve,[e(B,{data:J,"header-cell-style":{"text-align":"center"},"cell-style":{"text-align":"center"},"row-style":{height:"60px"},style:{"font-size":"13px"}},{default:l(()=>[e(b,{label:"内容量",prop:"num"}),e(b,{label:"516cu. ft., 14.6mc",prop:"box"})]),_:1})])])])):ne("",!0)])])]),_:1})]),_:1})]),_:1})}}}),Ae=ae(he,[["__scopeId","data-v-cc63b734"]]);export{Ae as default};
