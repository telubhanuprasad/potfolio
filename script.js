// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    moonIcon.classList.remove('active');
    sunIcon.classList.add('active');
} else {
    document.body.classList.remove('dark-mode');
    moonIcon.classList.add('active');
    sunIcon.classList.remove('active');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        moonIcon.classList.remove('active');
        sunIcon.classList.add('active');
    } else {
        localStorage.setItem('theme', 'light');
        moonIcon.classList.add('active');
        sunIcon.classList.remove('active');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Typing Animation
const typed = new Typed('.typing-text', {
    strings: ['Java Developer', 'Python Programmer', 'Ethical Hacker', '3D Artist'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    let isValid = true;
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Animation on Scroll
const animateElements = document.querySelectorAll('.animate__animated');

const animateOnScroll = () => {
    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            const animationClass = element.classList[1];
            element.classList.add(animationClass);
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
