var I=Object.defineProperty,g=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var _=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&_(e,r,t[r]);if(y)for(var r of y(t))h.call(t,r)&&_(e,r,t[r]);return e},v=(e,t)=>g(e,q(t));import{J as j,L as w,O as V,T as L,k as T,aE as F,r as E,o as n,l as m,w as P,aj as O,u as c,_ as S,C as x,e as D,f as A,F as R,y as k,j as B,I as C}from"./vendor.a4fe15d1.js";import{o as i,m as Y}from"./main.6347b599.js";function $(e){switch(e){case"./types/DateTimeType.vue":return i(()=>import("./DateTimeType.fe35c0c1.js"),["assets/DateTimeType.fe35c0c1.js","assets/vendor.a4fe15d1.js"]);case"./types/DateType.vue":return i(()=>import("./DateType.b46fd82c.js"),["assets/DateType.b46fd82c.js","assets/vendor.a4fe15d1.js"]);case"./types/DropdownType.vue":return i(()=>import("./DropdownType.f4c768a5.js"),["assets/DropdownType.f4c768a5.js","assets/vendor.a4fe15d1.js"]);case"./types/InputType.vue":return i(()=>import("./InputType.8be0ccd8.js"),["assets/InputType.8be0ccd8.js","assets/vendor.a4fe15d1.js"]);case"./types/NumberType.vue":return i(()=>import("./NumberType.82e884fa.js"),["assets/NumberType.82e884fa.js","assets/vendor.a4fe15d1.js"]);case"./types/PhoneType.vue":return i(()=>import("./PhoneType.49bd1d09.js"),["assets/PhoneType.49bd1d09.js","assets/vendor.a4fe15d1.js"]);case"./types/SwitchType.vue":return i(()=>import("./SwitchType.c1170042.js"),["assets/SwitchType.c1170042.js","assets/vendor.a4fe15d1.js"]);case"./types/TextAreaType.vue":return i(()=>import("./TextAreaType.50e698fe.js"),["assets/TextAreaType.50e698fe.js","assets/vendor.a4fe15d1.js"]);case"./types/TimeType.vue":return i(()=>import("./TimeType.44223618.js"),["assets/TimeType.44223618.js","assets/vendor.a4fe15d1.js"]);case"./types/UrlType.vue":return i(()=>import("./UrlType.3ece3d5d.js"),["assets/UrlType.3ece3d5d.js","assets/vendor.a4fe15d1.js"]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const M={props:{field:{type:Object,required:!0},customFieldScope:{type:String,required:!0},index:{type:Number,required:!0},store:{type:Object,required:!0},storeProp:{type:String,required:!0}},setup(e){const t=e,{t:r}=j(),d={value:{required:w.withMessage(r("validation.required"),V(t.field.is_required))}},a=L(d,T(()=>t.field),{$scope:t.customFieldScope}),o=T(()=>t.field.type?F(()=>$(`./types/${t.field.type}Type.vue`)):!1);return(u,s)=>{const l=E("BaseInputGroup");return n(),m(l,{label:e.field.label,required:!!e.field.is_required,error:c(a).value.$error&&c(a).value.$errors[0].$message},{default:P(()=>[(n(),m(O(c(o)),{modelValue:e.field.value,"onUpdate:modelValue":s[0]||(s[0]=p=>e.field.value=p),options:e.field.options,invalid:c(a).value.$error,placeholder:e.field.placeholder},null,8,["modelValue","options","invalid","placeholder"]))]),_:1},8,["label","required","error"])}}},N={key:0},J={props:{store:{type:Object,required:!0},storeProp:{type:String,required:!0},isEdit:{type:Boolean,default:!1},type:{type:String,default:null},gridLayout:{type:String,default:"two-column"},isLoading:{type:Boolean,default:null},customFieldScope:{type:String,required:!0}},setup(e){const t=e,r=Y();a();function d(){t.isEdit&&t.store[t.storeProp].fields.forEach(o=>{const u=t.store[t.storeProp].customFields.findIndex(s=>s.id===o.custom_field_id);if(u>-1){let s=o.default_answer;s&&o.custom_field.type==="DateTime"&&(s=C(o.default_answer,"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm")),t.store[t.storeProp].customFields[u]=v(f({},o),{id:o.custom_field_id,value:s,label:o.custom_field.label,options:o.custom_field.options,is_required:o.custom_field.is_required,placeholder:o.custom_field.placeholder,order:o.custom_field.order})}})}async function a(){let u=(await r.fetchCustomFields({type:t.type,limit:"all"})).data.data;u.map(s=>s.value=s.default_answer),t.store[t.storeProp].customFields=S.sortBy(u,s=>s.order),d()}return x(()=>t.store[t.storeProp].fields,o=>{d()}),(o,u)=>{const s=E("BaseInputGrid");return e.store[e.storeProp]&&e.store[e.storeProp].customFields.length>0&&!e.isLoading?(n(),D("div",N,[A(s,{layout:e.gridLayout},{default:P(()=>[(n(!0),D(R,null,k(e.store[e.storeProp].customFields,(l,p)=>(n(),m(M,{key:l.id,"custom-field-scope":e.customFieldScope,store:e.store,"store-prop":e.storeProp,index:p,field:l},null,8,["custom-field-scope","store","store-prop","index","field"]))),128))]),_:1},8,["layout"])])):B("",!0)}}};export{J as _};