import{j as e,r as o}from"./index-D9iGN99O.js";import{h,i as l,f as d}from"./index-B-wIZTjK.js";const a=({name:c,place:t,setDetails:s,head:n})=>e.jsxs("div",{className:"input-from mb-4 animation",children:[e.jsx("h1",{className:"fw-bold text-center my-3 mb-5",children:n}),e.jsx("div",{children:e.jsx("input",{type:"text",className:"w-100",name:c,placeholder:t})})]}),j=()=>{var m;const[c,t]=o.useState(""),[s,n]=o.useState(0);o.useEffect(()=>{c!=null&&c.type&&n(1)},[c==null?void 0:c.type]);const i=[{com:e.jsx(x,{setDetails:t,detials:c})},{com:e.jsx(a,{head:"What is your name?",name:"name",place:"Name",setDetails:c})},{com:e.jsx(a,{head:"What is your email?",name:"email",place:"Email",setDetails:c})},{com:e.jsx(a,{head:"What is your phone?",name:"phone",place:"Phone",setDetails:c})},{com:e.jsx(a,{head:"What is your vehicle no.?",name:"vehicleNo",place:"Vehicle No.",setDetails:c})}];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container animation",children:[(m=i[s])==null?void 0:m.com,e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"d-flex gap-4 justify-content-center",children:[s>0&&e.jsx("button",{onClick:()=>n(s-1),className:"btn-green py-3 px-5 rounded-5",children:"Previous"}),(c==null?void 0:c.type)&&e.jsx("button",{onClick:()=>n(s+1),className:"btn-green py-3 px-5 rounded-5",children:s===i.length-1?"Submut":"Next"})]})})]})})},r=[{name:"Two Wheeler",icon:e.jsx(h,{size:70})},{name:"Four wheeler",icon:e.jsx(l,{size:70})},{name:"Others",icon:e.jsx(d,{size:70})}],x=({setDetails:c,detials:t})=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"fw-bold text-center my-3 mb-5","data-aos":"fade-up","data-aos-duration":"400",children:"Choose your vehicle?"}),e.jsx("div",{className:"row row-cols-lg-3 row-cols-md-2 col-lg-9 mx-auto",children:r==null?void 0:r.map((s,n)=>e.jsx("div",{className:"p-4","data-aos":"fade-up","data-aos-duration":"400",children:e.jsx("div",{onClick:()=>c({...t,type:s==null?void 0:s.name}),className:`vehicle-card ${(t==null?void 0:t.type)===(s==null?void 0:s.name)&&"card-active"} cursor-pointer text-center bg-c-dark d-flex flex-column gap-2 rounded-5`,children:e.jsxs("div",{className:"p-4",children:[e.jsx("div",{children:s==null?void 0:s.icon}),e.jsx("h4",{className:"text-uppercase",children:s==null?void 0:s.name})]})})},n))})]});export{j as V};