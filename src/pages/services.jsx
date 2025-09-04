import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import serviceHeroVideo from "../assets/he2.mp4";
import s1 from "../assets/Residential Properties.jpg";
import s2 from "../assets/Commercial Spaces.jpg";
import s3 from "../assets/Property Management.jpg";
import s4 from "../assets/Real Estate Investments.jpg";
import s5 from "../assets/Interior & Renovation Services.jpg";
import s6 from "../assets/Palm Grove Villas.jpg";
import s7 from "../assets/BG12.jpg";

// Multilingual translations
const translations = {
  en: {
  heroTitle: "Our Services",
  heroHighlight: "",
    heroDesc: "Explore our curated services in Real Estate – Residential, Commercial, Investments, Interior Design",
    exploreExpertise: "Explore Our Expertise",
    readMore: "Read More",
    howToStart: "How to Get Started in Real Estate",
    steps: [
      { step: "1", title: "Search Properties", text: "Browse our wide range of listings including apartments, villas, and commercial spaces tailored to your needs." },
      { step: "2", title: "Connect with Agents", text: "Get expert advice and schedule property visits with our trusted real estate professionals." },
      { step: "3", title: "Schedule a Visit", text: "Visit shortlisted properties, explore the neighborhoods, and compare features before making a decision." },
      { step: "4", title: "Seal the Deal", text: "Finalize your purchase or rental agreement with complete transparency and legal support." },
    ],
    buildEmpire: "Build Your Real Estate Empire",
    buildDesc: "Smart investments start with the right guidance. We help you find profitable properties and secure deals with complete transparency.",
    empireCards: [
      { title: "Expert Property Insights", text: "Get access to the best property deals and detailed market trends.", icon: "🏢" },
      { title: "Custom Investment Plans", text: "Tailored strategies to grow your real estate portfolio effectively.", icon: "📑" },
      { title: "Secure & Transparent Deals", text: "100% legal compliance and clarity at every step of the process.", icon: "✅" },
    ],
    startJourney: "Start Your Investment Journey",
    testimonialsTitle: "What Our Clients Say",
    testimonials: [
      { name: "Rajesh Kumar", text: "The team made my home-buying experience smooth and hassle-free. Highly professional and reliable!" },
      { name: "Sneha Reddy", text: "Their interior design services completely transformed my apartment. Highly recommended!" },
      { name: "Amit Verma", text: "From property search to legal assistance, everything was taken care of. Truly a one-stop solution." },
    ],
    readyTitle: "Ready to Start Your Real Estate Journey?",
    readyDesc: "Connect with us today and make your dream property a reality. Our team is here to guide you every step of the way.",
    contactUs: "Contact Us Now",
    services: [
      {
        title: "Residential Properties",
        description: "Find your dream home with our wide range of residential properties including apartments, villas, and independent houses. We provide options that suit every lifestyle and budget, from affordable housing to luxury living. Our team ensures complete transparency in transactions, legal verifications, and smooth handovers. Whether you’re buying your first home or upgrading, we make the journey seamless and stress-free.",
        image: s1,
        link: "/residential-properties",
      },
      {
        title: "Commercial Spaces",
        description: "Explore premium commercial spaces such as office buildings, retail shops, and co-working hubs. Our portfolio covers high-demand business districts and growing commercial hubs, ideal for startups, SMEs, and large enterprises. We guide you in choosing the right space that aligns with your business goals, budget, and expansion plans. Unlock opportunities for business growth with strategically located properties.",
        image: s2,
        link: "/commercial-spaces",
      },
      {
        title: "Property Management",
        description: "Leave the hassle of property maintenance to us. Our property management services include rent collection, tenant screening, repairs, legal compliance, and timely inspections. We ensure your property retains its value while generating consistent returns. Whether you own one apartment or multiple investments, our dedicated team manages them professionally with full transparency.",
        image: s3,
        link: "/property-management",
      },
      {
        title: "Real Estate Investments",
        description: "Discover lucrative real estate investment opportunities with high ROI potential. From residential plots to large-scale projects, we analyze market trends, future development plans, and rental yields to help you make informed decisions. We specialize in identifying under-valued properties in emerging areas that ensure long-term capital appreciation and steady rental income.",
        image: s4,
        link: "/real-estate-investments",
      },
      {
        title: "Interior & Renovation Services",
        description: "Transform your property into a modern, stylish, and functional space. Our interior and renovation services cover design consultation, modular kitchens, luxury furnishings, and eco-friendly solutions. We collaborate with skilled architects and designers to create customized interiors that match your personality and lifestyle. From small upgrades to complete makeovers, we bring your vision to life.",
        image: s5,
        link: "/interior-renovation",
      },
      {
        title: "Palm Grove Villas",
        description: "Palm Grove Villas is an exclusive residential community designed for those who seek modern luxury while staying connected to nature. Surrounded by lush palm trees and landscaped greenery, it offers a resort-like lifestyle with the comfort of a private home",
        image: s6,
        link: "/legal-financial-assistance",
      },
    ],
  },
  ar: {
  heroTitle: "خدماتنا",
  heroHighlight: "",
    heroDesc: "استكشف خدماتنا العقارية المختارة – سكني، تجاري، استثمار، تصميم داخلي",
    exploreExpertise: "اكتشف خبراتنا",
    readMore: "اقرأ المزيد",
    howToStart: "كيف تبدأ في العقارات",
    steps: [
      { step: "١", title: "ابحث عن العقارات", text: "تصفح مجموعتنا الواسعة من الشقق والفلل والمساحات التجارية المصممة لاحتياجاتك." },
      { step: "٢", title: "تواصل مع الوكلاء", text: "احصل على نصائح الخبراء وحدد زيارات للعقارات مع محترفي العقارات الموثوقين لدينا." },
      { step: "٣", title: "حدد موعد زيارة", text: "قم بزيارة العقارات المختارة، واستكشف الأحياء، وقارن الميزات قبل اتخاذ القرار." },
      { step: "٤", title: "أكمل الصفقة", text: "أكمل عملية الشراء أو الإيجار بشفافية كاملة ودعم قانوني." },
    ],
    buildEmpire: "ابنِ إمبراطوريتك العقارية",
    buildDesc: "الاستثمار الذكي يبدأ بالتوجيه الصحيح. نساعدك في العثور على عقارات مربحة وإبرام الصفقات بشفافية كاملة.",
    empireCards: [
      { title: "رؤى عقارية خبيرة", text: "احصل على أفضل الصفقات العقارية وتحليلات السوق المفصلة.", icon: "🏢" },
      { title: "خطط استثمار مخصصة", text: "استراتيجيات مصممة لتنمية محفظتك العقارية بفعالية.", icon: "📑" },
      { title: "صفقات آمنة وشفافة", text: "امتثال قانوني كامل ووضوح في كل خطوة.", icon: "✅" },
    ],
    startJourney: "ابدأ رحلتك الاستثمارية",
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonials: [
      { name: "راجش كومار", text: "جعل الفريق تجربة شراء المنزل سلسة وخالية من المتاعب. محترفون وموثوقون للغاية!" },
      { name: "سنيها ريدي", text: "خدمات التصميم الداخلي حولت شقتي بالكامل. أنصح بها بشدة!" },
      { name: "أميت فيرما", text: "من البحث عن العقار إلى المساعدة القانونية، تم الاهتمام بكل شيء. حل شامل حقًا." },
    ],
    readyTitle: "هل أنت مستعد لبدء رحلتك العقارية؟",
    readyDesc: "تواصل معنا اليوم واجعل عقار أحلامك حقيقة. فريقنا هنا لإرشادك في كل خطوة.",
    contactUs: "اتصل بنا الآن",
    services: [
      {
        title: "عقارات سكنية",
        description: "اعثر على منزل أحلامك من خلال مجموعتنا الواسعة من الشقق والفلل والمنازل المستقلة. نوفر خيارات تناسب كل نمط حياة وميزانية، من السكن الاقتصادي إلى الفاخر. يضمن فريقنا الشفافية الكاملة في المعاملات والتحقق القانوني وتسليم سلس. سواء كنت تشتري منزلك الأول أو تقوم بالترقية، نجعل الرحلة سهلة وخالية من التوتر.",
        image: s1,
        link: "/residential-properties",
      },
      {
        title: "مساحات تجارية",
        description: "استكشف المساحات التجارية المميزة مثل المباني المكتبية والمحلات التجارية ومراكز العمل المشتركة. تغطي محفظتنا مناطق الأعمال عالية الطلب والمراكز التجارية النامية، مثالية للشركات الناشئة والمؤسسات الصغيرة والكبيرة. نرشدك لاختيار المساحة المناسبة التي تتماشى مع أهداف عملك وميزانيتك وخطط التوسع.",
        image: s2,
        link: "/commercial-spaces",
      },
      {
        title: "إدارة العقارات",
        description: "اترك لنا عناء صيانة العقار. تشمل خدمات إدارة العقارات جمع الإيجارات، فحص المستأجرين، الإصلاحات، الامتثال القانوني، والتفتيشات الدورية. نضمن الحفاظ على قيمة عقارك وتحقيق عوائد مستمرة.",
        image: s3,
        link: "/property-management",
      },
      {
        title: "استثمارات عقارية",
        description: "اكتشف فرص الاستثمار العقاري المربحة ذات العائد المرتفع. من الأراضي السكنية إلى المشاريع الكبيرة، نقوم بتحليل اتجاهات السوق وخطط التطوير والعوائد الإيجارية لمساعدتك في اتخاذ قرارات مستنيرة.",
        image: s4,
        link: "/real-estate-investments",
      },
      {
        title: "خدمات التصميم الداخلي والتجديد",
        description: "حوّل عقارك إلى مساحة عصرية وأنيقة وعملية. تشمل خدماتنا الاستشارات التصميمية، المطابخ المودرن، الأثاث الفاخر، والحلول الصديقة للبيئة.",
        image: s5,
        link: "/interior-renovation",
      },
      {
        title: "فلل بالم جروف",
        description: "فلل بالم جروف مجتمع سكني حصري مصمم لمن يبحثون عن الفخامة الحديثة مع التواصل مع الطبيعة. محاط بأشجار النخيل والمساحات الخضراء.",
        image: s6,
        link: "/legal-financial-assistance",
      },
    ],
  },
  he: {
  heroTitle: "השירותים שלנו",
  heroHighlight: "",
    heroDesc: "גלה את השירותים שלנו בנדל\"ן – מגורים, מסחרי, השקעות, עיצוב פנים",
    exploreExpertise: "גלה את המומחיות שלנו",
    readMore: "קרא עוד",
    howToStart: "איך להתחיל בנדל\"ן",
    steps: [
      { step: "1", title: "חפש נכסים", text: "עיין במגוון הרחב שלנו של דירות, וילות ומרחבים מסחריים המותאמים לצרכים שלך." },
      { step: "2", title: "צור קשר עם סוכנים", text: "קבל ייעוץ מקצועי וקבע ביקורים בנכסים עם מומחי נדל\"ן אמינים." },
      { step: "3", title: "קבע ביקור", text: "בקר בנכסים שנבחרו, חקור את השכונות והשווה תכונות לפני קבלת החלטה." },
      { step: "4", title: "סגור את העסקה", text: "סיים את הרכישה או ההשכרה בשקיפות מלאה ותמיכה משפטית." },
    ],
    buildEmpire: "בנה את אימפריית הנדל\"ן שלך",
    buildDesc: "השקעות חכמות מתחילות בהכוונה הנכונה. אנו עוזרים לך למצוא נכסים רווחיים ולסגור עסקאות בשקיפות מלאה.",
    empireCards: [
      { title: "תובנות נדל\"ן מקצועיות", text: "קבל גישה לעסקאות הנדל\"ן הטובות ביותר וניתוחי שוק מפורטים.", icon: "🏢" },
      { title: "תוכניות השקעה מותאמות", text: "אסטרטגיות מותאמות לצמיחה יעילה של תיק הנדל\"ן שלך.", icon: "📑" },
      { title: "עסקאות בטוחות ושקופות", text: "ציות מלא לחוק ובהירות בכל שלב.", icon: "✅" },
    ],
    startJourney: "התחל את מסע ההשקעות שלך",
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    testimonials: [
      { name: "רג'ש קומאר", text: "הצוות הפך את חווית רכישת הבית שלי לחלקה וללא טרחה. מקצועיים ואמינים מאוד!" },
      { name: "סנהה רדי", text: "שירותי העיצוב הפנימי שלהם שינו לחלוטין את הדירה שלי. מומלץ בחום!" },
      { name: "אמית ורמה", text: "מהחיפוש ועד הסיוע המשפטי, הכל טופל. פתרון מלא באמת." },
    ],
    readyTitle: "מוכן להתחיל את מסע הנדל\"ן שלך?",
    readyDesc: "צור קשר איתנו היום והפוך את נכס החלומות שלך למציאות. הצוות שלנו כאן ללוות אותך בכל שלב.",
    contactUs: "צור קשר עכשיו",
    services: [
      {
        title: "נכסי מגורים",
        description: "מצא את בית החלומות שלך מתוך מגוון רחב של דירות, וילות ובתים פרטיים. אנו מציעים אפשרויות לכל סגנון חיים ותקציב, מהדיור המשתלם ועד היוקרתי.",
        image: s1,
        link: "/residential-properties",
      },
      {
        title: "מרחבים מסחריים",
        description: "גלה מרחבים מסחריים מובילים כמו בנייני משרדים, חנויות ומרכזי עבודה משותפים. תיק הנכסים שלנו מכסה אזורי עסקים מבוקשים ומרכזים מתפתחים.",
        image: s2,
        link: "/commercial-spaces",
      },
      {
        title: "ניהול נכסים",
        description: "השאר לנו את הטיפול בנכס שלך. שירותי ניהול הנכסים כוללים גביית שכירות, בדיקת דיירים, תיקונים, עמידה בחוק וביקורות תקופתיות.",
        image: s3,
        link: "/property-management",
      },
      {
        title: "השקעות נדל\"ן",
        description: "גלה הזדמנויות השקעה רווחיות עם פוטנציאל תשואה גבוה. אנו מנתחים מגמות שוק, תוכניות פיתוח ותשואות שכירות כדי לעזור לך לקבל החלטות מושכלות.",
        image: s4,
        link: "/real-estate-investments",
      },
      {
        title: "שירותי עיצוב ושיפוץ פנים",
        description: "הפוך את הנכס שלך למודרני, אלגנטי ופונקציונלי. השירותים שלנו כוללים ייעוץ עיצובי, מטבחים מודולריים, ריהוט יוקרתי ופתרונות ידידותיים לסביבה.",
        image: s5,
        link: "/interior-renovation",
      },
      {
        title: "וילות פאלם גרוב",
        description: "וילות פאלם גרוב הן קהילה מגורים יוקרתית לאלו שמחפשים מודרניות וטבע. מוקפות דקלים ושטחים ירוקים.",
        image: s6,
        link: "/legal-financial-assistance",
      },
    ],
  },
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

const Services = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme") || "light";
      setTheme(newTheme);
    };

    window.addEventListener("theme-changed", handleThemeChange);
    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("theme-changed", handleThemeChange);
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

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

  const t = useMemo(() => translations[language], [language]);
  const isDark = theme === "dark";
  const isRtl = getDirection(language) === "rtl";

  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white text-black"}`} dir={isRtl ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={serviceHeroVideo}
          autoPlay
          loop
          muted
        />
        <div className={`absolute top-0 left-0 w-full h-full ${isDark ? "bg-black/50" : "bg-black/30"}`}></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Our <span className="text-[#00BFFF]">Services</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">{t.heroDesc}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-16 transition-colors duration-500 ${isDark ? "bg-[#181818] text-white" : "bg-[#e6f7ff] text-gray-900"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#00BFFF" }}>
            {t.exploreExpertise}
          </h2>
          <div className="grid gap-12">
            {t.services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 items-center gap-6">
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 rounded-xl shadow-2xl object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: "#00BFFF" }}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 text-justify transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="px-6 py-2 font-semibold rounded-lg shadow-md bg-[#00BFFF] text-white hover:bg-blue-500 transition duration-300"
                  >
                    {t.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className={`py-16 ${isDark ? "bg-[#121212]" : "bg-[#f0f8ff]"}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-black"}`}>
            {t.howToStart}
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {t.steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform duration-300 text-center">
                <div className={`rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ${isDark ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
                  <span className="text-3xl font-bold text-[#00BFFF]">{item.step}</span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>{item.title}</h3>
                <p className={isDark ? "text-gray-200" : "text-gray-700"}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`relative py-32 flex items-center justify-center transition-colors duration-500 ${isDark ? "bg-[#181818] text-white" : "bg-[#E6F7FD] text-black"}`}>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t.buildEmpire}</h2>
          <p className="text-base md:text-lg mb-16 max-w-3xl mx-auto">{t.buildDesc}</p>
          <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
            {t.empireCards.map((item, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300 w-full md:w-80 ${isDark ? "bg-[#222] text-gray-200" : "bg-white text-gray-800"}`}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#00BFFF] mb-3">{item.title}</h3>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>{item.text}</p>
              </div>
            ))}
          </div>
          <a
            href="/contactus"
            className="inline-block px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#00BFFF] to-[#00E0FF] text-white shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {t.startJourney}
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`relative py-20 ${isDark ? "text-white" : "text-black"}`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505691723518-36aef73b88c4?auto=format&fit=crop&w=1950&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(255, 255, 255, 0.6)",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[#00BFFF] drop-shadow-lg">
            {t.testimonialsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {t.testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl backdrop-blur-lg bg-white/20 dark:bg-black/30 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-6xl text-[#00BFFF] mb-4">“</div>
                <p className="italic text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <h4 className="font-bold text-xl text-[#00BFFF]">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-16 text-center relative ${isDark ? "bg-[#181818] text-white" : "bg-[#e6f7ff] text-black"}`}
        style={{
          backgroundImage: `url(${s7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "rgba(0, 0, 0, 0.4)"
              : "rgba(255, 255, 255, 0.6)",
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">{t.readyTitle}</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">{t.readyDesc}</p>
          <Link
            to="/contactus"
            className="px-8 py-3 bg-[#00BFFF] text-white rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            {t.contactUs}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;