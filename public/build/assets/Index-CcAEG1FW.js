import{r as c,j as e,Y as u}from"./app-B7R3xKfR.js";import"./sweetalert2.all-BCuXndMg.js";import{X as p}from"./index.es-BrFSQNI4.js";import{A as x}from"./AuthenticatedLayout-Y2T7n90j.js";import"./FormField-DdU7T2BP.js";import"./ImgField-Pj38IbQw.js";import"./SelectField-P0cQBvqh.js";import"./Footer-Bc1XkYwF.js";import{B as f}from"./BackButton-Dguvam4A.js";import"./tslib.es6-BgyYHPRr.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./Dropdown-CMXUyYL3.js";import"./transition-D2aQqEaI.js";import"./InputLabel-TKlKzBkH.js";import"./TextInput-Dk9zkqAb.js";import"./InputError-BugI7SpX.js";import"./defineProperty-DJACW-dl.js";import"./typeof-QjJsDpFa.js";import"./PrimaryButton-Dmln_z9C.js";function L({auth:r,torneos:s}){const[o,n]=c.useState(""),i=s.filter(t=>t.nombreTorneo.toLowerCase().includes(o.toLowerCase())),a=[{name:"N.º",selector:(t,m)=>m+1,sortable:!0},{name:"Torneo",selector:t=>t.nombreTorneo,sortable:!0,wrap:!0},{name:"Ver Fases",cell:t=>e.jsxs("button",{className:"mt-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:()=>window.location.href=`/fases?torneo_id=${t.id}`,children:[e.jsx("i",{className:"mr-2 fa-solid fa-flag"})," Ver Fases"]})},{name:"Ver Sorteos",cell:t=>e.jsxs("button",{className:"mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:()=>window.location.href=`/resultadoSorteo?torneo_id=${t.id}`,children:[e.jsx("i",{className:"mr-2 fa-solid fa-dice"})," Ver Sorteos"]})},{name:"Resultados",cell:t=>e.jsxs("button",{className:"mt-2 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:()=>window.location.href=`/resultadosTorneo?torneo_id=${t.id}`,children:[e.jsx("i",{className:"mr-2 fa-solid fa-trophy"})," Resultados"]})}],l={rowsPerPageText:"Registros por página",rangeSeparatorText:"de",selectAllRowsItem:!0,selectAllRowsItemText:"Todos"},d={headCells:{style:{justifyContent:"center",textAlign:"center"}},cells:{style:{justifyContent:"center",textAlign:"center"}}};return e.jsxs(x,{user:r.user,header:e.jsx("h2",{className:"text-2xl font-semibold leading-tight text-gray-800",children:"⚽ Equipos 🥅"}),children:[e.jsx(u,{title:" Torneos 🏆"}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsx("main",{className:"container flex-grow px-4 py-8 mx-auto",children:e.jsxs("div",{className:"container min-h-screen p-6 mx-auto mt-1 bg-white",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Lista de Torneos"}),e.jsx("div",{className:"flex justify-end mt-1 mb-4 space-x-2 sm:space-x-4",children:e.jsx(f,{to:route("dashboard")})})]}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",className:"w-full p-2 border rounded",placeholder:"Buscar por nombre Torneo...",value:o,onChange:t=>n(t.target.value)})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsx(p,{title:"Torneos",columns:a,data:i,pagination:!0,paginationComponentOptions:l,highlightOnHover:!0,responsive:!0,noDataComponent:"Usted no ha subido ningún Equipo. 👀",customStyles:d})})]})})})]})}export{L as default};