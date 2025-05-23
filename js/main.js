// Função para copiar email
function copyEmail() {
    const email = 'aspdeassis@gmail.com';
    
    // Cria um elemento temporário
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    
    // Seleciona e copia
    tempInput.select();
    document.execCommand('copy');
    
    // Remove o elemento temporário
    document.body.removeChild(tempInput);
    
    // Feedback visual
    const emailLink = document.querySelector('.email-copy');
    emailLink.classList.add('copied');
    
    // Remove a classe após 2 segundos
    setTimeout(() => {
        emailLink.classList.remove('copied');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll para as seções com offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação ao scroll
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Estilo inicial das seções
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-in-out';
    });

    // Verificar scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verificar posição inicial
});
