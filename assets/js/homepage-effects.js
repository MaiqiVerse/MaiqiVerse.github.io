// ==========================================================================
// AL-FOLIO AI HOMEPAGE — Neural Canvas + Hero + Bento Effects
// ==========================================================================
// REPLACE assets/js/homepage-effects.js with this file
// Already included in your default.liquid — no changes needed there
// ==========================================================================

(function () {
  "use strict";

  const isHomepage =
    document.querySelector(".about") ||
    document.querySelector(".profile") ||
    document.body.classList.contains("about");
  if (!isHomepage) return;

  // ========================================================================
  // 1. NEURAL NETWORK CANVAS BACKGROUND
  // ========================================================================
  function initNeuralCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "neural-canvas";
    canvas.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-3;pointer-events:none;opacity:0;transition:opacity 1.5s ease;";
    document.body.prepend(canvas);
    requestAnimationFrame(() => { canvas.style.opacity = "1"; });

    const ctx = canvas.getContext("2d");
    let w, h;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    document.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

    const NUM = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 20000));
    const CDIST = 160, MDIST = 180;

    function hexToRgb(hex) {
      hex = hex.replace("#", "");
      if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16),
      };
    }

    const theme = getComputedStyle(document.documentElement)
      .getPropertyValue("--global-theme-color").trim() || "#ff7043";
    const colors = [
      hexToRgb(theme), hexToRgb("#ff6b6b"), hexToRgb("#ffb74d"),
      hexToRgb("#f06292"), hexToRgb("#ff8a65"),
    ];

    const nodes = Array.from({ length: NUM }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.5 + 0.8, phase: Math.random() * 6.28,
      ci: Math.floor(Math.random() * colors.length),
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy; a.phase += 0.015;
        if (a.x < -20) a.x = w + 20;
        if (a.x > w + 20) a.x = -20;
        if (a.y < -20) a.y = h + 20;
        if (a.y > h + 20) a.y = -20;

        // Mouse repulsion
        const dm = Math.sqrt((a.x - mouse.x) ** 2 + (a.y - mouse.y) ** 2);
        if (dm < MDIST && dm > 0) {
          const f = (MDIST - dm) / MDIST;
          a.vx += ((a.x - mouse.x) / dm) * f * 0.15;
          a.vy += ((a.y - mouse.y) / dm) * f * 0.15;
        }
        a.vx *= 0.995; a.vy *= 0.995;

        // Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (d < CDIST) {
            const al = (1 - d / CDIST) * 0.2;
            const c = colors[a.ci];
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${al})`;
            ctx.lineWidth = 0.5; ctx.stroke();

            // Data packets
            if (Math.sin(a.phase + d * 0.01) > 0.7 && d < CDIST * 0.7) {
              const t = (Date.now() * 0.0005 + i * 0.05) % 1;
              ctx.beginPath();
              ctx.arc(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, 1.2, 0, 6.28);
              ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${al * 2.5})`;
              ctx.fill();
            }
          }
        }

        // Node glow + core
        const g = (Math.sin(a.phase) + 1) / 2;
        const c = colors[a.ci];
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r * 3 + g * 3, 0, 6.28);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${0.03 + g * 0.05})`;
        ctx.fill();
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r + g, 0, 6.28);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${0.5 + g * 0.4})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    document.addEventListener("visibilitychange", () => {
      document.hidden ? cancelAnimationFrame(animId) : draw();
    });
    draw();
  }

  // ========================================================================
  // 2. HERO SCROLL PARALLAX — Fade + shrink hero content on scroll
  // ========================================================================
  function initHeroScroll() {
    const hero = document.querySelector(".hero-content");
    const hint = document.querySelector(".hero-scroll-hint");
    if (!hero) return;

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.pageYOffset;
          const threshold = window.innerHeight * 0.6;
          const p = Math.min(1, y / threshold);
          hero.style.opacity = 1 - p * 0.7;
          hero.style.transform =
            `translateY(${-p * 50}px) scale(${1 - p * 0.05})`;
          if (hint) hint.style.opacity = Math.max(0, 1 - y / 150);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ========================================================================
  // 3. TYPING EFFECT
  // ========================================================================
  function initTypingEffect() {
    const el = document.querySelector("[data-typing]");
    if (!el) return;
    const texts = (el.dataset.typing || "").split("|").map((s) => s.trim()).filter(Boolean);
    if (!texts.length) return;

    let ti = 0, ci = 0, del = false;
    function type() {
      const cur = texts[ti];
      if (!del) {
        el.textContent = cur.slice(0, ci + 1); ci++;
        if (ci >= cur.length) { setTimeout(() => { del = true; type(); }, 2500); return; }
        setTimeout(type, 55 + Math.random() * 35);
      } else {
        el.textContent = cur.slice(0, ci - 1); ci--;
        if (ci <= 0) { del = false; ti = (ti + 1) % texts.length; setTimeout(type, 400); return; }
        setTimeout(type, 28);
      }
    }
    type();
  }

  // ========================================================================
  // 4. ANIMATED COUNTERS
  // ========================================================================
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = "true";
          const end = parseInt(e.target.dataset.count, 10);
          const suffix = e.target.dataset.suffix || "";
          const duration = 2000;
          let s = 0;
          const step = end / (duration / 16);
          const t = setInterval(() => {
            s += step;
            if (s >= end) { e.target.textContent = end + suffix; clearInterval(t); }
            else e.target.textContent = Math.floor(s) + suffix;
          }, 16);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((c) => obs.observe(c));
  }

  // ========================================================================
  // 5. SCROLL REVEAL — Bento cells + al-folio elements
  // ========================================================================
  function initScrollReveal() {
    const selectors = [
      ".bento-cell",
      ".news li", ".news .news-item",
      ".publications ol.bibliography > li",
      ".projects .grid-item", ".projects .col",
      ".post-list li",
      ".reveal", ".reveal-up", ".reveal-left", ".reveal-right", ".reveal-scale",
      ".stats-grid > div", ".homepage-section",
    ];

    const els = document.querySelectorAll(selectors.join(","));
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

    els.forEach((el) => obs.observe(el));
  }

  // ========================================================================
  // 6. CURSOR GLOW
  // ========================================================================
  function initCursorGlow() {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });

    (function anim() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      requestAnimationFrame(anim);
    })();
  }

  // ========================================================================
  // 7. 3D CARD TILT — Bento project cards + .card
  // ========================================================================
  function initCardTilt() {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = document.querySelectorAll(
      ".bento-project-card, .projects .card, [data-tilt]"
    );
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px) scale(1.02)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  // ========================================================================
  // 8. FLOATING RESEARCH TAGS
  // ========================================================================
  function initFloatingTags() {
    document.querySelectorAll(".research-tag").forEach((tag, i) => {
      tag.style.animationDelay = `${i * 0.3}s`;
    });
  }

  // ========================================================================
  // INIT
  // ========================================================================
  function init() {
    initNeuralCanvas();
    initHeroScroll();
    initTypingEffect();
    initCounters();
    initScrollReveal();
    initCursorGlow();
    initCardTilt();
    initFloatingTags();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
