document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const statusMsg = document.getElementById('quote-status');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const actionUrl = form.getAttribute('action');
            const formData = new FormData(form);

            submitBtn.disabled = true;

            try {
                const response = await fetch(actionUrl, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    statusMsg.textContent = "Thanks — we'll follow up within 2 business days.";
                    statusMsg.setAttribute('data-state', 'ok');
                    form.reset();
                } else {
                    throw new Error('Response not ok');
                }
            } catch (error) {
                statusMsg.textContent = "Something went wrong. Please email us directly at jasoncabrejos@gmail.com instead.";
                statusMsg.setAttribute('data-state', 'err');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpened = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
        });
    }
});
