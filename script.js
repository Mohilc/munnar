document.addEventListener('DOMContentLoaded', () => {
    // Responsive navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Form submission (you would typically send this data to a server)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});
const fadeOut = () => {
    const loaderWrapper = document.querySelector('.loader');
    loaderWrapper.classList.add('fade');
};

window.addEventListener('load', fadeOut);
 // Get the button and the map container
 var button = document.getElementById("navigateBtn");
 var mapContainer = document.getElementById("mapContainer");

 // Add a click event listener to the button
 button.onclick = function() {
     if (mapContainer.style.display === "none") {
         mapContainer.style.display = "block";
         button.querySelector('span:nth-child(2)').innerText = "Hide Map";
     } else {
         mapContainer.style.display = "none";
         button.querySelector('span:nth-child(2)').innerText = "Navigate";
     }
 }
 // Back to top button
 $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});


// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});
