// Cambiar tema (modo oscuro/claro)
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      themeToggle.classList.remove('fa-moon');
      themeToggle.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.classList.remove('fa-sun');
      themeToggle.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Inicialización cuando el DOM está cargado
  document.addEventListener('DOMContentLoaded', () => {
    // Verificar tema guardado
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.classList.remove('fa-moon');
      themeToggle.classList.add('fa-sun');
    }
    
    // Configuración del menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    
    // Abrir menú móvil
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
    
    // Cerrar menú móvil
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
    
    // Animación de aparición al hacer scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      observer.observe(section);
    });
  });
  
  // Asignar el evento al botón de tema
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);