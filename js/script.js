// Configuración de logos (fácil de actualizar)
const clientLogosCount = 27; // Actualizar este número cuando añadas/quites logos
const brandLogosCount = 16;  // Actualizar este número cuando añadas/quites logos

// Cargar logos dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    // Cargar logos de clientes
    loadLogos('client-logos-container', 'logos-clientes', clientLogosCount);
    
    // Cargar logos de marcas
    loadLogos('brand-logos-container', 'logos-marcas', brandLogosCount);
    
    // Inicializar carruseles
    setTimeout(() => {
        new Glide('.clientes-glide', {
            type: 'carousel',
            perView: 5,
            gap: 20,
            autoplay: 3000,
            breakpoints: {
                1024: { perView: 4 },
                768: { perView: 3 },
                480: { perView: 2 }
            }
        }).mount();
        
        new Glide('.marcas-glide', {
            type: 'carousel',
            perView: 5,
            gap: 20,
            autoplay: 3500,
            breakpoints: {
                1024: { perView: 4 },
                768: { perView: 3 },
                480: { perView: 2 }
            }
        }).mount();
    }, 100);
    
    // Configurar formulario de WhatsApp - CORREGIDO PARA FUNCIONAR EN TODOS LOS DISPOSITIVOS
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Formato mejorado del mensaje
            const whatsappMessage = `Hola TEPUY, me interesa solicitar información sobre sus servicios.%0A%0A*Nombre:* ${name}%0A*Email:* ${email}%0A*Servicio de interés:* ${service}%0A*Mensaje:* ${message}`;
            
            // Detectar si es dispositivo móvil o escritorio
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            
            // Crear URL según el dispositivo
            let whatsappUrl;
            if (isMobile) {
                whatsappUrl = `https://wa.me/584125359915?text=${whatsappMessage}`;
            } else {
                whatsappUrl = `https://web.whatsapp.com/send?phone=584125359915&text=${whatsappMessage}`;
            }
            
            // Abrir en una nueva ventana
            window.open(whatsappUrl, '_blank');
            
            // Opcional: Resetear el formulario después del envío
            whatsappForm.reset();
        });
    }
    
    // Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Botón ir arriba
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Función para cargar logos desde una carpeta
function loadLogos(containerId, folderName, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    for (let i = 1; i <= count; i++) {
        const slide = document.createElement('div');
        slide.className = 'glide__slide';
        
        const img = document.createElement('img');
        // Intenta cargar diferentes formatos
        img.src = `images/${folderName}/${i}.png`;
        img.alt = `${folderName} ${i}`;
        img.className = 'logo-image';
        
        // Manejo de error si la imagen no existe
        img.onerror = function() {
            console.warn(`Imagen no encontrada: images/${folderName}/${i}.png`);
            this.style.display = 'none';
        };
        
        slide.appendChild(img);
        container.appendChild(slide);
    }
}

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Cerrar menú móvil si está abierto
            const nav = document.querySelector('.nav');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});