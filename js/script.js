// Carrossel de Projetos
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.projects-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const projects = document.querySelectorAll('.project-card');
    let currentIndex = 0;
    const projectWidth = projects[0].offsetWidth + 32; // Largura do card + gap

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Atualiza o carrossel quando a janela for redimensionada
    window.addEventListener('resize', () => {
        projectWidth = projects[0].offsetWidth + 32;
        updateCarousel();
    });
}); 