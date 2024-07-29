import{W as d,r as p,j as e,Y as f,a as x}from"./app-DfQqMImO.js";import{G as j}from"./GuestLayout-CtYmVA12.js";import{I as l}from"./InputError-DxRqiWu3.js";import{I as t}from"./InputLabel-DyYVZk7L.js";import{P as g}from"./PrimaryButton-DLJB6DDv.js";import{T as o}from"./TextInput-NgTYPIwq.js";function y(){const{data:i,setData:s,post:m,processing:n,errors:r,reset:c}=d({identificacion:"",name:"",email:"",celular:"",password:"",password_confirmation:"",role:"admin"});p.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),m(route("registerAdmin"))};return e.jsxs(j,{children:[e.jsx(f,{title:"Registrar Administrador"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"identificacion",value:"Identificación"}),e.jsx(o,{id:"identificacion",name:"identificacion",value:i.identificacion,className:"mt-1 block w-full",autoComplete:"identificacion",isFocused:!0,onChange:a=>s("identificacion",a.target.value),required:!0,type:"number"}),e.jsx(l,{message:r.identificacion,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"name",value:"Nombre Completo"}),e.jsx(o,{id:"name",name:"name",value:i.name,className:"mt-1 block w-full",autoComplete:"name",onChange:a=>s("name",a.target.value),required:!0}),e.jsx(l,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(t,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:i.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>s("email",a.target.value),required:!0}),e.jsx(l,{message:r.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"celular",value:"Celular"}),e.jsx(o,{id:"celular",name:"celular",value:i.celular,className:"mt-1 block w-full",autoComplete:"celular",onChange:a=>s("celular",a.target.value),required:!0}),e.jsx(l,{message:r.celular,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(t,{htmlFor:"password",value:"Contraseña"}),e.jsx(o,{id:"password",type:"password",name:"password",value:i.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>s("password",a.target.value),required:!0}),e.jsx(l,{message:r.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(t,{htmlFor:"password_confirmation",value:"Confirmar Contraseña"}),e.jsx(o,{id:"password_confirmation",type:"password",name:"password_confirmation",value:i.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>s("password_confirmation",a.target.value),required:!0}),e.jsx(l,{message:r.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",style:{display:"none"},children:[e.jsx(t,{htmlFor:"role",value:"Role"}),e.jsx(o,{id:"role",name:"role",value:"admin",className:"mt-1 block w-full",autoComplete:"role",onChange:a=>s("role",a.target.value),required:!0}),e.jsx(l,{message:r.role,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsxs(x,{href:route("login"),className:"bg-blue-500 text-white hover:bg-blue-700 hover:text-shadow-md rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[e.jsx("i",{className:"fas fa-sign-in-alt mr-2"})," Iniciar Sesión"]}),e.jsx(g,{className:"ms-4",disabled:n,children:"Registrar Encargado"})]})]})]})}export{y as default};
