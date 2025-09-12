import React, { useState, useEffect, useMemo } from "react";

import heroVideo from "../assets/he11.mp4";
import a1 from "../assets/Residential Properties.jpg";
import a2 from "../assets/thanks1.jpg";
import a3 from "../assets/a3.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Explore Premium",
    heroHighlight: "Commercial Spaces",
    featuredTitle: "Commercial Spaces",
    featuredDesc: "Our commercial spaces are located in prime business districts, offering high visibility, easy access, and modern layouts. Offices, retail outlets, co-working hubs, and warehouses are designed to meet diverse business needs. Each property provides ample parking, 24/7 security, and smart infrastructure to help your business thrive. Close proximity to transport hubs, restaurants, and business services ensures convenience and connectivity for your team and clients.",
    featuredList: [
      { icon: "📍", text: "Facing West" },
      { icon: "🏠", text: "Location: FL, USA" },
      { icon: "🛏️", text: "3 BHK" }
    ],
    contactNow: "Contact Now",
    whoTitle: "Who Should Buy Our Spaces?",
    whoDesc: "Our Commercial Spaces are ideal for startups, established businesses, investors, and entrepreneurs seeking secure, modern, and well-connected business locations.",
    whoCards: [
      { title: "Startups", desc: "Flexible spaces for growing teams and innovation." },
      { title: "Established Businesses", desc: "Prime locations for visibility and expansion." },
      { title: "Investors", desc: "High-growth properties with excellent rental returns." },
      { title: "Entrepreneurs", desc: "Modern layouts for retail, offices, and co-working." }
    ],
    benefitsTitle: "Why Choose Our Commercial Spaces?",
    benefits: [
      { title: "Prime Locations", desc: "Close to IT hubs, schools, hospitals, and shopping centers." },
      { title: "Modern Amenities", desc: "Clubhouse, swimming pool, gyms, and kids’ play areas." },
      { title: "Luxury & Comfort", desc: "Spacious layouts and high-quality interiors." },
      { title: "Investment Value", desc: "Excellent potential for appreciation and rental income." },
      { title: "Trusted Developers", desc: "Reliable projects with clear documentation and quality build." },
      { title: "Flexible Options", desc: "Choose from offices, retail, and co-working spaces." }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "What types of Commercial Spaces are available?",
        answer: "We offer offices, retail outlets, co-working hubs, and warehouses designed to suit different business needs and budgets."
      },
      {
        question: "Do you provide budget-friendly options?",
        answer: "Yes, we have affordable spaces as well as premium and luxury options."
      },
      {
        question: "Are the properties located in prime areas?",
        answer: "Absolutely. All our projects are strategically located near business hubs, transport, and amenities."
      },
      {
        question: "Is financing support available?",
        answer: "Yes, we provide assistance with bank tie-ups, business loans, and easy EMI options to make your purchase hassle-free."
      },
      {
        question: "Can I expect good returns on investment?",
        answer: "Yes, our commercial properties are located in high-growth areas with excellent potential for appreciation and rental income."
      }
    ],
    ctaTitle: "Ready to Book Your Dream Space?",
    ctaDesc: "Explore our exclusive range of commercial spaces today and find a location that matches your business vision.",
    ctaBtn: "Contact Us Today"
  },
  ar: {
    heroTitle: "استكشف",
    heroHighlight: "المساحات التجارية المميزة",
    featuredTitle: "المساحات التجارية",
    featuredDesc: "تقع مساحاتنا التجارية في مناطق الأعمال الرئيسية، وتوفر رؤية عالية، سهولة الوصول، وتصاميم حديثة. المكاتب والمحلات ومساحات العمل والمستودعات مصممة لتلبية احتياجات الأعمال المختلفة. كل عقار يوفر مواقف سيارات واسعة، أمن على مدار الساعة، وبنية تحتية ذكية لمساعدة عملك على النجاح. قربها من وسائل النقل والمطاعم والخدمات التجارية يضمن الراحة والتواصل لفريقك وعملائك.",
    featuredList: [
      { icon: "📍", text: "تواجه الغرب" },
      { icon: "🏠", text: "الموقع: فلوريدا، الولايات المتحدة" },
      { icon: "🛏️", text: "3 غرف نوم" }
    ],
    contactNow: "اتصل الآن",
    whoTitle: "من يجب أن يشتري مساحاتنا؟",
    whoDesc: "مساحاتنا التجارية مثالية للشركات الناشئة، الشركات القائمة، المستثمرين، ورواد الأعمال الباحثين عن مواقع أعمال حديثة وآمنة ومتصلة جيدًا.",
    whoCards: [
      { title: "الشركات الناشئة", desc: "مساحات مرنة للفرق المتنامية والابتكار." },
      { title: "الشركات القائمة", desc: "مواقع رئيسية للرؤية والتوسع." },
      { title: "المستثمرون", desc: "عقارات ذات نمو مرتفع وعوائد إيجارية ممتازة." },
      { title: "رواد الأعمال", desc: "تصاميم حديثة للبيع بالتجزئة والمكاتب والعمل المشترك." }
    ],
    benefitsTitle: "لماذا تختار مساحاتنا التجارية؟",
    benefits: [
      { title: "مواقع رئيسية", desc: "قريبة من مراكز التقنية والمدارس والمستشفيات ومراكز التسوق." },
      { title: "مرافق حديثة", desc: "نادي، مسبح، صالات رياضية، ومساحات لعب للأطفال." },
      { title: "الرفاهية والراحة", desc: "تصاميم واسعة وديكورات عالية الجودة." },
      { title: "قيمة الاستثمار", desc: "إمكانات ممتازة للنمو والعائد الإيجاري." },
      { title: "مطورون موثوقون", desc: "مشاريع موثوقة بوثائق واضحة وجودة بناء." },
      { title: "خيارات مرنة", desc: "اختر من المكاتب والمحلات ومساحات العمل." }
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما أنواع المساحات التجارية المتوفرة؟",
        answer: "نوفر مكاتب، محلات، مساحات عمل مشتركة، ومستودعات تناسب احتياجات الأعمال المختلفة."
      },
      {
        question: "هل توجد خيارات اقتصادية؟",
        answer: "نعم، لدينا مساحات بأسعار مناسبة بالإضافة إلى خيارات فاخرة ومميزة."
      },
      {
        question: "هل تقع العقارات في مناطق رئيسية؟",
        answer: "بالتأكيد. جميع مشاريعنا تقع بالقرب من مراكز الأعمال والمواصلات والخدمات."
      },
      {
        question: "هل يوجد دعم تمويلي؟",
        answer: "نعم، نقدم المساعدة في القروض البنكية وخيارات الدفع السهلة."
      },
      {
        question: "هل يمكن توقع عوائد جيدة على الاستثمار؟",
        answer: "نعم، تقع عقاراتنا التجارية في مناطق نمو مرتفع مع إمكانات ممتازة للعائد والنمو."
      }
    ],
    ctaTitle: "جاهز لحجز مساحتك التجارية؟",
    ctaDesc: "استكشف مجموعتنا الحصرية من المساحات التجارية اليوم وابحث عن موقع يناسب رؤيتك.",
    ctaBtn: "اتصل بنا اليوم"
  },
  he: {
    heroTitle: "גלה",
    heroHighlight: "מרחבים מסחריים מובילים",
    featuredTitle: "מרחבים מסחריים",
    featuredDesc: "המרחבים המסחריים שלנו ממוקמים באזורים עסקיים מרכזיים, עם נראות גבוהה, גישה נוחה ותכנון מודרני. משרדים, חנויות, חללי עבודה ומחסנים מותאמים לצרכי עסקים מגוונים. כל נכס כולל חניה רחבה, אבטחה 24/7 ותשתית חכמה להצלחת העסק שלך. קרבה לתחבורה, מסעדות ושירותים עסקיים מבטיחה נוחות וחיבור לצוות וללקוחות.",
    featuredList: [
      { icon: "📍", text: "פונה מערב" },
      { icon: "🏠", text: "מיקום: פלורידה, ארה\"ב" },
      { icon: "🛏️", text: "3 חדרים" }
    ],
    contactNow: "צור קשר עכשיו",
    whoTitle: "למי מתאימים המרחבים שלנו?",
    whoDesc: "המרחבים המסחריים שלנו אידיאליים לסטארטאפים, עסקים מבוססים, משקיעים ויזמים שמחפשים מיקום עסקי מודרני, בטוח ומחובר.",
    whoCards: [
      { title: "סטארטאפים", desc: "מרחבים גמישים לצוותים מתפתחים וחדשנות." },
      { title: "עסקים מבוססים", desc: "מיקומים מרכזיים לנראות ולהתרחבות." },
      { title: "משקיעים", desc: "נכסים בצמיחה גבוהה עם תשואות מצוינות." },
      { title: "יזמים", desc: "תכנון מודרני לחנויות, משרדים וחללי עבודה." }
    ],
    benefitsTitle: "למה לבחור במרחבים המסחריים שלנו?",
    benefits: [
      { title: "מיקומים מרכזיים", desc: "קרוב למרכזי הייטק, בתי ספר, בתי חולים ומרכזי קניות." },
      { title: "מתקנים מודרניים", desc: "מועדון, בריכה, חדרי כושר ומגרשי משחקים." },
      { title: "יוקרה ונוחות", desc: "תכנון מרווח וגימור איכותי." },
      { title: "ערך השקעה", desc: "פוטנציאל גבוה לצמיחה ותשואה." },
      { title: "יזמים אמינים", desc: "פרויקטים אמינים עם מסמכים ברורים ובנייה איכותית." },
      { title: "אפשרויות גמישות", desc: "בחר ממשרדים, חנויות וחללי עבודה." }
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      {
        question: "אילו סוגי מרחבים מסחריים זמינים?",
        answer: "אנו מציעים משרדים, חנויות, חללי עבודה ומחסנים לצרכים עסקיים מגוונים."
      },
      {
        question: "האם יש אפשרויות בתקציב נמוך?",
        answer: "כן, יש לנו מרחבים במחירים נוחים וגם אפשרויות יוקרתיות."
      },
      {
        question: "האם הנכסים ממוקמים באזורים מרכזיים?",
        answer: "בהחלט. כל הפרויקטים שלנו ממוקמים ליד מרכזי עסקים, תחבורה ושירותים."
      },
      {
        question: "האם יש תמיכה במימון?",
        answer: "כן, אנו מסייעים בקבלת הלוואות עסקיות ואפשרויות תשלום נוחות."
      },
      {
        question: "האם אפשר לצפות לתשואות טובות על ההשקעה?",
        answer: "כן, הנכסים שלנו ממוקמים באזורים בצמיחה גבוהה עם פוטנציאל מצוין לתשואה."
      }
    ],
    ctaTitle: "מוכן להזמין את המרחב שלך?",
    ctaDesc: "גלה את המגוון הבלעדי של מרחבים מסחריים ומצא מיקום שמתאים לחזון שלך.",
    ctaBtn: "צור קשר היום"
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function CommercialSpacesPage() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem("theme") || "light";
        setTheme(newTheme);
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);

      const syncLanguage = () => {
        const lang = localStorage.getItem("language") || "en";
        setLanguage(lang);
        document.documentElement.dir = getDirection(lang);
      };
      syncLanguage();
      window.addEventListener("storage", syncLanguage);
      window.addEventListener("language-changed", syncLanguage);

      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
        window.removeEventListener("storage", syncLanguage);
        window.removeEventListener("language-changed", syncLanguage);
      };
    }
  }, []);

  const t = useMemo(() => translations[language], [language]);
  const isRtl = getDirection(language) === "rtl";

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "min-h-screen bg-black text-white"
          : "min-h-screen bg-white text-black"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen grid place-items-center text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
            {t.heroTitle}{" "}
            <span style={{ color: "#00bfff" }}>{t.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-white">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section
        className={`py-16 transition-colors duration-500 ${
          theme === "dark" ? "bg-[#181818] text-white" : "bg-[#f0f8ff] text-black"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left: Property Image */}
          <div className="flex justify-center animate-fadeInLeft">
            <img
              src={a1}
              alt={t.featuredTitle}
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>
          {/* Right: Property Details */}
          <div className="space-y-4 animate-fadeInRight">
            <h2
              className={`text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.featuredTitle}
            </h2>
            <p
              className={`text-lg leading-relaxed $${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ textAlign: "justify" }}
            >
              {t.featuredDesc}
            </p>
            <ul
              className={`space-y-2 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {t.featuredList.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <a href="/contactus" target="_blank" rel="noopener noreferrer">
              <button
                className={`mt-6 px-6 py-3 rounded-lg transition ${
                  theme === "dark"
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                {t.contactNow}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2
              className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2"
              style={{ color: theme === "dark" ? "#00bfff" : "#222" }}
            >
              {t.whoTitle}
            </h2>
            <p
              className={`text-lg leading-relaxed mb-6 text-justify ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {t.whoDesc}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.whoCards.map((card) => (
              <div
                key={card.title}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${
                  theme === "dark" ? "bg-[#222]" : "bg-[#fdfcf9]"
                }`}
              >
                <h3
                  className="text-xl font-semibold leading-tight mb-2"
                  style={{ color: "#00bfff" }}
                >
                  {card.title}
                </h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-200 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed"
                  }
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="relative w-full bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${a2})` }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,191,255,0.7)" }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-8 drop-shadow-lg">
            {t.benefitsTitle}
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {t.benefits.map((card) => (
              <div
                key={card.title}
                className={`backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition ${
                  theme === "dark"
                    ? "bg-[#222] text-white"
                    : "bg-white text-black"
                }`}
              >
                <h3 className="text-xl font-semibold leading-tight mb-3">{card.title}</h3>
                <p className="text-lg leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-center mb-8"
            style={{ color: "#00bfff" }}
          >
            {t.faqTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ${
                  theme === "dark"
                    ? "bg-[#222] text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold leading-tight">{faq.question}</h3>
                  <span
                    className="font-bold text-xl"
                    style={{ color: "#00bfff" }}
                  >
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p
                    className={
                      theme === "dark" ? "mt-4 text-gray-200 text-lg leading-relaxed" : "mt-4 text-gray-600 text-lg leading-relaxed"
                    }
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
<section
  className={`py-20 ${
    theme === "dark" ? "bg-[#222]" : "bg-[#e6f7ff]"
  }`}
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6">
    <div className="space-y-6 flex flex-col justify-center h-full">
  <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2">
        {t.ctaTitle}
      </h2>
      <p
        className={`text-lg leading-relaxed ${
          theme === "dark" ? "text-gray-200" : "text-gray-600"
        }`}
      >
        {t.ctaDesc}
      </p>
      <button
        className={`px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ${
          theme === "dark"
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {t.ctaBtn}
      </button>
    </div>
    <div className="flex justify-center items-center h-full">
      <img
        src={a2}
        alt="Commercial CTA"
        className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
      />
    </div>
  </div>
</section>

    </div>
  );
}