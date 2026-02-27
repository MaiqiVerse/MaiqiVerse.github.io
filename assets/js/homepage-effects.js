// ==========================================================================
// AL-FOLIO AI HOMEPAGE — Hero + Bento Effects (Robust v5)
// ==========================================================================
// REPLACE assets/js/homepage-effects.js
// ==========================================================================

(function () {
  "use strict";

  var isHomepage =
    document.querySelector(".about") ||
    document.querySelector(".hero-section") ||
    document.body.classList.contains("about");
  if (!isHomepage) return;

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ========================================================================
  // 1. NEURAL NETWORK CANVAS
  // ========================================================================
  function initNeuralCanvas() {
    if (REDUCED) return;

    var canvas = document.createElement("canvas");
    canvas.id = "neural-canvas";
    canvas.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-3;pointer-events:none;opacity:0;transition:opacity 1.5s ease;";
    document.body.prepend(canvas);
    requestAnimationFrame(function () { canvas.style.opacity = "1"; });

    var ctx = canvas.getContext("2d");
    var w, h;
    var mouse = { x: -9999, y: -9999 };

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("mousemove", function (e) { mouse.x = e.clientX; mouse.y = e.clientY; });
    document.addEventListener("mouseleave", function () { mouse.x = -9999; mouse.y = -9999; });

    var NUM = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 20000));
    var CDIST = 160, MDIST = 180;

    function hexToRgb(hex) {
      hex = hex.replace("#", "");
      if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
      };
    }

    var theme = getComputedStyle(document.documentElement)
      .getPropertyValue("--global-theme-color").trim() || "#ff7043";
    var colors = [
      hexToRgb(theme), hexToRgb("#ff6b6b"), hexToRgb("#ffb74d"),
      hexToRgb("#f06292"), hexToRgb("#ff8a65")
    ];

    var nodes = [];
    for (var i = 0; i < NUM; i++) {
      nodes.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.5 + 0.8, phase: Math.random() * 6.28,
        ci: Math.floor(Math.random() * colors.length)
      });
    }

    var animId;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        a.x += a.vx; a.y += a.vy; a.phase += 0.015;
        if (a.x < -20) a.x = w + 20;
        if (a.x > w + 20) a.x = -20;
        if (a.y < -20) a.y = h + 20;
        if (a.y > h + 20) a.y = -20;

        var dm = Math.sqrt((a.x - mouse.x) * (a.x - mouse.x) + (a.y - mouse.y) * (a.y - mouse.y));
        if (dm < MDIST && dm > 0) {
          var f = (MDIST - dm) / MDIST;
          a.vx += ((a.x - mouse.x) / dm) * f * 0.15;
          a.vy += ((a.y - mouse.y) / dm) * f * 0.15;
        }
        a.vx *= 0.995; a.vy *= 0.995;

        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var d = Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
          if (d < CDIST) {
            var al = (1 - d / CDIST) * 0.2;
            var c = colors[a.ci];
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + al + ")";
            ctx.lineWidth = 0.5; ctx.stroke();

            if (Math.sin(a.phase + d * 0.01) > 0.7 && d < CDIST * 0.7) {
              var t = (Date.now() * 0.0005 + i * 0.05) % 1;
              ctx.beginPath();
              ctx.arc(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, 1.2, 0, 6.28);
              ctx.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + (al * 2.5) + ")";
              ctx.fill();
            }
          }
        }

        var g = (Math.sin(a.phase) + 1) / 2;
        var c2 = colors[a.ci];
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r * 3 + g * 3, 0, 6.28);
        ctx.fillStyle = "rgba(" + c2.r + "," + c2.g + "," + c2.b + "," + (0.03 + g * 0.05) + ")";
        ctx.fill();
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r + g, 0, 6.28);
        ctx.fillStyle = "rgba(" + c2.r + "," + c2.g + "," + c2.b + "," + (0.5 + g * 0.4) + ")";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    document.addEventListener("visibilitychange", function () {
      document.hidden ? cancelAnimationFrame(animId) : draw();
    });
    draw();
  }

  // ========================================================================
  // 2. HERO → BENTO SCROLL TRANSITION
  // ========================================================================
  function initHeroScroll() {
    if (REDUCED) return;

    var heroContent = document.querySelector(".hero-content");
    var heroHint = document.querySelector(".hero-scroll-hint");
    var bentoSection = document.querySelector(".bento-section");
    var canvas = document.getElementById("neural-canvas");

    if (!heroContent) return;

    // Set initial bento state
    if (bentoSection) {
      bentoSection.style.opacity = "0";
      bentoSection.style.transform = "translateY(40px)";
    }

    var ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(function () {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        var vh = window.innerHeight;

        // Hero fade-out over first 60% of viewport
        var heroProgress = Math.min(1, Math.max(0, scrollY / (vh * 0.6)));

        heroContent.style.opacity = String(1 - heroProgress * 0.85);
        heroContent.style.transform =
          "translateY(" + (-heroProgress * 60) + "px) scale(" + (1 - heroProgress * 0.08) + ")";
        heroContent.style.filter = "blur(" + (heroProgress * 3) + "px)";

        if (heroHint) {
          heroHint.style.opacity = String(Math.max(0, 1 - scrollY / (vh * 0.15)));
        }

        if (canvas) {
          canvas.style.opacity = String(Math.max(0.15, 1 - heroProgress * 0.85));
        }

        // Bento entrance starts at 35% scroll
        if (bentoSection) {
          var bentoProgress = Math.min(1, Math.max(0, (scrollY - vh * 0.35) / (vh * 0.4)));
          bentoSection.style.opacity = String(bentoProgress);
          bentoSection.style.transform = "translateY(" + ((1 - bentoProgress) * 40) + "px)";
        }

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // Run once immediately
    onScroll();
  }

  // ========================================================================
  // 3. TYPING EFFECT
  // ========================================================================
  function initTypingEffect() {
    var el = document.querySelector("[data-typing]");
    if (!el) return;

    var raw = el.getAttribute("data-typing") || "";
    var texts = [];
    var parts = raw.split("|");
    for (var i = 0; i < parts.length; i++) {
      var trimmed = parts[i].trim();
      if (trimmed) texts.push(trimmed);
    }
    if (!texts.length) return;

    var ti = 0, ci = 0, del = false;

    function type() {
      var cur = texts[ti];
      if (!del) {
        ci++;
        el.textContent = cur.slice(0, ci);
        if (ci >= cur.length) {
          setTimeout(function () { del = true; type(); }, 2500);
          return;
        }
        setTimeout(type, 55 + Math.random() * 35);
      } else {
        ci--;
        el.textContent = cur.slice(0, ci);
        if (ci <= 0) {
          del = false;
          ti = (ti + 1) % texts.length;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, 28);
      }
    }

    setTimeout(type, 600);
  }

  // ========================================================================
  // 4. ANIMATED COUNTERS
  // ========================================================================
  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    var obs = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = "true";
          (function (target) {
            var end = parseInt(target.dataset.count, 10);
            var suffix = target.dataset.suffix || "";
            var s = 0;
            var step = end / 125; // ~2 seconds at 60fps
            var t = setInterval(function () {
              s += step;
              if (s >= end) {
                target.textContent = end + suffix;
                clearInterval(t);
              } else {
                target.textContent = Math.floor(s) + suffix;
              }
            }, 16);
          })(e.target);
        }
      }
    }, { threshold: 0.3 });

    for (var i = 0; i < counters.length; i++) {
      obs.observe(counters[i]);
    }
  }

  // ========================================================================
  // 5. BENTO CELL STAGGER REVEAL
  // ========================================================================
  function initBentoReveal() {
    var cells = document.querySelectorAll(".bento-cell");
    if (!cells.length) return;

    if (REDUCED) {
      for (var i = 0; i < cells.length; i++) cells[i].classList.add("is-visible");
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          var target = entries[i].target;
          var allCells = document.querySelectorAll(".bento-cell");
          var idx = Array.prototype.indexOf.call(allCells, target);
          target.style.transitionDelay = (idx * 0.08) + "s";
          target.classList.add("is-visible");
          obs.unobserve(target);
        }
      }
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

    for (var i = 0; i < cells.length; i++) {
      obs.observe(cells[i]);
    }
  }

  // ========================================================================
  // 6. SCROLL REVEAL — Other al-folio elements
  // ========================================================================
  function initScrollReveal() {
    var selectors = [
      ".news li", ".news .news-item",
      ".publications ol.bibliography > li",
      ".projects .grid-item", ".projects .col",
      ".post-list li",
      ".reveal", ".reveal-up", ".reveal-left", ".reveal-right", ".reveal-scale",
      ".stats-grid > div", ".homepage-section"
    ];

    var els = document.querySelectorAll(selectors.join(","));
    if (!els.length) return;

    if (REDUCED) {
      for (var i = 0; i < els.length; i++) els[i].classList.add("is-visible");
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("is-visible");
          obs.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

    for (var i = 0; i < els.length; i++) {
      obs.observe(els[i]);
    }
  }

  // ========================================================================
  // 7. CURSOR GLOW
  // ========================================================================
  function initCursorGlow() {
    if (window.matchMedia("(hover: none)").matches || REDUCED) return;

    var glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    var mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; });

    (function anim() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      requestAnimationFrame(anim);
    })();
  }

  // ========================================================================
  // 8. 3D CARD TILT
  // ========================================================================
  function initCardTilt() {
    if (window.matchMedia("(hover: none)").matches || REDUCED) return;

    var cards = document.querySelectorAll(".bento-project-card, .projects .card, [data-tilt]");
    for (var i = 0; i < cards.length; i++) {
      (function (card) {
        card.addEventListener("mousemove", function (e) {
          var r = card.getBoundingClientRect();
          var x = (e.clientX - r.left) / r.width - 0.5;
          var y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform =
            "perspective(800px) rotateY(" + (x * 8) + "deg) rotateX(" + (-y * 8) + "deg) translateY(-4px) scale(1.02)";
        });
        card.addEventListener("mouseleave", function () { card.style.transform = ""; });
      })(cards[i]);
    }
  }

  // ========================================================================
  // 9. FLOATING TAGS
  // ========================================================================
  function initFloatingTags() {
    var tags = document.querySelectorAll(".research-tag");
    for (var i = 0; i < tags.length; i++) {
      tags[i].style.animationDelay = (i * 0.3) + "s";
    }
  }

  // ========================================================================
  // INIT — try-catch isolates each function
  // ========================================================================
  function init() {
    var fns = [
      ["NeuralCanvas",  initNeuralCanvas],
      ["HeroScroll",    initHeroScroll],
      ["TypingEffect",  initTypingEffect],
      ["Counters",      initCounters],
      ["BentoReveal",   initBentoReveal],
      ["ScrollReveal",  initScrollReveal],
      ["CursorGlow",    initCursorGlow],
      ["CardTilt",      initCardTilt],
      ["FloatingTags",  initFloatingTags]
    ];

    for (var i = 0; i < fns.length; i++) {
      try {
        fns[i][1]();
      } catch (err) {
        console.warn("[homepage-effects] " + fns[i][0] + " failed:", err);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();