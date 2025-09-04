import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import heroVideo from "../assets/he4.mp4";
import aboutus from "../assets/aboutus.jpg";
import impactImg from "../assets/impact.jpg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import r from "../assets/r1.jpg";
import c from "../assets/c1.jpg";
import i from "../assets/i1.jpg";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Find Your Dream Home",
    heroHighlight: "Today",
    heroDesc: "Discover the perfect property that fits your lifestyle. From modern apartments to luxury estates, we make your home search simple, fast, and stress-free",
    learnMore: "Learn More",
    featuredListings: "Featured Listings",
    featuredDesc: "Browse our handpicked collection of properties — premium homes, modern apartments, and commercial spaces built to match your lifestyle and investment goals.",
    residential: "Residential Projects",
  residentialDesc: "Our residential projects are designed with families in mind, blending comfort, functionality, and aesthetics to create homes that truly enhance everyday living. We offer a wide range of options from cozy apartments to spacious villas, each crafted to meet the highest standards of safety and style. Our team ensures every detail is thoughtfully planned, providing residents with peaceful environments, modern amenities, and vibrant communities. Whether you are a first-time buyer or looking to upgrade, our residential solutions are tailored to your unique needs and aspirations.",
    commercial: "Commercial Projects",
  commercialDesc: "We deliver high-performance commercial spaces that balance design excellence with business functionality, helping enterprises grow in dynamic markets. Our commercial projects include office complexes, retail centers, and mixed-use developments, all designed to maximize productivity and customer engagement. We focus on flexible layouts, advanced infrastructure, and prime locations to support your business growth. With our expertise, your commercial property will stand out for its innovation, accessibility, and long-term value.",
    industrial: "Industrial Projects",
  industrialDesc: "Industrial construction demands strength, reliability, and scalability — and that’s where we excel. Our industrial projects range from warehouses and factories to logistics hubs, built to withstand heavy use and adapt to evolving operational needs. We prioritize robust engineering, efficient workflows, and compliance with industry standards, ensuring your facility supports seamless production and distribution. Partner with us for industrial spaces that drive efficiency and future growth.",
    whyChooseUs: "Why Choose Us",
    whyDesc: "Choosing the right construction and real estate partner is one of the most important decisions you’ll ever make. Here’s why hundreds of clients continue to trust us with their dream projects:",
    expertTeam: "Expert Team",
    expertTeamDesc: "Our team includes highly skilled engineers, architects, and designers with decades of combined experience...",
    topQuality: "Top-Notch Quality",
    topQualityDesc: "We use premium-grade materials and follow strict quality checks at every stage...",
    onTime: "On-Time Delivery",
    onTimeDesc: "With structured planning and expert management, we ensure deadlines are met without compromising quality...",
    support: "Dedicated Support",
    supportDesc: "From first consultation to final handover, our team supports you every step of the way...",
    latestListings: "Latest Listings",
    latestDesc: "Explore our most recent properties — from cozy apartments to luxury villas...",
    modernApartment: "Modern Apartment",
    luxuryVilla: "Luxury Villa",
    familyHome: "Family Home",
    viewDetails: "View Details",
    viewAllListings: "View All Listings",
    testimonials: "What Our Clients Say",
    testimonialsDesc: "Genuine feedback from families, homeowners, and businesses who trusted us to build their dream properties.",
    impact: "Our Impact in Numbers",
    projectsCompleted: "Projects Completed",
    ongoingConstructions: "Ongoing Constructions",
    citiesServed: "Cities Served",
    clientSatisfaction: "Client Satisfaction",
    customPackage: "Need A Custom Package?",
    customDesc: "Please submit the following form and we will get back to you with the best quotation.",
    name: "Name",
    phone: "Phone Number",
    siteArea: "Site Area (Sq.ft)",
    plotLocation: "Plot Location",
    constructionType: "Construction Type",
    houseType: "House Type",
    select: "Select",
    residentialConstruction: "Residential construction",
    commercialConstruction: "Commercial construction",
    groundFloor: "Ground floor",
    duplex: "Duplex",
    triplex: "Triplex",
    submit: "Submit",
    toast: "Your details have been saved!",
  },
  ar: {
    heroTitle: "ابحث عن منزل أحلامك",
    heroHighlight: "اليوم",
    heroDesc: "اكتشف العقار المثالي الذي يناسب نمط حياتك. من الشقق الحديثة إلى العقارات الفاخرة، نجعل بحثك عن المنزل سهلاً وسريعاً وخالياً من التوتر",
    learnMore: "اعرف المزيد",
    featuredListings: "العقارات المميزة",
    featuredDesc: "تصفح مجموعتنا المختارة من العقارات — منازل فاخرة، شقق حديثة، ومساحات تجارية تناسب نمط حياتك وأهدافك الاستثمارية.",
    residential: "مشاريع سكنية",
    residentialDesc: "مشاريعنا السكنية مصممة للعائلات، تجمع بين الراحة والوظائف والجمال...",
    commercial: "مشاريع تجارية",
    commercialDesc: "نقدم مساحات تجارية عالية الأداء تجمع بين التصميم والوظائف التجارية...",
    industrial: "مشاريع صناعية",
    industrialDesc: "البناء الصناعي يتطلب القوة والموثوقية والتوسع — وهذا ما نتميز به...",
    whyChooseUs: "لماذا تختارنا",
    whyDesc: "اختيار شريك البناء والعقارات المناسب هو أحد أهم القرارات التي ستتخذها...",
    expertTeam: "فريق خبراء",
    expertTeamDesc: "يضم فريقنا مهندسين ومعماريين ومصممين ذوي خبرة طويلة...",
    topQuality: "جودة عالية",
    topQualityDesc: "نستخدم مواد عالية الجودة ونتبع فحوصات صارمة في كل مرحلة...",
    onTime: "تسليم في الوقت المحدد",
    onTimeDesc: "نخطط وننفذ بدقة لضمان الالتزام بالمواعيد دون المساس بالجودة...",
    support: "دعم مخصص",
    supportDesc: "من الاستشارة الأولى حتى التسليم النهائي، نحن معك في كل خطوة...",
    latestListings: "أحدث العقارات",
    latestDesc: "استكشف أحدث عقاراتنا — من الشقق المريحة إلى الفلل الفاخرة...",
    modernApartment: "שقة حديثة",
    luxuryVilla: "فيلا فاخرة",
    familyHome: "منزل عائلي",
    viewDetails: "عرض التفاصيل",
    viewAllListings: "عرض جميع العقارات",
    testimonials: "ماذا يقول عملاؤنا",
    testimonialsDesc: "آراء حقيقية من العائلات وأصحاب المنازل والشركات الذين وثقوا بنا لبناء عقارات أحلامهم.",
    impact: "تأثيرنا بالأرقام",
    projectsCompleted: "مشاريع مكتملة",
    ongoingConstructions: "مشاريع جارية",
    citiesServed: "مدن مخدومة",
    clientSatisfaction: "رضا العملاء",
    customPackage: "هل تحتاج إلى باقة مخصصة؟",
    customDesc: "يرجى إرسال النموذج وسنعاود التواصل معك بأفضل عرض.",
    name: "الاسم",
    phone: "رقم الهاتف",
    siteArea: "مساحة الموقع (قدم مربع)",
    plotLocation: "موقع الأرض",
    constructionType: "نوع البناء",
    houseType: "نوع المنزل",
    select: "اختر",
    residentialConstruction: "בناء סקטי",
    commercialConstruction: "بناء تجاري",
    groundFloor: "طابق أرضي",
    duplex: "دوبلكס",
    triplex: "تريبلكס",
    submit: "إرسال",
    toast: "تم حفظ بياناتك!",
  },
  he: {
    heroTitle: "מצא את בית החלומות שלך",
    heroHighlight: "היום",
    heroDesc: "גלה את הנכס המושלם שמתאים לאורח החיים שלך. מדירות מודרניות ועד נכסים יוקרתיים, אנו הופכים את החיפוש שלך לבית לפשוט, מהיר וללא לחץ",
    learnMore: "למידע נוסף",
    featuredListings: "נכסים נבחרים",
    featuredDesc: "עיין באוסף הנכסים שלנו — בתים יוקרתיים, דירות מודרניות ומרחבים מסחריים המתאימים לאורח החיים ולמטרות ההשקעה שלך.",
    residential: "פרויקטים למגורים",
    residentialDesc: "הפרויקטים שלנו למגורים מתוכננים למשפחות, משלבים נוחות, פונקציונליות ואסתטיקה...",
    commercial: "פרויקטים מסחריים",
    commercialDesc: "אנו מספקים מרחבים מסחריים בעלי ביצועים גבוהים המשלבים עיצוב ופונקציונליות עסקית...",
    industrial: "פרויקטים תעשייתיים",
    industrialDesc: "בנייה תעשייתית דורשת חוזק, אמינות והרחבה — וזה מה שאנחנו עושים...",
    whyChooseUs: "למה לבחור בנו",
    whyDesc: "בחירת שותף הבנייה והנדל\"ן הנכון היא אחת ההחלטות החשובות ביותר שתקבל...",
    expertTeam: "צוות מומחים",
    expertTeamDesc: "הצוות שלנו כולל מהנדסים, אדריכלים ומעצבים מנוסים...",
    topQuality: "איכות גבוהה",
    topQualityDesc: "אנו משתמשים בחומרים איכותיים ומבצעים בדיקות איכות קפדניות בכל שלב...",
    onTime: "אספקה בזמן",
    onTimeDesc: "תכנון וניהול מובנים מבטיחים עמידה בלוחות זמנים ללא פשרות באיכות...",
    support: "תמיכה מסורה",
    supportDesc: "מהייעוץ הראשון ועד למסירה הסופית, אנו איתך בכל שלב...",
    latestListings: "נכסים אחרונים",
    latestDesc: "גלה את הנכסים האחרונים שלנו — מדירות נוחות ועד וילות יוקרתיות...",
    modernApartment: "דירה מודרנית",
    luxuryVilla: "וילה יוקרתית",
    familyHome: "בית משפחתי",
    viewDetails: "צפה בפרטים",
    viewAllListings: "צפה בכל הנכסים",
    testimonials: "מה הלקוחות שלנו אומרים",
    testimonialsDesc: "משוב אמיתי ממשפחות, בעלי בתים ועסקים שבחרו בנו לבניית נכס החלומות שלהם.",
    impact: "ההשפעה שלנו במספרים",
    projectsCompleted: "פרויקטים שהושלמו",
    ongoingConstructions: "בנייה מתמשכת",
    citiesServed: "ערים בהן פעלנו",
    clientSatisfaction: "שביעות רצון לקוחות",
    customPackage: "צריך חבילה מותאמת אישית?",
    customDesc: "אנא שלח את הטופס ונחזור אליך עם ההצעה הטובה ביותר.",
    name: "שם",
    phone: "מספר טלפון",
    siteArea: "שטח האתר (רגל רבוע)",
    plotLocation: "מיקום המגרש",
    constructionType: "סוג הבנייה",
    houseType: "סוג הבית",
    select: "בחר",
    residentialConstruction: "בנייה למגורים",
    commercialConstruction: "בנייה מסחרית",
    groundFloor: "קומת קרקע",
    duplex: "דו-plex",
    triplex: "טריפלקס",
    submit: "שלח",
    toast: "הפרטים שלך נשמרו!",
  },
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

// Helper for count up animation
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let startTime = null;
    function animateCountUp(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCountUp);
      } else {
        setCount(target);
      }
    }
    ref.current = requestAnimationFrame(animateCountUp);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return count;
}

// Animated metric card for Our Impact
function ImpactMetric({ value, suffix, label, delay, color }) {
  const [start, setStart] = useState(false);
  const ref = useRef();
  const count = useCountUp(start ? value : 0, 2000);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStart(true);
          } else {
            setStart(false);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(node);
    }
    return () => {
      if (observer && node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="p-8 rounded-xl shadow-lg text-center bg-[#f0f9ff]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-5xl font-extrabold mb-2 text-[#00BFFF] drop-shadow-lg">{count}{suffix}</h3>
      <p className="mt-2 text-base font-semibold text-gray-700">{label}</p>
    </div>
  );
}

export default function Home1() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.fromNav) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Language and RTL support
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = useMemo(() => translations[language], [language]);
  useEffect(() => {
    const syncLanguage = () => {
      const lang = localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = getDirection(lang);
    };
    syncLanguage();
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("language-changed", syncLanguage);
    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("language-changed", syncLanguage);
    };
  }, []);

  // >>> fixed: update immediately without reload
  const handleLanguageChange = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang); // immediately update UI
    document.documentElement.dir = getDirection(lang);
    window.dispatchEvent(new Event("language-changed"));
  };

  // Theme state synced with Header
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  // Form logic
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    siteArea: "",
    plotLocation: "",
    construction: "",
    houseType: ""
  });

  const [showToast, setShowToast] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedForms = JSON.parse(localStorage.getItem("customPackages") || "[]");
    savedForms.push(formData);
    localStorage.setItem("customPackages", JSON.stringify(savedForms));
    setShowToast(true);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    setFormData({
      name: "",
      phoneNumber: "",
      siteArea: "",
      plotLocation: "",
      construction: "",
      houseType: ""
    });
  };

  // Categories with translations — store as keys so headings/update are dynamic
  const categories = useMemo(() => ({
    residential: {
      img: r,
      heading: t.residential,
      desc: t.residentialDesc,
    },
    commercial: {
      img: c,
      heading: t.commercial,
      desc: t.commercialDesc,
    },
    industrial: {
      img: i,
      heading: t.industrial,
      desc: t.industrialDesc,
    },
  }), [t]);

  // activeCategory is a key (residential/commercial/industrial) — not a translated string
  const [activeCategory, setActiveCategory] = useState("residential");
  useEffect(() => {
    // reset to default key when language changes so headings update correctly
    setActiveCategory("residential");
  }, [language]);

  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    } dir={getDirection(language)}>


      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src={heroVideo} autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#fff" }}>
            {t.heroTitle} <span style={{ color: "#00BFFF" }}>{t.heroHighlight}</span>
          </h1>
          <p className="mt-4 max-w-4xl text-lg md:text-xl text-white">{t.heroDesc}</p>
          <button
            onClick={() => window.scrollTo({ top: document.getElementById('about-us')?.offsetTop || 0, behavior: 'smooth' })}
            className={`${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-[#00CFFF]' : 'bg-[#00BFFF] text-white hover:bg-[#00CFFF]'} px-6 py-3 mt-5 rounded-lg transition-colors font-semibold`}
          >
            {t.learnMore}
          </button>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className={`w-full py-16 sm:py-20 ${theme === "dark" ? "bg-[#000]" : "bg-[#FFF]"}`} id="featured-listings">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
            {t.featuredListings}
          </h2>
          <p className={`text-lg text-center mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{t.featuredDesc}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeCategory === key
                    ? "bg-[#00BFFF] text-white"
                    : theme === "dark"
                    ? "bg-[#111] text-gray-300 hover:bg-[#222]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categories[key].heading}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <img src={categories[activeCategory].img} alt={categories[activeCategory].heading} className="w-full h-[350px] object-cover rounded-2xl shadow-lg transition-all duration-500" />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-semibold mb-4 text-[#00BFFF]">{categories[activeCategory].heading}</h3>
              <p className={`text-lg text-justify ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{categories[activeCategory].desc}</p>
            </div>
          </div>
        </div>
      </section>




      {/* Why Choose Us Section */}
      <section className={`w-full py-20 ${theme === "dark" ? "bg-[#0a0f1c] text-white" : "bg-[#f0f9ff] text-gray-900"}`} id="why-choose-us">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">{t.whyChooseUs}</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{t.whyDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: t.expertTeam, desc: t.expertTeamDesc, icon: "👷‍♂️" },
              { title: t.topQuality, desc: t.topQualityDesc, icon: "🏆" },
              { title: t.onTime, desc: t.onTimeDesc, icon: "⏱️" },
              { title: t.support, desc: t.supportDesc, icon: "💬" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-[#00BFFF]/10 hover:shadow-lg cursor-pointer group">
                <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:animate-bounce">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#00BFFF] mb-3">{item.title}</h3>
                <p className={`text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Latest Listings Section */}
      <section className={`w-full py-20 ${theme === "dark" ? "bg-[#0a0f1c]" : "bg-[#f8fbff]"}`} id="listings">
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-[#00BFFF]">{t.latestListings}</h2>
            <p className={`max-w-3xl mx-auto text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{t.latestDesc}</p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: image1, title: t.modernApartment, specs: "2 Bed • 2 Bath • 1,200 sq ft", price: "$250,000", location: "New York, USA", link: "/property/1" },
              { img: image2, title: t.luxuryVilla, specs: "4 Bed • 3 Bath • 3,500 sq ft", price: "$780,000", location: "Los Angeles, USA", link: "/property/2" },
              { img: image3, title: t.familyHome, specs: "3 Bed • 2 Bath • 1,800 sq ft", price: "$420,000", location: "Chicago, USA", link: "/property/3" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#111] hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative">
                  <img src={item.img} alt={item.title} className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-[#00BFFF] text-white text-sm font-medium px-4 py-1 rounded-lg shadow-md">📍 {item.location}</span>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-3 text-[#00BFFF]">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.specs}</p>
                  <p className="font-bold text-2xl mb-5 text-gray-800 dark:text-gray-100">{item.price}</p>
                  <a href={item.link} className="inline-block bg-[#00BFFF] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#009acd] transition">{t.viewDetails}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="/listings" className="bg-[#00BFFF] text-white font-semibold py-3 px-12 rounded-lg hover:bg-[#009acd] transition">{t.viewAllListings}</a>
          </div>
        </div>
      </section>




      {/* Testimonials Section */}
      <section className={`w-full py-20 ${theme === "dark" ? "bg-[#0d1b2a]" : "bg-[#e6f7ff]"}`} id="testimonials">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#00BFFF] drop-shadow-lg">{t.testimonials}</h2>
          <p className={`max-w-2xl mx-auto text-lg mb-12 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{t.testimonialsDesc}</p>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { name: "Sarah Johnson", role: t.familyHome, text: t.topQualityDesc, img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Michael Smith", role: t.luxuryVilla, text: t.onTimeDesc, img: "https://randomuser.me/api/portraits/men/46.jpg" },
              { name: "Emily Davis", role: t.modernApartment, text: t.supportDesc, img: "https://randomuser.me/api/portraits/women/68.jpg" },
            ].map((tt, i) => (
              <div key={i} className={`p-8 rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-xl ${theme === 'dark' ? 'bg-[#1a2636] border border-[#00BFFF] text-white' : 'bg-white text-gray-900'}`} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="flex flex-col items-center">
                  <img src={tt.img} alt={tt.name} className="w-16 h-16 rounded-full border-2 border-[#00BFFF] mb-4" />
                  <h3 className="text-lg font-semibold text-[#00BFFF] drop-shadow">{tt.name}</h3>
                  <p className={`text-sm mb-4 ${theme === "dark" ? "text-blue-200" : "text-blue-700"}`}>{tt.role}</p>
                  <p className={`italic text-base leading-relaxed ${theme === "dark" ? "text-gray-100" : "text-gray-700"}`}>{tt.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>






      {/* Impact Section */}
      <section className="w-full relative py-20" style={{ background: "linear-gradient(135deg, #00BFFF 0%, #0077b6 100%)" }}>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-14 text-white drop-shadow-lg">{t.impact}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <ImpactMetric value={250} suffix="+" label={t.projectsCompleted} delay={0} color="#fff" />
            <ImpactMetric value={50} suffix="+" label={t.ongoingConstructions} delay={100} color="#fff" />
            <ImpactMetric value={30} suffix="+" label={t.citiesServed} delay={200} color="#fff" />
            <ImpactMetric value={98} suffix="%" label={t.clientSatisfaction} delay={300} color="#fff" />
          </div>
        </div>
      </section>




      

      {/* Custom Package Form */}
      <div className="relative">
        <div className={`max-w-full mx-auto shadow-lg rounded-xl p-6 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-gray-900'}`}>
          <h2 className={`text-4xl font-bold text-center mb-6 mt-10 ${theme === 'dark' ? 'text-[#00BFFF]' : 'text-blue-400'}`}>{t.customPackage}</h2>
          <p className={`text-center mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.customDesc}</p>
          <form onSubmit={handleSubmit} className={`p-8 rounded-lg shadow-lg space-y-6 ${theme === 'dark' ? 'bg-[#1f1f1f]' : 'bg-white'}`}>
            <div>
              <label className="block font-semibold mb-2">{t.name}</label>
              <input type="text" name="name" placeholder={t.name} value={formData.name} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#00BFFF]' : 'bg-white text-black border-gray-300 focus:ring-blue-400'}`} required />
            </div>
            <div>
              <label className="block font-semibold mb-2">{t.phone}</label>
              <input type="tel" name="phoneNumber" placeholder={t.phone} value={formData.phoneNumber} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#00BFFF]' : 'bg-white text-black border-gray-300 focus:ring-blue-400'}`} required />
            </div>
            <div>
              <label className="block font-medium mb-2">{t.siteArea}</label>
              <input type="text" name="siteArea" placeholder={t.siteArea} value={formData.siteArea} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#00BFFF]' : 'bg-white text-black border-gray-300 focus:ring-blue-400'}`} required />
            </div>
            <div>
              <label className="block font-medium mb-2">{t.plotLocation}</label>
              <input type="text" name="plotLocation" placeholder={t.plotLocation} value={formData.plotLocation} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#00BFFF]' : 'bg-white text-black border-gray-300 focus:ring-blue-400'}`} />
            </div>
            <div>
              <label className="block font-medium mb-2">{t.constructionType}</label>
              <select name="construction" value={formData.construction} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#00BFFF]' : 'bg-white text-black border-gray-300 focus:ring-blue-400'}`}>
                <option value="">{t.select}</option>
                <option value="Residential construction">{t.residentialConstruction}</option>
                <option value="Commercial construction">{t.commercialConstruction}</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2">{t.houseType}</label>
              <select name="houseType" value={formData.houseType} onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#00BFFF]' : 'bg-white text-black border-gray-300 focus:ring-blue-400'}`}>
                <option value="">{t.select}</option>
                <option value="Ground floor">{t.groundFloor}</option>
                <option value="Duplex">{t.duplex}</option>
                <option value="Triplex">{t.triplex}</option>
              </select>
            </div>
            <button type="submit" className={`w-full font-bold py-3 rounded ${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-500' : 'bg-blue-400 text-white hover:bg-blue-500'}`}>{t.submit}</button>
          </form>
        </div>
        {showToast && (
          <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg transition-all duration-500 ${toastVisible ? 'opacity-100 translate-y-0 bg-green-600 text-white' : 'opacity-0 translate-y-4 bg-green-600 text-white'}`}>
            {t.toast}
          </div>
        )}
      </div>
    </div>
  );
}
