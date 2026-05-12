/* ===========================================
   FORM HANDLER - Email Capture
   Simple validation and success message
   =========================================== */

(function() {
    'use strict';

    // Wait for DOM to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initForm);
    } else {
        initForm();
    }

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
        const consentCheckbox = form.querySelector('[name="consent"]');
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

        // Validate consent
        if (consentCheckbox && !consentCheckbox.checked) {
            alert('Please agree to receive emails to continue.');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Simulate API call (replace with actual backend integration)
        setTimeout(function() {
            // Hide form
            form.style.display = 'none';

            // Show success message
            const successMsg = document.getElementById('success-message');
            if (successMsg) {
                successMsg.classList.add('visible');

                // Update email in success message
                const emailSpan = successMsg.querySelector('.user-email');
                if (emailSpan) {
                    emailSpan.textContent = email;
                }

                // Scroll to success message
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            // Reset button (in case user navigates back)
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Me the Guide';

            // TODO: Replace with actual API call
            // Example:
            // fetch('/api/subscribe', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, consent: true })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     // Handle success
            // })
            // .catch(error => {
            //     // Handle error
            //     console.error('Submission error:', error);
            // });

        }, 1500);
    }
})();
