/* ===================================================
   R.I.T.M — MODERN STUDIO / script.js
   v3
=================================================== */

const translations = {
  fa: {
    status: "سیستم آنلاین",
    opsTerminal: "R.I.T.M // پایانه عملیات",
    tagline: "خدمات فریلنس // ادیت و طراحی وب",
    heroDesc: "خدمات ادیت ویدئو و برنامه‌نویسی وب با کیفیت بالا، پشتیبانی کامل و تحویل سریع. یکی از گزینه‌های زیر رو انتخاب کن و فرم پایین صفحه رو پر کن.",
    tgBtn: "عضویت در کانال تلگرام ↗",
    sec1: "خدمات ادیت ویدئو",
    sec2: "خدمات برنامه‌نویسی HTML",
    sec3: "ارسال ویدیوی اختصاصی",
    sec4: "ثبت سفارش",
    card1Tag: "پریمیر پرو",
    card1Title: "ادیت با Adobe Premiere Pro",
    card1Desc: "ادیت حرفه‌ای روی سیستم با نرم‌افزار پریمیر، کیفیت و دقت بالا.",
    card2Tag: "ادیت موبایل",
    card2Title: "ادیت با گوشی موبایل",
    card2Desc: "ادیت سریع و آماده برای انتشار، مناسب کلیپ‌های شبکه‌های اجتماعی.",
    card3Tag: "تک‌صفحه‌ای",
    card3Title: "طراحی تک‌صفحه HTML",
    card3Desc: "طراحی یک صفحه HTML اختصاصی به همراه آنلاین‌سازی کامل پروژه.",
    card4Tag: "پروژه کامل",
    card4Title: "پروژه کامل HTML + CSS + JS",
    card4Desc: "طراحی کامل پروژه با جاوااسکریپت و استایل اختصاصی، به همراه آنلاین‌سازی.",
    note: "⏳ مدت زمان انجام هر پروژه با توجه به حجم، پیچیدگی و جزئیات سفارش متفاوت است و پس از بررسی درخواست، زمان دقیق تحویل اعلام می‌شود.",
    videoDesc: "اگر ویدیوی خاصی دارید که می‌خواید توسط ما ادیت بشه، می‌تونید مستقیم اون رو برای ما ارسال کنید.",
    videoBtn: "ارسال ویدیو",
    videoLabel: "ارسال به تلگرام",
    copyBtn: "کپی",
    copied: "کپی شد ✓",
    labelName: "نام شما",
    phName: "مثلاً: امیر",
    labelTelegram: "آیدی تلگرام",
    phTelegram: "@username",
    labelService: "نوع خدمت",
    phService: "یکی از گزینه‌های بالا رو انتخاب کن",
    opt1: "ادیت با Adobe Premiere Pro — ۶۰,۰۰۰ تومان",
    opt2: "ادیت با گوشی موبایل — ۱۰۰,۰۰۰ تومان",
    opt3: "طراحی تک‌صفحه HTML — ۲۵۰,۰۰۰ تومان",
    opt4: "پروژه کامل HTML+CSS+JS — ۴۰۰,۰۰۰ تومان",
    labelDetails: "توضیحات پروژه",
    phDetails: "جزئیات، رفرنس، مهلت تحویل مورد نظر و...",
    submitBtn: "ارسال درخواست",
    submitBtnSending: "در حال ارسال...",
    okMsg: "✅ درخواست شما با موفقیت ارسال شد. به‌زودی از طریق تلگرام باهاتون تماس می‌گیریم.",
    errMsg: "⚠️ ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید یا از طریق تلگرام پیام بدید.",
    price1: "۶۰,۰۰۰", price1u: "تومان",
    price2: "۱۰۰,۰۰۰", price2u: "تومان",
    price3: "۲۵۰,۰۰۰", price3u: "تومان",
    price4: "۴۰۰,۰۰۰", price4u: "تومان",
    footer: "TheRITMCLAN"
  },
  en: {
    status: "SYSTEM ONLINE",
    opsTerminal: "R.I.T.M // OPS TERMINAL",
    tagline: "FREELANCE SERVICES // EDITING & WEB DESIGN",
    heroDesc: "High-quality video editing and web development services, with full support and fast delivery. Pick an option below and fill out the form.",
    tgBtn: "Join Telegram Channel ↗",
    sec1: "Video Editing Services",
    sec2: "HTML Development Services",
    sec3: "Send Us Your Video",
    sec4: "Place An Order",
    card1Tag: "PREMIERE PRO",
    card1Title: "Editing with Adobe Premiere Pro",
    card1Desc: "Professional desktop editing with Premiere Pro, high precision and quality.",
    card2Tag: "MOBILE EDIT",
    card2Title: "Editing on Mobile",
    card2Desc: "Fast, publish-ready edits — great for social media clips.",
    card3Tag: "SINGLE PAGE",
    card3Title: "Single-Page HTML Design",
    card3Desc: "A custom single HTML page, fully deployed and hosted.",
    card4Tag: "FULL PROJECT",
    card4Title: "Full HTML + CSS + JS Project",
    card4Desc: "A complete custom project with JavaScript and styling, fully deployed.",
    note: "⏳ Delivery time depends on the size, complexity and details of each order — you'll get an exact timeline after we review your request.",
    videoDesc: "If you have a specific video you'd like us to edit, you can send it to us directly.",
    videoBtn: "Send Video",
    videoLabel: "Send on Telegram",
    copyBtn: "Copy",
    copied: "Copied ✓",
    labelName: "Your Name",
    phName: "e.g. Amir",
    labelTelegram: "Telegram ID",
    phTelegram: "@username",
    labelService: "Service Type",
    phService: "Choose one of the options above",
    opt1: "Adobe Premiere Pro Editing — 60,000 Toman",
    opt2: "Mobile Editing — 100,000 Toman",
    opt3: "Single-Page HTML — 250,000 Toman",
    opt4: "Full HTML+CSS+JS Project — 400,000 Toman",
    labelDetails: "Project Details",
    phDetails: "Details, references, preferred deadline, etc.",
    submitBtn: "Send Request",
    submitBtnSending: "Sending...",
    okMsg: "✅ Your request has been sent successfully. We'll reach out to you on Telegram soon.",
    errMsg: "⚠️ Something went wrong. Please try again or message us on Telegram.",
    price1: "60,000", price1u: "Toman",
    price2: "100,000", price2u: "Toman",
    price3: "250,000", price3u: "Toman",
    price4: "400,000", price4u: "Toman",
    footer: "TheRITMCLAN"
  }
};

let currentLang = 'fa';

function applyLang(lang){
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateClock();
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ---- pricing card selection synced to the order form ----
const allCards = document.querySelectorAll('.card');
const serviceSelect = document.getElementById('serviceSelect');

allCards.forEach(card => {
  card.addEventListener('click', () => {
    allCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    serviceSelect.value = card.dataset.service;
    document.getElementById('order').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

serviceSelect.addEventListener('change', () => {
  allCards.forEach(c => c.classList.toggle('active', c.dataset.service === serviceSelect.value));
});

// ---- video submission glass bar ----
const videoBtn = document.getElementById('videoBtn');
const glassBar = document.getElementById('glassBar');
const copyBtn = document.getElementById('copyHandle');

videoBtn.addEventListener('click', () => {
  glassBar.classList.toggle('show');
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('@IamRITM').then(() => {
    const dict = translations[currentLang];
    copyBtn.textContent = dict.copied;
    setTimeout(() => { copyBtn.textContent = dict.copyBtn; }, 1800);
  });
});

// ---- form submit -> Formspree ----
const form = document.getElementById('orderForm');
const statusMsg = document.getElementById('statusMsg');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dict = translations[currentLang];
  statusMsg.className = 'status-msg';
  statusMsg.textContent = '';
  submitBtn.disabled = true;
  submitBtn.textContent = dict.submitBtnSending;

  const data = new FormData(form);

  try {
    const res = await fetch('https://formspree.io/f/mykqrbdp', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      statusMsg.className = 'status-msg ok';
      statusMsg.textContent = dict.okMsg;
      form.reset();
      allCards.forEach(c => c.classList.remove('active'));
    } else {
      throw new Error('bad response');
    }
  } catch (err) {
    statusMsg.className = 'status-msg err';
    statusMsg.textContent = dict.errMsg;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = dict.submitBtn;
  }
});

// ---- live clock in topbar ----
const clockEl = document.getElementById('clock');
function updateClock(){
  if (!clockEl) return;
  const now = new Date();
  const locale = currentLang === 'fa' ? 'fa-IR' : 'en-GB';
  clockEl.textContent = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);

// ---- scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// init
applyLang('fa');
