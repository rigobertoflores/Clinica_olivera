var r=Object.create;var m=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,p=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,w=Reflect.get;var l=(b,a)=>(a=Symbol[b])?a:Symbol.for("Symbol."+b);var o=(b,a,c)=>a in b?m(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,z=(b,a)=>{for(var c in a||={})n.call(a,c)&&o(b,c,a[c]);if(j)for(var c of j(a))q.call(a,c)&&o(b,c,a[c]);return b},A=(b,a)=>s(b,u(a));var B=(b,a)=>{var c={};for(var d in b)n.call(b,d)&&a.indexOf(d)<0&&(c[d]=b[d]);if(b!=null&&j)for(var d of j(b))a.indexOf(d)<0&&q.call(b,d)&&(c[d]=b[d]);return c};var C=(b,a)=>()=>(a||b((a={exports:{}}).exports,a),a.exports);var x=(b,a,c,d)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of v(a))!n.call(b,e)&&e!==c&&m(b,e,{get:()=>a[e],enumerable:!(d=t(a,e))||d.enumerable});return b};var D=(b,a,c)=>(c=b!=null?r(p(b)):{},x(a||!b||!b.__esModule?m(c,"default",{value:b,enumerable:!0}):c,b));var E=(b,a,c)=>w(p(b),c,a);var F=(b,a,c)=>new Promise((d,e)=>{var f=g=>{try{i(c.next(g))}catch(k){e(k)}},h=g=>{try{i(c.throw(g))}catch(k){e(k)}},i=g=>g.done?d(g.value):Promise.resolve(g.value).then(f,h);i((c=c.apply(b,a)).next())}),y=function(b,a){this[0]=b,this[1]=a};var G=b=>{var a=b[l("asyncIterator")],c=!1,d,e={};return a==null?(a=b[l("iterator")](),d=f=>e[f]=h=>a[f](h)):(a=a.call(b),d=f=>e[f]=h=>{if(c){if(c=!1,f==="throw")throw h;return h}return c=!0,{done:!1,value:new y(new Promise(i=>{var g=a[f](h);if(!(g instanceof Object))throw TypeError("Object expected");i(g)}),1)}}),e[l("iterator")]=()=>e,d("next"),"throw"in a?d("throw"):e.throw=f=>{throw f},"return"in a&&d("return"),e};export{z as a,A as b,B as c,C as d,D as e,E as f,F as g,G as h};
