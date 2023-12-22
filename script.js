const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function forceReflow(element) {
        void element.offsetWidth;
    }
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            link.classList.remove('fade-in'); 
            forceReflow(link); 
            link.style.setProperty('--index', index);
            link.classList.add('fade-in'); 
        });
        
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.stopPropagation();
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            link.classList.remove('fade-in'); 
        });
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Add background-color to navbar when scrolling
window.onscroll = function() {navOnScroll()};
function navOnScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.backgroundColor = "rgba(12, 9, 8, 0.654)";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
}
