import{C as p}from"./Container-68c6570c.js";import{A as l,d as n,b as i,c as u,e as f,w as o,f as s,l as a,E as m,p as g,h,g as r,_ as x}from"./index-c69f23bb.js";const C=()=>l({url:"/errorApi",method:"get"}),c=e=>(g("data-v-d137751d"),e=e(),h(),e),b=c(()=>r("h1",null,"本页面用于调试错误信息",-1)),v=c(()=>r("p",{class:"desc"},"本地环境会开启全局bug捕获（点击头像左边即可看到所有捕获到的bug）",-1)),V=n({name:"ErrorPage"}),k=n({...V,setup(e){const _=()=>{C()},d=()=>{m.error("已访问不存在的变量"),noneVar=1};return(y,A)=>{const t=i("el-button");return u(),f(p,{class:"container"},{default:o(()=>[b,v,s(t,{type:"danger",onClick:_},{default:o(()=>[a("发送错误请求")]),_:1}),s(t,{type:"danger",onClick:d},{default:o(()=>[a("访问不存在的变量")]),_:1})]),_:1})}}});const N=x(k,[["__scopeId","data-v-d137751d"]]);export{N as default};
