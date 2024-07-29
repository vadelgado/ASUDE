import{r as h,j as e,Y as p,a as f}from"./app-DfQqMImO.js";import{F as u}from"./Footer-B1-JtGzi.js";import{H as b}from"./Header-C_DcIaBW.js";import"./Logo-D3k11qLX.js";import"./dialog-f6mzOL02.js";import"./transition-DRvO2rdA.js";function j(m){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let t=[];for(let l=1;l<=m;l++){const o=(l-1)%26,x=c[o];t.push(x)}return t}function q({auth:m,tablasGrupos:c,torneo:t,resultadosGoles:l}){const[o,x]=h.useState([]);h.useEffect(()=>{if(t&&t.length>0&&t[0].cantidadGrupos){const s=j(t[0].cantidadGrupos);x(s)}},[t]);const d=Math.floor(t[0].cantidadEquiposParticipantes/t[0].cantidadGrupos),g=(()=>{let s=Array.from({length:t[0].cantidadGrupos},()=>[]);return c.forEach((a,r)=>{const n=Math.floor(r/d),i=r%d;s[n]||(s[n]=[]),s[n][i]=a}),s})();return e.jsxs(e.Fragment,{children:[e.jsx(b,{auth:m}),e.jsx(p,{title:"Torneo ⚽ Tabla de Grupos"}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsxs("main",{className:"container flex-grow px-4 py-8 mx-auto mt-32",children:[e.jsxs("div",{className:"mt-40 text-center",children:[e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx("img",{src:`/storage/${t[0].imgBannerSuperior}`,alt:t[0].nombreTorneo,className:"h-auto md:w-1/4"})}),e.jsxs("h2",{className:"text-sm text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",children:[t[0].nombreTorneo," ",e.jsx("br",{}),new Date(t[0].fechaInicio).toLocaleDateString("es-CO",{month:"long",day:"numeric"})+" al "+new Date(t[0].fechaFin).toLocaleDateString("es-CO",{month:"long",day:"numeric",year:"numeric"})," ",e.jsx("br",{}),t[0].caracteristicas," ",e.jsx("br",{}),"Apoyo:"," ",e.jsx("span",{className:"font-semibold",children:t[0].ApoyoPrincipal})]})]}),e.jsx("h2",{className:"py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",children:e.jsx("span",{className:"px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9",children:"Tabla de Grupos"})}),e.jsx("div",{className:"text-xs text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx("div",{className:"min-w-full",children:e.jsxs("table",{className:"w-full mt-10 text-sm text-center text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-table-green-cabecera",children:o.map((s,a)=>e.jsx("th",{className:"px-4 py-2 font-bold",children:s},a))})}),e.jsx("tbody",{children:Array.from({length:d}).map((s,a)=>e.jsx("tr",{className:"bg-table-green",children:g.map((r,n)=>e.jsx("td",{className:"px-4 py-2",children:r[a]&&e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("span",{className:"mr-2",children:r[a].puesto}),e.jsx("img",{src:`/storage/${r[a].escudoEquipo}`,onError:i=>{i.target.onerror=null,i.target.src="/escudo.svg"},alt:r[a].nombreEquipo,className:"w-6 h-6 mr-2 rounded-full sm:w-8 sm:h-8"}),e.jsx("span",{className:"text-center whitespace-nowrap",children:e.jsx(f,{href:`/Equipo/${r[a].id}`,className:"text-blue-500 underline transition-colors duration-300 hover:text-blue-700 hover:underline hover:font-bold",children:r[a].nombreEquipo})})]})},n))},a))})]})})})}),e.jsx("h2",{className:"py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",children:e.jsx("span",{className:"px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9",children:"Goleadores ⚽ del Torneo"})}),e.jsx("div",{className:"flex flex-wrap justify-center p-4 bg-gray-900",children:l.length>0?l.map((s,a)=>e.jsxs("div",{className:"flex flex-col justify-between max-w-xs p-6 m-4 text-center text-white transition duration-500 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700",style:{minWidth:"280px",minHeight:"400px"},children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("img",{src:`/storage/${s.foto}`,onError:r=>{r.target.onerror=null,r.target.src="/soccer-player.svg"},alt:s.nombreCompleto,className:"w-24 h-32 mb-4 border-2 border-yellow-500 rounded-lg"}),e.jsx("h3",{className:"mb-2 text-2xl font-bold text-yellow-500 truncate",children:s.nombreCompleto}),e.jsx("p",{className:"text-lg truncate",children:s.name})]}),e.jsxs("div",{className:"flex flex-col items-center mt-4",children:[e.jsxs("div",{className:"flex items-center justify-center mt-2",children:[e.jsx("img",{src:`/storage/${s.escudoEquipo}`,onError:r=>{r.target.onerror=null,r.target.src="/escudo.svg"},alt:s.nombreEquipo,className:"w-8 h-8 mr-2"}),e.jsx("span",{className:"truncate",children:s.nombreEquipo})]}),s.goles!==void 0&&e.jsxs("p",{className:"mt-2 text-lg text-yellow-500",children:["Goles: ",s.goles]})]})]},a)):e.jsx("p",{className:"text-white",children:"No hay resultados"})}),e.jsxs("div",{className:"flex items-center justify-center py-8",children:[e.jsx("img",{src:`/storage/${t[0].imgBannerInferiorIz}`,alt:t[0].nombreTorneo,className:"w-1/6 h-auto mr-4 md:w-1/12"}),e.jsx("div",{className:"mx-4 text-sm text-center text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",children:t[0].Aval}),e.jsx("img",{src:`/storage/${t[0].imgBannerInferiorDe}`,alt:t[0].nombreTorneo,className:"w-1/6 h-auto ml-4 md:w-1/12"})]})]})}),e.jsx(u,{}),e.jsx("style",{children:`
        @media (prefers-color-scheme: dark) {
          .dark\\:bg-dots-lighter {
            background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
          }
        }
        html {
          font-family: 'Onest Variable', system-ui, sans-serif;
          background: #D5D5D5;
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
      `})]})}export{q as default};
