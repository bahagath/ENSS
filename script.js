document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-header nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }

    // Slideshow for gallery page
    if (document.querySelector('.slideshow-container')) {
        let slideIndex = 1;
        let slideInterval;
        const slideshowContainer = document.querySelector('.slideshow-container');

        function startSlideshow() {
            slideInterval = setInterval(function() {
                plusSlides(1);
            }, 2000); // Change image every 2 seconds
        }

        showSlides(slideIndex);

        // Next/previous controls
        window.plusSlides = function(n) {
          showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("gallery-slide");
            if (slides.length === 0) return;
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }
        
        startSlideshow();

        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slideshowContainer.addEventListener('mouseleave', () => {
            startSlideshow();
        });
    }
}); 