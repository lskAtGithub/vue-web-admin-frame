import{d as v,z,a as _,b as n,c as E,e as I,w as a,f as e,l as i,u as M,C as N,E as h,p as S,h as U,g as y,_ as $}from"./index-c69f23bb.js";import{C as q}from"./Container-68c6570c.js";import{u as D}from"./index-186742ef.js";const g=s=>(S("data-v-b9296efb"),s=s(),U(),s),R=g(()=>y("h2",null,"嵌套多层 keep-alive 示例",-1)),A=g(()=>y("p",null," 详情通过query传递id, 编辑通过params动态路由传递id ",-1)),L=v({name:"TableManageList"}),O=v({...L,setup(s){const c=z(),m=_(""),f=_(""),b=_(""),x=d=>{c.push({path:"/manage/table/detail",query:{id:d.id}})},k=()=>{c.push({path:"/manage/table/add"})},w=d=>{c.push({path:`/manage/table/edit/${d.id}`})},C=()=>{N.confirm("正在执行删除操作，是否继续?","提示",{confirmButtonText:"确 认",cancelButtonText:"取 消",type:"warning"}).then(()=>{h({type:"success",message:"操作成功"})}).catch(()=>{h({type:"info",message:"已取消操作"})})};return(d,o)=>{const r=n("el-input"),p=n("el-col"),u=n("el-button"),V=n("el-row"),l=n("el-table-column"),B=n("el-table");return E(),I(q,null,{default:a(()=>[R,A,e(V,{gutter:20,class:"search-box"},{default:a(()=>[e(p,{span:6},{default:a(()=>[e(r,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=t=>m.value=t),placeholder:"本页面已被缓存"},null,8,["modelValue"])]),_:1}),e(p,{span:6},{default:a(()=>[e(r,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=t=>f.value=t),placeholder:"可以在此输入内容后"},null,8,["modelValue"])]),_:1}),e(p,{span:8},{default:a(()=>[e(r,{modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=t=>b.value=t),placeholder:"切换路由再看看"},null,8,["modelValue"])]),_:1}),e(p,{span:4,class:"align-right"},{default:a(()=>[e(u,{type:"primary",onClick:k},{default:a(()=>[i("新增")]),_:1})]),_:1})]),_:1}),e(B,{data:M(D),border:"",style:{width:"100%"}},{default:a(()=>[e(l,{fixed:"",prop:"date",label:"日期",width:"150"}),e(l,{prop:"name",label:"姓名",width:"120"}),e(l,{prop:"age",label:"年龄",width:"120"}),e(l,{prop:"state",label:"国家",width:"120"}),e(l,{prop:"city",label:"城市",width:"120"}),e(l,{prop:"address",label:"地址"}),e(l,{fixed:"right",label:"Operations",width:"150"},{default:a(({row:t})=>[e(u,{link:"",type:"primary",size:"small",onClick:T=>x(t)},{default:a(()=>[i("详情")]),_:2},1032,["onClick"]),e(u,{link:"",type:"primary",size:"small",onClick:T=>w(t)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"]),e(u,{link:"",type:"primary",size:"small",onClick:C},{default:a(()=>[i("删除")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})}}});const H=$(O,[["__scopeId","data-v-b9296efb"]]);export{H as default};
