/* ===========================================
   FORM HANDLER - Email Capture
   Validates, submits, and opens success modal
   =========================================== */

(function() {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        initForm();
        initModal();
    }

    /* ---------- Form ---------- */

    function initForm() {
        const form = document.getElementById('freebie-form');
        if (!form) return;
        form.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const nameInput = form.querySelector('[name="name"]');
        const emailInput = form.querySelector('[name="email"]');
        const submitBtn = form.querySelector('[type="submit"]');

        // Reset errors
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');

        // Validate name
        const name = nameInput.value.trim();
        if (name.length < 2) {
            nameInput.classList.add('error');
            nameInput.focus();
            return;
        }

        // Validate email
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.classList.add('error');
            emailInput.focus();
            return;
        }

        // Loading state
        submitBtn.disabled = true;
        const originalLabel = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';

        fetch('/api/submit-freebie', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                source: form.dataset.slug || 'unknown'
            })
        })
        .then(function(res) { return res.json().catch(function() { return {}; }); })
        .then(function(data) { console.log('[freebie-form] submit result:', data); })
        .catch(function(err) { console.error('[freebie-form] submit error:', err); })
        .finally(function() {
            openModal('success-modal');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
        });
    }

    /* ---------- Modal ---------- */

    let lastFocused = null;

    function initModal() {
        // Close buttons + backdrop
        document.addEventListener('click', function(e) {
            const trigger = e.target.closest('[data-modal-close]');
            if (trigger) {
                const modal = trigger.closest('.modal');
                if (modal) closeModal(modal);
            }
        });

        // Escape key closes any open modal
        document.addEventListener('keydown', function(e) {
            if (e.key !== 'Escape') return;
            const openModalEl = document.querySelector('.modal.is-open');
            if (openModalEl) closeModal(openModalEl);
        });
    }

    function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;

        lastFocused = document.activeElement;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Move focus to the close button for accessibility
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }

    function closeModal(modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    }
})();
