// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offsetTop = target.offsetTop - navbarHeight - 20;
            window.scrollTo({
                top: Math.max(0, offsetTop),
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#212529';
        navbar.style.backdropFilter = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
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

// Animate progress bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            projectObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    projectObserver.observe(card);
});

// Add animation to timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Typing effect for hero section (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Mobile menu close on link click
const navLinksMobile = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinksMobile.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth < 992) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Add parallax effect to hero section (optional)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && scrolled < heroSection.offsetHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize tooltips if Bootstrap is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if Bootstrap tooltips are available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});

// Console message
console.log('%cWelcome to Ashesh Parmar\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cFull Stack Software Engineer', 'color: #764ba2; font-size: 14px;');

