// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 500);
});

// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

mobileNavToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        mobileNavToggle.classList.remove('active');
    });
});

// Change header background on scroll
const header = document.querySelector('.header');
const scrollThreshold = 100;

window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would normally send data to your server
        console.log('Form submitted:', formValues);
        
        // Show success message
        this.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 5rem; color: var(--blue-green); margin-bottom: 2rem;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="font-size: 2.4rem; margin-bottom: 1.5rem;">Message Sent Successfully!</h3>
                <p style="font-size: 1.6rem; margin-bottom: 3rem;">Thank you for reaching out. We'll get back to you shortly.</p>
                <button type="button" class="btn btn-primary" onclick="location.reload()">Send Another Message</button>
            </div>
        `;
    });
}

// AOS (Animate On Scroll) initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS functionality
    const aosElements = document.querySelectorAll('[data-aos]');
    
    const checkIfInView = () => {
        aosElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition.top < windowHeight * 0.85) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Run on load
    checkIfInView();
    
    // Run on scroll
    window.addEventListener('scroll', checkIfInView);         77744272
});

// Mobile Navigation Toggle Animation
mobileNavToggle.addEventListener('click', function() {
    const bars = this.querySelectorAll('.bar');
    
    if (this.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Here you would normally send data to your server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        this.innerHTML = `
            <p style="color: var(--blue-green); font-weight: 600;">
                <i class="fas fa-check-circle"></i> Successfully subscribed!
            </p>
        `;
    });
}