import{c as f,P as b}from"./common.d0300e8d.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as x,f as P,i as t,j as e,F as T,l as n,t as u,h as g}from"./index.fcf957e4.js";const y={data(){return{tableData:[],totalNum:0,hkTotalPrice:0,usTotalPrice:0,totalChnNum:0,totalScoredNum:0,totalScore:0,universalAcclaimTitles:0,generallyFavorableTitles:0,mixedTitles:0,generallyUnfavorableTitles:0,overwhelmingDislikeTitles:0}},methods:{async fetchData(){const c=await(await fetch(f.playstationPlusExtraData)).text(),i=b.parse(c,{header:!0});this.tableData=i.data,this.totalNum=i.data.length,i.data.forEach(r=>{this.hkTotalPrice+=Number(r.\u6E2F\u670D\u4EF7\u683C),r.\u4E2D\u6587.length>0&&(this.totalChnNum+=1),r.\u8BC4\u5206.length>0&&(this.totalScore+=Number(r.\u8BC4\u5206),this.totalScoredNum+=1)})},jumpHome(){window.location.href="/game-pass-values"}},mounted(){this.fetchData()}},k=n(" \u8FD4\u56DE\u9996\u9875 "),w=g("strong",null,"Playstation Plus Extra",-1);function D(m,c,i,r,l,_){const h=s("el-button"),p=s("el-row"),a=s("el-col"),o=s("el-table-column"),d=s("el-table");return x(),P(T,null,[t(p,null,{default:e(()=>[t(h,{type:"primary",link:"",onClick:c[0]||(c[0]=v=>_.jumpHome())},{default:e(()=>[k]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(a,null,{default:e(()=>[w]),_:1}),t(a,null,{default:e(()=>[n("\u603B\u6570\u91CF: "+u(l.totalNum),1)]),_:1}),t(a,null,{default:e(()=>[n("\u4E2D\u6587\u6E38\u620F\u6570: "+u(l.totalChnNum),1)]),_:1}),t(a,null,{default:e(()=>[n("\u6E2F\u670D\u4EF7\u503C: "+u(l.hkTotalPrice.toFixed(2))+" HKD",1)]),_:1}),t(a,null,{default:e(()=>[n("\u603B\u4EF7\u503C: "+u((l.hkTotalPrice*.8534+l.usTotalPrice*6.7193).toFixed(2))+" RMB ",1)]),_:1}),t(a,null,{default:e(()=>[n("\u5E73\u5747\u5206: "+u(Math.round(l.totalScore/l.totalScoredNum)),1)]),_:1})]),_:1}),t(d,{data:l.tableData,stripe:"",style:{width:"100%"}},{default:e(()=>[t(o,{prop:"\u82F1\u6587\u540D",label:"\u82F1\u6587\u540D"}),t(o,{prop:"\u4E2D\u6587\u540D",label:"\u4E2D\u6587\u540D"}),t(o,{prop:"\u6E2F\u670D\u4EF7\u683C",label:"\u6E2F\u670D\u4EF7\u683C"}),t(o,{prop:"\u4E2D\u6587",label:"\u4E2D\u6587"}),t(o,{prop:"\u8BC4\u5206",label:"\u8BC4\u5206"}),t(o,{prop:"\u5E74\u4EFD",label:"\u5E74\u4EFD"})]),_:1},8,["data"])],64)}var F=N(y,[["render",D]]);export{F as default};
