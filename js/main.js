/* ============================================================
   IZYWORLD GLOBAL LIMITED — MAIN JAVASCRIPT
   ------------------------------------------------------------
   This file makes the website INTERACTIVE. It has 5 jobs:

     1. MOBILE MENU    — open/close the hamburger menu on phones
     2. HEADER SHADOW  — add a shadow to the header when scrolling
     3. SCROLL REVEAL  — fade sections in as they enter the screen
     4. FORM CHECK     — check the contact form before submitting
     5. SMALL EXTRAS   — footer year, back-to-top button

   Every part is labeled. When you are learning JavaScript,
   this is a real file from your own company — take it apart,
   change things, break things, fix them again. That is how
   you learn.
   ============================================================ */

/* ------------------------------------------------------------
   PART 1 — MOBILE MENU
   The hamburger button only appears on small screens.
   Clicking it toggles the .open class on the menu, and the
   CSS in main.css shows/hides the menu based on that class.
   ------------------------------------------------------------ */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    // switch the icon between hamburger (☰) and close (✕)
    const iconOpen = navToggle.querySelector('.icon-open');
    const iconClose = navToggle.querySelector('.icon-close');
    const isOpen = navMenu.classList.contains('open');
    if (iconOpen && iconClose) {
      iconOpen.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    }
  });
}

/* ------------------------------------------------------------
   PART 2 — HEADER SHADOW
   Every time the page scrolls we check: has the user moved
   further than 10 pixels? If yes, add the .scrolled class
   (CSS draws the shadow). If they return to the top, remove it.
   ------------------------------------------------------------ */
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);

  // back-to-top button (PART 5): visible after 400px of scrolling
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }
});

/* ------------------------------------------------------------
   PART 3 — SCROLL REVEAL
   Any element with class="reveal" starts hidden (see main.css).
   This "IntersectionObserver" is a browser tool that watches
   elements and tells us WHEN each one enters the screen.
   When it does, we add the .visible class → CSS fades it in.
   ------------------------------------------------------------ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // stop watching once shown
    }
  });
}, { threshold: 0.12 }); // trigger when 12% of the element is visible

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ------------------------------------------------------------
   PART 4 — CONTACT FORM CHECK
   When the user presses Submit we check every required field.
   If something is empty (or the email looks wrong), we show a
   red border + an error message and STOP the submission.
   If everything is fine, the browser opens their email app
   with the message ready to send.

   NOTE: this uses a "mailto:" link — it works without any
   server. Later, when you learn backend development, this can
   be upgraded to send messages directly from the website.
   ------------------------------------------------------------ */
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // stop the default page reload

    let allValid = true;

    // check each field that has the required attribute
    form.querySelectorAll('[required]').forEach((field) => {
      const errorEl = document.querySelector(`[data-error-for="${field.id}"]`);
      const isEmpty = field.value.trim() === '';
      // simple email pattern: something@something.something
      const badEmail = field.type === 'email' && !/^\S+@\S+\.\S+$/.test(field.value);

      if (isEmpty || badEmail) {
        allValid = false;
        field.classList.add('invalid');
        if (errorEl) errorEl.classList.add('show');
      } else {
        field.classList.remove('invalid');
        if (errorEl) errorEl.classList.remove('show');
      }
    });

    if (!allValid) return; // stop here — CSS is showing the errors

    // everything is valid → build the email
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    const subject = `Website enquiry — ${service} (${name})`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'not given'}\n\n` +
      `Service of interest: ${service}\n\n` +
      `Message:\n${message}\n`;

    window.location.href =
      `mailto:UPDATE_ME@izyworld.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // give feedback so the user knows something happened
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Opening your email app…';
      setTimeout(() => (btn.textContent = 'Send Message'), 4000);
    }
  });
}

/* ------------------------------------------------------------
   PART 5 — SMALL EXTRAS
   ------------------------------------------------------------ */
// auto-update the year in the footer — no more outdated "© 2025"
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// back-to-top button scrolls smoothly to the very top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
