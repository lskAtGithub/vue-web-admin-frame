import{C as V}from"./Container-68c6570c.js";import{_ as b}from"./CountUp.vue_vue_type_script_setup_true_lang-454fc4d1.js";import{d as p,r as C,a as x,b as m,c as U,e as v,w as n,g as i,f as e,u as a,l as g,p as y,h as k,_ as w}from"./index-c69f23bb.js";const I=d=>(y("data-v-1caa172c"),d=d(),k(),d),S={class:"count-up-box"},B=I(()=>i("span",{class:"label"},"数字滚动：",-1)),E=p({name:"CountUpDemo"}),N=p({...E,setup(d){let l=C({startVal:0,endValue:500,decimalPlaces:2,duration:2,useGrouping:!0,useEasing:!0,smartEasingThreshold:300,smartEasingAmount:300,separator:",",decimal:".",prefix:"",suffix:"",numerals:[]});const r=x(null),_=()=>{r.value.initCount()};return(P,o)=>{const s=m("el-input"),u=m("el-form-item"),f=m("el-button"),c=m("el-form");return U(),v(V,null,{default:n(()=>[i("div",S,[B,e(b,{ref_key:"CountUpRef",ref:r,end:a(l).endValue,options:a(l)},null,8,["end","options"])]),e(c,{class:"form",model:a(l),"label-width":"120px","label-position":"right"},{default:n(()=>[e(u,{label:"开始值"},{default:n(()=>[e(s,{modelValue:a(l).startVal,"onUpdate:modelValue":o[0]||(o[0]=t=>a(l).startVal=t)},null,8,["modelValue"])]),_:1}),e(u,{label:"结束值"},{default:n(()=>[e(s,{modelValue:a(l).endValue,"onUpdate:modelValue":o[1]||(o[1]=t=>a(l).endValue=t)},null,8,["modelValue"])]),_:1}),e(u,{label:"动画秒数"},{default:n(()=>[e(s,{modelValue:a(l).duration,"onUpdate:modelValue":o[2]||(o[2]=t=>a(l).duration=t)},null,8,["modelValue"])]),_:1}),e(u,{label:"小数位数"},{default:n(()=>[e(s,{modelValue:a(l).decimalPlaces,"onUpdate:modelValue":o[3]||(o[3]=t=>a(l).decimalPlaces=t)},null,8,["modelValue"])]),_:1}),e(u,{label:"分割字符"},{default:n(()=>[e(s,{modelValue:a(l).separator,"onUpdate:modelValue":o[4]||(o[4]=t=>a(l).separator=t)},null,8,["modelValue"])]),_:1}),e(u,{label:"小数分割符"},{default:n(()=>[e(s,{modelValue:a(l).decimal,"onUpdate:modelValue":o[5]||(o[5]=t=>a(l).decimal=t)},null,8,["modelValue"])]),_:1}),e(u,null,{default:n(()=>[e(f,{type:"primary",onClick:_},{default:n(()=>[g("开始")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}});const D=w(N,[["__scopeId","data-v-1caa172c"]]);export{D as default};
