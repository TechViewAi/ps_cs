/* ===========================================
   FREEBIE LANDING — Lenis smooth scroll + GSAP reveals + particles
   Inspired by the coming-soon homepage choreography
   =========================================== */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', () => {
        if (prefersReducedMotion) {
            showAll();
            return;
        }

        initLenis();
        initParticles();
        initHeroEntrance();
        initScrollReveals();
        initLogoIntent();
        initSmoothAnchorScroll();
    });

    /* ---------- Lenis Smooth Scroll ---------- */
    let lenisInstance = null;

    function initLenis() {
        if (typeof Lenis === 'undefined') return;

        document.documentElement.classList.add('lenis', 'lenis-smooth');

        lenisInstance = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.95,
            touchMultiplier: 1.4,
        });

        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Keep ScrollTrigger in sync with Lenis
        if (typeof ScrollTrigger !== 'undefined') {
            lenisInstance.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
        }
    }

    /* ---------- Hero entrance timeline ---------- */
    function initHeroEntrance() {
        if (typeof gsap === 'undefined') return;

        gsap.set('.hero-logo-symbol', { opacity: 0, y: -16, scale: 0.94 });
        gsap.set('.hero-headline', { opacity: 0, y: 30 });
        gsap.set('.hero-subtext', { opacity: 0, y: 18 });
        gsap.set('.hero-tagline', { opacity: 0, y: 18 });
        gsap.set('.hero-cta', { opacity: 0, y: 18, scale: 0.96 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.to('.hero-logo-symbol', { opacity: 1, y: 0, scale: 1, duration: 1.0, delay: 0.15 })
          .to('.hero-headline', { opacity: 1, y: 0, duration: 1.1 }, '-=0.5')
          .to('.hero-subtext', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
          .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
          .to('.hero-cta', { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.4');
    }

    /* ---------- Scroll-triggered reveals ---------- */
    function initScrollReveals() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        // Section headings
        gsap.utils.toArray('.section-heading, .form-heading, .explore-heading').forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 32 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
                }
            );
        });

        // Intro paragraph stagger
        document.querySelectorAll('.intro-text').forEach((wrap) => {
            const paras = wrap.querySelectorAll('p');
            gsap.fromTo(paras,
                { opacity: 0, y: 22 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.12,
                    scrollTrigger: { trigger: wrap, start: 'top 82%' }
                }
            );
        });

        // Feature list items — soft slide from left
        document.querySelectorAll('.features-list').forEach((list) => {
            const items = list.querySelectorAll('.feature-item');
            gsap.fromTo(items,
                { opacity: 0, x: -24 },
                {
                    opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1,
                    scrollTrigger: { trigger: list, start: 'top 80%' }
                }
            );
        });

        // Features footer
        gsap.utils.toArray('.features-footer').forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 18 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
                    scrollTrigger: { trigger: el, start: 'top 88%' }
                }
            );
        });

        // Preview cards — stagger with scale
        document.querySelectorAll('.preview-grid').forEach((grid) => {
            const items = grid.querySelectorAll('.preview-item');
            gsap.fromTo(items,
                { opacity: 0, y: 40, scale: 0.94 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15,
                    scrollTrigger: { trigger: grid, start: 'top 78%' }
                }
            );
        });

        // Form container
        gsap.utils.toArray('.form-container').forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 36 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 80%' }
                }
            );
        });

        // Explore cards
        document.querySelectorAll('.explore-grid').forEach((grid) => {
            const cards = grid.querySelectorAll('.explore-card');
            gsap.fromTo(cards,
                { opacity: 0, y: 40, scale: 0.96 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
                    scrollTrigger: { trigger: grid, start: 'top 80%' }
                }
            );
        });

        // Subtle parallax on bg-gradient
        gsap.to('.bg-gradient', {
            y: 80,
            ease: 'none',
            scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true }
        });

        // Footer fade
        gsap.utils.toArray('.landing-footer').forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0 },
                {
                    opacity: 1, duration: 0.8,
                    scrollTrigger: { trigger: el, start: 'top 95%' }
                }
            );
        });
    }

    /* ---------- Smooth scroll for in-page anchors ---------- */
    function initSmoothAnchorScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || href === '#') return;
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                if (lenisInstance) {
                    lenisInstance.scrollTo(target, { offset: -20, duration: 1.2 });
                } else {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /* ---------- Subtle logo hover lift ---------- */
    function initLogoIntent() {
        const logo = document.querySelector('.hero-logo-symbol');
        if (!logo) return;
        logo.addEventListener('mouseenter', () => gsap.to(logo, { scale: 1.04, duration: 0.5, ease: 'power2.out' }));
        logo.addEventListener('mouseleave', () => gsap.to(logo, { scale: 1.0, duration: 0.5, ease: 'power2.out' }));
    }

    /* ---------- Reduced-motion fallback ---------- */
    function showAll() {
        document.querySelectorAll('[style*="opacity"], .hero-headline, .hero-subtext, .hero-tagline, .hero-cta, .landing-logo')
            .forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    /* ---------- Floating particles (same brand palette as homepage) ---------- */
    function initParticles() {
        const canvas = document.getElementById('freebie-particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let raf = null;

        const colors = [
            'rgba(130, 87, 77, 0.12)',
            'rgba(173, 134, 130, 0.10)',
            'rgba(229, 209, 207, 0.18)',
            'rgba(196, 165, 116, 0.12)'
        ];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function make() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3.5 + 1,
                speedX: (Math.random() - 0.5) * 0.22,
                speedY: (Math.random() - 0.5) * 0.22,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.018 + 0.008
            };
        }

        function build() {
            const count = Math.min(45, Math.floor((canvas.width * canvas.height) / 28000));
            particles = Array.from({ length: count }, make);
        }

        function tick() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += p.pulseSpeed;
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                const a = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
                ctx.save();
                ctx.globalAlpha = a;
                ctx.fillStyle = p.color;
                ctx.shadowBlur = p.size * 2;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
            raf = requestAnimationFrame(tick);
        }

        resize();
        build();
        tick();

        window.addEventListener('resize', () => { resize(); build(); });
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) { cancelAnimationFrame(raf); }
            else { tick(); }
        });
    }
})();
