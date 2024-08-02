import{r as t,W as Ee,j as e,Y as Ie}from"./app-Cd7KucXb.js";import{S as b}from"./sweetalert2.all-D1jq6Uzp.js";import{X as Ne}from"./index.es-CONMRwCR.js";import{A as Ce}from"./AuthenticatedLayout-CbbYANlG.js";import{F as r}from"./FormField-Dp_8a1tY.js";import{S as j}from"./SelectField-fyozPkJW.js";import{M as Se,S as Fe}from"./SecondaryButton-D7m-MCk_.js";import{P as v}from"./PrimaryButton-DbbhdSuN.js";import{I as Te}from"./ImgField-BfIDLDAP.js";import{W as Ae}from"./WarningButton-BvAH9I19.js";import{F as Pe}from"./Footer-diGZ6D8K.js";import"./tslib.es6-BgyYHPRr.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./transition-FqHLaE6G.js";import"./Logo-CCmd4JRq.js";import"./InputLabel-lXMCEUIO.js";import"./TextInput-BvBV1DpO.js";import"./InputError-B_B5ZySv.js";import"./dialog-j6PSrzX6.js";function Ye({auth:T,equipo_id:E,jugadores:A,equipo:P,userRole:p}){const[y,I]=t.useState(!1),[M,N]=t.useState(""),[R,D]=t.useState(1),[C,O]=t.useState(""),[h,L]=t.useState(!1),q=t.useRef(),k=t.useRef(),U=t.useRef(),B=t.useRef(),z=t.useRef(),w=t.useRef(),G=t.useRef(),W=t.useRef(),H=t.useRef(),_=t.useRef(),$=t.useRef(),J=t.useRef(),V=t.useRef(),X=t.useRef(),Y=t.useRef(),S={id:"",nombreCompleto:"",foto:null,tipoIdentificacion:"",numeroIdentificacion:"",numeroSerie:"",fechaNacimiento:"",lugarNacimiento:"",institucionEducativa:"",grado:"",ciudadInstitucionEducativa:"",telefonoInstitucionEducativa:"",fk_equipo:E,estadoEPS:"",nombreEPS:"",lugarAtencionEPS:"",cuerpoTecnico:""},Q={rowsPerPageText:"Registros por página",rangeSeparatorText:"de",selectAllRowsItem:!0,selectAllRowsItemText:"Todos"},{data:o,setData:d,errors:i,delete:ye,post:g,processing:K}=Ee(S),l=a=>{const{name:n,value:s}=a.target;d(c=>({...c,[n]:s}))},Z=a=>{const{name:n,value:s}=a.target;d(c=>({...c,[n]:s.toUpperCase()}))},ee=a=>{d("foto",a.target.files[0])},m=a=>{const{name:n,value:s}=a.target,c=s.split(" ").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ");d(u=>({...u,[n]:c}))},F=(a,n,s,c,u,le,ce,de,ue,me,pe,he,ge,xe,fe,be,je,ve)=>{I(!0),D(a),a===1?(N("Nuevo Miembro del Equipo"),d(S)):(N("Editar Miembro del Equipo"),d({id:n,nombreCompleto:s,foto:c,tipoIdentificacion:u,numeroIdentificacion:le,numeroSerie:ce,fechaNacimiento:de,lugarNacimiento:ue,institucionEducativa:me,grado:pe,ciudadInstitucionEducativa:he,telefonoInstitucionEducativa:ge,fk_equipo:xe,estadoEPS:fe,nombreEPS:be,lugarAtencionEPS:je,cuerpoTecnico:ve}))},x=()=>{I(!1)},ae=a=>{a.preventDefault(),h?R===1?g(p==="admin"?route("jugadoresAdmin.store"):route("jugadores.store"),{preserveScroll:!0,onSuccess:()=>{f("El Miembro del Equipo ha sido creado")}}):g(p==="admin"?route("jugadoresAdmin.updatepost",o.id):route("jugadores.updatepost",o.id),{preserveScroll:!0,onSuccess:()=>{f("El Miembro del Equipo ha sido actualizado")}}):alert("Debe aceptar la exoneración de responsabilidades para guardar.")},te=a=>{L(a.target.checked)},f=a=>{x(),b.fire({title:a,icon:"success"})},oe=(a,n)=>{b.fire({title:"Activar/Desactivar",text:`¿Está seguro cambiar el estado del Miembro del Equipo ${n}?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Si",cancelButtonText:"No"}).then(s=>{s.isConfirmed&&g(p==="admin"?route("jugadoresAdmin.toggle",a):route("jugadores.toggle",a),{preserveScroll:!0,onSuccess:()=>{f("El Miembro del Equipo ha sido actualizado")},onError:()=>{b.fire({title:"Error",text:"El Miembro del Equipo no ha sido actualizado",icon:"error"})}})})},ne=[{value:"",label:"Seleccione ...",disabled:!0},{value:"CC",label:"Cédula de Ciudadanía"},{value:"CE",label:"Cédula de Extranjería"},{value:"TI",label:"Tarjeta de Identidad"},{value:"RC",label:"Registro Civil"},{value:"PA",label:"Pasaporte"}],ie=[{value:"",label:"Seleccione ...",disabled:!0},{value:"D.L.",label:"Delegado o Director Logístico"},{value:"D.T.",label:"Director Técnico (Entrenador Principal)"},{value:"A.T.",label:"Asistente Técnico"},{value:"P.F.",label:"Preparador Físico"},{value:"P.S.",label:"Preparador Salud"},{value:"U.T.",label:"Utilero"},{value:"T.N.",label:"Tribuna"}],re=A.filter(a=>a.nombreCompleto&&a.nombreCompleto.toLowerCase().includes(C.toLowerCase())),se=[{name:"N°",selector:(a,n)=>n+1,sortable:!0},{name:"EDITAR",cell:a=>e.jsx(Ae,{onClick:()=>F(2,a.id,a.nombreCompleto,a.foto,a.tipoIdentificacion,a.numeroIdentificacion,a.numeroSerie,a.fechaNacimiento,a.lugarNacimiento,a.institucionEducativa,a.grado,a.ciudadInstitucionEducativa,a.telefonoInstitucionEducativa,a.fk_equipo,a.estadoEPS,a.nombreEPS,a.lugarAtencionEPS,a.cuerpoTecnico),children:e.jsx("i",{className:"fa-solid fa-pencil"})})},{name:"ESTADO",cell:a=>e.jsxs("button",{onClick:()=>oe(a.id,a.nombreCompleto),disabled:p==="equipo",className:`flex items-center justify-center w-20 h-10 space-x-1 px-2 py-1 rounded-lg text-white text-sm font-medium transition duration-300 ease-in-out ${a.estado===1?"bg-green-500 hover:bg-green-600":"bg-red-500 hover:bg-red-600"} disabled:opacity-50 disabled:cursor-not-allowed`,children:[e.jsx("i",{className:"fa-solid fa-eye"}),e.jsx("span",{className:"ml-1",children:a.estado===1?"Hab.":"Des."})]})},{name:"NOMBRES Y APELLIDOS",selector:a=>a.nombreCompleto,sortable:!0,wrap:!0},{name:"FOTO",cell:a=>e.jsx("img",{src:`/storage/${a.foto}`,onError:n=>{n.target.onerror=null,n.target.src="/soccer-player.svg",n.target.src.endsWith(".svg")&&(n.target.style.filter="brightness(0.5)")},alt:"Foto",width:"40",height:"40"})},{name:"TIPO DOC",selector:a=>a.tipoIdentificacion,sortable:!0},{name:"# DOC",selector:a=>a.numeroIdentificacion,sortable:!0},{name:"SERIAL FOLIO",selector:a=>a.numeroSerie,sortable:!0},{name:"FECHA NACIMIENTO",selector:a=>a.fechaNacimiento,sortable:!0},{name:"LUGAR NACIMIENTO",selector:a=>a.lugarNacimiento,sortable:!0},{name:"INSTITUCIÓN EDUCATIVA",selector:a=>a.institucionEducativa,sortable:!0},{name:"GRADO",selector:a=>a.grado,sortable:!0},{name:"CIUDAD",selector:a=>a.ciudadInstitucionEducativa,sortable:!0},{name:"TELÉFONO INSTITUCIONAL",selector:a=>a.telefonoInstitucionEducativa,sortable:!0},{name:"Cuerpo Técnico",selector:a=>a.cuerpoTecnico,sortable:!0}];return e.jsxs(Ce,{user:T.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"⚽ Miembros del Equipo 👦👧"}),children:[e.jsx(Ie,{title:"⚽ Miembros del Equipo 👦👧"}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsxs("main",{className:"container flex-grow px-4 py-8 mx-auto mt-32",children:[e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"container p-6 mx-auto overflow-x-auto bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"flex justify-end mt-1 mb-4 space-x-4",children:[e.jsxs(v,{onClick:()=>F(1),children:[e.jsx("i",{className:"mr-2 fa-solid fa-plus-circle"}),"Agregar Miembro del Equipo"]}),e.jsx(v,{children:e.jsxs("a",{href:route("jugadores.pdf",{equipo_id:E}),target:"_blank",download:!0,children:[e.jsx("i",{className:"mr-2 fa-solid fa-file-pdf"}),"Descargar PDF"]})})]}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",placeholder:"Buscar por nombre del Miembro del Equipo",className:"w-full px-4 py-2 border rounded-lg",value:C,onChange:a=>O(a.target.value)})}),e.jsxs("div",{className:"mt-2 text-left",children:[e.jsxs("span",{className:"italic font-bold",children:["NOMBRE EQUIPO:"," "]}),e.jsx("span",{children:P})]}),e.jsx(Ne,{title:"Listado de Miembro del Equipo",columns:se,data:re,pagination:!0,paginationComponentOptions:Q,highlightOnHover:!0,responsive:!0,striped:!0,fixedHeader:!0,noDataComponent:e.jsx("div",{children:"No hay Miembro del Equipo Registrados"})})]})}),e.jsxs(Se,{show:y,close:x,children:[e.jsx("h2",{className:"p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md",children:M}),e.jsxs("form",{onSubmit:ae,className:"grid grid-cols-2 gap-4 p-6",encType:"multipart/form-data",children:[e.jsx(r,{htmlFor:"nombreCompleto",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Nombres y Apellidos"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"nombreCompleto",type:"text",name:"nombreCompleto",value:o.nombreCompleto,onChange:Z,errorMessage:i.nombreCompleto,ref:q}),e.jsx(Te,{htmlFor:"foto",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Foto"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"foto",name:"foto",ref:k,onChange:ee,value:o.foto,errorMessage:i.foto,imageUrl:o.foto?`http://127.0.0.1:8000/storage/${o.foto}`:null}),e.jsx(j,{htmlFor:"cuerpoTecnico",label:e.jsx(e.Fragment,{children:e.jsx("span",{children:"Forma Parte del Cuerpo técnico"})}),id:"cuerpoTecnico",name:"cuerpoTecnico",value:o.cuerpoTecnico,options:ie,onChange:l,errorMessage:i.cuerpoTecnico,ref:X}),e.jsx(j,{htmlFor:"tipoIdentificacion",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Tipo Documento Identidad"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"tipoIdentificacion",name:"tipoIdentificacion",value:o.tipoIdentificacion,options:ne,onChange:l,errorMessage:i.tipoIdentificacion,ref:U}),e.jsx(r,{htmlFor:"numeroIdentificacion",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Número Documento Identidad"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"numeroIdentificacion",type:"number",name:"numeroIdentificacion",value:o.numeroIdentificacion,onChange:l,errorMessage:i.numeroIdentificacion,ref:B}),e.jsx(r,{htmlFor:"numeroSerie",label:e.jsx(e.Fragment,{children:e.jsx("span",{children:"Registro Civil #SERIAL FOLIO si es Jugado"})}),id:"numeroSerie",type:"number",name:"numeroSerie",value:o.numeroSerie,onChange:l,errorMessage:i.numeroSerie,ref:z}),e.jsx(r,{htmlFor:"fechaNacimiento",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Fecha Nacimiento"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"fechaNacimiento",type:"date",name:"fechaNacimiento",value:o.fechaNacimiento,onChange:l,errorMessage:i.fechaNacimiento,ref:w}),e.jsx(r,{htmlFor:"lugarNacimiento",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Lugar Nacimiento"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"lugarNacimiento",type:"text",name:"lugarNacimiento",value:o.lugarNacimiento,onChange:m,errorMessage:i.lugarNacimiento,ref:G}),e.jsx(r,{htmlFor:"institucionEducativa",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Institución Educativa"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"institucionEducativa",type:"text",name:"institucionEducativa",value:o.institucionEducativa,onChange:m,errorMessage:i.institucionEducativa,ref:W}),e.jsx(r,{htmlFor:"grado",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Grado de Estudio Actual o Máximo"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"grado",type:"text",name:"grado",value:o.grado,onChange:l,errorMessage:i.grado,ref:H}),e.jsx(r,{htmlFor:"ciudadInstitucionEducativa",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Ciudad Institución Educativa"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"ciudadInstitucionEducativa",type:"text",name:"ciudadInstitucionEducativa",value:o.ciudadInstitucionEducativa,onChange:m,errorMessage:i.ciudadInstitucionEducativa,ref:_}),e.jsx(r,{htmlFor:"telefonoInstitucionEducativa",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Teléfono Institución Educativa"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"telefonoInstitucionEducativa",type:"number",name:"telefonoInstitucionEducativa",value:o.telefonoInstitucionEducativa,onChange:l,errorMessage:i.telefonoInstitucionEducativa,ref:$}),e.jsx(j,{htmlFor:"estadoEPS",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Estado EPS"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"estadoEPS",name:"estadoEPS",value:o.estadoEPS,options:[{value:"",label:"Seleccione ...",disabled:!0},{value:1,label:"Activo"},{value:0,label:"Inactivo"}],onChange:l,errorMessage:i.estadoEPS,ref:J}),e.jsx(r,{htmlFor:"nombreEPS",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Nombre EPS"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"nombreEPS",type:"text",name:"nombreEPS",value:o.nombreEPS,onChange:m,errorMessage:i.nombreEPS,ref:V}),e.jsx(r,{htmlFor:"lugarAtencionEPS",label:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"lugar Atención EPS"}),e.jsx("span",{className:"text-red-500",children:"*"})]}),id:"lugarAtencionEPS",type:"text",name:"lugarAtencionEPS",value:o.lugarAtencionEPS,onChange:m,errorMessage:i.lugarAtencionEPS,ref:Y}),e.jsxs("div",{className:"flex items-center col-span-2",children:[e.jsx("input",{type:"checkbox",id:"disclaimer",name:"disclaimer",onChange:te,checked:h}),e.jsxs("label",{htmlFor:"disclaimer",className:"ml-2",children:[e.jsx("span",{className:"text-red-500",children:"*"}),"Acepto la exoneración de responsabilidades",e.jsx("a",{href:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Ley 1581 de 2012 de Protección de Datos Personales"}),". Al aceptar, reconozco que autorizo a Alianza Sureña Grupo Empresarial para utilizar los datos personales de los Miembro del Equipo exclusivamente para la gestión y organización de torneos de fútbol. La información recopilada incluye datos detallados como nombre completo, foto, tipo y número de identificación, fecha y lugar de nacimiento, entre otros. Estos datos serán tratados de manera confidencial y solo se usarán para verificar la elegibilidad de los jugadores, organizar eventos y mantener comunicación con los representantes legales sobre actividades relacionadas con el torneo. Los titulares de los datos pueden ejercer sus derechos de acceso, rectificación y actualización contactando a través de CIMA_FUTURASESTRELLAS@hotmail.com o llamando al +57 318 3773718."]})]}),e.jsxs("div",{className:"flex justify-between col-span-2 mt-1",children:[e.jsxs(v,{processing:K.toString(),className:"mt-2",disabled:!h,children:[e.jsx("i",{className:"mr-2 fa-solid fa-save"}),"Guardar"]}),e.jsx(Fe,{onClick:x,children:"Cancelar"})]})]})]})]})}),e.jsx(Pe,{})]})}export{Ye as default};