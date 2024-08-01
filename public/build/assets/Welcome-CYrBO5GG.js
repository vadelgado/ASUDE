import{j as e,r as g,a as L,Y as D}from"./app-Cd7KucXb.js";import{F as q}from"./Footer-diGZ6D8K.js";import{H as F}from"./Header-6C6AGQpR.js";import{X as z}from"./index.es-CONMRwCR.js";import"./Logo-CCmd4JRq.js";import"./dialog-j6PSrzX6.js";import"./transition-FqHLaE6G.js";import"./tslib.es6-BgyYHPRr.js";import"./emotion-unitless.esm-sScrWPmR.js";const U=()=>e.jsxs("section",{className:" relative z-10 mx-auto my-24 max-w-[70ch] text-pretty px-6 text-left text-xl sm:px-20",children:[e.jsx("img",{className:"m-auto mb-1 h-auto w-50 sm:w-60 md:w-70 lg:w-80 xl:w-98",src:"/logo2.webp",alt:"Logo Alianza Sureña"}),e.jsx("h1",{className:"mx-auto mb-1 text-wrap text-center text-2xl text-green-800 font-semibold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",children:"Gestión Promoción y Servicio"})]}),V=U;class p extends HTMLElement{constructor(){super(),this.isIframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid","playlistid"]}connectedCallback(){this.addEventListener("pointerover",p.warmConnections,{once:!0}),this.addEventListener("click",()=>this.addIframe())}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(t){this.setAttribute("videoid",t)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(t){this.setAttribute("playlistid",t)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(t){this.setAttribute("videotitle",t)}get videoPlay(){return this.getAttribute("videoPlay")||"Play"}set videoPlay(t){this.setAttribute("videoPlay",t)}get videoStartAt(){return this.getAttribute("videoStartAt")||"0"}get autoLoad(){return this.hasAttribute("autoload")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}set params(t){this.setAttribute("params",t)}setupDom(){const t=this.attachShadow({mode:"open"});let s="";window.liteYouTubeNonce&&(s=`nonce="${window.liteYouTubeNonce}"`),t.innerHTML=`
      <style ${s}>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        @media (max-width: 40em) {
          :host([short]) {
            padding-bottom: calc(100% / (9 / 16));
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
          height: 60px;
          width: 100%;
          z-index: 1;
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
        </picture>
        <button id="playButton"></button>
      </div>
    `,this.domRefFrame=t.querySelector("#frame"),this.domRefImg={fallback:t.querySelector("#fallbackPlaceholder"),webp:t.querySelector("#webpPlaceholder"),jpeg:t.querySelector("#jpegPlaceholder")},this.domRefPlayButton=t.querySelector("#playButton")}setupComponent(){this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),(this.autoLoad||this.isYouTubeShort())&&this.initIntersectionObserver()}attributeChangedCallback(t,s,i){switch(t){case"videoid":case"playlistid":case"videoTitle":case"videoPlay":{s!==i&&(this.setupComponent(),this.domRefFrame.classList.contains("activated")&&(this.domRefFrame.classList.remove("activated"),this.shadowRoot.querySelector("iframe").remove(),this.isIframeLoaded=!1));break}}}addIframe(t=!1){if(!this.isIframeLoaded){let s=t?0:1;const i=this.noCookie?"-nocookie":"";let c;this.playlistId?c=`?listType=playlist&list=${this.playlistId}&`:c=`${this.videoId}?`,this.isYouTubeShort()&&(this.params=`loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`,s=1);const u=`
<iframe frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${i}.com/embed/${c}autoplay=${s}&${this.params}"
></iframe>`;this.domRefFrame.insertAdjacentHTML("beforeend",u),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.attemptShortAutoPlay(),this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){var i,c;const t=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,s=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg.fallback.loading=this.posterLoading,this.domRefImg.webp.srcset=t,this.domRefImg.jpeg.srcset=s,this.domRefImg.fallback.src=s,this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),(c=(i=this.domRefImg)==null?void 0:i.fallback)==null||c.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}initIntersectionObserver(){const t={root:null,rootMargin:"0px",threshold:0};new IntersectionObserver((i,c)=>{i.forEach(u=>{u.isIntersecting&&!this.isIframeLoaded&&(p.warmConnections(),this.addIframe(!0),c.unobserve(this))})},t).observe(this)}attemptShortAutoPlay(){this.isYouTubeShort()&&setTimeout(()=>{var t,s;(s=(t=this.shadowRoot.querySelector("iframe"))==null?void 0:t.contentWindow)==null||s.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},2e3)}isYouTubeShort(){return this.getAttribute("short")===""&&window.matchMedia("(max-width: 40em)").matches}static addPrefetch(t,s){const i=document.createElement("link");i.rel=t,i.href=s,i.crossOrigin="true",document.head.append(i)}static warmConnections(){p.isPreconnected||window.liteYouTubeIsPreconnected||(p.addPrefetch("preconnect","https://i.ytimg.com/"),p.addPrefetch("preconnect","https://s.ytimg.com"),p.addPrefetch("preconnect","https://www.youtube.com"),p.addPrefetch("preconnect","https://www.google.com"),p.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),p.addPrefetch("preconnect","https://static.doubleclick.net"),p.isPreconnected=!0,window.liteYouTubeIsPreconnected=!0)}}p.isPreconnected=!1;customElements.define("lite-youtube",p);const H=()=>e.jsx("section",{className:"w-full p-20 max-w-[1400px] mx-auto",children:e.jsx("lite-youtube",{className:"relative z-10 overflow-hidden shadow-2xl shadow-white/10 rounded-xl",videoid:"dHl55OYa0hA",videotitle:"Alianza Sureña",style:{width:"100%",height:"100%"}})}),W=H,X=()=>{const r=[{src:"/banner2.webp",alt:"Próximos Torneos",title:"Próximos Torneos",description:"Conoce los próximos torneos y regístrate para participar",button:"Ver Torneos",link:"/listarTorneos"},{src:"/banner1.webp",alt:"Torneos en Curso",title:"Torneos en Curso",description:"Sigue los torneos que están actualmente en juego",button:"Ver Torneos",link:"/torneosIniciados"},{src:"/banner3.webp",alt:"Torneos Finalizados",title:"Torneos Finalizados",description:"Revisa los resultados de los torneos finalizados",button:"Ver Torneos",link:"/finalizadosTorneos"}],[t,s]=g.useState(0),i=h=>{window.location.href=h},c=()=>{const h=t===0?r.length-1:t-1;s(h)},u=()=>{const h=t===r.length-1?0:t+1;s(h)};return e.jsx("div",{className:"relative w-full",children:e.jsxs("div",{className:"relative overflow-hidden rounded-lg h-56 sm:h-72 md:h-96 lg:h-[36rem]",children:[e.jsx("div",{className:"absolute w-full h-full",children:r.map((h,l)=>e.jsxs("div",{className:`absolute w-full h-full transition-opacity duration-1000 ${l===t?"opacity-100":"opacity-0"}`,children:[e.jsx("img",{src:h.src,alt:h.alt,className:"object-cover w-full h-full"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center lg:justify-end",children:e.jsxs("div",{className:"relative flex items-center justify-center w-full h-full lg:justify-end",children:[e.jsx("div",{className:"absolute top-0 hidden w-full h-full origin-top-left transform -rotate-45 left-1/2 lg:block",style:{width:"150%",height:"200%",backgroundImage:"linear-gradient(290deg, rgb(112, 178, 38) 55%, rgba(0, 0, 0, 0.23) 47%)",color:"#333",lineHeight:"24px"}}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-80 sm:h-2/3 bg-gradient-to-t from-black via-transparent to-transparent lg:inset-0 lg:bg-none"}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white lg:p-7 lg:text-right lg:items-start lg:mr-16",children:[e.jsx("h2",{className:"relative order-2 mb-2 text-2xl font-bold sm:text-3xl md:text-6xl lg:order-1",children:h.title}),e.jsx("p",{className:"relative order-3 mb-4 text-sm font-semibold sm:text-base md:text-xl lg:order-2",children:h.description}),e.jsx("button",{className:"relative self-center order-1 px-8 py-2 font-semibold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 hover:scale-105 hover:shadow-xl lg:self-end lg:order-3",onClick:()=>i(h.link),children:h.button})]})]})})]},l))}),e.jsxs("button",{onClick:c,className:"absolute z-30 flex items-center justify-center hidden w-10 h-10 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-2 top-1/2 hover:bg-opacity-75 lg:flex",children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})]}),e.jsxs("button",{onClick:u,className:"absolute z-30 flex items-center justify-center hidden w-10 h-10 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-2 top-1/2 hover:bg-opacity-75 lg:flex",children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})]})})},Y=X,G="Left",J="Right",Q="Up",Z="Down",v={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},M={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},A="mousemove",$="mouseup",_="touchend",K="touchmove",ee="touchstart";function te(r,t,s,i){return r>t?s>0?J:G:i>0?Z:Q}function E(r,t){if(t===0)return r;const s=Math.PI/180*t,i=r[0]*Math.cos(s)+r[1]*Math.sin(s),c=r[1]*Math.cos(s)-r[0]*Math.sin(s);return[i,c]}function oe(r,t){const s=o=>{const a="touches"in o;a&&o.touches.length>1||r((n,d)=>{d.trackMouse&&!a&&(document.addEventListener(A,i),document.addEventListener($,h));const{clientX:f,clientY:x}=a?o.touches[0]:o,b=E([f,x],d.rotationAngle);return d.onTouchStartOrOnMouseDown&&d.onTouchStartOrOnMouseDown({event:o}),Object.assign(Object.assign(Object.assign({},n),M),{initial:b.slice(),xy:b,start:o.timeStamp||0})})},i=o=>{r((a,n)=>{const d="touches"in o;if(d&&o.touches.length>1)return a;if(o.timeStamp-a.start>n.swipeDuration)return a.swiping?Object.assign(Object.assign({},a),{swiping:!1}):a;const{clientX:f,clientY:x}=d?o.touches[0]:o,[b,S]=E([f,x],n.rotationAngle),k=b-a.xy[0],N=S-a.xy[1],y=Math.abs(k),j=Math.abs(N),O=(o.timeStamp||0)-a.start,R=Math.sqrt(y*y+j*j)/(O||1),B=[k/(O||1),N/(O||1)],C=te(y,j,k,N),P=typeof n.delta=="number"?n.delta:n.delta[C.toLowerCase()]||v.delta;if(y<P&&j<P&&!a.swiping)return a;const T={absX:y,absY:j,deltaX:k,deltaY:N,dir:C,event:o,first:a.first,initial:a.initial,velocity:R,vxvy:B};T.first&&n.onSwipeStart&&n.onSwipeStart(T),n.onSwiping&&n.onSwiping(T);let I=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${C}`])&&(I=!0),I&&n.preventScrollOnSwipe&&n.trackTouch&&o.cancelable&&o.preventDefault(),Object.assign(Object.assign({},a),{first:!1,eventData:T,swiping:!0})})},c=o=>{r((a,n)=>{let d;if(a.swiping&&a.eventData){if(o.timeStamp-a.start<n.swipeDuration){d=Object.assign(Object.assign({},a.eventData),{event:o}),n.onSwiped&&n.onSwiped(d);const f=n[`onSwiped${d.dir}`];f&&f(d)}}else n.onTap&&n.onTap({event:o});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:o}),Object.assign(Object.assign(Object.assign({},a),M),{eventData:d})})},u=()=>{document.removeEventListener(A,i),document.removeEventListener($,h)},h=o=>{u(),c(o)},l=(o,a)=>{let n=()=>{};if(o&&o.addEventListener){const d=Object.assign(Object.assign({},v.touchEventOptions),a.touchEventOptions),f=[[ee,s,d],[K,i,Object.assign(Object.assign({},d),a.preventScrollOnSwipe?{passive:!1}:{})],[_,c,d]];f.forEach(([x,b,S])=>o.addEventListener(x,b,S)),n=()=>f.forEach(([x,b])=>o.removeEventListener(x,b))}return n},w={ref:o=>{o!==null&&r((a,n)=>{if(a.el===o)return a;const d={};return a.el&&a.el!==o&&a.cleanUpTouch&&(a.cleanUpTouch(),d.cleanUpTouch=void 0),n.trackTouch&&o&&(d.cleanUpTouch=l(o,n)),Object.assign(Object.assign(Object.assign({},a),{el:o}),d)})}};return t.trackMouse&&(w.onMouseDown=s),[w,l]}function se(r,t,s,i){return!t.trackTouch||!r.el?(r.cleanUpTouch&&r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:void 0})):r.cleanUpTouch?t.preventScrollOnSwipe!==s.preventScrollOnSwipe||t.touchEventOptions.passive!==s.touchEventOptions.passive?(r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:i(r.el,t)})):r:Object.assign(Object.assign({},r),{cleanUpTouch:i(r.el,t)})}function re(r){const{trackMouse:t}=r,s=g.useRef(Object.assign({},M)),i=g.useRef(Object.assign({},v)),c=g.useRef(Object.assign({},i.current));c.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},v),r);let u;for(u in v)i.current[u]===void 0&&(i.current[u]=v[u]);const[h,l]=g.useMemo(()=>oe(m=>s.current=m(s.current,i.current),{trackMouse:t}),[t]);return s.current=se(s.current,i.current,c.current,l),h}const ie=({programaciones_faces:r})=>{const t=g.useRef(null),s=()=>{if(t.current){const l=t.current.querySelector(".card").offsetWidth;t.current.scrollBy({left:-l,behavior:"smooth"})}},i=()=>{if(t.current){const l=t.current.querySelector(".card").offsetWidth;t.current.scrollBy({left:l,behavior:"smooth"})}},c=re({onSwipedLeft:i,onSwipedRight:s,preventDefaultTouchmoveEvent:!0,trackMouse:!0}),u=r.reduce((l,m)=>(l[m.nombreFase]||(l[m.nombreFase]=[]),l[m.nombreFase].push(m),l),{}),h=l=>{const m=new Date(l),w=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],o=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],a=w[m.getUTCDay()],n=m.getUTCDate(),d=o[m.getUTCMonth()],f=m.getUTCFullYear();return`${a} ${n} ${d} de ${f}`};return e.jsx("div",{className:"flex items-center justify-center h-auto text-white bg-gray-900 mt-36",children:e.jsxs("div",{className:"relative w-full p-4 overflow-hidden max-w-screen-2xl",children:[e.jsx("div",{...c,ref:t,className:"flex overflow-x-auto transition-transform duration-300 ease-in-out md:overflow-hidden",style:{scrollbarWidth:"none"},children:Object.entries(u).map(([l,m],w)=>e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"mt-2 mb-4 text-2xl font-bold text-blue-400",children:l}),e.jsx("div",{className:"flex space-x-4 overflow-x-auto flex-nowrap",children:m.map((o,a)=>e.jsx("div",{className:"flex-none w-64 p-4 card",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-6 bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-lg",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 text-sm font-semibold text-gray-400",children:[h(o.FechaPartido)," ",new Date(`1970-01-01T${o.HoraPartido}`).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0,timeZone:"America/Bogota"})]}),e.jsx("p",{className:"mb-4 text-gray-400",children:o.nomLugar}),e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("img",{src:`/storage/${o.escudoEquipoLocal}`,onError:n=>{n.target.onerror=null,n.target.src="/escudo.svg"},alt:o.nombreEquipoLocal,className:"w-10 h-10 mr-2"}),e.jsx("p",{className:"text-gray-300 truncate",children:e.jsx(L,{href:`/Equipo/${o.idEquipoLocal}`,className:"text-blue-500 underline transition-colors duration-300 hover:text-blue-700 hover:underline hover:font-bold",children:o.nombreEquipoLocal?o.nombreEquipoLocal:`Posición: ${o.posicion_local}`})})]}),e.jsx("div",{className:"flex items-center justify-center mb-2",children:e.jsxs("p",{className:"mx-2 text-2xl font-bold text-yellow-300",children:[o.GolesLocal," -"," ",o.GolesVisitante]})}),e.jsxs("div",{className:"flex items-center justify-center mb-2 space-x-2",children:[e.jsx("p",{className:"text-xs text-yellow-500",children:o.TarjetasAmarillasLocal}),e.jsx("p",{className:"text-xs text-red-500",children:o.TarjetasRojasLocal}),e.jsx("p",{className:"text-xs text-white",children:"-"}),e.jsx("p",{className:"text-xs text-yellow-500",children:o.TarjetasAmarillasVisitante}),e.jsx("p",{className:"text-xs text-red-500",children:o.TarjetasRojasVisitante})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:`/storage/${o.escudoEquipoVisitante}`,onError:n=>{n.target.onerror=null,n.target.src="/escudo.svg"},alt:o.nombreEquipoVisitante,className:"w-10 h-10 mr-2"}),e.jsx("p",{className:"text-gray-300 truncate",children:e.jsx(L,{href:`/Equipo/${o.idEquipoVisitante}`,className:"text-blue-500 underline transition-colors duration-300 hover:text-blue-700 hover:underline hover:font-bold",children:o.nombreEquipoVisitante?o.nombreEquipoVisitante:`Posición: ${o.posicion_visitante}`})})]})]})},a))})]},w))}),e.jsx("button",{onClick:s,className:"absolute left-0 hidden px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-full top-1/2 hover:bg-gray-600 hover:bg-opacity-75 md:block",children:"◀"}),e.jsx("button",{onClick:i,className:"absolute right-0 hidden px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-full top-1/2 hover:bg-gray-600 hover:bg-opacity-75 md:block",children:"▶"})]})})},ne=ie,ae=()=>{const[r,t]=g.useState(null),s=c=>{t(c)},i=()=>{t(null)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .bento-img {
            border-radius: 8px;
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
            width: 100%;
            height: auto;
            transition: transform .3s, box-shadow .3s;
            object-fit: cover;
            max-height: 200px;
            cursor: pointer;
            position: relative;
          }
          .bento-img:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
          }
          .bento-caption {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            display: none;
            transition: opacity .3s;
          }
          .bento-img:hover + .bento-caption {
            display: block;
            opacity: 1;
          }
        `}),e.jsx("div",{className:"container px-4 mx-auto",children:e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:[{src:"/Bento/osbol.webp",alt:"Osbol Marketing Deportivo",link:"https://www.facebook.com/profile.php?id=853397289"},{src:"/Bento/fortaleza.webp",alt:"Fortaleza Tienda Deportiva",link:"https://www.facebook.com/profile.php?id=61552098326569"},{src:"/Bento/paisitas.webp",alt:"Los Paisitas",link:"https://festivaldefestivales.com"},{src:"/Bento/Baby.webp",alt:"Baby Futbol",link:"https://festivaldefestivales.com/festivales/futbol/"},{src:"/Bento/festival.webp",alt:"Festival Festivales",link:"https://www.facebook.com/CDLosPaisitas/?locale=es_LA"},{src:"/Bento/liganarino.webp",alt:"Liga Nariño",link:"https://www.facebook.com/ligafutbolnarino/"},{src:"/Bento/futurasEstrellas.webp",alt:"Futuras Estrellas",link:"https://www.facebook.com/oscararmando.futurasestrellas?locale=es_LA"},{src:"/Bento/chiquifutbol.webp",alt:"Chiquifutbol Vigor",link:"https://www.facebook.com/VigorColombia/?locale=es_LA"},{src:"/Bento/cafe.webp",alt:"Copa del Cafe",link:"https://www.facebook.com/stories/3625459694369756/?source=profile_highlight&locale=es_ES"}].map((c,u)=>e.jsx("div",{className:"relative w-full p-2 sm:w-1/2 md:w-1/3",children:e.jsxs("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",children:[e.jsx("img",{className:`bento-img ${r===u?"transform scale-110":""}`,src:c.src,alt:c.alt,onMouseEnter:()=>s(u),onMouseLeave:i}),r===u&&e.jsxs("div",{className:"bento-caption",children:["Ir a ",c.alt]})]})},u))})})]})},le=ae,ce=({torneoEnCurso:r})=>{const[t,s]=g.useState(""),i={rowsPerPageText:"Torneos por página",rangeSeparatorText:"de",selectAllRowsItem:!0,selectAllRowsItemText:"Todos"},c=[{name:"Nombre del Torneo",selector:l=>e.jsx("div",{className:"mb-4 text-center",children:e.jsx("a",{href:`/listarTorneos/${l.id}`,className:"text-2xl font-bold text-orange-600 transition-colors duration-300 hover:underline hover:text-orange-700",children:l.nombreTorneo})}),sortable:!0},{name:"",cell:l=>e.jsxs("div",{className:"flex flex-col items-center mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-4",children:[e.jsxs("a",{href:`/tablaGrupos?torneo_id=${l.id}`,className:"inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 4a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h5.172a1 1 0 00.707-.293l1.414-1.414A1 1 0 0116.414 3H20a1 1 0 011 1v6a1 1 0 01-1 1h-1v6a1 1 0 01-1 1h-5v2h2a1 1 0 010 2H7a1 1 0 010-2h2v-2H4a1 1 0 01-1-1V11H2a1 1 0 01-1-1V4zm1 2h4v2H4V6z"})}),"Ver Grupos"]}),e.jsxs("a",{href:`/tablasJuego?torneo_id=${l.id}`,className:"inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"})}),"Ver Partidos"]}),e.jsxs("a",{href:`/verResultados?torneo_id=${l.id}`,className:"inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 12h.01M12 5h.01M19 12h.01M12 19h.01M7 7h10M7 12h10M7 17h10"})}),"Ver Resultados"]})]})}],u={rows:{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px",padding:"20px",backgroundColor:"#fff",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s",textAlign:"center"},highlightOnHoverStyle:{backgroundColor:"#e2e8f0",borderBottomColor:"#94a3b8",borderRadius:"10px",outline:"1px solid #94a3b8",transform:"scale(1.02)",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"}},headCells:{style:{display:"none"}},cells:{style:{paddingLeft:"0",paddingRight:"0"}}},h=r.filter(l=>l.nombreTorneo&&l.nombreTorneo.toLowerCase().includes(t.toLowerCase()));return e.jsxs("section",{className:"pt-40 mx-4 lg:mx-20",children:[e.jsx("h2",{className:"p-4 text-2xl font-semibold text-center text-white uppercase rounded-lg shadow-lg lg:text-4xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500",children:"CAMPEONATOS"}),e.jsxs("div",{className:"w-full mt-12",children:[e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",placeholder:"Buscar por nombre del torneo",className:"w-full p-2 border border-gray-300 rounded-lg",value:t,onChange:l=>s(l.target.value)})}),e.jsx(z,{columns:c,data:h,pagination:!0,paginationPerPage:5,paginationComponentOptions:i,noDataComponent:"No hay registros para mostrar",highlightOnHover:!0,responsive:!0,fixedHeader:!0,customStyles:u})]})]})},de=ce;function ve({auth:r,torneoEnCurso:t,programaciones_faces:s}){return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Alianza Sureña"}),e.jsx(F,{auth:r}),e.jsx(ne,{programaciones_faces:s}),e.jsx(Y,{}),e.jsx(de,{torneoEnCurso:t}),e.jsx(V,{}),e.jsx(le,{}),e.jsx(W,{}),e.jsx(q,{}),e.jsx("style",{children:`
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
            `})]})}export{ve as default};
