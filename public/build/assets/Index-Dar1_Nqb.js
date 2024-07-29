import{r as t,W as ee,j as e,Y as oe}from"./app-DfQqMImO.js";import{S as h}from"./sweetalert2.all-DA_rus50.js";import{A as re}from"./AuthenticatedLayout-BuzWzPca.js";import{F as d}from"./FormField-DXY6UGQw.js";import{S as N}from"./SelectField-CM3-_shi.js";import{S as I,M as te}from"./SecondaryButton-DU_NsLGj.js";import{P as y}from"./PrimaryButton-DLJB6DDv.js";import{I as ae}from"./ImgField-DZqal46L.js";import{W as le}from"./WarningButton-hSJ7zxnQ.js";import"./transition-DRvO2rdA.js";import"./Logo-D3k11qLX.js";import"./InputLabel-DyYVZk7L.js";import"./TextInput-NgTYPIwq.js";import"./InputError-DxRqiWu3.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./dialog-f6mzOL02.js";function ye({auth:v,cuerposTecnicos:C,equipo_id:T,equipo:E,userRole:m}){const[F,b]=t.useState(!1),[S,g]=t.useState(""),[D,M]=t.useState(1);t.useRef();const A=t.useRef(),O=t.useRef(),P=t.useRef(),R=t.useRef(),w=t.useRef(),L=t.useRef(),B=t.useRef(),U=t.useRef(),p={id:"",fk_equipo:T,fotoCuerpoTecnico:"",cargo:"",nombreCompleto:"",tipoIdentificacion:"",numeroIdentificacion:"",telefonoFijo:"",telefonoCelular:"",correoElectronico:""},{data:r,setData:i,errors:l,delete:ne,post:u,processing:k}=ee(p),s=o=>{const{name:a,value:n}=o.target;i(c=>({...c,[a]:n}))},W=o=>{const{name:a,value:n}=o.target;i(c=>({...c,[a]:n.toUpperCase()}))},$=o=>{i("fotoCuerpoTecnico",o.target.files[0])},j=(o,a,n,c,Q,V,H,J,K,X,Z)=>{b(!0),M(o),o===1?(g("Crear Cuerpo Técnico"),i(p)):(g("Editar Cuerpo Técnico"),i({id:a,fk_equipo:n,fotoCuerpoTecnico:c,cargo:Q,nombreCompleto:V,tipoIdentificacion:H,numeroIdentificacion:J,telefonoFijo:K,telefonoCelular:X,correoElectronico:Z}))},f=()=>{b(!1)},x=o=>{f(),h.fire({icon:"success",title:o,showConfirmButton:!1,timer:1500}).then(()=>{i(p)})},q=o=>{o.preventDefault(),D===1?u(m==="admin"?route("cuerpoTecnicoAdmin.store"):route("cuerpoTecnico.store"),{preserveScroll:!0,onSuccess:()=>{x("Cuerpo Técnico creado correctamente")}}):u(m==="admin"?route("cuerpoTecnicoAdmin.updatepost",r.id):route("cuerpoTecnico.updatepost",r.id),{preserveScroll:!0,onSuccess:()=>{x("Cuerpo Técnico actualizado correctamente")}})},z=(o,a)=>{h.fire({title:"Activar/Desactivar Miembro del Cuerpo Técnico",text:`¿Está seguro cambiar el estado del Miembro Cuerpo Técnico ${a}?`,icon:"warning",showCancelButton:!0,confirmButtonText:"Sí",cancelButtonText:"No"}).then(n=>{n.isConfirmed&&u(m==="admin"?route("cuerpoTecnicoAdmin.toggle",o):route("cuerpoTecnico.toggle",o),{preserveScroll:!0,onSuccess:()=>{x("El miembro del Cuerpo Técnico ha cambiado de estado correctamente")},onError:()=>{h.fire({title:"Error",text:"El miembro del Cuerpo Técnico no ha sido actualizado",icon:"error"})}})})},G=[{value:"",label:"Seleccione ...",disabled:!0},{value:"CC",label:"Cédula de Ciudadanía"},{value:"CE",label:"Cédula de Extranjería"},{value:"TI",label:"Tarjeta de Identidad"},{value:"PA",label:"Pasaporte"}],Y=[{value:"",label:"Seleccione ...",disabled:!0},{value:"D.L.",label:"Director Logístico o Delegado"},{value:"D.T.",label:"Director Técnico (Entrenador Principal)"},{value:"A.T.",label:"Asistente Técnico"},{value:"P.F.",label:"Preparador Físico"},{value:"P.S.",label:"Preparador Salud"},{value:"U.T.",label:"Utilero"},{value:"T.N.",label:"Tribuna"}],_={"D.L.":"Director Logístico o Delegado","D.T.":"Director Técnico (Entrenador Principal)","A.T.":"Asistente Técnico","P.F.":"Preparador Físico","P.S.":"Preparador Salud","U.T.":"Utilero","T.N.":"Tribuna"};return e.jsxs(re,{user:v.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"⚽ Cuerpo Técnico 👦👧"}),children:[e.jsx(oe,{title:"⚽ Cuerpo Técnico 👦👧"}),e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"container p-6 mx-auto overflow-x-auto bg-white rounded-lg shadow-md",children:[e.jsx("div",{className:"flex justify-end mt-1 mb-4",children:e.jsxs(y,{onClick:()=>j(1),children:[e.jsx("i",{className:"mr-2 fa-solid fa-plus-circle"}),"Agregar Miembro"]})}),e.jsxs("div",{className:"w-full mt-2 text-left",children:[e.jsxs("span",{className:"italic font-bold",children:["NOMBRE EQUIPO:"," "]}),e.jsx("span",{children:E})]}),e.jsxs("table",{className:"w-full mt-4 border border-gray-400 table-auto",children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-2",children:"N°"}),e.jsx("th",{className:"px-2 py-2",children:"NOMBRES Y APELLIDOS"}),e.jsx("th",{className:"px-2 py-2",children:"FOTO"}),e.jsx("th",{className:"px-2 py-2",children:"CARGO"}),e.jsx("th",{className:"px-2 py-2",children:"TIPO DOC"}),e.jsx("th",{className:"px-2 py-2",children:"# DOC"}),e.jsx("th",{className:"px-2 py-2",children:"TELÉFONO CELULAR"}),e.jsx("th",{className:"px-2 py-2",children:"CORREO ELECTRÓNICO"}),e.jsx("th",{className:"px-2 py-2",children:"ACCIONES"})]})}),e.jsx("tbody",{children:C.length>0?C.map((o,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 py-2 border",children:a+1}),e.jsx("td",{className:"px-2 py-2 border",children:o.nombreCompleto}),e.jsx("td",{className:"flex items-center justify-center px-2 py-2 border",children:e.jsx("img",{src:`/storage/${o.fotoCuerpoTecnico}`,alt:o.nombreCompleto,className:"object-cover w-16 h-16 border rounded-full"})}),e.jsx("td",{className:"px-2 py-2 border",children:_[o.cargo]}),e.jsx("td",{className:"px-2 py-2 border",children:o.tipoIdentificacion}),e.jsx("td",{className:"px-2 py-2 border",children:o.numeroIdentificacion}),e.jsx("td",{className:"px-2 py-2 border",children:o.telefonoCelular}),e.jsx("td",{className:"px-2 py-2 border",children:o.correoElectronico}),e.jsxs("td",{className:"px-2 py-2 space-x-2 border",children:[e.jsx(le,{onClick:()=>j(2,o.id,o.fk_equipo,o.fotoCuerpoTecnico,o.cargo,o.nombreCompleto,o.tipoIdentificacion,o.numeroIdentificacion,o.telefonoFijo,o.telefonoCelular,o.correoElectronico),children:e.jsx("i",{className:"fa-solid fa-pencil"})}),e.jsxs(I,{onClick:()=>z(o.id,o.nombreCompleto),children:[e.jsx("i",{className:"fa-solid fa-eye"}),o.estadoCuerpoTecnico===1?"Desactivar":"Activar"]})]})]},o.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"9",className:"px-2 py-2 text-center border",children:"Usted no ha subido ningún Miembro del Cuerpo Técnico. 👀"})})})]})]})}),e.jsxs(te,{show:F,close:f,children:[e.jsx("h2",{className:"p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md",children:S}),e.jsxs("form",{onSubmit:q,className:"grid grid-cols-2 gap-4 p-6",encType:"multipart/form-data",children:[e.jsx(d,{htmlFor:"nombreCompleto",label:"Nombres y Apellidos",id:"nombreCompleto",type:"text",name:"nombreCompleto",value:r.nombreCompleto,onChange:W,errorMessage:l.nombreCompleto,ref:P}),e.jsx(N,{htmlFor:"cargo",label:"Cargo",id:"cargo",name:"cargo",value:r.cargo,options:Y,onChange:s,errorMessage:l.cargo,ref:O}),e.jsx(N,{htmlFor:"tipoIdentificacion",label:"Tipo Documento Identidad",id:"tipoIdentificacion",name:"tipoIdentificacion",value:r.tipoIdentificacion,options:G,onChange:s,errorMessage:l.tipoIdentificacion,ref:R}),e.jsx(d,{htmlFor:"numeroIdentificacion",label:"Número Documento Identidad",id:"numeroIdentificacion",type:"number",name:"numeroIdentificacion",value:r.numeroIdentificacion,onChange:s,errorMessage:l.numeroIdentificacion,ref:w}),e.jsx(d,{htmlFor:"telefonoFijo",label:"Teléfono Fijo",id:"telefonoFijo",type:"number",name:"telefonoFijo",value:r.telefonoFijo,onChange:s,errorMessage:l.telefonoFijo,ref:L}),e.jsx(d,{htmlFor:"telefonoCelular",label:"Teléfono Celular",id:"telefonoCelular",type:"number",name:"telefonoCelular",value:r.telefonoCelular,onChange:s,errorMessage:l.telefonoCelular,ref:B}),e.jsx(d,{htmlFor:"correoElectronico",label:"Correo Electrónico",id:"correoElectronico",type:"email",name:"correoElectronico",value:r.correoElectronico,onChange:s,errorMessage:l.correoElectronico,ref:U}),e.jsx(ae,{htmlFor:"fotoCuerpoTecnico",label:"Foto Cuerpo Técnico",id:"fotoCuerpoTecnico",name:"fotoCuerpoTecnico",value:r.fotoCuerpoTecnico,onChange:$,errorMessage:l.fotoCuerpoTecnico,ref:A,imageUrl:r.fotoCuerpoTecnico?`http://127.0.0.1:8000/storage/${r.fotoCuerpoTecnico}`:null}),e.jsxs("div",{className:"flex justify-between col-span-2 mt-1",children:[e.jsxs(y,{processing:k.toString(),className:"mt-2",children:[e.jsx("i",{className:"mr-2 fa-solid fa-save"}),"Guardar"]}),e.jsx(I,{onClick:f,children:"Cancelar"})]})]})]})]})}export{ye as default};
