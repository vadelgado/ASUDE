import{r,W,j as e,Y}from"./app-DfQqMImO.js";import{S as m}from"./sweetalert2.all-DA_rus50.js";import{A as J}from"./AuthenticatedLayout-BuzWzPca.js";import{D as K}from"./DangerButton-Biep_--n.js";import{F as N}from"./FormField-DXY6UGQw.js";import{S as h}from"./SelectField-CM3-_shi.js";import{S as P,M as Q}from"./SecondaryButton-DU_NsLGj.js";import{P as y}from"./PrimaryButton-DLJB6DDv.js";import{F as X}from"./Footer-B1-JtGzi.js";import"./transition-DRvO2rdA.js";import"./Logo-D3k11qLX.js";import"./InputLabel-DyYVZk7L.js";import"./TextInput-NgTYPIwq.js";import"./InputError-DxRqiWu3.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./dialog-f6mzOL02.js";function fe({auth:_,fase:p,programaciones:v,equipos:Z,lugares:F,cantidadEquipos:S}){const[k,u]=r.useState(!1),[C,f]=r.useState(""),[w,H]=r.useState(1),M=r.useRef(),E=r.useRef(),L=r.useRef(),R=r.useRef(),T=r.useRef(),j={fk_fase:p[0].id,posicion_local:"",posicion_visitante:"",FechaPartido:"",HoraPartido:"",fk_lugarPartido:""},{data:t,setData:l,errors:i,delete:B,post:D,put:$,processing:q}=W(j),o=s=>{const{name:a,value:d}=s.target;l(x=>({...x,[a]:d}))},g=(s,a,d,x,O,z,G,U)=>{u(!0),H(s),s===1?(f("Programar Partido"),l(j)):s===2&&(f("Editar Partido"),l({id:a,fk_fase:d,posicion_local:x,posicion_visitante:O,FechaPartido:z,HoraPartido:G,fk_lugarPartido:U}))},n=()=>{u(!1)},I=s=>{s.preventDefault(),w===1?D(route("programacionesFaces.store"),{preserveScroll:!0,onSuccess:()=>{c("Partido guardado.")}}):$(route("programacionesFaces.update",t.id),{preserveScroll:!0,onSuccess:()=>{c("Partido actualizado.")}})},c=s=>{n(),m.fire({title:s,icon:"success"})},A=s=>{m.fire({title:"¿Estás seguro?",text:"Esta acción no se puede deshacer.",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar"}).then(a=>{a.isConfirmed&&B(route("programacionesFaces.destroy",s),{preserveScroll:!0,onSuccess:()=>{c("Partido eliminado.")},onError:()=>{m.fire({title:"Error",text:"No se pudo eliminar el partido.",icon:"error"})}})})},b=[{value:"",label:"Seleccione ...",disabled:!0},...Array.from({length:S},(s,a)=>({value:a+1,label:`Equipo ${a+1}`}))],V=[{value:"",label:"Seleccione un lugar"},...F.map(s=>({value:s.id,label:s.nomLugar}))];return e.jsxs(J,{user:_.user,header:e.jsxs("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:["Programación de Partidos - ",p[0].nombreFase]}),children:[e.jsx(Y,{title:"Programación Torneo"}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsxs("main",{className:"flex-grow container mx-auto px-4 py-8 mt-32",children:[e.jsx("div",{className:"grid bg-white v-screen place-items-center",children:e.jsx("div",{className:"flex justify-end mt-2 mb-3",children:e.jsxs(y,{onClick:()=>g(1),children:[e.jsx("i",{className:"fa-solid fa-plus-circle"}),"Programar Partido"]})})}),e.jsx("div",{className:"grid py-6 bg-white v-screen place-items-center",children:e.jsxs("table",{className:"border-gray-400 table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border",children:"#"}),e.jsx("th",{className:"px-4 py-2 border",children:"Local"}),e.jsx("th",{className:"px-4 py-2 border",children:"Visitante"}),e.jsx("th",{className:"px-4 py-2 border",children:"Fecha"}),e.jsx("th",{className:"px-4 py-2 border",children:"Hora"}),e.jsx("th",{className:"px-4 py-2 border",children:"Lugar"}),e.jsx("th",{className:"px-2 py-2 border"}),e.jsx("th",{className:"px-2 py-2 border"})]})}),e.jsx("tbody",{children:v.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 border",children:a+1}),e.jsx("td",{className:"px-4 py-2 border",children:s.posicion_local}),e.jsx("td",{className:"px-4 py-2 border",children:s.posicion_visitante}),e.jsx("td",{className:"px-4 py-2 border",children:s.FechaPartido}),e.jsx("td",{className:"px-4 py-2 border",children:new Date(`1970-01-01T${s.HoraPartido}`).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}),e.jsx("td",{className:"px-4 py-2 border",children:s.nomLugar}),e.jsx("td",{className:"px-2 py-2 border",children:e.jsx(P,{onClick:()=>g(2,s.id,s.fk_fase,s.posicion_local,s.posicion_visitante,s.FechaPartido,s.HoraPartido,s.fk_lugarPartido),children:e.jsx("i",{className:"fa-solid fa-pencil"})})}),e.jsx("td",{className:"px-2 py-2 border",children:e.jsx(K,{onClick:()=>A(s.id),children:e.jsx("i",{className:"fa-solid fa-trash"})})}),e.jsx("td",{className:"px-4 py-2 border border-gray-400",children:e.jsx("a",{className:"text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2",href:`/resultadosPartidos?partido=${s.id}&torneo=${s.torneo_id}`,children:e.jsxs("i",{className:"fa-regular fa-flag",children:[" ","Resultados"]})})}),e.jsx("td",{className:"px-4 py-2 border border-gray-400",children:e.jsx("a",{className:"text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2",href:`/faltasCuerpoTecnico?partido=${s.id}&torneo=${s.torneo_id}`,children:e.jsxs("i",{className:"fa-regular fa-flag",children:[" ","Faltas CT"]})})})]},s.id))})]})}),e.jsxs(Q,{show:k,onClose:n,children:[e.jsx("h2",{className:"p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md",children:C}),e.jsxs("form",{onSubmit:I,className:"p-6",children:[e.jsx("input",{type:"text",value:t.fk_fase,name:"fk_fase",readOnly:!0,className:"hidden"}),i.fk_fase&&e.jsx("p",{className:"text-red-500",children:i.fk_fase}),e.jsx(h,{htmlFor:"posicion_local",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Equipo Local"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"posicion_local",ref:M,name:"posicion_local",value:t.posicion_local,onChange:o,options:b,errorMessage:i.posicion_local}),e.jsx(h,{htmlFor:"posicion_visitante",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Equipo Visitante"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"posicion_visitante",ref:E,name:"posicion_visitante",value:t.posicion_visitante,onChange:o,options:b,errorMessage:i.posicion_visitante}),e.jsx(N,{htmlFor:"FechaPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Fecha del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),type:"date",id:"FechaPartido",ref:L,name:"FechaPartido",value:t.FechaPartido,onChange:o,errorMessage:i.FechaPartido}),e.jsx(N,{htmlFor:"HoraPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Hora del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),type:"time",id:"HoraPartido",ref:R,name:"HoraPartido",value:t.HoraPartido,onChange:o,errorMessage:i.HoraPartido}),e.jsx(h,{htmlFor:"fk_lugarPartido",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Lugar del Partido"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"fk_lugarPartido",ref:T,name:"fk_lugarPartido",value:t.fk_lugarPartido,onChange:o,options:V,errorMessage:i.fk_lugarPartido}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(P,{onClick:n,children:"Cancelar"}),e.jsx(y,{className:"ml-4",type:"submit",disabled:q,children:"Guardar"})]})]})]})]})}),e.jsx(X,{})]})}export{fe as default};
