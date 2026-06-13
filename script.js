// Smooth scroll enhancement and accessibility
document.addEventListener('DOMContentLoaded', function() {
  // Add active link highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function highlightNavLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href.includes('#' + current)) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);
  highlightNavLink();
});
