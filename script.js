// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Progress Indicator
function updateScrollIndicator() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    let indicator = document.querySelector('.scroll-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);
    }
    indicator.style.width = progress + '%';
}

window.addEventListener('scroll', updateScrollIndicator);
window.addEventListener('load', updateScrollIndicator);

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert(`Thank you, ${formData.name}! Your message has been received. We'll get back to you soon at ${formData.email}.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.innovation-card, .benefit-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active Navigation Link Highlighting
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
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
}

window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);

// Mobile Menu Toggle (for responsive design)
function createMobileMenu() {
    const nav = document.querySelector('.navbar .container');
    const menu = document.querySelector('.nav-menu');
    
    // Create hamburger menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    menuButton.style.background = 'none';
    menuButton.style.border = 'none';
    menuButton.style.fontSize = '1.5rem';
    menuButton.style.cursor = 'pointer';
    menuButton.style.color = 'var(--primary-color)';
    
    nav.insertBefore(menuButton, menu);
    
    menuButton.addEventListener('click', () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            menuButton.innerHTML = '☰';
        } else {
            menu.style.display = 'flex';
            menuButton.innerHTML = '✕';
        }
    });
    
    // Show/hide mobile menu based on screen size
    function handleResize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            menu.style.display = 'none';
        } else {
            menuButton.style.display = 'none';
            menu.style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
}

document.addEventListener('DOMContentLoaded', createMobileMenu);

// Add subtle parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Create floating algae particles
function createAlgaeParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'algae-particle';
        
        // Random size between 3px and 15px
        const size = Math.random() * 12 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random horizontal position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 25s
        const duration = Math.random() * 15 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        hero.appendChild(particle);
    }
}

// Create organic shapes
function createOrganicShapes() {
    const sections = document.querySelectorAll('.innovation, .about');
    
    sections.forEach((section, index) => {
        const shapeCount = 2;
        
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = 'organic-shape';
            
            // Random size between 200px and 400px
            const size = Math.random() * 200 + 200;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            
            // Random position
            if (i === 0) {
                shape.style.top = `${Math.random() * 30}%`;
                shape.style.left = `${Math.random() * 20}%`;
            } else {
                shape.style.bottom = `${Math.random() * 30}%`;
                shape.style.right = `${Math.random() * 20}%`;
            }
            
            // Random animation delay
            shape.style.animationDelay = `${Math.random() * 5}s`;
            
            section.style.position = 'relative';
            section.style.overflow = 'hidden';
            section.appendChild(shape);
        }
    });
}

// Initialize visual effects
document.addEventListener('DOMContentLoaded', () => {
    createAlgaeParticles();
    createOrganicShapes();
});

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const numericValue = parseInt(target);
        
        if (!isNaN(numericValue)) {
            let current = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (isPercentage ? '%' : '');
                }
            }, 30);
        }
    });
}

// Trigger stats animation when section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

console.log('DermaNova website loaded successfully! 🌿');
