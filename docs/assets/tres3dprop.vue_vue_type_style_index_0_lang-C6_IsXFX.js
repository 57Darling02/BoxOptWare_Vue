import{C as fn,r as Qe,y as zt,D as pl,G as Yf,H as qf,I as Pu,J as Fg,K as ml,L as Bg,M as ks,N as jf,O as Zf,x as Et,P as Vs,Q as Tn,S as rs,e as $e,d as ur,T as $f,c as _n,U as wi,o as en,V as zg,n as kg,W as Vg,X as Ph,Y as Mo,F as iu,f as Hg,s as Jf,Z as Gg,$ as Wg,q as Kf,a as Tt,b as ws,a0 as Xg,j as Yg,p as Lh}from"./index-D40j2aXo.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ss="172",ji={ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qf=0,ru=1,ep=2,qg=3,jg=0,Lu=1,Du=2,kn=3,ai=0,Yt=1,hn=2,ii=0,sr=1,Ao=2,su=3,au=4,tp=5,bi=100,np=101,ip=102,rp=103,sp=104,ap=200,op=201,lp=202,cp=203,Co=204,Ro=205,up=206,hp=207,dp=208,fp=209,pp=210,mp=211,gp=212,vp=213,_p=214,Io=0,Po=1,Lo=2,hr=3,Do=4,Uo=5,No=6,Oo=7,ra=0,xp=1,yp=2,Nn=0,Mp=1,bp=2,Sp=3,gl=4,wp=5,Tp=6,Ep=7,ou="attached",Ap="detached",vl=300,oi=301,Ti=302,Hs=303,Gs=304,as=306,$r=1e3,Bt=1001,Jr=1002,At=1003,_l=1004,Zg=1004,er=1005,$g=1005,Pt=1006,jr=1007,Jg=1007,Ln=1008,Kg=1008,Gn=1009,Uu=1010,Nu=1011,Kr=1012,xl=1013,li=1014,dn=1015,_r=1016,yl=1017,Ml=1018,dr=1020,Ou=35902,Fu=1021,Bu=1022,Nt=1023,zu=1024,ku=1025,ar=1026,fr=1027,bl=1028,sa=1029,Vu=1030,Sl=1031,Qg=1032,wl=1033,Cs=33776,Rs=33777,Is=33778,Ps=33779,Fo=35840,Bo=35841,zo=35842,ko=35843,Vo=36196,Ho=37492,Go=37496,Wo=37808,Xo=37809,Yo=37810,qo=37811,jo=37812,Zo=37813,$o=37814,Jo=37815,Ko=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,Ls=36492,rl=36494,sl=36495,Hu=36283,al=36284,ol=36285,ll=36286,Cp=2200,Rp=2201,Ip=2202,Qr=2300,Ws=2301,bo=2302,tr=2400,nr=2401,Xs=2402,Tl=2500,Gu=2501,e0=0,t0=1,n0=2,Pp=3200,Lp=3201,i0=3202,r0=3203,Ci=0,Dp=1,ei="",Qt="srgb",pr="srgb-linear",Ys="linear",ft="srgb",s0=0,Zi=7680,a0=7681,o0=7682,l0=7683,c0=34055,u0=34056,h0=5386,d0=512,f0=513,p0=514,m0=515,g0=516,v0=517,_0=518,lu=519,Up=512,Np=513,Op=514,Wu=515,Fp=516,Bp=517,zp=518,kp=519,qs=35044,x0=35048,y0=35040,M0=35045,b0=35049,S0=35041,w0=35046,T0=35050,E0=35042,A0="100",cu="300 es",Dn=2e3,js=2001;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const or=Math.PI/180,es=180/Math.PI;function yn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function Xu(r,e){return(r%e+e)%e}function C0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function R0(r,e,t){return r!==e?(t-r)/(e-r):0}function Ds(r,e,t){return(1-t)*r+t*e}function I0(r,e,t,n){return Ds(r,e,1-Math.exp(-t*n))}function P0(r,e=1){return e-Math.abs(Xu(r,e*2)-e)}function L0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function D0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function U0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function N0(r,e){return r+Math.random()*(e-r)}function O0(r){return r*(.5-Math.random())}function F0(r){r!==void 0&&(Dh=r);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B0(r){return r*or}function z0(r){return r*es}function k0(r){return(r&r-1)===0&&r!==0}function V0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function H0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function G0(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ci={DEG2RAD:or,RAD2DEG:es,generateUUID:yn,clamp:je,euclideanModulo:Xu,mapLinear:C0,inverseLerp:R0,lerp:Ds,damp:I0,pingpong:P0,smoothstep:L0,smootherstep:D0,randInt:U0,randFloat:N0,randFloatSpread:O0,seededRandom:F0,degToRad:B0,radToDeg:z0,isPowerOfTwo:k0,ceilPowerOfTwo:V0,floorPowerOfTwo:H0,setQuaternionFromProperEuler:G0,normalize:Ke,denormalize:tn};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],S=i[1],y=i[4],M=i[7],A=i[2],b=i[5],T=i[8];return s[0]=a*_+o*S+l*A,s[3]=a*p+o*y+l*b,s[6]=a*g+o*M+l*T,s[1]=c*_+u*S+d*A,s[4]=c*p+u*y+d*b,s[7]=c*g+u*M+d*T,s[2]=h*_+f*S+m*A,s[5]=h*p+f*y+m*b,s[8]=h*g+f*M+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,m=t*d+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new Je;function Vp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const W0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Wr(r,e){return new W0[r](e)}function Zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hp(){const r=Zs("canvas");return r.style.display="block",r}const Uh={};function Gr(r){r in Uh||(Uh[r]=!0,console.warn(r))}function X0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Y0(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function q0(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){const r={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(i.r=Zr(i.r),i.g=Zr(i.g),i.b=Zr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Ys:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[pr]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:Nh,fromXYZ:Oh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Nh,fromXYZ:Oh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),r}const at=j0();function ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class Gp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Zs("canvas")),Sr.width=e.width,Sr.height=e.height;const n=Sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ri(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z0=0;class ir{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(nc(i[a].image)):s.push(nc(i[a]))}else s=nc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function nc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $0=0;class yt extends Fn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Bt,i=Bt,s=Pt,a=Ln,o=Nt,l=Gn,c=yt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=yn(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=vl;yt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,A=(g+1)/2,b=(u+h)/4,T=(d+_)/4,w=(m+p)/4;return y>M&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=T/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=w/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=w/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class El extends Fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ir(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends El{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class aa extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J0 extends On{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new aa(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Al extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K0 extends On{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Al(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==m){let p=1-o;const g=l*h+c*f+u*m+d*_,S=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,g*S);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A}const M=o*S;if(l=l*p+h*M,c=c*p+f*M,u=u*p+m*M,d=d*p+_*M,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-o*f,e[t+2]=c*m+u*f+o*h-l*d,e[t+3]=u*m-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new U,Fh=new qt;class kt{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),Sa.subVectors(this.max,us),wr.subVectors(e.a,us),Tr.subVectors(e.b,us),Er.subVectors(e.c,us),pi.subVectors(Tr,wr),mi.subVectors(Er,Tr),Ni.subVectors(wr,Er);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!rc(t,wr,Tr,Er,Sa)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,wr,Tr,Er,Sa))?!1:(wa.crossVectors(pi,mi),t=[wa.x,wa.y,wa.z],rc(t,wr,Tr,Er,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,ba=new kt,wr=new U,Tr=new U,Er=new U,pi=new U,mi=new U,Ni=new U,us=new U,Sa=new U,wa=new U,Oi=new U;function rc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Q0=new kt,hs=new U,sc=new U;class Vt{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Q0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(sc)),this.expandByPoint(hs.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new U,ac=new U,Ta=new U,gi=new U,oc=new U,Ea=new U,lc=new U;class xr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ac.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(ac);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=gi.dot(this.direction),l=-gi.dot(Ta),c=gi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=s*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ac).addScaledVector(Ta,h),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,s){oc.subVectors(t,e),Ea.subVectors(n,e),lc.crossVectors(oc,Ea);let a=this.direction.dot(lc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const l=o*this.direction.dot(Ea.crossVectors(gi,Ea));if(l<0)return null;const c=o*this.direction.dot(oc.cross(gi));if(c<0||l+c>a)return null;const u=-o*gi.dot(lc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,m,_,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,m,_,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,m=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,m=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,m=o*u,_=o*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,t,n){const i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),vi.crossVectors(n,gn),vi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),vi.crossVectors(n,gn)),vi.normalize(),Aa.crossVectors(gn,vi),i[0]=vi.x,i[4]=Aa.x,i[8]=gn.x,i[1]=vi.y,i[5]=Aa.y,i[9]=gn.y,i[2]=vi.z,i[6]=Aa.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],S=n[3],y=n[7],M=n[11],A=n[15],b=i[0],T=i[4],w=i[8],x=i[12],v=i[1],E=i[5],P=i[9],O=i[13],F=i[2],H=i[6],B=i[10],ie=i[14],Y=i[3],le=i[7],ce=i[11],Z=i[15];return s[0]=a*b+o*v+l*F+c*Y,s[4]=a*T+o*E+l*H+c*le,s[8]=a*w+o*P+l*B+c*ce,s[12]=a*x+o*O+l*ie+c*Z,s[1]=u*b+d*v+h*F+f*Y,s[5]=u*T+d*E+h*H+f*le,s[9]=u*w+d*P+h*B+f*ce,s[13]=u*x+d*O+h*ie+f*Z,s[2]=m*b+_*v+p*F+g*Y,s[6]=m*T+_*E+p*H+g*le,s[10]=m*w+_*P+p*B+g*ce,s[14]=m*x+_*O+p*ie+g*Z,s[3]=S*b+y*v+M*F+A*Y,s[7]=S*T+y*E+M*H+A*le,s[11]=S*w+y*P+M*B+A*ce,s[15]=S*x+y*O+M*ie+A*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15];return m*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*f-n*l*f)+_*(+t*l*f-t*c*h+s*a*h-i*a*f+i*c*u-s*l*u)+p*(+t*c*d-t*o*f-s*a*d+n*a*f+s*o*u-n*c*u)+g*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],S=d*p*c-_*h*c+_*l*f-o*p*f-d*l*g+o*h*g,y=m*h*c-u*p*c-m*l*f+a*p*f+u*l*g-a*h*g,M=u*_*c-m*d*c+m*o*f-a*_*f-u*o*g+a*d*g,A=m*d*l-u*_*l-m*o*h+a*_*h+u*o*p-a*d*p,b=t*S+n*y+i*M+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=S*T,e[1]=(_*h*s-d*p*s-_*i*f+n*p*f+d*i*g-n*h*g)*T,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*g+n*l*g)*T,e[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*f-n*l*f)*T,e[4]=y*T,e[5]=(u*p*s-m*h*s+m*i*f-t*p*f-u*i*g+t*h*g)*T,e[6]=(m*l*s-a*p*s-m*i*c+t*p*c+a*i*g-t*l*g)*T,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*f+t*l*f)*T,e[8]=M*T,e[9]=(m*d*s-u*_*s-m*n*f+t*_*f+u*n*g-t*d*g)*T,e[10]=(a*_*s-m*o*s+m*n*c-t*_*c-a*n*g+t*o*g)*T,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*f-t*o*f)*T,e[12]=A*T,e[13]=(u*_*i-m*d*i+m*n*h-t*_*h-u*n*p+t*d*p)*T,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*p-t*o*p)*T,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,m=s*d,_=a*u,p=a*d,g=o*d,S=l*c,y=l*u,M=l*d,A=n.x,b=n.y,T=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+M)*A,i[2]=(m-y)*A,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(h+g))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(m+y)*T,i[9]=(p-S)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ar.set(i[0],i[1],i[2]).length();const a=Ar.set(i[4],i[5],i[6]).length(),o=Ar.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/s,u=1/a,d=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Dn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,m;if(o===Dn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===js)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Dn){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-s),h=(t+e)*c,f=(n+i)*u;let m,_;if(o===Dn)m=(a+s)*d,_=-2*d;else if(o===js)m=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new U,Rn=new Be,ev=new U(0,0,0),tv=new U(1,1,1),vi=new U,Aa=new U,gn=new U,Bh=new Be,zh=new qt;class rn{constructor(e=0,t=0,n=0,i=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nv=0;const kh=new U,Cr=new qt,Zn=new Be,Ca=new U,ds=new U,iv=new U,rv=new qt,Vh=new U(1,0,0),Hh=new U(0,1,0),Gh=new U(0,0,1),Wh={type:"added"},sv={type:"removed"},Rr={type:"childadded",child:null},cc={type:"childremoved",child:null};class ot extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new U,t=new rn,n=new qt,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Je}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Vh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(ds,Ca,this.up):Zn.lookAt(Ca,ds,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Cr.setFromRotationMatrix(Zn),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sv),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new U(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new U,$n=new U,uc=new U,Jn=new U,Ir=new U,Pr=new U,Xh=new U,hc=new U,dc=new U,fc=new U,pc=new nt,mc=new nt,gc=new nt;class nn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){In.subVectors(i,t),$n.subVectors(n,t),uc.subVectors(e,t);const a=In.dot(In),o=In.dot($n),l=In.dot(uc),c=$n.dot($n),u=$n.dot(uc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(pc,s.x),a.addScaledVector(mc,s.y),a.addScaledVector(gc,s.z),a}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),$n.subVectors(e,t),In.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),In.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ir.subVectors(i,n),Pr.subVectors(s,n),hc.subVectors(e,n);const l=Ir.dot(hc),c=Pr.dot(hc);if(l<=0&&c<=0)return t.copy(n);dc.subVectors(e,i);const u=Ir.dot(dc),d=Pr.dot(dc);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ir,a);fc.subVectors(e,s);const f=Ir.dot(fc),m=Pr.dot(fc);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Pr,o);const p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return Xh.subVectors(s,i),o=(d-u)/(d-u+(f-m)),t.copy(i).addScaledVector(Xh,o);const g=1/(p+_+h);return a=_*g,o=h*g,t.copy(n).addScaledVector(Ir,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function vc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Xu(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vc(a,s,e+1/3),this.g=vc(a,s,e),this.b=vc(a,s,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return at.fromWorkingColorSpace(Wt.copy(this),e),Math.round(je(Wt.r*255,0,255))*65536+Math.round(je(Wt.g*255,0,255))*256+Math.round(je(Wt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,s=Wt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Qt){at.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ra);const n=Ds(_i.h,Ra.h,t),i=Ds(_i.s,Ra.s,t),s=Ds(_i.l,Ra.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ye;ye.NAMES=Wp;let av=0;class Zt extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=sr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Ro,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wn extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ti=ov();function ov(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function un(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=je(r,-65504,65504),ti.floatView[0]=r;const e=ti.uint32View[0],t=e>>23&511;return ti.baseTable[t]+((e&8388607)>>ti.shiftTable[t])}function Ts(r){const e=r>>10;return ti.uint32View[0]=ti.mantissaTable[ti.offsetTable[e]+(r&1023)]+ti.exponentTable[e],ti.floatView[0]}const lv={toHalfFloat:un,fromHalfFloat:Ts},It=new U,Ia=new ne;class ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qs,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qs&&(e.usage=this.usage),e}}class cv extends ct{constructor(e,t,n){super(new Int8Array(e),t,n)}}class uv extends ct{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class hv extends ct{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class dv extends ct{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Yu extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fv extends ct{constructor(e,t,n){super(new Int32Array(e),t,n)}}class qu extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pv extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ts(this.array[e*this.itemSize]);return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=un(t),this}getY(e){let t=Ts(this.array[e*this.itemSize+1]);return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=un(t),this}getZ(e){let t=Ts(this.array[e*this.itemSize+2]);return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=un(t),this}getW(e){let t=Ts(this.array[e*this.itemSize+3]);return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=un(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=un(t),this.array[e+1]=un(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=un(t),this.array[e+1]=un(n),this.array[e+2]=un(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=un(t),this.array[e+1]=un(n),this.array[e+2]=un(i),this.array[e+3]=un(s),this}}class Oe extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mv=0;const Sn=new Be,_c=new ot,Lr=new U,vn=new kt,fs=new kt,Ut=new U;class et extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vp(e)?qu:Yu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(vn.min,fs.min),vn.expandByPoint(Ut),Ut.addVectors(vn.max,fs.max),vn.expandByPoint(Ut)):(vn.expandByPoint(fs.min),vn.expandByPoint(fs.max))}vn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),Ut.add(Lr)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new U,l[w]=new U;const c=new U,u=new U,d=new U,h=new ne,f=new ne,m=new ne,_=new U,p=new U;function g(w,x,v){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,w),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,v),u.sub(c),d.sub(c),f.sub(h),m.sub(h);const E=1/(f.x*m.y-m.x*f.y);isFinite(E)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(E),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(E),o[w].add(_),o[x].add(_),o[v].add(_),l[w].add(p),l[x].add(p),l[v].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,x=S.length;w<x;++w){const v=S[w],E=v.start,P=v.count;for(let O=E,F=E+P;O<F;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new U,M=new U,A=new U,b=new U;function T(w){A.fromBufferAttribute(i,w),b.copy(A);const x=o[w];y.copy(x),y.sub(A.multiplyScalar(A.dot(x))).normalize(),M.crossVectors(b,x);const E=M.dot(l[w])<0?-1:1;a.setXYZW(w,y.x,y.y,y.z,E)}for(let w=0,x=S.length;w<x;++w){const v=S[w],E=v.start,P=v.count;for(let O=E,F=E+P;O<F;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new ct(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new et,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yh=new Be,Fi=new xr,Pa=new Vt,qh=new U,La=new U,Da=new U,Ua=new U,xc=new U,Na=new U,jh=new U,Oa=new U;class vt extends ot{constructor(e=new et,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(xc.fromBufferAttribute(d,e),a?Na.addScaledVector(xc,u):Na.addScaledVector(xc.sub(t),u))}t.add(Na)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Fi.copy(e.ray).recast(e.near),!(Pa.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Pa,qh)===null||Fi.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Yh.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const p=h[m],g=a[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=S,A=y;M<A;M+=3){const b=o.getX(M),T=o.getX(M+1),w=o.getX(M+2);i=Fa(this,g,e,n,c,u,d,b,T,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const S=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);i=Fa(this,a,e,n,c,u,d,S,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){const p=h[m],g=a[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=S,A=y;M<A;M+=3){const b=M,T=M+1,w=M+2;i=Fa(this,g,e,n,c,u,d,b,T,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const S=p,y=p+1,M=p+2;i=Fa(this,a,e,n,c,u,d,S,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function gv(r,e,t,n,i,s,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ai,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:r}}function Fa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,La),r.getVertexPosition(l,Da),r.getVertexPosition(c,Ua);const u=gv(r,e,t,n,La,Da,Ua,jh);if(u){const d=new U;nn.getBarycoord(jh,La,Da,Ua,d),i&&(u.uv=nn.getInterpolatedAttribute(i,o,l,c,d,new ne)),s&&(u.uv1=nn.getInterpolatedAttribute(s,o,l,c,d,new ne)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};nn.getNormal(La,Da,Ua,h.normal),u.face=h,u.barycoord=d}return u}class Ri extends et{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function m(_,p,g,S,y,M,A,b,T,w,x){const v=M/T,E=A/w,P=M/2,O=A/2,F=b/2,H=T+1,B=w+1;let ie=0,Y=0;const le=new U;for(let ce=0;ce<B;ce++){const Z=ce*E-O;for(let Te=0;Te<H;Te++){const Fe=Te*v-P;le[_]=Fe*S,le[p]=Z*y,le[g]=F,c.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[g]=b>0?1:-1,u.push(le.x,le.y,le.z),d.push(Te/T),d.push(1-ce/w),ie+=1}}for(let ce=0;ce<w;ce++)for(let Z=0;Z<T;Z++){const Te=h+Z+H*ce,Fe=h+Z+H*(ce+1),J=h+(Z+1)+H*(ce+1),de=h+(Z+1)+H*ce;l.push(Te,Fe,de),l.push(Fe,J,de),Y+=6}o.addGroup(f,Y,x),f+=Y,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(r){const e={};for(let t=0;t<r.length;t++){const n=ts(r[t]);for(const i in n)e[i]=n[i]}return e}function vv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const oa={clone:ts,merge:Kt};var _v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class la extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new U,Zh=new ne,$h=new ne;class gt extends la{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,$h),t.subVectors($h,Zh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Ur=1;class Yp extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gt(Dr,Ur,e,t);i.layers=this.layers,this.add(i);const s=new gt(Dr,Ur,e,t);s.layers=this.layers,this.add(s);const a=new gt(Dr,Ur,e,t);a.layers=this.layers,this.add(a);const o=new gt(Dr,Ur,e,t);o.layers=this.layers,this.add(o);const l=new gt(Dr,Ur,e,t);l.layers=this.layers,this.add(l);const c=new gt(Dr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ca extends yt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oi,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qp extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ca(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ri(5,5,5),s=new jt({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ii});s.uniforms.tEquirect.value=t;const a=new vt(i,s),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Pt),new Yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Rl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new Rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Il{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new Il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mr extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ua{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qs,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new U;class ui{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ui(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ju extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Nr;const ps=new U,Or=new U,Fr=new U,Br=new ne,ms=new ne,jp=new Be,Ba=new U,gs=new U,za=new U,Jh=new ne,yc=new ne,Kh=new ne;class Zp extends ot{constructor(e=new ju){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ua(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new ui(n,3,0,!1)),Nr.setAttribute("uv",new ui(n,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),jp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Fr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ka(Ba.set(-.5,-.5,0),Fr,a,Or,i,s),ka(gs.set(.5,-.5,0),Fr,a,Or,i,s),ka(za.set(.5,.5,0),Fr,a,Or,i,s),Jh.set(0,0),yc.set(1,0),Kh.set(1,1);let o=e.ray.intersectTriangle(Ba,gs,za,!1,ps);if(o===null&&(ka(gs.set(-.5,.5,0),Fr,a,Or,i,s),yc.set(0,1),o=e.ray.intersectTriangle(Ba,za,gs,!1,ps),o===null))return;const l=e.ray.origin.distanceTo(ps);l<e.near||l>e.far||t.push({distance:l,point:ps.clone(),uv:nn.getInterpolation(ps,Ba,gs,za,Jh,yc,Kh,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ka(r,e,t,n,i,s){Br.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ms.x=s*Br.x-i*Br.y,ms.y=i*Br.x+s*Br.y):ms.copy(Br),r.copy(e),r.x+=ms.x,r.y+=ms.y,r.applyMatrix4(jp)}const Va=new U,Qh=new U;class $p extends ot{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Va.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Va);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Va.setFromMatrixPosition(e.matrixWorld),Qh.setFromMatrixPosition(this.matrixWorld);const n=Va.distanceTo(Qh)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const ed=new U,td=new nt,nd=new nt,yv=new U,id=new Be,Ha=new U,Mc=new Vt,rd=new Be,bc=new xr;class Jp extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ou,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(i),e.ray.intersectsSphere(Mc)!==!1&&(rd.copy(i).invert(),bc.copy(e.ray).applyMatrix4(rd),!(this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;td.fromBufferAttribute(i.attributes.skinIndex,e),nd.fromBufferAttribute(i.attributes.skinWeight,e),ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=nd.getComponent(s);if(a!==0){const o=td.getComponent(s);id.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(yv.copy(ed).applyMatrix4(id),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class En extends yt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=At,u=At,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sd=new Be,Mv=new Be;class Pl{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Mv;sd.multiplyMatrices(o,t[s]),sd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new En(t,e,e,Nt,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Zu),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ns extends ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new Be,ad=new Be,Ga=[],od=new kt,bv=new Be,vs=new vt,_s=new Vt;class Kp extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),od.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),_s.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),e.ray.intersectsSphere(_s)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zr),ad.multiplyMatrices(n,zr),vs.matrixWorld=ad,vs.raycast(e,Ga);for(let a=0,o=Ga.length;a<o;a++){const l=Ga[a];l.instanceId=s,l.object=this,t.push(l)}Ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new En(new Float32Array(i*this.count),i,this.count,bl,dn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Sc=new U,Sv=new U,wv=new Je;class Vn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sc.subVectors(n,t).cross(Sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wv.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Vt,Wa=new U;class ha{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,s=new Vn,a=new Vn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],m=i[9],_=i[10],p=i[11],g=i[12],S=i[13],y=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,p-f,M-g).normalize(),n[1].setComponents(l+s,h+c,p+f,M+g).normalize(),n[2].setComponents(l+a,h+u,p+m,M+S).normalize(),n[3].setComponents(l-a,h-u,p-m,M-S).normalize(),n[4].setComponents(l-o,h-d,p-_,M-y).normalize(),t===Dn)n[5].setComponents(l+o,h+d,p+_,M+y).normalize();else if(t===js)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wa.x=i.normal.x>0?e.max.x:e.min.x,Wa.y=i.normal.y>0?e.max.y:e.min.y,Wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(r,e){return r-e}function Tv(r,e){return r.z-e.z}function Ev(r,e){return e.z-r.z}class Av{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const on=new Be,Cv=new ye(1,1,1),Tc=new ha,Xa=new kt,zi=new Vt,xs=new U,ld=new U,Rv=new U,Ec=new Av,Xt=new vt,Ya=[];function Iv(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function ki(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class Qp extends vt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,i){super(new et,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new En(t,e,e,Nt,dn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new En(t,e,e,sa,li);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new En(t,e,e,Nt,dn);n.colorSpace=at.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),d=new ct(u,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new ct(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingBoxAt(s,Xa).applyMatrix4(on),e.union(Xa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,on),this.getBoundingSphereAt(s,zi).applyMatrix4(on),e.union(zi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(wc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;on.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(Cv.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(wc),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),h=n.getAttribute(u);Iv(d,h,l);const f=d.itemSize;for(let m=d.count,_=c;m<_;m++){const p=l+m;for(let g=0;g<f;g++)h.setComponent(p,g,0)}h.needsUpdate=!0,h.addUpdateRange(l*f,c*f)}if(i){const u=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let h=0;h<a.count;h++)s.setX(u+h,l+a.getX(h));for(let h=a.count,f=d;h<f;h++)s.setX(u+h,l);s.needsUpdate=!0,s.addUpdateRange(u,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),s=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:h}=c,f=s.index,m=f.array,_=e-d;for(let p=u;p<u+h;p++)m[p]=m[p]+_;f.array.copyWithin(t,u,u+h),f.addUpdateRange(t,h),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,h=s.attributes;for(const f in h){const m=h[f],{array:_,itemSize:p}=m;_.copyWithin(e*p,u*p,(u+d)*p),m.addUpdateRange(e*p,d*p)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new kt,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;a&&(u=a.getX(u)),s.expandByPoint(xs.fromBufferAttribute(o,u))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Vt;this.getBoundingBoxAt(e,Xa),Xa.getCenter(s.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let d=c;a&&(d=a.getX(d)),xs.fromBufferAttribute(o,d),l=Math.max(l,s.center.distanceToSquared(xs))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(wc);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);ki(this._multiDrawCounts,i),ki(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ki(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ki(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ki(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new et,this._initializeGeometry(s));const a=this.geometry;s.index&&ki(s.index.array,a.index.array);for(const o in s.attributes)ki(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,a=this.geometry;Xt.material=this.material,Xt.geometry.index=a.index,Xt.geometry.attributes=a.attributes,Xt.geometry.boundingBox===null&&(Xt.geometry.boundingBox=new kt),Xt.geometry.boundingSphere===null&&(Xt.geometry.boundingSphere=new Vt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=i[c];Xt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Xt.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Xt.geometry.boundingBox),this.getBoundingSphereAt(c,Xt.geometry.boundingSphere),Xt.raycast(e,Ya);for(let d=0,h=Ya.length;d<h;d++){const f=Ya[d];f.object=this,f.batchId=o,t.push(f)}Ya.length=0}Xt.material=null,Xt.geometry.index=null,Xt.geometry.attributes={},Xt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,h=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;h&&(on.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Tc.setFromProjectionMatrix(on,e.coordinateSystem));let _=0;if(this.sortObjects){on.copy(this.matrixWorld).invert(),xs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(on),ld.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(on);for(let S=0,y=l.length;S<y;S++)if(l[S].visible&&l[S].active){const M=l[S].geometryIndex;this.getMatrixAt(S,on),this.getBoundingSphereAt(M,zi).applyMatrix4(on);let A=!1;if(h&&(A=!Tc.intersectsSphere(zi)),!A){const b=d[M],T=Rv.subVectors(zi.center,xs).dot(ld);Ec.push(b.start,b.count,T,S)}}const p=Ec.list,g=this.customSort;g===null?p.sort(s.transparent?Ev:Tv):g.call(this,p,n);for(let S=0,y=p.length;S<y;S++){const M=p[S];c[_]=M.start*o,u[_]=M.count,m[_]=M.index,_++}Ec.reset()}else for(let p=0,g=l.length;p<g;p++)if(l[p].visible&&l[p].active){const S=l[p].geometryIndex;let y=!1;if(h&&(this.getMatrixAt(p,on),this.getBoundingSphereAt(S,zi).applyMatrix4(on),y=!Tc.intersectsSphere(zi)),!y){const M=d[S];c[_]=M.start*o,u[_]=M.count,m[_]=p,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class sn extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cl=new U,ul=new U,cd=new Be,ys=new xr,qa=new Vt,Ac=new U,ud=new U;class Ei extends ot{constructor(e=new et,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)cl.fromBufferAttribute(t,i-1),ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cl.distanceTo(ul);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;cd.copy(i).invert(),ys.copy(e.ray).applyMatrix4(cd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){const g=u.getX(_),S=u.getX(_+1),y=ja(this,e,ys,l,g,S);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(m-1),p=u.getX(f),g=ja(this,e,ys,l,_,p);g&&t.push(g)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){const g=ja(this,e,ys,l,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=ja(this,e,ys,l,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ja(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(cl.fromBufferAttribute(a,i),ul.fromBufferAttribute(a,s),t.distanceSqToSegment(cl,ul,Ac,ud)>n)return;Ac.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ac);if(!(l<e.near||l>e.far))return{distance:l,point:ud.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const hd=new U,dd=new U;class Xn extends Ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hd.fromBufferAttribute(t,i),dd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hd.distanceTo(dd);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class em extends Ei{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $u extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fd=new Be,uu=new xr,Za=new Vt,$a=new U;class tm extends ot{constructor(e=new et,t=new $u){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;fd.copy(i).invert(),uu.copy(e.ray).applyMatrix4(fd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=h,_=f;m<_;m++){const p=c.getX(m);$a.fromBufferAttribute(d,p),pd($a,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=h,_=f;m<_;m++)$a.fromBufferAttribute(d,m),pd($a,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pd(r,e,t,n,i,s,a){const o=uu.distanceSqToPoint(r);if(o<t){const l=new U;uu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xr extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Pv extends yt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Pt,this.magFilter=s!==void 0?s:Pt,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Lv extends yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=At,this.minFilter=At,this.generateMipmaps=!1,this.needsUpdate=!0}}class lr extends yt{constructor(e,t,n,i,s,a,o,l,c,u,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Dv extends lr{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Bt,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends lr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,oi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Nv extends yt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ju extends yt{constructor(e,t,n,i,s,a,o,l,c,u=ar){if(u!==ar&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ar&&(n=li),n===void 0&&u===fr&&(n=dr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ne:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],s=[],a=[],o=new U,l=new Be;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(je(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(je(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ll extends Bn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nm extends Ll{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ku(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Ja=new U,Cc=new Ku,Rc=new Ku,Ic=new Ku;class im extends Bn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Ja.subVectors(i[0],i[1]).add(i[0]),c=Ja);const d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Ja.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Cc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,_,p),Rc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,_,p),Ic.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,_,p)}else this.curveType==="catmullrom"&&(Cc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Rc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ic.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Cc.calc(l),Rc.calc(l),Ic.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function md(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Ov(r,e){const t=1-r;return t*t*e}function Fv(r,e){return 2*(1-r)*r*e}function Bv(r,e){return r*r*e}function Us(r,e,t,n){return Ov(r,e)+Fv(r,t)+Bv(r,n)}function zv(r,e){const t=1-r;return t*t*t*e}function kv(r,e){const t=1-r;return 3*t*t*r*e}function Vv(r,e){return 3*(1-r)*r*r*e}function Hv(r,e){return r*r*r*e}function Ns(r,e,t,n,i){return zv(r,e)+kv(r,t)+Vv(r,n)+Hv(r,i)}class Qu extends Bn{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ns(e,i.x,s.x,a.x,o.x),Ns(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rm extends Bn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ns(e,i.x,s.x,a.x,o.x),Ns(e,i.y,s.y,a.y,o.y),Ns(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eh extends Bn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sm extends Bn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class th extends Bn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Us(e,i.x,s.x,a.x),Us(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nh extends Bn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Us(e,i.x,s.x,a.x),Us(e,i.y,s.y,a.y),Us(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ih extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(md(o,l.x,c.x,u.x,d.x),md(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var hl=Object.freeze({__proto__:null,ArcCurve:nm,CatmullRomCurve3:im,CubicBezierCurve:Qu,CubicBezierCurve3:rm,EllipseCurve:Ll,LineCurve:eh,LineCurve3:sm,QuadraticBezierCurve:th,QuadraticBezierCurve3:nh,SplineCurve:ih});class am extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new hl[i.type]().fromJSON(i))}return this}}class $s extends am{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new eh(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new th(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Qu(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ih(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Ll(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class da extends et{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=je(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new U,h=new ne,f=new U,m=new U,_=new U;let p=0,g=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let S=0;S<=t;S++){const y=n+S*u*i,M=Math.sin(y),A=Math.cos(y);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*M,d.y=e[b].y,d.z=e[b].x*A,a.push(d.x,d.y,d.z),h.x=S/t,h.y=b/(e.length-1),o.push(h.x,h.y);const T=l[3*b+0]*M,w=l[3*b+1],x=l[3*b+0]*A;c.push(T,w,x)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){const M=y+S*e.length,A=M,b=M+e.length,T=M+e.length+1,w=M+1;s.push(A,b,w),s.push(T,w,b)}this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.points,e.segments,e.phiStart,e.phiLength)}}class Dl extends da{constructor(e=1,t=1,n=4,i=8){const s=new $s;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Dl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ul extends et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new U,u=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class os extends et{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let m=0;const _=[],p=n/2;let g=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(f,2));function S(){const M=new U,A=new U;let b=0;const T=(t-e)/n;for(let w=0;w<=s;w++){const x=[],v=w/s,E=v*(t-e)+e;for(let P=0;P<=i;P++){const O=P/i,F=O*l+o,H=Math.sin(F),B=Math.cos(F);A.x=E*H,A.y=-v*n+p,A.z=E*B,d.push(A.x,A.y,A.z),M.set(H,T,B).normalize(),h.push(M.x,M.y,M.z),f.push(O,1-v),x.push(m++)}_.push(x)}for(let w=0;w<i;w++)for(let x=0;x<s;x++){const v=_[x][w],E=_[x+1][w],P=_[x+1][w+1],O=_[x][w+1];(e>0||x!==0)&&(u.push(v,E,O),b+=3),(t>0||x!==s-1)&&(u.push(E,P,O),b+=3)}c.addGroup(g,b,0),g+=b}function y(M){const A=m,b=new ne,T=new U;let w=0;const x=M===!0?e:t,v=M===!0?1:-1;for(let P=1;P<=i;P++)d.push(0,p*v,0),h.push(0,v,0),f.push(.5,.5),m++;const E=m;for(let P=0;P<=i;P++){const F=P/i*l+o,H=Math.cos(F),B=Math.sin(F);T.x=x*B,T.y=p*v,T.z=x*H,d.push(T.x,T.y,T.z),h.push(0,v,0),b.x=H*.5+.5,b.y=B*.5*v+.5,f.push(b.x,b.y),m++}for(let P=0;P<i;P++){const O=A+P,F=E+P;M===!0?u.push(F,F+1,O):u.push(F+1,F,O),w+=3}c.addGroup(g,w,M===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nl extends os{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Nl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ii extends et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new U,M=new U,A=new U;for(let b=0;b<t.length;b+=3)f(t[b+0],y),f(t[b+1],M),f(t[b+2],A),l(y,M,A,S)}function l(S,y,M,A){const b=A+1,T=[];for(let w=0;w<=b;w++){T[w]=[];const x=S.clone().lerp(M,w/b),v=y.clone().lerp(M,w/b),E=b-w;for(let P=0;P<=E;P++)P===0&&w===b?T[w][P]=x:T[w][P]=x.clone().lerp(v,P/E)}for(let w=0;w<b;w++)for(let x=0;x<2*(b-w)-1;x++){const v=Math.floor(x/2);x%2===0?(h(T[w][v+1]),h(T[w+1][v]),h(T[w][v])):(h(T[w][v+1]),h(T[w+1][v+1]),h(T[w+1][v]))}}function c(S){const y=new U;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(S),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function u(){const S=new U;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const M=p(S)/2/Math.PI+.5,A=g(S)/Math.PI+.5;a.push(M,1-A)}m(),d()}function d(){for(let S=0;S<a.length;S+=6){const y=a[S+0],M=a[S+2],A=a[S+4],b=Math.max(y,M,A),T=Math.min(y,M,A);b>.9&&T<.1&&(y<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function f(S,y){const M=S*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){const S=new U,y=new U,M=new U,A=new U,b=new ne,T=new ne,w=new ne;for(let x=0,v=0;x<s.length;x+=9,v+=6){S.set(s[x+0],s[x+1],s[x+2]),y.set(s[x+3],s[x+4],s[x+5]),M.set(s[x+6],s[x+7],s[x+8]),b.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),w.set(a[v+4],a[v+5]),A.copy(S).add(y).add(M).divideScalar(3);const E=p(A);_(b,v+0,S,E),_(T,v+2,y,E),_(w,v+4,M,E)}}function _(S,y,M,A){A<0&&S.x===1&&(a[y]=S.x-1),M.x===0&&M.z===0&&(a[y]=A/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.vertices,e.indices,e.radius,e.details)}}class Ol extends Ii{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ol(e.radius,e.detail)}}const Ka=new U,Qa=new U,Pc=new U,eo=new nn;class om extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(or*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:p,c:g}=eo;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),eo.getNormal(Pc),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const y=(S+1)%3,M=d[S],A=d[y],b=eo[u[S]],T=eo[u[y]],w=`${M}_${A}`,x=`${A}_${M}`;x in h&&h[x]?(Pc.dot(h[x].normal)<=s&&(f.push(b.x,b.y,b.z),f.push(T.x,T.y,T.z)),h[x]=null):w in h||(h[w]={index0:c[S],index1:c[y],normal:Pc.clone()})}}for(const m in h)if(h[m]){const{index0:_,index1:p}=h[m];Ka.fromBufferAttribute(o,_),Qa.fromBufferAttribute(o,p),f.push(Ka.x,Ka.y,Ka.z),f.push(Qa.x,Qa.y,Qa.z)}this.setAttribute("position",new Oe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cr extends $s{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new $s().fromJSON(i))}return this}}const Gv={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=lm(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,d,h,f;if(n&&(s=jv(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let m=t;m<i;m+=t)d=r[m],h=r[m+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Js(s,a,t,o,l,f,0),a}};function lm(r,e,t,n,i){let s,a;if(i===s_(r,e,t,n)>0)for(s=e;s<t;s+=n)a=gd(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=gd(s,r[s],r[s+1],a);return a&&Fl(a,a.next)&&(Qs(a),a=a.next),a}function gr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Fl(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Js(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Qv(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Xv(r,n,i,s):Wv(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Qs(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Yv(gr(r),e,t),Js(r,e,t,n,i,s,2)):a===2&&qv(r,e,t,n,i,s):Js(gr(r),e,t,n,i,s,1);break}}}function Wv(r){const e=r.prev,t=r,n=r.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,h=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Yr(i,o,s,l,a,c,m.x,m.y)&&Mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xv(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Mt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,d=s.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,_=o>l?o>c?o:c:l>c?l:c,p=u>d?u>h?u:h:d>h?d:h,g=hu(f,m,e,t,n),S=hu(_,p,e,t,n);let y=r.prevZ,M=r.nextZ;for(;y&&y.z>=g&&M&&M.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==i&&y!==a&&Yr(o,u,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&Yr(o,u,l,d,c,h,M.x,M.y)&&Mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==i&&y!==a&&Yr(o,u,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&Yr(o,u,l,d,c,h,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Yv(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Fl(i,s)&&cm(i,n,n.next,s)&&Ks(i,s)&&Ks(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Qs(n),Qs(n.next),n=r=s),n=n.next}while(n!==r);return gr(n)}function qv(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&n_(a,o)){let l=um(a,o);a=gr(a,a.next),l=gr(l,l.next),Js(a,e,t,n,i,s,0),Js(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function jv(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=lm(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(t_(c));for(i.sort(Zv),s=0;s<i.length;s++)t=$v(i[s],t);return t}function Zv(r,e){return r.x-e.x}function $v(r,e){const t=Jv(r,e);if(!t)return e;const n=um(t,r);return gr(n,n.next),gr(t,t.next)}function Jv(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,i=t.x<t.next.x?t:t.next,h===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,d;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Yr(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),Ks(t,r)&&(d<u||d===u&&(t.x>i.x||t.x===i.x&&Kv(i,t)))&&(i=t,u=d)),t=t.next;while(t!==o);return i}function Kv(r,e){return Mt(r.prev,r,e.prev)<0&&Mt(e.next,r,r.next)<0}function Qv(r,e,t,n){let i=r;do i.z===0&&(i.z=hu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,e_(i)}function e_(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function hu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function t_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Yr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function n_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!i_(r,e)&&(Ks(r,e)&&Ks(e,r)&&r_(r,e)&&(Mt(r.prev,r,e.prev)||Mt(r,e.prev,e))||Fl(r,e)&&Mt(r.prev,r,r.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Fl(r,e){return r.x===e.x&&r.y===e.y}function cm(r,e,t,n){const i=no(Mt(r,e,t)),s=no(Mt(r,e,n)),a=no(Mt(t,n,r)),o=no(Mt(t,n,e));return!!(i!==s&&a!==o||i===0&&to(r,t,e)||s===0&&to(r,n,e)||a===0&&to(t,r,n)||o===0&&to(t,e,n))}function to(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function no(r){return r>0?1:r<0?-1:0}function i_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&cm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ks(r,e){return Mt(r.prev,r,r.next)<0?Mt(r,e,r.next)>=0&&Mt(r,r.prev,e)>=0:Mt(r,e,r.prev)<0||Mt(r,r.next,e)<0}function r_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function um(r,e){const t=new du(r.i,r.x,r.y),n=new du(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function gd(r,e,t,n){const i=new du(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function du(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function s_(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Hn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Hn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];vd(e),_d(n,e);let a=e.length;t.forEach(vd);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,_d(n,t[l]);const o=Gv.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function vd(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function _d(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Bl extends et{constructor(e=new cr([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Oe(i,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:a_;let y,M=!1,A,b,T,w;g&&(y=g.getSpacedPoints(u),M=!0,h=!1,A=g.computeFrenetFrames(u,!1),b=new U,T=new U,w=new U),h||(p=0,f=0,m=0,_=0);const x=o.extractPoints(c);let v=x.shape;const E=x.holes;if(!Hn.isClockWise(v)){v=v.reverse();for(let G=0,V=E.length;G<V;G++){const I=E[G];Hn.isClockWise(I)&&(E[G]=I.reverse())}}const O=Hn.triangulateShape(v,E),F=v;for(let G=0,V=E.length;G<V;G++){const I=E[G];v=v.concat(I)}function H(G,V,I){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(V,I)}const B=v.length,ie=O.length;function Y(G,V,I){let he,re,me;const ae=G.x-V.x,Se=G.y-V.y,ge=I.x-G.x,D=I.y-G.y,C=ae*ae+Se*Se,j=ae*D-Se*ge;if(Math.abs(j)>Number.EPSILON){const te=Math.sqrt(C),fe=Math.sqrt(ge*ge+D*D),oe=V.x-Se/te,Ue=V.y+ae/te,we=I.x-D/fe,Ee=I.y+ge/fe,Ze=((we-oe)*D-(Ee-Ue)*ge)/(ae*D-Se*ge);he=oe+ae*Ze-G.x,re=Ue+Se*Ze-G.y;const ve=he*he+re*re;if(ve<=2)return new ne(he,re);me=Math.sqrt(ve/2)}else{let te=!1;ae>Number.EPSILON?ge>Number.EPSILON&&(te=!0):ae<-Number.EPSILON?ge<-Number.EPSILON&&(te=!0):Math.sign(Se)===Math.sign(D)&&(te=!0),te?(he=-Se,re=ae,me=Math.sqrt(C)):(he=ae,re=Se,me=Math.sqrt(C/2))}return new ne(he/me,re/me)}const le=[];for(let G=0,V=F.length,I=V-1,he=G+1;G<V;G++,I++,he++)I===V&&(I=0),he===V&&(he=0),le[G]=Y(F[G],F[I],F[he]);const ce=[];let Z,Te=le.concat();for(let G=0,V=E.length;G<V;G++){const I=E[G];Z=[];for(let he=0,re=I.length,me=re-1,ae=he+1;he<re;he++,me++,ae++)me===re&&(me=0),ae===re&&(ae=0),Z[he]=Y(I[he],I[me],I[ae]);ce.push(Z),Te=Te.concat(Z)}for(let G=0;G<p;G++){const V=G/p,I=f*Math.cos(V*Math.PI/2),he=m*Math.sin(V*Math.PI/2)+_;for(let re=0,me=F.length;re<me;re++){const ae=H(F[re],le[re],he);pe(ae.x,ae.y,-I)}for(let re=0,me=E.length;re<me;re++){const ae=E[re];Z=ce[re];for(let Se=0,ge=ae.length;Se<ge;Se++){const D=H(ae[Se],Z[Se],he);pe(D.x,D.y,-I)}}}const Fe=m+_;for(let G=0;G<B;G++){const V=h?H(v[G],Te[G],Fe):v[G];M?(T.copy(A.normals[0]).multiplyScalar(V.x),b.copy(A.binormals[0]).multiplyScalar(V.y),w.copy(y[0]).add(T).add(b),pe(w.x,w.y,w.z)):pe(V.x,V.y,0)}for(let G=1;G<=u;G++)for(let V=0;V<B;V++){const I=h?H(v[V],Te[V],Fe):v[V];M?(T.copy(A.normals[G]).multiplyScalar(I.x),b.copy(A.binormals[G]).multiplyScalar(I.y),w.copy(y[G]).add(T).add(b),pe(w.x,w.y,w.z)):pe(I.x,I.y,d/u*G)}for(let G=p-1;G>=0;G--){const V=G/p,I=f*Math.cos(V*Math.PI/2),he=m*Math.sin(V*Math.PI/2)+_;for(let re=0,me=F.length;re<me;re++){const ae=H(F[re],le[re],he);pe(ae.x,ae.y,d+I)}for(let re=0,me=E.length;re<me;re++){const ae=E[re];Z=ce[re];for(let Se=0,ge=ae.length;Se<ge;Se++){const D=H(ae[Se],Z[Se],he);M?pe(D.x,D.y+y[u-1].y,y[u-1].x+I):pe(D.x,D.y,d+I)}}}J(),de();function J(){const G=i.length/3;if(h){let V=0,I=B*V;for(let he=0;he<ie;he++){const re=O[he];ee(re[2]+I,re[1]+I,re[0]+I)}V=u+p*2,I=B*V;for(let he=0;he<ie;he++){const re=O[he];ee(re[0]+I,re[1]+I,re[2]+I)}}else{for(let V=0;V<ie;V++){const I=O[V];ee(I[2],I[1],I[0])}for(let V=0;V<ie;V++){const I=O[V];ee(I[0]+B*u,I[1]+B*u,I[2]+B*u)}}n.addGroup(G,i.length/3-G,0)}function de(){const G=i.length/3;let V=0;Me(F,V),V+=F.length;for(let I=0,he=E.length;I<he;I++){const re=E[I];Me(re,V),V+=re.length}n.addGroup(G,i.length/3-G,1)}function Me(G,V){let I=G.length;for(;--I>=0;){const he=I;let re=I-1;re<0&&(re=G.length-1);for(let me=0,ae=u+p*2;me<ae;me++){const Se=B*me,ge=B*(me+1),D=V+he+Se,C=V+re+Se,j=V+re+ge,te=V+he+ge;R(D,C,j,te)}}}function pe(G,V,I){l.push(G),l.push(V),l.push(I)}function ee(G,V,I){N(G),N(V),N(I);const he=i.length/3,re=S.generateTopUV(n,i,he-3,he-2,he-1);z(re[0]),z(re[1]),z(re[2])}function R(G,V,I,he){N(G),N(V),N(he),N(V),N(I),N(he);const re=i.length/3,me=S.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);z(me[0]),z(me[1]),z(me[3]),z(me[1]),z(me[2]),z(me[3])}function N(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function z(G){s.push(G.x),s.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return o_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new hl[i.type]().fromJSON(i)),new Bl(n,e.options)}}const a_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ne(s,a),new ne(o,l),new ne(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[s*3],p=e[s*3+1],g=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-d),new ne(h,1-m),new ne(_,1-g)]:[new ne(o,1-l),new ne(u,1-d),new ne(f,1-m),new ne(p,1-g)]}};function o_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zl extends Ii{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zl(e.radius,e.detail)}}class fa extends Ii{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fa(e.radius,e.detail)}}class Pi extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const S=g*h-a;for(let y=0;y<c;y++){const M=y*d-s;m.push(M,-S,0),_.push(0,0,1),p.push(y/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const y=S+c*g,M=S+c*(g+1),A=S+1+c*(g+1),b=S+1+c*g;f.push(y,M,b),f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class kl extends et{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,f=new U,m=new ne;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const g=s+p/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let _=0;_<i;_++){const p=_*(n+1);for(let g=0;g<n;g++){const S=g+p,y=S,M=S+n+1,A=S+n+2,b=S+1;o.push(y,M,b),o.push(M,A,b)}}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vl extends et{constructor(e=new cr([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Oe(i,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(a,2));function c(u){const d=i.length/3,h=u.extractPoints(t);let f=h.shape;const m=h.holes;Hn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const S=m[p];Hn.isClockWise(S)===!0&&(m[p]=S.reverse())}const _=Hn.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const S=m[p];f=f.concat(S)}for(let p=0,g=f.length;p<g;p++){const S=f[p];i.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let p=0,g=_.length;p<g;p++){const S=_[p],y=S[0]+d,M=S[1]+d,A=S[2]+d;n.push(y,M,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return l_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Vl(n,e.curveSegments)}}function l_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class pa extends et{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new U,h=new U,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const S=[],y=g/n;let M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const b=A/t;d.x=-e*Math.cos(i+b*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(i+b*s)*Math.sin(a+y*o),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(b+M,1-y),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const y=u[g][S+1],M=u[g][S],A=u[g+1][S],b=u[g+1][S+1];(g!==0||a>0)&&f.push(y,M,b),(g!==n-1||l<Math.PI)&&f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hl extends Ii{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class Gl extends et{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new U,d=new U,h=new U;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,S=(i+1)*f+m;a.push(_,p,S),a.push(p,g,S)}this.setIndex(a),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wl extends et{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],u=[],d=new U,h=new U,f=new U,m=new U,_=new U,p=new U,g=new U;for(let y=0;y<=n;++y){const M=y/n*s*Math.PI*2;S(M,s,a,e,f),S(M+.01,s,a,e,m),p.subVectors(m,f),g.addVectors(m,f),_.crossVectors(p,g),g.crossVectors(_,p),_.normalize(),g.normalize();for(let A=0;A<=i;++A){const b=A/i*Math.PI*2,T=-t*Math.cos(b),w=t*Math.sin(b);d.x=f.x+(T*g.x+w*_.x),d.y=f.y+(T*g.y+w*_.y),d.z=f.z+(T*g.z+w*_.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(y/n),u.push(A/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){const A=(i+1)*(y-1)+(M-1),b=(i+1)*y+(M-1),T=(i+1)*y+M,w=(i+1)*(y-1)+M;o.push(A,b,w),o.push(b,T,w)}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2));function S(y,M,A,b,T){const w=Math.cos(y),x=Math.sin(y),v=A/M*y,E=Math.cos(v);T.x=b*(2+E)*.5*w,T.y=b*(2+E)*x*.5,T.z=b*Math.sin(v)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Xl extends et{constructor(e=new nh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new ne;let u=new U;const d=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(f,2));function _(){for(let y=0;y<t;y++)p(y);p(s===!1?t:0),S(),g()}function p(y){u=e.getPointAt(y/t,u);const M=a.normals[y],A=a.binormals[y];for(let b=0;b<=i;b++){const T=b/i*Math.PI*2,w=Math.sin(T),x=-Math.cos(T);l.x=x*M.x+w*A.x,l.y=x*M.y+w*A.y,l.z=x*M.z+w*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=t;y++)for(let M=1;M<=i;M++){const A=(i+1)*(y-1)+(M-1),b=(i+1)*y+(M-1),T=(i+1)*y+M,w=(i+1)*(y-1)+M;m.push(A,b,w),m.push(b,T,w)}}function S(){for(let y=0;y<=t;y++)for(let M=0;M<=i;M++)c.x=y/t,c.y=M/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xl(new hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class hm extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let m=h,_=h+f;m<_;m+=3)for(let p=0;p<3;p++){const g=o.getX(m+p),S=o.getX(m+(p+1)%3);i.fromBufferAttribute(a,g),s.fromBufferAttribute(a,S),xd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,u),s.fromBufferAttribute(a,d),xd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function xd(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var yd=Object.freeze({__proto__:null,BoxGeometry:Ri,CapsuleGeometry:Dl,CircleGeometry:Ul,ConeGeometry:Nl,CylinderGeometry:os,DodecahedronGeometry:Ol,EdgesGeometry:om,ExtrudeGeometry:Bl,IcosahedronGeometry:zl,LatheGeometry:da,OctahedronGeometry:fa,PlaneGeometry:Pi,PolyhedronGeometry:Ii,RingGeometry:kl,ShapeGeometry:Vl,SphereGeometry:pa,TetrahedronGeometry:Hl,TorusGeometry:Gl,TorusKnotGeometry:Wl,TubeGeometry:Xl,WireframeGeometry:hm});class dm extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Os extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rh extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fm extends rh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pm extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mm extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class gm extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class vm extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sh extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _m extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function rr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ym(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Mm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function oh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function c_(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){d.push(c.times[f]);for(let _=0;_<u;++_)h.push(c.values[f*u+_])}}d.length!==0&&(c.times=rr(d,c.times.constructor),c.values=rr(h,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function u_(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const m=o.times.length-1;let _;if(s<=o.times[0]){const g=u,S=d-u;_=o.values.slice(g,S)}else if(s>=o.times[m]){const g=m*d+u,S=g+d-u;_=o.values.slice(g,S)}else{const g=o.createInterpolant(),S=u,y=d-u;g.evaluate(s),_=g.resultBuffer.slice(S,y)}l==="quaternion"&&new qt().fromArray(_).normalize().conjugate().toArray(_);const p=c.times.length;for(let g=0;g<p;++g){const S=g*f+h;if(l==="quaternion")qt.multiplyQuaternionsFlat(c.values,S,_,0,c.values,S);else{const y=f-h*2;for(let M=0;M<y;++M)c.values[S+M]-=_[M]}}}return r.blendMode=Gu,r}const h_={convertArray:rr,isTypedArray:ym,getKeyframeOrder:Mm,sortedArray:fu,flattenJSON:oh,subclip:c_,makeClipAdditive:u_};class ma{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bm extends ma{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tr,endingEnd:tr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case nr:s=e,o=2*t-n;break;case Xs:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nr:a=e,l=2*n-t;break;case Xs:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-h*p+2*h*_-h*m,S=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*m+1,y=(-1-f)*p+(1.5+f)*_+.5*m,M=f*p-f*_;for(let A=0;A!==o;++A)s[A]=g*a[u+A]+S*a[c+A]+y*a[l+A]+M*a[d+A];return s}}class lh extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}}class Sm extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rr(t,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rr(e.times,Array),values:rr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ym(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){const _=t[d+m];if(_!==t[h+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Ws;class yr extends zn{constructor(e,t,n){super(e,t,n)}}yr.prototype.ValueTypeName="bool";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=Qr;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class ch extends zn{}ch.prototype.ValueTypeName="color";class ea extends zn{}ea.prototype.ValueTypeName="number";class wm extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)qt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ga extends zn{InterpolantFactoryMethodLinear(e){return new wm(this.times,this.values,this.getValueSize(),e)}}ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends zn{constructor(e,t,n){super(e,t,n)}}Mr.prototype.ValueTypeName="string";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=Qr;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class ta extends zn{}ta.prototype.ValueTypeName="vector";class na{constructor(e="",t=-1,n=[],i=Tl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(f_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(zn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Mm(l);l=fu(l,1,u),c=fu(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ea(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,m,_){if(f.length!==0){const p=[],g=[];oh(f,p,g,m),p.length!==0&&_.push(new d(h,p,g))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)f[h[m].morphTargets[_]]=-1;for(const _ in f){const p=[],g=[];for(let S=0;S!==h[m].morphTargets.length;++S){const y=h[m];p.push(y.time),g.push(y.morphTarget===_?1:0)}i.push(new ea(".morphTargetInfluence["+_+"]",p,g))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(ta,f+".position",h,"pos",i),n(ga,f+".quaternion",h,"rot",i),n(ta,f+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function d_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ea;case"vector":case"vector2":case"vector3":case"vector4":return ta;case"color":return ch;case"quaternion":return ga;case"bool":case"boolean":return yr;case"string":return Mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function f_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=d_(r.type);if(r.times===void 0){const t=[],n=[];oh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ni={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class uh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const Tm=new uh;class pn{constructor(e){this.manager=e!==void 0?e:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class p_ extends Error{constructor(e,t){super(e),this.response=t}}class hi extends pn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ni.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Kn[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){S();function S(){d.read().then(({done:y,value:M})=>{if(y)g.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,T=u.length;b<T;b++){const w=u[b];w.onProgress&&w.onProgress(A)}g.enqueue(M),S()}},y=>{g.error(y)})}}});return new Response(p)}else throw new p_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ni.add(e,c);const u=Kn[e];delete Kn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class m_ extends pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new hi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=na.parse(e[n]);t.push(i)}return t}}class g_ extends pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new lr,l=new hi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(d){l.load(e[d],function(h){const f=s.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Pt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){const h=s.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let _=0;_<h.mipmapCount;_++)a[m].mipmaps.push(h.mipmaps[m*h.mipmapCount+_]),a[m].format=h.format,a[m].width=h.width,a[m].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Pt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class ia extends pn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ni.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Zs("img");function l(){u(),ni.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class v_ extends pn{constructor(e){super(e)}load(e,t,n,i){const s=new ca;s.colorSpace=Qt;const a=new ia(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class __ extends pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new En,o=new hi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Bt,a.wrapT=c.wrapT!==void 0?c.wrapT:Bt,a.magFilter=c.magFilter!==void 0?c.magFilter:Pt,a.minFilter=c.minFilter!==void 0?c.minFilter:Pt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ln),c.mipmapCount===1&&(a.minFilter=Pt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class x_ extends pn{constructor(e){super(e)}load(e,t,n,i){const s=new yt,a=new ia(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Li extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Em extends Li{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lc=new Be,Md=new U,bd=new U;class hh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y_ extends hh{constructor(){super(new gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Am extends Li{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new y_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sd=new Be,Ms=new U,Dc=new U;class M_ extends hh{constructor(){super(new gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ms),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),i.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd)}}class Cm extends Li{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new M_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class si extends la{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class b_ extends hh{constructor(){super(new si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rm extends Li{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new b_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Im extends Li{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pm extends Li{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Lm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Dm extends Li{constructor(e=new Lm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Yl extends pn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new hi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new ye().setHex(a.value);break;case"v2":i.uniforms[s].value=new ne().fromArray(a.value);break;case"v3":i.uniforms[s].value=new U().fromArray(a.value);break;case"v4":i.uniforms[s].value=new nt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new Je().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Be().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ne().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Yl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:dm,SpriteMaterial:ju,RawShaderMaterial:Os,ShaderMaterial:jt,PointsMaterial:$u,MeshPhysicalMaterial:fm,MeshStandardMaterial:rh,MeshPhongMaterial:pm,MeshToonMaterial:mm,MeshNormalMaterial:gm,MeshLambertMaterial:vm,MeshDepthMaterial:sh,MeshDistanceMaterial:ah,MeshBasicMaterial:Wn,MeshMatcapMaterial:_m,LineDashedMaterial:xm,LineBasicMaterial:sn,Material:Zt};return new t[e]}}class pu{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Um extends et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Nm extends pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new hi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const p=f.interleavedBuffers[m],g=s(f,p.buffer),S=Wr(p.type,g),y=new ua(S,p.stride);return y.uuid=p.uuid,t[m]=y,y}function s(f,m){if(n[m]!==void 0)return n[m];const p=f.arrayBuffers[m],g=new Uint32Array(p).buffer;return n[m]=g,g}const a=e.isInstancedBufferGeometry?new Um:new et,o=e.data.index;if(o!==void 0){const f=Wr(o.type,o.array);a.setIndex(new ct(f,1))}const l=e.data.attributes;for(const f in l){const m=l[f];let _;if(m.isInterleavedBufferAttribute){const p=i(e.data,m.data);_=new ui(p,m.itemSize,m.offset,m.normalized)}else{const p=Wr(m.type,m.array),g=m.isInstancedBufferAttribute?ns:ct;_=new g(p,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),a.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const m=c[f],_=[];for(let p=0,g=m.length;p<g;p++){const S=m[p];let y;if(S.isInterleavedBufferAttribute){const M=i(e.data,S.data);y=new ui(M,S.itemSize,S.offset,S.normalized)}else{const M=Wr(S.type,S.array);y=new ct(M,S.itemSize,S.normalized)}S.name!==void 0&&(y.name=S.name),_.push(y)}a.morphAttributes[f]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,m=d.length;f!==m;++f){const _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const f=new U;h.center!==void 0&&f.fromArray(h.center),a.boundingSphere=new Vt(f,h.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class S_ extends pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?pu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new hi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?pu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new hi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new cr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Pl().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Nm;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in yd?o=yd[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Yl;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=na.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Wr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new uh(t);s=new ia(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],h=d.url;if(Array.isArray(h)){const f=[];for(let m=0,_=h.length;m<_;m++){const p=h[m],g=o(p);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new En(g.data,g.width,g.height)))}i[d.uuid]=new ir(f)}else{const f=o(d.url);i[d.uuid]=new ir(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Wr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new ia(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=await s(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new En(m.data,m.width,m.height)))}n[l.uuid]=new ir(u)}else{const u=await s(l.url);n[l.uuid]=new ir(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new ca,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new En:u=new yt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,w_)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],wd),u.wrapT=n(o.wrap[1],wd)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,Td)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,Td)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(e,t,n,i,s){let a;function o(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let m=0,_=h.length;m<_;m++){const p=h[m];n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),f.push(n[p])}return f}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function c(h){return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),i[h]}let u,d;switch(e.type){case"Scene":a=new mr,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ye(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Il(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Rl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new gt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new si(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Im(e.color,e.intensity);break;case"DirectionalLight":a=new Rm(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Cm(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Pm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Am(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Em(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Dm().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),a=new Jp(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),a=new vt(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);const h=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Kp(u,d,h),a.instanceMatrix=new ns(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new ns(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),a=new Qp(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const p=new kt;p.min.fromArray(_.boxMin),p.max.fromArray(_.boxMax);const g=new Vt;return g.radius=_.sphereRadius,g.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:p,sphereInitialized:_.sphereInitialized,sphere:g}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new $p;break;case"Line":a=new Ei(o(e.geometry),l(e.material));break;case"LineLoop":a=new em(o(e.geometry),l(e.material));break;case"LineSegments":a=new Xn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new tm(o(e.geometry),l(e.material));break;case"Sprite":a=new Zp(l(e.material));break;case"Group":a=new Xr;break;case"Bone":a=new Zu;break;default:a=new ot}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],t,n,i,s))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const m=h[f];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const m=h[f],_=a.getObjectByProperty("uuid",m.object);_!==void 0&&a.addLevel(_,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new ot}})}}const w_={UVMapping:vl,CubeReflectionMapping:oi,CubeRefractionMapping:Ti,EquirectangularReflectionMapping:Hs,EquirectangularRefractionMapping:Gs,CubeUVReflectionMapping:as},wd={RepeatWrapping:$r,ClampToEdgeWrapping:Bt,MirroredRepeatWrapping:Jr},Td={NearestFilter:At,NearestMipmapNearestFilter:_l,NearestMipmapLinearFilter:er,LinearFilter:Pt,LinearMipmapNearestFilter:jr,LinearMipmapLinearFilter:Ln};class T_ extends pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ni.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ni.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ni.add(e,l),s.manager.itemStart(e)}}let io;class dh{static getContext(){return io===void 0&&(io=new(window.AudioContext||window.webkitAudioContext)),io}static setContext(e){io=e}}class E_ extends pn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new hi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);dh.getContext().decodeAudioData(c,function(d){t(d)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),s.manager.itemError(e)}}}const Ed=new Be,Ad=new Be,Vi=new Be;class A_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new gt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new gt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Vi.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(or*t.fov*.5)/t.zoom;let o,l;Ad.elements[12]=-i,Ed.elements[12]=i,o=-a*t.aspect+s,l=a*t.aspect+s,Vi.elements[0]=2*t.near/(l-o),Vi.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Vi),o=-a*t.aspect-s,l=a*t.aspect-s,Vi.elements[0]=2*t.near/(l-o),Vi.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Vi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Ad),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Ed)}}class Om extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ql{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cd(){return performance.now()}const Hi=new U,Rd=new qt,C_=new U,Gi=new U;class R_ extends ot{constructor(){super(),this.type="AudioListener",this.context=dh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ql}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Hi,Rd,C_),Gi.set(0,0,-1).applyQuaternion(Rd),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Hi.x,i),t.positionY.linearRampToValueAtTime(Hi.y,i),t.positionZ.linearRampToValueAtTime(Hi.z,i),t.forwardX.linearRampToValueAtTime(Gi.x,i),t.forwardY.linearRampToValueAtTime(Gi.y,i),t.forwardZ.linearRampToValueAtTime(Gi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Hi.x,Hi.y,Hi.z),t.setOrientation(Gi.x,Gi.y,Gi.z,n.x,n.y,n.z)}}class Fm extends ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Wi=new U,Id=new qt,I_=new U,Xi=new U;class P_ extends Fm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Wi,Id,I_),Xi.set(0,0,1).applyQuaternion(Id);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Wi.x,n),t.positionY.linearRampToValueAtTime(Wi.y,n),t.positionZ.linearRampToValueAtTime(Wi.z,n),t.orientationX.linearRampToValueAtTime(Xi.x,n),t.orientationY.linearRampToValueAtTime(Xi.y,n),t.orientationZ.linearRampToValueAtTime(Xi.z,n)}else t.setPosition(Wi.x,Wi.y,Wi.z),t.setOrientation(Xi.x,Xi.y,Xi.z)}}class L_{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Bm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;qt.multiplyQuaternionsFlat(e,a,e,t,e,n),qt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const fh="\\[\\]\\.:\\/",D_=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",U_="[^"+fh.replace("\\.","")+"]",N_=/((?:WC+[\/:])*)/.source.replace("WC",ph),O_=/(WCOD+)?/.source.replace("WCOD",U_),F_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),B_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),z_=new RegExp("^"+N_+O_+F_+B_+"$"),k_=["material","materials","bones","map"];class V_{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D_,"")}static parseTrackName(e){const t=z_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);k_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=V_;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class H_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=yn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(h);for(let _=0,p=a;_!==p;++_)s[_].push(new it(h,n[_],i[_]))}else if(m<c){o=e[m];const _=--c,p=e[_];t[p.uuid]=m,e[m]=p,t[f]=_,e[_]=h;for(let g=0,S=a;g!==S;++g){const y=s[g],M=y[_];let A=y[m];y[m]=M,A===void 0&&(A=new it(h,n[g],i[g])),y[_]=A}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const d=s++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,m=i;f!==m;++f){const _=n[f],p=_[d],g=_[u];_[u]=p,_[d]=g}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<s){const h=--s,f=e[h],m=--a,_=e[m];t[f.uuid]=d,e[d]=f,t[_.uuid]=h,e[h]=_,e.pop();for(let p=0,g=i;p!==g;++p){const S=n[p],y=S[h],M=S[m];S[d]=y,S[h]=M,S.pop()}}else{const h=--a,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let m=0,_=i;m!==_;++m){const p=n[m];p[d]=p[h],p.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(d);for(let h=u,f=l.length;h!==f;++h){const m=l[h];d[h]=new it(m,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class zm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:tr,endingEnd:tr};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Rp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gu:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Tl:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Ip;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Cp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=nr,i.endingEnd=nr):(e?i.endingStart=this.zeroSlopeAtStart?nr:tr:i.endingStart=Xs,t?i.endingEnd=this.zeroSlopeAtEnd?nr:tr:i.endingEnd=Xs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const G_=new Float32Array(1);class W_ extends Fn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=i[d],f=h.name;let m=u[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;m=new Bm(it.create(n,f,_),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new lh(new Float32Array(2),new Float32Array(2),1,G_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?na.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Tl),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new zm(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?na.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class X_ extends El{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Al(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Y_ extends El{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTargetArray=!0,this.depth=n,this.texture=new aa(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class jl{constructor(e){this.value=e}clone(){return new jl(this.value.clone===void 0?this.value:this.value.clone())}}let q_=0;class j_ extends Fn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:q_++}),this.name="",this.usage=qs,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Z_ extends ua{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class $_{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Pd=new Be;class km{constructor(e,t,n=0,i=1/0){this.ray=new xr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pd),this}intersectObject(e,t=!0,n=[]){return mu(e,this,n,t),n.sort(Ld),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)mu(e[i],this,n,t);return n.sort(Ld),n}}function Ld(r,e){return r.distance-e.distance}function mu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)mu(s[a],e,t,!0)}}class gu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class J_{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class mh{constructor(e,t,n,i){mh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Dd=new ne;class Vm{constructor(e=new ne(1/0,1/0),t=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ud=new U,ro=new U;class Hm{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ud.subVectors(e,this.start),ro.subVectors(this.end,this.start);const n=ro.dot(ro);let s=ro.dot(Ud)/n;return t&&(s=je(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Nd=new U;class K_ extends ot{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new et,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Oe(i,3));const s=new sn({fog:!1,toneMapped:!1});this.cone=new Xn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Nd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const yi=new U,so=new Be,Uc=new Be;class Q_ extends Xn{constructor(e){const t=Gm(e),n=new et,i=[],s=[],a=new ye(0,0,1),o=new ye(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Oe(i,3)),n.setAttribute("color",new Oe(s,3));const l=new sn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Uc.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(so.multiplyMatrices(Uc,o.matrixWorld),yi.setFromMatrixPosition(so),i.setXYZ(a,yi.x,yi.y,yi.z),so.multiplyMatrices(Uc,o.parent.matrixWorld),yi.setFromMatrixPosition(so),i.setXYZ(a+1,yi.x,yi.y,yi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Gm(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Gm(r.children[t]));return e}class ex extends vt{constructor(e,t,n){const i=new pa(t,4,2),s=new Wn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const tx=new U,Od=new ye,Fd=new ye;class nx extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new fa(t);i.rotateY(Math.PI*.5),this.material=new Wn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new ct(a,3)),this.add(new vt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Od.copy(this.light.color),Fd.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Od:Fd;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(tx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class ix extends Xn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ye(n),i=new ye(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,m=-o;h<=t;h++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=h===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new et;u.setAttribute("position",new Oe(l,3)),u.setAttribute("color",new Oe(c,3));const d=new sn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class rx extends Xn{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new ye(s),a=new ye(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,m=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,m);const _=d&1?s:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const h=d&1?s:a,f=e-e/n*d;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),p=Math.sin(_)*f,g=Math.cos(_)*f;o.push(p,0,g),l.push(h.r,h.g,h.b),_=(m+1)/i*(Math.PI*2),p=Math.sin(_)*f,g=Math.cos(_)*f,o.push(p,0,g),l.push(h.r,h.g,h.b)}}const c=new et;c.setAttribute("position",new Oe(o,3)),c.setAttribute("color",new Oe(l,3));const u=new sn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Bd=new U,ao=new U,zd=new U;class sx extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new et;i.setAttribute("position",new Oe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new sn({fog:!1,toneMapped:!1});this.lightPlane=new Ei(i,s),this.add(this.lightPlane),i=new et,i.setAttribute("position",new Oe([0,0,0,0,0,1],3)),this.targetLine=new Ei(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Bd.setFromMatrixPosition(this.light.matrixWorld),ao.setFromMatrixPosition(this.light.target.matrixWorld),zd.subVectors(ao,Bd),this.lightPlane.lookAt(ao),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ao),this.targetLine.scale.z=zd.length()}}const oo=new U,wt=new la;class ax extends Xn{constructor(e){const t=new et,n=new sn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,_){l(m),l(_)}function l(m){i.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Oe(i,3)),t.setAttribute("color",new Oe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ye(16755200),u=new ye(16711680),d=new ye(43775),h=new ye(16777215),f=new ye(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const s=this.camera.coordinateSystem===Dn?-1:0;Ct("c",t,e,wt,0,0,s),Ct("t",t,e,wt,0,0,1),Ct("n1",t,e,wt,-1,-1,s),Ct("n2",t,e,wt,n,-1,s),Ct("n3",t,e,wt,-1,i,s),Ct("n4",t,e,wt,n,i,s),Ct("f1",t,e,wt,-1,-1,1),Ct("f2",t,e,wt,n,-1,1),Ct("f3",t,e,wt,-1,i,1),Ct("f4",t,e,wt,n,i,1),Ct("u1",t,e,wt,n*.7,i*1.1,s),Ct("u2",t,e,wt,-1*.7,i*1.1,s),Ct("u3",t,e,wt,0,i*2,s),Ct("cf1",t,e,wt,-1,0,1),Ct("cf2",t,e,wt,n,0,1),Ct("cf3",t,e,wt,0,-1,1),Ct("cf4",t,e,wt,0,i,1),Ct("cn1",t,e,wt,-1,0,s),Ct("cn2",t,e,wt,n,0,s),Ct("cn3",t,e,wt,0,-1,s),Ct("cn4",t,e,wt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ct(r,e,t,n,i,s,a){oo.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],oo.x,oo.y,oo.z)}}const lo=new kt;class ox extends Xn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new et;s.setIndex(new ct(n,1)),s.setAttribute("position",new ct(i,3)),super(s,new sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&lo.setFromObject(this.object),lo.isEmpty())return;const t=lo.min,n=lo.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class lx extends Xn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new et;s.setIndex(new ct(n,1)),s.setAttribute("position",new Oe(i,3)),super(s,new sn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class cx extends Ei{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new et;a.setAttribute("position",new Oe(s,3)),a.computeBoundingSphere(),super(a,new sn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new et;l.setAttribute("position",new Oe(o,3)),l.computeBoundingSphere(),this.add(new vt(l,new Wn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const kd=new U;let co,Nc;class ux extends ot{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",co===void 0&&(co=new et,co.setAttribute("position",new Oe([0,0,0,0,1,0],3)),Nc=new os(0,.5,1,5,1),Nc.translate(0,-.5,0)),this.position.copy(t),this.line=new Ei(co,new sn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new vt(Nc,new Wn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{kd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(kd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class hx extends Xn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new et;i.setAttribute("position",new Oe(t,3)),i.setAttribute("color",new Oe(n,3));const s=new sn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ye,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wm{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $s,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const S=[];for(let y=0,M=g.length;y<M;y++){const A=g[y],b=new cr;b.curves=A.curves,S.push(b)}return S}function n(g,S){const y=S.length;let M=!1;for(let A=y-1,b=0;b<y;A=b++){let T=S[A],w=S[b],x=w.x-T.x,v=w.y-T.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(T=S[b],x=-x,w=S[A],v=-v),g.y<T.y||g.y>w.y)continue;if(g.y===T.y){if(g.x===T.x)return!0}else{const E=v*(g.x-T.x)-x*(g.y-T.y);if(E===0)return!0;if(E<0)continue;M=!M}}else{if(g.y!==T.y)continue;if(w.x<=g.x&&g.x<=T.x||T.x<=g.x&&g.x<=w.x)return!0}}return M}const i=Hn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new cr,l.curves=o.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const d=[],h=[];let f=[],m=0,_;h[m]=void 0,f[m]=[];for(let g=0,S=s.length;g<S;g++)o=s[g],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!u&&h[m]&&m++,h[m]={s:new cr,p:_},h[m].s.curves=o.curves,u&&m++,f[m]=[]):f[m].push({h:o,p:_[0]});if(!h[0])return t(s);if(h.length>1){let g=!1,S=0;for(let y=0,M=h.length;y<M;y++)d[y]=[];for(let y=0,M=h.length;y<M;y++){const A=f[y];for(let b=0;b<A.length;b++){const T=A[b];let w=!0;for(let x=0;x<h.length;x++)n(T.p,h[x].p)&&(y!==x&&S++,w?(w=!1,d[x].push(T)):g=!0);w&&d[y].push(T)}}S>0&&g===!1&&(f=d)}let p;for(let g=0,S=h.length;g<S;g++){l=h[g].s,c.push(l),p=f[g];for(let y=0,M=p.length;y<M;y++)l.holes.push(p[y].h)}return c}}class dx extends Fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function fx(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function px(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function mx(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function vu(r,e,t,n){const i=gx(n);switch(t){case Fu:return r*e;case zu:return r*e;case ku:return r*e*2;case bl:return r*e/i.components*i.byteLength;case sa:return r*e/i.components*i.byteLength;case Vu:return r*e*2/i.components*i.byteLength;case Sl:return r*e*2/i.components*i.byteLength;case Bu:return r*e*3/i.components*i.byteLength;case Nt:return r*e*4/i.components*i.byteLength;case wl:return r*e*4/i.components*i.byteLength;case Cs:case Rs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Is:case Ps:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bo:case ko:return Math.max(r,16)*Math.max(e,8)/4;case Fo:case zo:return Math.max(r,8)*Math.max(e,8)/2;case Vo:case Ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $o:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ls:case rl:case sl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hu:case al:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ol:case ll:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gx(r){switch(r){case Gn:case Uu:return{byteLength:1,components:1};case Kr:case Nu:case _r:return{byteLength:2,components:1};case yl:case Ml:return{byteLength:2,components:4};case li:case xl:case dn:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const vx={contain:fx,cover:px,fill:mx,getByteLength:vu};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ss);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function _x(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Px=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,by=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:xx,alphahash_pars_fragment:yx,alphamap_fragment:Mx,alphamap_pars_fragment:bx,alphatest_fragment:Sx,alphatest_pars_fragment:wx,aomap_fragment:Tx,aomap_pars_fragment:Ex,batching_pars_vertex:Ax,batching_vertex:Cx,begin_vertex:Rx,beginnormal_vertex:Ix,bsdfs:Px,iridescence_fragment:Lx,bumpmap_pars_fragment:Dx,clipping_planes_fragment:Ux,clipping_planes_pars_fragment:Nx,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Fx,color_fragment:Bx,color_pars_fragment:zx,color_pars_vertex:kx,color_vertex:Vx,common:Hx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:Xx,displacementmap_vertex:Yx,emissivemap_fragment:qx,emissivemap_pars_fragment:jx,colorspace_fragment:Zx,colorspace_pars_fragment:$x,envmap_fragment:Jx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Qx,envmap_pars_vertex:ey,envmap_physical_pars_fragment:hy,envmap_vertex:ty,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:ry,fog_pars_fragment:sy,gradientmap_pars_fragment:ay,lightmap_pars_fragment:oy,lights_lambert_fragment:ly,lights_lambert_pars_fragment:cy,lights_pars_begin:uy,lights_toon_fragment:dy,lights_toon_pars_fragment:fy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:gy,lights_physical_pars_fragment:vy,lights_fragment_begin:_y,lights_fragment_maps:xy,lights_fragment_end:yy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:by,logdepthbuf_pars_vertex:Sy,logdepthbuf_vertex:wy,map_fragment:Ty,map_pars_fragment:Ey,map_particle_fragment:Ay,map_particle_pars_fragment:Cy,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Iy,morphinstance_vertex:Py,morphcolor_vertex:Ly,morphnormal_vertex:Dy,morphtarget_pars_vertex:Uy,morphtarget_vertex:Ny,normal_fragment_begin:Oy,normal_fragment_maps:Fy,normal_pars_fragment:By,normal_pars_vertex:zy,normal_vertex:ky,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Wy,iridescence_pars_fragment:Xy,opaque_fragment:Yy,packing:qy,premultiplied_alpha_fragment:jy,project_vertex:Zy,dithering_fragment:$y,dithering_pars_fragment:Jy,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:eM,shadowmap_pars_vertex:tM,shadowmap_vertex:nM,shadowmask_pars_fragment:iM,skinbase_vertex:rM,skinning_pars_vertex:sM,skinning_vertex:aM,skinnormal_vertex:oM,specularmap_fragment:lM,specularmap_pars_fragment:cM,tonemapping_fragment:uM,tonemapping_pars_fragment:hM,transmission_fragment:dM,transmission_pars_fragment:fM,uv_pars_fragment:pM,uv_pars_vertex:mM,uv_vertex:gM,worldpos_vertex:vM,background_vert:_M,background_frag:xM,backgroundCube_vert:yM,backgroundCube_frag:MM,cube_vert:bM,cube_frag:SM,depth_vert:wM,depth_frag:TM,distanceRGBA_vert:EM,distanceRGBA_frag:AM,equirect_vert:CM,equirect_frag:RM,linedashed_vert:IM,linedashed_frag:PM,meshbasic_vert:LM,meshbasic_frag:DM,meshlambert_vert:UM,meshlambert_frag:NM,meshmatcap_vert:OM,meshmatcap_frag:FM,meshnormal_vert:BM,meshnormal_frag:zM,meshphong_vert:kM,meshphong_frag:VM,meshphysical_vert:HM,meshphysical_frag:GM,meshtoon_vert:WM,meshtoon_frag:XM,points_vert:YM,points_frag:qM,shadow_vert:jM,shadow_frag:ZM,sprite_vert:$M,sprite_frag:JM},Ae={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Pn={basic:{uniforms:Kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Kt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Kt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Kt([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Kt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Kt([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Kt([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Kt([Ae.common,Ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Kt([Ae.lights,Ae.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Pn.physical={uniforms:Kt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const uo={r:0,b:0,g:0},Yi=new rn,KM=new Be;function QM(r,e,t,n,i,s,a){const o=new ye(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function m(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function _(y){let M=!1;const A=m(y);A===null?g(o,l):A&&A.isColor&&(g(A,1),M=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,M){const A=m(M);A&&(A.isCubeTexture||A.mapping===as)?(u===void 0&&(u=new vt(new Ri(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:ts(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Yi.copy(M.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KM.makeRotationFromEuler(Yi)),u.material.toneMapped=at.getTransfer(A.colorSpace)!==ft,(d!==A||h!==A.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new vt(new Pi(2,2),new jt({name:"BackgroundMaterial",uniforms:ts(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=at.getTransfer(A.colorSpace)!==ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,M){y.getRGB(uo,Xp(r)),n.buffers.color.setClear(uo.r,uo.g,uo.b,M,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(o,l)},render:_,addToRenderList:p,dispose:S}}function eb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,E,P,O,F){let H=!1;const B=d(O,P,E);s!==B&&(s=B,c(s.object)),H=f(v,O,P,F),H&&m(v,O,P,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(v,E,P,O),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function d(v,E,P){const O=P.wireframe===!0;let F=n[v.id];F===void 0&&(F={},n[v.id]=F);let H=F[E.id];H===void 0&&(H={},F[E.id]=H);let B=H[O];return B===void 0&&(B=h(l()),H[O]=B),B}function h(v){const E=[],P=[],O=[];for(let F=0;F<t;F++)E[F]=0,P[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:P,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,E,P,O){const F=s.attributes,H=E.attributes;let B=0;const ie=P.getAttributes();for(const Y in ie)if(ie[Y].location>=0){const ce=F[Y];let Z=H[Y];if(Z===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),ce===void 0||ce.attribute!==Z||Z&&ce.data!==Z.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function m(v,E,P,O){const F={},H=E.attributes;let B=0;const ie=P.getAttributes();for(const Y in ie)if(ie[Y].location>=0){let ce=H[Y];ce===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor));const Z={};Z.attribute=ce,ce&&ce.data&&(Z.data=ce.data),F[Y]=Z,B++}s.attributes=F,s.attributesNum=B,s.index=O}function _(){const v=s.newAttributes;for(let E=0,P=v.length;E<P;E++)v[E]=0}function p(v){g(v,0)}function g(v,E){const P=s.newAttributes,O=s.enabledAttributes,F=s.attributeDivisors;P[v]=1,O[v]===0&&(r.enableVertexAttribArray(v),O[v]=1),F[v]!==E&&(r.vertexAttribDivisor(v,E),F[v]=E)}function S(){const v=s.newAttributes,E=s.enabledAttributes;for(let P=0,O=E.length;P<O;P++)E[P]!==v[P]&&(r.disableVertexAttribArray(P),E[P]=0)}function y(v,E,P,O,F,H,B){B===!0?r.vertexAttribIPointer(v,E,P,F,H):r.vertexAttribPointer(v,E,P,O,F,H)}function M(v,E,P,O){_();const F=O.attributes,H=P.getAttributes(),B=E.defaultAttributeValues;for(const ie in H){const Y=H[ie];if(Y.location>=0){let le=F[ie];if(le===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){const ce=le.normalized,Z=le.itemSize,Te=e.get(le);if(Te===void 0)continue;const Fe=Te.buffer,J=Te.type,de=Te.bytesPerElement,Me=J===r.INT||J===r.UNSIGNED_INT||le.gpuType===xl;if(le.isInterleavedBufferAttribute){const pe=le.data,ee=pe.stride,R=le.offset;if(pe.isInstancedInterleavedBuffer){for(let N=0;N<Y.locationSize;N++)g(Y.location+N,pe.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let N=0;N<Y.locationSize;N++)p(Y.location+N);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let N=0;N<Y.locationSize;N++)y(Y.location+N,Z/Y.locationSize,J,ce,ee*de,(R+Z/Y.locationSize*N)*de,Me)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)g(Y.location+pe,le.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<Y.locationSize;pe++)p(Y.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let pe=0;pe<Y.locationSize;pe++)y(Y.location+pe,Z/Y.locationSize,J,ce,Z*de,Z/Y.locationSize*pe*de,Me)}}else if(B!==void 0){const ce=B[ie];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(Y.location,ce);break;case 3:r.vertexAttrib3fv(Y.location,ce);break;case 4:r.vertexAttrib4fv(Y.location,ce);break;default:r.vertexAttrib1fv(Y.location,ce)}}}}S()}function A(){w();for(const v in n){const E=n[v];for(const P in E){const O=E[P];for(const F in O)u(O[F].object),delete O[F];delete E[P]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const P in E){const O=E[P];for(const F in O)u(O[F].object),delete O[F];delete E[P]}delete n[v.id]}function T(v){for(const E in n){const P=n[E];if(P[v.id]===void 0)continue;const O=P[v.id];for(const F in O)u(O[F].object),delete O[F];delete P[v.id]}}function w(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function tb(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*h[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Nt&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const w=T===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Gn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==dn&&!w)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:A,maxSamples:b}}function ib(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Vn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,y=S*4;let M=g.clippingState||null;l.value=M,M=u(m,h,y,f);for(let A=0;A!==y;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,M=f;y!==_;++y,M+=4)a.copy(d[y]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function rb(r){let e=new WeakMap;function t(a,o){return o===Hs?a.mapping=oi:o===Gs&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hs||o===Gs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qp(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const qr=4,Vd=[.125,.215,.35,.446,.526,.582],Ki=20,Oc=new si,Hd=new ye;let Fc=null,Bc=0,zc=0,kc=!1;const $i=(1+Math.sqrt(5))/2,kr=1/$i,Gd=[new U(-$i,kr,0),new U($i,kr,0),new U(-kr,0,$i),new U(kr,0,$i),new U(0,$i,-kr),new U(0,$i,kr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class _u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Bc,zc),this._renderer.xr.enabled=kc,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:_r,format:Nt,colorSpace:pr,depthBuffer:!1},i=Wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sb(s)),this._blurMaterial=ab(s,e,t)}return i}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,n,i){const o=new gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Hd),u.toneMapping=Nn,u.autoClear=!1;const f=new Wn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new vt(new Ri,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Hd),_=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const y=this._cubeSize;ho(i,S*y,g>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===oi||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gd[(i-s-1)%Gd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new vt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const g=[];let S=0;for(let T=0;T<Ki;++T){const w=T/_,x=Math.exp(-w*w/2);g.push(x),T===0?S+=x:T<p&&(S+=2*x)}for(let T=0;T<g.length;T++)g[T]=g[T]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const M=this._sizeLods[i],A=3*M*(i>y-qr?i-y+qr:0),b=4*(this._cubeSize-M);ho(t,A,b,3*M,2*M),l.setRenderTarget(t),l.render(d,Oc)}}function sb(r){const e=[],t=[],n=[];let i=r;const s=r-qr+1+Vd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-qr?l=Vd[a-r+qr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,_=3,p=2,g=1,S=new Float32Array(_*m*f),y=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,w=b>2?0:-1,x=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];S.set(x,_*m*b),y.set(h,p*m*b);const v=[b,b,b,b,b,b];M.set(v,g*m*b)}const A=new et;A.setAttribute("position",new ct(S,_)),A.setAttribute("uv",new ct(y,p)),A.setAttribute("faceIndex",new ct(M,g)),e.push(A),i>qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wd(r,e,t){const n=new On(r,e,t);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ab(r,e,t){const n=new Float32Array(Ki),i=new U(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xd(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yd(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ob(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hs||l===Gs,u=l===oi||l===Ti;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new _u(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new _u(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cb(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,M=S.length;y<M;y+=3){const A=S[y+0],b=S[y+1],T=S[y+2];h.push(A,b,b,T,T,A)}}else if(m!==void 0){const S=m.array;_=m.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const A=y+0,b=y+1,T=y+2;h.push(A,b,b,T,T,A)}}else return;const p=new(Vp(h)?qu:Yu)(h,1);p.version=_;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ub(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,h*a,m),t.update(f,n,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function d(h,f,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/a,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,m);let g=0;for(let S=0;S<m;S++)g+=f[S]*_[S];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function db(r,e,t){const n=new WeakMap,i=new nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let x=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let M=o.attributes.position.count*y,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*A*4*d),T=new aa(b,M,A,d);T.type=dn,T.needsUpdate=!0;const w=y*4;for(let v=0;v<d;v++){const E=p[v],P=g[v],O=S[v],F=M*A*4*v;for(let H=0;H<E.count;H++){const B=H*w;f===!0&&(i.fromBufferAttribute(E,H),b[F+B+0]=i.x,b[F+B+1]=i.y,b[F+B+2]=i.z,b[F+B+3]=0),m===!0&&(i.fromBufferAttribute(P,H),b[F+B+4]=i.x,b[F+B+5]=i.y,b[F+B+6]=i.z,b[F+B+7]=0),_===!0&&(i.fromBufferAttribute(O,H),b[F+B+8]=i.x,b[F+B+9]=i.y,b[F+B+10]=i.z,b[F+B+11]=O.itemSize===4?i.w:1)}}h={count:d,texture:T,size:new ne(M,A)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function fb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ym=new yt,qd=new Ju(1,1),qm=new aa,jm=new Al,Zm=new ca,jd=[],Zd=[],$d=new Float32Array(16),Jd=new Float32Array(9),Kd=new Float32Array(4);function ls(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=jd[i];if(s===void 0&&(s=new Float32Array(i),jd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Lt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zl(r,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function pb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function _b(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Kd.set(n),r.uniformMatrix2fv(this.addr,!1,Kd),Dt(t,n)}}function xb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Jd.set(n),r.uniformMatrix3fv(this.addr,!1,Jd),Dt(t,n)}}function yb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;$d.set(n),r.uniformMatrix4fv(this.addr,!1,$d),Dt(t,n)}}function Mb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function Sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function Tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function Ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function Cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function Rb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(qd.compareFunction=Wu,s=qd):s=Ym,t.setTexture2D(e||s,i)}function Ib(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jm,i)}function Pb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zm,i)}function Lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qm,i)}function Db(r){switch(r){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return _b;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return bb;case 35668:case 35672:return Sb;case 35669:case 35673:return wb;case 5125:return Tb;case 36294:return Eb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ub(r,e){r.uniform1fv(this.addr,e)}function Nb(r,e){const t=ls(e,this.size,2);r.uniform2fv(this.addr,t)}function Ob(r,e){const t=ls(e,this.size,3);r.uniform3fv(this.addr,t)}function Fb(r,e){const t=ls(e,this.size,4);r.uniform4fv(this.addr,t)}function Bb(r,e){const t=ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zb(r,e){const t=ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kb(r,e){const t=ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Vb(r,e){r.uniform1iv(this.addr,e)}function Hb(r,e){r.uniform2iv(this.addr,e)}function Gb(r,e){r.uniform3iv(this.addr,e)}function Wb(r,e){r.uniform4iv(this.addr,e)}function Xb(r,e){r.uniform1uiv(this.addr,e)}function Yb(r,e){r.uniform2uiv(this.addr,e)}function qb(r,e){r.uniform3uiv(this.addr,e)}function jb(r,e){r.uniform4uiv(this.addr,e)}function Zb(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ym,s[a])}function $b(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||jm,s[a])}function Jb(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Zm,s[a])}function Kb(r,e,t){const n=this.cache,i=e.length,s=Zl(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qm,s[a])}function Qb(r){switch(r){case 5126:return Ub;case 35664:return Nb;case 35665:return Ob;case 35666:return Fb;case 35674:return Bb;case 35675:return zb;case 35676:return kb;case 5124:case 35670:return Vb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return Yb;case 36295:return qb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Kb}}class eS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qb(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function Qd(r,e){r.seq.push(e),r.map[e.id]=e}function iS(r,e,t){const n=r.name,i=n.length;for(Vc.lastIndex=0;;){const s=Vc.exec(n),a=Vc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qd(t,c===void 0?new eS(o,r,e):new tS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new nS(o),Qd(t,d)),t=d}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);iS(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ef(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const rS=37297;let sS=0;function aS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const tf=new Je;function oS(r){at._getMatrix(tf,at.workingColorSpace,r);const e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case Ys:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function nf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+aS(r.getShaderSource(e),a)}else return i}function lS(r,e){const t=oS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cS(r,e){let t;switch(e){case Mp:t="Linear";break;case bp:t="Reinhard";break;case Sp:t="Cineon";break;case gl:t="ACESFilmic";break;case Tp:t="AgX";break;case Ep:t="Neutral";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new U;function uS(){at.getLuminanceCoefficients(fo);const r=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function dS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Es(r){return r!==""}function rf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(r){return r.replace(pS,gS)}const mS=new Map;function gS(r,e){let t=tt[e];if(t===void 0){const n=mS.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xu(t)}const vS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(r){return r.replace(vS,_S)}function _S(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function of(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function yS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case oi:case Ti:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ra:e="ENVMAP_BLENDING_MULTIPLY";break;case xp:e="ENVMAP_BLENDING_MIX";break;case yp:e="ENVMAP_BLENDING_ADD";break}return e}function SS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xS(t),c=yS(t),u=MS(t),d=bS(t),h=SS(t),f=hS(t),m=dS(s),_=i.createProgram();let p,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Es).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Es).join(`
`),g.length>0&&(g+=`
`)):(p=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),g=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Nn?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),uS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=xu(a),a=rf(a,t),a=sf(a,t),o=xu(o),o=rf(o,t),o=sf(o,t),a=af(a),o=af(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=S+p+a,M=S+g+o,A=ef(i,i.VERTEX_SHADER,y),b=ef(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(E){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(b).trim();let H=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,b);else{const ie=nf(i,A,"vertex"),Y=nf(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+ie+`
`+Y)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(O===""||F==="")&&(B=!1);B&&(E.diagnostics={runnable:H,programLog:P,vertexShader:{log:O,prefix:p},fragmentShader:{log:F,prefix:g}})}i.deleteShader(A),i.deleteShader(b),w=new So(i,_),x=fS(i,_)}let w;this.getUniforms=function(){return w===void 0&&T(this),w};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,rS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let TS=0;class ES{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AS(e),t.set(e,n)),n}}class AS{constructor(e){this.id=TS++,this.code=e,this.usedTimes=0}}function CS(r,e,t,n,i,s,a){const o=new Cl,l=new ES,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,v,E,P,O){const F=P.fog,H=O.geometry,B=x.isMeshStandardMaterial?P.environment:null,ie=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),Y=ie&&ie.mapping===as?ie.image.height:null,le=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Z=ce!==void 0?ce.length:0;let Te=0;H.morphAttributes.position!==void 0&&(Te=1),H.morphAttributes.normal!==void 0&&(Te=2),H.morphAttributes.color!==void 0&&(Te=3);let Fe,J,de,Me;if(le){const st=Pn[le];Fe=st.vertexShader,J=st.fragmentShader}else Fe=x.vertexShader,J=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);const pe=r.getRenderTarget(),ee=r.state.buffers.depth.getReversed(),R=O.isInstancedMesh===!0,N=O.isBatchedMesh===!0,z=!!x.map,G=!!x.matcap,V=!!ie,I=!!x.aoMap,he=!!x.lightMap,re=!!x.bumpMap,me=!!x.normalMap,ae=!!x.displacementMap,Se=!!x.emissiveMap,ge=!!x.metalnessMap,D=!!x.roughnessMap,C=x.anisotropy>0,j=x.clearcoat>0,te=x.dispersion>0,fe=x.iridescence>0,oe=x.sheen>0,Ue=x.transmission>0,we=C&&!!x.anisotropyMap,Ee=j&&!!x.clearcoatMap,Ze=j&&!!x.clearcoatNormalMap,ve=j&&!!x.clearcoatRoughnessMap,Le=fe&&!!x.iridescenceMap,Ve=fe&&!!x.iridescenceThicknessMap,We=oe&&!!x.sheenColorMap,Pe=oe&&!!x.sheenRoughnessMap,W=!!x.specularMap,se=!!x.specularColorMap,Ce=!!x.specularIntensityMap,k=Ue&&!!x.transmissionMap,xe=Ue&&!!x.thicknessMap,Q=!!x.gradientMap,ue=!!x.alphaMap,Re=x.alphaTest>0,be=!!x.alphaHash,He=!!x.extensions;let pt=Nn;x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(pt=r.toneMapping);const bt={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:J,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:N,batchingColor:N&&O._colorsTexture!==null,instancing:R,instancingColor:R&&O.instanceColor!==null,instancingMorph:R&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:pr,alphaToCoverage:!!x.alphaToCoverage,map:z,matcap:G,envMap:V,envMapMode:V&&ie.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:he,bumpMap:re,normalMap:me,displacementMap:h&&ae,emissiveMap:Se,normalMapObjectSpace:me&&x.normalMapType===Dp,normalMapTangentSpace:me&&x.normalMapType===Ci,metalnessMap:ge,roughnessMap:D,anisotropy:C,anisotropyMap:we,clearcoat:j,clearcoatMap:Ee,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ve,dispersion:te,iridescence:fe,iridescenceMap:Le,iridescenceThicknessMap:Ve,sheen:oe,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:W,specularColorMap:se,specularIntensityMap:Ce,transmission:Ue,transmissionMap:k,thicknessMap:xe,gradientMap:Q,opaque:x.transparent===!1&&x.blending===sr&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:be,combine:x.combine,mapUv:z&&_(x.map.channel),aoMapUv:I&&_(x.aoMap.channel),lightMapUv:he&&_(x.lightMap.channel),bumpMapUv:re&&_(x.bumpMap.channel),normalMapUv:me&&_(x.normalMap.channel),displacementMapUv:ae&&_(x.displacementMap.channel),emissiveMapUv:Se&&_(x.emissiveMap.channel),metalnessMapUv:ge&&_(x.metalnessMap.channel),roughnessMapUv:D&&_(x.roughnessMap.channel),anisotropyMapUv:we&&_(x.anisotropyMap.channel),clearcoatMapUv:Ee&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(x.sheenRoughnessMap.channel),specularMapUv:W&&_(x.specularMap.channel),specularColorMapUv:se&&_(x.specularColorMap.channel),specularIntensityMapUv:Ce&&_(x.specularIntensityMap.channel),transmissionMapUv:k&&_(x.transmissionMap.channel),thicknessMapUv:xe&&_(x.thicknessMap.channel),alphaMapUv:ue&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||C),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(z||ue),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ee,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Te,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&E.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:z&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:Se&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:He&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&x.extensions.multiDraw===!0||N)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function g(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)v.push(E),v.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(S(v,x),y(v,x),v.push(r.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function y(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const v=m[x.type];let E;if(v){const P=Pn[v];E=oa.clone(P.uniforms)}else E=x.uniforms;return E}function A(x,v){let E;for(let P=0,O=u.length;P<O;P++){const F=u[P];if(F.cacheKey===v){E=F,++E.usedTimes;break}}return E===void 0&&(E=new wS(r,v,x,s),u.push(E)),E}function b(x){if(--x.usedTimes===0){const v=u.indexOf(x);u[v]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function w(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:w}}function RS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function IS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,f,m,_,p){let g=r[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:p},r[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=_,g.group=p),e++,g}function o(d,h,f,m,_,p){const g=a(d,h,f,m,_,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(d,h,f,m,_,p){const g=a(d,h,f,m,_,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,h){t.length>1&&t.sort(d||IS),n.length>1&&n.sort(h||lf),i.length>1&&i.sort(h||lf)}function u(){for(let d=e,h=r.length;d<h;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function PS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new cf,r.set(n,[a])):i>=s.length?(a=new cf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function LS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ye};break;case"SpotLight":t={position:new U,direction:new U,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function DS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let US=0;function NS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OS(r){const e=new LS,t=DS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new Be,a=new Be;function o(c){let u=0,d=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,S=0,y=0,M=0,A=0,b=0,T=0;c.sort(NS);for(let x=0,v=c.length;x<v;x++){const E=c[x],P=E.color,O=E.intensity,F=E.distance,H=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=P.r*O,d+=P.g*O,h+=P.b*O;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],O);T++}else if(E.isDirectionalLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ie=E.shadow,Y=t.get(E);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=E.shadow.matrix,S++}n.directional[f]=B,f++}else if(E.isSpotLight){const B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(P).multiplyScalar(O),B.distance=F,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[_]=B;const ie=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,ie.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[_]=ie.matrix,E.castShadow){const Y=t.get(E);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=H,M++}_++}else if(E.isRectAreaLight){const B=e.get(E);B.color.copy(P).multiplyScalar(O),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=B,p++}else if(E.isPointLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const ie=E.shadow,Y=t.get(E);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,Y.shadowCameraNear=ie.camera.near,Y.shadowCameraFar=ie.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=E.shadow.matrix,y++}n.point[m]=B,m++}else if(E.isHemisphereLight){const B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(O),B.groundColor.copy(E.groundColor).multiplyScalar(O),n.hemi[g]=B,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const w=n.hash;(w.directionalLength!==f||w.pointLength!==m||w.spotLength!==_||w.rectAreaLength!==p||w.hemiLength!==g||w.numDirectionalShadows!==S||w.numPointShadows!==y||w.numSpotShadows!==M||w.numSpotMaps!==A||w.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,w.directionalLength=f,w.pointLength=m,w.spotLength=_,w.rectAreaLength=p,w.hemiLength=g,w.numDirectionalShadows=S,w.numPointShadows=y,w.numSpotShadows=M,w.numSpotMaps=A,w.numLightProbes=T,n.version=US++)}function l(c,u){let d=0,h=0,f=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const y=c[g];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function uf(r){const e=new OS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function FS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new uf(r),e.set(i,[o])):s>=a.length?(o=new uf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kS(r,e,t){let n=new ha;const i=new ne,s=new ne,a=new nt,o=new sh({depthPacking:Lp}),l=new ah,c={},u=t.maxTextureSize,d={[ai]:Yt,[Yt]:ai,[hn]:hn},h=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new et;m.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let g=this.type;this.render=function(b,T,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const x=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),P=r.state;P.setBlending(ii),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const O=g!==kn&&this.type===kn,F=g===kn&&this.type!==kn;for(let H=0,B=b.length;H<B;H++){const ie=b[H],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const le=Y.getFrameExtents();if(i.multiply(le),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/le.x),i.x=s.x*le.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/le.y),i.y=s.y*le.y,Y.mapSize.y=s.y)),Y.map===null||O===!0||F===!0){const Z=this.type!==kn?{minFilter:At,magFilter:At}:{};Y.map!==null&&Y.map.dispose(),Y.map=new On(i.x,i.y,Z),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const ce=Y.getViewportCount();for(let Z=0;Z<ce;Z++){const Te=Y.getViewport(Z);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),P.viewport(a),Y.updateMatrices(ie,Z),n=Y.getFrustum(),M(T,w,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===kn&&S(Y,w),Y.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(x,v,E)};function S(b,T){const w=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new On(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,w,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,w,f,_,null)}function y(b,T,w,x){let v=null;const E=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)v=E;else if(v=w.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=v.uuid,O=T.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let H=F[O];H===void 0&&(H=v.clone(),F[O]=H,T.addEventListener("dispose",A)),v=H}if(v.visible=T.visible,v.wireframe=T.wireframe,x===kn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=r.properties.get(v);P.light=w}return v}function M(b,T,w,x,v){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===kn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const O=e.update(b),F=b.material;if(Array.isArray(F)){const H=O.groups;for(let B=0,ie=H.length;B<ie;B++){const Y=H[B],le=F[Y.materialIndex];if(le&&le.visible){const ce=y(b,le,x,v);b.onBeforeShadow(r,b,T,w,O,ce,Y),r.renderBufferDirect(w,null,O,ce,b,Y),b.onAfterShadow(r,b,T,w,O,ce,Y)}}}else if(F.visible){const H=y(b,F,x,v);b.onBeforeShadow(r,b,T,w,O,H,null),r.renderBufferDirect(w,null,O,H,b,null),b.onAfterShadow(r,b,T,w,O,H,null)}}const P=b.children;for(let O=0,F=P.length;O<F;O++)M(P[O],T,w,x,v)}function A(b){b.target.removeEventListener("dispose",A);for(const w in c){const x=c[w],v=b.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const VS={[Io]:Po,[Lo]:No,[Do]:Oo,[hr]:Uo,[Po]:Io,[No]:Lo,[Oo]:Do,[Uo]:hr};function HS(r,e){function t(){let k=!1;const xe=new nt;let Q=null;const ue=new nt(0,0,0,0);return{setMask:function(Re){Q!==Re&&!k&&(r.colorMask(Re,Re,Re,Re),Q=Re)},setLocked:function(Re){k=Re},setClear:function(Re,be,He,pt,bt){bt===!0&&(Re*=pt,be*=pt,He*=pt),xe.set(Re,be,He,pt),ue.equals(xe)===!1&&(r.clearColor(Re,be,He,pt),ue.copy(xe))},reset:function(){k=!1,Q=null,ue.set(-1,0,0,0)}}}function n(){let k=!1,xe=!1,Q=null,ue=null,Re=null;return{setReversed:function(be){if(xe!==be){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const pt=Re;Re=null,this.setClear(pt)}xe=be},getReversed:function(){return xe},setTest:function(be){be?pe(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(be){Q!==be&&!k&&(r.depthMask(be),Q=be)},setFunc:function(be){if(xe&&(be=VS[be]),ue!==be){switch(be){case Io:r.depthFunc(r.NEVER);break;case Po:r.depthFunc(r.ALWAYS);break;case Lo:r.depthFunc(r.LESS);break;case hr:r.depthFunc(r.LEQUAL);break;case Do:r.depthFunc(r.EQUAL);break;case Uo:r.depthFunc(r.GEQUAL);break;case No:r.depthFunc(r.GREATER);break;case Oo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=be}},setLocked:function(be){k=be},setClear:function(be){Re!==be&&(xe&&(be=1-be),r.clearDepth(be),Re=be)},reset:function(){k=!1,Q=null,ue=null,Re=null,xe=!1}}}function i(){let k=!1,xe=null,Q=null,ue=null,Re=null,be=null,He=null,pt=null,bt=null;return{setTest:function(st){k||(st?pe(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function(st){xe!==st&&!k&&(r.stencilMask(st),xe=st)},setFunc:function(st,Ht,Yn){(Q!==st||ue!==Ht||Re!==Yn)&&(r.stencilFunc(st,Ht,Yn),Q=st,ue=Ht,Re=Yn)},setOp:function(st,Ht,Yn){(be!==st||He!==Ht||pt!==Yn)&&(r.stencilOp(st,Ht,Yn),be=st,He=Ht,pt=Yn)},setLocked:function(st){k=st},setClear:function(st){bt!==st&&(r.clearStencil(st),bt=st)},reset:function(){k=!1,xe=null,Q=null,ue=null,Re=null,be=null,He=null,pt=null,bt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],m=null,_=!1,p=null,g=null,S=null,y=null,M=null,A=null,b=null,T=new ye(0,0,0),w=0,x=!1,v=null,E=null,P=null,O=null,F=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,ie=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=ie>=2);let le=null,ce={};const Z=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),Fe=new nt().fromArray(Z),J=new nt().fromArray(Te);function de(k,xe,Q,ue){const Re=new Uint8Array(4),be=r.createTexture();r.bindTexture(k,be),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Q;He++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,ue,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(xe+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return be}const Me={};Me[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(r.DEPTH_TEST),a.setFunc(hr),re(!1),me(ru),pe(r.CULL_FACE),I(ii);function pe(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function ee(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function R(k,xe){return d[k]!==xe?(r.bindFramebuffer(k,xe),d[k]=xe,k===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=xe),k===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function N(k,xe){let Q=f,ue=!1;if(k){Q=h.get(xe),Q===void 0&&(Q=[],h.set(xe,Q));const Re=k.textures;if(Q.length!==Re.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let be=0,He=Re.length;be<He;be++)Q[be]=r.COLOR_ATTACHMENT0+be;Q.length=Re.length,ue=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,ue=!0);ue&&r.drawBuffers(Q)}function z(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const G={[bi]:r.FUNC_ADD,[np]:r.FUNC_SUBTRACT,[ip]:r.FUNC_REVERSE_SUBTRACT};G[rp]=r.MIN,G[sp]=r.MAX;const V={[ap]:r.ZERO,[op]:r.ONE,[lp]:r.SRC_COLOR,[Co]:r.SRC_ALPHA,[pp]:r.SRC_ALPHA_SATURATE,[dp]:r.DST_COLOR,[up]:r.DST_ALPHA,[cp]:r.ONE_MINUS_SRC_COLOR,[Ro]:r.ONE_MINUS_SRC_ALPHA,[fp]:r.ONE_MINUS_DST_COLOR,[hp]:r.ONE_MINUS_DST_ALPHA,[mp]:r.CONSTANT_COLOR,[gp]:r.ONE_MINUS_CONSTANT_COLOR,[vp]:r.CONSTANT_ALPHA,[_p]:r.ONE_MINUS_CONSTANT_ALPHA};function I(k,xe,Q,ue,Re,be,He,pt,bt,st){if(k===ii){_===!0&&(ee(r.BLEND),_=!1);return}if(_===!1&&(pe(r.BLEND),_=!0),k!==tp){if(k!==p||st!==x){if((g!==bi||M!==bi)&&(r.blendEquation(r.FUNC_ADD),g=bi,M=bi),st)switch(k){case sr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ao:r.blendFunc(r.ONE,r.ONE);break;case su:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case au:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ao:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case su:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case au:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,y=null,A=null,b=null,T.set(0,0,0),w=0,p=k,x=st}return}Re=Re||xe,be=be||Q,He=He||ue,(xe!==g||Re!==M)&&(r.blendEquationSeparate(G[xe],G[Re]),g=xe,M=Re),(Q!==S||ue!==y||be!==A||He!==b)&&(r.blendFuncSeparate(V[Q],V[ue],V[be],V[He]),S=Q,y=ue,A=be,b=He),(pt.equals(T)===!1||bt!==w)&&(r.blendColor(pt.r,pt.g,pt.b,bt),T.copy(pt),w=bt),p=k,x=!1}function he(k,xe){k.side===hn?ee(r.CULL_FACE):pe(r.CULL_FACE);let Q=k.side===Yt;xe&&(Q=!Q),re(Q),k.blending===sr&&k.transparent===!1?I(ii):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ue=k.stencilWrite;o.setTest(ue),ue&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Se(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(k){v!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),v=k)}function me(k){k!==Qf?(pe(r.CULL_FACE),k!==E&&(k===ru?r.cullFace(r.BACK):k===ep?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),E=k}function ae(k){k!==P&&(B&&r.lineWidth(k),P=k)}function Se(k,xe,Q){k?(pe(r.POLYGON_OFFSET_FILL),(O!==xe||F!==Q)&&(r.polygonOffset(xe,Q),O=xe,F=Q)):ee(r.POLYGON_OFFSET_FILL)}function ge(k){k?pe(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function D(k){k===void 0&&(k=r.TEXTURE0+H-1),le!==k&&(r.activeTexture(k),le=k)}function C(k,xe,Q){Q===void 0&&(le===null?Q=r.TEXTURE0+H-1:Q=le);let ue=ce[Q];ue===void 0&&(ue={type:void 0,texture:void 0},ce[Q]=ue),(ue.type!==k||ue.texture!==xe)&&(le!==Q&&(r.activeTexture(Q),le=Q),r.bindTexture(k,xe||Me[k]),ue.type=k,ue.texture=xe)}function j(){const k=ce[le];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(k){Fe.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Fe.copy(k))}function Pe(k){J.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function W(k,xe){let Q=c.get(xe);Q===void 0&&(Q=new WeakMap,c.set(xe,Q));let ue=Q.get(k);ue===void 0&&(ue=r.getUniformBlockIndex(xe,k.name),Q.set(k,ue))}function se(k,xe){const ue=c.get(xe).get(k);l.get(xe)!==ue&&(r.uniformBlockBinding(xe,ue,k.__bindingPointIndex),l.set(xe,ue))}function Ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},le=null,ce={},d={},h=new WeakMap,f=[],m=null,_=!1,p=null,g=null,S=null,y=null,M=null,A=null,b=null,T=new ye(0,0,0),w=0,x=!1,v=null,E=null,P=null,O=null,F=null,Fe.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:ee,bindFramebuffer:R,drawBuffers:N,useProgram:z,setBlending:I,setMaterial:he,setFlipSided:re,setCullFace:me,setLineWidth:ae,setPolygonOffset:Se,setScissorTest:ge,activeTexture:D,bindTexture:C,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:fe,texImage2D:Le,texImage3D:Ve,updateUBOMapping:W,uniformBlockBinding:se,texStorage2D:Ze,texStorage3D:ve,texSubImage2D:oe,texSubImage3D:Ue,compressedTexSubImage2D:we,compressedTexSubImage3D:Ee,scissor:We,viewport:Pe,reset:Ce}}function GS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,C){return f?new OffscreenCanvas(D,C):Zs("canvas")}function _(D,C,j){let te=1;const fe=ge(D);if((fe.width>j||fe.height>j)&&(te=j/Math.max(fe.width,fe.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(te*fe.width),Ue=Math.floor(te*fe.height);d===void 0&&(d=m(oe,Ue));const we=C?m(oe,Ue):d;return we.width=oe,we.height=Ue,we.getContext("2d").drawImage(D,0,0,oe,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+oe+"x"+Ue+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function p(D){return D.generateMipmaps}function g(D){r.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(D,C,j,te,fe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=C;if(C===r.RED&&(j===r.FLOAT&&(oe=r.R32F),j===r.HALF_FLOAT&&(oe=r.R16F),j===r.UNSIGNED_BYTE&&(oe=r.R8)),C===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.R8UI),j===r.UNSIGNED_SHORT&&(oe=r.R16UI),j===r.UNSIGNED_INT&&(oe=r.R32UI),j===r.BYTE&&(oe=r.R8I),j===r.SHORT&&(oe=r.R16I),j===r.INT&&(oe=r.R32I)),C===r.RG&&(j===r.FLOAT&&(oe=r.RG32F),j===r.HALF_FLOAT&&(oe=r.RG16F),j===r.UNSIGNED_BYTE&&(oe=r.RG8)),C===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.RG8UI),j===r.UNSIGNED_SHORT&&(oe=r.RG16UI),j===r.UNSIGNED_INT&&(oe=r.RG32UI),j===r.BYTE&&(oe=r.RG8I),j===r.SHORT&&(oe=r.RG16I),j===r.INT&&(oe=r.RG32I)),C===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),j===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),j===r.UNSIGNED_INT&&(oe=r.RGB32UI),j===r.BYTE&&(oe=r.RGB8I),j===r.SHORT&&(oe=r.RGB16I),j===r.INT&&(oe=r.RGB32I)),C===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),j===r.UNSIGNED_INT&&(oe=r.RGBA32UI),j===r.BYTE&&(oe=r.RGBA8I),j===r.SHORT&&(oe=r.RGBA16I),j===r.INT&&(oe=r.RGBA32I)),C===r.RGB&&j===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),C===r.RGBA){const Ue=fe?Ys:at.getTransfer(te);j===r.FLOAT&&(oe=r.RGBA32F),j===r.HALF_FLOAT&&(oe=r.RGBA16F),j===r.UNSIGNED_BYTE&&(oe=Ue===ft?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(D,C){let j;return D?C===null||C===li||C===dr?j=r.DEPTH24_STENCIL8:C===dn?j=r.DEPTH32F_STENCIL8:C===Kr&&(j=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===li||C===dr?j=r.DEPTH_COMPONENT24:C===dn?j=r.DEPTH_COMPONENT32F:C===Kr&&(j=r.DEPTH_COMPONENT16),j}function A(D,C){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==At&&D.minFilter!==Pt?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function b(D){const C=D.target;C.removeEventListener("dispose",b),w(C),C.isVideoTexture&&u.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),v(C)}function w(D){const C=n.get(D);if(C.__webglInit===void 0)return;const j=D.source,te=h.get(j);if(te){const fe=te[C.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&x(D),Object.keys(te).length===0&&h.delete(j)}n.remove(D)}function x(D){const C=n.get(D);r.deleteTexture(C.__webglTexture);const j=D.source,te=h.get(j);delete te[C.__cacheKey],a.memory.textures--}function v(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(C.__webglFramebuffer[te]))for(let fe=0;fe<C.__webglFramebuffer[te].length;fe++)r.deleteFramebuffer(C.__webglFramebuffer[te][fe]);else r.deleteFramebuffer(C.__webglFramebuffer[te]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[te])}else{if(Array.isArray(C.__webglFramebuffer))for(let te=0;te<C.__webglFramebuffer.length;te++)r.deleteFramebuffer(C.__webglFramebuffer[te]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let te=0;te<C.__webglColorRenderbuffer.length;te++)C.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[te]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const j=D.textures;for(let te=0,fe=j.length;te<fe;te++){const oe=n.get(j[te]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(j[te])}n.remove(D)}let E=0;function P(){E=0}function O(){const D=E;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),E+=1,D}function F(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function H(D,C){const j=n.get(D);if(D.isVideoTexture&&ae(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const te=D.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,D,C);return}}t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+C)}function B(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+C)}function ie(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,C);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+C)}function Y(D,C){const j=n.get(D);if(D.version>0&&j.__version!==D.version){de(j,D,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+C)}const le={[$r]:r.REPEAT,[Bt]:r.CLAMP_TO_EDGE,[Jr]:r.MIRRORED_REPEAT},ce={[At]:r.NEAREST,[_l]:r.NEAREST_MIPMAP_NEAREST,[er]:r.NEAREST_MIPMAP_LINEAR,[Pt]:r.LINEAR,[jr]:r.LINEAR_MIPMAP_NEAREST,[Ln]:r.LINEAR_MIPMAP_LINEAR},Z={[Up]:r.NEVER,[kp]:r.ALWAYS,[Np]:r.LESS,[Wu]:r.LEQUAL,[Op]:r.EQUAL,[zp]:r.GEQUAL,[Fp]:r.GREATER,[Bp]:r.NOTEQUAL};function Te(D,C){if(C.type===dn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Pt||C.magFilter===jr||C.magFilter===er||C.magFilter===Ln||C.minFilter===Pt||C.minFilter===jr||C.minFilter===er||C.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,le[C.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,le[C.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,le[C.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ce[C.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ce[C.minFilter]),C.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Z[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===At||C.minFilter!==er&&C.minFilter!==Ln||C.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Fe(D,C){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",b));const te=C.source;let fe=h.get(te);fe===void 0&&(fe={},h.set(te,fe));const oe=F(C);if(oe!==D.__cacheKey){fe[oe]===void 0&&(fe[oe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,j=!0),fe[oe].usedTimes++;const Ue=fe[D.__cacheKey];Ue!==void 0&&(fe[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&x(C)),D.__cacheKey=oe,D.__webglTexture=fe[oe].texture}return j}function J(D,C,j){let te=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(te=r.TEXTURE_3D);const fe=Fe(D,C),oe=C.source;t.bindTexture(te,D.__webglTexture,r.TEXTURE0+j);const Ue=n.get(oe);if(oe.version!==Ue.__version||fe===!0){t.activeTexture(r.TEXTURE0+j);const we=at.getPrimaries(at.workingColorSpace),Ee=C.colorSpace===ei?null:at.getPrimaries(C.colorSpace),Ze=C.colorSpace===ei||we===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ve=_(C.image,!1,i.maxTextureSize);ve=Se(C,ve);const Le=s.convert(C.format,C.colorSpace),Ve=s.convert(C.type);let We=y(C.internalFormat,Le,Ve,C.colorSpace,C.isVideoTexture);Te(te,C);let Pe;const W=C.mipmaps,se=C.isVideoTexture!==!0,Ce=Ue.__version===void 0||fe===!0,k=oe.dataReady,xe=A(C,ve);if(C.isDepthTexture)We=M(C.format===fr,C.type),Ce&&(se?t.texStorage2D(r.TEXTURE_2D,1,We,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,We,ve.width,ve.height,0,Le,Ve,null));else if(C.isDataTexture)if(W.length>0){se&&Ce&&t.texStorage2D(r.TEXTURE_2D,xe,We,W[0].width,W[0].height);for(let Q=0,ue=W.length;Q<ue;Q++)Pe=W[Q],se?k&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Le,Ve,Pe.data):t.texImage2D(r.TEXTURE_2D,Q,We,Pe.width,Pe.height,0,Le,Ve,Pe.data);C.generateMipmaps=!1}else se?(Ce&&t.texStorage2D(r.TEXTURE_2D,xe,We,ve.width,ve.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,Le,Ve,ve.data)):t.texImage2D(r.TEXTURE_2D,0,We,ve.width,ve.height,0,Le,Ve,ve.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){se&&Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,We,W[0].width,W[0].height,ve.depth);for(let Q=0,ue=W.length;Q<ue;Q++)if(Pe=W[Q],C.format!==Nt)if(Le!==null)if(se){if(k)if(C.layerUpdates.size>0){const Re=vu(Pe.width,Pe.height,C.format,C.type);for(const be of C.layerUpdates){const He=Pe.data.subarray(be*Re/Pe.data.BYTES_PER_ELEMENT,(be+1)*Re/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,be,Pe.width,Pe.height,1,Le,He)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,Pe.width,Pe.height,ve.depth,Le,Pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,We,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,Pe.width,Pe.height,ve.depth,Le,Ve,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,We,Pe.width,Pe.height,ve.depth,0,Le,Ve,Pe.data)}else{se&&Ce&&t.texStorage2D(r.TEXTURE_2D,xe,We,W[0].width,W[0].height);for(let Q=0,ue=W.length;Q<ue;Q++)Pe=W[Q],C.format!==Nt?Le!==null?se?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?k&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Le,Ve,Pe.data):t.texImage2D(r.TEXTURE_2D,Q,We,Pe.width,Pe.height,0,Le,Ve,Pe.data)}else if(C.isDataArrayTexture)if(se){if(Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,We,ve.width,ve.height,ve.depth),k)if(C.layerUpdates.size>0){const Q=vu(ve.width,ve.height,C.format,C.type);for(const ue of C.layerUpdates){const Re=ve.data.subarray(ue*Q/ve.data.BYTES_PER_ELEMENT,(ue+1)*Q/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ue,ve.width,ve.height,1,Le,Ve,Re)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ve,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,ve.width,ve.height,ve.depth,0,Le,Ve,ve.data);else if(C.isData3DTexture)se?(Ce&&t.texStorage3D(r.TEXTURE_3D,xe,We,ve.width,ve.height,ve.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ve,ve.data)):t.texImage3D(r.TEXTURE_3D,0,We,ve.width,ve.height,ve.depth,0,Le,Ve,ve.data);else if(C.isFramebufferTexture){if(Ce)if(se)t.texStorage2D(r.TEXTURE_2D,xe,We,ve.width,ve.height);else{let Q=ve.width,ue=ve.height;for(let Re=0;Re<xe;Re++)t.texImage2D(r.TEXTURE_2D,Re,We,Q,ue,0,Le,Ve,null),Q>>=1,ue>>=1}}else if(W.length>0){if(se&&Ce){const Q=ge(W[0]);t.texStorage2D(r.TEXTURE_2D,xe,We,Q.width,Q.height)}for(let Q=0,ue=W.length;Q<ue;Q++)Pe=W[Q],se?k&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,Le,Ve,Pe):t.texImage2D(r.TEXTURE_2D,Q,We,Le,Ve,Pe);C.generateMipmaps=!1}else if(se){if(Ce){const Q=ge(ve);t.texStorage2D(r.TEXTURE_2D,xe,We,Q.width,Q.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,Ve,ve)}else t.texImage2D(r.TEXTURE_2D,0,We,Le,Ve,ve);p(C)&&g(te),Ue.__version=oe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function de(D,C,j){if(C.image.length!==6)return;const te=Fe(D,C),fe=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+j);const oe=n.get(fe);if(fe.version!==oe.__version||te===!0){t.activeTexture(r.TEXTURE0+j);const Ue=at.getPrimaries(at.workingColorSpace),we=C.colorSpace===ei?null:at.getPrimaries(C.colorSpace),Ee=C.colorSpace===ei||Ue===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ze=C.isCompressedTexture||C.image[0].isCompressedTexture,ve=C.image[0]&&C.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!Ze&&!ve?Le[ue]=_(C.image[ue],!0,i.maxCubemapSize):Le[ue]=ve?C.image[ue].image:C.image[ue],Le[ue]=Se(C,Le[ue]);const Ve=Le[0],We=s.convert(C.format,C.colorSpace),Pe=s.convert(C.type),W=y(C.internalFormat,We,Pe,C.colorSpace),se=C.isVideoTexture!==!0,Ce=oe.__version===void 0||te===!0,k=fe.dataReady;let xe=A(C,Ve);Te(r.TEXTURE_CUBE_MAP,C);let Q;if(Ze){se&&Ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,W,Ve.width,Ve.height);for(let ue=0;ue<6;ue++){Q=Le[ue].mipmaps;for(let Re=0;Re<Q.length;Re++){const be=Q[Re];C.format!==Nt?We!==null?se?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,be.width,be.height,We,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,W,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,be.width,be.height,We,Pe,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,W,be.width,be.height,0,We,Pe,be.data)}}}else{if(Q=C.mipmaps,se&&Ce){Q.length>0&&xe++;const ue=ge(Le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,W,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ve){se?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le[ue].width,Le[ue].height,We,Pe,Le[ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,W,Le[ue].width,Le[ue].height,0,We,Pe,Le[ue].data);for(let Re=0;Re<Q.length;Re++){const He=Q[Re].image[ue].image;se?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,He.width,He.height,We,Pe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,W,He.width,He.height,0,We,Pe,He.data)}}else{se?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,We,Pe,Le[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,W,We,Pe,Le[ue]);for(let Re=0;Re<Q.length;Re++){const be=Q[Re];se?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,We,Pe,be.image[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,W,We,Pe,be.image[ue])}}}p(C)&&g(r.TEXTURE_CUBE_MAP),oe.__version=fe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Me(D,C,j,te,fe,oe){const Ue=s.convert(j.format,j.colorSpace),we=s.convert(j.type),Ee=y(j.internalFormat,Ue,we,j.colorSpace),Ze=n.get(C),ve=n.get(j);if(ve.__renderTarget=C,!Ze.__hasExternalTextures){const Le=Math.max(1,C.width>>oe),Ve=Math.max(1,C.height>>oe);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,oe,Ee,Le,Ve,C.depth,0,Ue,we,null):t.texImage2D(fe,oe,Ee,Le,Ve,0,Ue,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),me(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,fe,ve.__webglTexture,0,re(C)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,fe,ve.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(D,C,j){if(r.bindRenderbuffer(r.RENDERBUFFER,D),C.depthBuffer){const te=C.depthTexture,fe=te&&te.isDepthTexture?te.type:null,oe=M(C.stencilBuffer,fe),Ue=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=re(C);me(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,oe,C.width,C.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,oe,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,oe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,D)}else{const te=C.textures;for(let fe=0;fe<te.length;fe++){const oe=te[fe],Ue=s.convert(oe.format,oe.colorSpace),we=s.convert(oe.type),Ee=y(oe.internalFormat,Ue,we,oe.colorSpace),Ze=re(C);j&&me(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ee,C.width,C.height):me(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,Ee,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(C.depthTexture);te.__renderTarget=C,(!te.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const fe=te.__webglTexture,oe=re(C);if(C.depthTexture.format===ar)me(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(C.depthTexture.format===fr)me(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function R(D){const C=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const te=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),te){const fe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,te.removeEventListener("dispose",fe)};te.addEventListener("dispose",fe),C.__depthDisposeCallback=fe}C.__boundDepthTexture=te}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ee(C.__webglFramebuffer,D)}else if(j){C.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[te]),C.__webglDepthbuffer[te]===void 0)C.__webglDepthbuffer[te]=r.createRenderbuffer(),pe(C.__webglDepthbuffer[te],D,!1);else{const fe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=C.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),pe(C.__webglDepthbuffer,D,!1);else{const te=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function N(D,C,j){const te=n.get(D);C!==void 0&&Me(te.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&R(D)}function z(D){const C=D.texture,j=n.get(D),te=n.get(C);D.addEventListener("dispose",T);const fe=D.textures,oe=D.isWebGLCubeRenderTarget===!0,Ue=fe.length>1;if(Ue||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=C.version,a.memory.textures++),oe){j.__webglFramebuffer=[];for(let we=0;we<6;we++)if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer[we]=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)j.__webglFramebuffer[we][Ee]=r.createFramebuffer()}else j.__webglFramebuffer[we]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer=[];for(let we=0;we<C.mipmaps.length;we++)j.__webglFramebuffer[we]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let we=0,Ee=fe.length;we<Ee;we++){const Ze=n.get(fe[we]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&me(D)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let we=0;we<fe.length;we++){const Ee=fe[we];j.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[we]);const Ze=s.convert(Ee.format,Ee.colorSpace),ve=s.convert(Ee.type),Le=y(Ee.internalFormat,Ze,ve,Ee.colorSpace,D.isXRRenderTarget===!0),Ve=re(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,Le,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,j.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Te(r.TEXTURE_CUBE_MAP,C);for(let we=0;we<6;we++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ee=0;Ee<C.mipmaps.length;Ee++)Me(j.__webglFramebuffer[we][Ee],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ee);else Me(j.__webglFramebuffer[we],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);p(C)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let we=0,Ee=fe.length;we<Ee;we++){const Ze=fe[we],ve=n.get(Ze);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),Te(r.TEXTURE_2D,Ze),Me(j.__webglFramebuffer,D,Ze,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),p(Ze)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,te.__webglTexture),Te(we,C),C.mipmaps&&C.mipmaps.length>0)for(let Ee=0;Ee<C.mipmaps.length;Ee++)Me(j.__webglFramebuffer[Ee],D,C,r.COLOR_ATTACHMENT0,we,Ee);else Me(j.__webglFramebuffer,D,C,r.COLOR_ATTACHMENT0,we,0);p(C)&&g(we),t.unbindTexture()}D.depthBuffer&&R(D)}function G(D){const C=D.textures;for(let j=0,te=C.length;j<te;j++){const fe=C[j];if(p(fe)){const oe=S(D),Ue=n.get(fe).__webglTexture;t.bindTexture(oe,Ue),g(oe),t.unbindTexture()}}}const V=[],I=[];function he(D){if(D.samples>0){if(me(D)===!1){const C=D.textures,j=D.width,te=D.height;let fe=r.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=n.get(D),we=C.length>1;if(we)for(let Ee=0;Ee<C.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ee=0;Ee<C.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ee]);const Ze=n.get(C[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ze,0)}r.blitFramebuffer(0,0,j,te,0,0,j,te,fe,r.NEAREST),l===!0&&(V.length=0,I.length=0,V.push(r.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(V.push(oe),I.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let Ee=0;Ee<C.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ee]);const Ze=n.get(C[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function re(D){return Math.min(i.maxSamples,D.samples)}function me(D){const C=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ae(D){const C=a.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function Se(D,C){const j=D.colorSpace,te=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==pr&&j!==ei&&(at.getTransfer(j)===ft?(te!==Nt||fe!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),C}function ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=ie,this.setTextureCube=Y,this.rebindTextures=N,this.setupRenderTarget=z,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=me}function $m(r,e){function t(n,i=ei){let s;const a=at.getTransfer(i);if(n===Gn)return r.UNSIGNED_BYTE;if(n===yl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return r.BYTE;if(n===Nu)return r.SHORT;if(n===Kr)return r.UNSIGNED_SHORT;if(n===xl)return r.INT;if(n===li)return r.UNSIGNED_INT;if(n===dn)return r.FLOAT;if(n===_r)return r.HALF_FLOAT;if(n===Fu)return r.ALPHA;if(n===Bu)return r.RGB;if(n===Nt)return r.RGBA;if(n===zu)return r.LUMINANCE;if(n===ku)return r.LUMINANCE_ALPHA;if(n===ar)return r.DEPTH_COMPONENT;if(n===fr)return r.DEPTH_STENCIL;if(n===bl)return r.RED;if(n===sa)return r.RED_INTEGER;if(n===Vu)return r.RG;if(n===Sl)return r.RG_INTEGER;if(n===wl)return r.RGBA_INTEGER;if(n===Cs||n===Rs||n===Is||n===Ps)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Bo||n===zo||n===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vo||n===Ho)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Go)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===Yo||n===qo||n===jo||n===Zo||n===$o||n===Jo||n===Ko||n===Qo||n===el||n===tl||n===nl||n===il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===rl||n===sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ls)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hu||n===al||n===ol||n===ll)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ls)return s.COMPRESSED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const WS={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const XS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jt({vertexShader:XS,fragmentShader:YS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jS extends Fn{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const _=new qS,p=t.getContextAttributes();let g=null,S=null;const y=[],M=[],A=new ne;let b=null;const T=new gt;T.viewport=new nt;const w=new gt;w.viewport=new nt;const x=[T,w],v=new Om;let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=y[J];return de===void 0&&(de=new Hc,y[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=y[J];return de===void 0&&(de=new Hc,y[J]=de),de.getGripSpace()},this.getHand=function(J){let de=y[J];return de===void 0&&(de=new Hc,y[J]=de),de.getHandSpace()};function O(J){const de=M.indexOf(J.inputSource);if(de===-1)return;const Me=y[de];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",H);for(let J=0;J<y.length;J++){const de=M[J];de!==null&&(M[J]=null,y[J].disconnect(de))}E=null,P=null,_.reset(),e.setRenderTarget(g),f=null,h=null,d=null,i=null,S=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",F),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Me=null,pe=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=p.stencil?fr:ar,pe=p.stencil?dr:li);const R={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(R),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new On(h.textureWidth,h.textureHeight,{format:Nt,type:Gn,depthTexture:new Ju(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new On(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(J){for(let de=0;de<J.removed.length;de++){const Me=J.removed[de],pe=M.indexOf(Me);pe>=0&&(M[pe]=null,y[pe].disconnect(Me))}for(let de=0;de<J.added.length;de++){const Me=J.added[de];let pe=M.indexOf(Me);if(pe===-1){for(let R=0;R<y.length;R++)if(R>=M.length){M.push(Me),pe=R;break}else if(M[R]===null){M[R]=Me,pe=R;break}if(pe===-1)break}const ee=y[pe];ee&&ee.connect(Me)}}const B=new U,ie=new U;function Y(J,de,Me){B.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(Me.matrixWorld);const pe=B.distanceTo(ie),ee=de.projectionMatrix.elements,R=Me.projectionMatrix.elements,N=ee[14]/(ee[10]-1),z=ee[14]/(ee[10]+1),G=(ee[9]+1)/ee[5],V=(ee[9]-1)/ee[5],I=(ee[8]-1)/ee[0],he=(R[8]+1)/R[0],re=N*I,me=N*he,ae=pe/(-I+he),Se=ae*-I;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Se),J.translateZ(ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ee[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ge=N+ae,D=z+ae,C=re-Se,j=me+(pe-Se),te=G*z/D*ge,fe=V*z/D*ge;J.projectionMatrix.makePerspective(C,j,te,fe,ge,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let de=J.near,Me=J.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),v.near=w.near=T.near=de,v.far=w.far=T.far=Me,(E!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,P=v.far),T.layers.mask=J.layers.mask|2,w.layers.mask=J.layers.mask|4,v.layers.mask=T.layers.mask|w.layers.mask;const pe=J.parent,ee=v.cameras;le(v,pe);for(let R=0;R<ee.length;R++)le(ee[R],pe);ee.length===2?Y(v,T,w):v.projectionMatrix.copy(T.projectionMatrix),ce(J,v,pe)};function ce(J,de,Me){Me===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=es*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Z=null;function Te(J,de){if(u=de.getViewerPose(c||a),m=de,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let pe=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let R=0;R<Me.length;R++){const N=Me[R];let z=null;if(f!==null)z=f.getViewport(N);else{const V=d.getViewSubImage(h,N);z=V.viewport,R===0&&(e.setRenderTargetTextures(S,V.colorTexture,h.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(S))}let G=x[R];G===void 0&&(G=new gt,G.layers.enable(R),G.viewport=new nt,x[R]=G),G.matrix.fromArray(N.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(N.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(z.x,z.y,z.width,z.height),R===0&&(v.matrix.copy(G.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(G)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const R=d.getDepthInformation(Me[0]);R&&R.isValid&&R.texture&&_.init(e,R,i.renderState)}}for(let Me=0;Me<y.length;Me++){const pe=M[Me],ee=y[Me];pe!==null&&ee!==void 0&&ee.update(pe,de,c||a)}Z&&Z(J,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),m=null}const Fe=new Xm;Fe.setAnimationLoop(Te),this.setAnimationLoop=function(J){Z=J},this.dispose=function(){}}}const qi=new rn,ZS=new Be;function $S(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Xp(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,S,y,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,S,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Yt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Yt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const S=e.get(g),y=S.envMap,M=S.envMapRotation;y&&(p.envMap.value=y,qi.copy(M),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),p.envMapRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(qi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,S,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const S=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=i[S.id];M===void 0&&(m(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",p));const A=y.program;n.updateUBOMapping(S,A);const b=e.render.frame;s[S.id]!==b&&(h(S),s[S.id]=b)}function u(S){const y=d();S.__bindingPointIndex=y;const M=r.createBuffer(),A=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=i[S.id],M=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,T=M.length;b<T;b++){const w=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,v=w.length;x<v;x++){const E=w[x];if(f(E,b,x,A)===!0){const P=E.__offset,O=Array.isArray(E.value)?E.value:[E.value];let F=0;for(let H=0;H<O.length;H++){const B=O[H],ie=_(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,P+F,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,F),F+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,y,M,A){const b=S.value,T=y+"_"+M;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{const w=A[T];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return A[T]=b,!0}else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function m(S){const y=S.uniforms;let M=0;const A=16;for(let T=0,w=y.length;T<w;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,E=x.length;v<E;v++){const P=x[v],O=Array.isArray(P.value)?P.value:[P.value];for(let F=0,H=O.length;F<H;F++){const B=O[F],ie=_(B),Y=M%A,le=Y%ie.boundary,ce=Y+le;M+=le,ce!==0&&A-ce<ie.storage&&(M+=A-ce),P.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=ie.storage}}}const b=M%A;return b>0&&(M+=A-b),S.__size=M,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}class Fs{constructor(e={}){const{canvas:t=Hp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let p=null,g=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Nn,this.toneMappingExposure=1;const M=this;let A=!1,b=0,T=0,w=null,x=-1,v=null;const E=new nt,P=new nt;let O=null;const F=new ye(0);let H=0,B=t.width,ie=t.height,Y=1,le=null,ce=null;const Z=new nt(0,0,B,ie),Te=new nt(0,0,B,ie);let Fe=!1;const J=new ha;let de=!1,Me=!1;this.transmissionResolutionScale=1;const pe=new Be,ee=new Be,R=new U,N=new nt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function V(){return w===null?Y:1}let I=n;function he(L,X){return t.getContext(L,X)}try{const L={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ss}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",be,!1),I===null){const X="webgl2";if(I=he(X,L),I===null)throw he(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let re,me,ae,Se,ge,D,C,j,te,fe,oe,Ue,we,Ee,Ze,ve,Le,Ve,We,Pe,W,se,Ce,k;function xe(){re=new lb(I),re.init(),se=new $m(I,re),me=new nb(I,re,e,se),ae=new HS(I,re),me.reverseDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),Se=new hb(I),ge=new RS,D=new GS(I,re,ae,ge,me,se,Se),C=new rb(M),j=new ob(M),te=new _x(I),Ce=new eb(I,te),fe=new cb(I,te,Se,Ce),oe=new fb(I,fe,te,Se),We=new db(I,me,D),ve=new ib(ge),Ue=new CS(M,C,j,re,me,Ce,ve),we=new $S(M,ge),Ee=new PS,Ze=new FS(re),Ve=new QM(M,C,j,ae,oe,f,l),Le=new kS(M,oe,me),k=new JS(I,Se,me,ae),Pe=new tb(I,re,Se),W=new ub(I,re,Se),Se.programs=Ue.programs,M.capabilities=me,M.extensions=re,M.properties=ge,M.renderLists=Ee,M.shadowMap=Le,M.state=ae,M.info=Se}xe();const Q=new jS(M,I);this.xr=Q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const L=re.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=re.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(B,ie,!1))},this.getSize=function(L){return L.set(B,ie)},this.setSize=function(L,X,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,ie=X,t.width=Math.floor(L*Y),t.height=Math.floor(X*Y),$===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(B*Y,ie*Y).floor()},this.setDrawingBufferSize=function(L,X,$){B=L,ie=X,Y=$,t.width=Math.floor(L*$),t.height=Math.floor(X*$),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(Z)},this.setViewport=function(L,X,$,K){L.isVector4?Z.set(L.x,L.y,L.z,L.w):Z.set(L,X,$,K),ae.viewport(E.copy(Z).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(Te)},this.setScissor=function(L,X,$,K){L.isVector4?Te.set(L.x,L.y,L.z,L.w):Te.set(L,X,$,K),ae.scissor(P.copy(Te).multiplyScalar(Y).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(L){ae.setScissorTest(Fe=L)},this.setOpaqueSort=function(L){le=L},this.setTransparentSort=function(L){ce=L},this.getClearColor=function(L){return L.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(L=!0,X=!0,$=!0){let K=0;if(L){let q=!1;if(w!==null){const _e=w.texture.format;q=_e===wl||_e===Sl||_e===sa}if(q){const _e=w.texture.type,Ie=_e===Gn||_e===li||_e===Kr||_e===dr||_e===yl||_e===Ml,De=Ve.getClearColor(),Ne=Ve.getClearAlpha(),Ye=De.r,qe=De.g,ze=De.b;Ie?(m[0]=Ye,m[1]=qe,m[2]=ze,m[3]=Ne,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ye,_[1]=qe,_[2]=ze,_[3]=Ne,I.clearBufferiv(I.COLOR,0,_))}else K|=I.COLOR_BUFFER_BIT}X&&(K|=I.DEPTH_BUFFER_BIT),$&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ve.dispose(),Ee.dispose(),Ze.dispose(),ge.dispose(),C.dispose(),j.dispose(),oe.dispose(),Ce.dispose(),k.dispose(),Ue.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",wh),Q.removeEventListener("sessionend",Th),Di.stop()};function ue(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const L=Se.autoReset,X=Le.enabled,$=Le.autoUpdate,K=Le.needsUpdate,q=Le.type;xe(),Se.autoReset=L,Le.enabled=X,Le.autoUpdate=$,Le.needsUpdate=K,Le.type=q}function be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function He(L){const X=L.target;X.removeEventListener("dispose",He),pt(X)}function pt(L){bt(L),ge.remove(L)}function bt(L){const X=ge.get(L).programs;X!==void 0&&(X.forEach(function($){Ue.releaseProgram($)}),L.isShaderMaterial&&Ue.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,$,K,q,_e){X===null&&(X=z);const Ie=q.isMesh&&q.matrixWorld.determinant()<0,De=Pg(L,X,$,K,q);ae.setMaterial(K,Ie);let Ne=$.index,Ye=1;if(K.wireframe===!0){if(Ne=fe.getWireframeAttribute($),Ne===void 0)return;Ye=2}const qe=$.drawRange,ze=$.attributes.position;let lt=qe.start*Ye,ht=(qe.start+qe.count)*Ye;_e!==null&&(lt=Math.max(lt,_e.start*Ye),ht=Math.min(ht,(_e.start+_e.count)*Ye)),Ne!==null?(lt=Math.max(lt,0),ht=Math.min(ht,Ne.count)):ze!=null&&(lt=Math.max(lt,0),ht=Math.min(ht,ze.count));const Rt=ht-lt;if(Rt<0||Rt===1/0)return;Ce.setup(q,K,De,$,Ne);let St,ut=Pe;if(Ne!==null&&(St=te.get(Ne),ut=W,ut.setIndex(St)),q.isMesh)K.wireframe===!0?(ae.setLineWidth(K.wireframeLinewidth*V()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(q.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),ae.setLineWidth(Ge*V()),q.isLineSegments?ut.setMode(I.LINES):q.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else q.isPoints?ut.setMode(I.POINTS):q.isSprite&&ut.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ut.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ge=q._multiDrawStarts,Ot=q._multiDrawCounts,dt=q._multiDrawCount,An=Ne?te.get(Ne).bytesPerElement:1,br=ge.get(K).currentProgram.getUniforms();for(let mn=0;mn<dt;mn++)br.setValue(I,"_gl_DrawID",mn),ut.render(Ge[mn]/An,Ot[mn])}else if(q.isInstancedMesh)ut.renderInstances(lt,Rt,q.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ot=Math.min($.instanceCount,Ge);ut.renderInstances(lt,Rt,Ot)}else ut.render(lt,Rt)};function st(L,X,$){L.transparent===!0&&L.side===hn&&L.forceSinglePass===!1?(L.side=Yt,L.needsUpdate=!0,Ma(L,X,$),L.side=ai,L.needsUpdate=!0,Ma(L,X,$),L.side=hn):Ma(L,X,$)}this.compile=function(L,X,$=null){$===null&&($=L),g=Ze.get($),g.init(X),y.push(g),$.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),L!==$&&L.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const K=new Set;return L.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const _e=q.material;if(_e)if(Array.isArray(_e))for(let Ie=0;Ie<_e.length;Ie++){const De=_e[Ie];st(De,$,q),K.add(De)}else st(_e,$,q),K.add(_e)}),y.pop(),g=null,K},this.compileAsync=function(L,X,$=null){const K=this.compile(L,X,$);return new Promise(q=>{function _e(){if(K.forEach(function(Ie){ge.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){q(L);return}setTimeout(_e,10)}re.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ht=null;function Yn(L){Ht&&Ht(L)}function wh(){Di.stop()}function Th(){Di.start()}const Di=new Xm;Di.setAnimationLoop(Yn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(L){Ht=L,Q.setAnimationLoop(L),L===null?Di.stop():Di.start()},Q.addEventListener("sessionstart",wh),Q.addEventListener("sessionend",Th),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(X),X=Q.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,X,w),g=Ze.get(L,y.length),g.init(X),y.push(g),ee.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(ee),Me=this.localClippingEnabled,de=ve.init(this.clippingPlanes,Me),p=Ee.get(L,S.length),p.init(),S.push(p),Q.enabled===!0&&Q.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Ql(_e,X,-1/0,M.sortObjects)}Ql(L,X,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(le,ce),G=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,G&&Ve.addToRenderList(p,L),this.info.render.frame++,de===!0&&ve.beginShadows();const $=g.state.shadowsArray;Le.render($,L,X),de===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,q=p.transmissive;if(g.setupLights(),X.isArrayCamera){const _e=X.cameras;if(q.length>0)for(let Ie=0,De=_e.length;Ie<De;Ie++){const Ne=_e[Ie];Ah(K,q,L,Ne)}G&&Ve.render(L);for(let Ie=0,De=_e.length;Ie<De;Ie++){const Ne=_e[Ie];Eh(p,L,Ne,Ne.viewport)}}else q.length>0&&Ah(K,q,L,X),G&&Ve.render(L),Eh(p,L,X);w!==null&&T===0&&(D.updateMultisampleRenderTarget(w),D.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(M,L,X),Ce.resetDefaultState(),x=-1,v=null,y.pop(),y.length>0?(g=y[y.length-1],de===!0&&ve.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ql(L,X,$,K){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)$=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){K&&N.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ee);const Ie=oe.update(L),De=L.material;De.visible&&p.push(L,Ie,De,$,N.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||J.intersectsObject(L))){const Ie=oe.update(L),De=L.material;if(K&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),N.copy(L.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),N.copy(Ie.boundingSphere.center)),N.applyMatrix4(L.matrixWorld).applyMatrix4(ee)),Array.isArray(De)){const Ne=Ie.groups;for(let Ye=0,qe=Ne.length;Ye<qe;Ye++){const ze=Ne[Ye],lt=De[ze.materialIndex];lt&&lt.visible&&p.push(L,Ie,lt,$,N.z,ze)}}else De.visible&&p.push(L,Ie,De,$,N.z,null)}}const _e=L.children;for(let Ie=0,De=_e.length;Ie<De;Ie++)Ql(_e[Ie],X,$,K)}function Eh(L,X,$,K){const q=L.opaque,_e=L.transmissive,Ie=L.transparent;g.setupLightsView($),de===!0&&ve.setGlobalState(M.clippingPlanes,$),K&&ae.viewport(E.copy(K)),q.length>0&&ya(q,X,$),_e.length>0&&ya(_e,X,$),Ie.length>0&&ya(Ie,X,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ah(L,X,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new On(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?_r:Gn,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const _e=g.state.transmissionRenderTarget[K.id],Ie=K.viewport||E;_e.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);const De=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor(F),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),G&&Ve.render($);const Ne=M.toneMapping;M.toneMapping=Nn;const Ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),de===!0&&ve.setGlobalState(M.clippingPlanes,K),ya(L,$,K),D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e),re.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ze=0,lt=X.length;ze<lt;ze++){const ht=X[ze],Rt=ht.object,St=ht.geometry,ut=ht.material,Ge=ht.group;if(ut.side===hn&&Rt.layers.test(K.layers)){const Ot=ut.side;ut.side=Yt,ut.needsUpdate=!0,Ch(Rt,$,K,St,ut,Ge),ut.side=Ot,ut.needsUpdate=!0,qe=!0}}qe===!0&&(D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e))}M.setRenderTarget(De),M.setClearColor(F,H),Ye!==void 0&&(K.viewport=Ye),M.toneMapping=Ne}function ya(L,X,$){const K=X.isScene===!0?X.overrideMaterial:null;for(let q=0,_e=L.length;q<_e;q++){const Ie=L[q],De=Ie.object,Ne=Ie.geometry,Ye=K===null?Ie.material:K,qe=Ie.group;De.layers.test($.layers)&&Ch(De,X,$,Ne,Ye,qe)}}function Ch(L,X,$,K,q,_e){L.onBeforeRender(M,X,$,K,q,_e),L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),q.onBeforeRender(M,X,$,K,L,_e),q.transparent===!0&&q.side===hn&&q.forceSinglePass===!1?(q.side=Yt,q.needsUpdate=!0,M.renderBufferDirect($,X,K,q,L,_e),q.side=ai,q.needsUpdate=!0,M.renderBufferDirect($,X,K,q,L,_e),q.side=hn):M.renderBufferDirect($,X,K,q,L,_e),L.onAfterRender(M,X,$,K,q,_e)}function Ma(L,X,$){X.isScene!==!0&&(X=z);const K=ge.get(L),q=g.state.lights,_e=g.state.shadowsArray,Ie=q.state.version,De=Ue.getParameters(L,q.state,_e,X,$),Ne=Ue.getProgramCacheKey(De);let Ye=K.programs;K.environment=L.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(L.isMeshStandardMaterial?j:C).get(L.envMap||K.environment),K.envMapRotation=K.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,Ye===void 0&&(L.addEventListener("dispose",He),Ye=new Map,K.programs=Ye);let qe=Ye.get(Ne);if(qe!==void 0){if(K.currentProgram===qe&&K.lightsStateVersion===Ie)return Ih(L,De),qe}else De.uniforms=Ue.getUniforms(L),L.onBeforeCompile(De,M),qe=Ue.acquireProgram(De,Ne),Ye.set(Ne,qe),K.uniforms=De.uniforms;const ze=K.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ze.clippingPlanes=ve.uniform),Ih(L,De),K.needsLights=Dg(L),K.lightsStateVersion=Ie,K.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=qe,K.uniformsList=null,qe}function Rh(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=So.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Ih(L,X){const $=ge.get(L);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function Pg(L,X,$,K,q){X.isScene!==!0&&(X=z),D.resetTextureUnits();const _e=X.fog,Ie=K.isMeshStandardMaterial?X.environment:null,De=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:pr,Ne=(K.isMeshStandardMaterial?j:C).get(K.envMap||Ie),Ye=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,ht=!!$.morphAttributes.color;let Rt=Nn;K.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Rt=M.toneMapping);const St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=St!==void 0?St.length:0,Ge=ge.get(K),Ot=g.state.lights;if(de===!0&&(Me===!0||L!==v)){const $t=L===v&&K.id===x;ve.setState(K,L,$t)}let dt=!1;K.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ot.state.version||Ge.outputColorSpace!==De||q.isBatchedMesh&&Ge.batching===!1||!q.isBatchedMesh&&Ge.batching===!0||q.isBatchedMesh&&Ge.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ge.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ge.instancing===!1||!q.isInstancedMesh&&Ge.instancing===!0||q.isSkinnedMesh&&Ge.skinning===!1||!q.isSkinnedMesh&&Ge.skinning===!0||q.isInstancedMesh&&Ge.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ge.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ge.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ge.instancingMorph===!1&&q.morphTexture!==null||Ge.envMap!==Ne||K.fog===!0&&Ge.fog!==_e||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ve.numPlanes||Ge.numIntersection!==ve.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==qe||Ge.morphTargets!==ze||Ge.morphNormals!==lt||Ge.morphColors!==ht||Ge.toneMapping!==Rt||Ge.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Ge.__version=K.version);let An=Ge.currentProgram;dt===!0&&(An=Ma(K,X,q));let br=!1,mn=!1,cs=!1;const xt=An.getUniforms(),Mn=Ge.uniforms;if(ae.useProgram(An.program)&&(br=!0,mn=!0,cs=!0),K.id!==x&&(x=K.id,mn=!0),br||v!==L){ae.buffers.depth.getReversed()?(pe.copy(L.projectionMatrix),Y0(pe),q0(pe),xt.setValue(I,"projectionMatrix",pe)):xt.setValue(I,"projectionMatrix",L.projectionMatrix),xt.setValue(I,"viewMatrix",L.matrixWorldInverse);const an=xt.map.cameraPosition;an!==void 0&&an.setValue(I,R.setFromMatrixPosition(L.matrixWorld)),me.logarithmicDepthBuffer&&xt.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),v!==L&&(v=L,mn=!0,cs=!0)}if(q.isSkinnedMesh){xt.setOptional(I,q,"bindMatrix"),xt.setOptional(I,q,"bindMatrixInverse");const $t=q.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),xt.setValue(I,"boneTexture",$t.boneTexture,D))}q.isBatchedMesh&&(xt.setOptional(I,q,"batchingTexture"),xt.setValue(I,"batchingTexture",q._matricesTexture,D),xt.setOptional(I,q,"batchingIdTexture"),xt.setValue(I,"batchingIdTexture",q._indirectTexture,D),xt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&xt.setValue(I,"batchingColorTexture",q._colorsTexture,D));const bn=$.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&We.update(q,$,An),(mn||Ge.receiveShadow!==q.receiveShadow)&&(Ge.receiveShadow=q.receiveShadow,xt.setValue(I,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Mn.envMap.value=Ne,Mn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(Mn.envMapIntensity.value=X.environmentIntensity),mn&&(xt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&Lg(Mn,cs),_e&&K.fog===!0&&we.refreshFogUniforms(Mn,_e),we.refreshMaterialUniforms(Mn,K,Y,ie,g.state.transmissionRenderTarget[L.id]),So.upload(I,Rh(Ge),Mn,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(So.upload(I,Rh(Ge),Mn,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(I,"center",q.center),xt.setValue(I,"modelViewMatrix",q.modelViewMatrix),xt.setValue(I,"normalMatrix",q.normalMatrix),xt.setValue(I,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const $t=K.uniformsGroups;for(let an=0,ec=$t.length;an<ec;an++){const Ui=$t[an];k.update(Ui,An),k.bind(Ui,An)}}return An}function Lg(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Dg(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,X,$){ge.get(L.texture).__webglTexture=X,ge.get(L.depthTexture).__webglTexture=$;const K=ge.get(L);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,X){const $=ge.get(L);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};const Ug=I.createFramebuffer();this.setRenderTarget=function(L,X=0,$=0){w=L,b=X,T=$;let K=!0,q=null,_e=!1,Ie=!1;if(L){const Ne=ge.get(L);if(Ne.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Ne.__webglFramebuffer===void 0)D.setupRenderTarget(L);else if(Ne.__hasExternalTextures)D.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ze=L.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&ge.has(ze)&&(L.width!==ze.image.width||L.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(L)}}const Ye=L.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);const qe=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qe[X])?q=qe[X][$]:q=qe[X],_e=!0):L.samples>0&&D.useMultisampledRTT(L)===!1?q=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(qe)?q=qe[$]:q=qe,E.copy(L.viewport),P.copy(L.scissor),O=L.scissorTest}else E.copy(Z).multiplyScalar(Y).floor(),P.copy(Te).multiplyScalar(Y).floor(),O=Fe;if($!==0&&(q=Ug),ae.bindFramebuffer(I.FRAMEBUFFER,q)&&K&&ae.drawBuffers(L,q),ae.viewport(E),ae.scissor(P),ae.setScissorTest(O),_e){const Ne=ge.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,$)}else if(Ie){const Ne=ge.get(L.texture),Ye=X;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,$,Ye)}else if(L!==null&&$!==0){const Ne=ge.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ne.__webglTexture,$)}x=-1},this.readRenderTargetPixels=function(L,X,$,K,q,_e,Ie){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){ae.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ne=L.texture,Ye=Ne.format,qe=Ne.type;if(!me.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-K&&$>=0&&$<=L.height-q&&I.readPixels(X,$,K,q,se.convert(Ye),se.convert(qe),_e)}finally{const Ne=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(L,X,$,K,q,_e,Ie){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){const Ne=L.texture,Ye=Ne.format,qe=Ne.type;if(!me.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=L.width-K&&$>=0&&$<=L.height-q){ae.bindFramebuffer(I.FRAMEBUFFER,De);const ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(X,$,K,q,se.convert(Ye),se.convert(qe),0);const lt=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,lt);const ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await X0(I,ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(ze),I.deleteSync(ht),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,X=null,$=0){L.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,L=arguments[1]);const K=Math.pow(2,-$),q=Math.floor(L.image.width*K),_e=Math.floor(L.image.height*K),Ie=X!==null?X.x:0,De=X!==null?X.y:0;D.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Ie,De,q,_e),ae.unbindTexture()};const Ng=I.createFramebuffer(),Og=I.createFramebuffer();this.copyTextureToTexture=function(L,X,$=null,K=null,q=0,_e=null){L.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,L=arguments[1],X=arguments[2],_e=arguments[3]||0,$=null),_e===null&&(q!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=q,q=0):_e=0);let Ie,De,Ne,Ye,qe,ze,lt,ht,Rt;const St=L.isCompressedTexture?L.mipmaps[_e]:L.image;if($!==null)Ie=$.max.x-$.min.x,De=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Ye=$.min.x,qe=$.min.y,ze=$.isBox3?$.min.z:0;else{const bn=Math.pow(2,-q);Ie=Math.floor(St.width*bn),De=Math.floor(St.height*bn),L.isDataArrayTexture?Ne=St.depth:L.isData3DTexture?Ne=Math.floor(St.depth*bn):Ne=1,Ye=0,qe=0,ze=0}K!==null?(lt=K.x,ht=K.y,Rt=K.z):(lt=0,ht=0,Rt=0);const ut=se.convert(X.format),Ge=se.convert(X.type);let Ot;X.isData3DTexture?(D.setTexture3D(X,0),Ot=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Ot=I.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Ot=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const dt=I.getParameter(I.UNPACK_ROW_LENGTH),An=I.getParameter(I.UNPACK_IMAGE_HEIGHT),br=I.getParameter(I.UNPACK_SKIP_PIXELS),mn=I.getParameter(I.UNPACK_SKIP_ROWS),cs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze);const xt=L.isDataArrayTexture||L.isData3DTexture,Mn=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){const bn=ge.get(L),$t=ge.get(X),an=ge.get(bn.__renderTarget),ec=ge.get($t.__renderTarget);ae.bindFramebuffer(I.READ_FRAMEBUFFER,an.__webglFramebuffer),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,ec.__webglFramebuffer);for(let Ui=0;Ui<Ne;Ui++)xt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.get(L).__webglTexture,q,ze+Ui),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.get(X).__webglTexture,_e,Rt+Ui)),I.blitFramebuffer(Ye,qe,Ie,De,lt,ht,Ie,De,I.DEPTH_BUFFER_BIT,I.NEAREST);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||L.isRenderTargetTexture||ge.has(L)){const bn=ge.get(L),$t=ge.get(X);ae.bindFramebuffer(I.READ_FRAMEBUFFER,Ng),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,Og);for(let an=0;an<Ne;an++)xt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,q,ze+an):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,q),Mn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$t.__webglTexture,_e,Rt+an):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$t.__webglTexture,_e),q!==0?I.blitFramebuffer(Ye,qe,Ie,De,lt,ht,Ie,De,I.COLOR_BUFFER_BIT,I.NEAREST):Mn?I.copyTexSubImage3D(Ot,_e,lt,ht,Rt+an,Ye,qe,Ie,De):I.copyTexSubImage2D(Ot,_e,lt,ht,Ye,qe,Ie,De);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mn?L.isDataTexture||L.isData3DTexture?I.texSubImage3D(Ot,_e,lt,ht,Rt,Ie,De,Ne,ut,Ge,St.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Ot,_e,lt,ht,Rt,Ie,De,Ne,ut,St.data):I.texSubImage3D(Ot,_e,lt,ht,Rt,Ie,De,Ne,ut,Ge,St):L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,lt,ht,Ie,De,ut,Ge,St.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,lt,ht,St.width,St.height,ut,St.data):I.texSubImage2D(I.TEXTURE_2D,_e,lt,ht,Ie,De,ut,Ge,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,An),I.pixelStorei(I.UNPACK_SKIP_PIXELS,br),I.pixelStorei(I.UNPACK_SKIP_ROWS,mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,cs),_e===0&&X.generateMipmaps&&I.generateMipmap(Ot),ae.unbindTexture()},this.copyTextureToTexture3D=function(L,X,$=null,K=null,q=0){return L.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,L=arguments[2],X=arguments[3],q=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,X,$,K,q)},this.initRenderTarget=function(L){ge.get(L).__webglFramebuffer===void 0&&D.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?D.setTextureCube(L,0):L.isData3DTexture?D.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?D.setTexture2DArray(L,0):D.setTexture2D(L,0),ae.unbindTexture()},this.resetState=function(){b=0,T=0,w=null,ae.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const KS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:gl,AddEquation:bi,AddOperation:yp,AdditiveAnimationBlendMode:Gu,AdditiveBlending:Ao,AgXToneMapping:Tp,AlphaFormat:Fu,AlwaysCompare:kp,AlwaysDepth:Po,AlwaysStencilFunc:lu,AmbientLight:Im,AnimationAction:zm,AnimationClip:na,AnimationLoader:m_,AnimationMixer:W_,AnimationObjectGroup:H_,AnimationUtils:h_,ArcCurve:nm,ArrayCamera:Om,ArrowHelper:ux,AttachedBindMode:ou,Audio:Fm,AudioAnalyser:L_,AudioContext:dh,AudioListener:R_,AudioLoader:E_,AxesHelper:hx,BackSide:Yt,BasicDepthPacking:Pp,BasicShadowMap:jg,BatchedMesh:Qp,Bone:Zu,BooleanKeyframeTrack:yr,Box2:Vm,Box3:kt,Box3Helper:lx,BoxGeometry:Ri,BoxHelper:ox,BufferAttribute:ct,BufferGeometry:et,BufferGeometryLoader:Nm,ByteType:Uu,Cache:ni,Camera:la,CameraHelper:ax,CanvasTexture:Nv,CapsuleGeometry:Dl,CatmullRomCurve3:im,CineonToneMapping:Sp,CircleGeometry:Ul,ClampToEdgeWrapping:Bt,Clock:ql,Color:ye,ColorKeyframeTrack:ch,ColorManagement:at,CompressedArrayTexture:Dv,CompressedCubeTexture:Uv,CompressedTexture:lr,CompressedTextureLoader:g_,ConeGeometry:Nl,ConstantAlphaFactor:vp,ConstantColorFactor:mp,Controls:dx,CubeCamera:Yp,CubeReflectionMapping:oi,CubeRefractionMapping:Ti,CubeTexture:ca,CubeTextureLoader:v_,CubeUVReflectionMapping:as,CubicBezierCurve:Qu,CubicBezierCurve3:rm,CubicInterpolant:bm,CullFaceBack:ru,CullFaceFront:ep,CullFaceFrontBack:qg,CullFaceNone:Qf,Curve:Bn,CurvePath:am,CustomBlending:tp,CustomToneMapping:wp,CylinderGeometry:os,Cylindrical:J_,Data3DTexture:Al,DataArrayTexture:aa,DataTexture:En,DataTextureLoader:__,DataUtils:lv,DecrementStencilOp:l0,DecrementWrapStencilOp:u0,DefaultLoadingManager:Tm,DepthFormat:ar,DepthStencilFormat:fr,DepthTexture:Ju,DetachedBindMode:Ap,DirectionalLight:Rm,DirectionalLightHelper:sx,DiscreteInterpolant:Sm,DodecahedronGeometry:Ol,DoubleSide:hn,DstAlphaFactor:up,DstColorFactor:dp,DynamicCopyUsage:T0,DynamicDrawUsage:x0,DynamicReadUsage:b0,EdgesGeometry:om,EllipseCurve:Ll,EqualCompare:Op,EqualDepth:Do,EqualStencilFunc:p0,EquirectangularReflectionMapping:Hs,EquirectangularRefractionMapping:Gs,Euler:rn,EventDispatcher:Fn,ExtrudeGeometry:Bl,FileLoader:hi,Float16BufferAttribute:pv,Float32BufferAttribute:Oe,FloatType:dn,Fog:Il,FogExp2:Rl,FramebufferTexture:Lv,FrontSide:ai,Frustum:ha,GLBufferAttribute:$_,GLSL1:A0,GLSL3:cu,GreaterCompare:Fp,GreaterDepth:No,GreaterEqualCompare:zp,GreaterEqualDepth:Uo,GreaterEqualStencilFunc:_0,GreaterStencilFunc:g0,GridHelper:ix,Group:Xr,HalfFloatType:_r,HemisphereLight:Em,HemisphereLightHelper:nx,IcosahedronGeometry:zl,ImageBitmapLoader:T_,ImageLoader:ia,ImageUtils:Gp,IncrementStencilOp:o0,IncrementWrapStencilOp:c0,InstancedBufferAttribute:ns,InstancedBufferGeometry:Um,InstancedInterleavedBuffer:Z_,InstancedMesh:Kp,Int16BufferAttribute:dv,Int32BufferAttribute:fv,Int8BufferAttribute:cv,IntType:xl,InterleavedBuffer:ua,InterleavedBufferAttribute:ui,Interpolant:ma,InterpolateDiscrete:Qr,InterpolateLinear:Ws,InterpolateSmooth:bo,InvertStencilOp:h0,KeepStencilOp:Zi,KeyframeTrack:zn,LOD:$p,LatheGeometry:da,Layers:Cl,LessCompare:Np,LessDepth:Lo,LessEqualCompare:Wu,LessEqualDepth:hr,LessEqualStencilFunc:m0,LessStencilFunc:f0,Light:Li,LightProbe:Dm,Line:Ei,Line3:Hm,LineBasicMaterial:sn,LineCurve:eh,LineCurve3:sm,LineDashedMaterial:xm,LineLoop:em,LineSegments:Xn,LinearFilter:Pt,LinearInterpolant:lh,LinearMipMapLinearFilter:Kg,LinearMipMapNearestFilter:Jg,LinearMipmapLinearFilter:Ln,LinearMipmapNearestFilter:jr,LinearSRGBColorSpace:pr,LinearToneMapping:Mp,LinearTransfer:Ys,Loader:pn,LoaderUtils:pu,LoadingManager:uh,LoopOnce:Cp,LoopPingPong:Ip,LoopRepeat:Rp,LuminanceAlphaFormat:ku,LuminanceFormat:zu,MOUSE:ji,Material:Zt,MaterialLoader:Yl,MathUtils:ci,Matrix2:mh,Matrix3:Je,Matrix4:Be,MaxEquation:sp,Mesh:vt,MeshBasicMaterial:Wn,MeshDepthMaterial:sh,MeshDistanceMaterial:ah,MeshLambertMaterial:vm,MeshMatcapMaterial:_m,MeshNormalMaterial:gm,MeshPhongMaterial:pm,MeshPhysicalMaterial:fm,MeshStandardMaterial:rh,MeshToonMaterial:mm,MinEquation:rp,MirroredRepeatWrapping:Jr,MixOperation:xp,MultiplyBlending:au,MultiplyOperation:ra,NearestFilter:At,NearestMipMapLinearFilter:$g,NearestMipMapNearestFilter:Zg,NearestMipmapLinearFilter:er,NearestMipmapNearestFilter:_l,NeutralToneMapping:Ep,NeverCompare:Up,NeverDepth:Io,NeverStencilFunc:d0,NoBlending:ii,NoColorSpace:ei,NoToneMapping:Nn,NormalAnimationBlendMode:Tl,NormalBlending:sr,NotEqualCompare:Bp,NotEqualDepth:Oo,NotEqualStencilFunc:v0,NumberKeyframeTrack:ea,Object3D:ot,ObjectLoader:S_,ObjectSpaceNormalMap:Dp,OctahedronGeometry:fa,OneFactor:op,OneMinusConstantAlphaFactor:_p,OneMinusConstantColorFactor:gp,OneMinusDstAlphaFactor:hp,OneMinusDstColorFactor:fp,OneMinusSrcAlphaFactor:Ro,OneMinusSrcColorFactor:cp,OrthographicCamera:si,PCFShadowMap:Lu,PCFSoftShadowMap:Du,PMREMGenerator:_u,Path:$s,PerspectiveCamera:gt,Plane:Vn,PlaneGeometry:Pi,PlaneHelper:cx,PointLight:Cm,PointLightHelper:ex,Points:tm,PointsMaterial:$u,PolarGridHelper:rx,PolyhedronGeometry:Ii,PositionalAudio:P_,PropertyBinding:it,PropertyMixer:Bm,QuadraticBezierCurve:th,QuadraticBezierCurve3:nh,Quaternion:qt,QuaternionKeyframeTrack:ga,QuaternionLinearInterpolant:wm,RED_GREEN_RGTC2_Format:ol,RED_RGTC1_Format:Hu,REVISION:ss,RGBADepthPacking:Lp,RGBAFormat:Nt,RGBAIntegerFormat:wl,RGBA_ASTC_10x10_Format:tl,RGBA_ASTC_10x5_Format:Ko,RGBA_ASTC_10x6_Format:Qo,RGBA_ASTC_10x8_Format:el,RGBA_ASTC_12x10_Format:nl,RGBA_ASTC_12x12_Format:il,RGBA_ASTC_4x4_Format:Wo,RGBA_ASTC_5x4_Format:Xo,RGBA_ASTC_5x5_Format:Yo,RGBA_ASTC_6x5_Format:qo,RGBA_ASTC_6x6_Format:jo,RGBA_ASTC_8x5_Format:Zo,RGBA_ASTC_8x6_Format:$o,RGBA_ASTC_8x8_Format:Jo,RGBA_BPTC_Format:Ls,RGBA_ETC2_EAC_Format:Go,RGBA_PVRTC_2BPPV1_Format:ko,RGBA_PVRTC_4BPPV1_Format:zo,RGBA_S3TC_DXT1_Format:Rs,RGBA_S3TC_DXT3_Format:Is,RGBA_S3TC_DXT5_Format:Ps,RGBDepthPacking:i0,RGBFormat:Bu,RGBIntegerFormat:Qg,RGB_BPTC_SIGNED_Format:rl,RGB_BPTC_UNSIGNED_Format:sl,RGB_ETC1_Format:Vo,RGB_ETC2_Format:Ho,RGB_PVRTC_2BPPV1_Format:Bo,RGB_PVRTC_4BPPV1_Format:Fo,RGB_S3TC_DXT1_Format:Cs,RGDepthPacking:r0,RGFormat:Vu,RGIntegerFormat:Sl,RawShaderMaterial:Os,Ray:xr,Raycaster:km,RectAreaLight:Pm,RedFormat:bl,RedIntegerFormat:sa,ReinhardToneMapping:bp,RenderTarget:El,RenderTarget3D:X_,RenderTargetArray:Y_,RepeatWrapping:$r,ReplaceStencilOp:a0,ReverseSubtractEquation:ip,RingGeometry:kl,SIGNED_RED_GREEN_RGTC2_Format:ll,SIGNED_RED_RGTC1_Format:al,SRGBColorSpace:Qt,SRGBTransfer:ft,Scene:mr,ShaderChunk:tt,ShaderLib:Pn,ShaderMaterial:jt,ShadowMaterial:dm,Shape:cr,ShapeGeometry:Vl,ShapePath:Wm,ShapeUtils:Hn,ShortType:Nu,Skeleton:Pl,SkeletonHelper:Q_,SkinnedMesh:Jp,Source:ir,Sphere:Vt,SphereGeometry:pa,Spherical:gu,SphericalHarmonics3:Lm,SplineCurve:ih,SpotLight:Am,SpotLightHelper:K_,Sprite:Zp,SpriteMaterial:ju,SrcAlphaFactor:Co,SrcAlphaSaturateFactor:pp,SrcColorFactor:lp,StaticCopyUsage:w0,StaticDrawUsage:qs,StaticReadUsage:M0,StereoCamera:A_,StreamCopyUsage:E0,StreamDrawUsage:y0,StreamReadUsage:S0,StringKeyframeTrack:Mr,SubtractEquation:np,SubtractiveBlending:su,TOUCH:Qn,TangentSpaceNormalMap:Ci,TetrahedronGeometry:Hl,Texture:yt,TextureLoader:x_,TextureUtils:vx,TorusGeometry:Gl,TorusKnotGeometry:Wl,Triangle:nn,TriangleFanDrawMode:n0,TriangleStripDrawMode:t0,TrianglesDrawMode:e0,TubeGeometry:Xl,UVMapping:vl,Uint16BufferAttribute:Yu,Uint32BufferAttribute:qu,Uint8BufferAttribute:uv,Uint8ClampedBufferAttribute:hv,Uniform:jl,UniformsGroup:j_,UniformsLib:Ae,UniformsUtils:oa,UnsignedByteType:Gn,UnsignedInt248Type:dr,UnsignedInt5999Type:Ou,UnsignedIntType:li,UnsignedShort4444Type:yl,UnsignedShort5551Type:Ml,UnsignedShortType:Kr,VSMShadowMap:kn,Vector2:ne,Vector3:U,Vector4:nt,VectorKeyframeTrack:ta,VideoTexture:Pv,WebGL3DRenderTarget:K0,WebGLArrayRenderTarget:J0,WebGLCoordinateSystem:Dn,WebGLCubeRenderTarget:qp,WebGLRenderTarget:On,WebGLRenderer:Fs,WebGLUtils:$m,WebGPUCoordinateSystem:js,WireframeGeometry:hm,WrapAroundEnding:Xs,ZeroCurvatureEnding:tr,ZeroFactor:ap,ZeroSlopeEnding:nr,ZeroStencilOp:s0,createCanvasElement:Hp},Symbol.toStringTag,{value:"Module"}));function Ai(r){return Yf()?(qf(r),!0):!1}function wn(){const r=new Set,e=s=>{r.delete(s)};return{on:s=>{r.add(s);const a=()=>e(s);return Ai(a),{off:a}},off:e,trigger:(...s)=>Promise.all(Array.from(r).map(a=>a(...s))),clear:()=>{r.clear()}}}const Gc=new WeakMap,QS=(...r)=>{var e;const t=r[0],n=(e=ks())==null?void 0:e.proxy;if(n==null&&!jf())throw new Error("injectLocal must be called in setup");return n&&Gc.has(n)&&t in Gc.get(n)?Gc.get(n)[t]:Zf(...r)},yu=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const e1=r=>r!=null,t1=Object.prototype.toString,n1=r=>t1.call(r)==="[object Object]",Mu=()=>{};function i1(r,e){function t(...n){return new Promise((i,s)=>{Promise.resolve(r(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(i).catch(s)})}return t}function r1(r,e={}){let t,n,i=Mu;const s=l=>{clearTimeout(l),i(),i=Mu};let a;return l=>{const c=fn(r),u=fn(e.maxWait);return t&&s(t),c<=0||u!==void 0&&u<=0?(n&&(s(n),n=null),Promise.resolve(l())):new Promise((d,h)=>{i=e.rejectOnCancel?h:d,a=l,u&&!n&&(n=setTimeout(()=>{t&&s(t),n=null,d(a())},u)),t=setTimeout(()=>{n&&s(n),n=null,d(l())},c)})}}function hf(r){return r.endsWith("rem")?Number.parseFloat(r)*16:Number.parseFloat(r)}function s1(r,e,t=!1){return e.reduce((n,i)=>(i in r&&(!t||r[i]!==void 0)&&(n[i]=r[i]),n),{})}function a1(r){return ks()}function Bs(r){return Array.isArray(r)?r:[r]}function o1(r,e=200,t={}){return i1(r1(e,t),r)}function df(r,e=200,t={}){const n=Qe(r.value),i=o1(()=>{n.value=r.value},e,t);return zt(r,()=>i()),n}function l1(r,e={}){if(!pl(r))return ml(r);const t=Array.isArray(r.value)?Array.from({length:r.value.length}):{};for(const n in r.value)t[n]=Bg(()=>({get(){return r.value[n]},set(i){var s;if((s=fn(e.replaceRef))!=null?s:!0)if(Array.isArray(r.value)){const o=[...r.value];o[n]=i,r.value=o}else{const o={...r.value,[n]:i};Object.setPrototypeOf(o,Object.getPrototypeOf(r.value)),r.value=o}else r.value[n]=i}}));return t}const Ft=fn;function vh(r,e=!0,t){a1()?Pu(r,t):e?r():Fg(r)}function c1(r,e=1e3,t={}){const{immediate:n=!0,immediateCallback:i=!1}=t;let s=null;const a=Qe(!1);function o(){s&&(clearInterval(s),s=null)}function l(){a.value=!1,o()}function c(){const u=fn(e);u<=0||(a.value=!0,i&&r(),o(),a.value&&(s=setInterval(r,u)))}if(n&&yu&&c(),pl(e)||typeof e=="function"){const u=zt(e,()=>{a.value&&yu&&c()});Ai(u)}return Ai(l),{isActive:a,pause:l,resume:c}}function Jm(r,e,t){return zt(r,e,{...t,immediate:!0})}const di=yu?window:void 0;function Un(r){var e;const t=fn(r);return(e=t==null?void 0:t.$el)!=null?e:t}function vr(...r){const e=[],t=()=>{e.forEach(o=>o()),e.length=0},n=(o,l,c,u)=>(o.addEventListener(l,c,u),()=>o.removeEventListener(l,c,u)),i=Et(()=>{const o=Bs(fn(r[0])).filter(l=>l!=null);return o.every(l=>typeof l!="string")?o:void 0}),s=Jm(()=>{var o,l;return[(l=(o=i.value)==null?void 0:o.map(c=>Un(c)))!=null?l:[di].filter(c=>c!=null),Bs(fn(i.value?r[1]:r[0])),Bs($e(i.value?r[2]:r[1])),fn(i.value?r[3]:r[2])]},([o,l,c,u])=>{if(t(),!(o!=null&&o.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const d=n1(u)?{...u}:u;e.push(...o.flatMap(h=>l.flatMap(f=>c.map(m=>n(h,f,m,d)))))},{flush:"post"}),a=()=>{s(),t()};return Ai(t),a}function u1(){const r=Qe(!1),e=ks();return e&&Pu(()=>{r.value=!0},e),r}function $l(r){const e=u1();return Et(()=>(e.value,!!r()))}function h1(r,e,t={}){const{window:n=di,...i}=t;let s;const a=$l(()=>n&&"MutationObserver"in n),o=()=>{s&&(s.disconnect(),s=void 0)},l=Et(()=>{const h=fn(r),f=Bs(h).map(Un).filter(e1);return new Set(f)}),c=zt(()=>l.value,h=>{o(),a.value&&h.size&&(s=new MutationObserver(e),h.forEach(f=>s.observe(f,i)))},{immediate:!0,flush:"post"}),u=()=>s==null?void 0:s.takeRecords(),d=()=>{c(),o()};return Ai(d),{isSupported:a,stop:d,takeRecords:u}}function _h(r,e={}){const{immediate:t=!0,fpsLimit:n=void 0,window:i=di}=e,s=Qe(!1),a=Et(()=>n?1e3/fn(n):null);let o=0,l=null;function c(h){if(!s.value||!i)return;o||(o=h);const f=h-o;if(a.value&&f<a.value){l=i.requestAnimationFrame(c);return}o=h,r({delta:f,timestamp:h}),l=i.requestAnimationFrame(c)}function u(){!s.value&&i&&(s.value=!0,o=0,l=i.requestAnimationFrame(c))}function d(){s.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return t&&u(),Ai(d),{isActive:Vs(s),pause:d,resume:u}}const d1=Symbol("vueuse-ssr-width");function f1(){const r=jf()?QS(d1,null):null;return typeof r=="number"?r:void 0}function Km(r,e={}){const{window:t=di,ssrWidth:n=f1()}=e,i=$l(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),s=Qe(typeof n=="number"),a=Tn(),o=Qe(!1),l=c=>{o.value=c.matches};return rs(()=>{if(s.value){s.value=!i.value;const c=fn(r).split(",");o.value=c.some(u=>{const d=u.includes("not all"),h=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),f=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let m=!!(h||f);return h&&m&&(m=n>=hf(h[1])),f&&m&&(m=n<=hf(f[1])),d?!m:m});return}i.value&&(a.value=t.matchMedia(fn(r)),o.value=a.value.matches)}),vr(a,"change",l,{passive:!0}),Et(()=>o.value)}function p1(r={}){const{window:e=di}=r,t=Qe(1),n=Km(()=>`(resolution: ${t.value}dppx)`,r);let i=Mu;return e&&(i=Jm(n,()=>t.value=e.devicePixelRatio)),{pixelRatio:Vs(t),stop:i}}function Qm(r,e,t={}){const{window:n=di,...i}=t;let s;const a=$l(()=>n&&"ResizeObserver"in n),o=()=>{s&&(s.disconnect(),s=void 0)},l=Et(()=>{const d=fn(r);return Array.isArray(d)?d.map(h=>Un(h)):[Un(d)]}),c=zt(l,d=>{if(o(),a.value&&n){s=new ResizeObserver(e);for(const h of d)h&&s.observe(h,i)}},{immediate:!0,flush:"post"}),u=()=>{o(),c()};return Ai(u),{isSupported:a,stop:u}}function m1(r,e={}){const{reset:t=!0,windowResize:n=!0,windowScroll:i=!0,immediate:s=!0,updateTiming:a="sync"}=e,o=Qe(0),l=Qe(0),c=Qe(0),u=Qe(0),d=Qe(0),h=Qe(0),f=Qe(0),m=Qe(0);function _(){const g=Un(r);if(!g){t&&(o.value=0,l.value=0,c.value=0,u.value=0,d.value=0,h.value=0,f.value=0,m.value=0);return}const S=g.getBoundingClientRect();o.value=S.height,l.value=S.bottom,c.value=S.left,u.value=S.right,d.value=S.top,h.value=S.width,f.value=S.x,m.value=S.y}function p(){a==="sync"?_():a==="next-frame"&&requestAnimationFrame(()=>_())}return Qm(r,p),zt(()=>Un(r),g=>!g&&p()),h1(r,p,{attributeFilter:["style","class"]}),i&&vr("scroll",p,{capture:!0,passive:!0}),n&&vr("resize",p,{passive:!0}),vh(()=>{s&&p()}),{height:o,bottom:l,left:c,right:u,top:d,width:h,x:f,y:m,update:p}}function g1(r,e={width:0,height:0},t={}){const{window:n=di,box:i="content-box"}=t,s=Et(()=>{var d,h;return(h=(d=Un(r))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),a=Qe(e.width),o=Qe(e.height),{stop:l}=Qm(r,([d])=>{const h=i==="border-box"?d.borderBoxSize:i==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(n&&s.value){const f=Un(r);if(f){const m=f.getBoundingClientRect();a.value=m.width,o.value=m.height}}else if(h){const f=Bs(h);a.value=f.reduce((m,{inlineSize:_})=>m+_,0),o.value=f.reduce((m,{blockSize:_})=>m+_,0)}else a.value=d.contentRect.width,o.value=d.contentRect.height},t);vh(()=>{const d=Un(r);d&&(a.value="offsetWidth"in d?d.offsetWidth:e.width,o.value="offsetHeight"in d?d.offsetHeight:e.height)});const c=zt(()=>Un(r),d=>{a.value=d?e.width:0,o.value=d?e.height:0});function u(){l(),c()}return{width:a,height:o,stop:u}}function v1(r){var e;const t=Qe(0);if(typeof performance>"u")return t;const n=(e=r==null?void 0:r.every)!=null?e:10;let i=performance.now(),s=0;return _h(()=>{if(s+=1,s>=n){const a=performance.now(),o=a-i;t.value=Math.round(1e3/(o/s)),i=a,s=0}}),t}function _1(r={}){const e=Qe(),t=$l(()=>typeof performance<"u"&&"memory"in performance);if(t.value){const{interval:n=1e3}=r;c1(()=>{e.value=performance.memory},n,{immediate:r.immediate,immediateCallback:r.immediateCallback})}return{isSupported:t,memory:e}}const eg={x:0,y:0,pointerId:0,pressure:0,tiltX:0,tiltY:0,width:0,height:0,twist:0,pointerType:null},x1=Object.keys(eg);function y1(r={}){const{target:e=di}=r,t=Qe(!1),n=Qe(r.initialValue||{});Object.assign(n.value,eg,n.value);const i=s=>{t.value=!0,!(r.pointerTypes&&!r.pointerTypes.includes(s.pointerType))&&(n.value=s1(s,x1,!1))};if(e){const s={passive:!0};vr(e,["pointerdown","pointermove","pointerup"],i,s),vr(e,"pointerleave",()=>t.value=!1,s)}return{...l1(n),isInside:t}}function M1(r={}){const{window:e=di,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:s=!0,type:a="inner"}=r,o=Qe(t),l=Qe(n),c=()=>{if(e)if(a==="outer")o.value=e.outerWidth,l.value=e.outerHeight;else if(a==="visual"&&e.visualViewport){const{width:d,height:h,scale:f}=e.visualViewport;o.value=Math.round(d*f),l.value=Math.round(h*f)}else s?(o.value=e.innerWidth,l.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};c(),vh(c);const u={passive:!0};if(vr("resize",c,u),e&&a==="visual"&&e.visualViewport&&vr(e.visualViewport,"resize",c,u),i){const d=Km("(orientation: portrait)");zt(d,()=>c())}return{width:o,height:l}}var b1=Object.defineProperty,S1=(r,e,t)=>e in r?b1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ff=(r,e,t)=>S1(r,typeof e!="symbol"?e+"":e,t);const w1="@tresjs/core",T1="module",E1="4.3.2",A1="pnpm@9.15.1",C1="Declarative ThreeJS using Vue Components",R1="Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)",I1="MIT",P1={type:"git",url:"git+https://github.com/Tresjs/tres.git"},L1=["vue","3d","threejs","three","threejs-vue"],D1=!1,U1={".":{types:"./dist/index.d.ts",import:"./dist/tres.js",require:"./dist/tres.umd.cjs"},"./components":{types:"./dist/src/components/index.d.ts"},"./composables":{types:"./dist/src/composables/index.d.ts"},"./types":{types:"./dist/src/types/index.d.ts"},"./utils":{types:"./dist/src/utils/index.d.ts"},"./*":"./*"},N1="./dist/tres.js",O1="./dist/tres.js",F1="./dist/index.d.ts",B1=["*.d.ts","dist"],z1={access:"public"},k1={dev:"pnpm --filter='./playground/vue' dev","dev:nuxt":"pnpm --filter='./playground/nuxt' dev",build:"vite build",test:"vitest","test:ci":"vitest run","test:ui":"vitest --ui --coverage.enabled=true",release:"release-it",coverage:"vitest run --coverage",lint:"eslint .","lint:fix":"eslint . --fix","docs:dev":"vitepress dev docs","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs","docs:preview":"vitepress preview docs","docs:contributors":"esno scripts/update-contributors.ts"},V1={three:">=0.133",vue:">=3.4"},H1={"@alvarosabu/utils":"^3.2.0","@vue/devtools-api":"^6.6.3","@vueuse/core":"^12.0.0"},G1={"@release-it/conventional-changelog":"^9.0.3","@stackblitz/sdk":"^1.11.0","@tresjs/cientos":"4.0.3","@tresjs/eslint-config":"^1.4.0","@types/three":"^0.171.0","@typescript-eslint/eslint-plugin":"^8.18.1","@typescript-eslint/parser":"^8.18.1","@vitejs/plugin-vue":"^5.2.1","@vitest/coverage-c8":"^0.33.0","@vitest/coverage-v8":"^2.1.8","@vitest/ui":"^2.1.8","@vue/test-utils":"^2.4.6",eslint:"^9.17.0","eslint-plugin-vue":"^9.32.0",esno:"^4.8.0",gsap:"^3.12.5",jsdom:"^25.0.1",kolorist:"^1.8.0",ohmyfetch:"^0.4.21",pathe:"^1.1.2","release-it":"^17.10.0","rollup-plugin-analyzer":"^4.0.0","rollup-plugin-copy":"^3.5.0","rollup-plugin-visualizer":"^5.12.0",sponsorkit:"^0.16.2",three:"^0.171.0",unocss:"^0.65.2",unplugin:"^2.1.0","unplugin-vue-components":"^0.28.0",vite:"^6.0.5","vite-plugin-banner":"^0.8.0","vite-plugin-dts":"4.4.0","vite-plugin-inspect":"^0.10.4","vite-plugin-require-transform":"^1.0.21","vite-svg-loader":"^5.1.0",vitepress:"1.5.0",vitest:"2.1.8",vue:"3.5.13","vue-demi":"^0.14.10"},W1={name:w1,type:T1,version:E1,packageManager:A1,description:C1,author:R1,license:I1,repository:P1,keywords:L1,sideEffects:D1,exports:U1,main:N1,module:O1,types:F1,files:B1,publishConfig:z1,scripts:k1,peerDependencies:V1,dependencies:H1,devDependencies:G1};class X1 extends vt{constructor(...e){super(...e),ff(this,"type","HightlightMesh"),ff(this,"createTime"),this.createTime=Date.now()}onBeforeRender(){const e=(Date.now()-this.createTime)/1e3,t=1+.07*Math.sin(2.5*e);this.scale.set(t,t,t)}}function bu(r){return typeof r>"u"}function dl(r){return Array.isArray(r)}function Y1(r){return typeof r=="number"}function tg(r){return typeof r=="string"}function Qi(r){return typeof r=="function"}function fi(r){return r===Object(r)&&!dl(r)&&!Qi(r)}function Si(r){return fi(r)&&"isObject3D"in r&&!!r.isObject3D}function pf(r){return fi(r)&&"isCamera"in r&&!!r.isCamera}function q1(r){return fi(r)&&"isBufferGeometry"in r&&!!r.isBufferGeometry}function j1(r){return fi(r)&&"isMaterial"in r&&!!r.isMaterial}function Z1(r){return fi(r)&&"isLight"in r&&!!r.isLight}function $1(r){return fi(r)&&"isFog"in r&&!!r.isFog}function J1(r){return fi(r)&&"isScene"in r&&!!r.isScene}function po(r){return Si(r)||q1(r)||j1(r)||$1(r)}function K1(r){return fi(r)&&!!r.isPrimitive}const ng=(r,e)=>{for(const t of Object.keys(e))e[t]instanceof Object&&Object.assign(e[t],ng(r[t],e[t]));return Object.assign(r||{},e),r},Q1="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ew=iw(Q1);function mf(r){return r&&r.nodeType===1}function mo(r){return r.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}const tw=/\B([A-Z])/g;function nw(r){return r.replace(tw,"-$1").toLowerCase()}function iw(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return i=>!!t[i]}const gf=(r,e)=>{if(!e)return;const t=Array.isArray(e)?e:e.match(/([^[.\]])+/g);return t==null?void 0:t.reduce((n,i)=>n&&n[i],r)},rw=(r,e,t)=>{const n=Array.isArray(e)?e:e.match(/([^[.\]])+/g);n&&n.reduce((i,s,a)=>(i[s]===void 0&&(i[s]={}),a===n.length-1&&(i[s]=t),i[s]),r)};function ig(r,e){if(mf(r)&&mf(e)){const i=r.attributes,s=e.attributes;return i.length!==s.length?!1:Array.from(i).every(({name:a,value:o})=>e.getAttribute(a)===o)}if(r===e)return!0;if(r===null||typeof r!="object"||e===null||typeof e!="object")return!1;const t=Object.keys(r),n=Object.keys(e);if(t.length!==n.length)return!1;for(const i of t)if(!n.includes(i)||!ig(r[i],e[i]))return!1;return!0}function sw(r,e){if(!Array.isArray(r)||!Array.isArray(e)||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(!ig(r[t],e[t]))return!1;return!0}function aw(r,e,t,n){const i=l=>{if(l.uuid===e)return l;for(const c of l.children){const u=i(c);if(u)return u}},s=i(r);if(!s){console.warn("Object with UUID not found in the scene.");return}let a=s;for(let l=0;l<t.length-1;l++)if(a[t[l]]!==void 0)a=a[t[l]];else{console.warn(`Property path is not valid: ${t.join(".")}`);return}const o=t[t.length-1];a[o]!==void 0?a[o]=n:console.warn(`Property path is not valid: ${t.join(".")}`)}function ow(r){const e=new Wn({color:11003607,transparent:!0,opacity:.2,depthTest:!1,side:hn});return new X1(r.geometry.clone(),e)}function lw(r){return"map"in r}function vf(r){lw(r)&&r.map&&r.map.dispose(),r.dispose()}function rg(r){var e,t;if(r.parent&&((e=r.removeFromParent)==null||e.call(r)),delete r.__tres,[...r.children].forEach(n=>rg(n)),!(r instanceof mr)){const n=r;r&&((t=r.dispose)==null||t.call(r)),n.geometry&&(n.geometry.dispose(),delete n.geometry),Array.isArray(n.material)?(n.material.forEach(i=>vf(i)),delete n.material):n.material&&(vf(n.material),delete n.material)}}function cw(r,e){let t=0;for(let n=0;n<r.length;n++)e(r[n],n)&&(r[t]=r[n],t++);return r.length=t,r}function Su(r,e){let t=r;if(e.includes("-")){const n=e.split("-");let i=n.shift();for(;t&&n.length;)i in t?(t=t[i],i=n.shift()):i=_f(i,n.shift());return{target:t,key:_f(i,...n)}}else return{target:t,key:e}}function _f(...r){return r.map((e,t)=>t===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join("")}const xf=/-\d+$/;function uw(r,e,t){if(tg(t)){if(xf.test(t)){const s=t.replace(xf,""),{target:a,key:o}=Su(r,s);if(!Array.isArray(a[o])){const l=a[o],c=[];c.__tresDetach=()=>{c.every(u=>bu(u))&&(a[o]=l)},a[o]=c}}const{target:n,key:i}=Su(r,t);e.__tres.previousAttach=n[i],n[i]=is(e)}else e.__tres.previousAttach=t(r,e)}function hw(r,e,t){var n,i,s;if(tg(t)){const{target:a,key:o}=Su(r,t),l=e.__tres.previousAttach;l===void 0?delete a[o]:a[o]=l,"__tresDetach"in a&&a.__tresDetach()}else(i=(n=e.__tres)==null?void 0:n.previousAttach)==null||i.call(n,r,e);(s=e.__tres)==null||delete s.previousAttach}function Ji(r,e,t){const n=r;return n.__tres={type:"unknown",eventCount:0,root:t,handlers:{},memoizedProps:{},objects:[],parent:null,previousAttach:null,...e},n.__tres.attach||(n.isMaterial?n.__tres.attach="material":n.isBufferGeometry?n.__tres.attach="geometry":n.isFog&&(n.__tres.attach="fog")),n}function sg(r){var e;const t=(e=r==null?void 0:r.__tres)==null?void 0:e.root;t&&t.render&&t.render.canBeInvalidated.value&&t.invalidate()}function dw(r,e,t){var n;if(!Qi(r.setPixelRatio))return;let i=0;if(t&&dl(t)&&t.length>=2){const[s,a]=t;i=ci.clamp(e,s,a)}else Y1(t)?i=t:i=e;i!==((n=r.getPixelRatio)==null?void 0:n.call(r))&&r.setPixelRatio(i)}function fw(r,e,t,n,i){const s=[...e.__tres.objects],a=is(e);if(r=is(r),a===r)return!0;const o=Ji(r,e.__tres??{},i),l=e.parent??e.__tres.parent??null,c={...e.__tres.memoizedProps};delete c.object;for(const u of s)ag(u,i),og(u,i);a.__tres.objects=[],n.remove(e);for(const[u,d]of Object.entries(c))n.patchProp(o,u,o[u],d);t(r),n.insert(e,l);for(const u of s)n.insert(u,e);return!0}function is(r){return K1(r)?(r.object.__tres=r.__tres,r.object):r}function ag(r,e){var t,n,i,s;const a=((t=r.__tres)==null?void 0:t.parent)||e.scene.value;r.__tres&&(r.__tres.parent=null),a&&a.__tres&&"objects"in a.__tres&&cw(a.__tres.objects,o=>o!==r),(n=r.__tres)!=null&&n.attach?hw(a,r,r.__tres.attach):((s=(i=r.parent)==null?void 0:i.remove)==null||s.call(i,is(r)),r.parent=null)}function og(r,e){var t;(t=r.traverse)==null||t.call(r,n=>{var i;e.deregisterCamera(n),(i=e.eventManager)==null||i.deregisterPointerMissedObject(n)}),e.deregisterCamera(r),sg(r)}const pw=({sizes:r})=>{const e=Qe([]),t=Et(()=>e.value[0]),n=a=>{const o=a instanceof la?a:e.value.find(c=>c.uuid===a);if(!o)return;const l=e.value.filter(({uuid:c})=>c!==o.uuid);e.value=[o,...l]},i=(a,o=!1)=>{if(pf(a)){const l=a;if(e.value.some(({uuid:c})=>c===l.uuid))return;o?n(l):e.value.push(l)}},s=a=>{if(pf(a)){const o=a;e.value=e.value.filter(({uuid:l})=>l!==o.uuid)}};return rs(()=>{r.aspectRatio.value&&e.value.forEach(a=>{!a.manual&&(a instanceof gt||mw(a))&&(a instanceof gt?a.aspect=r.aspectRatio.value:(a.left=r.width.value*-.5,a.right=r.width.value*.5,a.top=r.height.value*.5,a.bottom=r.height.value*-.5),a.updateProjectionMatrix())})}),wi(()=>{e.value=[]}),{camera:t,cameras:e,registerCamera:i,deregisterCamera:s,setCameraActive:n}};function mw(r){return r.hasOwnProperty("isOrthographicCamera")&&r.isOrthographicCamera}const fl="[TresJS ▲ ■ ●] ";function gw(...r){typeof r[0]=="string"?r[0]=fl+r[0]:r.unshift(fl),console.error(...r)}function vw(...r){typeof r[0]=="string"?r[0]=fl+r[0]:r.unshift(fl),console.warn(...r)}function _w(r,e){}function xh(){return{logError:gw,logWarning:vw,logMessage:_w}}const wu=Qe({}),Tu=r=>Object.assign(wu.value,r);function Wc(){const r=new Map,e=new Set;let t=0,n=!1;const i=()=>{const a=Array.from(r.entries()).sort((o,l)=>{const c=o[1].priority-l[1].priority;return c===0?o[1].addI-l[1].addI:c});e.clear(),a.forEach(o=>e.add(o[0]))},s=a=>{r.delete(a),e.delete(a)};return{on:(a,o=0)=>{r.set(a,{priority:o,addI:t++});const l=()=>s(a);return Ai(l),n=!0,{off:l}},off:s,trigger:(...a)=>{n&&(i(),n=!1),e.forEach(o=>o(...a))},dispose:()=>{r.clear(),e.clear()},get count(){return r.size}}}function xw(){let r=!0,e=!0,t=!1;const n=new ql(!1),i=Qe(n.running),s=Qe(!1);let a;const o=ci.generateUUID();let l=null;const c=Wc(),u=Wc(),d=Wc();b();let h={};function f(T){h=T}function m(T,w,x=0){switch(w){case"before":return c.on(T,x);case"render":return l||(l=T),u.dispose(),u.on(T);case"after":return d.on(T,x)}}function _(){e&&(e=!1,b(),A())}function p(){e=!0,b(),cancelAnimationFrame(a)}function g(){t=!1,b()}function S(){t=!0,b()}function y(){s.value=!0}function M(){s.value=!1}function A(){if(!r){a=requestAnimationFrame(A);return}const T=n.getDelta(),w=n.getElapsedTime(),x={camera:$e(h.camera),scene:$e(h.scene),renderer:$e(h.renderer),raycaster:$e(h.raycaster),controls:$e(h.controls),invalidate:h.invalidate,advance:h.advance},v={delta:T,elapsed:w,clock:n,...x};i.value&&c.trigger(v),s.value||(u.count?u.trigger(v):l&&l(v)),i.value&&d.trigger(v),a=requestAnimationFrame(A)}function b(){const T=!e&&!t;n.running!==T&&(n.running?n.stop():n.start()),i.value=n.running}return{loopId:o,register:(T,w,x)=>m(T,w,x),start:_,stop:p,pause:S,resume:g,pauseRender:y,resumeRender:M,isRenderPaused:s,isActive:i,setContext:f,setReady:T=>r=T}}function yh(r){let e=0;return r.traverse(t=>{if(t.isMesh&&t.geometry&&t.type!=="HightlightMesh"){const n=t.geometry,i=n.attributes.position.count*3*Float32Array.BYTES_PER_ELEMENT,s=n.index?n.index.count*Uint32Array.BYTES_PER_ELEMENT:0,a=n.attributes.normal?n.attributes.normal.count*3*Float32Array.BYTES_PER_ELEMENT:0,o=n.attributes.uv?n.attributes.uv.count*2*Float32Array.BYTES_PER_ELEMENT:0,l=i+s+a+o;e+=l}}),e}function yw(r){return(r/1024).toFixed(2)}const Mw=Number.parseInt(ss.replace("dev",""));function bw(r){return r instanceof ye?r:Array.isArray(r)?new ye(...r):new ye(r)}const go={realistic:{shadows:!0,physicallyCorrectLights:!0,outputColorSpace:Qt,toneMapping:gl,toneMappingExposure:3,shadowMap:{enabled:!0,type:Du}},flat:{toneMapping:Nn,toneMappingExposure:1}};function Sw({canvas:r,options:e,contextParts:{sizes:t,render:n,invalidate:i,advance:s}}){const a=Et(()=>({alpha:Ft(e.alpha)??!0,depth:Ft(e.depth),canvas:Un(r),context:Ft(e.context),stencil:Ft(e.stencil),antialias:Ft(e.antialias)??!0,precision:Ft(e.precision),powerPreference:Ft(e.powerPreference),premultipliedAlpha:Ft(e.premultipliedAlpha),preserveDrawingBuffer:Ft(e.preserveDrawingBuffer),logarithmicDepthBuffer:Ft(e.logarithmicDepthBuffer),failIfMajorPerformanceCaveat:Ft(e.failIfMajorPerformanceCaveat)})),o=Tn(new Fs(a.value));function l(){e.renderMode==="on-demand"&&i()}zt(a,()=>{o.value.dispose(),o.value=new Fs(a.value),l()}),zt([t.width,t.height],()=>{o.value.setSize(t.width.value,t.height.value),l()},{immediate:!0}),zt(()=>e.clearColor,l);const{pixelRatio:c}=p1(),{logError:u}=xh(),d=(()=>{const f=new Fs,m={shadowMap:{enabled:f.shadowMap.enabled,type:f.shadowMap.type},toneMapping:f.toneMapping,toneMappingExposure:f.toneMappingExposure,outputColorSpace:f.outputColorSpace};return f.dispose(),m})(),h=Ft(e.renderMode);return h==="on-demand"&&i(),h==="manual"&&setTimeout(()=>{s()},100),rs(()=>{const f=Ft(e.preset);f&&(f in go||u(`Renderer Preset must be one of these: ${Object.keys(go).join(", ")}`),ng(o.value,go[f])),dw(o.value,c.value,Ft(e.dpr)),h==="always"&&(n.frames.value=Math.max(1,n.frames.value));const m=(g,S)=>{const y=Ft(g),M=()=>{if(f)return gf(go[f],S)};if(y!==void 0)return y;const A=M();return A!==void 0?A:gf(d,S)},_=(g,S)=>rw(o.value,S,m(g,S));_(e.shadows,"shadowMap.enabled"),_(e.toneMapping??gl,"toneMapping"),_(e.shadowMapType,"shadowMap.type"),Mw<150&&_(!e.useLegacyLights,"physicallyCorrectLights"),_(e.outputColorSpace,"outputColorSpace"),_(e.toneMappingExposure,"toneMappingExposure");const p=m(e.clearColor,"clearColor");p&&o.value.setClearColor(p?bw(p):new ye(0))}),wi(()=>{o.value.dispose(),o.value.forceContextLoss()}),{renderer:o}}function ww(r,e,t=10){const n=Ft(r)?M1():g1(Et(()=>Ft(e).parentElement)),i=Vs(df(n.width,t)),s=Vs(df(n.height,t)),a=Et(()=>i.value/s.value);return{height:s,width:i,aspectRatio:a}}const Tw=(r,e)=>{const t=Et(()=>e.renderer.value.domElement),n=Tn([]),{x:i,y:s}=y1({target:t});let a=0;const{width:o,height:l,top:c,left:u}=m1(t),d=({x:Z,y:Te})=>{if(t.value)return{x:(Z-u.value)/o.value*2-1,y:-((Te-c.value)/l.value)*2+1}},h=({x:Z,y:Te})=>{if(e.camera.value)return e.raycaster.value.setFromCamera(new ne(Z,Te),e.camera.value),n.value=e.raycaster.value.intersectObjects(r.value,!0),n.value},f=Z=>{const Te=d({x:(Z==null?void 0:Z.clientX)??i.value,y:(Z==null?void 0:Z.clientY)??s.value});return Te?h(Te)||[]:[]},m=wn(),_=wn(),p=wn(),g=wn(),S=wn(),y=wn(),M=wn(),A=wn();function b(Z){const Te={};for(const Fe in Z)typeof Fe!="function"&&(Te[Fe]=Z[Fe]);return Te}const T=(Z,Te)=>{var Fe,J,de;const Me=b(Te),pe=new U(Te==null?void 0:Te.clientX,Te==null?void 0:Te.clientY,0).unproject((Fe=e.camera)==null?void 0:Fe.value);Z.trigger({...Me,intersections:n.value,unprojectedPoint:pe,ray:(J=e.raycaster)==null?void 0:J.value.ray,camera:(de=e.camera)==null?void 0:de.value,sourceEvent:Te,delta:a,stopPropagating:!1})};let w;const x=Z=>{f(Z),T(p,Z),w=Z},v=()=>{w&&x(w)};let E,P,O;const F=Z=>{var Te;E=(Te=n.value[0])==null?void 0:Te.object,a=0,P=new ne((Z==null?void 0:Z.clientX)??i.value,(Z==null?void 0:Z.clientY)??s.value),T(S,Z)};let H,B=!1;const ie=Z=>{var Te,Fe,J;Z instanceof PointerEvent&&(n.value.length===0&&T(y,Z),E===((Te=n.value[0])==null?void 0:Te.object)&&(O=new ne((Z==null?void 0:Z.clientX)??i.value,(Z==null?void 0:Z.clientY)??s.value),a=P==null?void 0:P.distanceTo(O),Z.button===0?(T(m,Z),H===((Fe=n.value[0])==null?void 0:Fe.object)?B=!0:(H=(J=n.value[0])==null?void 0:J.object,B=!1)):Z.button===2&&T(M,Z)),T(g,Z))},Y=Z=>{B&&(T(_,Z),H=void 0,B=!1)},le=Z=>T(p,Z),ce=Z=>T(A,Z);return t.value.addEventListener("pointerup",ie),t.value.addEventListener("pointerdown",F),t.value.addEventListener("pointermove",x),t.value.addEventListener("pointerleave",le),t.value.addEventListener("dblclick",Y),t.value.addEventListener("wheel",ce),wi(()=>{t!=null&&t.value&&(t.value.removeEventListener("pointerup",ie),t.value.removeEventListener("pointerdown",F),t.value.removeEventListener("pointermove",x),t.value.removeEventListener("pointerleave",le),t.value.removeEventListener("dblclick",Y),t.value.removeEventListener("wheel",ce))}),{intersects:n,onClick:Z=>m.on(Z).off,onDblClick:Z=>_.on(Z).off,onContextMenu:Z=>M.on(Z).off,onPointerMove:Z=>p.on(Z).off,onPointerUp:Z=>g.on(Z).off,onPointerDown:Z=>S.on(Z).off,onPointerMissed:Z=>y.on(Z).off,onWheel:Z=>A.on(Z).off,forceUpdate:v}};function Xc(r,e){if(Array.isArray(r))for(const t of r)t(e);typeof r=="function"&&r(e)}function Ew(r,e,t){var n;const i=Tn(),s=Tn();r&&(i.value=r),e&&(s.value=e);const a=x=>{var v;return((v=x.__tres)==null?void 0:v.eventCount)>0},o=x=>{var v;return((v=x.children)==null?void 0:v.some(E=>o(E)))||a(x)},l=Tn(((n=i.value)==null?void 0:n.children).filter(o)||[]);function c(x,v){const E=[],P=()=>v.stopPropagating=!0;v.stopPropagation=P;for(const O of v==null?void 0:v.intersections){if(v.stopPropagating)return;v={...v,...O};const{object:F}=O;v.eventObject=F,Xc(F[x],v),E.push(F);let H=F.parent;for(;H!==null&&!v.stopPropagating&&!E.includes(H);)v.eventObject=H,Xc(H[x],v),E.push(H),H=H.parent;const B=nw(x.slice(2));t(B,{intersection:O,event:v})}}const{onClick:u,onDblClick:d,onContextMenu:h,onPointerMove:f,onPointerDown:m,onPointerUp:_,onPointerMissed:p,onWheel:g,forceUpdate:S}=Tw(l,e);_(x=>c("onPointerUp",x)),m(x=>c("onPointerDown",x)),u(x=>c("onClick",x)),d(x=>c("onDoubleClick",x)),h(x=>c("onContextMenu",x)),g(x=>c("onWheel",x));let y=[];f(x=>{const v=x.intersections.map(({object:P})=>P),E=x.intersections;y.forEach(({object:P})=>{v.includes(P)||(x.intersections=y,c("onPointerLeave",x),c("onPointerOut",x))}),x.intersections=E,x.intersections.forEach(({object:P})=>{y.includes(P)||(c("onPointerEnter",x),c("onPointerOver",x))}),c("onPointerMove",x),y=x.intersections});const M=[];p(x=>{const v=()=>x.stopPropagating=!0;x.stopPropagation=v,M.forEach(E=>{x.stopPropagating||(x.eventObject=E,Xc(E.onPointerMissed,x))}),t("pointer-missed",{event:x})});function A(x){po(x)&&Si(x)&&l.value.push(x)}function b(x){if(po(x)&&Si(x)){const v=l.value.indexOf(x);v>-1&&l.value.splice(v,1)}}function T(x){po(x)&&Si(x)&&x.onPointerMissed&&M.push(x)}function w(x){if(po(x)&&Si(x)){const v=M.indexOf(x);v>-1&&M.splice(v,1)}}return e.eventManager={forceUpdate:S,registerObject:A,deregisterObject:b,registerPointerMissedObject:T,deregisterPointerMissedObject:w},{forceUpdate:S,registerObject:A,deregisterObject:b,registerPointerMissedObject:T,deregisterPointerMissedObject:w}}function Aw(r,e,t=100){t=t<=0?100:t;const n=wn(),i=new Set;let s=!1,a=!1,o=null;function l(){o&&clearTimeout(o),!a&&!s&&r()?(n.trigger(e),i.forEach(d=>d()),i.clear(),s=!0):!a&&!s&&(o=setTimeout(l,t))}function c(){a=!0,o&&clearTimeout(o)}l();const u=(d,...h)=>{d(...h)};return{on:d=>{if(s)return u(d,e),{off:()=>{}};{const h=n.on(d);return i.add(h.off),n.on(d)}},off:n.off,trigger:n.trigger,cancel:c}}const Yc=new WeakMap;function Cw(r){if(r=r||va(),Yc.has(r))return Yc.get(r);const e=100,t=Date.now(),n=Aw(()=>{if(Date.now()-t>=e)return!0;{const i=r.renderer.value,s=(i==null?void 0:i.domElement)||{width:0,height:0};return!!(i&&s.width>0&&s.height>0)}},r);return Yc.set(r,n),n}function Rw({scene:r,canvas:e,windowSize:t,rendererOptions:n,emit:i}){const s=Tn(r),a=ww(t,e),{camera:o,cameras:l,registerCamera:c,deregisterCamera:u,setCameraActive:d}=pw({sizes:a}),h={mode:Qe(n.renderMode||"always"),priority:Qe(0),frames:Qe(0),maxFrames:60,canBeInvalidated:Et(()=>h.mode.value==="on-demand"&&h.frames.value===0)};function f(O=1){n.renderMode==="on-demand"&&(h.frames.value=Math.min(h.maxFrames,h.frames.value+O))}function m(){n.renderMode==="manual"&&(h.frames.value=1)}const{renderer:_}=Sw({canvas:e,options:n,contextParts:{sizes:a,render:h,invalidate:f,advance:m}}),p={sizes:a,scene:s,camera:o,cameras:Vs(l),renderer:_,raycaster:Tn(new km),controls:Qe(null),perf:{maxFrames:160,fps:{value:0,accumulator:[]},memory:{currentMem:0,allocatedMem:0,accumulator:[]}},render:h,advance:m,extend:Tu,invalidate:f,registerCamera:c,setCameraActive:d,deregisterCamera:u,loop:xw()};Mo("useTres",p),p.scene.value.__tres={root:p},p.loop.register(()=>{o.value&&h.frames.value>0&&(_.value.render(r,o.value),i("render",p.renderer.value)),h.priority.value=0,h.mode.value==="always"?h.frames.value=1:h.frames.value=Math.max(0,h.frames.value-1)},"render");const{on:g,cancel:S}=Cw(p);p.loop.setReady(!1),p.loop.start(),g(()=>{i("ready",p),p.loop.setReady(!0),Ew(r,p,i)}),wi(()=>{S(),p.loop.stop()});const y=100,M=v1({every:y}),{isSupported:A,memory:b}=_1({interval:y}),T=160;let w=performance.now();const x=({timestamp:O})=>{p.scene.value&&(p.perf.memory.allocatedMem=yh(p.scene.value)),O-w>=y&&(w=O,p.perf.fps.accumulator.push(M.value),p.perf.fps.accumulator.length>T&&p.perf.fps.accumulator.shift(),p.perf.fps.value=M.value,A.value&&b.value&&(p.perf.memory.accumulator.push(b.value.usedJSHeapSize/1024/1024),p.perf.memory.accumulator.length>T&&p.perf.memory.accumulator.shift(),p.perf.memory.currentMem=p.perf.memory.accumulator.reduce((F,H)=>F+H,0)/p.perf.memory.accumulator.length))};let v=0;const E=1,{pause:P}=_h(({delta:O})=>{window.__TRES__DEVTOOLS__&&(x({timestamp:performance.now()}),v+=O,v>=E&&(window.__TRES__DEVTOOLS__.cb(p),v=0))},{immediate:!0});return wi(()=>{P()}),p}function va(){const r=Zf("useTres");if(!r)throw new Error("useTresContext must be used together with useTresContextProvider");return r}function lg(){const{camera:r,scene:e,renderer:t,loop:n,raycaster:i,controls:s,invalidate:a,advance:o}=va();n.setContext({camera:r,scene:e,renderer:t,raycaster:i,controls:s,invalidate:a,advance:o});function l(d,h=0){return n.register(d,"before",h)}function c(d){return n.register(d,"render")}function u(d,h=0){return n.register(d,"after",h)}return{pause:n.pause,resume:n.resume,pauseRender:n.pauseRender,resumeRender:n.resumeRender,isActive:n.isActive,onBeforeRender:l,render:c,onAfterRender:u}}const Iw=wn(),Pw=wn(),cg=wn(),zs=new ql;let wo=0,To=0;_h(()=>{Iw.trigger({delta:wo,elapsed:To,clock:zs}),Pw.trigger({delta:wo,elapsed:To,clock:zs}),cg.trigger({delta:wo,elapsed:To,clock:zs})},{immediate:!1});cg.on(()=>{wo=zs.getDelta(),To=zs.getElapsedTime()});function Lw(r,e={},t={}){let n=r;const i=o=>{n=o};let s=new Proxy({},{});const a={has(o,l){return l in e||l in n},get(o,l,c){return l in e?e[l](n):n[l]},set(o,l,c){return t[l]?t[l](c,n,s,i):n[l]=c,!0}};return s=new Proxy({},a),s}const{logError:yf}=xh(),Mf=["onClick","onContextMenu","onPointerMove","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onDoubleClick","onPointerDown","onPointerUp","onPointerCancel","onPointerMissed","onLostPointerCapture","onWheel"],Dw=r=>{const e=r.scene.value;function t(c,u,d,h){if(h||(h={}),h.args||(h.args=[]),c==="template"||ew(c))return null;let f=c.replace("Tres",""),m;if(c==="primitive"){(!fi(h.object)||pl(h.object))&&yf("Tres primitives need an 'object' prop, whose value is an object or shallowRef<object>"),f=h.object.type;const _={};m=Lw(h.object,{object:p=>p,isPrimitive:()=>!0,__tres:()=>_},{object:(p,g,S,y)=>{fw(p,S,y,{patchProp:s,remove:i,insert:n},r)},__tres:p=>{Object.assign(_,p)}})}else{const _=wu.value[f];_||yf(`${f} is not defined on the THREE namespace. Use extend to add it to the catalog.`),m=new _(...h.args)}return m?(m.isCamera&&(h!=null&&h.position||m.position.set(3,3,3),h!=null&&h.lookAt||m.lookAt(0,0,0)),m=Ji(m,{...m.__tres,type:f,memoizedProps:h,eventCount:0,primitive:c==="primitive",attach:h.attach},r),m):null}function n(c,u){var d,h,f;if(!c)return;u=u||e;const m=c.__tres?c:Ji(c,{},r),_=u.__tres?u:Ji(u,{},r);c=is(m),u=is(_),c.__tres&&((d=c.__tres)==null?void 0:d.eventCount)>0&&((h=r.eventManager)==null||h.registerObject(c)),r.registerCamera(c),(f=r.eventManager)==null||f.registerPointerMissedObject(c),m.__tres.attach?uw(_,m,m.__tres.attach):Si(c)&&Si(_)&&(_.add(c),c.dispatchEvent({type:"added"})),m.__tres.parent=_,_.__tres.objects&&!_.__tres.objects.includes(m)&&_.__tres.objects.push(m)}function i(c,u){var d,h,f,m;if(!c)return;c!=null&&c.__tres&&((d=c.__tres)==null?void 0:d.eventCount)>0&&((h=r.eventManager)==null||h.deregisterObject(c)),u=bu(u)?"default":u;const _=(f=c.__tres)==null?void 0:f.dispose;bu(_)||(_===null?u=!1:u=_);const p=(m=c.__tres)==null?void 0:m.primitive,g=u==="default"?!p:!!u;if(c.__tres&&"objects"in c.__tres&&[...c.__tres.objects].forEach(S=>i(S,u)),g&&c.children&&[...c.children].forEach(S=>i(S,u)),ag(c,r),og(c,r),g&&!J1(c)){if(Qi(u))u(c);else if(Qi(c.dispose))try{c.dispose()}catch{}}"__tres"in c&&delete c.__tres}function s(c,u,d,h){var f,m;if(!c)return;let _=c,p=u;if(c.__tres&&(c.__tres.memoizedProps[u]=h),u==="attach"){const M=((f=c.__tres)==null?void 0:f.parent)||c.parent;i(c),Ji(c,{attach:h},r),M&&n(c,M);return}if(u==="dispose"){c.__tres||(c=Ji(c,{},r)),c.__tres.dispose=h;return}if(Si(c)&&p==="blocks-pointer-events"){h||h===""?c[p]=h:delete c[p];return}Mf.includes(u)&&c.__tres&&(c.__tres.eventCount+=1);let g=mo(p),S=_==null?void 0:_[g];if(p==="args"){const M=c,A=d??[],b=h??[],T=((m=c.__tres)==null?void 0:m.type)||c.type;T&&A.length&&!sw(A,b)&&(_=Object.assign(M,new wu.value[T](...h)));return}if(_.type==="BufferGeometry"){if(p==="args")return;_.setAttribute(mo(p),new ct(...h));return}if(p.includes("-")&&S===void 0){const M=p.split("-");S=M.reduce((A,b)=>A[mo(b)],_),p=M.pop(),g=p,S!=null&&S.set||(_=M.reduce((A,b)=>A[mo(b)],_))}let y=h;if(y===""&&(y=!0),Qi(S)){Mf.includes(u)||(dl(y)?c[g](...y):c[g](y)),g.startsWith("on")&&Qi(y)&&(_[g]=y);return}!(S!=null&&S.set)&&!Qi(S)?_[g]=y:S.constructor===y.constructor&&S!=null&&S.copy?S==null||S.copy(y):dl(y)?S.set(...y):!S.isColor&&S.setScalar?S.setScalar(y):S.set(y),sg(c)}function a(c){var u;return((u=c==null?void 0:c.__tres)==null?void 0:u.parent)||null}function o(c){const u=Ji(new ot,{type:"Comment"},r);return u.name=c,u}function l(c){var u;const d=a(c),h=((u=d==null?void 0:d.__tres)==null?void 0:u.objects)||[],f=h.indexOf(c);return f<0||f>=h.length-1?null:h[f+1]}return{insert:n,remove:i,createElement:t,patchProp:s,parentNode:a,createText:()=>{},createComment:o,setText:()=>{},setElementText:()=>{},nextSibling:l,querySelector:()=>{},setScopeId:()=>{},cloneNode:()=>{},insertStaticContent:()=>{}}};function Uw(){return ug().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ug(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Nw=typeof Proxy=="function",Ow="devtools-plugin:setup",Fw="plugin:settings:set";let bs,Eu;function Bw(){var r;return bs!==void 0||(typeof window<"u"&&window.performance?(bs=!0,Eu=window.performance):typeof globalThis<"u"&&!((r=globalThis.perf_hooks)===null||r===void 0)&&r.performance?(bs=!0,Eu=globalThis.perf_hooks.performance):bs=!1),bs}function zw(){return Bw()?Eu.now():Date.now()}class kw{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const a in e.settings){const o=e.settings[a];n[a]=o.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const a=localStorage.getItem(i),o=JSON.parse(a);Object.assign(s,o)}catch{}this.fallbacks={getSettings(){return s},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}s=a},now(){return zw()}},t&&t.on(Fw,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Vw(r,e){const t=r,n=ug(),i=Uw(),s=Nw&&t.enableEarlyProxy;if(i&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(Ow,r,e);else{const a=s?new kw(t,i):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:a}),a&&e(a.proxiedTarget)}}function Hw(r,e){const t=`▲ ■ ●${r}`;typeof bf=="function"?bf(t,e):console.log(t)}function bf(r,e){throw new Error(r+e)}const hg=r=>{const e={id:r.uuid,label:r.type,children:[],tags:[]};r.name!==""&&e.tags.push({label:r.name,textColor:5750629,backgroundColor:15793395});const t=yh(r);return t>0&&e.tags.push({label:`${yw(t)} KB`,textColor:15707189,backgroundColor:16775644,tooltip:"Memory usage"}),r.type.includes("Light")&&(Z1(r)&&e.tags.push({label:`${r.intensity}`,textColor:9738662,backgroundColor:16316922,tooltip:"Intensity"}),e.tags.push({label:`#${new ye(r.color).getHexString()}`,textColor:9738662,backgroundColor:16316922,tooltip:"Color"})),r.type.includes("Camera")&&(e.tags.push({label:`${r.fov}°`,textColor:9738662,backgroundColor:16316922,tooltip:"Field of view"}),e.tags.push({label:`x: ${Math.round(r.position.x)} y: ${Math.round(r.position.y)} z: ${Math.round(r.position.z)}`,textColor:9738662,backgroundColor:16316922,tooltip:"Position"})),e};function dg(r,e,t=""){r.children.forEach(n=>{if(n.type==="HightlightMesh"||t&&!n.type.includes(t)&&!n.name.includes(t))return;const i=hg(n);e.children.push(i),dg(n,i,t)})}const Gw=[],Ss="tres:inspector",Ww=Hg({sceneGraph:null});function Xw(r,e){Vw({id:"dev.esm.tres",label:"TresJS 🪐",logo:"https://raw.githubusercontent.com/Tresjs/tres/main/public/favicon.svg",packageName:"tresjs",homepage:"https://tresjs.org",componentStateTypes:Gw,app:r},t=>{typeof t.now!="function"&&Hw("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),t.addInspector({id:Ss,label:"TresJS 🪐",icon:"account_tree",treeFilterPlaceholder:"Search instances"}),setInterval(()=>{t.sendInspectorTree(Ss)},1e3),setInterval(()=>{t.notifyComponentUpdate()},5e3),t.on.getInspectorTree(s=>{if(s.inspectorId===Ss){const a=hg(e.scene.value);dg(e.scene.value,a,s.filter),Ww.sceneGraph=a,s.rootNodes=[a]}});let n=null,i=null;t.on.getInspectorState(s=>{var a;if(s.inspectorId===Ss){const[o]=e.scene.value.getObjectsByProperty("uuid",s.nodeId);if(!o)return;if(i&&n&&n.parent&&i.remove(n),o.isMesh){const l=ow(o);o.add(l),n=l,i=o}s.state={object:Object.entries(o).map(([l,c])=>l==="children"?{key:l,value:c.filter(u=>u.type!=="HightlightMesh")}:{key:l,value:c,editable:!0}).filter(({key:l})=>l!=="parent")},o.isScene&&(s.state.info={objects:o.children.length,memory:yh(o),calls:e.renderer.value.info.render.calls,triangles:e.renderer.value.info.render.triangles,points:e.renderer.value.info.render.points,lines:e.renderer.value.info.render.lines},s.state.programs=((a=e.renderer.value.info.programs)==null?void 0:a.map(l=>({key:l.name,value:{...l,vertexShader:l.vertexShader,attributes:l.getAttributes(),uniforms:l.getUniforms()}})))||[])}}),t.on.editInspectorState(s=>{s.inspectorId===Ss&&aw(e.scene.value,s.nodeId,s.path,s.state.value)})})}const Yw=["data-scene","data-tres"],qw=ur({__name:"TresCanvas",props:{shadows:{type:Boolean,default:void 0},clearColor:{},toneMapping:{},shadowMapType:{},useLegacyLights:{type:Boolean,default:void 0},outputColorSpace:{},toneMappingExposure:{},renderMode:{default:"always"},dpr:{},camera:{},preset:{},windowSize:{type:Boolean,default:void 0},enableProvideBridge:{type:Boolean,default:!0},context:{},alpha:{type:Boolean,default:void 0},premultipliedAlpha:{type:Boolean},antialias:{type:Boolean,default:void 0},stencil:{type:Boolean,default:void 0},preserveDrawingBuffer:{type:Boolean,default:void 0},powerPreference:{},depth:{type:Boolean,default:void 0},failIfMajorPerformanceCaveat:{type:Boolean,default:void 0},precision:{},logarithmicDepthBuffer:{type:Boolean,default:void 0},reverseDepthBuffer:{type:Boolean}},emits:["render","click","double-click","context-menu","pointer-move","pointer-up","pointer-down","pointer-enter","pointer-leave","pointer-over","pointer-out","pointer-missed","wheel","ready"],setup(r,{expose:e,emit:t}){const n=r,i=t,s=$f(),{logWarning:a}=xh(),o=Qe(),l=Tn(new mr),c=ks();Tu(KS);const u=(_,p=!1)=>ur({setup(){var g;const S=(g=ks())==null?void 0:g.appContext;S&&(S.app=c==null?void 0:c.appContext.app);const y={};function M(A){A&&(A.parent&&M(A.parent),A.provides&&Object.assign(y,A.provides))}return c!=null&&c.parent&&n.enableProvideBridge&&(M(c.parent),Reflect.ownKeys(y).forEach(A=>{Mo(A,y[A])})),Mo("useTres",_),Mo("extend",Tu),typeof window<"u"&&Xw(S==null?void 0:S.app,_),()=>Ph(iu,null,p?[]:s.default())}}),d=(_,p=!1)=>{const g=u(_,p),{render:S}=Vg(Dw(_));S(Ph(g),l.value)},h=(_,p=!1)=>{rg(_.scene.value),p&&(_.renderer.value.dispose(),_.renderer.value.renderLists.dispose(),_.renderer.value.forceContextLoss()),l.value.__tres={root:_}},f=Tn(null);e({context:f,dispose:()=>h(f.value,!0)});const m=()=>{h(f.value),d(f.value,!0)};return Pu(()=>{const _=o;f.value=Rw({scene:l.value,canvas:_,windowSize:n.windowSize??!1,rendererOptions:n,emit:i});const{registerCamera:p,camera:g,cameras:S,deregisterCamera:y}=f.value;d(f.value);const M=()=>{const A=new gt(45,window.innerWidth/window.innerHeight,.1,1e3);A.position.set(3,3,3),A.lookAt(0,0,0),p(A);const b=rs(()=>{S.value.length>=2&&(A.removeFromParent(),y(A),b==null||b())})};zt(()=>n.camera,(A,b)=>{A&&p(A),b&&(b.removeFromParent(),y(b))},{immediate:!0}),g.value||(a("No camera found. Creating a default perspective camera. To have full control over a camera, please add one to the scene."),M())}),wi(m),(_,p)=>(en(),_n("canvas",{ref_key:"canvas",ref:o,"data-scene":l.value.uuid,class:kg(_.$attrs.class),"data-tres":`tresjs ${$e(W1).version}`,style:zg({display:"block",width:"100%",height:"100%",position:_.windowSize?"fixed":"relative",top:0,left:0,pointerEvents:"auto",touchAction:"none",..._.$attrs.style})},null,14,Yw))}});var jw=Object.defineProperty,Zw=(r,e,t)=>e in r?jw(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$w=(r,e,t)=>Zw(r,e+"",t);function Jw(r){return Yf()?(qf(r),!0):!1}function fg(r){return typeof r=="function"?r():$e(r)}const Kw=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Qw=Object.prototype.toString,eT=r=>Qw.call(r)==="[object Object]",tT=()=>{},nT=Kw?window:void 0;function iT(r){var e;const t=fg(r);return(e=t==null?void 0:t.$el)!=null?e:t}function qc(...r){let e,t,n,i;if(typeof r[0]=="string"||Array.isArray(r[0])?([t,n,i]=r,e=nT):[e,t,n,i]=r,!e)return tT;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},o=(u,d,h,f)=>(u.addEventListener(d,h,f),()=>u.removeEventListener(d,h,f)),l=zt(()=>[iT(e),fg(i)],([u,d])=>{if(a(),!u)return;const h=eT(d)?{...d}:d;s.push(...t.flatMap(f=>n.map(m=>o(u,f,m,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return Jw(c),c}function pg(r,e,t,n){const i=class extends jt{constructor(s={}){const a=Object.entries(r);super({uniforms:a.reduce((o,[l,c])=>{const u=oa.clone({[l]:{value:c}});return{...o,...u}},{}),vertexShader:e,fragmentShader:t}),$w(this,"key",""),a.forEach(([o])=>Object.defineProperty(this,o,{get:()=>this.uniforms[o].value,set:l=>this.uniforms[o].value=l})),Object.assign(this,s)}};return i.key=ci.generateUUID(),i}pg({color:new ye("white"),scale:new ne(1,1),imageBounds:new ne(1,1),resolution:1024,map:null,zoom:1,radius:0,grayscale:0,opacity:1},`
    varying vec2 vUv;
    varying vec2 vPos;
    void main() {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
      vUv = uv;
      vPos = position.xy;
    }
  `,`
    // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
    varying vec2 vUv;
    varying vec2 vPos;
    uniform vec2 scale;
    uniform vec2 imageBounds;
    uniform float resolution;
    uniform vec3 color;
    uniform sampler2D map;
    uniform float radius;
    uniform float zoom;
    uniform float grayscale;
    uniform float opacity;
    const vec3 luma = vec3(.299, 0.587, 0.114);
    vec4 toGrayscale(vec4 color, float intensity) {
      return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
    }
    vec2 aspect(vec2 size) {
      return size / min(size.x, size.y);
    }
    
    const float PI = 3.14159265;
      
    // from https://iquilezles.org/articles/distfunctions
    float udRoundBox( vec2 p, vec2 b, float r ) {
      return length(max(abs(p)-b+r,0.0))-r;
    }
  
    void main() {
      vec2 s = aspect(scale);
      vec2 i = aspect(imageBounds);
      float rs = s.x / s.y;
      float ri = i.x / i.y;
      vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
      vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
      vec2 uv = vUv * s / new + offset;
      vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);
  
      vec2 res = vec2(scale * resolution);
      vec2 halfRes = 0.5 * res;
      float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    
        vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));
      gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);
      
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `);const Mh=parseInt(ss.replace(/\D+/g,""));var rT=Object.defineProperty,sT=(r,e,t)=>e in r?rT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,aT=(r,e,t)=>(sT(r,e+"",t),t);async function Sf(r){const e=await r.arrayBuffer(),t=btoa(String.fromCharCode(...new Uint8Array(e)));return`data:${r.type||""};base64,${t}`}let vo,jc,Vr,_o;function Zc(r,e=1/0,t=null){jc||(jc=new Pi(2,2,1,1)),Vr||(Vr=new jt({uniforms:{blitTexture:new jl(r)},vertexShader:`
        varying vec2 vUv;
        void main(){
            vUv = uv;
            gl_Position = vec4(position.xy * 1.0,0.,.999999);
        }
      `,fragmentShader:`
          uniform sampler2D blitTexture; 
          varying vec2 vUv;

          void main(){ 
              gl_FragColor = vec4(vUv.xy, 0, 1);
              
              #ifdef IS_SRGB
              gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
              #else
              gl_FragColor = texture2D( blitTexture, vUv);
              #endif
          }
      `})),Vr.uniforms.blitTexture.value=r,Vr.defines.IS_SRGB="colorSpace"in r?r.colorSpace==="srgb":r.encoding===3001,Vr.needsUpdate=!0,_o||(_o=new vt(jc,Vr),_o.frustrumCulled=!1);const n=new gt,i=new mr;i.add(_o),t||(t=vo=new Fs({antialias:!1})),t.setSize(Math.min(r.image.width,e),Math.min(r.image.height,e)),t.clear(),t.render(i,n);const s=new yt(t.domElement);return s.minFilter=r.minFilter,s.magFilter=r.magFilter,s.wrapS=r.wrapS,s.wrapT=r.wrapT,s.name=r.name,vo&&(vo.dispose(),vo=null),s}const wf={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class mg{constructor(){this.pluginCallbacks=[],this.register(function(e){return new gT(e)}),this.register(function(e){return new vT(e)}),this.register(function(e){return new yT(e)}),this.register(function(e){return new MT(e)}),this.register(function(e){return new bT(e)}),this.register(function(e){return new ST(e)}),this.register(function(e){return new _T(e)}),this.register(function(e){return new xT(e)}),this.register(function(e){return new wT(e)}),this.register(function(e){return new TT(e)}),this.register(function(e){return new ET(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const s=new mT,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](s));s.setPlugins(a),s.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,i,s,t)})}}aT(mg,"Utils",{insertKeyframe:function(r,e){const t=r.getValueSize(),n=new r.TimeBufferType(r.times.length+1),i=new r.ValueBufferType(r.values.length+t),s=r.createInterpolant(new r.ValueBufferType(t));let a;if(r.times.length===0){n[0]=e;for(let o=0;o<t;o++)i[o]=0;a=0}else if(e<r.times[0]){if(Math.abs(r.times[0]-e)<.001)return 0;n[0]=e,n.set(r.times,1),i.set(s.evaluate(e),0),i.set(r.values,t),a=0}else if(e>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-e)<.001)return r.times.length-1;n[n.length-1]=e,n.set(r.times,0),i.set(r.values,0),i.set(s.evaluate(e),r.values.length),a=n.length-1}else for(let o=0;o<r.times.length;o++){if(Math.abs(r.times[o]-e)<.001)return o;if(r.times[o]<e&&r.times[o+1]>e){n.set(r.times.slice(0,o+1),0),n[o+1]=e,n.set(r.times.slice(o+1),o+2),i.set(r.values.slice(0,(o+1)*t),0),i.set(s.evaluate(e),(o+1)*t),i.set(r.values.slice((o+1)*t),(o+2)*t),a=o+1;break}}return r.times=n,r.values=i,a},mergeMorphTargetTracks:function(r,e){const t=[],n={},i=r.tracks;for(let s=0;s<i.length;++s){let a=i[s];const o=it.parseTrackName(a.name),l=it.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Ws)}const c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[o.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let d;if(n[l.uuid]===void 0){d=a.clone();const f=new d.ValueBufferType(c*d.times.length);for(let m=0;m<d.times.length;m++)f[m*c+u]=d.values[m];d.name=(o.nodeName||"")+".morphTargetInfluences",d.values=f,n[l.uuid]=d,t.push(d);continue}const h=a.createInterpolant(new a.ValueBufferType(1));d=n[l.uuid];for(let f=0;f<d.times.length;f++)d.values[f*c+u]=h.evaluate(d.times[f]);for(let f=0;f<a.times.length;f++){const m=this.insertKeyframe(d,a.times[f]);d.values[m*c+u]=a.values[f]}}return r.tracks=t,r}});const rt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},$c="KHR_mesh_quantization",xn={};xn[At]=rt.NEAREST;xn[_l]=rt.NEAREST_MIPMAP_NEAREST;xn[er]=rt.NEAREST_MIPMAP_LINEAR;xn[Pt]=rt.LINEAR;xn[jr]=rt.LINEAR_MIPMAP_NEAREST;xn[Ln]=rt.LINEAR_MIPMAP_LINEAR;xn[Bt]=rt.CLAMP_TO_EDGE;xn[$r]=rt.REPEAT;xn[Jr]=rt.MIRRORED_REPEAT;const Tf={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},oT=new ye,Ef=12,lT=1179937895,cT=2,Af=8,uT=1313821514,hT=5130562;function As(r,e){return r.length===e.length&&r.every(function(t,n){return t===e[n]})}function dT(r){return new TextEncoder().encode(r).buffer}function fT(r){return As(r.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function pT(r,e,t){const n={min:new Array(r.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(r.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let s=0;s<r.itemSize;s++){let a;r.itemSize>4?a=r.array[i*r.itemSize+s]:(s===0?a=r.getX(i):s===1?a=r.getY(i):s===2?a=r.getZ(i):s===3&&(a=r.getW(i)),r.normalized===!0&&(a=ci.normalize(a,r.array))),n.min[s]=Math.min(n.min[s],a),n.max[s]=Math.max(n.max[s],a)}return n}function gg(r){return Math.ceil(r/4)*4}function Jc(r,e=0){const t=gg(r.byteLength);if(t!==r.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(r)),e!==0)for(let i=r.byteLength;i<t;i++)n[i]=e;return n.buffer}return r}function Cf(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Rf(r,e){if(r.toBlob!==void 0)return new Promise(n=>r.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),r.convertToBlob({type:e,quality:t})}class mT{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,s=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(s,{type:"application/octet-stream"}),u=Object.keys(o),d=Object.keys(l);u.length>0&&(a.extensionsUsed=u),d.length>0&&(a.extensionsRequired=d),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0?c.arrayBuffer().then(h=>{const f=Jc(h),m=new DataView(new ArrayBuffer(Af));m.setUint32(0,f.byteLength,!0),m.setUint32(4,hT,!0);const _=Jc(dT(JSON.stringify(a)),32),p=new DataView(new ArrayBuffer(Af));p.setUint32(0,_.byteLength,!0),p.setUint32(4,uT,!0);const g=new ArrayBuffer(Ef),S=new DataView(g);S.setUint32(0,lT,!0),S.setUint32(4,cT,!0);const y=Ef+p.byteLength+_.byteLength+m.byteLength+f.byteLength;S.setUint32(8,y,!0),new Blob([g,p,_,m,f],{type:"application/octet-stream"}).arrayBuffer().then(t)}):a.buffers&&a.buffers.length>0?Sf(c).then(h=>{a.buffers[0].uri=h,t(a)}):t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in s.gltfExtensions)t.extensions[a]=s.gltfExtensions[a],i[a]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const n=new Map;n.set(!0,this.uid++),n.set(!1,this.uid++),this.uids.set(e,n)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const t=new U;for(let n=0,i=e.count;n<i;n++)if(Math.abs(t.fromBufferAttribute(e,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new U;for(let s=0,a=n.count;s<a;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(h){return("colorSpace"in h?h.colorSpace==="srgb":h.encoding===3001)?function(f){return f<.04045?f*.0773993808:Math.pow(f*.9478672986+.0521327014,2.4)}:function(f){return f}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof lr&&(e=Zc(e)),t instanceof lr&&(t=Zc(t));const i=e?e.image:null,s=t?t.image:null,a=Math.max(i?i.width:0,s?s.width:0),o=Math.max(i?i.height:0,s?s.height:0),l=Cf();l.width=a,l.height=o;const c=l.getContext("2d");c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const u=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);const h=n(e),f=c.getImageData(0,0,a,o).data;for(let m=2;m<f.length;m+=4)u.data[m]=h(f[m]/256)*256}if(s){c.drawImage(s,0,0,a,o);const h=n(t),f=c.getImageData(0,0,a,o).data;for(let m=1;m<f.length;m+=4)u.data[m]=h(f[m]/256)*256}c.putImageData(u,0,0);const d=(e||t).clone();return d.source=new yt(l).source,"colorSpace"in d?d.colorSpace="":d.encoding=3e3,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,s){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case rt.BYTE:case rt.UNSIGNED_BYTE:o=1;break;case rt.SHORT:case rt.UNSIGNED_SHORT:o=2;break;default:o=4}const l=gg(i*e.itemSize*o),c=new DataView(new ArrayBuffer(l));let u=0;for(let h=n;h<n+i;h++)for(let f=0;f<e.itemSize;f++){let m;e.itemSize>4?m=e.array[h*e.itemSize+f]:(f===0?m=e.getX(h):f===1?m=e.getY(h):f===2?m=e.getZ(h):f===3&&(m=e.getW(h)),e.normalized===!0&&(m=ci.normalize(m,e.array))),t===rt.FLOAT?c.setFloat32(u,m,!0):t===rt.INT?c.setInt32(u,m,!0):t===rt.UNSIGNED_INT?c.setUint32(u,m,!0):t===rt.SHORT?c.setInt16(u,m,!0):t===rt.UNSIGNED_SHORT?c.setUint16(u,m,!0):t===rt.BYTE?c.setInt8(u,m):t===rt.UNSIGNED_BYTE&&c.setUint8(u,m),u+=o}const d={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:l};return s!==void 0&&(d.target=s),s===rt.ARRAY_BUFFER&&(d.byteStride=e.itemSize*o),this.byteOffset+=l,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),e.arrayBuffer().then(i=>{const s=Jc(i),a={buffer:t.processBuffer(s),byteOffset:t.byteOffset,byteLength:s.byteLength};return t.byteOffset+=s.byteLength,n.bufferViews.push(a)-1})}processAccessor(e,t,n,i){const s=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=rt.FLOAT;else if(e.array.constructor===Int32Array)o=rt.INT;else if(e.array.constructor===Uint32Array)o=rt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=rt.SHORT;else if(e.array.constructor===Uint16Array)o=rt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=rt.BYTE;else if(e.array.constructor===Uint8Array)o=rt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),i===void 0&&(i=e.count),i===0)return null;const l=pT(e,n,i);let c;t!==void 0&&(c=e===t.index?rt.ELEMENT_ARRAY_BUFFER:rt.ARRAY_BUFFER);const u=this.processBufferView(e,o,n,i,c),d={bufferView:u.id,byteOffset:u.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(d)-1}processImage(e,t,n,i="image/png"){if(e!==null){const s=this,a=s.cache,o=s.json,l=s.options,c=s.pending;a.images.has(e)||a.images.set(e,{});const u=a.images.get(e),d=i+":flipY/"+n.toString();if(u[d]!==void 0)return u[d];o.images||(o.images=[]);const h={mimeType:i},f=Cf();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);const m=f.getContext("2d");if(n===!0&&(m.translate(0,f.height),m.scale(1,-1)),e.data!==void 0){t!==Nt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const p=new Uint8ClampedArray(e.height*e.width*4);for(let g=0;g<p.length;g+=4)p[g+0]=e.data[g+0],p[g+1]=e.data[g+1],p[g+2]=e.data[g+2],p[g+3]=e.data[g+3];m.putImageData(new ImageData(p,e.width,e.height),0,0)}else m.drawImage(e,0,0,f.width,f.height);l.binary===!0?c.push(Rf(f,i).then(p=>s.processBufferViewImage(p)).then(p=>{h.bufferView=p})):f.toDataURL!==void 0?h.uri=f.toDataURL(i):c.push(Rf(f,i).then(Sf).then(p=>{h.uri=p}));const _=o.images.push(h)-1;return u[d]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:xn[e.magFilter],minFilter:xn[e.minFilter],wrapS:xn[e.wrapS],wrapT:xn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const t=this.options,n=this.cache,i=this.json;if(n.textures.has(e))return n.textures.get(e);i.textures||(i.textures=[]),e instanceof lr&&(e=Zc(e,t.maxTextureSize));let s=e.userData.mimeType;s==="image/webp"&&(s="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,s)};e.name&&(a.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,a)});const o=i.textures.push(a)-1;return n.textures.set(e,o),o}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(As(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),i.emissiveTexture=l}}if(e.normalMap){const o={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===hn&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let y=0,M=e.material.length;y<M;y++)i.push(e.material[y].uuid);else i.push(e.material.uuid);const s=i.join(":");if(t.meshes.has(s))return t.meshes.get(s);const a=e.geometry;let o;e.isLineSegments?o=rt.LINES:e.isLineLoop?o=rt.LINE_LOOP:e.isLine?o=rt.LINE_STRIP:e.isPoints?o=rt.POINTS:o=e.material.wireframe?rt.LINES:rt.TRIANGLES;const l={},c={},u=[],d=[],h={...Mh>=152?{uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3"}:{uv:"TEXCOORD_0",uv2:"TEXCOORD_1"},color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let m=null;for(let y in a.attributes){if(y.slice(0,5)==="morph")continue;const M=a.attributes[y];if(y=h[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),t.attributes.has(this.getUID(M))){c[y]=t.attributes.get(this.getUID(M));continue}m=null;const A=M.array;y==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new ct(new Uint16Array(A),M.itemSize,M.normalized));const b=this.processAccessor(m||M,a);b!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,M),c[y]=b,t.attributes.set(this.getUID(M),b))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const y=[],M=[],A={};if(e.morphTargetDictionary!==void 0)for(const b in e.morphTargetDictionary)A[e.morphTargetDictionary[b]]=b;for(let b=0;b<e.morphTargetInfluences.length;++b){const T={};let w=!1;for(const x in a.morphAttributes){if(x!=="position"&&x!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}const v=a.morphAttributes[x][b],E=x.toUpperCase(),P=a.attributes[x];if(t.attributes.has(this.getUID(v,!0))){T[E]=t.attributes.get(this.getUID(v,!0));continue}const O=v.clone();if(!a.morphTargetsRelative)for(let F=0,H=v.count;F<H;F++)for(let B=0;B<v.itemSize;B++)B===0&&O.setX(F,v.getX(F)-P.getX(F)),B===1&&O.setY(F,v.getY(F)-P.getY(F)),B===2&&O.setZ(F,v.getZ(F)-P.getZ(F)),B===3&&O.setW(F,v.getW(F)-P.getW(F));T[E]=this.processAccessor(O,a),t.attributes.set(this.getUID(P,!0),T[E])}d.push(T),y.push(e.morphTargetInfluences[b]),e.morphTargetDictionary!==void 0&&M.push(A[b])}l.weights=y,M.length>0&&(l.extras={},l.extras.targetNames=M)}const _=Array.isArray(e.material);if(_&&a.groups.length===0)return null;const p=_?e.material:[e.material],g=_?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,M=g.length;y<M;y++){const A={mode:o,attributes:c};if(this.serializeUserData(a,A),d.length>0&&(A.targets=d),a.index!==null){let T=this.getUID(a.index);(g[y].start!==void 0||g[y].count!==void 0)&&(T+=":"+g[y].start+":"+g[y].count),t.attributes.has(T)?A.indices=t.attributes.get(T):(A.indices=this.processAccessor(a.index,a,g[y].start,g[y].count),t.attributes.set(T,A.indices)),A.indices===null&&delete A.indices}const b=this.processMaterial(p[g[y].materialIndex]);b!==null&&(A.material=b),u.push(A)}l.primitives=u,n.meshes||(n.meshes=[]),this._invokeAll(function(y){y.writeMesh&&y.writeMesh(e,l)});const S=n.meshes.push(l)-1;return t.meshes.set(s,S),S}detectMeshQuantization(e,t){if(this.extensionsUsed[$c])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];wf[i]&&wf[i].includes(n)&&(this.extensionsUsed[$c]=!0,this.extensionsRequired[$c]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:ci.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=mg.Utils.mergeMorphTargetTracks(e.clone(),t);const s=e.tracks,a=[],o=[];for(let l=0;l<s.length;++l){const c=s[l],u=it.parseTrackName(c.name);let d=it.findNode(t,u.nodeName);const h=Tf[u.propertyName];if(u.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(u.objectIndex):d=void 0),!d||!h)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name),null;const f=1;let m=c.values.length/c.times.length;h===Tf.morphTargetInfluences&&(m/=d.morphTargetInfluences.length);let _;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",m/=3):c.getInterpolation()===Qr?_="STEP":_="LINEAR",o.push({input:this.processAccessor(new ct(c.times,f)),output:this.processAccessor(new ct(c.values,m)),interpolation:_}),a.push({sampler:o.length-1,target:{node:i.get(d),path:h}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(s.bones.length*16),c=new Be;for(let u=0;u<s.bones.length;++u)o.push(n.get(s.bones[u])),c.copy(s.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ct(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();As(o,[0,0,0,1])||(s.rotation=o),As(l,[0,0,0])||(s.translation=l),As(c,[1,1,1])||(s.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),fT(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(s.mesh=o)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const u=e.children[l];if(u.visible||n.onlyVisible===!1){const d=this.processNode(u);d!==null&&o.push(d)}}o.length>0&&(s.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,s)});const a=t.nodes.push(s)-1;return i.set(e,a),a}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const s=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&s.push(c)}}s.length>0&&(i.nodes=s),this.serializeUserData(e,i)}processObjects(e){const t=new mr;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof mr?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class gT{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,s=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}let vT=class{constructor(r){this.writer=r,this.name="KHR_materials_unlit"}writeMaterial(r,e){if(!r.isMeshBasicMaterial)return;const t=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},t[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}},_T=class{constructor(r){this.writer=r,this.name="KHR_materials_clearcoat"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.clearcoat===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.clearcoatFactor=r.clearcoat,r.clearcoatMap){const s={index:t.processTexture(r.clearcoatMap),texCoord:r.clearcoatMap.channel};t.applyTextureTransform(s,r.clearcoatMap),i.clearcoatTexture=s}if(i.clearcoatRoughnessFactor=r.clearcoatRoughness,r.clearcoatRoughnessMap){const s={index:t.processTexture(r.clearcoatRoughnessMap),texCoord:r.clearcoatRoughnessMap.channel};t.applyTextureTransform(s,r.clearcoatRoughnessMap),i.clearcoatRoughnessTexture=s}if(r.clearcoatNormalMap){const s={index:t.processTexture(r.clearcoatNormalMap),texCoord:r.clearcoatNormalMap.channel};t.applyTextureTransform(s,r.clearcoatNormalMap),i.clearcoatNormalTexture=s}e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},xT=class{constructor(r){this.writer=r,this.name="KHR_materials_iridescence"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.iridescence===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.iridescenceFactor=r.iridescence,r.iridescenceMap){const s={index:t.processTexture(r.iridescenceMap),texCoord:r.iridescenceMap.channel};t.applyTextureTransform(s,r.iridescenceMap),i.iridescenceTexture=s}if(i.iridescenceIor=r.iridescenceIOR,i.iridescenceThicknessMinimum=r.iridescenceThicknessRange[0],i.iridescenceThicknessMaximum=r.iridescenceThicknessRange[1],r.iridescenceThicknessMap){const s={index:t.processTexture(r.iridescenceThicknessMap),texCoord:r.iridescenceThicknessMap.channel};t.applyTextureTransform(s,r.iridescenceThicknessMap),i.iridescenceThicknessTexture=s}e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},yT=class{constructor(r){this.writer=r,this.name="KHR_materials_transmission"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.transmission===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.transmissionFactor=r.transmission,r.transmissionMap){const s={index:t.processTexture(r.transmissionMap),texCoord:r.transmissionMap.channel};t.applyTextureTransform(s,r.transmissionMap),i.transmissionTexture=s}e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},MT=class{constructor(r){this.writer=r,this.name="KHR_materials_volume"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.transmission===0)return;const t=this.writer,n=t.extensionsUsed,i={};if(i.thicknessFactor=r.thickness,r.thicknessMap){const s={index:t.processTexture(r.thicknessMap),texCoord:r.thicknessMap.channel};t.applyTextureTransform(s,r.thicknessMap),i.thicknessTexture=s}i.attenuationDistance=r.attenuationDistance,i.attenuationColor=r.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},bT=class{constructor(r){this.writer=r,this.name="KHR_materials_ior"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.ior===1.5)return;const t=this.writer.extensionsUsed,n={};n.ior=r.ior,e.extensions=e.extensions||{},e.extensions[this.name]=n,t[this.name]=!0}},ST=class{constructor(r){this.writer=r,this.name="KHR_materials_specular"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.specularIntensity===1&&r.specularColor.equals(oT)&&!r.specularIntensityMap&&!r.specularColorTexture)return;const t=this.writer,n=t.extensionsUsed,i={};if(r.specularIntensityMap){const s={index:t.processTexture(r.specularIntensityMap),texCoord:r.specularIntensityMap.channel};t.applyTextureTransform(s,r.specularIntensityMap),i.specularTexture=s}if(r.specularColorMap){const s={index:t.processTexture(r.specularColorMap),texCoord:r.specularColorMap.channel};t.applyTextureTransform(s,r.specularColorMap),i.specularColorTexture=s}i.specularFactor=r.specularIntensity,i.specularColorFactor=r.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},wT=class{constructor(r){this.writer=r,this.name="KHR_materials_sheen"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.sheen==0)return;const t=this.writer,n=t.extensionsUsed,i={};if(r.sheenRoughnessMap){const s={index:t.processTexture(r.sheenRoughnessMap),texCoord:r.sheenRoughnessMap.channel};t.applyTextureTransform(s,r.sheenRoughnessMap),i.sheenRoughnessTexture=s}if(r.sheenColorMap){const s={index:t.processTexture(r.sheenColorMap),texCoord:r.sheenColorMap.channel};t.applyTextureTransform(s,r.sheenColorMap),i.sheenColorTexture=s}i.sheenRoughnessFactor=r.sheenRoughness,i.sheenColorFactor=r.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},TT=class{constructor(r){this.writer=r,this.name="KHR_materials_anisotropy"}writeMaterial(r,e){if(!r.isMeshPhysicalMaterial||r.anisotropy==0)return;const t=this.writer,n=t.extensionsUsed,i={};if(r.anisotropyMap){const s={index:t.processTexture(r.anisotropyMap)};t.applyTextureTransform(s,r.anisotropyMap),i.anisotropyTexture=s}i.anisotropyStrength=r.anisotropy,i.anisotropyRotation=r.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}},ET=class{constructor(r){this.writer=r,this.name="KHR_materials_emissive_strength"}writeMaterial(r,e){if(!r.isMeshStandardMaterial||r.emissiveIntensity===1)return;const t=this.writer.extensionsUsed,n={};n.emissiveStrength=r.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=n,t[this.name]=!0}};var _a=Uint8Array,vg=Uint16Array,AT=Uint32Array,CT=new _a([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),RT=new _a([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_g=function(r,e){for(var t=new vg(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new AT(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},xg=_g(CT,2),IT=xg[0],PT=xg[1];IT[28]=258,PT[258]=28;_g(RT,0);var LT=new vg(32768);for(var _t=0;_t<32768;++_t){var Mi=(_t&43690)>>>1|(_t&21845)<<1;Mi=(Mi&52428)>>>2|(Mi&13107)<<2,Mi=(Mi&61680)>>>4|(Mi&3855)<<4,LT[_t]=((Mi&65280)>>>8|(Mi&255)<<8)>>>1}var Jl=new _a(288);for(var _t=0;_t<144;++_t)Jl[_t]=8;for(var _t=144;_t<256;++_t)Jl[_t]=9;for(var _t=256;_t<280;++_t)Jl[_t]=7;for(var _t=280;_t<288;++_t)Jl[_t]=8;var DT=new _a(32);for(var _t=0;_t<32;++_t)DT[_t]=5;var UT=new _a(0),NT=typeof TextDecoder<"u"&&new TextDecoder,OT=0;try{NT.decode(UT,{stream:!0}),OT=1}catch{}var FT=Object.defineProperty,BT=(r,e,t)=>e in r?FT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,zT=(r,e,t)=>(BT(r,e+"",t),t);const yg=class extends vt{constructor(r,e={}){super(r),this.isReflector=!0,this.type="Reflector",this.camera=new gt;const t=this,n=e.color!==void 0?new ye(e.color):new ye(8355711),i=e.textureWidth||512,s=e.textureHeight||512,a=e.clipBias||0,o=e.shader||yg.ReflectorShader,l=e.multisample!==void 0?e.multisample:4,c=new Vn,u=new U,d=new U,h=new U,f=new Be,m=new U(0,0,-1),_=new nt,p=new U,g=new U,S=new nt,y=new Be,M=this.camera,A=new On(i,s,{samples:l,type:_r}),b=new jt({uniforms:oa.clone(o.uniforms),fragmentShader:o.fragmentShader,vertexShader:o.vertexShader});b.uniforms.tDiffuse.value=A.texture,b.uniforms.color.value=n,b.uniforms.textureMatrix.value=y,this.material=b,this.onBeforeRender=function(T,w,x){if(d.setFromMatrixPosition(t.matrixWorld),h.setFromMatrixPosition(x.matrixWorld),f.extractRotation(t.matrixWorld),u.set(0,0,1),u.applyMatrix4(f),p.subVectors(d,h),p.dot(u)>0)return;p.reflect(u).negate(),p.add(d),f.extractRotation(x.matrixWorld),m.set(0,0,-1),m.applyMatrix4(f),m.add(h),g.subVectors(d,m),g.reflect(u).negate(),g.add(d),M.position.copy(p),M.up.set(0,1,0),M.up.applyMatrix4(f),M.up.reflect(u),M.lookAt(g),M.far=x.far,M.updateMatrixWorld(),M.projectionMatrix.copy(x.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(M.projectionMatrix),y.multiply(M.matrixWorldInverse),y.multiply(t.matrixWorld),c.setFromNormalAndCoplanarPoint(u,d),c.applyMatrix4(M.matrixWorldInverse),_.set(c.normal.x,c.normal.y,c.normal.z,c.constant);const v=M.projectionMatrix;S.x=(Math.sign(_.x)+v.elements[8])/v.elements[0],S.y=(Math.sign(_.y)+v.elements[9])/v.elements[5],S.z=-1,S.w=(1+v.elements[10])/v.elements[14],_.multiplyScalar(2/_.dot(S)),v.elements[2]=_.x,v.elements[6]=_.y,v.elements[10]=_.z+1-a,v.elements[14]=_.w,t.visible=!1;const E=T.getRenderTarget(),P=T.xr.enabled,O=T.shadowMap.autoUpdate,F=T.toneMapping;let H=!1;"outputColorSpace"in T?H=T.outputColorSpace==="srgb":H=T.outputEncoding===3001,T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,"outputColorSpace"in T?T.outputColorSpace="srgb-linear":T.outputEncoding=3e3,T.toneMapping=Nn,T.setRenderTarget(A),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(w,M),T.xr.enabled=P,T.shadowMap.autoUpdate=O,T.toneMapping=F,"outputColorSpace"in T?T.outputColorSpace=H?"srgb":"srgb-linear":T.outputEncoding=H?3001:3e3,T.setRenderTarget(E);const B=x.viewport;B!==void 0&&T.state.viewport(B),t.visible=!0},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),t.material.dispose()}}};let Au=yg;zT(Au,"ReflectorShader",{uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <${Mh>=154?"colorspace_fragment":"encodings_fragment"}>

		}`});var kT=Object.defineProperty,VT=(r,e,t)=>e in r?kT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Mg=(r,e,t)=>(VT(r,typeof e!="symbol"?e+"":e,t),t);const Kl=new et,HT=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),bg=new ua(HT,5);Kl.setIndex([0,1,2,0,2,3]);Kl.setAttribute("position",new ui(bg,3,0,!1));Kl.setAttribute("uv",new ui(bg,2,3,!1));const Cu=class extends vt{constructor(){super(Cu.Geometry,new Wn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const r=new U,e=new U,t=new En(new Uint8Array(16*16*3),16,16,Nt);t.minFilter=At,t.magFilter=At,t.wrapS=Bt,t.wrapT=Bt;const n=new En(new Uint8Array(16*16*3),16,16,Nt);n.minFilter=At,n.magFilter=At,n.wrapS=Bt,n.wrapT=Bt;const i=Cu.Geometry,s=new Os({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),a=new Os({uniforms:{map:{value:t},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),o=new vt(i,s),l=[],c=Sg.Shader,u=new Os({uniforms:{map:{value:null},occlusionMap:{value:n},color:{value:new ye(16777215)},scale:{value:new ne},screenPosition:{value:new U}},vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Ao,transparent:!0,depthWrite:!1}),d=new vt(i,u);this.addElement=function(p){l.push(p)};const h=new ne,f=new ne,m=new Vm,_=new nt;this.onBeforeRender=function(p,g,S){p.getCurrentViewport(_);const y=_.w/_.z,M=_.z/2,A=_.w/2;let b=16/_.w;if(h.set(b*y,b),m.min.set(_.x,_.y),m.max.set(_.x+(_.z-16),_.y+(_.w-16)),e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(S.matrixWorldInverse),!(e.z>0)&&(r.copy(e).applyMatrix4(S.projectionMatrix),f.x=_.x+r.x*M+M-8,f.y=_.y+r.y*A+A-8,m.containsPoint(f))){p.copyFramebufferToTexture(f,t);let T=s.uniforms;T.scale.value=h,T.screenPosition.value=r,p.renderBufferDirect(S,null,i,s,o,null),p.copyFramebufferToTexture(f,n),T=a.uniforms,T.scale.value=h,T.screenPosition.value=r,p.renderBufferDirect(S,null,i,a,o,null);const w=-r.x*2,x=-r.y*2;for(let v=0,E=l.length;v<E;v++){const P=l[v],O=u.uniforms;O.color.value.copy(P.color),O.map.value=P.texture,O.screenPosition.value.x=r.x+w*P.distance,O.screenPosition.value.y=r.y+x*P.distance,b=P.size/_.w;const F=_.w/_.z;O.scale.value.set(b*F,b),u.uniformsNeedUpdate=!0,p.renderBufferDirect(S,null,i,u,d,null)}}},this.dispose=function(){s.dispose(),a.dispose(),u.dispose(),t.dispose(),n.dispose();for(let p=0,g=l.length;p<g;p++)l[p].texture.dispose()}}};let GT=Cu;Mg(GT,"Geometry",Kl);class Sg{constructor(e,t=1,n=0,i=new ye(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}Mg(Sg,"Shader",{uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`});var WT=Object.defineProperty,XT=(r,e,t)=>e in r?WT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,wg=(r,e,t)=>(XT(r,typeof e!="symbol"?e+"":e,t),t);const Eo={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,fragmentShader:`
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${Mh>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},Tg=new jt({name:"SkyShader",fragmentShader:Eo.fragmentShader,vertexShader:Eo.vertexShader,uniforms:oa.clone(Eo.uniforms),side:Yt,depthWrite:!1});class Eg extends vt{constructor(){super(new Ri(1,1,1),Tg)}}wg(Eg,"SkyShader",Eo);wg(Eg,"material",Tg);new nn;new U;new rn(0,0,0,"YXZ");new U;var YT=Object.defineProperty,qT=(r,e,t)=>e in r?YT(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ke=(r,e,t)=>(qT(r,typeof e!="symbol"?e+"":e,t),t);const xo=new xr,If=new Vn,jT=Math.cos(70*(Math.PI/180)),Pf=(r,e)=>(r%e+e)%e;class ZT extends Fn{constructor(e,t){super(),ke(this,"object"),ke(this,"domElement"),ke(this,"enabled",!0),ke(this,"target",new U),ke(this,"minDistance",0),ke(this,"maxDistance",1/0),ke(this,"minZoom",0),ke(this,"maxZoom",1/0),ke(this,"minPolarAngle",0),ke(this,"maxPolarAngle",Math.PI),ke(this,"minAzimuthAngle",-1/0),ke(this,"maxAzimuthAngle",1/0),ke(this,"enableDamping",!1),ke(this,"dampingFactor",.05),ke(this,"enableZoom",!0),ke(this,"zoomSpeed",1),ke(this,"enableRotate",!0),ke(this,"rotateSpeed",1),ke(this,"enablePan",!0),ke(this,"panSpeed",1),ke(this,"screenSpacePanning",!0),ke(this,"keyPanSpeed",7),ke(this,"zoomToCursor",!1),ke(this,"autoRotate",!1),ke(this,"autoRotateSpeed",2),ke(this,"reverseOrbit",!1),ke(this,"reverseHorizontalOrbit",!1),ke(this,"reverseVerticalOrbit",!1),ke(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ke(this,"mouseButtons",{LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN}),ke(this,"touches",{ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN}),ke(this,"target0"),ke(this,"position0"),ke(this,"zoom0"),ke(this,"_domElementKeyEvents",null),ke(this,"getPolarAngle"),ke(this,"getAzimuthalAngle"),ke(this,"setPolarAngle"),ke(this,"setAzimuthalAngle"),ke(this,"getDistance"),ke(this,"getZoomScale"),ke(this,"listenToKeyEvents"),ke(this,"stopListenToKeyEvents"),ke(this,"saveState"),ke(this,"reset"),ke(this,"update"),ke(this,"connect"),ke(this,"dispose"),ke(this,"dollyIn"),ke(this,"dollyOut"),ke(this,"getScale"),ke(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=W=>{let se=Pf(W,2*Math.PI),Ce=u.phi;Ce<0&&(Ce+=2*Math.PI),se<0&&(se+=2*Math.PI);let k=Math.abs(se-Ce);2*Math.PI-k<k&&(se<Ce?se+=2*Math.PI:Ce+=2*Math.PI),d.phi=se-Ce,n.update()},this.setAzimuthalAngle=W=>{let se=Pf(W,2*Math.PI),Ce=u.theta;Ce<0&&(Ce+=2*Math.PI),se<0&&(se+=2*Math.PI);let k=Math.abs(se-Ce);2*Math.PI-k<k&&(se<Ce?se+=2*Math.PI:Ce+=2*Math.PI),d.theta=se-Ce,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=W=>{W.addEventListener("keydown",we),this._domElementKeyEvents=W},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),l=o.NONE},this.update=(()=>{const W=new U,se=new U(0,1,0),Ce=new qt().setFromUnitVectors(e.up,se),k=Ce.clone().invert(),xe=new U,Q=new qt,ue=2*Math.PI;return function(){const Re=n.object.position;Ce.setFromUnitVectors(e.up,se),k.copy(Ce).invert(),W.copy(Re).sub(n.target),W.applyQuaternion(Ce),u.setFromVector3(W),n.autoRotate&&l===o.NONE&&F(P()),n.enableDamping?(u.theta+=d.theta*n.dampingFactor,u.phi+=d.phi*n.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let be=n.minAzimuthAngle,He=n.maxAzimuthAngle;isFinite(be)&&isFinite(He)&&(be<-Math.PI?be+=ue:be>Math.PI&&(be-=ue),He<-Math.PI?He+=ue:He>Math.PI&&(He-=ue),be<=He?u.theta=Math.max(be,Math.min(He,u.theta)):u.theta=u.theta>(be+He)/2?Math.max(be,u.theta):Math.min(He,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.zoomToCursor&&x||n.object.isOrthographicCamera?u.radius=Fe(u.radius):u.radius=Fe(u.radius*h),W.setFromSpherical(u),W.applyQuaternion(k),Re.copy(n.target).add(W),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),f.set(0,0,0));let pt=!1;if(n.zoomToCursor&&x){let bt=null;if(n.object instanceof gt&&n.object.isPerspectiveCamera){const st=W.length();bt=Fe(st*h);const Ht=st-bt;n.object.position.addScaledVector(T,Ht),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const st=new U(w.x,w.y,0);st.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),pt=!0;const Ht=new U(w.x,w.y,0);Ht.unproject(n.object),n.object.position.sub(Ht).add(st),n.object.updateMatrixWorld(),bt=W.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;bt!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(bt).add(n.object.position):(xo.origin.copy(n.object.position),xo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(xo.direction))<jT?e.lookAt(n.target):(If.setFromNormalAndCoplanarPoint(n.object.up,n.target),xo.intersectPlane(If,n.target))))}else n.object instanceof si&&n.object.isOrthographicCamera&&(pt=h!==1,pt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix()));return h=1,x=!1,pt||xe.distanceToSquared(n.object.position)>c||8*(1-Q.dot(n.object.quaternion))>c?(n.dispatchEvent(i),xe.copy(n.object.position),Q.copy(n.object.quaternion),pt=!1,!0):!1}})(),this.connect=W=>{n.domElement=W,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",te),n.domElement.addEventListener("wheel",Ue)},this.dispose=()=>{var W,se,Ce,k,xe,Q;n.domElement&&(n.domElement.style.touchAction="auto"),(W=n.domElement)==null||W.removeEventListener("contextmenu",ve),(se=n.domElement)==null||se.removeEventListener("pointerdown",C),(Ce=n.domElement)==null||Ce.removeEventListener("pointercancel",te),(k=n.domElement)==null||k.removeEventListener("wheel",Ue),(xe=n.domElement)==null||xe.ownerDocument.removeEventListener("pointermove",j),(Q=n.domElement)==null||Q.ownerDocument.removeEventListener("pointerup",te),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",we)};const n=this,i={type:"change"},s={type:"start"},a={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=o.NONE;const c=1e-6,u=new gu,d=new gu;let h=1;const f=new U,m=new ne,_=new ne,p=new ne,g=new ne,S=new ne,y=new ne,M=new ne,A=new ne,b=new ne,T=new U,w=new ne;let x=!1;const v=[],E={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function F(W){n.reverseOrbit||n.reverseHorizontalOrbit?d.theta+=W:d.theta-=W}function H(W){n.reverseOrbit||n.reverseVerticalOrbit?d.phi+=W:d.phi-=W}const B=(()=>{const W=new U;return function(se,Ce){W.setFromMatrixColumn(Ce,0),W.multiplyScalar(-se),f.add(W)}})(),ie=(()=>{const W=new U;return function(se,Ce){n.screenSpacePanning===!0?W.setFromMatrixColumn(Ce,1):(W.setFromMatrixColumn(Ce,0),W.crossVectors(n.object.up,W)),W.multiplyScalar(se),f.add(W)}})(),Y=(()=>{const W=new U;return function(se,Ce){const k=n.domElement;if(k&&n.object instanceof gt&&n.object.isPerspectiveCamera){const xe=n.object.position;W.copy(xe).sub(n.target);let Q=W.length();Q*=Math.tan(n.object.fov/2*Math.PI/180),B(2*se*Q/k.clientHeight,n.object.matrix),ie(2*Ce*Q/k.clientHeight,n.object.matrix)}else k&&n.object instanceof si&&n.object.isOrthographicCamera?(B(se*(n.object.right-n.object.left)/n.object.zoom/k.clientWidth,n.object.matrix),ie(Ce*(n.object.top-n.object.bottom)/n.object.zoom/k.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function le(W){n.object instanceof gt&&n.object.isPerspectiveCamera||n.object instanceof si&&n.object.isOrthographicCamera?h=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(W){le(h/W)}function Z(W){le(h*W)}function Te(W){if(!n.zoomToCursor||!n.domElement)return;x=!0;const se=n.domElement.getBoundingClientRect(),Ce=W.clientX-se.left,k=W.clientY-se.top,xe=se.width,Q=se.height;w.x=Ce/xe*2-1,w.y=-(k/Q)*2+1,T.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function Fe(W){return Math.max(n.minDistance,Math.min(n.maxDistance,W))}function J(W){m.set(W.clientX,W.clientY)}function de(W){Te(W),M.set(W.clientX,W.clientY)}function Me(W){g.set(W.clientX,W.clientY)}function pe(W){_.set(W.clientX,W.clientY),p.subVectors(_,m).multiplyScalar(n.rotateSpeed);const se=n.domElement;se&&(F(2*Math.PI*p.x/se.clientHeight),H(2*Math.PI*p.y/se.clientHeight)),m.copy(_),n.update()}function ee(W){A.set(W.clientX,W.clientY),b.subVectors(A,M),b.y>0?ce(O()):b.y<0&&Z(O()),M.copy(A),n.update()}function R(W){S.set(W.clientX,W.clientY),y.subVectors(S,g).multiplyScalar(n.panSpeed),Y(y.x,y.y),g.copy(S),n.update()}function N(W){Te(W),W.deltaY<0?Z(O()):W.deltaY>0&&ce(O()),n.update()}function z(W){let se=!1;switch(W.code){case n.keys.UP:Y(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:Y(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:Y(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:Y(-n.keyPanSpeed,0),se=!0;break}se&&(W.preventDefault(),n.update())}function G(){if(v.length==1)m.set(v[0].pageX,v[0].pageY);else{const W=.5*(v[0].pageX+v[1].pageX),se=.5*(v[0].pageY+v[1].pageY);m.set(W,se)}}function V(){if(v.length==1)g.set(v[0].pageX,v[0].pageY);else{const W=.5*(v[0].pageX+v[1].pageX),se=.5*(v[0].pageY+v[1].pageY);g.set(W,se)}}function I(){const W=v[0].pageX-v[1].pageX,se=v[0].pageY-v[1].pageY,Ce=Math.sqrt(W*W+se*se);M.set(0,Ce)}function he(){n.enableZoom&&I(),n.enablePan&&V()}function re(){n.enableZoom&&I(),n.enableRotate&&G()}function me(W){if(v.length==1)_.set(W.pageX,W.pageY);else{const Ce=Pe(W),k=.5*(W.pageX+Ce.x),xe=.5*(W.pageY+Ce.y);_.set(k,xe)}p.subVectors(_,m).multiplyScalar(n.rotateSpeed);const se=n.domElement;se&&(F(2*Math.PI*p.x/se.clientHeight),H(2*Math.PI*p.y/se.clientHeight)),m.copy(_)}function ae(W){if(v.length==1)S.set(W.pageX,W.pageY);else{const se=Pe(W),Ce=.5*(W.pageX+se.x),k=.5*(W.pageY+se.y);S.set(Ce,k)}y.subVectors(S,g).multiplyScalar(n.panSpeed),Y(y.x,y.y),g.copy(S)}function Se(W){const se=Pe(W),Ce=W.pageX-se.x,k=W.pageY-se.y,xe=Math.sqrt(Ce*Ce+k*k);A.set(0,xe),b.set(0,Math.pow(A.y/M.y,n.zoomSpeed)),ce(b.y),M.copy(A)}function ge(W){n.enableZoom&&Se(W),n.enablePan&&ae(W)}function D(W){n.enableZoom&&Se(W),n.enableRotate&&me(W)}function C(W){var se,Ce;n.enabled!==!1&&(v.length===0&&((se=n.domElement)==null||se.ownerDocument.addEventListener("pointermove",j),(Ce=n.domElement)==null||Ce.ownerDocument.addEventListener("pointerup",te)),Le(W),W.pointerType==="touch"?Ee(W):fe(W))}function j(W){n.enabled!==!1&&(W.pointerType==="touch"?Ze(W):oe(W))}function te(W){var se,Ce,k;Ve(W),v.length===0&&((se=n.domElement)==null||se.releasePointerCapture(W.pointerId),(Ce=n.domElement)==null||Ce.ownerDocument.removeEventListener("pointermove",j),(k=n.domElement)==null||k.ownerDocument.removeEventListener("pointerup",te)),n.dispatchEvent(a),l=o.NONE}function fe(W){let se;switch(W.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case ji.DOLLY:if(n.enableZoom===!1)return;de(W),l=o.DOLLY;break;case ji.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enablePan===!1)return;Me(W),l=o.PAN}else{if(n.enableRotate===!1)return;J(W),l=o.ROTATE}break;case ji.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enableRotate===!1)return;J(W),l=o.ROTATE}else{if(n.enablePan===!1)return;Me(W),l=o.PAN}break;default:l=o.NONE}l!==o.NONE&&n.dispatchEvent(s)}function oe(W){if(n.enabled!==!1)switch(l){case o.ROTATE:if(n.enableRotate===!1)return;pe(W);break;case o.DOLLY:if(n.enableZoom===!1)return;ee(W);break;case o.PAN:if(n.enablePan===!1)return;R(W);break}}function Ue(W){n.enabled===!1||n.enableZoom===!1||l!==o.NONE&&l!==o.ROTATE||(W.preventDefault(),n.dispatchEvent(s),N(W),n.dispatchEvent(a))}function we(W){n.enabled===!1||n.enablePan===!1||z(W)}function Ee(W){switch(We(W),v.length){case 1:switch(n.touches.ONE){case Qn.ROTATE:if(n.enableRotate===!1)return;G(),l=o.TOUCH_ROTATE;break;case Qn.PAN:if(n.enablePan===!1)return;V(),l=o.TOUCH_PAN;break;default:l=o.NONE}break;case 2:switch(n.touches.TWO){case Qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;he(),l=o.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(),l=o.TOUCH_DOLLY_ROTATE;break;default:l=o.NONE}break;default:l=o.NONE}l!==o.NONE&&n.dispatchEvent(s)}function Ze(W){switch(We(W),l){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(W),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;ae(W),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(W),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(W),n.update();break;default:l=o.NONE}}function ve(W){n.enabled!==!1&&W.preventDefault()}function Le(W){v.push(W)}function Ve(W){delete E[W.pointerId];for(let se=0;se<v.length;se++)if(v[se].pointerId==W.pointerId){v.splice(se,1);return}}function We(W){let se=E[W.pointerId];se===void 0&&(se=new ne,E[W.pointerId]=se),se.set(W.pageX,W.pageY)}function Pe(W){const se=W.pointerId===v[0].pointerId?v[1]:v[0];return E[se.pointerId]}this.dollyIn=(W=O())=>{Z(W),n.update()},this.dollyOut=(W=O())=>{ce(W),n.update()},this.getScale=()=>h,this.setScale=W=>{le(W),n.update()},this.getZoomScale=()=>O(),t!==void 0&&this.connect(t),this.update()}}new Be;new U;new rn;new U;var $T=Object.defineProperty,JT=(r,e,t)=>e in r?$T(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,bh=(r,e,t)=>(JT(r,typeof e!="symbol"?e+"":e,t),t);class Ag{constructor(e){bh(this,"data"),this.data=e}generateShapes(e,t=100,n){const i=[],s={letterSpacing:0,lineHeight:1,...n},a=KT(e,t,this.data,s);for(let o=0,l=a.length;o<l;o++)Array.prototype.push.apply(i,a[o].toShapes(!1));return i}}bh(Ag,"isFont");bh(Ag,"type");function KT(r,e,t,n){const i=Array.from(r),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let l=0,c=0;for(let u=0;u<i.length;u++){const d=i[u];if(d===`
`)l=0,c-=a*n.lineHeight;else{const h=QT(d,s,l,c,t);h&&(l+=h.offsetX+n.letterSpacing,o.push(h.path))}}return o}function QT(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new Wm;let o,l,c,u,d,h,f,m;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,g=_.length;p<g;)switch(_[p++]){case"m":o=parseInt(_[p++])*e+t,l=parseInt(_[p++])*e+n,a.moveTo(o,l);break;case"l":o=parseInt(_[p++])*e+t,l=parseInt(_[p++])*e+n,a.lineTo(o,l);break;case"q":c=parseInt(_[p++])*e+t,u=parseInt(_[p++])*e+n,d=parseInt(_[p++])*e+t,h=parseInt(_[p++])*e+n,a.quadraticCurveTo(d,h,c,u);break;case"b":c=parseInt(_[p++])*e+t,u=parseInt(_[p++])*e+n,d=parseInt(_[p++])*e+t,h=parseInt(_[p++])*e+n,f=parseInt(_[p++])*e+t,m=parseInt(_[p++])*e+n,a.bezierCurveTo(d,h,f,m,c,u);break}}return{offsetX:s.ha*e,path:a}}new kt;new U;new nt;new U;new U;new nt;new nt;new nt;new U;new Be;new Hm;new U;new kt;new Vt;new nt;ci.clamp;ci.lerp;pg({screenspace:!1,color:new ye("black"),opacity:1,thickness:.05,size:new ne(1,1)},`#include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   uniform float thickness;
   uniform bool screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
       #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
     #include <morphtarget_vertex>
     #include <skinning_vertex>
     #include <project_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`,`uniform vec3 color;
   uniform float opacity;
   void main(){
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
   }`);const eE=["args","material-uniforms-color-value"];Au.ReflectorShader;new U;new U;new U;var Kc;/Mac/.test((Kc=globalThis==null?void 0:globalThis.navigator)===null||Kc===void 0?void 0:Kc.platform);const tE=["target","auto-rotate","auto-rotate-speed","enable-damping","damping-factor","enable-pan","key-pan-speed","keys","max-azimuth-angle","min-azimuth-angle","max-polar-angle","min-polar-angle","min-distance","max-distance","min-zoom","max-zoom","touches","enable-zoom","zoom-speed","enable-rotate","rotate-speed","args"],nE=ur({__name:"OrbitControls",props:{makeDefault:{type:Boolean,default:!1},camera:{},domElement:{},target:{default:()=>[0,0,0]},enableDamping:{type:Boolean,default:!0},dampingFactor:{default:.05},autoRotate:{type:Boolean,default:!1},autoRotateSpeed:{default:2},enablePan:{type:Boolean,default:!0},keyPanSpeed:{default:7},keys:{},maxAzimuthAngle:{default:Number.POSITIVE_INFINITY},minAzimuthAngle:{default:Number.NEGATIVE_INFINITY},maxPolarAngle:{default:Math.PI},minPolarAngle:{default:0},minDistance:{default:0},maxDistance:{default:Number.POSITIVE_INFINITY},minZoom:{default:0},maxZoom:{default:Number.POSITIVE_INFINITY},touches:{default:()=>({ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN})},enableZoom:{type:Boolean,default:!0},zoomSpeed:{default:1},enableRotate:{type:Boolean,default:!0},rotateSpeed:{default:1}},emits:["change","start","end"],setup(r,{expose:e,emit:t}){const n=r,i=t,{makeDefault:s,autoRotate:a,autoRotateSpeed:o,enableDamping:l,dampingFactor:c,enablePan:u,keyPanSpeed:d,maxAzimuthAngle:h,minAzimuthAngle:f,maxPolarAngle:m,minPolarAngle:_,minDistance:p,maxDistance:g,minZoom:S,maxZoom:y,enableZoom:M,zoomSpeed:A,enableRotate:b,touches:T,rotateSpeed:w,target:x}=ml(n),{camera:v,renderer:E,extend:P,controls:O,invalidate:F}=va(),H=Tn(null);P({OrbitControls:ZT}),zt(H,Y=>{B(),Y&&s.value?O.value=Y:O.value=null});function B(){qc(H.value,"change",()=>{i("change",H.value),F()}),qc(H.value,"start",()=>i("start",H.value)),qc(H.value,"end",()=>i("end",H.value))}const{onBeforeRender:ie}=lg();return ie(({invalidate:Y})=>{H.value&&(l.value||a.value)&&(H.value.update(),a.value&&Y())}),wi(()=>{H.value&&H.value.dispose()}),e({instance:H}),(Y,le)=>(Y.camera||$e(v))&&(Y.domElement||$e(E))?(en(),_n("TresOrbitControls",{key:0,ref_key:"controlsRef",ref:H,target:$e(x),"auto-rotate":$e(a),"auto-rotate-speed":$e(o),"enable-damping":$e(l),"damping-factor":$e(c),"enable-pan":$e(u),"key-pan-speed":$e(d),keys:Y.keys,"max-azimuth-angle":$e(h),"min-azimuth-angle":$e(f),"max-polar-angle":$e(m),"min-polar-angle":$e(_),"min-distance":$e(p),"max-distance":$e(g),"min-zoom":$e(S),"max-zoom":$e(y),touches:$e(T),"enable-zoom":$e(M),"zoom-speed":$e(A),"enable-rotate":$e(b),"rotate-speed":$e(w),args:[Y.camera||$e(v),Y.domElement||$e(E).domElement]},null,8,tE)):Jf("",!0)}});function yo(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Lf={exports:{}},Df;function iE(){return Df||(Df=1,function(r,e){(function(t){r.exports=t()})(function(){return function t(n,i,s){function a(c,u){if(!i[c]){if(!n[c]){var d=typeof yo=="function"&&yo;if(!u&&d)return d(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}u=i[c]={exports:{}},n[c][0].call(u.exports,function(h){var f=n[c][1][h];return a(f||h)},u,u.exports,t,n,i,s)}return i[c].exports}for(var o=typeof yo=="function"&&yo,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){var m=t("crypto");function _(b,T){T=S(b,T);var w;return(w=T.algorithm!=="passthrough"?m.createHash(T.algorithm):new A).write===void 0&&(w.write=w.update,w.end=w.update),M(T,w).dispatch(b),w.update||w.end(""),w.digest?w.digest(T.encoding==="buffer"?void 0:T.encoding):(b=w.read(),T.encoding!=="buffer"?b.toString(T.encoding):b)}(i=n.exports=_).sha1=function(b){return _(b)},i.keys=function(b){return _(b,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(b){return _(b,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(b){return _(b,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=m.getHashes?m.getHashes().slice():["sha1","md5"],g=(p.push("passthrough"),["buffer","hex","binary","base64"]);function S(b,T){var w={};if(w.algorithm=(T=T||{}).algorithm||"sha1",w.encoding=T.encoding||"hex",w.excludeValues=!!T.excludeValues,w.algorithm=w.algorithm.toLowerCase(),w.encoding=w.encoding.toLowerCase(),w.ignoreUnknown=T.ignoreUnknown===!0,w.respectType=T.respectType!==!1,w.respectFunctionNames=T.respectFunctionNames!==!1,w.respectFunctionProperties=T.respectFunctionProperties!==!1,w.unorderedArrays=T.unorderedArrays===!0,w.unorderedSets=T.unorderedSets!==!1,w.unorderedObjects=T.unorderedObjects!==!1,w.replacer=T.replacer||void 0,w.excludeKeys=T.excludeKeys||void 0,b===void 0)throw new Error("Object argument required.");for(var x=0;x<p.length;++x)p[x].toLowerCase()===w.algorithm.toLowerCase()&&(w.algorithm=p[x]);if(p.indexOf(w.algorithm)===-1)throw new Error('Algorithm "'+w.algorithm+'"  not supported. supported values: '+p.join(", "));if(g.indexOf(w.encoding)===-1&&w.algorithm!=="passthrough")throw new Error('Encoding "'+w.encoding+'"  not supported. supported values: '+g.join(", "));return w}function y(b){if(typeof b=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(b))!=null}function M(b,T,w){w=w||[];function x(v){return T.update?T.update(v,"utf8"):T.write(v,"utf8")}return{dispatch:function(v){return this["_"+((v=b.replacer?b.replacer(v):v)===null?"null":typeof v)](v)},_object:function(v){var E,P=Object.prototype.toString.call(v),O=/\[object (.*)\]/i.exec(P);if(O=(O=O?O[1]:"unknown:["+P+"]").toLowerCase(),0<=(P=w.indexOf(v)))return this.dispatch("[CIRCULAR:"+P+"]");if(w.push(v),o!==void 0&&o.isBuffer&&o.isBuffer(v))return x("buffer:"),x(v);if(O==="object"||O==="function"||O==="asyncfunction")return P=Object.keys(v),b.unorderedObjects&&(P=P.sort()),b.respectType===!1||y(v)||P.splice(0,0,"prototype","__proto__","constructor"),b.excludeKeys&&(P=P.filter(function(F){return!b.excludeKeys(F)})),x("object:"+P.length+":"),E=this,P.forEach(function(F){E.dispatch(F),x(":"),b.excludeValues||E.dispatch(v[F]),x(",")});if(!this["_"+O]){if(b.ignoreUnknown)return x("["+O+"]");throw new Error('Unknown object type "'+O+'"')}this["_"+O](v)},_array:function(v,F){F=F!==void 0?F:b.unorderedArrays!==!1;var P=this;if(x("array:"+v.length+":"),!F||v.length<=1)return v.forEach(function(H){return P.dispatch(H)});var O=[],F=v.map(function(H){var B=new A,ie=w.slice();return M(b,B,ie).dispatch(H),O=O.concat(ie.slice(w.length)),B.read().toString()});return w=w.concat(O),F.sort(),this._array(F,!1)},_date:function(v){return x("date:"+v.toJSON())},_symbol:function(v){return x("symbol:"+v.toString())},_error:function(v){return x("error:"+v.toString())},_boolean:function(v){return x("bool:"+v.toString())},_string:function(v){x("string:"+v.length+":"),x(v.toString())},_function:function(v){x("fn:"),y(v)?this.dispatch("[native]"):this.dispatch(v.toString()),b.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(v.name)),b.respectFunctionProperties&&this._object(v)},_number:function(v){return x("number:"+v.toString())},_xml:function(v){return x("xml:"+v.toString())},_null:function(){return x("Null")},_undefined:function(){return x("Undefined")},_regexp:function(v){return x("regex:"+v.toString())},_uint8array:function(v){return x("uint8array:"),this.dispatch(Array.prototype.slice.call(v))},_uint8clampedarray:function(v){return x("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(v))},_int8array:function(v){return x("int8array:"),this.dispatch(Array.prototype.slice.call(v))},_uint16array:function(v){return x("uint16array:"),this.dispatch(Array.prototype.slice.call(v))},_int16array:function(v){return x("int16array:"),this.dispatch(Array.prototype.slice.call(v))},_uint32array:function(v){return x("uint32array:"),this.dispatch(Array.prototype.slice.call(v))},_int32array:function(v){return x("int32array:"),this.dispatch(Array.prototype.slice.call(v))},_float32array:function(v){return x("float32array:"),this.dispatch(Array.prototype.slice.call(v))},_float64array:function(v){return x("float64array:"),this.dispatch(Array.prototype.slice.call(v))},_arraybuffer:function(v){return x("arraybuffer:"),this.dispatch(new Uint8Array(v))},_url:function(v){return x("url:"+v.toString())},_map:function(v){return x("map:"),v=Array.from(v),this._array(v,b.unorderedSets!==!1)},_set:function(v){return x("set:"),v=Array.from(v),this._array(v,b.unorderedSets!==!1)},_file:function(v){return x("file:"),this.dispatch([v.name,v.size,v.type,v.lastModfied])},_blob:function(){if(b.ignoreUnknown)return x("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return x("domwindow")},_bigint:function(v){return x("bigint:"+v.toString())},_process:function(){return x("process")},_timer:function(){return x("timer")},_pipe:function(){return x("pipe")},_tcp:function(){return x("tcp")},_udp:function(){return x("udp")},_tty:function(){return x("tty")},_statwatcher:function(){return x("statwatcher")},_securecontext:function(){return x("securecontext")},_connection:function(){return x("connection")},_zlib:function(){return x("zlib")},_context:function(){return x("context")},_nodescript:function(){return x("nodescript")},_httpparser:function(){return x("httpparser")},_dataview:function(){return x("dataview")},_signal:function(){return x("signal")},_fsevent:function(){return x("fsevent")},_tlswrap:function(){return x("tlswrap")}}}function A(){return{buf:"",write:function(b){this.buf+=b},end:function(b){this.buf+=b},read:function(){return this.buf}}}i.writeToStream=function(b,T,w){return w===void 0&&(w=T,T={}),M(T=S(b,T),w).dispatch(b)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){(function(m){var _=typeof Uint8Array<"u"?Uint8Array:Array,p=43,g=47,S=48,y=97,M=65,A=45,b=95;function T(w){return w=w.charCodeAt(0),w===p||w===A?62:w===g||w===b?63:w<S?-1:w<S+10?w-S+26+26:w<M+26?w-M:w<y+26?w-y+26:void 0}m.toByteArray=function(w){var x,v;if(0<w.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var E=w.length,E=w.charAt(E-2)==="="?2:w.charAt(E-1)==="="?1:0,P=new _(3*w.length/4-E),O=0<E?w.length-4:w.length,F=0;function H(B){P[F++]=B}for(x=0;x<O;x+=4,0)H((16711680&(v=T(w.charAt(x))<<18|T(w.charAt(x+1))<<12|T(w.charAt(x+2))<<6|T(w.charAt(x+3))))>>16),H((65280&v)>>8),H(255&v);return E==2?H(255&(v=T(w.charAt(x))<<2|T(w.charAt(x+1))>>4)):E==1&&(H((v=T(w.charAt(x))<<10|T(w.charAt(x+1))<<4|T(w.charAt(x+2))>>2)>>8&255),H(255&v)),P},m.fromByteArray=function(w){var x,v,E,P,O=w.length%3,F="";function H(B){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(B)}for(x=0,E=w.length-O;x<E;x+=3)v=(w[x]<<16)+(w[x+1]<<8)+w[x+2],F+=H((P=v)>>18&63)+H(P>>12&63)+H(P>>6&63)+H(63&P);switch(O){case 1:F=(F+=H((v=w[w.length-1])>>2))+H(v<<4&63)+"==";break;case 2:F=(F=(F+=H((v=(w[w.length-2]<<8)+w[w.length-1])>>10))+H(v>>4&63))+H(v<<2&63)+"="}return F}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,i){(function(s,a,p,l,c,u,d,h,f){var m=t("base64-js"),_=t("ieee754");function p(R,N,z){if(!(this instanceof p))return new p(R,N,z);var G,V,I,he,re=typeof R;if(N==="base64"&&re=="string")for(R=(he=R).trim?he.trim():he.replace(/^\s+|\s+$/g,"");R.length%4!=0;)R+="=";if(re=="number")G=Y(R);else if(re=="string")G=p.byteLength(R,N);else{if(re!="object")throw new Error("First argument needs to be a number, array or string.");G=Y(R.length)}if(p._useTypedArrays?V=p._augment(new Uint8Array(G)):((V=this).length=G,V._isBuffer=!0),p._useTypedArrays&&typeof R.byteLength=="number")V._set(R);else if(le(he=R)||p.isBuffer(he)||he&&typeof he=="object"&&typeof he.length=="number")for(I=0;I<G;I++)p.isBuffer(R)?V[I]=R.readUInt8(I):V[I]=R[I];else if(re=="string")V.write(R,0,N);else if(re=="number"&&!p._useTypedArrays&&!z)for(I=0;I<G;I++)V[I]=0;return V}function g(R,N,z,G){return p._charsWritten=Fe(function(V){for(var I=[],he=0;he<V.length;he++)I.push(255&V.charCodeAt(he));return I}(N),R,z,G)}function S(R,N,z,G){return p._charsWritten=Fe(function(V){for(var I,he,re=[],me=0;me<V.length;me++)he=V.charCodeAt(me),I=he>>8,he=he%256,re.push(he),re.push(I);return re}(N),R,z,G)}function y(R,N,z){var G="";z=Math.min(R.length,z);for(var V=N;V<z;V++)G+=String.fromCharCode(R[V]);return G}function M(R,N,z,I){I||(ee(typeof z=="boolean","missing or invalid endian"),ee(N!=null,"missing offset"),ee(N+1<R.length,"Trying to read beyond buffer length"));var V,I=R.length;if(!(I<=N))return z?(V=R[N],N+1<I&&(V|=R[N+1]<<8)):(V=R[N]<<8,N+1<I&&(V|=R[N+1])),V}function A(R,N,z,I){I||(ee(typeof z=="boolean","missing or invalid endian"),ee(N!=null,"missing offset"),ee(N+3<R.length,"Trying to read beyond buffer length"));var V,I=R.length;if(!(I<=N))return z?(N+2<I&&(V=R[N+2]<<16),N+1<I&&(V|=R[N+1]<<8),V|=R[N],N+3<I&&(V+=R[N+3]<<24>>>0)):(N+1<I&&(V=R[N+1]<<16),N+2<I&&(V|=R[N+2]<<8),N+3<I&&(V|=R[N+3]),V+=R[N]<<24>>>0),V}function b(R,N,z,G){if(G||(ee(typeof z=="boolean","missing or invalid endian"),ee(N!=null,"missing offset"),ee(N+1<R.length,"Trying to read beyond buffer length")),!(R.length<=N))return G=M(R,N,z,!0),32768&G?-1*(65535-G+1):G}function T(R,N,z,G){if(G||(ee(typeof z=="boolean","missing or invalid endian"),ee(N!=null,"missing offset"),ee(N+3<R.length,"Trying to read beyond buffer length")),!(R.length<=N))return G=A(R,N,z,!0),2147483648&G?-1*(4294967295-G+1):G}function w(R,N,z,G){return G||(ee(typeof z=="boolean","missing or invalid endian"),ee(N+3<R.length,"Trying to read beyond buffer length")),_.read(R,N,z,23,4)}function x(R,N,z,G){return G||(ee(typeof z=="boolean","missing or invalid endian"),ee(N+7<R.length,"Trying to read beyond buffer length")),_.read(R,N,z,52,8)}function v(R,N,z,G,V){if(V||(ee(N!=null,"missing value"),ee(typeof G=="boolean","missing or invalid endian"),ee(z!=null,"missing offset"),ee(z+1<R.length,"trying to write beyond buffer length"),de(N,65535)),V=R.length,!(V<=z))for(var I=0,he=Math.min(V-z,2);I<he;I++)R[z+I]=(N&255<<8*(G?I:1-I))>>>8*(G?I:1-I)}function E(R,N,z,G,V){if(V||(ee(N!=null,"missing value"),ee(typeof G=="boolean","missing or invalid endian"),ee(z!=null,"missing offset"),ee(z+3<R.length,"trying to write beyond buffer length"),de(N,4294967295)),V=R.length,!(V<=z))for(var I=0,he=Math.min(V-z,4);I<he;I++)R[z+I]=N>>>8*(G?I:3-I)&255}function P(R,N,z,G,V){V||(ee(N!=null,"missing value"),ee(typeof G=="boolean","missing or invalid endian"),ee(z!=null,"missing offset"),ee(z+1<R.length,"Trying to write beyond buffer length"),Me(N,32767,-32768)),R.length<=z||v(R,0<=N?N:65535+N+1,z,G,V)}function O(R,N,z,G,V){V||(ee(N!=null,"missing value"),ee(typeof G=="boolean","missing or invalid endian"),ee(z!=null,"missing offset"),ee(z+3<R.length,"Trying to write beyond buffer length"),Me(N,2147483647,-2147483648)),R.length<=z||E(R,0<=N?N:4294967295+N+1,z,G,V)}function F(R,N,z,G,V){V||(ee(N!=null,"missing value"),ee(typeof G=="boolean","missing or invalid endian"),ee(z!=null,"missing offset"),ee(z+3<R.length,"Trying to write beyond buffer length"),pe(N,34028234663852886e22,-34028234663852886e22)),R.length<=z||_.write(R,N,z,G,23,4)}function H(R,N,z,G,V){V||(ee(N!=null,"missing value"),ee(typeof G=="boolean","missing or invalid endian"),ee(z!=null,"missing offset"),ee(z+7<R.length,"Trying to write beyond buffer length"),pe(N,17976931348623157e292,-17976931348623157e292)),R.length<=z||_.write(R,N,z,G,52,8)}i.Buffer=p,i.SlowBuffer=p,i.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var R=new ArrayBuffer(0),N=new Uint8Array(R);return N.foo=function(){return 42},N.foo()===42&&typeof N.subarray=="function"}catch{return!1}}(),p.isEncoding=function(R){switch(String(R).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(R){return!(R==null||!R._isBuffer)},p.byteLength=function(R,N){var z;switch(R+="",N||"utf8"){case"hex":z=R.length/2;break;case"utf8":case"utf-8":z=Z(R).length;break;case"ascii":case"binary":case"raw":z=R.length;break;case"base64":z=Te(R).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":z=2*R.length;break;default:throw new Error("Unknown encoding")}return z},p.concat=function(R,N){if(ee(le(R),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),R.length===0)return new p(0);if(R.length===1)return R[0];if(typeof N!="number")for(V=N=0;V<R.length;V++)N+=R[V].length;for(var z=new p(N),G=0,V=0;V<R.length;V++){var I=R[V];I.copy(z,G),G+=I.length}return z},p.prototype.write=function(R,N,z,G){isFinite(N)?isFinite(z)||(G=z,z=void 0):(me=G,G=N,N=z,z=me),N=Number(N)||0;var V,I,he,re,me=this.length-N;switch((!z||me<(z=Number(z)))&&(z=me),G=String(G||"utf8").toLowerCase()){case"hex":V=function(ae,Se,ge,D){ge=Number(ge)||0;var C=ae.length-ge;(!D||C<(D=Number(D)))&&(D=C),ee((C=Se.length)%2==0,"Invalid hex string"),C/2<D&&(D=C/2);for(var j=0;j<D;j++){var te=parseInt(Se.substr(2*j,2),16);ee(!isNaN(te),"Invalid hex string"),ae[ge+j]=te}return p._charsWritten=2*j,j}(this,R,N,z);break;case"utf8":case"utf-8":I=this,he=N,re=z,V=p._charsWritten=Fe(Z(R),I,he,re);break;case"ascii":case"binary":V=g(this,R,N,z);break;case"base64":I=this,he=N,re=z,V=p._charsWritten=Fe(Te(R),I,he,re);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":V=S(this,R,N,z);break;default:throw new Error("Unknown encoding")}return V},p.prototype.toString=function(R,N,z){var G,V,I,he,re=this;if(R=String(R||"utf8").toLowerCase(),N=Number(N)||0,(z=z!==void 0?Number(z):re.length)===N)return"";switch(R){case"hex":G=function(me,ae,Se){var ge=me.length;(!ae||ae<0)&&(ae=0),(!Se||Se<0||ge<Se)&&(Se=ge);for(var D="",C=ae;C<Se;C++)D+=ce(me[C]);return D}(re,N,z);break;case"utf8":case"utf-8":G=function(me,ae,Se){var ge="",D="";Se=Math.min(me.length,Se);for(var C=ae;C<Se;C++)me[C]<=127?(ge+=J(D)+String.fromCharCode(me[C]),D=""):D+="%"+me[C].toString(16);return ge+J(D)}(re,N,z);break;case"ascii":case"binary":G=y(re,N,z);break;case"base64":V=re,he=z,G=(I=N)===0&&he===V.length?m.fromByteArray(V):m.fromByteArray(V.slice(I,he));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":G=function(me,ae,Se){for(var ge=me.slice(ae,Se),D="",C=0;C<ge.length;C+=2)D+=String.fromCharCode(ge[C]+256*ge[C+1]);return D}(re,N,z);break;default:throw new Error("Unknown encoding")}return G},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(R,N,z,G){if(N=N||0,(G=G||G===0?G:this.length)!==(z=z||0)&&R.length!==0&&this.length!==0){ee(z<=G,"sourceEnd < sourceStart"),ee(0<=N&&N<R.length,"targetStart out of bounds"),ee(0<=z&&z<this.length,"sourceStart out of bounds"),ee(0<=G&&G<=this.length,"sourceEnd out of bounds"),G>this.length&&(G=this.length);var V=(G=R.length-N<G-z?R.length-N+z:G)-z;if(V<100||!p._useTypedArrays)for(var I=0;I<V;I++)R[I+N]=this[I+z];else R._set(this.subarray(z,z+V),N)}},p.prototype.slice=function(R,N){var z=this.length;if(R=ie(R,z,0),N=ie(N,z,z),p._useTypedArrays)return p._augment(this.subarray(R,N));for(var G=N-R,V=new p(G,void 0,!0),I=0;I<G;I++)V[I]=this[I+R];return V},p.prototype.get=function(R){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(R)},p.prototype.set=function(R,N){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(R,N)},p.prototype.readUInt8=function(R,N){if(N||(ee(R!=null,"missing offset"),ee(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return this[R]},p.prototype.readUInt16LE=function(R,N){return M(this,R,!0,N)},p.prototype.readUInt16BE=function(R,N){return M(this,R,!1,N)},p.prototype.readUInt32LE=function(R,N){return A(this,R,!0,N)},p.prototype.readUInt32BE=function(R,N){return A(this,R,!1,N)},p.prototype.readInt8=function(R,N){if(N||(ee(R!=null,"missing offset"),ee(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return 128&this[R]?-1*(255-this[R]+1):this[R]},p.prototype.readInt16LE=function(R,N){return b(this,R,!0,N)},p.prototype.readInt16BE=function(R,N){return b(this,R,!1,N)},p.prototype.readInt32LE=function(R,N){return T(this,R,!0,N)},p.prototype.readInt32BE=function(R,N){return T(this,R,!1,N)},p.prototype.readFloatLE=function(R,N){return w(this,R,!0,N)},p.prototype.readFloatBE=function(R,N){return w(this,R,!1,N)},p.prototype.readDoubleLE=function(R,N){return x(this,R,!0,N)},p.prototype.readDoubleBE=function(R,N){return x(this,R,!1,N)},p.prototype.writeUInt8=function(R,N,z){z||(ee(R!=null,"missing value"),ee(N!=null,"missing offset"),ee(N<this.length,"trying to write beyond buffer length"),de(R,255)),N>=this.length||(this[N]=R)},p.prototype.writeUInt16LE=function(R,N,z){v(this,R,N,!0,z)},p.prototype.writeUInt16BE=function(R,N,z){v(this,R,N,!1,z)},p.prototype.writeUInt32LE=function(R,N,z){E(this,R,N,!0,z)},p.prototype.writeUInt32BE=function(R,N,z){E(this,R,N,!1,z)},p.prototype.writeInt8=function(R,N,z){z||(ee(R!=null,"missing value"),ee(N!=null,"missing offset"),ee(N<this.length,"Trying to write beyond buffer length"),Me(R,127,-128)),N>=this.length||(0<=R?this.writeUInt8(R,N,z):this.writeUInt8(255+R+1,N,z))},p.prototype.writeInt16LE=function(R,N,z){P(this,R,N,!0,z)},p.prototype.writeInt16BE=function(R,N,z){P(this,R,N,!1,z)},p.prototype.writeInt32LE=function(R,N,z){O(this,R,N,!0,z)},p.prototype.writeInt32BE=function(R,N,z){O(this,R,N,!1,z)},p.prototype.writeFloatLE=function(R,N,z){F(this,R,N,!0,z)},p.prototype.writeFloatBE=function(R,N,z){F(this,R,N,!1,z)},p.prototype.writeDoubleLE=function(R,N,z){H(this,R,N,!0,z)},p.prototype.writeDoubleBE=function(R,N,z){H(this,R,N,!1,z)},p.prototype.fill=function(R,N,z){if(N=N||0,z=z||this.length,ee(typeof(R=typeof(R=R||0)=="string"?R.charCodeAt(0):R)=="number"&&!isNaN(R),"value is not a number"),ee(N<=z,"end < start"),z!==N&&this.length!==0){ee(0<=N&&N<this.length,"start out of bounds"),ee(0<=z&&z<=this.length,"end out of bounds");for(var G=N;G<z;G++)this[G]=R}},p.prototype.inspect=function(){for(var R=[],N=this.length,z=0;z<N;z++)if(R[z]=ce(this[z]),z===i.INSPECT_MAX_BYTES){R[z+1]="...";break}return"<Buffer "+R.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var R=new Uint8Array(this.length),N=0,z=R.length;N<z;N+=1)R[N]=this[N];return R.buffer};var B=p.prototype;function ie(R,N,z){return typeof R!="number"?z:N<=(R=~~R)?N:0<=R||0<=(R+=N)?R:0}function Y(R){return(R=~~Math.ceil(+R))<0?0:R}function le(R){return(Array.isArray||function(N){return Object.prototype.toString.call(N)==="[object Array]"})(R)}function ce(R){return R<16?"0"+R.toString(16):R.toString(16)}function Z(R){for(var N=[],z=0;z<R.length;z++){var G=R.charCodeAt(z);if(G<=127)N.push(R.charCodeAt(z));else for(var V=z,I=(55296<=G&&G<=57343&&z++,encodeURIComponent(R.slice(V,z+1)).substr(1).split("%")),he=0;he<I.length;he++)N.push(parseInt(I[he],16))}return N}function Te(R){return m.toByteArray(R)}function Fe(R,N,z,G){for(var V=0;V<G&&!(V+z>=N.length||V>=R.length);V++)N[V+z]=R[V];return V}function J(R){try{return decodeURIComponent(R)}catch{return"�"}}function de(R,N){ee(typeof R=="number","cannot write a non-number as a number"),ee(0<=R,"specified a negative value for writing an unsigned value"),ee(R<=N,"value is larger than maximum value for type"),ee(Math.floor(R)===R,"value has a fractional component")}function Me(R,N,z){ee(typeof R=="number","cannot write a non-number as a number"),ee(R<=N,"value larger than maximum allowed value"),ee(z<=R,"value smaller than minimum allowed value"),ee(Math.floor(R)===R,"value has a fractional component")}function pe(R,N,z){ee(typeof R=="number","cannot write a non-number as a number"),ee(R<=N,"value larger than maximum allowed value"),ee(z<=R,"value smaller than minimum allowed value")}function ee(R,N){if(!R)throw new Error(N||"Failed assertion")}p._augment=function(R){return R._isBuffer=!0,R._get=R.get,R._set=R.set,R.get=B.get,R.set=B.set,R.write=B.write,R.toString=B.toString,R.toLocaleString=B.toString,R.toJSON=B.toJSON,R.copy=B.copy,R.slice=B.slice,R.readUInt8=B.readUInt8,R.readUInt16LE=B.readUInt16LE,R.readUInt16BE=B.readUInt16BE,R.readUInt32LE=B.readUInt32LE,R.readUInt32BE=B.readUInt32BE,R.readInt8=B.readInt8,R.readInt16LE=B.readInt16LE,R.readInt16BE=B.readInt16BE,R.readInt32LE=B.readInt32LE,R.readInt32BE=B.readInt32BE,R.readFloatLE=B.readFloatLE,R.readFloatBE=B.readFloatBE,R.readDoubleLE=B.readDoubleLE,R.readDoubleBE=B.readDoubleBE,R.writeUInt8=B.writeUInt8,R.writeUInt16LE=B.writeUInt16LE,R.writeUInt16BE=B.writeUInt16BE,R.writeUInt32LE=B.writeUInt32LE,R.writeUInt32BE=B.writeUInt32BE,R.writeInt8=B.writeInt8,R.writeInt16LE=B.writeInt16LE,R.writeInt16BE=B.writeInt16BE,R.writeInt32LE=B.writeInt32LE,R.writeInt32BE=B.writeInt32BE,R.writeFloatLE=B.writeFloatLE,R.writeFloatBE=B.writeFloatBE,R.writeDoubleLE=B.writeDoubleLE,R.writeDoubleBE=B.writeDoubleBE,R.fill=B.fill,R.inspect=B.inspect,R.toArrayBuffer=B.toArrayBuffer,R}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,i){(function(s,a,m,l,c,u,d,h,f){var m=t("buffer").Buffer,_=4,p=new m(_);p.fill(0),n.exports={hash:function(g,S,y,M){for(var A=S(function(v,E){v.length%_!=0&&(P=v.length+(_-v.length%_),v=m.concat([v,p],P));for(var P,O=[],F=E?v.readInt32BE:v.readInt32LE,H=0;H<v.length;H+=_)O.push(F.call(v,H));return O}(g=m.isBuffer(g)?g:new m(g),M),8*g.length),S=M,b=new m(y),T=S?b.writeInt32BE:b.writeInt32LE,w=0;w<A.length;w++)T.call(b,A[w],4*w,!0);return b}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,i){(function(s,a,m,l,c,u,d,h,f){var m=t("buffer").Buffer,_=t("./sha"),p=t("./sha256"),g=t("./rng"),S={sha1:_,sha256:p,md5:t("./md5")},y=64,M=new m(y);function A(v,E){var P=S[v=v||"sha1"],O=[];return P||b("algorithm:",v,"is not yet supported"),{update:function(F){return m.isBuffer(F)||(F=new m(F)),O.push(F),F.length,this},digest:function(F){var H=m.concat(O),H=E?function(B,ie,Y){m.isBuffer(ie)||(ie=new m(ie)),m.isBuffer(Y)||(Y=new m(Y)),ie.length>y?ie=B(ie):ie.length<y&&(ie=m.concat([ie,M],y));for(var le=new m(y),ce=new m(y),Z=0;Z<y;Z++)le[Z]=54^ie[Z],ce[Z]=92^ie[Z];return Y=B(m.concat([le,Y])),B(m.concat([ce,Y]))}(P,E,H):P(H);return O=null,F?H.toString(F):H}}}function b(){var v=[].slice.call(arguments).join(" ");throw new Error([v,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}M.fill(0),i.createHash=function(v){return A(v)},i.createHmac=A,i.randomBytes=function(v,E){if(!E||!E.call)return new m(g(v));try{E.call(this,void 0,new m(g(v)))}catch(P){E(P)}};var T,w=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=function(v){i[v]=function(){b("sorry,",v,"is not implemented yet")}};for(T in w)x(w[T])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){var m=t("./helpers");function _(b,T){b[T>>5]|=128<<T%32,b[14+(T+64>>>9<<4)]=T;for(var w=1732584193,x=-271733879,v=-1732584194,E=271733878,P=0;P<b.length;P+=16){var O=w,F=x,H=v,B=E,w=g(w,x,v,E,b[P+0],7,-680876936),E=g(E,w,x,v,b[P+1],12,-389564586),v=g(v,E,w,x,b[P+2],17,606105819),x=g(x,v,E,w,b[P+3],22,-1044525330);w=g(w,x,v,E,b[P+4],7,-176418897),E=g(E,w,x,v,b[P+5],12,1200080426),v=g(v,E,w,x,b[P+6],17,-1473231341),x=g(x,v,E,w,b[P+7],22,-45705983),w=g(w,x,v,E,b[P+8],7,1770035416),E=g(E,w,x,v,b[P+9],12,-1958414417),v=g(v,E,w,x,b[P+10],17,-42063),x=g(x,v,E,w,b[P+11],22,-1990404162),w=g(w,x,v,E,b[P+12],7,1804603682),E=g(E,w,x,v,b[P+13],12,-40341101),v=g(v,E,w,x,b[P+14],17,-1502002290),w=S(w,x=g(x,v,E,w,b[P+15],22,1236535329),v,E,b[P+1],5,-165796510),E=S(E,w,x,v,b[P+6],9,-1069501632),v=S(v,E,w,x,b[P+11],14,643717713),x=S(x,v,E,w,b[P+0],20,-373897302),w=S(w,x,v,E,b[P+5],5,-701558691),E=S(E,w,x,v,b[P+10],9,38016083),v=S(v,E,w,x,b[P+15],14,-660478335),x=S(x,v,E,w,b[P+4],20,-405537848),w=S(w,x,v,E,b[P+9],5,568446438),E=S(E,w,x,v,b[P+14],9,-1019803690),v=S(v,E,w,x,b[P+3],14,-187363961),x=S(x,v,E,w,b[P+8],20,1163531501),w=S(w,x,v,E,b[P+13],5,-1444681467),E=S(E,w,x,v,b[P+2],9,-51403784),v=S(v,E,w,x,b[P+7],14,1735328473),w=y(w,x=S(x,v,E,w,b[P+12],20,-1926607734),v,E,b[P+5],4,-378558),E=y(E,w,x,v,b[P+8],11,-2022574463),v=y(v,E,w,x,b[P+11],16,1839030562),x=y(x,v,E,w,b[P+14],23,-35309556),w=y(w,x,v,E,b[P+1],4,-1530992060),E=y(E,w,x,v,b[P+4],11,1272893353),v=y(v,E,w,x,b[P+7],16,-155497632),x=y(x,v,E,w,b[P+10],23,-1094730640),w=y(w,x,v,E,b[P+13],4,681279174),E=y(E,w,x,v,b[P+0],11,-358537222),v=y(v,E,w,x,b[P+3],16,-722521979),x=y(x,v,E,w,b[P+6],23,76029189),w=y(w,x,v,E,b[P+9],4,-640364487),E=y(E,w,x,v,b[P+12],11,-421815835),v=y(v,E,w,x,b[P+15],16,530742520),w=M(w,x=y(x,v,E,w,b[P+2],23,-995338651),v,E,b[P+0],6,-198630844),E=M(E,w,x,v,b[P+7],10,1126891415),v=M(v,E,w,x,b[P+14],15,-1416354905),x=M(x,v,E,w,b[P+5],21,-57434055),w=M(w,x,v,E,b[P+12],6,1700485571),E=M(E,w,x,v,b[P+3],10,-1894986606),v=M(v,E,w,x,b[P+10],15,-1051523),x=M(x,v,E,w,b[P+1],21,-2054922799),w=M(w,x,v,E,b[P+8],6,1873313359),E=M(E,w,x,v,b[P+15],10,-30611744),v=M(v,E,w,x,b[P+6],15,-1560198380),x=M(x,v,E,w,b[P+13],21,1309151649),w=M(w,x,v,E,b[P+4],6,-145523070),E=M(E,w,x,v,b[P+11],10,-1120210379),v=M(v,E,w,x,b[P+2],15,718787259),x=M(x,v,E,w,b[P+9],21,-343485551),w=A(w,O),x=A(x,F),v=A(v,H),E=A(E,B)}return Array(w,x,v,E)}function p(b,T,w,x,v,E){return A((T=A(A(T,b),A(x,E)))<<v|T>>>32-v,w)}function g(b,T,w,x,v,E,P){return p(T&w|~T&x,b,T,v,E,P)}function S(b,T,w,x,v,E,P){return p(T&x|w&~x,b,T,v,E,P)}function y(b,T,w,x,v,E,P){return p(T^w^x,b,T,v,E,P)}function M(b,T,w,x,v,E,P){return p(w^(T|~x),b,T,v,E,P)}function A(b,T){var w=(65535&b)+(65535&T);return(b>>16)+(T>>16)+(w>>16)<<16|65535&w}n.exports=function(b){return m.hash(b,_,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){n.exports=function(m){for(var _,p=new Array(m),g=0;g<m;g++)!(3&g)&&(_=4294967296*Math.random()),p[g]=_>>>((3&g)<<3)&255;return p}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){var m=t("./helpers");function _(S,y){S[y>>5]|=128<<24-y%32,S[15+(y+64>>9<<4)]=y;for(var M,A,b,T=Array(80),w=1732584193,x=-271733879,v=-1732584194,E=271733878,P=-1009589776,O=0;O<S.length;O+=16){for(var F=w,H=x,B=v,ie=E,Y=P,le=0;le<80;le++){T[le]=le<16?S[O+le]:g(T[le-3]^T[le-8]^T[le-14]^T[le-16],1);var ce=p(p(g(w,5),(ce=x,A=v,b=E,(M=le)<20?ce&A|~ce&b:!(M<40)&&M<60?ce&A|ce&b|A&b:ce^A^b)),p(p(P,T[le]),(M=le)<20?1518500249:M<40?1859775393:M<60?-1894007588:-899497514)),P=E,E=v,v=g(x,30),x=w,w=ce}w=p(w,F),x=p(x,H),v=p(v,B),E=p(E,ie),P=p(P,Y)}return Array(w,x,v,E,P)}function p(S,y){var M=(65535&S)+(65535&y);return(S>>16)+(y>>16)+(M>>16)<<16|65535&M}function g(S,y){return S<<y|S>>>32-y}n.exports=function(S){return m.hash(S,_,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){function m(y,M){var A=(65535&y)+(65535&M);return(y>>16)+(M>>16)+(A>>16)<<16|65535&A}function _(y,M){var A,b=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),T=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),w=new Array(64);y[M>>5]|=128<<24-M%32,y[15+(M+64>>9<<4)]=M;for(var x,v,E=0;E<y.length;E+=16){for(var P=T[0],O=T[1],F=T[2],H=T[3],B=T[4],ie=T[5],Y=T[6],le=T[7],ce=0;ce<64;ce++)w[ce]=ce<16?y[ce+E]:m(m(m((v=w[ce-2],g(v,17)^g(v,19)^S(v,10)),w[ce-7]),(v=w[ce-15],g(v,7)^g(v,18)^S(v,3))),w[ce-16]),A=m(m(m(m(le,g(v=B,6)^g(v,11)^g(v,25)),B&ie^~B&Y),b[ce]),w[ce]),x=m(g(x=P,2)^g(x,13)^g(x,22),P&O^P&F^O&F),le=Y,Y=ie,ie=B,B=m(H,A),H=F,F=O,O=P,P=m(A,x);T[0]=m(P,T[0]),T[1]=m(O,T[1]),T[2]=m(F,T[2]),T[3]=m(H,T[3]),T[4]=m(B,T[4]),T[5]=m(ie,T[5]),T[6]=m(Y,T[6]),T[7]=m(le,T[7])}return T}var p=t("./helpers"),g=function(y,M){return y>>>M|y<<32-M},S=function(y,M){return y>>>M};n.exports=function(y){return p.hash(y,_,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){i.read=function(m,_,p,g,E){var y,M,A=8*E-g-1,b=(1<<A)-1,T=b>>1,w=-7,x=p?E-1:0,v=p?-1:1,E=m[_+x];for(x+=v,y=E&(1<<-w)-1,E>>=-w,w+=A;0<w;y=256*y+m[_+x],x+=v,w-=8);for(M=y&(1<<-w)-1,y>>=-w,w+=g;0<w;M=256*M+m[_+x],x+=v,w-=8);if(y===0)y=1-T;else{if(y===b)return M?NaN:1/0*(E?-1:1);M+=Math.pow(2,g),y-=T}return(E?-1:1)*M*Math.pow(2,y-g)},i.write=function(m,_,p,g,S,P){var M,A,b=8*P-S-1,T=(1<<b)-1,w=T>>1,x=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=g?0:P-1,E=g?1:-1,P=_<0||_===0&&1/_<0?1:0;for(_=Math.abs(_),isNaN(_)||_===1/0?(A=isNaN(_)?1:0,M=T):(M=Math.floor(Math.log(_)/Math.LN2),_*(g=Math.pow(2,-M))<1&&(M--,g*=2),2<=(_+=1<=M+w?x/g:x*Math.pow(2,1-w))*g&&(M++,g/=2),T<=M+w?(A=0,M=T):1<=M+w?(A=(_*g-1)*Math.pow(2,S),M+=w):(A=_*Math.pow(2,w-1)*Math.pow(2,S),M=0));8<=S;m[p+v]=255&A,v+=E,A/=256,S-=8);for(M=M<<S|A,b+=S;0<b;m[p+v]=255&M,v+=E,M/=256,b-=8);m[p+v-E]|=128*P}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,i){(function(s,a,o,l,c,u,d,h,f){var m,_,p;function g(){}(s=n.exports={}).nextTick=(_=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,_?function(S){return window.setImmediate(S)}:p?(m=[],window.addEventListener("message",function(S){var y=S.source;y!==window&&y!==null||S.data!=="process-tick"||(S.stopPropagation(),0<m.length&&m.shift()())},!0),function(S){m.push(S),window.postMessage("process-tick","*")}):function(S){setTimeout(S,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.binding=function(S){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(S){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})}(Lf)),Lf.exports}iE();var Uf,Nf;function Cg(){return Nf||(Nf=1,Uf=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]),Uf}var Of,Ff;function rE(){return Ff||(Ff=1,Of=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]),Of}var Bf,zf;function Rg(){return zf||(zf=1,Bf=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]),Bf}var Qc,kf;function sE(){if(kf)return Qc;kf=1;var r=Cg();return Qc=r.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Qc}var eu,Vf;function aE(){if(Vf)return eu;Vf=1;var r=Rg();return r=r.slice().filter(function(e){return!/^(gl\_|texture)/.test(e)}),eu=r.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),eu}var tu,Hf;function oE(){if(Hf)return tu;Hf=1,tu=M;var r=Cg(),e=rE(),t=Rg(),n=sE(),i=aE(),s=999,a=9999,o=0,l=1,c=2,u=3,d=4,h=5,f=6,m=7,_=8,p=9,g=10,S=11,y=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function M(A){var b=0,T=0,w=s,x,v,E=[],P=[],O=1,F=0,H=0,B=!1,ie=!1,Y="",le;A=A||{};var ce=t,Z=r;A.version==="300 es"&&(ce=i,Z=n);for(var Te={},Fe={},b=0;b<ce.length;b++)Te[ce[b]]=!0;for(var b=0;b<Z.length;b++)Fe[Z[b]]=!0;return function(ae){return P=[],ae!==null?de(ae):Me()};function J(ae){ae.length&&P.push({type:y[w],data:ae,position:H,line:O,column:F})}function de(ae){b=0,ae.toString&&(ae=ae.toString()),Y+=ae.replace(/\r\n/g,`
`),le=Y.length;for(var Se;x=Y[b],b<le;){switch(Se=b,w){case o:b=z();break;case l:b=N();break;case c:b=R();break;case u:b=G();break;case d:b=he();break;case S:b=I();break;case h:b=re();break;case a:b=me();break;case p:b=ee();break;case s:b=pe();break}if(Se!==b)switch(Y[Se]){case`
`:F=0,++O;break;default:++F;break}}return T+=b,Y=Y.slice(b),P}function Me(ae){return E.length&&J(E.join("")),w=g,J("(eof)"),P}function pe(){return E=E.length?[]:E,v==="/"&&x==="*"?(H=T+b-1,w=o,v=x,b+1):v==="/"&&x==="/"?(H=T+b-1,w=l,v=x,b+1):x==="#"?(w=c,H=T+b,b):/\s/.test(x)?(w=p,H=T+b,b):(B=/\d/.test(x),ie=/[^\w_]/.test(x),H=T+b,w=B?d:ie?u:a,b)}function ee(){return/[^\s]/g.test(x)?(J(E.join("")),w=s,b):(E.push(x),v=x,b+1)}function R(){return(x==="\r"||x===`
`)&&v!=="\\"?(J(E.join("")),w=s,b):(E.push(x),v=x,b+1)}function N(){return R()}function z(){return x==="/"&&v==="*"?(E.push(x),J(E.join("")),w=s,b+1):(E.push(x),v=x,b+1)}function G(){if(v==="."&&/\d/.test(x))return w=h,b;if(v==="/"&&x==="*")return w=o,b;if(v==="/"&&x==="/")return w=l,b;if(x==="."&&E.length){for(;V(E););return w=h,b}if(x===";"||x===")"||x==="("){if(E.length)for(;V(E););return J(x),w=s,b+1}var ae=E.length===2&&x!=="=";if(/[\w_\d\s]/.test(x)||ae){for(;V(E););return w=s,b}return E.push(x),v=x,b+1}function V(ae){var Se=0,ge,D;do{if(ge=e.indexOf(ae.slice(0,ae.length+Se).join("")),D=e[ge],ge===-1){if(Se--+ae.length>0)continue;D=ae.slice(0,1).join("")}return J(D),H+=D.length,E=E.slice(D.length),E.length}while(!0)}function I(){return/[^a-fA-F0-9]/.test(x)?(J(E.join("")),w=s,b):(E.push(x),v=x,b+1)}function he(){return x==="."||/[eE]/.test(x)?(E.push(x),w=h,v=x,b+1):x==="x"&&E.length===1&&E[0]==="0"?(w=S,E.push(x),v=x,b+1):/[^\d]/.test(x)?(J(E.join("")),w=s,b):(E.push(x),v=x,b+1)}function re(){return x==="f"&&(E.push(x),v=x,b+=1),/[eE]/.test(x)||(x==="-"||x==="+")&&/[eE]/.test(v)?(E.push(x),v=x,b+1):/[^\d]/.test(x)?(J(E.join("")),w=s,b):(E.push(x),v=x,b+1)}function me(){if(/[^\d\w_]/.test(x)){var ae=E.join("");return Fe[ae]?w=_:Te[ae]?w=m:w=f,J(E.join("")),w=s,b}return E.push(x),v=x,b+1}}return tu}var nu,Gf;function lE(){if(Gf)return nu;Gf=1;var r=oE();nu=e;function e(t,n){var i=r(n),s=[];return s=s.concat(i(t)),s=s.concat(i(null)),s}return nu}lE();function cE(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function uE(r){var e=cE(r,"string");return typeof e=="symbol"?e:String(e)}function mt(r,e,t){return e=uE(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Xe={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},ln,Hr;ln={},mt(ln,"".concat(Xe.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Xe.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),mt(ln,"".concat(Xe.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Xe.position,`;
  `)}),mt(ln,"".concat(Xe.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Xe.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),mt(ln,"".concat(Xe.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Xe.pointSize,`;
    `)}),mt(ln,"".concat(Xe.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Xe.diffuseColor,`;
  `)}),mt(ln,"".concat(Xe.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Xe.fragColor,`;
  `)}),mt(ln,"".concat(Xe.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Xe.emissive,`;
    `)}),mt(ln,"".concat(Xe.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Xe.roughness,`;
    `)}),mt(ln,"".concat(Xe.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Xe.metalness,`;
    `)}),mt(ln,"".concat(Xe.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Xe.ao,`;
    `)}),mt(ln,"".concat(Xe.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Xe.bump," - (dot(").concat(Xe.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),mt(ln,"".concat(Xe.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Xe.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Xe.depthAlpha,`;
    `)});Hr={},mt(Hr,"".concat(Xe.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Xe.position,`, 1.0 );
  `)}),mt(Hr,"".concat(Xe.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Xe.position,`;
  `)}),mt(Hr,"".concat(Xe.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Xe.diffuseColor,`;
  `)}),mt(Hr,"".concat(Xe.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Xe.fragColor,`;
  `)});var cn;cn={},mt(cn,"".concat(Xe.position),"*"),mt(cn,"".concat(Xe.positionRaw),"*"),mt(cn,"".concat(Xe.normal),"*"),mt(cn,"".concat(Xe.pointSize),["PointsMaterial"]),mt(cn,"".concat(Xe.diffuseColor),"*"),mt(cn,"".concat(Xe.fragColor),"*"),mt(cn,"".concat(Xe.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),mt(cn,"".concat(Xe.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),mt(cn,"".concat(Xe.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),mt(cn,"".concat(Xe.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),mt(cn,"".concat(Xe.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),mt(cn,"".concat(Xe.depthAlpha),"*");var hE=`void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}`,dE=`#include <common>

void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;

  
  
  float size = 0.03;

  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;

  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;

  gl_Position = projectionMatrix * mvPosition;
}`;const xa=new U(0,0,0),Sh=new U(0,0,0),fE=new U(0,0,0);function Wf(r,e,t){const n=xa.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[(Number.isNaN(n.x)?0:n.x)*i+i,-(n.y*s)+s]}function pE(r,e){const t=xa.setFromMatrixPosition(r.matrixWorld),n=Sh.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(fE);return i.angleTo(s)>Math.PI/2}function mE(r,e,t,n){const i=xa.setFromMatrixPosition(r.matrixWorld),s=i.clone();s.project(e),t.setFromCamera(new ne(s.x,s.y),e);const a=t.intersectObjects(n,!0);if(a.length>0){const o=a[0].distance;return i.distanceTo(t.ray.origin)<o}return!0}function gE(r,e){if(e instanceof si)return e.zoom;if(e instanceof gt){const t=xa.setFromMatrixPosition(r.matrixWorld),n=Sh.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1}function vE(r,e,t){if(e instanceof gt||e instanceof si){const n=xa.setFromMatrixPosition(r.matrixWorld),i=Sh.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),a=(t[1]-t[0])/(e.far-e.near),o=t[1]-a*e.far;return Math.round(a*s+o)}}const Ru=r=>Math.abs(r)<1e-10?0:r;function Ig(r,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=Ru(e[i]*r.elements[i])+(i!==15?",":")");return t+n}const _E=(r=>e=>Ig(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),xE=(r=>(e,t)=>Ig(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]),yE=["geometry","material"];new Pi;var Iu={exports:{}},ME=Iu.exports,Xf;function bE(){return Xf||(Xf=1,function(r,e){(function(t,n){r.exports=n()})(ME,function(){var t=function(){function n(f){return a.appendChild(f.dom),f}function i(f){for(var m=0;m<a.children.length;m++)a.children[m].style.display=m===f?"block":"none";s=f}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(f){f.preventDefault(),i(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:a,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(d.update(f-o,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:a,setMode:i}};return t.Panel=function(n,i,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,f=2*c,m=3*c,_=15*c,p=74*c,g=30*c,S=document.createElement("canvas");S.width=u,S.height=d,S.style.cssText="width:80px;height:48px";var y=S.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=s,y.fillRect(0,0,u,d),y.fillStyle=i,y.fillText(n,h,f),y.fillRect(m,_,p,g),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(m,_,p,g),{dom:S,update:function(M,A){a=Math.min(a,M),o=Math.max(o,M),y.fillStyle=s,y.globalAlpha=1,y.fillRect(0,0,u,_),y.fillStyle=i,y.fillText(l(M)+" "+n+" ("+l(a)+"-"+l(o)+")",h,f),y.drawImage(S,m+c,_,p-c,g,m,_,p-c,g),y.fillRect(m+p-c,_,c,g),y.fillStyle=s,y.globalAlpha=.9,y.fillRect(m+p-c,_,c,l((1-M/A)*g))}}},t})}(Iu)),Iu.exports}bE();const SE={key:0,args:[0,1,64]},wE={key:1,args:[.5,1,64]},TE={key:2},EE=["tone-mapped","map","side","color"];new ye(16777215);const AE=["position"],CE=["rotation"],RE=["position"],IE=["args"],PE=["transparent","opacity","wireframe"],LE=["args"],DE=["position"],UE=["args"],NE=["transparent","opacity","wireframe","color"],OE=["args"],FE=["position"],BE=["position","rotation"],kE=ur({__name:"tres3dprop",props:{main_containers:{},module_containers:{},boxes:{},centerOfGravity:{}},setup(r){const e=r,t=Et(()=>{let a=-1/0,o=-1/0,l=-1/0;const c=[...e.main_containers,...e.module_containers,...e.boxes];for(const u of c){const[d,h,f]=u.centerPosition,[m,_,p]=u.size;a=Math.max(a,d+m),o=Math.max(o,h+_),l=Math.max(l,f+p)}return[2*a-n.value[0],2*o-n.value[1],2*l-n.value[2]]}),n=Et(()=>{let a=0,o=0,l=0;const c=[...e.module_containers];if(c.length===0)return[0,0,0];for(const m of c){const[_,p,g]=m.centerPosition;a+=_,o+=p,l+=g}const u=c.length,d=a/u,h=o/u,f=l/u;return i([d,h,f])});function i(a){const[o,l,c]=a,u=[[1,0,0],[0,0,1],[0,-1,0]],d=u[0][0]*o+u[0][1]*l+u[0][2]*c,h=u[1][0]*o+u[1][1]*l+u[1][2]*c,f=u[2][0]*o+u[2][1]*l+u[2][2]*c;return[d,h,f]}const s=Et(()=>{let a=1/0;const o=[...e.module_containers,...e.boxes];if(o.length===0)return[0,0,0];for(const l of o){const c=l.centerPosition[2],u=l.size[2];a=Math.min(a,c-u/2)}return[n.value[0],n.value[1],a]});return(a,o)=>(en(),Kf($e(qw),{"clear-color":"#333","window-size":!1},{default:Yg(()=>[Tt("TresPerspectiveCamera",{position:t.value,fov:45,near:.1},null,8,AE),ws($e(nE),{target:n.value,"enable-damping":!0,"enable-rotate":!0,"enable-pan":!0,"enable-zoom":!0,"max-polar-angle":Math.PI/2},null,8,["target","max-polar-angle"]),Tt("TresGroup",{rotation:[-Math.PI/2,0,0]},[o[3]||(o[3]=Tt("TresAmbientLight",{intensity:.5},null,-1)),o[4]||(o[4]=Tt("TresDirectionalLight",{position:[5,10,5],intensity:1.2,"cast-shadow":"","shadow-mapSize-width":2048,"shadow-mapSize-height":2048},null,-1)),(en(!0),_n(iu,null,Lh(e.module_containers,(l,c)=>(en(),_n("TresMesh",{key:c,position:l.centerPosition},[Tt("TresBoxGeometry",{args:l.size},null,8,IE),Tt("TresMeshToonMaterial",{transparent:l.transparent,opacity:l.opacity,wireframe:l.wireframe,color:"#ffffff"},null,8,PE),Tt("TresLineSegments",null,[Tt("TresEdgesGeometry",null,[Tt("TresBoxGeometry",{args:l.size},null,8,LE)]),o[0]||(o[0]=Tt("TresLineBasicMaterial",{color:"#00a8ff",linewidth:.02},null,-1))])],8,RE))),128)),(en(!0),_n(iu,null,Lh(e.boxes,(l,c)=>(en(),_n("TresMesh",{key:c,position:l.centerPosition},[Tt("TresBoxGeometry",{args:l.size},null,8,UE),Tt("TresMeshToonMaterial",{transparent:l.transparent,opacity:l.opacity,wireframe:l.wireframe,color:l.color},null,8,NE),Tt("TresLineSegments",null,[Tt("TresEdgesGeometry",null,[Tt("TresBoxGeometry",{args:l.size},null,8,OE)]),o[1]||(o[1]=Tt("TresLineBasicMaterial",{color:"#00a8ff",linewidth:.02},null,-1))])],8,DE))),128)),Tt("TresMesh",{position:e.centerOfGravity},o[2]||(o[2]=[Tt("TresSphereGeometry",{radius:1,widthSegments:1,heightSegments:1},null,-1),Tt("TresMeshStandardMaterial",{color:"#111111"},null,-1)]),8,FE),Tt("TresGridHelper",{args:[1e3,50,"#808080","#808080"],position:s.value,rotation:[-Math.PI/2,0,0]},null,8,BE)],8,CE)]),_:1}))}});export{kE as _};
