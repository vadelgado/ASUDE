import{r as m,j as e,Y as l}from"./app-7rU0G_I8.js";import{F as h}from"./Footer-CpRmstS0.js";import{H as f}from"./Header-B5FQ3Aw1.js";import g from"./Title-BcDhnT3L.js";import d from"./ListOfTournaments-BsQdLdnI.js";import"./Logo-D_Jsbtp_.js";import"./dialog-3LhKMUvB.js";import"./transition-BZd35j9q.js";import"./TournamentsItem-DVLIC5qD.js";function v({auth:r,torneos:o}){const[t,a]=m.useState(""),n=s=>{a(s.target.value)},i=o.filter(s=>s.nombreTorneo.toLowerCase().includes(t.toLowerCase()));return e.jsxs(e.Fragment,{children:[e.jsx(f,{auth:r}),e.jsx("meta",{name:"view-transition",content:"same-origin"}),e.jsx(l,{title:"Torneos ⚽"}),e.jsxs("main",{className:"max-w-4xl m-auto",children:[e.jsx(g,{className:"mt-4"}),e.jsx("input",{type:"text",value:t,onChange:n,placeholder:"Buscar por nombre del torneo",className:"w-full p-2 mb-4 border rounded"}),i.length>0?e.jsx("ul",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:i.map(s=>e.jsx(d,{torneo:s},s.id))}):e.jsx("p",{children:"No hay torneos disponibles"})]}),e.jsx(h,{}),e.jsx("style",{children:`
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
                html {
                    font-family: 'Onest Variable', system-ui, sans-serif;
                    background: #F1F6DC;
                }

                h1 {
                    font-size: 3.5em;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: white;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }

                h3 {
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: white;
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
                    color: white;
                    font-weight: 700;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }

                /* Media queries for responsiveness */
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
            `})]})}export{v as default};