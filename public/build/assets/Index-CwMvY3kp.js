import{r as a,W as I,j as e,Y as R}from"./app-7rU0G_I8.js";import{S as T}from"./sweetalert2.all-DVa67-UG.js";import{A as V}from"./AuthenticatedLayout-L6D7471O.js";import{F as k}from"./FormField-BEXfSlrC.js";import{M as B,S as P}from"./SecondaryButton-B_p2I0xs.js";import{P as v}from"./PrimaryButton-aNIWIVBo.js";import{W}from"./WarningButton-B9TC4SHd.js";import{T as z}from"./Textarea2-DrotRSKx.js";import{S as G}from"./SelectField-BkMGVqu8.js";import"./transition-BZd35j9q.js";import"./Logo-D_Jsbtp_.js";import"./InputLabel-DQMKk8NV.js";import"./TextInput-CKFLz-7k.js";import"./InputError-oxPWCKOk.js";import"./dialog-3LhKMUvB.js";import"./emotion-unitless.esm-sScrWPmR.js";function re({auth:g,amonestacionesTC:p}){const[b,m]=a.useState(!1),[N,x]=a.useState(""),[y,S]=a.useState(1),F=a.useRef(),C=a.useRef(),M=a.useRef(),u={value:"",description:"",active:"0"},{data:r,setData:l,errors:i,delete:O,post:w,put:A,processing:h}=I(u),c=s=>{const{name:t,value:d}=s.target;l(n=>({...n,[t]:d}))},j=(s,t,d,n,E)=>{m(!0),S(s),s===1?(x("Agregar Falta"),l(u)):(x("Editar Falta"),l({id:t,value:d,description:n,active:E?"1":"0"}))},o=()=>{m(!1)},D=s=>{s.preventDefault(),y===1?w(route("amonestacionesTC.store"),{preserveScroll:!0,onSuccess:()=>{f("Falta guardada.")}}):A(route("amonestacionesTC.update",r.id),{preserveScroll:!0,onSuccess:()=>{f("Falta actualizada")}})},f=s=>{o(),T.fire({title:s,icon:"success"})};return e.jsxs(V,{user:g.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Faltas del Sistema"}),children:[e.jsx(R,{title:"Faltas"}),e.jsxs("div",{className:"container p-6 mx-auto mt-6 bg-white",children:[e.jsx("div",{className:"flex justify-end mt-2 mb-3",children:e.jsxs(v,{onClick:()=>j(1),children:[e.jsx("i",{className:"mr-2 fa-solid fa-plus-circle"})," Añadir Falta"]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border border-gray-400 rounded-lg table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100",children:[e.jsx("th",{className:"px-4 py-2",children:"#"}),e.jsx("th",{className:"px-4 py-2",children:"Valor"}),e.jsx("th",{className:"px-4 py-2",children:"Descripción"}),e.jsx("th",{className:"px-4 py-2",children:"Estado"}),e.jsx("th",{className:"px-4 py-2",children:"Editar"})]})}),e.jsx("tbody",{children:p.length>0?p.map((s,t)=>e.jsxs("tr",{className:"border-b last:border-0",children:[e.jsx("td",{className:"px-4 py-2",children:t+1}),e.jsx("td",{className:"px-4 py-2",children:s.value}),e.jsx("td",{className:"px-4 py-2",children:s.description}),e.jsx("td",{className:"px-4 py-2",children:s.active===1?"Activo":"Inactivo"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx(W,{onClick:()=>j(2,s.id,s.value,s.description,s.active),children:e.jsx("i",{className:"fa-solid fa-pencil"})})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"5",className:"px-4 py-2 text-center",children:"No hay Faltas Registradas"})})})]})})]}),e.jsxs(B,{show:b,onClose:o,children:[e.jsx("h2",{className:"p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md",children:N}),e.jsxs("form",{onSubmit:D,className:"p-6",children:[e.jsx(k,{htmlFor:"value",label:"Valor",id:"value",type:"number",name:"value",ref:F,placeholder:"Valor de la falta.",value:r.value,onChange:c,errorMessage:i.value}),e.jsx(z,{htmlFor:"description",label:"Descripción",id:"description",name:"description",ref:C,placeholder:"Descripción de la falta.",value:r.description,onChange:c,errorMessage:i.description}),e.jsx(G,{htmlFor:"active",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Estado"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"active",ref:M,name:"active",value:r.active,onChange:c,errorMessage:i.active,options:[{value:"",label:"Seleccione...",disabled:!0},{value:"1",label:"Activo"},{value:"0",label:"Inactivo"}]}),e.jsx("div",{className:"mt-6",children:e.jsxs(v,{processing:h?"true":"false",children:[e.jsx("i",{className:"mr-2 fa-solid fa-save"}),h?"Procesando...":"Guardar"]})}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx(P,{onClick:o,children:"Cancelar"})})]})]})]})}export{re as default};