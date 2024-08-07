import{r as a,W as U,j as e,Y as W}from"./app-B7R3xKfR.js";import{S as p}from"./sweetalert2.all-BCuXndMg.js";import{A as Y}from"./AuthenticatedLayout-Y2T7n90j.js";import{F as v}from"./FormField-DdU7T2BP.js";import{S as u}from"./SelectField-P0cQBvqh.js";import{M as J}from"./Modal-CxfqK7zO.js";import{P as K}from"./PrimaryButton-Dmln_z9C.js";import"./Footer-Bc1XkYwF.js";import{B as Q}from"./BackButton-Dguvam4A.js";import{G as X,C as Z}from"./CancelarButton-CSosB64a.js";import"./Dropdown-CMXUyYL3.js";import"./transition-D2aQqEaI.js";import"./InputLabel-TKlKzBkH.js";import"./TextInput-Dk9zkqAb.js";import"./InputError-BugI7SpX.js";import"./defineProperty-DJACW-dl.js";import"./typeof-QjJsDpFa.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./dialog-CeFeWAN5.js";function ve({auth:y,fase:x,programaciones:N,equipos:ee,lugares:P,cantidadEquipos:_,torneo_id:F}){const[S,h]=a.useState(!1),[k,f]=a.useState(""),[w,C]=a.useState(1),E=a.useRef(),H=a.useRef(),M=a.useRef(),B=a.useRef(),L=a.useRef(),g={fk_fase:x[0].id,posicion_local:"",posicion_visitante:"",FechaPartido:"",HoraPartido:"",fk_lugarPartido:""},{data:t,setData:l,errors:o,delete:R,post:q,put:T,processing:$}=U(g),i=r=>{const{name:s,value:c}=r.target;l(m=>({...m,[s]:c}))},j=(r,s,c,m,G,V,O,z)=>{h(!0),C(r),r===1?(f("Programar Partido"),l(g)):r===2&&(f("Editar Partido"),l({id:s,fk_fase:c,posicion_local:m,posicion_visitante:G,FechaPartido:V,HoraPartido:O,fk_lugarPartido:z}))},n=()=>{h(!1)},D=r=>{r.preventDefault(),w===1?q(route("programacionesFaces.store"),{preserveScroll:!0,onSuccess:()=>{d("Partido guardado.")}}):T(route("programacionesFaces.update",t.id),{preserveScroll:!0,onSuccess:()=>{d("Partido actualizado.")}})},d=r=>{n(),p.fire({title:r,icon:"success"})},I=r=>{p.fire({title:"¿Estás seguro?",text:"Esta acción no se puede deshacer.",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar"}).then(s=>{s.isConfirmed&&R(route("programacionesFaces.destroy",r),{preserveScroll:!0,onSuccess:()=>{d("Partido eliminado.")},onError:()=>{p.fire({title:"Error",text:"No se pudo eliminar el partido.",icon:"error"})}})})},b=[{value:"",label:"Seleccione ...",disabled:!0},...Array.from({length:_},(r,s)=>({value:s+1,label:`Equipo ${s+1}`}))],A=[{value:"",label:"Seleccione un lugar"},...P.map(r=>({value:r.id,label:r.nomLugar}))];return e.jsxs(Y,{user:y.user,header:e.jsxs("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:["Programación de Partidos - ",x[0].nombreFase]}),children:[e.jsx(W,{title:"Programación Torneo"}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsxs("main",{className:"container flex-grow px-4 py-8 mx-auto",children:[e.jsxs("div",{className:"min-h-screen py-6 bg-gray-100",children:[e.jsxs("div",{className:"flex justify-end mt-1 mb-4 space-x-2 sm:space-x-4",children:[e.jsxs(K,{onClick:()=>j(1),children:[" ",e.jsx("i",{className:"fa-solid fa-plus-circle"}),"Programar Partido"]}),e.jsx(Q,{to:`/fases?torneo_id=${F}`})]}),e.jsx("h1",{className:"mb-4 text-2xl font-bold",children:"Listado de Partidos"}),e.jsx("div",{className:"grid py-6 bg-white v-screen place-items-center",children:e.jsxs("table",{className:"border-gray-400 table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border",children:"#"}),e.jsx("th",{className:"px-4 py-2 border",children:"Local"}),e.jsx("th",{className:"px-4 py-2 border",children:"Visitante"}),e.jsx("th",{className:"px-4 py-2 border",children:"Fecha"}),e.jsx("th",{className:"px-4 py-2 border",children:"Hora"}),e.jsx("th",{className:"px-4 py-2 border",children:"Lugar"}),e.jsx("th",{className:"px-2 py-2 border",children:"Editar"}),e.jsx("th",{className:"px-2 py-2 border",children:"Eliminar"}),e.jsx("th",{className:"px-2 py-2 border",children:"Resultados"})]})}),e.jsx("tbody",{children:N.map((r,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 border",children:s+1}),e.jsx("td",{className:"px-4 py-2 border",children:r.posicion_local}),e.jsx("td",{className:"px-4 py-2 border",children:r.posicion_visitante}),e.jsx("td",{className:"px-4 py-2 border",children:r.FechaPartido}),e.jsx("td",{className:"px-4 py-2 border",children:new Date(`1970-01-01T${r.HoraPartido}`).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}),e.jsx("td",{className:"px-4 py-2 border",children:r.nomLugar}),e.jsx("td",{className:"px-2 py-2 border",children:e.jsx("button",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200   focus:ring-4 focus:outline-none focus:ring-red-100",onClick:()=>j(2,r.id,r.fk_fase,r.posicion_local,r.posicion_visitante,r.FechaPartido,r.HoraPartido,r.fk_lugarPartido),children:e.jsx("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0",children:e.jsx("i",{className:"fa-solid fa-edit"})})})}),e.jsx("td",{className:"px-2 py-2 border",children:e.jsx("button",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200",onClick:()=>I(r.id),children:e.jsx("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0",children:e.jsx("i",{className:"fa-solid fa-trash"})})})}),e.jsx("td",{className:"px-4 py-2 border",children:e.jsx("a",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200  ",href:`/resultadosPartidos?partido=${r.id}&torneo=${r.torneo_id}`,children:e.jsx("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0",children:e.jsx("i",{className:"fa-solid fa-flag"})})})})]},r.id))})]})})]}),e.jsxs(J,{show:S,onClose:n,children:[e.jsx("h2",{className:"p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md",children:k}),e.jsxs("form",{onSubmit:D,className:"p-6",children:[e.jsx("input",{type:"text",value:t.fk_fase,name:"fk_fase",readOnly:!0,className:"hidden"}),o.fk_fase&&e.jsx("p",{className:"text-red-500",children:o.fk_fase}),e.jsx(u,{htmlFor:"posicion_local",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Equipo Local"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"posicion_local",ref:E,name:"posicion_local",value:t.posicion_local,onChange:i,options:b,errorMessage:o.posicion_local}),e.jsx(u,{htmlFor:"posicion_visitante",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Equipo Visitante"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"posicion_visitante",ref:H,name:"posicion_visitante",value:t.posicion_visitante,onChange:i,options:b,errorMessage:o.posicion_visitante}),e.jsx(v,{htmlFor:"FechaPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Fecha del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),type:"date",id:"FechaPartido",ref:M,name:"FechaPartido",value:t.FechaPartido,onChange:i,errorMessage:o.FechaPartido}),e.jsx(v,{htmlFor:"HoraPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Hora del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),type:"time",id:"HoraPartido",ref:B,name:"HoraPartido",value:t.HoraPartido,onChange:i,errorMessage:o.HoraPartido}),e.jsx(u,{htmlFor:"fk_lugarPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Lugar del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"fk_lugarPartido",ref:L,name:"fk_lugarPartido",value:t.fk_lugarPartido,onChange:i,options:A,errorMessage:o.fk_lugarPartido}),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx(X,{processing:$.toString(),className:"px-4 py-2 mt-2",children:"Guardar"}),e.jsx(Z,{onClick:n,className:"px-4 py-2 mt-2",children:"Cancelar"})]})]})]})]})})]})}export{ve as default};
