function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav(),countup(),burgerNav()}function burgerNav(){const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav-menu");e.addEventListener("click",()=>{t.classList.toggle("nav-menu-visible"),t.classList.contains("nav-menu-visible")?window.addEventListener("scroll",noscroll):window.removeEventListener("scroll",noscroll)});document.querySelectorAll(".nav-menu-item").forEach((function(e){e.addEventListener("click",()=>{t.classList.toggle("nav-menu-visible"),window.removeEventListener("scroll",noscroll)})}))}function noscroll(){window.scrollTo(0,0)}function countup(){const e=document.querySelector(".cercania-info"),t=document.querySelectorAll(".counter");var n=!1;window.addEventListener("scroll",(function(){e.getBoundingClientRect().bottom<0&&0==n&&(n=Boolean(!0),t.forEach((function(e){e.textContent="0";const t=()=>{const o=+e.getAttribute("data-target"),c=+e.textContent,i=o/39;c<o?(e.textContent=Math.ceil(c+i),setTimeout(t,10)):(c.textContent=o,e.textContent=o+"%",console.log(typeof n,n))};t()})),console.log("entramos al if")),e.getBoundingClientRect().bottom>0&&1==n&&(n=!1,console.log(n))}))}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".video"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n            <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galeria">\n        `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="image/avif">\n        <source srcset="build/img/grande/${e}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">\n    `;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()};const o=document.createElement("P");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()},n.appendChild(o);const c=document.querySelector("body");c.appendChild(n),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
