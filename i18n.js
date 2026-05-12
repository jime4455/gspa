/* ═══════════════════════════════════════════════════════════
   GSPA — Internationalization (i18n) System
   Languages: English 🇺🇸 · Lao 🇱🇦 · Thai 🇹🇭
   Features: Auto-detect · Animated transitions · Persistence
   ═══════════════════════════════════════════════════════════ */

const I18N = (() => {

    /* ── Translation Data ──────────────────────────────────── */
    const translations = {
        en: {
            _meta: { flagClass: 'fi fi-us', code: 'EN', name: 'English' },
            // Nav
            'nav.features': 'Features',
            'nav.product': 'Product',
            'nav.testimonials': 'Testimonials',
            'nav.pricing': 'Pricing',
            'nav.cta': 'Get Started',
            // Hero
            'hero.pill': 'Now in Public Beta',
            'hero.headline': "Ship faster.<br><span class='accent'>Scale smarter.</span>",
            'hero.desc': 'The modern platform for teams who build. Collaborate in real-time, deploy with confidence, and grow without limits.',
            'hero.cta1': 'Start for Free',
            'hero.cta2': 'Watch Demo',
            'hero.note': 'No credit card required · Free plan available',
            // Logos
            'logos.label': 'Trusted by teams at',
            // Stats
            'stats.users': 'Active Users',
            'stats.api': 'API Requests / Day',
            'stats.uptime': 'Uptime SLA',
            'stats.countries': 'Countries Served',
            // Features
            'features.tag': 'Features',
            'features.title': 'Everything you need to ship',
            'features.desc': 'Powerful tools, beautiful defaults, and an experience your team will love.',
            'features.f1.title': 'Real-time Dashboard',
            'features.f1.desc': 'Monitor all your metrics in a beautiful, live-updating interface.',
            'features.f2.title': 'Team Collaboration',
            'features.f2.desc': 'Work together seamlessly with comments, mentions, and shared views.',
            'features.f3.title': 'Advanced Analytics',
            'features.f3.desc': 'Deep insights into performance with custom reports and alerts.',
            'features.f4.title': 'Enterprise Security',
            'features.f4.desc': 'SOC 2, SSO, role-based access, and audit logs out of the box.',
            'features.f5.title': 'Lightning Fast',
            'features.f5.desc': 'Built on edge infrastructure. Sub-100ms response times globally.',
            'features.f6.title': 'Developer API',
            'features.f6.desc': 'RESTful & GraphQL APIs with SDKs for every major language.',
            // Product Showcase
            'product.tag': 'Showcase',
            'product.title': 'Built for Performance',
            'product.desc': 'Experience next-level speed, precision, and design across every product.',
            // Testimonials
            'testimonials.tag': 'Testimonials',
            'testimonials.title': 'Loved by teams worldwide',
            'testimonials.desc': 'See what developers and product teams are saying about GSPA.',
            // Pricing
            'pricing.tag': 'Pricing',
            'pricing.title': 'Simple, transparent pricing',
            'pricing.desc': "Start free, upgrade when you're ready. No surprises.",
            'pricing.badge': 'Most Popular',
            'pricing.starter.name': 'Starter',
            'pricing.starter.desc': 'For individuals and side projects',
            'pricing.starter.cta': 'Get Started Free',
            'pricing.pro.name': 'Pro',
            'pricing.pro.desc': 'For growing teams and startups',
            'pricing.pro.cta': 'Start Free Trial',
            'pricing.enterprise.name': 'Enterprise',
            'pricing.enterprise.desc': 'For large organizations',
            'pricing.enterprise.cta': 'Contact Sales',
            // CTA
            'cta.title': 'Ready to build something great?',
            'cta.desc': 'Join thousands of teams already shipping with GSPA. Start free today.',
            'cta.btn1': 'Get Started Free',
            'cta.btn2': 'Talk to Sales',
            // Footer
            'footer.product': 'Product',
            'footer.changelog': 'Changelog',
            'footer.roadmap': 'Roadmap',
            'footer.company': 'Company',
            'footer.about': 'About',
            'footer.blog': 'Blog',
            'footer.careers': 'Careers',
            'footer.contact': 'Contact',
            'footer.legal': 'Legal',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',
            'footer.security': 'Security',
        },

        lo: {
            _meta: { flagClass: 'fi fi-la', code: 'LO', name: 'ລາວ' },
            // Nav
            'nav.features': 'ຄຸນສົມບັດ',
            'nav.product': 'ຜະລິດຕະພັນ',
            'nav.testimonials': 'ຄຳຊົມເຊີຍ',
            'nav.pricing': 'ລາຄາ',
            'nav.cta': 'ເລີ່ມຕົ້ນ',
            // Hero
            'hero.pill': 'ເປີດໃຫ້ທົດລອງແລ້ວ',
            'hero.headline': "ສົ່ງໄວຂຶ້ນ.<br><span class='accent'>ຂະຫຍາຍສະຫລາດຂຶ້ນ.</span>",
            'hero.desc': 'ແພລດຟອມທັນສະໄໝສຳລັບທີມທີ່ສ້າງ. ຮ່ວມມືໃນເວລາຈິງ, ນຳໃຊ້ດ້ວຍຄວາມໝັ້ນໃຈ, ແລະ ເຕີບໂຕໂດຍບໍ່ມີຂີດຈຳກັດ.',
            'hero.cta1': 'ເລີ່ມຟຣີ',
            'hero.cta2': 'ເບິ່ງຕົວຢ່າງ',
            'hero.note': 'ບໍ່ຕ້ອງການບັດເຄຣດິດ · ແຜນຟຣີມີໃຫ້',
            // Logos
            'logos.label': 'ໄດ້ຮັບຄວາມໄວ້ວາງໃຈຈາກທີມງານ',
            // Stats
            'stats.users': 'ຜູ້ໃຊ້ງານ',
            'stats.api': 'ຄຳຮ້ອງ API / ມື້',
            'stats.uptime': 'SLA ເວລາເປີດໃຫ້ບໍລິການ',
            'stats.countries': 'ປະເທດທີ່ໃຫ້ບໍລິການ',
            // Features
            'features.tag': 'ຄຸນສົມບັດ',
            'features.title': 'ທຸກຢ່າງທີ່ເຈົ້າຕ້ອງການ',
            'features.desc': 'ເຄື່ອງມືທີ່ມີປະສິດທິພາບ, ຄ່າເລີ່ມຕົ້ນທີ່ສວຍງາມ, ແລະ ປະສົບການທີ່ທີມຂອງເຈົ້າຈະຮັກ.',
            'features.f1.title': 'ແດດບອດເວລາຈິງ',
            'features.f1.desc': 'ຕິດຕາມຕົວວັດທັງໝົດໃນການໂຕ້ຕອບທີ່ສວຍງາມ ແລະ ອັບເດດສົດ.',
            'features.f2.title': 'ການຮ່ວມມືທີມ',
            'features.f2.desc': 'ເຮັດວຽກຮ່ວມກັນຢ່າງລື່ນໄຫຼ ດ້ວຍຄຳເຫັນ, ການກ່າວເຖິງ, ແລະ ມຸມມອງຮ່ວມ.',
            'features.f3.title': 'ການວິເຄາະຂັ້ນສູງ',
            'features.f3.desc': 'ຂໍ້ມູນເຈາະເລິກກ່ຽວກັບປະສິດທິພາບ ພ້ອມລາຍງານ ແລະ ການແຈ້ງເຕືອນ.',
            'features.f4.title': 'ຄວາມປອດໄພລະດັບອົງກອນ',
            'features.f4.desc': 'SOC 2, SSO, ການຄວບຄຸມການເຂົ້າເຖິງ ແລະ ບັນທຶກກວດສອບ.',
            'features.f5.title': 'ໄວສາຍຟ້າ',
            'features.f5.desc': 'ສ້າງເທິງໂຄງສ້າງ edge. ເວລາຕອບສະໜອງຕ່ຳກວ່າ 100ms ທົ່ວໂລກ.',
            'features.f6.title': 'API ນັກພັດທະນາ',
            'features.f6.desc': 'RESTful & GraphQL APIs ພ້ອມ SDK ສຳລັບທຸກພາສາຫຼັກ.',
            // Product Showcase
            'product.tag': 'ສະແດງ',
            'product.title': 'ສ້າງເພື່ອປະສິດທິພາບ',
            'product.desc': 'ສຳຜັດຄວາມໄວ, ຄວາມແມ່ນຍຳ, ແລະ ການອອກແບບລະດັບຕໍ່ໄປ.',
            // Testimonials
            'testimonials.tag': 'ຄຳຊົມເຊີຍ',
            'testimonials.title': 'ເປັນທີ່ຮັກຈາກທົ່ວໂລກ',
            'testimonials.desc': 'ເບິ່ງສິ່ງທີ່ນັກພັດທະນາ ແລະ ທີມຜະລິດຕະພັນເວົ້າກ່ຽວກັບ GSPA.',
            // Pricing
            'pricing.tag': 'ລາຄາ',
            'pricing.title': 'ລາຄາງ່າຍໆ ໂປ່ງໃສ',
            'pricing.desc': 'ເລີ່ມຟຣີ, ອັບເກຣດເມື່ອພ້ອມ. ບໍ່ມີຄ່າໃຊ້ຈ່າຍແຝງ.',
            'pricing.badge': 'ນິຍົມສຸດ',
            'pricing.starter.name': 'ເລີ່ມຕົ້ນ',
            'pricing.starter.desc': 'ສຳລັບບຸກຄົນ ແລະ ໂຄງການຂ້າງ',
            'pricing.starter.cta': 'ເລີ່ມຟຣີ',
            'pricing.pro.name': 'ໂປຣ',
            'pricing.pro.desc': 'ສຳລັບທີມທີ່ເຕີບໂຕ ແລະ ສະຕາດອັບ',
            'pricing.pro.cta': 'ທົດລອງຟຣີ',
            'pricing.enterprise.name': 'ອົງກອນ',
            'pricing.enterprise.desc': 'ສຳລັບອົງກອນໃຫຍ່',
            'pricing.enterprise.cta': 'ຕິດຕໍ່ຝ່າຍຂາຍ',
            // CTA
            'cta.title': 'ພ້ອມສ້າງສິ່ງທີ່ຍິ່ງໃຫຍ່ບໍ?',
            'cta.desc': 'ເຂົ້າຮ່ວມກັບທີມນັບພັນທີ່ໃຊ້ GSPA. ເລີ່ມຟຣີມື້ນີ້.',
            'cta.btn1': 'ເລີ່ມຟຣີ',
            'cta.btn2': 'ລົມກັບຝ່າຍຂາຍ',
            // Footer
            'footer.product': 'ຜະລິດຕະພັນ',
            'footer.changelog': 'ບັນທຶກການປ່ຽນແປງ',
            'footer.roadmap': 'ແຜນງານ',
            'footer.company': 'ບໍລິສັດ',
            'footer.about': 'ກ່ຽວກັບ',
            'footer.blog': 'ບລັອກ',
            'footer.careers': 'ອາຊີບ',
            'footer.contact': 'ຕິດຕໍ່',
            'footer.legal': 'ກົດໝາຍ',
            'footer.privacy': 'ຄວາມເປັນສ່ວນຕົວ',
            'footer.terms': 'ເງື່ອນໄຂ',
            'footer.security': 'ຄວາມປອດໄພ',
        },

        th: {
            _meta: { flagClass: 'fi fi-th', code: 'TH', name: 'ไทย' },
            // Nav
            'nav.features': 'คุณสมบัติ',
            'nav.product': 'ผลิตภัณฑ์',
            'nav.testimonials': 'รีวิว',
            'nav.pricing': 'ราคา',
            'nav.cta': 'เริ่มต้น',
            // Hero
            'hero.pill': 'เปิดให้ทดลองแล้ว',
            'hero.headline': "ส่งเร็วขึ้น.<br><span class='accent'>ขยายฉลาดขึ้น.</span>",
            'hero.desc': 'แพลตฟอร์มทันสมัยสำหรับทีมที่สร้าง ทำงานร่วมกันแบบเรียลไทม์ ปรับใช้อย่างมั่นใจ และเติบโตอย่างไร้ขีดจำกัด',
            'hero.cta1': 'เริ่มฟรี',
            'hero.cta2': 'ดูตัวอย่าง',
            'hero.note': 'ไม่ต้องใช้บัตรเครดิต · มีแผนฟรี',
            // Logos
            'logos.label': 'ได้รับความไว้วางใจจากทีมงาน',
            // Stats
            'stats.users': 'ผู้ใช้งาน',
            'stats.api': 'คำขอ API / วัน',
            'stats.uptime': 'SLA เวลาทำงาน',
            'stats.countries': 'ประเทศที่ให้บริการ',
            // Features
            'features.tag': 'คุณสมบัติ',
            'features.title': 'ทุกสิ่งที่คุณต้องการ',
            'features.desc': 'เครื่องมืออันทรงพลัง ค่าเริ่มต้นที่สวยงาม และประสบการณ์ที่ทีมคุณจะรัก',
            'features.f1.title': 'แดชบอร์ดเรียลไทม์',
            'features.f1.desc': 'ติดตามตัวชี้วัดทั้งหมดในอินเทอร์เฟซที่สวยงามและอัปเดตสด',
            'features.f2.title': 'การทำงานร่วมกัน',
            'features.f2.desc': 'ทำงานร่วมกันอย่างราบรื่นด้วยความคิดเห็น การกล่าวถึง และมุมมองร่วม',
            'features.f3.title': 'การวิเคราะห์ขั้นสูง',
            'features.f3.desc': 'ข้อมูลเชิงลึกเกี่ยวกับประสิทธิภาพ พร้อมรายงานและการแจ้งเตือน',
            'features.f4.title': 'ความปลอดภัยระดับองค์กร',
            'features.f4.desc': 'SOC 2, SSO, การควบคุมการเข้าถึง และบันทึกการตรวจสอบ',
            'features.f5.title': 'เร็วสายฟ้า',
            'features.f5.desc': 'สร้างบนโครงสร้าง edge เวลาตอบสนองต่ำกว่า 100ms ทั่วโลก',
            'features.f6.title': 'API นักพัฒนา',
            'features.f6.desc': 'RESTful & GraphQL APIs พร้อม SDK สำหรับทุกภาษาหลัก',
            // Product Showcase
            'product.tag': 'แสดง',
            'product.title': 'สร้างเพื่อประสิทธิภาพ',
            'product.desc': 'สัมผัสความเร็ว ความแม่นยำ และการออกแบบระดับถัดไป',
            // Testimonials
            'testimonials.tag': 'รีวิว',
            'testimonials.title': 'เป็นที่รักจากทั่วโลก',
            'testimonials.desc': 'ดูสิ่งที่นักพัฒนาและทีมผลิตภัณฑ์พูดเกี่ยวกับ GSPA',
            // Pricing
            'pricing.tag': 'ราคา',
            'pricing.title': 'ราคาเรียบง่าย โปร่งใส',
            'pricing.desc': 'เริ่มฟรี อัปเกรดเมื่อพร้อม ไม่มีค่าใช้จ่ายแอบแฝง',
            'pricing.badge': 'ยอดนิยม',
            'pricing.starter.name': 'เริ่มต้น',
            'pricing.starter.desc': 'สำหรับบุคคลและโปรเจกต์เสริม',
            'pricing.starter.cta': 'เริ่มฟรี',
            'pricing.pro.name': 'โปร',
            'pricing.pro.desc': 'สำหรับทีมที่เติบโตและสตาร์ทอัพ',
            'pricing.pro.cta': 'ทดลองฟรี',
            'pricing.enterprise.name': 'องค์กร',
            'pricing.enterprise.desc': 'สำหรับองค์กรขนาดใหญ่',
            'pricing.enterprise.cta': 'ติดต่อฝ่ายขาย',
            // CTA
            'cta.title': 'พร้อมสร้างสิ่งที่ยิ่งใหญ่?',
            'cta.desc': 'เข้าร่วมกับทีมนับพันที่ใช้ GSPA เริ่มฟรีวันนี้',
            'cta.btn1': 'เริ่มฟรี',
            'cta.btn2': 'พูดคุยกับฝ่ายขาย',
            // Footer
            'footer.product': 'ผลิตภัณฑ์',
            'footer.changelog': 'บันทึกการเปลี่ยนแปลง',
            'footer.roadmap': 'แผนงาน',
            'footer.company': 'บริษัท',
            'footer.about': 'เกี่ยวกับ',
            'footer.blog': 'บล็อก',
            'footer.careers': 'อาชีพ',
            'footer.contact': 'ติดต่อ',
            'footer.legal': 'กฎหมาย',
            'footer.privacy': 'ความเป็นส่วนตัว',
            'footer.terms': 'ข้อกำหนด',
            'footer.security': 'ความปลอดภัย',
        }
    };

    const SUPPORTED = ['en', 'lo', 'th'];
    let currentLang = 'en';

    /* ── Detect browser language ───────────────────────────── */
    function detectLang() {
        const saved = localStorage.getItem('gspa-lang');
        if (saved && SUPPORTED.includes(saved)) return saved;

        const nav = navigator.language || navigator.userLanguage || '';
        const code = nav.split('-')[0].toLowerCase();
        if (SUPPORTED.includes(code)) return code;

        return 'en';
    }

    /* ── Apply translations with animation ─────────────────── */
    function applyTranslations(lang, animate) {
        const t = translations[lang];
        if (!t) return;

        const els = document.querySelectorAll('[data-i18n]');

        if (animate) {
            // Phase 1: fade out
            els.forEach(el => el.classList.add('i18n-fade'));

            setTimeout(() => {
                // Phase 2: swap text
                els.forEach(el => {
                    const key = el.dataset.i18n;
                    if (t[key] !== undefined) el.textContent = t[key];
                });
                // Phase 3: fade in
                els.forEach(el => el.classList.remove('i18n-fade'));
            }, 250);
        } else {
            // No animation (initial load)
            els.forEach(el => {
                const key = el.dataset.i18n;
                if (t[key] !== undefined) el.textContent = t[key];
            });
        }

        // Update typewriter if available
        if (animate && typeof initTypewriter === 'function') {
            const tw = document.querySelector('.hero-typewriter');
            if (tw) tw.innerHTML = '';
            setTimeout(() => {
                gsap.to(".hero-typewriter", {
                    text: t['hero.headline'] || "Ship faster.<br><span class='accent'>Scale smarter.</span>",
                    duration: 2.5,
                    ease: "none"
                });
            }, animate ? 350 : 0);
        }

        // Update HTML lang & data-lang
        document.documentElement.lang = lang;
        document.documentElement.dataset.lang = lang;

        // Update the button display
        const meta = t._meta;
        const flagEl = document.getElementById('langFlag');
        const codeEl = document.getElementById('langCode');
        if (flagEl) flagEl.innerHTML = '<span class="' + meta.flagClass + '"></span>';
        if (codeEl) codeEl.textContent = meta.code;

        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        currentLang = lang;
        localStorage.setItem('gspa-lang', lang);
    }

    /* ── Init language switcher ─────────────────────────────── */
    function init() {
        const switcher = document.getElementById('langSwitcher');
        const btn = document.getElementById('langBtn');
        const dropdown = document.getElementById('langDropdown');
        if (!switcher || !btn) return;

        // Toggle dropdown
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            switcher.classList.toggle('open');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!switcher.contains(e.target)) {
                switcher.classList.remove('open');
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') switcher.classList.remove('open');
        });

        // Option click
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.dataset.lang;
                if (lang !== currentLang) {
                    applyTranslations(lang, true);
                }
                switcher.classList.remove('open');
            });
        });

        // Auto-detect & apply on load
        const detected = detectLang();
        applyTranslations(detected, false);
    }

    return { init, applyTranslations, getCurrentLang: () => currentLang };
})();
