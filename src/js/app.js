
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scrollNav();
    countup();
    burgerNav();
}

function burgerNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu-visible");
        if(navMenu.classList.contains('nav-menu-visible')){
            window.addEventListener("scroll", noscroll);
        }
        else{
            window.removeEventListener('scroll', noscroll);
        }
    });

    const navMenuItem = document.querySelectorAll(".nav-menu-item");
    navMenuItem.forEach(function (navMenuItem) {
        navMenuItem.addEventListener("click", () => {
            if(navMenuItem.classList.contains('idioma')){
            }
            else{
                navMenu.classList.toggle("nav-menu-visible");
                window.removeEventListener('scroll', noscroll);
            }
        });
    });

}

function noscroll() {
    window.scrollTo(0, 0);
}

function countup() {
    const porqueStreaming = document.querySelector('.cercania-info');
    const counters = document.querySelectorAll('.counter');
    const speed = 39;
    var stopcounter = false;

    window.addEventListener('scroll', function () {
        if ((porqueStreaming.getBoundingClientRect().bottom < 0) && (stopcounter == false)) {
            stopcounter = Boolean(true);


            counters.forEach(function (counter) {
                counter.textContent = '0';
                const updateCounter = () => {
                    const target = +counter.getAttribute('data-target')
                    const count = +counter.textContent;

                    const inc = target / speed;

                    if (count < target) {
                        counter.textContent = Math.ceil(count + inc);
                        setTimeout(updateCounter, 10);
                    } else {
                        count.textContent = target;
                        counter.textContent = target + '%';
                        console.log(typeof stopcounter, stopcounter);
                    }

                };
                updateCounter();
            });
            console.log('entramos al if');
        }
        if ((porqueStreaming.getBoundingClientRect().bottom > 0) && (stopcounter == true)) {
            stopcounter = false
            console.log(stopcounter);
        }
    });
}

function navegacionFija() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.video');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function () {
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}


function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal .nav-menu-link');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}


function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
    `;

    // Crea el Overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    // Boton para cerrar el Modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);

    // Añadirlo al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}
