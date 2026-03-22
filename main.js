// Contact form submission handler
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const successMsg = document.getElementById('form-success');

  // Simulate a brief loading state on the button
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.textContent = originalText;
    btn.disabled = false;
    successMsg.style.display = 'block';

    // Hide the success message after 6 seconds
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 6000);
  }, 800);
}

// Smooth active link highlighting on scroll
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = 'var(--color-primary)';
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
