var u=Object.defineProperty;var l=(t,e,r)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var n=(t,e,r)=>(l(t,typeof e!="symbol"?e+"":e,r),r);import{h as o}from"./moment-BjLXg0w5.js";const s=class s{Handel_name(e){switch(e){case"month_price":return"月付";case"quarter_price":return"季付";case"half_year_price":return"半年";case"year_price":return"年付";case"two_year_price":return"两年";case"three_year_price":return"三年";case"onetime_price":return"一次性";case"reset_price":return"重置流量包"}}Handel_status(e){switch(e){case 0:return[0,"待支付","warning"];case 1:return[1,"开通中","processing"];case 2:return[2,"已取消","error"];case 3:return[3,"已完成","success"];case 4:return[4,"已折抵","success"]}}Handel_One(e){for(const r of s.List)if(Object.keys(e).includes(r)&&e[r]!==null)return r;return null}static Handel_Time_name(e){switch(e){case null:return"无限期";case 0:return"尚未购买订阅";default:return o(e*1e3).format("YYYY-MM-DD")}}static Handel_Time_day(e,r){return e===null&&r===null?"无限期":r-1}static Handel_Plan(e){try{let r=JSON.parse(e),c="";for(const a of r)a.support?c+=`<p class="p-1 text-green-500">${a.feature}</p>`:c+=`<p class="p-1 text-gray-500 line-through">${a.feature}</p>`;return`
                      <div class="grid grid-cols-2 w-full gap-4 whitespace-nowrap overflow-x-scroll">
                      ${c}
                       </div>
    `}catch{return e}}};n(s,"List",["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"]);let i=s;export{i as P};
