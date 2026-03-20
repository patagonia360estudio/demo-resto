// Patagonia 360 - Enhanced JavaScript for Modern Exploration

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initScrollAnimations();
    initInteractiveElements();
    initSmoothScrolling();
    initLazyLoading();
    initPatagoniaEffects();
    initMobileInteractions();
});

/**
 * Initialize scroll-based animations with Patagonia-style effects
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered animation for cards
                if (entry.target.classList.contains('step-card') || entry.target.classList.contains('feature-card')) {
                    const cards = entry.target.parentElement.children;
                    Array.from(cards).forEach((card, index) => {
                        setTimeout(() => {
                            card.style.animationDelay = `${index * 0.2}s`;
                            card.classList.add('fade-in-up');
                        }, index * 200);
                    });
                } else {
                    entry.target.classList.add('fade-in-up');
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.step-card, .feature-card, .section-title, .section-subtitle, .patagonia-logo, .viewer-header');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Initialize interactive elements with Patagonia-style effects
 */
function initInteractiveElements() {
    // Enhanced hover effects for control items with Patagonia colors
    const controlItems = document.querySelectorAll('.control-item');
    controlItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(15, 118, 110, 0.3)';
            this.style.borderColor = '#0f766e';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.borderColor = '#334155';
        });
    });

    // Enhanced card interactions with Patagonia theme
    const cards = document.querySelectorAll('.step-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Add Patagonia-style pulse effect
            this.style.animation = 'patagonia-pulse 0.8s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 800);
        });

        // Add glow effect on hover
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 60px rgba(15, 118, 110, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Enhanced scroll effect for hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.2;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
            
            // Parallax effect for particles
            const particles = document.querySelector('.hero-particles');
            if (particles) {
                particles.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    });

    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary, .cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Initialize smooth scrolling with Patagonia-style effects
 */
function initSmoothScrolling() {
    // Handle smooth scrolling for hero scroll indicator
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const mainViewer = document.querySelector('.main-viewer');
            if (mainViewer) {
                mainViewer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Enhanced scroll to top button with Patagonia styling
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #0f766e, #0d9488);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        box-shadow: 0 15px 40px rgba(15, 118, 110, 0.3);
        backdrop-filter: blur(10px);
    `;

    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize lazy loading with Patagonia-style loading states
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('iframe[data-src]');
        
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    if (element.dataset.src) {
                        // Add loading animation with Patagonia colors
                        element.style.opacity = '0.6';
                        element.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        
                        element.src = element.dataset.src;
                        element.removeAttribute('data-src');
                        
                        element.addEventListener('load', function() {
                            this.style.opacity = '1';
                        });
                    }
                    lazyObserver.unobserve(element);
                }
            });
        });

        lazyElements.forEach(element => lazyObserver.observe(element));
    }
}

/**
 * Initialize Patagonia-specific effects
 */
function initPatagoniaEffects() {
    // Mountain-inspired particle effect
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    
    hero.appendChild(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create mountain-like particles
    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.4 + 0.1,
            color: Math.random() > 0.5 ? '#0f766e' : '#c2a36b'
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
        });
        
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }

    animate();

    // Add mountain silhouette effect
    const mountainSilhouette = document.createElement('div');
    mountainSilhouette.className = 'mountain-silhouette';
    mountainSilhouette.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 200px;
        background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent);
        clip-path: polygon(0 100%, 20% 60%, 40% 80%, 60% 40%, 80% 70%, 100% 50%, 100% 100%);
        pointer-events: none;
    `;
    hero.appendChild(mountainSilhouette);
}

/**
 * Add Patagonia-specific CSS animations
 */
function addPatagoniaStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes patagonia-pulse {
            0% { 
                transform: scale(1); 
                box-shadow: 0 0 0 0 rgba(15, 118, 110, 0.4);
            }
            50% { 
                transform: scale(1.02); 
                box-shadow: 0 0 20px 10px rgba(15, 118, 110, 0.4);
            }
            100% { 
                transform: scale(1); 
                box-shadow: 0 0 0 0 rgba(15, 118, 110, 0);
            }
        }
        
        @keyframes mountain-sway {
            0% { transform: translateX(0px); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(0px); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-40px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .slide-in-left {
            animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .mountain-sway {
            animation: mountain-sway 4s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
}

// Initialize Patagonia styles
addPatagoniaStyles();

/**
 * Handle iframe loading with Patagonia-style error handling
 */
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('.sketchfab-container iframe');
    if (iframe) {
        iframe.addEventListener('load', function() {
            console.log('3D viewer loaded successfully');
            // Add loading animation completion with Patagonia style
            setTimeout(() => {
                iframe.style.opacity = '1';
                iframe.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 800);
        });
        
        iframe.addEventListener('error', function() {
            console.error('Failed to load 3D viewer');
            // Show Patagonia-style fallback message
            const container = iframe.parentElement;
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.innerHTML = `
                <div style="text-align: center; padding: 80px; color: var(--text-muted); background: rgba(30, 41, 59, 0.8); border: 1px solid #334155; border-radius: 24px; backdrop-filter: blur(10px);">
                    <i class="fas fa-mountain" style="font-size: 5rem; color: #0f766e; margin-bottom: 1.5rem; opacity: 0.8;"></i>
                    <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-family: var(--font-display); font-size: 1.8rem;">Explorador 3D no disponible</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem;">El servicio de visualización 3D está temporalmente en exploración.</p>
                    <p style="font-size: 1rem; opacity: 0.8;">Por favor, intenta más tarde o contacta a nuestro equipo de digitalización.</p>
                </div>
            `;
            container.appendChild(errorMsg);
        });
    }
});

/**
 * Add touch-friendly interactions for mobile devices
 */
function initMobileInteractions() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Add touch feedback for Patagonia elements
        const touchElements = document.querySelectorAll('.step-card, .feature-card, .control-item, .cta-primary, .cta-secondary, .cta-button');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Simplify animations on mobile for better performance
        const particles = document.querySelector('.hero-particles');
        if (particles) {
            particles.style.display = 'none';
        }
    }
}

// Initialize mobile interactions
window.addEventListener('resize', debounce(initMobileInteractions, 250));
initMobileInteractions();