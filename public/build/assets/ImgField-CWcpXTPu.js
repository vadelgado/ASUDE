import{r,j as e}from"./app-7rU0G_I8.js";import{I as g}from"./InputLabel-DQMKk8NV.js";import"./TextInput-CKFLz-7k.js";import{I as b}from"./InputError-oxPWCKOk.js";const I=r.forwardRef(({htmlFor:m,label:i,id:u,name:c,onChange:d,errorMessage:f,imageUrl:t},p)=>{const[a,o]=r.useState(t||null);r.useEffect(()=>{o(t||null)},[t]);const x=l=>{const n=l.target.files[0];if(n){const s=new FileReader;s.onloadend=()=>{o(s.result)},s.readAsDataURL(n)}d(l)};return e.jsxs("div",{children:[e.jsx(g,{className:"block my-2 mb-2 text-sm font-medium text-gray-900",htmlFor:m,value:i}),e.jsx("input",{className:"block w-full text-sm text-blue-900 border border-blue-300 rounded-lg cursor-pointer bg-blue-50 focus:outline-none",id:u,type:"file",name:c,ref:p,accept:"image/*",onChange:x}),a&&e.jsx("img",{src:a,alt:"Preview",className:"w-20 h-auto mt-2"}),e.jsx(b,{message:f,className:"mt-2"})]})}),E=I;export{E as I};