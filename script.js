// ==========================
// GENERAR MENÚ DE MARCAS
// ==========================

function generarMenuMarcas(){

    const menu =
    document.getElementById("menuMarcas");

    // Obtener marcas únicas
    const marcas =
    [...new Set(productos.map(p => p.marca))];

    menu.innerHTML = marcas.map(marca => `

        <button
            class="btn-marca"
            onclick="irAMarca('${marca}')">

            ${marca}

        </button>

    `).join("");

}


// ==========================
// GENERAR CATÁLOGOS POR MARCA
// ==========================

function generarCatalogos(){

    const catalogos =
    document.getElementById("catalogos");

    // Obtener marcas únicas
    const marcas =
    [...new Set(productos.map(p => p.marca))];

    // Generar secciones
    catalogos.innerHTML = marcas.map(marca => {

        // Filtrar productos por marca
        const productosMarca =
        productos.filter(p => p.marca === marca);

        return `

        <section
            class="marca-section"
            id="marca-${marca}">

            <h2 class="marca-titulo">
                👟 ${marca}
            </h2>

            <div class="productos-grid">

                ${productosMarca.map(producto => `

                    <div class="producto-card"
                         onclick="irAProducto(${producto.id})">

                        <div class="producto-imagen">

                            <img
                                src="${producto.imagen}"
                                alt="${producto.nombre}">

                        </div>

                        <div class="producto-content">

                            <h3 class="producto-nombre">
                                ${producto.nombre}
                            </h3>

                            <div class="producto-precio">
                                ${producto.precio}
                            </div>

                            <p class="producto-descripcion">
                                ${producto.descripcion}
                            </p>

                            <button
                                class="btn-comprar"

                                onclick="
                                event.stopPropagation();
                                abrirWhatsApp('${producto.nombre}')
                                ">

                                🛒 Comprar

                            </button>

                        </div>

                    </div>

                `).join("")}

            </div>

        </section>

        `;

    }).join("");

}

// ==========================
// IR A PRODUCTO
// ==========================

function irAProducto(id){

    window.location.href =
    `producto.html?id=${id}`;

}

// ==========================
// WHATSAPP
// ==========================

function abrirWhatsApp(nombreProducto){

    const mensaje =
    `Hola kasmisport 👋 Estoy interesado en: ${nombreProducto}`;

    const url =
    `https://wa.me/573185418060?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');

}

// ==========================
// IR A MARCA
// ==========================

function irAMarca(marca){

    const seccion =
    document.getElementById(`marca-${marca}`);

    if(seccion){

        seccion.scrollIntoView({

            behavior: "smooth"

        });

    }

}
// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior: 'smooth',
                block: 'start'

            });

        }

    });

});

// ==========================
// MENÚ HAMBURGUESA
// ==========================

const hamburger =
document.querySelector('.hamburger');

const navMenu =
document.querySelector('.nav-menu');

if(hamburger){

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('active');

        navMenu.classList.toggle('active');

    });

}

// ==========================
// CERRAR MENÚ AL HACER CLICK
// ==========================

document.querySelectorAll('.nav-link').forEach(n =>

    n.addEventListener('click', () => {

        hamburger.classList.remove('active');

        navMenu.classList.remove('active');

    })

);

// ==========================
// ANIMACIONES
// ==========================

const observerOptions = {

    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'

};

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';

            entry.target.style.transform =
            'translateY(0)';

        }

    });

}, observerOptions);

// ==========================
// CARGAR TODO
// ==========================

document.addEventListener('DOMContentLoaded', function(){

    generarMenuMarcas();
    // Generar catálogo
    generarCatalogos();

    // Animaciones
    document.querySelectorAll(
        '.producto-card, .sobre-content, .contacto-content'
    ).forEach(el => {

        el.style.opacity = '0';

        el.style.transform =
        'translateY(30px)';

        el.style.transition =
        'all 0.6s ease';

        observer.observe(el);

    });

    // Header dinámico
    window.addEventListener('scroll', () => {

        const header =
        document.querySelector('.header');

        if(window.scrollY > 100){

            header.style.background =
            'rgba(255,255,255,0.98)';

        } else {

            header.style.background =
            'rgba(255,255,255,0.95)';

        }

    });

});