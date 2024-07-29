import{j as e,Y as n,a as o}from"./app-BtnPUphB.js";import{F as l}from"./Footer-DKOzpltm.js";import{H as m}from"./Header-Du_ngYED.js";import c from"./Acordion-BXPe7mo2.js";import{P as x}from"./PrimaryButton-COidN8oN.js";import"./Logo-Ch79MIJm.js";import"./dialog-CmfVX6l8.js";import"./transition-DywI7Xdb.js";const h=({torneo:t})=>{const s=()=>{window.open(`https://wa.me/3183773718?text=Hola%20quiero%20participar%20en%20el%20torneo%20${t.nombreTorneo}`,"_blank")};return e.jsxs("button",{onClick:s,children:[e.jsx("h6",{className:"text-green-700",children:"Más Información"}),e.jsx("img",{className:"max-w-full h-auto w-20",src:"/whatsapp-icon.webp",alt:"Logo WhatsApp"})]})},d=h;function N({auth:t,torneo:s}){const r=new Date,a=new Date(s.fechaInicio),i=r<a;return e.jsxs(e.Fragment,{children:[e.jsx(m,{auth:t}),e.jsx(n,{title:`Torneo ⚽ ${s.nombreTorneo}`}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsxs("main",{className:"container flex-grow px-4 py-8 mx-auto mt-32",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-12 md:grid-cols-2",children:[e.jsx("div",{className:"relative flex flex-col",children:e.jsx("picture",{className:"mb-8",children:e.jsx("img",{className:"w-full h-auto transition-transform transform rounded-lg shadow-lg hover:scale-105",src:`/storage/${s.flayer}`,alt:`Torneo ⚽ ${s.nombreTorneo}`})})}),e.jsxs("aside",{className:"md:mt-0",children:[e.jsx("h1",{className:"mb-4 text-4xl font-extrabold text-green-900",children:s.nombreTorneo}),e.jsx("p",{className:"mb-4 text-lg font-semibold text-gray-800",children:s.caracteristicas}),e.jsxs("p",{className:"mb-4 text-lg font-semibold text-gray-800",children:[e.jsx("strong",{children:"Fecha Inicio:"})," ",s.fechaInicio]}),e.jsxs("p",{className:"mb-4 text-lg font-semibold text-gray-800",children:[e.jsx("strong",{children:"Fecha Fin:"})," ",s.fechaFin]}),e.jsxs("p",{className:"mb-4 text-lg font-semibold text-gray-800",children:[e.jsx("strong",{children:"Inscripción:"})," ",s.inscripcion]}),e.jsxs("p",{className:"mb-4 text-lg font-semibold text-gray-800",children:[e.jsx("strong",{children:"Proceso Inscripción:"})," ",s.procesoInscripcion]}),e.jsxs("p",{className:"mb-4 text-lg font-semibold text-gray-800",children:[e.jsx("strong",{children:"Reglamentación:"})," ",e.jsx("a",{href:s.reglamentacion,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:"Ver Documento"})]}),e.jsxs("div",{className:"flex flex-wrap items-center space-x-4",children:[e.jsx(d,{torneo:s}),i?e.jsx(o,{href:route("preregistro.create"),children:e.jsx(x,{className:"mt-4 md:mt-0",children:"Pre-registro"})}):e.jsx("p",{className:"mt-4 font-semibold text-red-600",children:"Pre-registros cerrados"})]})]})]}),e.jsx(c,{torneo:s})]})}),e.jsx(l,{}),e.jsx("style",{children:`
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
                html {
                    font-family: 'Onest Variable', system-ui, sans-serif;
                    background: #D9E5AB;
                }
                h1 {
                    font-size: 3.5em;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: green;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                h3 {
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: green;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                p {
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.4;
                    margin-bottom: 1em;
                    font-weight: 100;
                    font-size: 1em;
                    letter-spacing: 0.5px;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                p strong {
                    color: green;
                    font-weight: 700;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5em;
                    }
                }
                @media (max-width: 576px) {
                    h1 {
                        font-size: 2em;
                    }
                }
            `})]})}export{N as default};
