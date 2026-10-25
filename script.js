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

  /* ---------- Let's talk modal ---------- */
  var talk = $('#talk'), lastFocus = null;
  function openTalk(msg) {
    var text = msg || D.defaultMessage;
    $('#talkWa').href = waLink(text);
    $('#talkMail').href = 'mailto:' + D.email + '?subject=' + encodeURIComponent('Website enquiry') + '&body=' + encodeURIComponent(text);
    $('#talkUp').href = D.upwork;
    lastFocus = document.activeElement;
    talk.hidden = false;
    requestAnimationFrame(function () { talk.classList.add('show'); $('.talk__close', talk).focus(); });
    document.body.style.overflow = 'hidden';
  }
  function closeTalk() {
    talk.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(function () { talk.hidden = true; }, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (talk) {
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-talk]');
      if (t) { e.preventDefault(); closeMenuSafe(); openTalk(t.getAttribute('data-msg')); }
      else if (e.target === talk || e.target.closest('.talk__close')) closeTalk();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !talk.hidden) closeTalk(); });
  }
  function closeMenuSafe() { var l = $('#navLinks'), b = $('#burger'); if (l) l.classList.remove('open'); if (b) b.setAttribute('aria-expanded', 'false'); }

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
      return '<a class="svc reveal" style="--d:' + (i % 4) * 0.08 + 's" href="#" data-talk data-msg="' + esc(msg) + '">' +
        '<span class="svc__n">0' + (i + 1) + '</span>' +
        '<span class="svc__icon"><svg><use href="#' + s[0] + '"/></svg></span>' +
        '<h3>' + esc(s[1]) + '</h3><p>' + esc(s[2]) + '</p>' +
        '<span class="svc__link">Let’s talk <svg><use href="#i-arrow"/></svg></span></a>';
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
        ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy" style="object-position:' + esc(p.position || 'center') + '">'
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
        lbImg.onload = function () { lb.classList.toggle('tall', lbImg.naturalHeight / lbImg.naturalWidth > 1.3); };
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

  /* ---------- Testimonials carousel ---------- */
  var stage = $('#tmStage');
  if (stage && D.testimonials && D.testimonials.length) {
    var T = D.testimonials, n = T.length, cur = 0;
    stage.innerHTML = T.map(function (t, i) {
      var photo = t.photo ? '<img src="' + esc(t.photo) + '" alt="' + esc(t.name) + '">' : '<svg aria-hidden="true"><use href="#i-user"/></svg>';
      var label = [t.role, t.business].filter(Boolean).map(esc).join(' · ');
      var stars = '';
      if (t.rating && t.rating >= 1 && t.rating <= 5) {
        stars = '<div class="tm__stars" role="img" aria-label="Rated ' + t.rating + ' out of 5">' + '<svg><use href="#i-star"/></svg>'.repeat(Math.round(t.rating)) + '</div>';
      }
      return '<article class="tm__card" data-i="' + i + '" role="group" aria-roledescription="slide" aria-label="Testimonial ' + (i + 1) + ' of ' + n + '">' +
        (t.placeholder !== false ? '<span class="tm__ph">Placeholder</span>' : '') +
        '<span class="tm__avatar">' + photo + '</span>' +
        '<h3 class="tm__name">' + esc(t.name) + '</h3>' +
        (label ? '<p class="tm__role">' + label + '</p>' : '') +
        '<span class="tm__q" aria-hidden="true">&rdquo;</span>' +
        '<blockquote>' + esc(t.quote) + '</blockquote>' + stars + '</article>';
    }).join('');
    var swiped = false;
    var cards = $$('.tm__card', stage);
    var dotsBox = $('#tmDots'), live = $('#tmLive'), tm = $('#tm');
    dotsBox.innerHTML = T.map(function (_, i) { return '<button type="button" aria-label="Show testimonial ' + (i + 1) + ' of ' + n + '"></button>'; }).join('');
    var dotEls = $$('button', dotsBox);

    function sizeStage() {
      var h = 0;
      cards.forEach(function (c) { h = Math.max(h, c.offsetHeight); });
      stage.style.height = (h + 120) + 'px';
    }
    function layout(announce) {
      cards.forEach(function (c, i) {
        var d = ((i - cur) % n + n) % n, pos;
        if (d === 0) pos = 'active';
        else if (n === 2) pos = 'next';
        else if (d === 1) pos = 'next';
        else if (d === n - 1) pos = 'prev';
        else pos = 'hidden';
        c.setAttribute('data-pos', pos);
        c.setAttribute('aria-hidden', pos === 'active' ? 'false' : 'true');
      });
      dotEls.forEach(function (d, k) {
        d.classList.toggle('is-active', k === cur);
        if (k === cur) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
      if (announce) live.textContent = 'Showing testimonial ' + (cur + 1) + ' of ' + n;
      sizeStage();
    }
    function go(i, announce) { cur = ((i % n) + n) % n; layout(announce !== false); }
    $('#tmPrev').addEventListener('click', function () { go(cur - 1); });
    $('#tmNext').addEventListener('click', function () { go(cur + 1); });
    dotEls.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
    cards.forEach(function (c, i) {
      c.addEventListener('click', function () { if (swiped) return; if (c.getAttribute('data-pos') !== 'active') go(i); });
      /* hover effect that also works on touch screens */
      var tmr;
      c.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'touch' || e.pointerType === 'pen') { c.classList.add('is-hover'); clearTimeout(tmr); tmr = setTimeout(function () { c.classList.remove('is-hover'); }, 1400); }
      });
    });
    tm.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1); }
      else if (e.key === 'Home') { e.preventDefault(); go(0); }
      else if (e.key === 'End') { e.preventDefault(); go(n - 1); }
    });
    var sx = null;
    stage.addEventListener('pointerdown', function (e) { sx = e.clientX; });
    stage.addEventListener('pointerup', function (e) {
      if (sx === null) return;
      var dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 45) { swiped = true; setTimeout(function () { swiped = false; }, 400); go(cur + (dx < 0 ? 1 : -1)); }
    });
    stage.addEventListener('pointercancel', function () { sx = null; });
    window.addEventListener('resize', sizeStage);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeStage);
    go(0, false);
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
  if ('IntersectionObserver' in window && !/page-/.test(document.body.className)) {
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

  /* ---------- Footer: quick WhatsApp message + back to top ---------- */
  var ff = $('#footForm');
  if (ff) ff.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = $('#footMsg').value.trim();
    window.open(waLink(m ? 'Hello Ayuba, ' + m : D.defaultMessage), '_blank', 'noopener');
  });
  $$('[data-top]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  });

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
