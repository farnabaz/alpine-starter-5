import{d as m}from"./entry.7eb97f7e.js";import{F as c,ab as g,G as h,h as a,s as y}from"./runtime-core.esm-bundler.60e7e71f.js";import"./index.fcdf0b90.js";import"./app.config.400c2c73.js";import"./Icon.2571d11f.js";import"./_plugin-vue_export-helper.c27b6911.js";const w=c({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){const{parent:l}=y(),{between:s,default:i}=g(),u=h(()=>typeof n.unwrap=="string"?n.unwrap.split(" "):["*"]);return{fallbackSlot:i,tags:u,between:s,parent:l}},render({use:n,unwrap:l,fallbackSlot:s,between:i,tags:u,parent:e}){var f;try{let r=n;if(typeof n=="string"&&(r=(e==null?void 0:e.slots[n])||((f=e==null?void 0:e.parent)==null?void 0:f.slots[n]),console.warn(`Please set :use="$slots.${n}" in <ContentSlot> component to enable reactivity`)),!r)return s?s():a("div");if(!l)return[r()];const{flatUnwrap:d}=m(),p=d(r(),u);return i?p.flatMap((t,o)=>o===0?[t]:[i(),t]):p.reduce((t,o)=>(typeof o.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=o.children:t.push(o.children):t.push(o),t),[])}catch{return a("div")}}}),_=w;export{_ as default};
