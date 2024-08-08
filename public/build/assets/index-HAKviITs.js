import{r as t,W,j as e,Y}from"./app-CpscUkhH.js";import{S as x}from"./sweetalert2.all-vgUrIAgS.js";import{A as J}from"./AuthenticatedLayout-CN2hbycP.js";import{F as y}from"./FormField-CYGdgTtV.js";import{S as p}from"./SelectField-BHi6LQ7R.js";import{M as K}from"./Modal-YmEBGxuH.js";import{P as Q}from"./PrimaryButton-DBRMAumo.js";import"./Footer-CUzeveoC.js";import{B as U}from"./BackButton-DOzZAPC1.js";import{G as X,C as Z}from"./CancelarButton-DhOfI6WO.js";import"./Dropdown-Bag3bUoI.js";import"./transition-DFaYZSng.js";import"./InputLabel-DgFhPcYt.js";import"./TextInput-BRJ60Nu1.js";import"./InputError-BhrALRB9.js";import"./defineProperty-DJACW-dl.js";import"./typeof-QjJsDpFa.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./dialog-B1i_YR6N.js";function ye({auth:v,fase:u,programaciones:N,equipos:ee,lugares:P,cantidadEquipos:_,torneo_id:F}){const[S,h]=t.useState(!1),[w,f]=t.useState(""),[k,C]=t.useState(1),E=t.useRef(),H=t.useRef(),M=t.useRef(),$=t.useRef(),L=t.useRef(),g={fk_fase:u[0].id,posicion_local:"",posicion_visitante:"",FechaPartido:"",HoraPartido:"",fk_lugarPartido:""},{data:a,setData:l,errors:o,delete:q,post:B,put:R,processing:T}=W(g),i=r=>{const{name:s,value:c}=r.target;l(m=>({...m,[s]:c}))},b=(r,s,c,m,A,G,O,z)=>{h(!0),C(r),r===1?(f("Programar Partido"),l(g)):r===2&&(f("Editar Partido"),l({id:s,fk_fase:c,posicion_local:m,posicion_visitante:A,FechaPartido:G,HoraPartido:O,fk_lugarPartido:z}))},n=()=>{h(!1)},V=r=>{r.preventDefault(),k===1?B(route("programacionesFaces.store"),{preserveScroll:!0,onSuccess:()=>{d("Partido guardado.")}}):R(route("programacionesFaces.update",a.id),{preserveScroll:!0,onSuccess:()=>{d("Partido actualizado.")}})},d=r=>{n(),x.fire({title:r,icon:"success"})},D=r=>{x.fire({title:"¿Estás seguro?",text:"Esta acción no se puede deshacer.",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar"}).then(s=>{s.isConfirmed&&q(route("programacionesFaces.destroy",r),{preserveScroll:!0,onSuccess:()=>{d("Partido eliminado.")},onError:()=>{x.fire({title:"Error",text:"No se pudo eliminar el partido.",icon:"error"})}})})},j=[{value:"",label:"Seleccione ...",disabled:!0},...Array.from({length:_},(r,s)=>({value:s+1,label:`Equipo ${s+1}`}))],I=[{value:"",label:"Seleccione un lugar"},...P.map(r=>({value:r.id,label:r.nomLugar}))];return e.jsxs(J,{user:v.user,header:e.jsxs("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:["Programación de Partidos - ",u[0].nombreFase]}),children:[e.jsx(Y,{title:"Programación Torneo"}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsxs("main",{className:"container flex-grow px-4 py-8 mx-auto",children:[e.jsxs("div",{className:"min-h-screen py-6 bg-gray-100",children:[e.jsxs("div",{className:"flex justify-end mt-1 mb-4 space-x-2 sm:space-x-4",children:[e.jsxs(Q,{onClick:()=>b(1),className:"px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600",children:[e.jsx("i",{className:"fa-solid fa-plus-circle"})," ","Programar Partido"]}),e.jsx(U,{to:`/fases?torneo_id=${F}`,className:"px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"})]}),e.jsx("h1",{className:"mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl",children:"Listado de Partidos"}),e.jsx("div",{className:"py-6 overflow-x-auto bg-white shadow-lg sm:rounded-lg",children:e.jsxs("table",{className:"min-w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border border-gray-300",children:[e.jsx("th",{className:"px-4 py-2 text-left border border-gray-300",children:"#"}),e.jsx("th",{className:"px-4 py-2 text-left border border-gray-300",children:"Local"}),e.jsx("th",{className:"px-4 py-2 text-left border border-gray-300",children:"Visitante"}),e.jsx("th",{className:"px-4 py-2 text-left border border-gray-300",children:"Fecha"}),e.jsx("th",{className:"px-4 py-2 text-left border border-gray-300",children:"Hora"}),e.jsx("th",{className:"px-4 py-2 text-left border border-gray-300",children:"Lugar"}),e.jsx("th",{className:"px-2 py-2 text-left border border-gray-300",children:"Editar"}),e.jsx("th",{className:"px-2 py-2 text-left border border-gray-300",children:"Eliminar"}),e.jsx("th",{className:"px-2 py-2 text-left border border-gray-300",children:"Resultados"})]})}),e.jsx("tbody",{children:N.map((r,s)=>e.jsxs("tr",{className:"border border-gray-300",children:[e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:s+1}),e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:r.nombreEquipoLocal?`${r.posicion_local} - ${r.nombreEquipoLocal}`:r.posicion_local}),e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:r.nombreEquipoVisitante?`${r.posicion_visitante} - ${r.nombreEquipoVisitante}`:r.posicion_visitante}),e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:r.FechaPartido}),e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:new Date(`1970-01-01T${r.HoraPartido}`).toLocaleString("es-ES",{hour:"numeric",minute:"numeric",hour12:!0})}),e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:r.nomLugar}),e.jsx("td",{className:"px-2 py-2 border border-gray-300",children:e.jsx("button",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100",onClick:()=>b(2,r.id,r.fk_fase,r.posicion_local,r.posicion_visitante,r.FechaPartido,r.HoraPartido,r.fk_lugarPartido),children:e.jsx("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0",children:e.jsx("i",{className:"fa-solid fa-edit"})})})}),e.jsx("td",{className:"px-2 py-2 border border-gray-300",children:e.jsx("button",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200",onClick:()=>D(r.id),children:e.jsx("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0",children:e.jsx("i",{className:"fa-solid fa-trash"})})})}),e.jsx("td",{className:"px-4 py-2 border border-gray-300",children:e.jsx("a",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200",href:`/resultadosPartidos?partido=${r.id}&torneo=${r.torneo_id}`,children:e.jsx("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0",children:e.jsx("i",{className:"fa-solid fa-flag"})})})})]},`${r.id}-${s}`))})]})})]}),e.jsxs(K,{show:S,onClose:n,children:[e.jsx("h2",{className:"p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md",children:w}),e.jsxs("form",{onSubmit:V,className:"p-6",children:[e.jsx("input",{type:"text",value:a.fk_fase,name:"fk_fase",readOnly:!0,className:"hidden"}),o.fk_fase&&e.jsx("p",{className:"text-red-500",children:o.fk_fase}),e.jsx(p,{htmlFor:"posicion_local",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Equipo Local"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"posicion_local",ref:E,name:"posicion_local",value:a.posicion_local,onChange:i,options:j,errorMessage:o.posicion_local}),e.jsx(p,{htmlFor:"posicion_visitante",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Equipo Visitante"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"posicion_visitante",ref:H,name:"posicion_visitante",value:a.posicion_visitante,onChange:i,options:j,errorMessage:o.posicion_visitante}),e.jsx(y,{htmlFor:"FechaPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Fecha del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),type:"date",id:"FechaPartido",ref:M,name:"FechaPartido",value:a.FechaPartido,onChange:i,errorMessage:o.FechaPartido}),e.jsx(y,{htmlFor:"HoraPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Hora del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),type:"time",id:"HoraPartido",ref:$,name:"HoraPartido",value:a.HoraPartido,onChange:i,errorMessage:o.HoraPartido}),e.jsx(p,{htmlFor:"fk_lugarPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Lugar del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"fk_lugarPartido",ref:L,name:"fk_lugarPartido",value:a.fk_lugarPartido,onChange:i,options:I,errorMessage:o.fk_lugarPartido}),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx(X,{processing:T.toString(),className:"px-4 py-2 mt-2",children:"Guardar"}),e.jsx(Z,{onClick:n,className:"px-4 py-2 mt-2",children:"Cancelar"})]})]})]})]})})]})}export{ye as default};
