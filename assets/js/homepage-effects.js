// ==========================================================================
// AL-FOLIO AI HOMEPAGE — Neural Network Canvas + Dynamic Effects
// ==========================================================================
// Place in: assets/js/homepage-effects.js
// Include in _layouts/about.liquid (or default.liquid) before </body>:
//   <script src="{{ '/assets/js/homepage-effects.js' | relative_url }}" defer></script>
// ==========================================================================

(function () {
  "use strict";

  // Only run on the about/home page
  const isHomepage =
    document.querySelector(".about") ||
    document.querySelector(".profile") ||
    document.body.classList.contains("about");
  if (!isHomepage) return;

  // ========================================================================
  // 1. NEURAL NETWORK CANVAS BACKGROUND
  // ========================================================================
  function initNeuralCanvas() {
    const container = document.querySelector(".about") || document.querySelector("article");
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.id = "neural-canvas";
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -3;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1.5s ease;
    `;
    document.body.prepend(canvas);

    // Fade in
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    const ctx = canvas.getContext("2d");
    let w, h, dpr;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Track mouse for interaction
    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    document.addEventListener("mouseleave", () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    // Create nodes
    const NUM_NODES = Math.min(60, Math.floor((w * h) / 20000));
    const CONNECT_DIST = 160;
    const MOUSE_DIST = 180;
    const nodes = [];

    // Read theme colors from CSS variables
    function getColors() {
      const style = getComputedStyle(document.documentElement);
      const theme = style.getPropertyValue("--global-theme-color").trim() || "#ff7043";
      // Parse hex to rgb
      function hexToRgb(hex) {
        hex = hex.replace("#", "");
        if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        return {
          r: parseInt(hex.substring(0, 2), 16),
          g: parseInt(hex.substring(2, 4), 16),
          b: parseInt(hex.substring(4, 6), 16),
        };
      }
      return [
        hexToRgb(theme),
        hexToRgb("#ff6b6b"),
        hexToRgb("#ffb74d"),
        hexToRgb("#f06292"),
        hexToRgb("#ff8a65"),
      ];
    }
    const colors = getColors();

    for (let i = 0; i < NUM_NODES; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.5 + 0.8,
        phase: Math.random() * Math.PI * 2,
        colorIdx: Math.floor(Math.random() * colors.length),
      });
    }

    let animId;
    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Update position
        a.x += a.vx;
        a.y += a.vy;
        a.phase += 0.015;

        // Wrap around edges
        if (a.x < -20) a.x = w + 20;
        if (a.x > w + 20) a.x = -20;
        if (a.y < -20) a.y = h + 20;
        if (a.y > h + 20) a.y = -20;

        // Mouse repulsion
        const dmx = a.x - mouse.x;
        const dmy = a.y - mouse.y;
        const dm = Math.sqrt(dmx * dmx + dmy * dmy);
        if (dm < MOUSE_DIST && dm > 0) {
          const force = (MOUSE_DIST - dm) / MOUSE_DIST;
          a.vx += (dmx / dm) * force * 0.15;
          a.vy += (dmy / dm) * force * 0.15;
        }

        // Dampen
        a.vx *= 0.995;
        a.vy *= 0.995;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.2;
            const c = colors[a.colorIdx];
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Data packet animation
            const t = (Date.now() * 0.0005 + i * 0.05) % 1;
            const pulse = Math.sin(a.phase + d * 0.01);
            if (pulse > 0.7 && d < CONNECT_DIST * 0.7) {
              const px = a.x + (b.x - a.x) * t;
              const py = a.y + (b.y - a.y) * t;
              ctx.beginPath();
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${alpha * 2.5})`;
              ctx.fill();
            }
          }
        }

        // Draw node
        const glow = (Math.sin(a.phase) + 1) / 2;
        const c = colors[a.colorIdx];

        // Outer glow
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r * 3 + glow * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${0.03 + glow * 0.05})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r + glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${0.5 + glow * 0.4})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    // Only animate when tab is visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        draw();
      }
    });

    draw();
  }

  // ========================================================================
  // 2. TYPING EFFECT FOR TAGLINE
  // ========================================================================
  function initTypingEffect() {
    const el = document.querySelector("[data-typing]");
    if (!el) return;

    const texts = (el.dataset.typing || "").split("|").map((s) => s.trim());
    if (texts.length === 0) return;

    let textIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pauseTimer = null;

    function type() {
      const current = texts[textIdx];

      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx >= current.length) {
          pauseTimer = setTimeout(() => {
            deleting = true;
            type();
          }, 2500);
          return;
        }
        setTimeout(type, 60 + Math.random() * 40);
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx <= 0) {
          deleting = false;
          textIdx = (textIdx + 1) % texts.length;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, 30);
      }
    }

    type();
  }

  // ========================================================================
  // 3. ANIMATED COUNTERS
  // ========================================================================
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (counters.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = "true";
            const end = parseInt(entry.target.dataset.count, 10);
            const suffix = entry.target.dataset.suffix || "";
            const duration = 2000;
            let start = 0;
            const step = end / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= end) {
                entry.target.textContent = end + suffix;
                clearInterval(timer);
              } else {
                entry.target.textContent = Math.floor(start) + suffix;
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  // ========================================================================
  // 4. SCROLL REVEAL (upgraded from custom-effects.js)
  // ========================================================================
  function initScrollReveal() {
    const selectors = [
      ".news li",
      ".news .news-item",
      ".publications ol.bibliography > li",
      ".projects .grid-item",
      ".projects .col",
      ".post-list li",
      ".reveal",
      ".reveal-up",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
      ".stats-grid > div",
      ".homepage-section",
    ];

    const elements = document.querySelectorAll(selectors.join(","));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger delay based on position among siblings
            const siblings = entry.target.parentElement
              ? Array.from(entry.target.parentElement.children)
              : [entry.target];
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 0.08}s`;
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ========================================================================
  // 5. PARALLAX PROFILE IMAGE
  // ========================================================================
  function initParallaxProfile() {
    const profile = document.querySelector(".profile");
    if (!profile) return;

    const img = profile.querySelector("img");
    if (!img) return;

    profile.addEventListener("mousemove", (e) => {
      const rect = profile.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.03)`;
    });

    profile.addEventListener("mouseleave", () => {
      img.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
    });
  }

  // ========================================================================
  // 6. CURSOR GLOW (subtle light following mouse)
  // ========================================================================
  function initCursorGlow() {
    if (window.matchMedia("(hover: none)").matches) return;

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    function animate() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ========================================================================
  // 7. 3D CARD TILT
  // ========================================================================
  function initCardTilt() {
    const cards = document.querySelectorAll(".card, [data-tilt]");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  // ========================================================================
  // 8. RESEARCH TAGS FLOAT ANIMATION (for data-float-tag elements)
  // ========================================================================
  function initFloatingTags() {
    const tags = document.querySelectorAll(".research-tag");
    tags.forEach((tag, i) => {
      tag.style.animationDelay = `${i * 0.3}s`;
    });
  }

  // ========================================================================
  // INIT ALL
  // ========================================================================
  function init() {
    initNeuralCanvas();
    initTypingEffect();
    initCounters();
    initScrollReveal();
    initParallaxProfile();
    initCursorGlow();
    initCardTilt();
    initFloatingTags();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
