import{A as K,l as x,d as N,r as f,f as B,y as G,c as I,b as o,j as a,e as D,m as y,F as J,z as h,h as w,a as _,o as P}from"./index-D40j2aXo.js";import{_ as T}from"./tres3dprop.vue_vue_type_style_index_0_lang-C6_IsXFX.js";import{b as j,m as q}from"./show3d-B-zkq70T.js";const L=K("ModuleStore",{actions:{add_Module(m){const d=["name","lx","ly","lz","x","y","z"];for(const b of d)if(!m.hasOwnProperty(b)){x({title:"error",message:`输入对象缺少 ${b} 属性`});return}if(typeof m.name!="string"){x({title:"error",message:"name 属性必须是字符串类型"});return}if(typeof m.lx!="number"||typeof m.ly!="number"||typeof m.lz!="number"||typeof m.x!="number"||typeof m.y!="number"||typeof m.z!="number"){x({title:"error",message:"lx, ly, lz 和 xyz 属性必须是数字类型"});return}this.Module_list.push(m),x({message:`模块${m.name}信息添加成功`})}},state(){return{Module_list:JSON.parse(localStorage.getItem("Module_list"))||[{name:"AAU第一层",lx:318,ly:224,lz:10,x:80,y:0,z:0},{name:"AAU第二层",lx:338,ly:224,lz:20,x:70,y:0,z:10},{name:"AAU第三层",lx:378,ly:224,lz:20,x:50,y:0,z:30},{name:"AAU第四层",lx:418,ly:224,lz:30,x:30,y:0,z:50},{name:"AAU第五层",lx:478,ly:224,lz:40,x:0,y:0,z:80},{name:"AAU第六层",lx:478,ly:224,lz:40,x:0,y:0,z:120},{name:"AKE第一层",lx:156,ly:154,lz:10,x:0,y:0,z:0},{name:"AKE第二层",lx:164,ly:154,lz:20,x:0,y:0,z:10},{name:"AKE第三层",lx:180,ly:154,lz:20,x:0,y:0,z:30},{name:"AKE第四层",lx:200,ly:154,lz:30,x:0,y:0,z:50},{name:"AKE第五层",lx:200,ly:154,lz:40,x:0,y:0,z:80},{name:"AKE第六层",lx:200,ly:154,lz:40,x:0,y:0,z:120},{name:"AMF第一层",lx:318,ly:244,lz:10,x:45,y:0,z:0},{name:"AMF第二层",lx:336,ly:244,lz:20,x:36,y:0,z:10},{name:"AMF第三层",lx:372,ly:244,lz:20,x:18,y:0,z:30},{name:"AMF第四层",lx:408,ly:244,lz:30,x:0,y:0,z:50},{name:"AMF第五层",lx:408,ly:244,lz:40,x:0,y:0,z:80},{name:"AMF第六层",lx:408,ly:244,lz:40,x:0,y:0,z:120}]}}}),R={class:"dialog",style:{position:"relative",display:"flex","flex-direction":"row"}},W={class:"td-container",style:{"flex-direction":"column","max-width":"90%","max-height":"90%",width:"500px",height:"500px",position:"relative"}},H={class:"form-container"},Q={class:"dialog-footer"},p="140px",ee=N({__name:"modulestorehouse",setup(m){const d=L(),b=f(!1),c=f(!1),v=f(-1),V=f("新增模块信息"),l=B({name:"默认模块",lx:1,ly:1,lz:1,x:1,y:1,z:1}),U=f([]),M=f([]),g=f([]),A=f([0,0,0]),$=()=>{const{lx:n,ly:e,lz:s,x:r,y:z,z:i}=l;b.value=[n,e,s,r,z,i].every(u=>typeof u=="number"),b.value&&(g.value=[new j([n,e,s],[r,z,i],0,"#FFFFE0",!0,.5,!1,"corner")],A.value=[r+n/2,z+e/2,i+s/2],M.value=[new q([n,e,s],[r,z,i],"#FFFFE0",!1,.5,!0,"corner")])};G(l,()=>{$()},{immediate:!1}),d.$subscribe((n,e)=>{localStorage.setItem("Module_list",JSON.stringify(e.Module_list))});const C=n=>{x({message:`模块 ${d.Module_list[n].name} 信息删除成功`}),d.Module_list.splice(n,1)},F=n=>{if(v.value=n,n!==-1){V.value="修改模块信息";const e=d.Module_list[n];l.name=e.name,l.lx=e.lx,l.ly=e.ly,l.lz=e.lz,l.x=e.x,l.y=e.y,l.z=e.z}else V.value="新增模块信息",l.name="默认模块",l.lx=1,l.ly=1,l.lz=1,l.x=1,l.y=1,l.z=1;c.value=!0},E=()=>{v.value!==-1?(d.Module_list[v.value]={...l},x({message:`模块 ${l.name} 信息修改成功`})):(d.add_Module({...l}),x({message:`模块 ${l.name} 信息添加成功`})),c.value=!1};return(n,e)=>{const s=y("el-table-column"),r=y("el-button"),z=y("el-table"),i=y("el-input"),u=y("el-form-item"),k=y("el-form"),S=y("el-dialog");return P(),I(J,null,[o(z,{data:D(d).Module_list,style:{width:"100%"},height:"95%"},{default:a(()=>[o(s,{prop:"name",label:"模块名称",width:"auto"}),o(s,{prop:"lx",label:"长",width:"auto"}),o(s,{prop:"ly",label:"宽",width:"auto"}),o(s,{prop:"lz",label:"高",width:"auto"}),o(s,{prop:"x",label:"x",width:"auto"}),o(s,{prop:"y",label:"y",width:"auto"}),o(s,{prop:"z",label:"z",width:"auto"}),o(s,{fixed:"right",label:"Operations",width:"auto"},{default:a(t=>[o(r,{type:"primary",class:"fa-regular fa-pen",onClick:h(O=>F(t.$index),["prevent"]),circle:""},null,8,["onClick"]),o(r,{type:"danger",class:"fa-solid fa-trash",onClick:h(O=>C(t.$index),["prevent"]),circle:""},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),o(r,{class:"mt-4",style:{width:"100%"},onClick:e[0]||(e[0]=t=>F(-1))},{default:a(()=>e[10]||(e[10]=[w(" 新增模块 ")])),_:1}),o(S,{modelValue:c.value,"onUpdate:modelValue":e[9]||(e[9]=t=>c.value=t),title:V.value,width:"500"},{default:a(()=>[_("div",R,[_("div",W,[o(T,{main_containers:U.value,module_containers:M.value,boxes:g.value,centerOfGravity:A.value},null,8,["main_containers","module_containers","boxes","centerOfGravity"])]),_("div",H,[o(k,{model:l},{default:a(()=>[o(u,{label:"模块名称","label-width":p},{default:a(()=>[o(i,{modelValue:l.name,"onUpdate:modelValue":e[1]||(e[1]=t=>l.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(u,{label:"长","label-width":p},{default:a(()=>[o(i,{modelValue:l.lx,"onUpdate:modelValue":e[2]||(e[2]=t=>l.lx=t),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(u,{label:"宽","label-width":p},{default:a(()=>[o(i,{modelValue:l.ly,"onUpdate:modelValue":e[3]||(e[3]=t=>l.ly=t),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(u,{label:"高","label-width":p},{default:a(()=>[o(i,{modelValue:l.lz,"onUpdate:modelValue":e[4]||(e[4]=t=>l.lz=t),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(u,{label:"x","label-width":p},{default:a(()=>[o(i,{modelValue:l.x,"onUpdate:modelValue":e[5]||(e[5]=t=>l.x=t),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(u,{label:"y","label-width":p},{default:a(()=>[o(i,{modelValue:l.y,"onUpdate:modelValue":e[6]||(e[6]=t=>l.y=t),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(u,{label:"z","label-width":p},{default:a(()=>[o(i,{modelValue:l.z,"onUpdate:modelValue":e[7]||(e[7]=t=>l.z=t),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),_("div",Q,[o(r,{onClick:e[8]||(e[8]=t=>c.value=!1)},{default:a(()=>e[11]||(e[11]=[w("取消")])),_:1}),o(r,{type:"primary",onClick:E},{default:a(()=>e[12]||(e[12]=[w("确定")])),_:1})])])])]),_:1},8,["modelValue","title"])],64)}}});export{ee as default};
