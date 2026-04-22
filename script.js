/* ===========================================
   POWERFUL INTENTION - Animations
   GSAP + Floating Particles
   =========================================== */

// Wait for DOM and fonts to load
document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        initAnimations();
        initParticles();
    } else {
        // Show everything immediately for reduced motion
        showAllElements();
    }
});

// Initialize GSAP Animations
function initAnimations() {
    // Create main timeline
    const tl = gsap.timeline({
        defaults: {
            ease: 'power3.out',
        }
    });

    // Logo icon - fade down
    tl.to('.logo-icon', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3
    });

    // Brand name words - stagger reveal
    tl.to('.brand-name .word', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    }, '-=0.5');

    // Tagline - fade up
    tl.to('.tagline', {
        opacity: 1,
        y: 0,
        duration: 0.7
    }, '-=0.3');

    // Divider - scale in
    tl.to('.divider', {
        opacity: 1,
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.inOut'
    }, '-=0.2');

    // Coming Soon
    tl.to('.coming-soon', {
        opacity: 1,
        y: 0,
        duration: 0.6
    }, '-=0.2');

    // Description
    tl.to('.description', {
        opacity: 0.7,
        y: 0,
        duration: 0.6
    }, '-=0.3');

    // Email form
    tl.to('.email-form', {
        opacity: 1,
        y: 0,
        duration: 0.7
    }, '-=0.2');

    // Footer
    tl.to('.footer', {
        opacity: 1,
        duration: 0.5
    }, '-=0.3');

    // Set initial states
    gsap.set('.logo-icon', { opacity: 0, y: -20 });
    gsap.set('.tagline', { opacity: 0, y: 15 });
    gsap.set('.coming-soon', { opacity: 0, y: 15 });
    gsap.set('.description', { opacity: 0, y: 15 });
    gsap.set('.email-form', { opacity: 0, y: 20 });
    gsap.set('.footer', { opacity: 0 });
}

// Show all elements without animation (for reduced motion)
function showAllElements() {
    const elements = [
        '.logo-icon',
        '.brand-name .word',
        '.tagline',
        '.divider',
        '.coming-soon',
        '.description',
        '.email-form',
        '.footer'
    ];

    elements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    });
}

// Floating Particles System
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Brand colors for particles
    const colors = [
        'rgba(130, 87, 77, 0.15)',   // mauve
        'rgba(173, 134, 130, 0.12)', // heather
        'rgba(229, 209, 207, 0.2)',  // primrose
        'rgba(196, 165, 116, 0.15)'  // gold
    ];

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Create a particle
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.5 + 0.2,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.01
        };
    }

    // Initialize particles
    function initParticleSystem() {
        const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 25000));
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }

    // Draw a single particle
    function drawParticle(p) {
        ctx.save();

        // Pulsing opacity
        const pulsingOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        ctx.globalAlpha = pulsingOpacity;
        ctx.fillStyle = p.color;

        // Draw as a soft circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Add a subtle glow
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = p.color;
        ctx.fill();

        ctx.restore();
    }

    // Update particle position
    function updateParticle(p) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            updateParticle(p);
            drawParticle(p);
        });

        animationId = requestAnimationFrame(animate);
    }

    // Handle resize
    function handleResize() {
        resizeCanvas();
        initParticleSystem();
    }

    // Initialize
    resizeCanvas();
    initParticleSystem();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup on page hide
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// Form submission - handled by FormSubmit.co
// Shows loading state while submitting
document.querySelector('.email-form')?.addEventListener('submit', function() {
    const button = this.querySelector('button');
    button.innerHTML = '<span>Sending...</span>';
    button.style.opacity = '0.7';
});
