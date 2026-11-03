/* 商品SKU与上架表整理器: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const colors=lines(d.colors),sizes=lines(d.sizes);if(!colors.length||!sizes.length)throw Error('颜色和规格各需至少一项');if(unique(colors).length!==colors.length||unique(sizes).length!==sizes.length)throw Error('颜色或规格存在重复，请先去重');if(colors.length*sizes.length>2000)throw Error('单次最多生成2000个SKU');const prefix=required(d.prefix,'SKU前缀'),title=required(d.title,'商品名称');num(d.price);num(d.stock);const map=tableRows(d,'mapping'),headers=map.map(x=>required(x.target,'输出列名'));if(unique(headers).length!==headers.length)throw Error('导出列名不能重复');const allowed=['sku','title','color','size','price','stock'];map.forEach(x=>{if(!allowed.includes(x.source))throw Error('未知来源字段');});
 const objects=colors.flatMap((color,i)=>sizes.map((size,j)=>({sku:prefix+'-'+String(i+1).padStart(2,'0')+'-'+String(j+1).padStart(2,'0'),title,color,size,price:Number(d.price),stock:Number(d.stock)}))),rows=objects.map(o=>map.map(m=>o[m.source]));
 return {metrics:[metric('商品组合',rows.length),metric('导出列数',headers.length)],columns:headers,rows,files:[{name:'商品上架表.csv',text:csv(headers,rows)}],notes:['SKU编号按本次颜色/规格顺序生成。已发布SKU请保留原顺序和备份，避免重新排序改变编号。']};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
