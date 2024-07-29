import{j as e,Y as j}from"./app-BhjNjcCm.js";import{F as y}from"./Footer-DMNqL7eO.js";import{H as N}from"./Header-DGHOtAAW.js";import"./Logo-CNCYK2dG.js";import"./dialog-BbkRAQz0.js";import"./transition-Cz6CqnBm.js";function D({auth:n,tablasGrupos:f,torneo:a,resultados:r,resultadosGoles:l,tablaJuegoLimpio:x,premiacion:d,observaciones:i}){const c=t=>{const s=new Date(t),m=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],o=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],h=m[s.getUTCDay()],p=s.getUTCDate(),b=o[s.getUTCMonth()],g=s.getUTCFullYear();return`${h} ${p} ${b} de ${g}`};return e.jsxs(e.Fragment,{children:[e.jsx(N,{auth:n}),e.jsx(j,{title:"Torneo ⚽ Tabla de Grupos"}),e.jsx("div",{className:"flex flex-col min-h-screen",children:e.jsxs("main",{className:"container flex-grow px-4 py-8 mx-auto mt-32",children:[e.jsxs("div",{className:"mt-40 text-center",children:[e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx("img",{src:`/storage/${a[0].imgBannerSuperior}`,alt:a[0].nombreTorneo,className:"h-auto"})}),e.jsxs("h2",{className:"text-sm text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",children:[a[0].nombreTorneo," ",e.jsx("br",{}),new Date(a[0].fechaInicio).toLocaleDateString("es-CO",{month:"long",day:"numeric"})+" al "+new Date(a[0].fechaFin).toLocaleDateString("es-CO",{month:"long",day:"numeric",year:"numeric"})," ",e.jsx("br",{}),a[0].caracteristicas," ",e.jsx("br",{}),"Apoyo:"," ",e.jsx("span",{className:"font-semibold",children:a[0].ApoyoPrincipal})]})]}),e.jsx("h2",{className:"py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",children:e.jsx("span",{className:"px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9",children:"Resultados 🏆"})}),e.jsx("div",{className:"text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx("div",{className:"min-w-full overflow-x-auto rounded-lg shadow-md",children:e.jsx("table",{className:"w-full text-black table-auto",children:e.jsx("tbody",{children:d?d.map((t,s)=>e.jsxs("tr",{className:`${s%2===0?"bg-gradient-to-r from-gray-100 to-gray-50":"bg-white"} hover:bg-gray-200`,children:[e.jsx("td",{className:"px-4 py-2 border",children:t.categoria}),e.jsx("td",{className:"px-4 py-2 border",children:t.resultado})]},s)):e.jsx("tr",{children:e.jsx("td",{colSpan:"13",className:"px-4 py-2 text-center border",children:"No hay Premiación disponibles"})})})})})})}),e.jsx("h2",{className:"py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",children:e.jsx("span",{className:"px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9",children:"Tabla de Posiciones 🏆"})}),e.jsx("div",{className:"text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx("div",{className:"min-w-full overflow-x-auto rounded-lg shadow-md",children:e.jsxs("table",{className:"w-full text-black table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg",children:[e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"#"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"Equipo"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"PJ"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"PG"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"PE"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"PP"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"GF"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"GC"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"DG"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"TA"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"TR"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"JL"}),e.jsx("th",{className:"px-4 py-2 font-bold text-center",children:"PTS"})]})}),e.jsx("tbody",{children:r?r.map((t,s)=>e.jsxs("tr",{className:`${s%2===0?"bg-gradient-to-r from-gray-100 to-gray-50":"bg-white"} hover:bg-gray-200`,children:[e.jsx("td",{className:"px-4 py-2 border",children:s+1}),e.jsx("td",{className:"px-4 py-2 border",children:t.nombreEquipo}),e.jsx("td",{className:"px-4 py-2 border",children:t.PJ}),e.jsx("td",{className:"px-4 py-2 border",children:t.PG}),e.jsx("td",{className:"px-4 py-2 border",children:t.PE}),e.jsx("td",{className:"px-4 py-2 border",children:t.PP}),e.jsx("td",{className:"px-4 py-2 border",children:t.GF}),e.jsx("td",{className:"px-4 py-2 border",children:t.GC}),e.jsx("td",{className:"px-4 py-2 border",children:t.DG}),e.jsx("td",{className:"px-4 py-2 border",children:t.TA}),e.jsx("td",{className:"px-4 py-2 border",children:t.TR}),e.jsx("td",{className:"px-4 py-2 border",children:t.JL}),e.jsx("td",{className:"px-4 py-2 border",children:t.Pts})]},s)):e.jsx("tr",{children:e.jsx("td",{colSpan:"13",className:"px-4 py-2 text-center border",children:"No hay resultados disponibles"})})})]})})})}),e.jsx("h2",{className:"py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",children:e.jsx("span",{className:"px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9",children:"Tabla de Juego Limpio ⚽"})}),e.jsx("div",{className:"text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx("div",{className:"min-w-full overflow-x-auto bg-white rounded-lg shadow-md",children:e.jsxs("table",{className:"w-full text-black table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg",children:[e.jsx("th",{className:"px-4 py-2",children:"#"}),e.jsx("th",{className:"px-4 py-2",children:"Equipo"}),e.jsx("th",{className:"px-4 py-2",children:"Jugador"}),e.jsx("th",{className:"px-4 py-2",children:"Tarjetas Amarillas 🟨 "}),e.jsx("th",{className:"px-4 py-2",children:"Tarjetas Rojas 🟥 "})]})}),e.jsx("tbody",{children:x?x.map((t,s)=>e.jsxs("tr",{className:`${s%2===0?"bg-gradient-to-r from-gray-100 to-gray-50":"bg-white"} hover:bg-gray-200`,children:[e.jsx("td",{className:"px-4 py-2 border",children:s+1}),e.jsx("td",{className:"px-4 py-2 border",children:t.nombreEquipo}),e.jsx("td",{className:"px-4 py-2 border",children:t.nombreCompleto}),e.jsx("td",{className:"px-4 py-2 border",children:t.tarjetas_amarillas}),e.jsx("td",{className:"px-4 py-2 border",children:t.tarjetas_rojas})]},s)):e.jsx("tr",{children:e.jsx("td",{colSpan:"13",className:"px-4 py-2 text-center border",children:"No hay resultados disponibles"})})})]})})})}),e.jsx("h2",{className:"py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",children:e.jsx("span",{className:"px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9",children:"Observaciones 📋"})}),e.jsx("div",{className:"text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx("div",{className:"min-w-full overflow-x-auto bg-white rounded-lg shadow-md",children:e.jsxs("table",{className:"w-full text-black table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg",children:[e.jsx("th",{className:"px-4 py-2",children:"#"}),e.jsx("th",{className:"px-4 py-2",children:"Equipo⚽"}),e.jsx("th",{className:"px-4 py-2",children:"Fecha📅"}),e.jsx("th",{className:"px-4 py-2",children:"observaciones👀"})]})}),e.jsx("tbody",{children:i?i.map((t,s)=>e.jsxs("tr",{className:`${s%2===0?"bg-gradient-to-r from-gray-100 to-gray-50":"bg-white"} hover:bg-gray-200`,children:[e.jsx("td",{className:"px-4 py-2 border",children:s+1}),e.jsx("td",{className:"px-4 py-2 border",children:t.nombreEquipo}),e.jsxs("td",{className:"px-4 py-2 border",children:[c(t.fechaPartido)," "]}),e.jsx("td",{className:"px-4 py-2 border",children:t.observaciones})]},s)):e.jsx("tr",{children:e.jsx("td",{colSpan:"13",className:"px-4 py-2 text-center border",children:"No hay resultados Observaciones"})})})]})})})}),e.jsx("h2",{className:"py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",children:e.jsx("span",{className:"px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9",children:"Tabla de Goles ⚽"})}),e.jsx("div",{className:"text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx("div",{className:"min-w-full overflow-x-auto bg-white rounded-lg shadow-md",children:e.jsxs("table",{className:"w-full text-black table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg",children:[e.jsx("th",{className:"px-4 py-2",children:"#"}),e.jsx("th",{className:"px-4 py-2",children:"Equipo"}),e.jsx("th",{className:"px-4 py-2",children:"Jugador"}),e.jsx("th",{className:"px-4 py-2",children:"Numero Goles"})]})}),e.jsx("tbody",{children:l?l.map((t,s)=>e.jsxs("tr",{className:`${s%2===0?"bg-gradient-to-r from-gray-100 to-gray-50":"bg-white"} hover:bg-gray-200`,children:[e.jsx("td",{className:"px-4 py-2 border",children:s+1}),e.jsx("td",{className:"px-4 py-2 border",children:t.nombreEquipo}),e.jsx("td",{className:"px-4 py-2 border",children:t.nombreCompleto}),e.jsx("td",{className:"px-4 py-2 border",children:t.goles})]},s)):e.jsx("tr",{children:e.jsx("td",{colSpan:"13",className:"px-4 py-2 text-center border",children:"No hay resultados disponibles"})})})]})})})}),e.jsxs("div",{className:"flex items-center justify-center py-8",children:[e.jsx("img",{src:`/storage/${a[0].imgBannerInferiorIz}`,alt:a[0].nombreTorneo,className:"w-1/6 h-auto mr-4 md:w-1/12"}),e.jsx("div",{className:"mx-4 text-sm text-center text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",children:a[0].Aval}),e.jsx("img",{src:`/storage/${a[0].imgBannerInferiorDe}`,alt:a[0].nombreTorneo,className:"w-1/6 h-auto ml-4 md:w-1/12"})]})]})}),e.jsx(y,{}),e.jsx("style",{children:`
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
      `})]})}export{D as default};
