import{W as p,r as g,j as e,Y as x}from"./app-B7R3xKfR.js";import{A as f}from"./AuthenticatedLayout-Y2T7n90j.js";import{I as l}from"./InputError-BugI7SpX.js";import{I as o}from"./InputLabel-TKlKzBkH.js";import{P as b}from"./PrimaryButton-Dmln_z9C.js";import{T as t}from"./TextInput-Dk9zkqAb.js";import"./Footer-Bc1XkYwF.js";import"./Dropdown-CMXUyYL3.js";import"./transition-D2aQqEaI.js";function q({auth:m}){const{data:i,setData:r,post:n,processing:d,errors:s,reset:c}=p({identificacion:"",name:"",email:"",celular:"",password:"",password_confirmation:"",role:"admin"});g.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),n(route("admin.store"))};return e.jsxs(f,{user:m.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Registrar Administrador 💼"}),children:[e.jsx(x,{title:"Registrar Administrador"}),e.jsx("div",{className:"flex flex-col min-h-screen bg-gray-100",children:e.jsx("main",{className:"container flex-grow px-6 py-8 mx-auto",children:e.jsxs("form",{onSubmit:u,className:"p-8 bg-white rounded-lg shadow-md",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx(o,{htmlFor:"identificacion",value:"Identificación"}),e.jsx(t,{id:"identificacion",name:"identificacion",value:i.identificacion,className:"block w-full p-2 mt-1 border border-gray-300 rounded-lg",autoComplete:"identificacion",onChange:a=>r("identificacion",a.target.value),required:!0,type:"number"}),e.jsx(l,{message:s.identificacion,className:"mt-2"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(o,{htmlFor:"name",value:"Nombre Completo"}),e.jsx(t,{id:"name",name:"name",value:i.name,className:"block w-full p-2 mt-1 border border-gray-300 rounded-lg",autoComplete:"name",onChange:a=>r("name",a.target.value),required:!0}),e.jsx(l,{message:s.name,className:"mt-2"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(o,{htmlFor:"email",value:"Email"}),e.jsx(t,{id:"email",type:"email",name:"email",value:i.email,className:"block w-full p-2 mt-1 border border-gray-300 rounded-lg",autoComplete:"email",onChange:a=>r("email",a.target.value),required:!0}),e.jsx(l,{message:s.email,className:"mt-2"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(o,{htmlFor:"celular",value:"Celular"}),e.jsx(t,{id:"celular",name:"celular",value:i.celular,className:"block w-full p-2 mt-1 border border-gray-300 rounded-lg",autoComplete:"celular",onChange:a=>r("celular",a.target.value.replace(/[^0-9]/g,"")),required:!0,type:"tel",pattern:"[0-9]{10,15}"}),e.jsx(l,{message:s.celular,className:"mt-2"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(o,{htmlFor:"password",value:"Contraseña"}),e.jsx(t,{id:"password",type:"password",name:"password",value:i.password,className:"block w-full p-2 mt-1 border border-gray-300 rounded-lg",autoComplete:"new-password",onChange:a=>r("password",a.target.value),required:!0}),e.jsx(l,{message:s.password,className:"mt-2"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(o,{htmlFor:"password_confirmation",value:"Confirmar Contraseña"}),e.jsx(t,{id:"password_confirmation",type:"password",name:"password_confirmation",value:i.password_confirmation,className:"block w-full p-2 mt-1 border border-gray-300 rounded-lg",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value),required:!0}),e.jsx(l,{message:s.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"hidden",children:[e.jsx(o,{htmlFor:"role",value:"Role"}),e.jsx(t,{id:"role",name:"role",value:"admin",className:"block w-full mt-1",autoComplete:"role",onChange:a=>r("role",a.target.value),required:!0}),e.jsx(l,{message:s.role,className:"mt-2"})]}),e.jsx("div",{className:"flex items-center justify-end mt-6",children:e.jsxs(b,{className:"px-6 py-3 text-white bg-blue-500 border border-transparent rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",disabled:d,children:[e.jsx("i",{className:"mr-2 fas fa-sign-in-alt"})," ","Registrar Administrador"]})})]})})})]})}export{q as default};
