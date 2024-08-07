import{r as b,j as e,Y as g}from"./app-B7R3xKfR.js";import"./Dropdown-CMXUyYL3.js";import{F as u}from"./Footer-Bc1XkYwF.js";import{H as y}from"./Header-BSR9MKwB.js";import{h as N}from"./html2pdf-w-yOkEDZ.js";import"./transition-D2aQqEaI.js";import"./dialog-CeFeWAN5.js";import"./typeof-QjJsDpFa.js";function _({auth:n,resultados:x,partidoInfo:r,torneo:t}){const[i,d]=b.useState(""),c=s=>{d(s.target.value)},p=()=>{const s=document.getElementById("pdf-content"),a={margin:[0,0,0,0],filename:"ResultadosPartido.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"A2",orientation:"portrait"}};N().set(a).from(s).save()},h=x.reduce((s,a)=>{const l=`${a.fk_jugador_id}-${a.nombreEquipo}`;return s[l]||(s[l]={...a,goles:0,tarjetas_amarillas:0,tarjetas_rojas:0}),s[l].goles+=a.goles,s[l].tarjetas_amarillas+=a.tarjetas_amarillas,s[l].tarjetas_rojas+=a.tarjetas_rojas,s},{}),o=Object.values(h),m=o.filter(s=>s.nombreCompleto.toLowerCase().includes(i.toLowerCase())),j=o.reduce((s,a)=>(s[a.nombreEquipo]||(s[a.nombreEquipo]=0),s[a.nombreEquipo]+=a.goles,s),{});return e.jsxs(e.Fragment,{children:[e.jsx(y,{auth:n}),e.jsx(g,{title:"Resultados Partido"}),e.jsx("div",{className:"flex flex-col min-h-screen mt-32",children:e.jsxs("main",{className:"container flex-grow px-4 py-8 mx-auto",id:"pdf-content",children:[e.jsx("div",{className:"text-center",children:t&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx("img",{src:`/storage/${t.imgBannerSuperior}`,alt:t.nombreTorneo,className:"w-full h-auto max-w-lg"})}),e.jsxs("h2",{className:"text-sm text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",children:[t.nombreTorneo," ",e.jsx("br",{}),new Date(t.fechaInicio).toLocaleDateString("es-CO",{month:"long",day:"numeric"})+" al "+new Date(t.fechaFin).toLocaleDateString("es-CO",{month:"long",day:"numeric",year:"numeric"})," ",e.jsx("br",{}),t.caracteristicas," ",e.jsx("br",{}),"Apoyo:"," ",e.jsx("span",{className:"font-semibold",children:t.ApoyoPrincipal})]})]})}),e.jsxs("div",{className:"container p-6 mx-auto mt-1 bg-white",children:[e.jsxs("div",{className:"flex flex-col items-start justify-between mb-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4",children:[e.jsx("h3",{className:"text-lg font-semibold sm:text-xl",children:`Partido: ${r.equipoLocal} vs ${r.equipoVisitante}`}),e.jsxs("div",{className:"text-sm text-gray-600 sm:text-base",children:[e.jsx("div",{children:`Fecha: ${r.FechaPartido}`}),e.jsx("div",{children:`Hora: ${r.HoraPartido}`}),e.jsx("div",{children:`Lugar: ${r.nomLugar}`})]}),e.jsx("input",{type:"text",placeholder:"Buscar por nombre...",value:i,onChange:c,className:"px-4 py-2 mt-2 border rounded sm:mt-0 sm:text-base"}),e.jsx("button",{onClick:p,className:"px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700 sm:mt-0 sm:ml-auto sm:text-base",children:"Descargar PDF"})]}),e.jsx("div",{className:"grid py-6 overflow-x-auto bg-white place-items-center",children:e.jsxs("table",{className:"w-full border-gray-400 table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border",children:"Equipo"}),e.jsx("th",{className:"px-4 py-2 border",children:"Jugador"}),e.jsx("th",{className:"px-4 py-2 border",children:"Goles"}),e.jsx("th",{className:"px-4 py-2 border",children:"Tarjetas Amarillas"}),e.jsx("th",{className:"px-4 py-2 border",children:"Tarjetas Rojas"}),e.jsx("th",{className:"px-4 py-2 border",children:"Observaciones"})]})}),e.jsx("tbody",{children:m.length>0?m.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 border",children:s.nombreEquipo}),e.jsx("td",{className:"px-4 py-2 border",children:s.nombreCompleto}),e.jsx("td",{className:"px-4 py-2 border",children:s.goles}),e.jsx("td",{className:"px-4 py-2 border",children:s.tarjetas_amarillas}),e.jsx("td",{className:"px-4 py-2 border",children:s.tarjetas_rojas}),e.jsx("td",{className:"px-4 py-2 border",children:s.observaciones})]},s.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",className:"px-4 py-2 text-center border",children:"No hay resultados"})})})]})}),e.jsx("div",{className:"grid py-6 overflow-x-auto bg-white place-items-center",children:e.jsxs("table",{className:"w-full border-gray-400 table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 border",children:"Equipo"}),e.jsx("th",{className:"px-4 py-2 border",children:"Total de Goles"})]})}),e.jsx("tbody",{children:Object.entries(j).map(([s,a])=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 border",children:s}),e.jsx("td",{className:"px-4 py-2 border",children:a})]},s))})]})})]}),e.jsxs("div",{className:"flex items-center justify-center py-8",children:[e.jsx("img",{src:`/storage/${t.imgBannerInferiorIz}`,alt:t.nombreTorneo,className:"w-1/2 h-auto max-w-xs mr-4 md:w-1/6"}),e.jsx("div",{className:"mx-4 text-sm text-center text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",children:t.Aval}),e.jsx("img",{src:`/storage/${t.imgBannerInferiorDe}`,alt:t.nombreTorneo,className:"w-1/2 h-auto max-w-xs ml-4 md:w-1/6"})]})]})}),e.jsx(u,{})]})}export{_ as default};
