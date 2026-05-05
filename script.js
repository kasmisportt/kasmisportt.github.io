// Datos de productos
const productos = [
    {
        id: 1,
        nombre: "Nike Air Max 90",
        precio: "$450.000",
        emoji: "👟",
        imagen: "images.jpg",
        descripcion: "Clásico atemporal con amortiguación Air máxima."
    },
    {
        id: 2,
        nombre: "Adidas Ultraboost",
        precio: "$520.000",
        emoji: "🔥",
        descripcion: "Tecnología Boost para máxima comodidad. Ideal para running."
    },
    {
        id: 3,
        nombre: "Puma RS-X",
        precio: "$380.000",
        emoji: "⚡",
        descripcion: "Diseño futurista con excelente soporte. Estilo urbano."
    },
    {
        id: 4,
        nombre: "New Balance 574",
        precio: "$320.000",
        emoji: "🏃‍♂️",
        descripcion: "Ícono retro con gran durabilidad. Comodidad todo el día."
    },
    {
        id: 5,
        nombre: "Under Armour HOVR",
        precio: "$480.000",
        emoji: "💨",
        descripcion: "Tecnología HOVR para retorno de energía. Perfecto para entrenamientos."
    },
    {
        id: 6,
        nombre: "Vans Old Skool",
        precio: "$280.000",
        emoji: "🛹",
        descripcion: "Clásico skater con suela waffle. Estilo auténtico."
    }
];

// Función para generar productos
function generarProductos() {
    const grid = document.getElementById('productosGrid');
    grid.innerHTML = productos.map(producto => `
        <div class="producto-card" 
             onclick="irAProducto(${producto.id})">
             
<div class="producto-imagen">
    <img src="${producto.imagen}" alt="${producto.nombre}">
</div>

            <div class="producto-content">
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <div class="producto-precio">${producto.precio}</div>
                <p class="producto-descripcion">${producto.descripcion}</p>
                
                <button class="btn-comprar" 
                        onclick="event.stopPropagation(); abrirWhatsApp('${producto.nombre}')">
                    🛒 Comprar con asesor
                </button>
            </div>
        </div>
    `).join('');
}

function irAProducto(id) {
    window.location.href = `producto${id}.html`;
}

// Función para abrir WhatsApp
function abrirWhatsApp(nombreProducto) {
    const mensaje = `Hola, estoy interesado en este producto de kasmisport: ${nombreProducto}`;
    const url = `https://wa.me/573185418060?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menú hamburguesa móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    generarProductos();
    
    // Animar elementos al cargar
    document.querySelectorAll('.producto-card, .sobre-content, .contacto-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Scroll suave para header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255,255,255,0.98)';
        } else {
            header.style.background = 'rgba(255,255,255,0.95)';
        }
    });
});