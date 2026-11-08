// Edite as galerias abaixo: um projeto pode ter uma ou várias imagens.
const projects=[
{title:"Residencial contemporâneo",images:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90"]},
{title:"Essência natural",images:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90"]},
{title:"Refúgio particular",images:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=90"]},
{title:"Linhas e volumes",images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90"]}
];
const nav=document.querySelector("nav"),toggle=document.querySelector(".toggle");
toggle.onclick=()=>nav.classList.toggle("open");nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
document.querySelector("#year").textContent=new Date().getFullYear();
const modal=document.querySelector(".modal"),image=document.querySelector(".viewer img"),caption=document.querySelector(".caption"),counter=document.querySelector(".counter");let p=0,n=0;
function render(){image.src=projects[p].images[n];caption.textContent=projects[p].title;counter.textContent=`${n+1} / ${projects[p].images.length}`;}
function open(i){p=i;n=0;render();modal.classList.add("open");document.body.style.overflow="hidden";}
function close(){modal.classList.remove("open");document.body.style.overflow="";}
function move(d){n=(n+d+projects[p].images.length)%projects[p].images.length;render();}
document.querySelectorAll(".grid button").forEach(b=>b.onclick=()=>open(+b.dataset.project));
document.querySelector(".close").onclick=close;document.querySelector(".shade").onclick=close;document.querySelector(".prev").onclick=()=>move(-1);document.querySelector(".next").onclick=()=>move(1);
document.addEventListener("keydown",e=>{if(!modal.classList.contains("open"))return;if(e.key==="Escape")close();if(e.key==="ArrowRight")move(1);if(e.key==="ArrowLeft")move(-1);});
let start=0;image.addEventListener("touchstart",e=>start=e.changedTouches[0].screenX,{passive:true});image.addEventListener("touchend",e=>{let dx=start-e.changedTouches[0].screenX;if(Math.abs(dx)>45)move(dx>0?1:-1);},{passive:true});
// Insira DDI + DDD + telefone, somente números. Exemplo fictício: 5511999999999.
const phone="";const message=encodeURIComponent("Olá, Larissa! Gostaria de conversar sobre um projeto.");
document.querySelectorAll(".float,.wa,.bubble a").forEach(a=>a.onclick=e=>{if(!phone){e.preventDefault();alert("Adicione o número de WhatsApp no arquivo js/script.js.");}else{a.href=`https://wa.me/${phone}?text=${message}`;a.target="_blank";}});
document.querySelector(".bubble button").onclick=()=>document.querySelector(".bubble").classList.add("hide");