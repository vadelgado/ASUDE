import{j as e,Y as r}from"./app-Cd7KucXb.js";import{A as a}from"./AuthenticatedLayout-CbbYANlG.js";import{F as d}from"./Footer-diGZ6D8K.js";import"./transition-FqHLaE6G.js";import"./Logo-CCmd4JRq.js";const t=[{title:"Inicio",iconClass:"fa-solid fa-house",route:"dashboard",color:"bg-blue-500"},{title:"Mis Equipos",iconClass:"fa-solid fa-users",route:"equipos.index",color:"bg-green-500",roles:["admin","equipo"],alternativeRoute:"equiposInvitados.index"},{title:"Pre-Torneos",iconClass:"fa-solid fa-trophy",route:"preTorneos.index",color:"bg-red-500",roles:["admin"]},{title:"Torneos",iconClass:"fa-solid fa-trophy",route:"torneo.index",color:"bg-red-500",roles:["admin"]},{title:"Sistema de Juego",iconClass:"fa-solid fa-puzzle-piece",route:"sistemaJuego.index",color:"bg-yellow-500",roles:["admin"]}];function n({user:s}){return e.jsxs("div",{className:"p-6 text-gray-900",children:[e.jsxs("h3",{className:"mb-4 text-2xl font-semibold",children:["Bienvenido, ",s.name]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"Celular:"}),e.jsx("p",{className:"text-lg font-medium",children:s.celular})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"Email:"}),e.jsx("p",{className:"text-lg font-medium",children:s.email})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"Identificación:"}),e.jsx("p",{className:"text-lg font-medium",children:s.identificacion})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2",children:"Rol:"}),e.jsx("p",{className:"text-lg font-medium",children:s.role})]})]})]})}function c({user:s}){return e.jsx("div",{className:"grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4",children:t.filter(i=>!i.roles||i.roles.includes(s.role)).map((i,o)=>{let l=i.route;return i.title==="Mis Equipos"&&s.role==="equipo"&&(l=i.alternativeRoute),e.jsx("a",{href:route(l),className:`flex items-center justify-center h-32 rounded-lg shadow-lg text-white ${i.color} hover:bg-opacity-75 transition duration-300`,children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:`${i.iconClass} text-4xl mb-2`}),e.jsx("p",{className:"text-lg font-semibold",children:i.title})]})},o)})})}function f({auth:s}){return!s||!s.user?e.jsx("div",{children:"Error: Usuario no autenticado."}):e.jsxs(a,{user:s.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Inicio"}),children:[e.jsx(r,{title:"Dashboard"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-full mx-auto space-y-6 sm:px-6 lg:px-8",children:[e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx(n,{user:s.user})}),e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx(c,{user:s.user})})]})}),e.jsx(d,{})]})}export{f as default};
