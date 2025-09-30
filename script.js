// SCRIPT FOR DRAG-TO-SCROLL FUNCTIONALITY ON THE PLAYER GALLERY
const slider = document.querySelector('.player-gallery');
if (slider) {
    let isDown = false, startX, scrollLeft;
    slider.addEventListener('mousedown', (e) => { 
        isDown = true; 
        slider.classList.add('active'); 
        startX = e.pageX - slider.offsetLeft; 
        scrollLeft = slider.scrollLeft; 
    });
    slider.addEventListener('mouseleave', () => { 
        isDown = false; 
        slider.classList.remove('active'); 
    });
    slider.addEventListener('mouseup', () => { 
        isDown = false; 
        slider.classList.remove('active'); 
    });
    slider.addEventListener('mousemove', (e) => { 
        if(!isDown) return; 
        e.preventDefault(); 
        const x = e.pageX - slider.offsetLeft; 
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk; 
    });
}

// SCRIPT FOR MOBILE NAVIGATION TOGGLE
const menuButton = document.getElementById('mobile-menu');
const navMenu = document.getElementById('main-nav');
if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-nav-open');
    });
}

// SCRIPT FOR SMOOTH SCROLLING NAVIGATION
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (navMenu.classList.contains('mobile-nav-open')) {
            navMenu.classList.remove('mobile-nav-open');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
