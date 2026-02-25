// ==========================================================================
// AL-FOLIO CREATIVE EFFECTS — Vanilla JS, Zero Dependencies
// ==========================================================================
// Place this file at: assets/js/custom-effects.js
// Then include it in _includes/scripts.liquid (see instructions below)
// ==========================================================================

(function () {
  "use strict";

  // Wait for DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    initScrollReveal();
    initCursorGlow();
    initCardTilt();
    initParallaxProfile();
  }

  // --------------------------------------------------------------------------
  // 1. SCROLL REVEAL — Animate elements as they enter the viewport
  // --------------------------------------------------------------------------
  function initScrollReveal() {
    // Select all elements that should animate on scroll
    var selectors = [
      // Explicit reveal classes
      ".reveal",
      ".reveal-up",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
      // Auto-target common al-folio elements
      ".news li",
      ".publications ol.bibliography > li",
      ".projects .grid-item",
      ".projects .col",
      ".post-list li",
    ];

    var elements = document.querySelectorAll(selectors.join(","));
    if (!elements.length) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    // Add staggered delays to lists
    var groups = {};
    elements.forEach(function (el) {
      var parent = el.parentElement;
      if (!parent) return;
      var key = parent.tagName + parent.className;
      if (!groups[key]) groups[key] = [];
      groups[key].push(el);
    });

    Object.values(groups).forEach(function (group) {
      group.forEach(function (el, i) {
        if (!el.style.transitionDelay) {
          el.style.transitionDelay = (i * 0.08) + "s";
        }
      });
    });

    // Intersection Observer for revealing
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --------------------------------------------------------------------------
  // 2. CURSOR GLOW — Soft light that follows the mouse
  // --------------------------------------------------------------------------
  function initCursorGlow() {
    // Only on non-touch devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    var mouseX = 0;
    var mouseY = 0;
    var glowX = 0;
    var glowY = 0;
    var isMoving = false;

    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateGlow);
      }
    });

    function updateGlow() {
      // Smooth lerp for fluid movement
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;

      glow.style.left = glowX + "px";
      glow.style.top = glowY + "px";

      // Continue animating if mouse is still moving
      if (Math.abs(mouseX - glowX) > 0.5 || Math.abs(mouseY - glowY) > 0.5) {
        requestAnimationFrame(updateGlow);
      } else {
        isMoving = false;
      }
    }
  }

  // --------------------------------------------------------------------------
  // 3. 3D CARD TILT — Interactive perspective effect on cards
  // --------------------------------------------------------------------------
  function initCardTilt() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Apply to project cards and any element with data-tilt
    var cards = document.querySelectorAll(
      ".projects .card, [data-tilt]"
    );

    cards.forEach(function (card) {
      card.style.transformStyle = "preserve-3d";
      card.style.willChange = "transform";

      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        // Calculate tilt angles (max ±8 degrees)
        var rotateX = ((y - centerY) / centerY) * -8;
        var rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform =
          "perspective(800px) rotateX(" +
          rotateX +
          "deg) rotateY(" +
          rotateY +
          "deg) scale3d(1.03, 1.03, 1.03)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform =
          "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        card.style.transition = "transform 0.5s ease";
      });

      card.addEventListener("mouseenter", function () {
        card.style.transition = "none";
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. PARALLAX PROFILE IMAGE — Subtle depth effect on scroll
  // --------------------------------------------------------------------------
  function initParallaxProfile() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var profileImg = document.querySelector(".profile img");
    if (!profileImg) return;

    var ticking = false;

    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.pageYOffset;
          var speed = 0.15; // Parallax intensity
          var offset = scrollY * speed;

          // Only apply when image is in or near viewport
          if (scrollY < window.innerHeight) {
            profileImg.style.transform = "translateY(" + offset + "px) scale(1)";
          }

          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();