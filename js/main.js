// fadiopgenorth.com — Main JavaScript

(function () {
  'use strict';

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Active Nav Link ---
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // --- Contact Form Handler ---
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: Replace with real form endpoint (Formspree, Netlify Forms, etc.)
      // Example Formspree: change form action to https://formspree.io/f/YOUR_FORM_ID
      var formData = new FormData(contactForm);
      var name = formData.get('name');
      alert('Thanks, ' + name + '! Your message has been noted. (Form backend not yet connected — see code comments for setup.)');
      contactForm.reset();
    });
  }
})();
