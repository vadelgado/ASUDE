import{t as P,r as i}from"./app-C5p2IS-n.js";import{d as V,b as gt}from"./tslib.es6-BgyYHPRr.js";import{u as Kr}from"./emotion-unitless.esm-sScrWPmR.js";var j="-ms-",Ke="-moz-",A="-webkit-",Wn="comm",wt="rule",Gt="decl",qr="@import",Bn="@keyframes",Xr="@layer",Gn=Math.abs,Yt=String.fromCharCode,Tt=Object.assign;function Zr(e,t){return z(e,0)^45?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}function Yn(e){return e.trim()}function pe(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,n){return e.replace(t,n)}function st(e,t,n){return e.indexOf(t,n)}function z(e,t){return e.charCodeAt(t)|0}function Fe(e,t,n){return e.slice(t,n)}function le(e){return e.length}function Vn(e){return e.length}function Ue(e,t){return t.push(e),e}function Qr(e,t){return e.map(t).join("")}function yn(e,t){return e.filter(function(n){return!pe(n,t)})}var yt=1,Ne=1,Un=0,te=0,T=0,Be="";function xt(e,t,n,r,o,a,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:yt,column:Ne,length:s,return:"",siblings:l}}function ye(e,t){return Tt(xt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function He(e){for(;e.root;)e=ye(e.root,{children:[e]});Ue(e,e.siblings)}function Jr(){return T}function eo(){return T=te>0?z(Be,--te):0,Ne--,T===10&&(Ne=1,yt--),T}function oe(){return T=te<Un?z(Be,te++):0,Ne++,T===10&&(Ne=1,yt++),T}function Oe(){return z(Be,te)}function lt(){return te}function vt(e,t){return Fe(Be,e,t)}function Ft(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function to(e){return yt=Ne=1,Un=le(Be=e),te=0,[]}function no(e){return Be="",e}function Dt(e){return Yn(vt(te-1,Nt(e===91?e+2:e===40?e+1:e)))}function ro(e){for(;(T=Oe())&&T<33;)oe();return Ft(e)>2||Ft(T)>3?"":" "}function oo(e,t){for(;--t&&oe()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return vt(e,lt()+(t<6&&Oe()==32&&oe()==32))}function Nt(e){for(;oe();)switch(T){case e:return te;case 34:case 39:e!==34&&e!==39&&Nt(T);break;case 40:e===41&&Nt(e);break;case 92:oe();break}return te}function ao(e,t){for(;oe()&&e+T!==57;)if(e+T===84&&Oe()===47)break;return"/*"+vt(t,te-1)+"*"+Yt(e===47?e:oe())}function io(e){for(;!Ft(Oe());)oe();return vt(e,te)}function so(e){return no(ct("",null,null,null,[""],e=to(e),0,[0],e))}function ct(e,t,n,r,o,a,s,l,d){for(var f=0,u=0,g=s,y=0,h=0,x=0,R=1,O=1,$=1,C=0,m="",v=o,D=a,S=r,p=m;O;)switch(x=C,C=oe()){case 40:if(x!=108&&z(p,g-1)==58){st(p+=E(Dt(C),"&","&\f"),"&\f",Gn(f?l[f-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:p+=Dt(C);break;case 9:case 10:case 13:case 32:p+=ro(x);break;case 92:p+=oo(lt()-1,7);continue;case 47:switch(Oe()){case 42:case 47:Ue(lo(ao(oe(),lt()),t,n,d),d);break;default:p+="/"}break;case 123*R:l[f++]=le(p)*$;case 125*R:case 59:case 0:switch(C){case 0:case 125:O=0;case 59+u:$==-1&&(p=E(p,/\f/g,"")),h>0&&le(p)-g&&Ue(h>32?vn(p+";",r,n,g-1,d):vn(E(p," ","")+";",r,n,g-2,d),d);break;case 59:p+=";";default:if(Ue(S=xn(p,t,n,f,u,o,l,m,v=[],D=[],g,a),a),C===123)if(u===0)ct(p,t,S,S,v,a,g,l,D);else switch(y===99&&z(p,3)===110?100:y){case 100:case 108:case 109:case 115:ct(e,S,S,r&&Ue(xn(e,S,S,0,0,o,l,m,o,v=[],g,D),D),o,D,g,l,r?v:D);break;default:ct(p,S,S,S,[""],D,0,l,D)}}f=u=h=0,R=$=1,m=p="",g=s;break;case 58:g=1+le(p),h=x;default:if(R<1){if(C==123)--R;else if(C==125&&R++==0&&eo()==125)continue}switch(p+=Yt(C),C*R){case 38:$=u>0?1:(p+="\f",-1);break;case 44:l[f++]=(le(p)-1)*$,$=1;break;case 64:Oe()===45&&(p+=Dt(oe())),y=Oe(),u=g=le(m=p+=io(lt())),C++;break;case 45:x===45&&le(p)==2&&(R=0)}}return a}function xn(e,t,n,r,o,a,s,l,d,f,u,g){for(var y=o-1,h=o===0?a:[""],x=Vn(h),R=0,O=0,$=0;R<r;++R)for(var C=0,m=Fe(e,y+1,y=Gn(O=s[R])),v=e;C<x;++C)(v=Yn(O>0?h[C]+" "+m:E(m,/&\f/g,h[C])))&&(d[$++]=v);return xt(e,t,n,o===0?wt:l,d,f,u,g)}function lo(e,t,n,r){return xt(e,t,n,Wn,Yt(Jr()),Fe(e,2,-2),0,r)}function vn(e,t,n,r,o){return xt(e,t,n,Gt,Fe(e,0,r),Fe(e,r+1,-1),r,o)}function Kn(e,t,n){switch(Zr(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return Ke+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Ke+e+j+e+e;case 5936:switch(z(e,t+11)){case 114:return A+e+j+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+j+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+j+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+j+e+e;case 6165:return A+e+j+"flex-"+e+e;case 5187:return A+e+E(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return A+e+j+"flex-item-"+E(e,/flex-|-self/g,"")+(pe(e,/flex-|baseline/)?"":j+"grid-row-"+E(e,/flex-|-self/g,""))+e;case 4675:return A+e+j+"flex-line-pack"+E(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+j+E(e,"shrink","negative")+e;case 5292:return A+e+j+E(e,"basis","preferred-size")+e;case 6060:return A+"box-"+E(e,"-grow","")+A+e+j+E(e,"grow","positive")+e;case 4554:return A+E(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!pe(e,/flex-|baseline/))return j+"grid-column-align"+Fe(e,t)+e;break;case 2592:case 3360:return j+E(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,pe(r.props,/grid-\w+-end/)})?~st(e+(n=n[t].value),"span",0)?e:j+E(e,"-start","")+e+j+"grid-row-span:"+(~st(n,"span",0)?pe(n,/\d+/):+pe(n,/\d+/)-+pe(e,/\d+/))+";":j+E(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pe(r.props,/grid-\w+-start/)})?e:j+E(E(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(le(e)-1-t>6)switch(z(e,t+1)){case 109:if(z(e,t+4)!==45)break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Ke+(z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~st(e,"stretch",0)?Kn(E(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return E(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,s,l,d,f){return j+o+":"+a+f+(s?j+o+"-span:"+(l?d:+d-+a)+f:"")+e});case 4949:if(z(e,t+6)===121)return E(e,":",":"+A)+e;break;case 6444:switch(z(e,z(e,14)===45?18:11)){case 120:return E(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(z(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+j+"$2box$3")+e;case 100:return E(e,":",":"+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(e,"scroll-","scroll-snap-")+e}return e}function ft(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function co(e,t,n,r){switch(e.type){case Xr:if(e.children.length)break;case qr:case Gt:return e.return=e.return||e.value;case Wn:return"";case Bn:return e.return=e.value+"{"+ft(e.children,r)+"}";case wt:if(!le(e.value=e.props.join(",")))return""}return le(n=ft(e.children,r))?e.return=e.value+"{"+n+"}":""}function uo(e){var t=Vn(e);return function(n,r,o,a){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,a)||"";return s}}function po(e){return function(t){t.root||(t=t.return)&&e(t)}}function go(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Gt:e.return=Kn(e.value,e.length,n);return;case Bn:return ft([ye(e,{value:E(e.value,"@","@"+A)})],r);case wt:if(e.length)return Qr(n=e.props,function(o){switch(pe(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":He(ye(e,{props:[E(o,/:(read-\w+)/,":"+Ke+"$1")]})),He(ye(e,{props:[o]})),Tt(e,{props:yn(n,r)});break;case"::placeholder":He(ye(e,{props:[E(o,/:(plac\w+)/,":"+A+"input-$1")]})),He(ye(e,{props:[E(o,/:(plac\w+)/,":"+Ke+"$1")]})),He(ye(e,{props:[E(o,/:(plac\w+)/,j+"input-$1")]})),He(ye(e,{props:[o]})),Tt(e,{props:yn(n,r)});break}return""})}}var Q={},Me=typeof process<"u"&&Q!==void 0&&(Q.REACT_APP_SC_ATTR||Q.SC_ATTR)||"data-styled",qn="active",Xn="data-styled-version",Ct="6.1.11",Vt=`/*!sc*/
`,Ut=typeof window<"u"&&"HTMLElement"in window,fo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==""?Q.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Q.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.SC_DISABLE_SPEEDY!==void 0&&Q.SC_DISABLE_SPEEDY!==""&&Q.SC_DISABLE_SPEEDY!=="false"&&Q.SC_DISABLE_SPEEDY),St=Object.freeze([]),Le=Object.freeze({});function ho(e,t,n){return n===void 0&&(n=Le),e.theme!==n.theme&&e.theme||t||n.theme}var Zn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bo=/(^-|-$)/g;function Cn(e){return e.replace(mo,"-").replace(bo,"")}var wo=/(a)(d)/gi,rt=52,Sn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mt(e){var t,n="";for(t=Math.abs(e);t>rt;t=t/rt|0)n=Sn(t%rt)+n;return(Sn(t%rt)+n).replace(wo,"$1-$2")}var It,Qn=5381,Te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jn=function(e){return Te(Qn,e)};function yo(e){return Mt(Jn(e)>>>0)}function xo(e){return e.displayName||e.name||"Component"}function At(e){return typeof e=="string"&&!0}var er=typeof Symbol=="function"&&Symbol.for,tr=er?Symbol.for("react.memo"):60115,vo=er?Symbol.for("react.forward_ref"):60112,Co={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},So={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ro=((It={})[vo]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},It[tr]=nr,It);function Rn(e){return("type"in(t=e)&&t.type.$$typeof)===tr?nr:"$$typeof"in e?Ro[e.$$typeof]:Co;var t}var $o=Object.defineProperty,Eo=Object.getOwnPropertyNames,$n=Object.getOwnPropertySymbols,Oo=Object.getOwnPropertyDescriptor,Po=Object.getPrototypeOf,En=Object.prototype;function rr(e,t,n){if(typeof t!="string"){if(En){var r=Po(t);r&&r!==En&&rr(e,r,n)}var o=Eo(t);$n&&(o=o.concat($n(t)));for(var a=Rn(e),s=Rn(t),l=0;l<o.length;++l){var d=o[l];if(!(d in So||n&&n[d]||s&&d in s||a&&d in a)){var f=Oo(t,d);try{$o(e,d,f)}catch{}}}}return e}function ke(e){return typeof e=="function"}function Kt(e){return typeof e=="object"&&"styledComponentId"in e}function Ee(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function On(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ze(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Lt(e,t,n){if(n===void 0&&(n=!1),!n&&!Ze(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Lt(e[r],t[r]);else if(Ze(t))for(var r in t)e[r]=Lt(e[r],t[r]);return e}function qt(e,t){Object.defineProperty(e,"toString",{value:t})}function De(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ko=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw De(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),d=(s=0,n.length);s<d;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,s=o;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(Vt);return n},e}(),dt=new Map,ht=new Map,ut=1,ot=function(e){if(dt.has(e))return dt.get(e);for(;ht.has(ut);)ut++;var t=ut++;return dt.set(e,t),ht.set(t,e),t},Do=function(e,t){ut=t+1,dt.set(e,t),ht.set(t,e)},Io="style[".concat(Me,"][").concat(Xn,'="').concat(Ct,'"]'),Ao=new RegExp("^".concat(Me,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_o=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},jo=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Vt),o=[],a=0,s=r.length;a<s;a++){var l=r[a].trim();if(l){var d=l.match(Ao);if(d){var f=0|parseInt(d[1],10),u=d[2];f!==0&&(Do(u,f),_o(e,u,d[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(l)}}};function Ho(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var or=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var d=Array.from(l.querySelectorAll("style[".concat(Me,"]")));return d[d.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Me,qn),r.setAttribute(Xn,Ct);var s=Ho();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},To=function(){function e(t){this.element=or(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var s=r[o];if(s.ownerNode===n)return s}throw De(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Fo=function(){function e(t){this.element=or(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),No=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pn=Ut,Mo={isServer:!Ut,useCSSOMInjection:!fo},ar=function(){function e(t,n,r){t===void 0&&(t=Le),n===void 0&&(n={});var o=this;this.options=V(V({},Mo),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ut&&Pn&&(Pn=!1,function(a){for(var s=document.querySelectorAll(Io),l=0,d=s.length;l<d;l++){var f=s[l];f&&f.getAttribute(Me)!==qn&&(jo(a,f),f.parentNode&&f.parentNode.removeChild(f))}}(this)),qt(this,function(){return function(a){for(var s=a.getTag(),l=s.length,d="",f=function(g){var y=function($){return ht.get($)}(g);if(y===void 0)return"continue";var h=a.names.get(y),x=s.getGroup(g);if(h===void 0||x.length===0)return"continue";var R="".concat(Me,".g").concat(g,'[id="').concat(y,'"]'),O="";h!==void 0&&h.forEach(function($){$.length>0&&(O+="".concat($,","))}),d+="".concat(x).concat(R,'{content:"').concat(O,'"}').concat(Vt)},u=0;u<l;u++)f(u);return d}(o)})}return e.registerId=function(t){return ot(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(V(V({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new No(o):r?new To(o):new Fo(o)}(this.options),new ko(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ot(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ot(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ot(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lo=/&/g,zo=/^\s*\/\/.*$/gm;function ir(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ir(n.children,t)),n})}function Wo(e){var t,n,r,o=Le,a=o.options,s=a===void 0?Le:a,l=o.plugins,d=l===void 0?St:l,f=function(y,h,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):y},u=d.slice();u.push(function(y){y.type===wt&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Lo,n).replace(r,f))}),s.prefix&&u.push(go),u.push(co);var g=function(y,h,x,R){h===void 0&&(h=""),x===void 0&&(x=""),R===void 0&&(R="&"),t=R,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var O=y.replace(zo,""),$=so(x||h?"".concat(x," ").concat(h," { ").concat(O," }"):O);s.namespace&&($=ir($,s.namespace));var C=[];return ft($,uo(u.concat(po(function(m){return C.push(m)})))),C};return g.hash=d.length?d.reduce(function(y,h){return h.name||De(15),Te(y,h.name)},Qn).toString():"",g}var Bo=new ar,zt=Wo(),sr=P.createContext({shouldForwardProp:void 0,styleSheet:Bo,stylis:zt});sr.Consumer;P.createContext(void 0);function kn(){return i.useContext(sr)}var Go=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=zt);var s=r.name+a.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,qt(this,function(){throw De(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=zt),this.name+t.hash},e}(),Yo=function(e){return e>="A"&&e<="Z"};function Dn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Yo(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lr=function(e){return e==null||e===!1||e===""},cr=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!lr(a)&&(Array.isArray(a)&&a.isCss||ke(a)?r.push("".concat(Dn(o),":"),a,";"):Ze(a)?r.push.apply(r,gt(gt(["".concat(o," {")],cr(a),!1),["}"],!1)):r.push("".concat(Dn(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Kr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Pe(e,t,n,r){if(lr(e))return[];if(Kt(e))return[".".concat(e.styledComponentId)];if(ke(e)){if(!ke(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return Pe(o,t,n,r)}var a;return e instanceof Go?n?(e.inject(n,r),[e.getName(r)]):[e]:Ze(e)?cr(e):Array.isArray(e)?Array.prototype.concat.apply(St,e.map(function(s){return Pe(s,t,n,r)})):[e.toString()]}function Vo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ke(n)&&!Kt(n))return!1}return!0}var Uo=Jn(Ct),Ko=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Vo(t),this.componentId=n,this.baseHash=Te(Uo,n),this.baseStyle=r,ar.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ee(o,this.staticRulesId);else{var a=On(Pe(this.rules,t,n,r)),s=Mt(Te(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=Ee(o,s),this.staticRulesId=s}else{for(var d=Te(this.baseHash,r.hash),f="",u=0;u<this.rules.length;u++){var g=this.rules[u];if(typeof g=="string")f+=g;else if(g){var y=On(Pe(g,t,n,r));d=Te(d,y+u),f+=y}}if(f){var h=Mt(d>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(f,".".concat(h),void 0,this.componentId)),o=Ee(o,h)}}return o},e}(),mt=P.createContext(void 0);mt.Consumer;function qo(e){var t=P.useContext(mt),n=i.useMemo(function(){return function(r,o){if(!r)throw De(14);if(ke(r)){var a=r(o);return a}if(Array.isArray(r)||typeof r!="object")throw De(8);return o?V(V({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?P.createElement(mt.Provider,{value:n},e.children):null}var _t={};function Xo(e,t,n){var r=Kt(e),o=e,a=!At(e),s=t.attrs,l=s===void 0?St:s,d=t.componentId,f=d===void 0?function(v,D){var S=typeof v!="string"?"sc":Cn(v);_t[S]=(_t[S]||0)+1;var p="".concat(S,"-").concat(yo(Ct+S+_t[S]));return D?"".concat(D,"-").concat(p):p}(t.displayName,t.parentComponentId):d,u=t.displayName,g=u===void 0?function(v){return At(v)?"styled.".concat(v):"Styled(".concat(xo(v),")")}(e):u,y=t.displayName&&t.componentId?"".concat(Cn(t.displayName),"-").concat(t.componentId):t.componentId||f,h=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var R=o.shouldForwardProp;if(t.shouldForwardProp){var O=t.shouldForwardProp;x=function(v,D){return R(v,D)&&O(v,D)}}else x=R}var $=new Ko(n,y,r?o.componentStyle:void 0);function C(v,D){return function(S,p,_){var U=S.attrs,G=S.componentStyle,J=S.defaultProps,ae=S.foldedComponentIds,H=S.styledComponentId,ge=S.target,ve=P.useContext(mt),fe=kn(),ie=S.shouldForwardProp||fe.shouldForwardProp,Ie=ho(p,ve,J)||Le,K=function(de,X,me){for(var ue,ee=V(V({},X),{className:void 0,theme:me}),Se=0;Se<de.length;Se+=1){var Z=ke(ue=de[Se])?ue(ee):ue;for(var W in Z)ee[W]=W==="className"?Ee(ee[W],Z[W]):W==="style"?V(V({},ee[W]),Z[W]):Z[W]}return X.className&&(ee.className=Ee(ee.className,X.className)),ee}(U,p,Ie),he=K.as||ge,ce={};for(var L in K)K[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&K.theme===Ie||(L==="forwardedAs"?ce.as=K.forwardedAs:ie&&!ie(L,he)||(ce[L]=K[L]));var Ce=function(de,X){var me=kn(),ue=de.generateAndInjectStyles(X,me.styleSheet,me.stylis);return ue}(G,K),q=Ee(ae,H);return Ce&&(q+=" "+Ce),K.className&&(q+=" "+K.className),ce[At(he)&&!Zn.has(he)?"class":"className"]=q,ce.ref=_,i.createElement(he,ce)}(m,v,D)}C.displayName=g;var m=P.forwardRef(C);return m.attrs=h,m.componentStyle=$,m.displayName=g,m.shouldForwardProp=x,m.foldedComponentIds=r?Ee(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=y,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(D){for(var S=[],p=1;p<arguments.length;p++)S[p-1]=arguments[p];for(var _=0,U=S;_<U.length;_++)Lt(D,U[_],!0);return D}({},o.defaultProps,v):v}}),qt(m,function(){return".".concat(m.styledComponentId)}),a&&rr(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function In(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var An=function(e){return Object.assign(e,{isCss:!0})};function M(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ke(e)||Ze(e))return An(Pe(In(St,gt([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Pe(r):An(Pe(In(r,t)))}function Wt(e,t,n){if(n===void 0&&(n=Le),!t)throw De(1,t);var r=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,M.apply(void 0,gt([o],a,!1)))};return r.attrs=function(o){return Wt(e,t,V(V({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Wt(e,t,V(V({},n),o))},r}var dr=function(e){return Wt(Xo,e)},k=dr;Zn.forEach(function(e){k[e]=dr(e)});var xe;function ze(e,t){return e[t]}function Zo(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function Qo(e=[],t,n="id"){const r=e.slice(),o=ze(t,n);return o?r.splice(r.findIndex(a=>ze(a,n)===o),1):r.splice(r.findIndex(a=>a===t),1),r}function _n(e){return e.map((t,n)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=n+1),r})}function qe(e,t){return Math.ceil(e/t)}function jt(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(xe||(xe={}));const N=()=>null;function ur(e,t=[],n=[]){let r={},o=[...n];return t.length&&t.forEach(a=>{if(!a.when||typeof a.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');a.when(e)&&(r=a.style||{},a.classNames&&(o=[...o,...a.classNames]),typeof a.style=="function"&&(r=a.style(e)||{}))}),{conditionalStyle:r,classNames:o.join(" ")}}function pt(e,t=[],n="id"){const r=ze(e,n);return r?t.some(o=>ze(o,n)===r):t.some(o=>o===e)}function at(e,t){return t?e.findIndex(n=>Xe(n.id,t)):-1}function Xe(e,t){return e==t}function Jo(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:o,rowCount:a,mergeSelections:s}=t,l=!e.allSelected,d=!e.toggleOnSelectedRowsChange;if(s){const f=l?[...e.selectedRows,...o.filter(u=>!pt(u,e.selectedRows,r))]:e.selectedRows.filter(u=>!pt(u,o,r));return Object.assign(Object.assign({},e),{allSelected:l,selectedCount:f.length,selectedRows:f,toggleOnSelectedRowsChange:d})}return Object.assign(Object.assign({},e),{allSelected:l,selectedCount:l?a:0,selectedRows:l?o:[],toggleOnSelectedRowsChange:d})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:o,isSelected:a,rowCount:s,singleSelect:l}=t;return l?a?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[o],toggleOnSelectedRowsChange:n}):a?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:Qo(e.selectedRows,o,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:Zo(e.selectedRows,o),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:o,totalRows:a,mergeSelections:s}=t;if(s){const l=[...e.selectedRows,...o.filter(d=>!pt(d,e.selectedRows,r))];return Object.assign(Object.assign({},e),{selectedCount:l.length,allSelected:!1,selectedRows:l,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:o.length,allSelected:o.length===a,selectedRows:o,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:o,clearSelectedOnSort:a}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:o,sortDirection:r,currentPage:1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:o,visibleOnly:a,persistSelectedOnPageChange:s}=t,l=o&&s,d=o&&!s||a;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),l&&{allSelected:!1}),d&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:r})}}}const ea=M`
	pointer-events: none;
	opacity: 0.4;
`,ta=k.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&ea};
	${({theme:e})=>e.table.style};
`,na=M`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,ra=k.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&na};
	${({theme:e})=>e.head.style};
`,oa=k.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,pr=(e,...t)=>M`
		@media screen and (max-width: ${599}px) {
			${M(e,...t)}
		}
	`,aa=(e,...t)=>M`
		@media screen and (max-width: ${959}px) {
			${M(e,...t)}
		}
	`,ia=(e,...t)=>M`
		@media screen and (max-width: ${1280}px) {
			${M(e,...t)}
		}
	`,sa=e=>(t,...n)=>M`
			@media screen and (max-width: ${e}px) {
				${M(t,...n)}
			}
		`,Ge=k.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,gr=k(Ge)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&M`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&pr`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&aa`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&ia`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&sa(e)`
    display: none;
  `};
`,la=M`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,ca=k(gr).attrs(e=>({style:e.style}))`
	${({$renderAsCell:e})=>!e&&la};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var da=i.memo(function({id:e,column:t,row:n,rowIndex:r,dataTag:o,isDragging:a,onDragStart:s,onDragOver:l,onDragEnd:d,onDragEnter:f,onDragLeave:u}){const{conditionalStyle:g,classNames:y}=ur(n,t.conditionalCellStyles,["rdt_TableCell"]);return i.createElement(ca,{id:e,"data-column-id":t.id,role:"cell",className:y,"data-tag":o,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:g,$isDragging:a,onDragStart:s,onDragOver:l,onDragEnd:d,onDragEnter:f,onDragLeave:u},!t.cell&&i.createElement("div",{"data-tag":o},function(h,x,R,O){return x?R&&typeof R=="function"?R(h,O):x(h,O):null}(n,t.selector,t.format,r)),t.cell&&t.cell(n,r,t,e))});const jn="input";var fr=i.memo(function({name:e,component:t=jn,componentOptions:n={style:{}},indeterminate:r=!1,checked:o=!1,disabled:a=!1,onClick:s=N}){const l=t,d=l!==jn?n.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(a),f=i.useMemo(()=>function(u,...g){let y;return Object.keys(u).map(h=>u[h]).forEach((h,x)=>{typeof h=="function"&&(y=Object.assign(Object.assign({},u),{[Object.keys(u)[x]]:h(...g)}))}),y||u}(n,r),[n,r]);return i.createElement(l,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=r)},style:d,onClick:a?N:s,name:e,"aria-label":e,checked:o,disabled:a},f,{onChange:N}))});const ua=k(Ge)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function pa({name:e,keyField:t,row:n,rowCount:r,selected:o,selectableRowsComponent:a,selectableRowsComponentProps:s,selectableRowsSingle:l,selectableRowDisabled:d,onSelectedRow:f}){const u=!(!d||!d(n));return i.createElement(ua,{onClick:g=>g.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},i.createElement(fr,{name:e,component:a,componentOptions:s,checked:o,"aria-checked":o,onClick:()=>{f({type:"SELECT_SINGLE_ROW",row:n,isSelected:o,keyField:t,rowCount:r,singleSelect:l})},disabled:u}))}const ga=k.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function fa({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:r,row:o,onToggled:a}){const s=t?n.expanded:n.collapsed;return i.createElement(ga,{"aria-disabled":e,onClick:()=>a&&a(o),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const ha=k(Ge)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function ma({row:e,expanded:t=!1,expandableIcon:n,id:r,onToggled:o,disabled:a=!1}){return i.createElement(ha,{onClick:s=>s.stopPropagation(),$noPadding:!0},i.createElement(fa,{id:r,row:e,expanded:t,expandableIcon:n,disabled:a,onToggled:o}))}const ba=k.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var wa=i.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:o}){const a=["rdt_ExpanderRow",...o.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return i.createElement(ba,{className:a,$extendedRowStyle:r},i.createElement(t,Object.assign({data:e},n)))});const Ht="allowRowEvents";var bt,Bt,Hn;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(bt||(bt={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Bt||(Bt={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(Hn||(Hn={}));const ya=M`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,xa=M`
	&:hover {
		cursor: pointer;
	}
`,va=k.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&ya};
	${({$pointerOnHover:e})=>e&&xa};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function Ca({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:o=!1,expandableIcon:a,expandableRows:s=!1,expandableRowsComponent:l,expandableRowsComponentProps:d,expandableRowsHideExpander:f,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:g=!1,highlightOnHover:y=!1,id:h,expandableInheritConditionalStyles:x,keyField:R,onRowClicked:O=N,onRowDoubleClicked:$=N,onRowMouseEnter:C=N,onRowMouseLeave:m=N,onRowExpandToggled:v=N,onSelectedRow:D=N,pointerOnHover:S=!1,row:p,rowCount:_,rowIndex:U,selectableRowDisabled:G=null,selectableRows:J=!1,selectableRowsComponent:ae,selectableRowsComponentProps:H,selectableRowsHighlight:ge=!1,selectableRowsSingle:ve=!1,selected:fe,striped:ie=!1,draggingColumnId:Ie,onDragStart:K,onDragOver:he,onDragEnd:ce,onDragEnter:L,onDragLeave:Ce}){const[q,de]=i.useState(n);i.useEffect(()=>{de(n)},[n]);const X=i.useCallback(()=>{de(!q),v(!q,p)},[q,v,p]),me=S||s&&(u||g),ue=i.useCallback(F=>{F.target.getAttribute("data-tag")===Ht&&(O(p,F),!r&&s&&u&&X())},[r,u,s,X,O,p]),ee=i.useCallback(F=>{F.target.getAttribute("data-tag")===Ht&&($(p,F),!r&&s&&g&&X())},[r,g,s,X,$,p]),Se=i.useCallback(F=>{C(p,F)},[C,p]),Z=i.useCallback(F=>{m(p,F)},[m,p]),W=ze(p,R),{conditionalStyle:Je,classNames:et}=ur(p,t,["rdt_TableRow"]),Rt=ge&&fe,$t=x?Je:{},Et=ie&&U%2==0;return i.createElement(i.Fragment,null,i.createElement(va,{id:`row-${h}`,role:"row",$striped:Et,$highlightOnHover:y,$pointerOnHover:!r&&me,$dense:o,onClick:ue,onDoubleClick:ee,onMouseEnter:Se,onMouseLeave:Z,className:et,$selected:Rt,$conditionalStyle:Je},J&&i.createElement(pa,{name:`select-row-${W}`,keyField:R,row:p,rowCount:_,selected:fe,selectableRowsComponent:ae,selectableRowsComponentProps:H,selectableRowDisabled:G,selectableRowsSingle:ve,onSelectedRow:D}),s&&!f&&i.createElement(ma,{id:W,expandableIcon:a,expanded:q,row:p,onToggled:X,disabled:r}),e.map(F=>F.omit?null:i.createElement(da,{id:`cell-${F.id}-${W}`,key:`cell-${F.id}-${W}`,dataTag:F.ignoreRowClick||F.button?null:Ht,column:F,row:p,rowIndex:U,isDragging:Xe(Ie,F.id),onDragStart:K,onDragOver:he,onDragEnd:ce,onDragEnter:L,onDragLeave:Ce}))),s&&q&&i.createElement(wa,{key:`expander-${W}`,data:p,extendedRowStyle:$t,extendedClassNames:et,ExpanderComponent:l,expanderComponentProps:d}))}const Sa=k.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Ra=({sortActive:e,sortDirection:t})=>P.createElement(Sa,{$sortActive:e,$sortDirection:t},"▲"),$a=k(gr)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,Ea=M`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&M`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Oa=k.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Ea};
`,Pa=k.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ka=i.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:r={},sortDirection:o,sortIcon:a,sortServer:s,pagination:l,paginationServer:d,persistSelectedOnSort:f,selectableRowsVisibleOnly:u,onSort:g,onDragStart:y,onDragOver:h,onDragEnd:x,onDragEnter:R,onDragLeave:O}){i.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[$,C]=i.useState(!1),m=i.useRef(null);if(i.useEffect(()=>{m.current&&C(m.current.scrollWidth>m.current.clientWidth)},[$]),e.omit)return null;const v=()=>{if(!e.sortable&&!e.selector)return;let H=o;Xe(r.id,e.id)&&(H=o===xe.ASC?xe.DESC:xe.ASC),g({type:"SORT_CHANGE",sortDirection:H,selectedColumn:e,clearSelectedOnSort:l&&d&&!f||s||u})},D=H=>i.createElement(Ra,{sortActive:H,sortDirection:o}),S=()=>i.createElement("span",{className:[o,"__rdt_custom_sort_icon__"].join(" ")},a),p=!(!e.sortable||!Xe(r.id,e.id)),_=!e.sortable||t,U=e.sortable&&!a&&!e.right,G=e.sortable&&!a&&e.right,J=e.sortable&&a&&!e.right,ae=e.sortable&&a&&e.right;return i.createElement($a,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:Xe(e.id,n),onDragStart:y,onDragOver:h,onDragEnd:x,onDragEnter:R,onDragLeave:O},e.name&&i.createElement(Oa,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:_?void 0:v,onKeyPress:_?void 0:H=>{H.key==="Enter"&&v()},$sortActive:!_&&p,disabled:_},!_&&ae&&S(),!_&&G&&D(p),typeof e.name=="string"?i.createElement(Pa,{title:$?e.name:void 0,ref:m,"data-column-id":e.id},e.name):e.name,!_&&J&&S(),!_&&U&&D(p)))});const Da=k(Ge)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Ia({headCell:e=!0,rowData:t,keyField:n,allSelected:r,mergeSelections:o,selectedRows:a,selectableRowsComponent:s,selectableRowsComponentProps:l,selectableRowDisabled:d,onSelectAllRows:f}){const u=a.length>0&&!r,g=d?t.filter(x=>!d(x)):t,y=g.length===0,h=Math.min(t.length,g.length);return i.createElement(Da,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},i.createElement(fr,{name:"select-all-rows",component:s,componentOptions:l,onClick:()=>{f({type:"SELECT_ALL_ROWS",rows:g,rowCount:h,mergeSelections:o,keyField:n})},checked:r,indeterminate:u,disabled:y}))}function hr(e=bt.AUTO){const t=typeof window=="object",[n,r]=i.useState(!1);return i.useEffect(()=>{if(t)if(e!=="auto")r(e==="rtl");else{const o=!(!window.document||!window.document.createElement),a=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],l=a.dir==="rtl"||s.dir==="rtl";r(o&&l)}},[e,t]),n}const Aa=k.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,_a=k.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,Tn=k.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function ja({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:r,direction:o}){const a=hr(o),s=r>0;return n?i.createElement(Tn,{$visible:s},i.cloneElement(n,{selectedCount:r})):i.createElement(Tn,{$visible:s,$rtl:a},i.createElement(Aa,null,((l,d,f)=>{if(d===0)return null;const u=d===1?l.singular:l.plural;return f?`${d} ${l.message||""} ${u}`:`${d} ${u} ${l.message||""}`})(e,r,a)),i.createElement(_a,null,t))}const Ha=k.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Ta=k.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Fa=k.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Na=({title:e,actions:t=null,contextMessage:n,contextActions:r,contextComponent:o,selectedCount:a,direction:s,showMenu:l=!0})=>i.createElement(Ha,{className:"rdt_TableHeader",role:"heading","aria-level":1},i.createElement(Ta,null,e),t&&i.createElement(Fa,null,t),l&&i.createElement(ja,{contextMessage:n,contextActions:r,contextComponent:o,direction:s,selectedCount:a}));function mr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Ma={left:"flex-start",right:"flex-end",center:"center"},La=k.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Ma[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,za=e=>{var{align:t="right",wrapContent:n=!0}=e,r=mr(e,["align","wrapContent"]);return i.createElement(La,Object.assign({align:t,$wrapContent:n},r))},Wa=k.div`
	display: flex;
	flex-direction: column;
`,Ba=k.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&M`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&M`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Fn=k.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Ga=k.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Ya=k(Ge)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Va=k.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Ua=()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},P.createElement("path",{d:"M7 10l5 5 5-5z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Ka=k.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,qa=k.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Xa=e=>{var{defaultValue:t,onChange:n}=e,r=mr(e,["defaultValue","onChange"]);return i.createElement(qa,null,i.createElement(Ka,Object.assign({onChange:n,defaultValue:t},r)),i.createElement(Ua,null))},c={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return P.createElement("div",null,"To add an expander pass in a component instance via ",P.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:P.createElement(()=>P.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),P.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:P.createElement(()=>P.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),P.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:P.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:P.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Bt.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),P.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),P.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:bt.AUTO,onChangePage:N,onChangeRowsPerPage:N,onRowClicked:N,onRowDoubleClicked:N,onRowMouseEnter:N,onRowMouseLeave:N,onRowExpandToggled:N,onSelectedRowsChange:N,onSort:N,onColumnOrderChange:N},Za={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Qa=k.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,it=k.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Ja=k.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${pr`
    width: 100%;
    justify-content: space-around;
  `};
`,br=k.span`
	flex-shrink: 1;
	user-select: none;
`,ei=k(br)`
	margin: 0 24px;
`,ti=k(br)`
	margin: 0 4px;
`;var ni=i.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:r=c.direction,paginationRowsPerPageOptions:o=c.paginationRowsPerPageOptions,paginationIconLastPage:a=c.paginationIconLastPage,paginationIconFirstPage:s=c.paginationIconFirstPage,paginationIconNext:l=c.paginationIconNext,paginationIconPrevious:d=c.paginationIconPrevious,paginationComponentOptions:f=c.paginationComponentOptions,onChangeRowsPerPage:u=c.onChangeRowsPerPage,onChangePage:g=c.onChangePage}){const y=(()=>{const H=typeof window=="object";function ge(){return{width:H?window.innerWidth:void 0,height:H?window.innerHeight:void 0}}const[ve,fe]=i.useState(ge);return i.useEffect(()=>{if(!H)return()=>null;function ie(){fe(ge())}return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)},[]),ve})(),h=hr(r),x=y.width&&y.width>599,R=qe(t,e),O=n*e,$=O-e+1,C=n===1,m=n===R,v=Object.assign(Object.assign({},Za),f),D=n===R?`${$}-${t} ${v.rangeSeparatorText} ${t}`:`${$}-${O} ${v.rangeSeparatorText} ${t}`,S=i.useCallback(()=>g(n-1),[n,g]),p=i.useCallback(()=>g(n+1),[n,g]),_=i.useCallback(()=>g(1),[g]),U=i.useCallback(()=>g(qe(t,e)),[g,t,e]),G=i.useCallback(H=>u(Number(H.target.value),n),[n,u]),J=o.map(H=>i.createElement("option",{key:H,value:H},H));v.selectAllRowsItem&&J.push(i.createElement("option",{key:-1,value:t},v.selectAllRowsItemText));const ae=i.createElement(Xa,{onChange:G,defaultValue:e,"aria-label":v.rowsPerPageText},J);return i.createElement(Qa,{className:"rdt_Pagination"},!v.noRowsPerPage&&x&&i.createElement(i.Fragment,null,i.createElement(ti,null,v.rowsPerPageText),ae),x&&i.createElement(ei,null,D),i.createElement(Ja,null,i.createElement(it,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:_,disabled:C,$isRTL:h},s),i.createElement(it,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:S,disabled:C,$isRTL:h},d),!v.noRowsPerPage&&!x&&ae,i.createElement(it,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":m,onClick:p,disabled:m,$isRTL:h},l),i.createElement(it,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":m,onClick:U,disabled:m,$isRTL:h},a)))});const $e=(e,t)=>{const n=i.useRef(!0);i.useEffect(()=>{n.current?n.current=!1:e()},t)};function ri(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oi=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===ai}(t)}(e)},ai=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Qe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?We((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ii(e,t,n){return e.concat(t).map(function(r){return Qe(r,n)})}function Nn(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return Object.propertyIsEnumerable.call(t,n)}):[]}(e))}function Mn(e,t){try{return t in e}catch{return!1}}function si(e,t,n){var r={};return n.isMergeableObject(e)&&Nn(e).forEach(function(o){r[o]=Qe(e[o],n)}),Nn(t).forEach(function(o){(function(a,s){return Mn(a,s)&&!(Object.hasOwnProperty.call(a,s)&&Object.propertyIsEnumerable.call(a,s))})(e,o)||(Mn(e,o)&&n.isMergeableObject(t[o])?r[o]=function(a,s){if(!s.customMerge)return We;var l=s.customMerge(a);return typeof l=="function"?l:We}(o,n)(e[o],t[o],n):r[o]=Qe(t[o],n))}),r}function We(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ii,n.isMergeableObject=n.isMergeableObject||oi,n.cloneUnlessOtherwiseSpecified=Qe;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):si(e,t,n):Qe(t,n)}We.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,r){return We(n,r,t)},{})};var li=ri(We);const Ln={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},zn={default:Ln,light:Ln,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function ci(e,t,n,r){const[o,a]=i.useState(()=>_n(e)),[s,l]=i.useState(""),d=i.useRef("");$e(()=>{a(_n(e))},[e]);const f=i.useCallback(O=>{var $,C,m;const{attributes:v}=O.target,D=($=v.getNamedItem("data-column-id"))===null||$===void 0?void 0:$.value;D&&(d.current=((m=(C=o[at(o,D)])===null||C===void 0?void 0:C.id)===null||m===void 0?void 0:m.toString())||"",l(d.current))},[o]),u=i.useCallback(O=>{var $;const{attributes:C}=O.target,m=($=C.getNamedItem("data-column-id"))===null||$===void 0?void 0:$.value;if(m&&d.current&&m!==d.current){const v=at(o,d.current),D=at(o,m),S=[...o];S[v]=o[D],S[D]=o[v],a(S),t(S)}},[t,o]),g=i.useCallback(O=>{O.preventDefault()},[]),y=i.useCallback(O=>{O.preventDefault()},[]),h=i.useCallback(O=>{O.preventDefault(),d.current="",l("")},[]),x=function(O=!1){return O?xe.ASC:xe.DESC}(r),R=i.useMemo(()=>o[at(o,n==null?void 0:n.toString())]||{},[n,o]);return{tableColumns:o,draggingColumnId:s,handleDragStart:f,handleDragEnter:u,handleDragOver:g,handleDragLeave:y,handleDragEnd:h,defaultSortDirection:x,defaultSortColumn:R}}var gi=i.memo(function(e){const{data:t=c.data,columns:n=c.columns,title:r=c.title,actions:o=c.actions,keyField:a=c.keyField,striped:s=c.striped,highlightOnHover:l=c.highlightOnHover,pointerOnHover:d=c.pointerOnHover,dense:f=c.dense,selectableRows:u=c.selectableRows,selectableRowsSingle:g=c.selectableRowsSingle,selectableRowsHighlight:y=c.selectableRowsHighlight,selectableRowsNoSelectAll:h=c.selectableRowsNoSelectAll,selectableRowsVisibleOnly:x=c.selectableRowsVisibleOnly,selectableRowSelected:R=c.selectableRowSelected,selectableRowDisabled:O=c.selectableRowDisabled,selectableRowsComponent:$=c.selectableRowsComponent,selectableRowsComponentProps:C=c.selectableRowsComponentProps,onRowExpandToggled:m=c.onRowExpandToggled,onSelectedRowsChange:v=c.onSelectedRowsChange,expandableIcon:D=c.expandableIcon,onChangeRowsPerPage:S=c.onChangeRowsPerPage,onChangePage:p=c.onChangePage,paginationServer:_=c.paginationServer,paginationServerOptions:U=c.paginationServerOptions,paginationTotalRows:G=c.paginationTotalRows,paginationDefaultPage:J=c.paginationDefaultPage,paginationResetDefaultPage:ae=c.paginationResetDefaultPage,paginationPerPage:H=c.paginationPerPage,paginationRowsPerPageOptions:ge=c.paginationRowsPerPageOptions,paginationIconLastPage:ve=c.paginationIconLastPage,paginationIconFirstPage:fe=c.paginationIconFirstPage,paginationIconNext:ie=c.paginationIconNext,paginationIconPrevious:Ie=c.paginationIconPrevious,paginationComponent:K=c.paginationComponent,paginationComponentOptions:he=c.paginationComponentOptions,responsive:ce=c.responsive,progressPending:L=c.progressPending,progressComponent:Ce=c.progressComponent,persistTableHead:q=c.persistTableHead,noDataComponent:de=c.noDataComponent,disabled:X=c.disabled,noTableHead:me=c.noTableHead,noHeader:ue=c.noHeader,fixedHeader:ee=c.fixedHeader,fixedHeaderScrollHeight:Se=c.fixedHeaderScrollHeight,pagination:Z=c.pagination,subHeader:W=c.subHeader,subHeaderAlign:Je=c.subHeaderAlign,subHeaderWrap:et=c.subHeaderWrap,subHeaderComponent:Rt=c.subHeaderComponent,noContextMenu:$t=c.noContextMenu,contextMessage:Et=c.contextMessage,contextActions:F=c.contextActions,contextComponent:wr=c.contextComponent,expandableRows:tt=c.expandableRows,onRowClicked:Xt=c.onRowClicked,onRowDoubleClicked:Zt=c.onRowDoubleClicked,onRowMouseEnter:Qt=c.onRowMouseEnter,onRowMouseLeave:Jt=c.onRowMouseLeave,sortIcon:yr=c.sortIcon,onSort:xr=c.onSort,sortFunction:en=c.sortFunction,sortServer:Ot=c.sortServer,expandableRowsComponent:vr=c.expandableRowsComponent,expandableRowsComponentProps:Cr=c.expandableRowsComponentProps,expandableRowDisabled:tn=c.expandableRowDisabled,expandableRowsHideExpander:nn=c.expandableRowsHideExpander,expandOnRowClicked:Sr=c.expandOnRowClicked,expandOnRowDoubleClicked:Rr=c.expandOnRowDoubleClicked,expandableRowExpanded:rn=c.expandableRowExpanded,expandableInheritConditionalStyles:$r=c.expandableInheritConditionalStyles,defaultSortFieldId:Er=c.defaultSortFieldId,defaultSortAsc:Or=c.defaultSortAsc,clearSelectedRows:on=c.clearSelectedRows,conditionalRowStyles:Pr=c.conditionalRowStyles,theme:an=c.theme,customStyles:sn=c.customStyles,direction:Ye=c.direction,onColumnOrderChange:kr=c.onColumnOrderChange,className:Dr}=e,{tableColumns:ln,draggingColumnId:cn,handleDragStart:dn,handleDragEnter:un,handleDragOver:pn,handleDragLeave:gn,handleDragEnd:fn,defaultSortDirection:Ir,defaultSortColumn:Ar}=ci(n,kr,Er,Or),[{rowsPerPage:be,currentPage:ne,selectedRows:Pt,allSelected:hn,selectedCount:mn,selectedColumn:se,sortDirection:Ae,toggleOnSelectedRowsChange:_r},Re]=i.useReducer(Jo,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Ar,toggleOnSelectedRowsChange:!1,sortDirection:Ir,currentPage:J,rowsPerPage:H,selectedRowsFlag:!1,contextMessage:c.contextMessage}),{persistSelectedOnSort:bn=!1,persistSelectedOnPageChange:nt=!1}=U,wn=!(!_||!nt&&!bn),jr=Z&&!L&&t.length>0,Hr=K||ni,Tr=i.useMemo(()=>((b={},I="default",Y="default")=>{const re=zn[I]?I:Y;return li({table:{style:{color:(w=zn[re]).text.primary,backgroundColor:w.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:w.text.primary,backgroundColor:w.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:w.background.default,minHeight:"52px"}},head:{style:{color:w.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:w.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:w.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:w.context.background,fontSize:"18px",fontWeight:400,color:w.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:w.text.primary,backgroundColor:w.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:w.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:w.selected.text,backgroundColor:w.selected.default,borderBottomColor:w.background.default}},highlightOnHoverStyle:{color:w.highlightOnHover.text,backgroundColor:w.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:w.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:w.background.default},stripedStyle:{color:w.striped.text,backgroundColor:w.striped.default}},expanderRow:{style:{color:w.text.primary,backgroundColor:w.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:w.button.default,fill:w.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:w.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:w.button.hover},"&:focus":{outline:"none",backgroundColor:w.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:w.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:w.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:w.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:w.button.default,fill:w.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:w.button.disabled,fill:w.button.disabled},"&:hover:not(:disabled)":{backgroundColor:w.button.hover},"&:focus":{outline:"none",backgroundColor:w.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:w.text.primary,backgroundColor:w.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:w.text.primary,backgroundColor:w.background.default}}},b);var w})(sn,an),[sn,an]),Fr=i.useMemo(()=>Object.assign({},Ye!=="auto"&&{dir:Ye}),[Ye]),B=i.useMemo(()=>{if(Ot)return t;if(se!=null&&se.sortFunction&&typeof se.sortFunction=="function"){const b=se.sortFunction,I=Ae===xe.ASC?b:(Y,re)=>-1*b(Y,re);return[...t].sort(I)}return function(b,I,Y,re){return I?re&&typeof re=="function"?re(b.slice(0),I,Y):b.slice(0).sort((w,kt)=>{const je=I(w),we=I(kt);if(Y==="asc"){if(je<we)return-1;if(je>we)return 1}if(Y==="desc"){if(je>we)return-1;if(je<we)return 1}return 0}):b}(t,se==null?void 0:se.selector,Ae,en)},[Ot,se,Ae,t,en]),Ve=i.useMemo(()=>{if(Z&&!_){const b=ne*be,I=b-be;return B.slice(I,b)}return B},[ne,Z,_,be,B]),Nr=i.useCallback(b=>{Re(b)},[]),Mr=i.useCallback(b=>{Re(b)},[]),Lr=i.useCallback(b=>{Re(b)},[]),zr=i.useCallback((b,I)=>Xt(b,I),[Xt]),Wr=i.useCallback((b,I)=>Zt(b,I),[Zt]),Br=i.useCallback((b,I)=>Qt(b,I),[Qt]),Gr=i.useCallback((b,I)=>Jt(b,I),[Jt]),_e=i.useCallback(b=>Re({type:"CHANGE_PAGE",page:b,paginationServer:_,visibleOnly:x,persistSelectedOnPageChange:nt}),[_,nt,x]),Yr=i.useCallback(b=>{const I=qe(G||Ve.length,b),Y=jt(ne,I);_||_e(Y),Re({type:"CHANGE_ROWS_PER_PAGE",page:Y,rowsPerPage:b})},[ne,_e,_,G,Ve.length]);if(Z&&!_&&B.length>0&&Ve.length===0){const b=qe(B.length,be),I=jt(ne,b);_e(I)}$e(()=>{v({allSelected:hn,selectedCount:mn,selectedRows:Pt.slice(0)})},[_r]),$e(()=>{xr(se,Ae,B.slice(0))},[se,Ae]),$e(()=>{p(ne,G||B.length)},[ne]),$e(()=>{S(be,ne)},[be]),$e(()=>{_e(J)},[J,ae]),$e(()=>{if(Z&&_&&G>0){const b=qe(G,be),I=jt(ne,b);ne!==I&&_e(I)}},[G]),i.useEffect(()=>{Re({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:on})},[g,on]),i.useEffect(()=>{if(!R)return;const b=B.filter(Y=>R(Y)),I=g?b.slice(0,1):b;Re({type:"SELECT_MULTIPLE_ROWS",keyField:a,selectedRows:I,totalRows:B.length,mergeSelections:wn})},[t,R]);const Vr=x?Ve:B,Ur=nt||g||h;return i.createElement(qo,{theme:Tr},!ue&&(!!r||!!o)&&i.createElement(Na,{title:r,actions:o,showMenu:!$t,selectedCount:mn,direction:Ye,contextActions:F,contextComponent:wr,contextMessage:Et}),W&&i.createElement(za,{align:Je,wrapContent:et},Rt),i.createElement(Ba,Object.assign({$responsive:ce,$fixedHeader:ee,$fixedHeaderScrollHeight:Se,className:Dr},Fr),i.createElement(Ga,null,L&&!q&&i.createElement(Fn,null,Ce),i.createElement(ta,{disabled:X,className:"rdt_Table",role:"table"},!me&&(!!q||B.length>0&&!L)&&i.createElement(ra,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:ee},i.createElement(oa,{className:"rdt_TableHeadRow",role:"row",$dense:f},u&&(Ur?i.createElement(Ge,{style:{flex:"0 0 48px"}}):i.createElement(Ia,{allSelected:hn,selectedRows:Pt,selectableRowsComponent:$,selectableRowsComponentProps:C,selectableRowDisabled:O,rowData:Vr,keyField:a,mergeSelections:wn,onSelectAllRows:Mr})),tt&&!nn&&i.createElement(Ya,null),ln.map(b=>i.createElement(ka,{key:b.id,column:b,selectedColumn:se,disabled:L||B.length===0,pagination:Z,paginationServer:_,persistSelectedOnSort:bn,selectableRowsVisibleOnly:x,sortDirection:Ae,sortIcon:yr,sortServer:Ot,onSort:Nr,onDragStart:dn,onDragOver:pn,onDragEnd:fn,onDragEnter:un,onDragLeave:gn,draggingColumnId:cn})))),!B.length&&!L&&i.createElement(Va,null,de),L&&q&&i.createElement(Fn,null,Ce),!L&&B.length>0&&i.createElement(Wa,{className:"rdt_TableBody",role:"rowgroup"},Ve.map((b,I)=>{const Y=ze(b,a),re=function(we=""){return typeof we!="number"&&(!we||we.length===0)}(Y)?I:Y,w=pt(b,Pt,a),kt=!!(tt&&rn&&rn(b)),je=!!(tt&&tn&&tn(b));return i.createElement(Ca,{id:re,key:re,keyField:a,"data-row-id":re,columns:ln,row:b,rowCount:B.length,rowIndex:I,selectableRows:u,expandableRows:tt,expandableIcon:D,highlightOnHover:l,pointerOnHover:d,dense:f,expandOnRowClicked:Sr,expandOnRowDoubleClicked:Rr,expandableRowsComponent:vr,expandableRowsComponentProps:Cr,expandableRowsHideExpander:nn,defaultExpanderDisabled:je,defaultExpanded:kt,expandableInheritConditionalStyles:$r,conditionalRowStyles:Pr,selected:w,selectableRowsHighlight:y,selectableRowsComponent:$,selectableRowsComponentProps:C,selectableRowDisabled:O,selectableRowsSingle:g,striped:s,onRowExpandToggled:m,onRowClicked:zr,onRowDoubleClicked:Wr,onRowMouseEnter:Br,onRowMouseLeave:Gr,onSelectedRow:Lr,draggingColumnId:cn,onDragStart:dn,onDragOver:pn,onDragEnd:fn,onDragEnter:un,onDragLeave:gn})}))))),jr&&i.createElement("div",null,i.createElement(Hr,{onChangePage:_e,onChangeRowsPerPage:Yr,rowCount:G||B.length,currentPage:ne,rowsPerPage:be,direction:Ye,paginationRowsPerPageOptions:ge,paginationIconLastPage:ve,paginationIconFirstPage:fe,paginationIconNext:ie,paginationIconPrevious:Ie,paginationComponentOptions:he})))});export{gi as X};
