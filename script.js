/* ═══════════════════════════════════════════════════════════
   GSPA — SaaS Landing Page JavaScript
   Loader · Theme · Navbar · Burger · Reveal · Ripple
   Counter · ScrollTop · ActiveNav · Spotlight · StatBars · CarTilt
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initTheme();
    initNavbar();
    initBurger();
    initReveal();
    initRipple();
    initCounters();
    initScrollTop();
    initActiveNav();
    initCursorSpotlight();
    initStatBars();
    initCarTilt();
    initTypewriter();
    I18N.init();
});

/* ── 1. Loader ──────────────────────────────────────────── */
function initLoader() {
    const loader = document.getElementById('loader');
    const fill = document.getElementById('loaderFill');
    const percent = document.getElementById('loaderPercent');
    let w = 0;

    document.body.style.overflow = 'hidden';

    const iv = setInterval(() => {
        w += Math.random() * 5 + 2;
        if (w >= 100) {
            w = 100;
            clearInterval(iv);
            setTimeout(() => {
                loader.classList.add('done');
                document.body.style.overflow = '';
            }, 350);
        }
        fill.style.width = w + '%';
        if (percent) {
            percent.textContent = Math.floor(w) + '%';
        }
    }, 30);
}

/* ── 2. Dark / Light Toggle ─────────────────────────────── */
function initTheme() {
    const btn = document.getElementById('themeBtn');
    const html = document.documentElement;

    const saved = localStorage.getItem('gspa-theme');
    if (saved) html.setAttribute('data-theme', saved);

    btn.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        localStorage.setItem('gspa-theme', next);
    });
}

/* ── 3. Sticky Nav ──────────────────────────────────────── */
function initNavbar() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
}

/* ── 4. Mobile Menu ─────────────────────────────────────── */
function initBurger() {
    const btn = document.getElementById('burger');
    const menu = document.getElementById('navMenu');

    btn.addEventListener('click', () => {
        btn.classList.toggle('on');
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    menu.querySelectorAll('.nav-item').forEach(a => {
        a.addEventListener('click', () => {
            btn.classList.remove('on');
            menu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

/* ── 5. Scroll Reveal (IntersectionObserver) ────────────── */
function initReveal() {
    const els = document.querySelectorAll('.reveal');

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
}

/* ── 6. Button Ripple ───────────────────────────────────── */
function initRipple() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const old = this.querySelector('.ripple');
            if (old) old.remove();

            
            const s = document.createElement('span');
            s.classList.add('ripple');
            const r = this.getBoundingClientRect();
            const sz = Math.max(r.width, r.height) * 2;

            Object.assign(s.style, {
                width: sz + 'px', height: sz + 'px',
                left: (e.clientX - r.left - sz / 2) + 'px',
                top: (e.clientY - r.top - sz / 2) + 'px',
            });

            this.appendChild(s);
            s.addEventListener('animationend', () => s.remove());
        });
    });
}

/* ── 7. Number Counters ─────────────────────────────────── */
function initCounters() {
    const nums = document.querySelectorAll('[data-count]');

    nums.forEach(el => {
        // Find closest parent that has a reveal animation
        const revealParent = el.closest('.reveal');

        if (revealParent && !revealParent.classList.contains('in')) {
            // Parent is still hidden — wait for the reveal to complete
            const mo = new MutationObserver(() => {
                if (revealParent.classList.contains('in')) {
                    mo.disconnect();
                    // Small delay so the fade-in is visible before count starts
                    setTimeout(() => runCount(el), 200);
                }
            });
            mo.observe(revealParent, { attributes: true, attributeFilter: ['class'] });
        } else {
            // Already visible or no reveal parent — use IntersectionObserver
            const obs = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        runCount(e.target);
                        obs.unobserve(e.target);
                    }
                });
            }, { threshold: 0.5 });
            obs.observe(el);
        }
    });
}

function runCount(el) {
    if (el.dataset.counted) return; // prevent double-counting
    el.dataset.counted = 'true';

    const target = +el.dataset.count;
    const dur = 2000;
    let start = null;

    function formatNum(n) {
        return n >= 1000 ? n.toLocaleString('en-US') : String(n);
    }

    function tick(now) {
        if (!start) start = now;
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        el.textContent = formatNum(Math.floor(eased * target));
        if (t < 1) {
            requestAnimationFrame(tick);
        } else {
            el.textContent = formatNum(target);
        }
    }

    requestAnimationFrame(tick);
}

/* ── 8. Scroll-to-Top ───────────────────────────────────── */
function initScrollTop() {
    const btn = document.getElementById('totop');

    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ── 9. Active Nav Link ─────────────────────────────────── */
function initActiveNav() {
    const secs = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-item');

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = e.target.id;
                links.forEach(l => l.classList.toggle('active', l.dataset.sec === id));
            }
        });
    }, { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' });

    secs.forEach(s => obs.observe(s));
}

/* ── 10. Cursor Spotlight ───────────────────────────────── */
function initCursorSpotlight() {
    const spot = document.getElementById('cursorSpotlight');
    if (!spot) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    let raf;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        if (!spot.classList.contains('active')) spot.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        spot.classList.remove('active');
    });

    function lerp(a, b, f) { return a + (b - a) * f; }

    function animate() {
        cx = lerp(cx, mx, 0.12);
        cy = lerp(cy, my, 0.12);
        spot.style.left = cx + 'px';
        spot.style.top = cy + 'px';
        raf = requestAnimationFrame(animate);
    }
    animate();
}

/* ── 11. Stat Bar Fill Animation ────────────────────────── */
function initStatBars() {
    const cards = document.querySelectorAll('.stat-card');

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(c => obs.observe(c));
}

/* ── 12. 3D Car Card Tilt ───────────────────────────────── */
function initCarTilt() {
    const cards = document.querySelectorAll('.car-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/* ── 13. GSAP Typewriter Effect ─────────────────────────── */
function initTypewriter() {
    gsap.registerPlugin(TextPlugin);
    
    // Type out the text with HTML tags over 2.5 seconds
    // Small delay to allow the hero section to fade in first
    setTimeout(() => {
        // Use current language headline if i18n is loaded
        let headline = "Ship faster.<br><span class='accent'>Scale smarter.</span>";
        if (typeof I18N !== 'undefined') {
            const lang = I18N.getCurrentLang();
            const headlines = {
                en: "Ship faster.<br><span class='accent'>Scale smarter.</span>",
                lo: "ສົ່ງໄວຂຶ້ນ.<br><span class='accent'>ຂະຫຍາຍສະຫລາດຂຶ້ນ.</span>",
                th: "ส่งเร็วขึ้น.<br><span class='accent'>ขยายฉลาดขึ้น.</span>"
            };
            headline = headlines[lang] || headline;
        }
        gsap.to(".hero-typewriter", {
            text: headline,
            duration: 2.5,
            ease: "none"
        });
    }, 600);
}
