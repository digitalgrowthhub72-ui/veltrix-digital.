(function () {
  'use strict';
  var D = window.VELTRIX || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function waLink(msg) { return 'https://wa.me/' + D.whatsapp + '?text=' + encodeURIComponent(msg || D.defaultMessage); }

  /* ---------- Contact links ---------- */
  $$('[data-wa]').forEach(function (a) {
    a.href = waLink(a.getAttribute('data-msg'));
    a.target = '_blank'; a.rel = 'noopener';
  });
  $$('[data-ig]').forEach(function (a) { a.href = D.instagram; });
  $$('[data-up]').forEach(function (a) { a.href = D.upwork; });
  $$('[data-book]').forEach(function (a) { a.href = D.booking.replace('?gv=true', ''); a.target = '_blank'; a.rel = 'noopener'; });
  var bf = $('#bookFrame'); if (bf) bf.src = D.booking;
  $$('[data-fb]').forEach(function (a) { a.href = D.facebook; });
  $$('[data-mail]').forEach(function (a) { a.href = 'mailto:' + D.email + '?subject=' + encodeURIComponent('Website enquiry'); });
  var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Services ---------- */
  var services = [
    ['i-monitor', 'Website Design', 'Modern websites that communicate your business clearly and professionally.'],
    ['i-refresh', 'Website Redesign', 'Give an outdated website a fresh, more user-friendly experience.'],
    ['i-layout', 'Landing Page Design', 'Focused pages for a specific product, service or campaign.'],
    ['i-phone', 'Responsive Web Design', 'Websites that work properly on phones, tablets and computers.'],
    ['i-layers', 'Website Setup & Structure', 'Organised pages, content and navigation for a better user experience.'],
    ['i-search', 'Basic SEO', 'Simple, solid practices that help improve your website’s visibility.'],
    ['i-chart', 'Digital Marketing Support', 'Connecting your website with your wider online marketing activities.'],
    ['i-pen', 'Visual & Brand Design', 'Supporting visuals that keep your brand looking professional.']
  ];
  var sg = $('#servicesGrid');
  if (sg) {
    sg.innerHTML = services.map(function (s, i) {
      var msg = 'Hello Ayuba, I\'m interested in ' + s[1] + ' for my business.';
      return '<a class="svc reveal" style="--d:' + (i % 4) * 0.08 + 's" href="' + waLink(msg) + '" target="_blank" rel="noopener">' +
        '<span class="svc__n">0' + (i + 1) + '</span>' +
        '<span class="svc__icon"><svg><use href="#' + s[0] + '"/></svg></span>' +
        '<h3>' + esc(s[1]) + '</h3><p>' + esc(s[2]) + '</p>' +
        '<span class="svc__link">Chat on WhatsApp <svg><use href="#i-arrow"/></svg></span></a>';
    }).join('');
    $$('.svc', sg).forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---------- Portfolio ---------- */
  var pg = $('#portfolioGrid');
  if (pg && D.portfolio) {
    pg.innerHTML = D.portfolio.map(function (p, i) {
      var media = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">'
        : '<div class="work__ph"><svg><use href="#i-image"/></svg><span>Project image coming soon</span></div>';
      return '<article class="work reveal" style="--d:' + (i % 3) * 0.1 + 's" data-cat="' + esc(p.category) + '" data-img="' + esc(p.image) + '" data-link="' + esc(p.link) + '" data-title="' + esc(p.title) + '" tabindex="0">' +
        media +
        '<span class="work__open"><svg><use href="#i-ext"/></svg></span>' +
        '<div class="work__info"><span class="work__tag">' + esc(p.category) + '</span><h3>' + esc(p.title) + '</h3><p>' + esc(p.description) + '</p></div></article>';
    }).join('');

    var lb = $('#lightbox'), lbImg = $('img', lb), lbP = $('p', lb);
    function closeLb() { lb.classList.remove('show'); setTimeout(function () { lb.hidden = true; }, 300); }
    $('.lightbox__close', lb).addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });
    function openWork(w) {
      var link = w.getAttribute('data-link'), img = w.getAttribute('data-img');
      if (link) { window.open(link, '_blank', 'noopener'); return; }
      if (img) {
        lbImg.src = img; lbImg.alt = w.getAttribute('data-title'); lbP.textContent = w.getAttribute('data-title');
        lb.hidden = false; requestAnimationFrame(function () { lb.classList.add('show'); });
      }
    }
    $$('.work', pg).forEach(function (w) {
      w.addEventListener('click', function () { openWork(w); });
      w.addEventListener('keydown', function (e) { if (e.key === 'Enter') openWork(w); });
    });
    $$('#filters .chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        $$('#filters .chip').forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        var f = chip.getAttribute('data-filter');
        $$('.work', pg).forEach(function (w) {
          var show = f === 'All' || w.getAttribute('data-cat') === f;
          w.classList.toggle('is-hidden', !show);
          if (show) { w.classList.remove('in'); void w.offsetWidth; w.classList.add('in'); }
        });
      });
    });
  }

  /* ---------- Testimonials ---------- */
  var track = $('#sliderTrack');
  if (track && D.testimonials) {
    track.innerHTML = D.testimonials.map(function (t) {
      var initials = t.name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase();
      var av = t.photo ? '<img src="' + esc(t.photo) + '" alt="' + esc(t.name) + '">' : esc(initials);
      var stars = '<svg><use href="#i-star"/></svg>'.repeat(5);
      return '<article class="tcard"><div class="tcard__stars" aria-label="5 out of 5 stars">' + stars + '</div>' +
        '<blockquote>“' + esc(t.quote) + '”</blockquote>' +
        '<div class="tcard__who"><span class="avatar">' + av + '</span><div><b>' + esc(t.name) + '</b><small>' + esc(t.role) + ', ' + esc(t.business) + '</small></div></div></article>';
    }).join('');
    var slides = D.testimonials.length, idx = 0, timer;
    var dots = $('#dots');
    dots.innerHTML = D.testimonials.map(function (_, i) { return '<button aria-label="Show testimonial ' + (i + 1) + '"></button>'; }).join('');
    var dotEls = $$('button', dots);
    function go(i) {
      idx = (i + slides) % slides;
      track.style.transform = 'translateX(' + (-100 * idx) + '%)';
      dotEls.forEach(function (d, k) { d.classList.toggle('is-active', k === idx); });
    }
    function auto() { clearInterval(timer); if (!reduce && slides > 1) timer = setInterval(function () { go(idx + 1); }, 6500); }
    dotEls.forEach(function (d, k) { d.addEventListener('click', function () { go(k); auto(); }); });
    $('#prev').addEventListener('click', function () { go(idx - 1); auto(); });
    $('#next').addEventListener('click', function () { go(idx + 1); auto(); });
    var sx = null, sl = $('#slider');
    sl.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    sl.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) { go(idx + (dx < 0 ? 1 : -1)); auto(); }
      sx = null;
    });
    sl.addEventListener('mouseenter', function () { clearInterval(timer); });
    sl.addEventListener('mouseleave', auto);
    go(0); auto();
  }

  /* ---------- FAQ accordion ---------- */
  $$('.acc__item').forEach(function (item) {
    var q = $('.acc__q', item);
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      $$('.acc__item.open').forEach(function (o) { o.classList.remove('open'); $('.acc__q', o).setAttribute('aria-expanded', 'false'); });
      if (!open) { item.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
    });
  });

  /* ---------- Marquee (seamless loop) ---------- */
  var row = $('#marqueeRow');
  if (row) { var c = row.cloneNode(true); c.removeAttribute('id'); c.setAttribute('aria-hidden', 'true'); row.parentNode.appendChild(c); }

  /* ---------- Reveal on scroll ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); if (e.target.querySelector('[data-count]')) counters(e.target); } });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }) : null;
  $$('.reveal, #steps').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });

  function counters(scope) {
    $$('[data-count]', scope).forEach(function (el) {
      var end = +el.getAttribute('data-count'), t0 = null;
      if (reduce) { el.textContent = end; return; }
      (function step(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / 1400, 1), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased);
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
    });
    $$('[data-count]', scope).forEach(function (el) { if (!reduce) el.textContent = '0'; });
  }

  /* ---------- Nav: scroll state, active link, mobile menu, progress ---------- */
  var nav = $('#nav'), bar = $('#progress'), links = $('#navLinks'), burger = $('#burger');
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle('is-scrolled', y > 30);
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    $$('[data-parallax]').forEach(function (o) { o.style.transform = 'translate3d(0,' + (y * o.getAttribute('data-parallax')) + 'px,0)'; });
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  function closeMenu() { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', String(o));
  });
  $$('a', links).forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) closeMenu(); });

  var sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'faq', 'book', 'contact'].map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          $$('a', links).forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { so.observe(s); });
  }

  /* ---------- Hero tilt + magnetic buttons ---------- */
  var tilt = $('#tilt');
  if (tilt && fine && !reduce) {
    var hv = tilt.parentNode;
    hv.addEventListener('pointermove', function (e) {
      var r = hv.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = 'perspective(900px) rotateY(' + x * 7 + 'deg) rotateX(' + (-y * 5) + 'deg) translateZ(0)';
    });
    hv.addEventListener('pointerleave', function () { tilt.style.transform = ''; });
  }
  if (fine && !reduce) {
    $$('.magnetic').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.18) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.28 - 3) + 'px)';
      });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
  }

  /* ---------- Contact form -> WhatsApp ---------- */
  var form = $('#waForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim(), service = form.service.value, msg = form.message.value.trim();
      var err = $('#formError');
      if (!name) { err.textContent = 'Please enter your name so I know who I’m talking to.'; form.name.focus(); return; }
      err.textContent = '';
      var text = 'Hello Ayuba, my name is ' + name + '.' +
        (service && service !== 'Not sure yet' ? '\nI\'m interested in: ' + service + '.' : '') +
        (msg ? '\n\nAbout my business:\n' + msg : '');
      window.open(waLink(text), '_blank', 'noopener');
    });
  }
})();
