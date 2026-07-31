/* =============================================
PACPRESS -- main.js
Fixed: normal quotes, no markdown fences, working FAQ,
pinned hero scroll, mobile nav, smooth scroll.
============================================= */

(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');

  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  function getHeaderHeight() {
    return header ? header.offsetHeight : 72;
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      closeMobileNav();
      var top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderHeight();
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = hamburger.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileNav.classList.add('open');
        mobileNav.setAttribute('aria-hidden', 'false');
      }
    });

    document.addEventListener('click', function (e) {
      if (mobileNav.classList.contains('open') && header && !header.contains(e.target)) closeMobileNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMobileNav();
    });
  }

  var heroOuter = document.querySelector('.hero-outer');
  var heroImg = document.getElementById('hero-img');
  var heroOverlay = document.getElementById('hero-overlay');
  var heroCopy = document.getElementById('hero-copy');

  function clamp(value, min, max) { return Math.min(Math.max(value, min), max); }

  function updateHero() {
    if (!heroOuter || !heroImg || !heroOverlay || !heroCopy) return;
    var rect = heroOuter.getBoundingClientRect();
    var scrollable = Math.max(rect.height - window.innerHeight, 1);
    var progress = clamp(-rect.top / scrollable, 0, 1);

    // Starts earlier, ends sooner. Text scrolls up over pinned hero.
    var reveal = clamp((progress - 0.04) / 0.26, 0, 1);
    var exit = clamp((progress - 0.74) / 0.20, 0, 1);
    var opacity = reveal * (1 - exit);
    var translate = 120 - (reveal * 145) - (exit * 140);
    var blur = progress * 5.5;
    var scale = 1.01 + progress * 0.025;
    var overlayOpacity = 0.1 + progress * 0.82;

    heroCopy.style.opacity = opacity.toFixed(3);
    heroCopy.style.transform = 'translateY(' + translate.toFixed(1) + 'px)';
    heroCopy.classList.toggle('is-visible', opacity > 0.15);
    heroImg.style.filter = 'blur(' + blur.toFixed(2) + 'px)';
    heroImg.style.transform = 'scale(' + scale.toFixed(3) + ')';
    heroOverlay.style.opacity = overlayOpacity.toFixed(3);
  }

  window.addEventListener('scroll', updateHero, { passive: true });
  window.addEventListener('resize', updateHero);
  updateHero();

  var faqItems = document.querySelectorAll('.faq-item');

  function setFaqOpen(item, open) {
    var btn = item.querySelector('.faq-q');
    var ans = item.querySelector('.faq-a');
    if (!btn || !ans) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      ans.style.maxHeight = ans.scrollHeight + 'px';
      ans.classList.add('is-open');
    } else {
      ans.style.maxHeight = '0px';
      ans.classList.remove('is-open');
    }
  }

  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    setFaqOpen(item, false);
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      setFaqOpen(item, !expanded); // multiple can stay open
    });
  });

  window.addEventListener('resize', function () {
    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq-q');
      var ans = item.querySelector('.faq-a');
      if (btn && ans && btn.getAttribute('aria-expanded') === 'true') ans.style.maxHeight = ans.scrollHeight + 'px';
    });
  });

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.reportValidity()) return;

      var statusEl = document.getElementById('form-status');
      var data = new FormData(contactForm);
      var name = String(data.get('name') || '').trim();
      var email = String(data.get('email') || '').trim();
      var phone = String(data.get('phone') || '').trim();
      var details = String(data.get('details') || '').trim();
      var subject = 'Filter press rental quote request from ' + name;
      var body = [
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + (phone || 'Not provided'),
        '',
        'Project details:',
        details
      ].join('\n');

      if (statusEl) {
        statusEl.className = 'form-status form-status-success';
        statusEl.textContent = 'Your email application should open with the project details filled in. Review the message, then send it to PacPress.';
      }
      window.location.href = 'mailto:sales@pacpress.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
