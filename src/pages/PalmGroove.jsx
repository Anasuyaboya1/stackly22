import React, { useState, useEffect, useMemo } from "react";

import heroVideo from "../assets/he8.mp4";
import a1 from "../assets/Residential Properties.jpg";
import a2 from "../assets/thanks1.jpg";
import a3 from "../assets/a3.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Welcome to",
    heroHighlight: "Palm Grove Villas",
    featuredTitle: "Luxury Villas Designed for Modern Living",
    featuredDesc:
      "Palm Grove Villas offer premium 3BHK, 4BHK, and 5BHK homes with contemporary designs, private gardens, and ample space for families to live comfortably. Enjoy serene surroundings, lush landscapes, and state-of-the-art amenities that cater to a sophisticated lifestyle.",
    featuredList: [
      { icon: "🏡", text: "3-5 BHK Luxury Villas" },
      { icon: "🌳", text: "Private Gardens & Landscaped Areas" },
      { icon: "🏊", text: "Clubhouse & Swimming Pool" }
    ],
    bookNow: "Book Your Villa",
    whoTitle: "Who Should Consider Palm Grove Villas?",
    whoDesc:
      "Ideal for families, investors, and professionals looking for a luxurious and peaceful lifestyle with modern amenities and excellent connectivity.",
    whoCards: [
      { title: "Families", desc: "Spacious villas with private gardens and top-class amenities for family living." },
      { title: "Investors", desc: "High-potential real estate investment with guaranteed value appreciation." },
      { title: "Professionals", desc: "Serene and secure environment perfect for modern professionals." },
      { title: "Retirees", desc: "Peaceful living with luxury comforts and community facilities." }
    ],
    benefitsTitle: "Why Choose Palm Grove Villas?",
    benefits: [
      { title: "Prime Location", desc: "Convenient access to schools, hospitals, and shopping hubs." },
      { title: "Modern Amenities", desc: "Swimming pool, clubhouse, jogging tracks, and landscaped gardens." },
      { title: "Luxury Living", desc: "Spacious, high-quality villas with premium interiors." },
      { title: "Secure Community", desc: "24/7 security and gated community for peace of mind." },
      { title: "Investment Potential", desc: "High-value property with excellent appreciation opportunities." },
      { title: "Eco-Friendly Design", desc: "Sustainable architecture and greenery integrated within the villas." }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "Where are Palm Grove Villas located?",
        answer:
          "Palm Grove Villas are situated in a prime, serene location with easy access to schools, hospitals, shopping centers, and IT hubs."
      },
      {
        question: "What types of villas are available?",
        answer:
          "We offer 3BHK, 4BHK, and 5BHK luxury villas with spacious layouts, private gardens, and modern interiors."
      },
      {
        question: "Are the villas ready-to-move-in?",
        answer:
          "Yes, select villas are ready-to-move-in while others are under final stages of construction with timely possession guarantees."
      },
      {
        question: "What amenities are included?",
        answer:
          "Palm Grove Villas come with clubhouse, swimming pool, landscaped gardens, jogging tracks, and 24/7 security."
      },
      {
        question: "Is financing available for buyers?",
        answer:
          "Yes, we provide assistance with home loans, easy EMI options, and tie-ups with multiple banks to make purchasing convenient."
      }
    ],
    ctaTitle: "Ready to Own Your Dream Villa?",
    ctaDesc:
      "Contact us today to schedule a visit and secure your luxurious Palm Grove Villa.",
    ctaBtn: "Schedule a Visit"
  },
  ar: {
    heroTitle: "مرحبًا بك في",
    heroHighlight: "فلل بالم جروف",
    featuredTitle: "فلل فاخرة مصممة للعيش العصري",
    featuredDesc:
      "توفر فلل بالم جروف منازل فاخرة 3 و4 و5 غرف نوم بتصاميم عصرية وحدائق خاصة ومساحات واسعة للعائلات للعيش براحة. استمتع بالهدوء والمناظر الطبيعية والمرافق الحديثة التي تلبي أسلوب حياة راقٍ.",
    featuredList: [
      { icon: "🏡", text: "فلل فاخرة 3-5 غرف نوم" },
      { icon: "🌳", text: "حدائق خاصة ومناطق خضراء" },
      { icon: "🏊", text: "نادي ومسبح" }
    ],
    bookNow: "احجز فيلتك الآن",
    whoTitle: "من يجب أن يفكر في فلل بالم جروف؟",
    whoDesc:
      "مثالية للعائلات والمستثمرين والمحترفين الباحثين عن نمط حياة فاخر وهادئ مع مرافق حديثة واتصال ممتاز.",
    whoCards: [
      { title: "العائلات", desc: "فلل واسعة مع حدائق خاصة ومرافق عالية المستوى للعيش العائلي." },
      { title: "المستثمرون", desc: "استثمار عقاري عالي الإمكانيات مع ضمان زيادة القيمة." },
      { title: "المحترفون", desc: "بيئة هادئة وآمنة مثالية للمحترفين العصريين." },
      { title: "المتقاعدون", desc: "حياة هادئة مع رفاهية ومرافق مجتمعية." }
    ],
    benefitsTitle: "لماذا تختار فلل بالم جروف؟",
    benefits: [
      { title: "موقع مميز", desc: "سهولة الوصول إلى المدارس والمستشفيات ومراكز التسوق." },
      { title: "مرافق حديثة", desc: "مسبح، نادي، مسارات للجري، ومناطق خضراء." },
      { title: "حياة فاخرة", desc: "فلل واسعة وعالية الجودة مع ديكورات فاخرة." },
      { title: "مجتمع آمن", desc: "أمن على مدار الساعة ومجتمع مسور للراحة." },
      { title: "إمكانيات الاستثمار", desc: "عقار عالي القيمة مع فرص ممتازة للنمو." },
      { title: "تصميم صديق للبيئة", desc: "هندسة مستدامة وخضرة مدمجة في الفلل." }
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "أين تقع فلل بالم جروف؟",
        answer:
          "تقع فلل بالم جروف في موقع مميز وهادئ مع سهولة الوصول إلى المدارس والمستشفيات ومراكز التسوق ومراكز التقنية."
      },
      {
        question: "ما أنواع الفلل المتوفرة؟",
        answer:
          "نوفر فلل فاخرة 3 و4 و5 غرف نوم بتصاميم واسعة وحدائق خاصة وديكورات عصرية."
      },
      {
        question: "هل الفلل جاهزة للسكن؟",
        answer:
          "نعم، بعض الفلل جاهزة للسكن والبعض الآخر في مراحل البناء النهائية مع ضمان التسليم في الوقت المحدد."
      },
      {
        question: "ما هي المرافق المتوفرة؟",
        answer:
          "تتوفر نادي، مسبح، حدائق منسقة، مسارات للجري، وأمن على مدار الساعة."
      },
      {
        question: "هل يوجد تمويل للمشترين؟",
        answer:
          "نعم، نوفر المساعدة في القروض العقارية وخيارات الدفع السهلة وربط مع عدة بنوك لتسهيل الشراء."
      }
    ],
    ctaTitle: "جاهز لامتلاك فيلتك الفاخرة؟",
    ctaDesc:
      "اتصل بنا اليوم لتحديد موعد زيارة وتأمين فيلتك الفاخرة في بالم جروف.",
    ctaBtn: "حدد موعد زيارة"
  },
  he: {
    heroTitle: "ברוכים הבאים ל",
    heroHighlight: "וילות Palm Grove",
    featuredTitle: "וילות יוקרתיות בעיצוב מודרני",
    featuredDesc:
      "וילות Palm Grove מציעות בתים יוקרתיים 3, 4 ו-5 חדרים עם עיצוב עכשווי, גינות פרטיות ומרחב למשפחות. תהנה מסביבה שקטה, נוף ירוק ומתקנים מתקדמים לאורח חיים איכותי.",
    featuredList: [
      { icon: "🏡", text: "וילות יוקרה 3-5 חדרים" },
      { icon: "🌳", text: "גינות פרטיות ואזורי נוף" },
      { icon: "🏊", text: "מועדון ובריכת שחייה" }
    ],
    bookNow: "הזמן וילה",
    whoTitle: "למי מתאימות וילות Palm Grove?",
    whoDesc:
      "מתאים למשפחות, משקיעים ואנשי מקצוע שמחפשים איכות חיים יוקרתית ושקטה עם מתקנים מודרניים וקישוריות מצוינת.",
    whoCards: [
      { title: "משפחות", desc: "וילות מרווחות עם גינות פרטיות ומתקנים ברמה גבוהה." },
      { title: "משקיעים", desc: "השקעה נדל\"נית עם פוטנציאל גבוה לעליית ערך." },
      { title: "אנשי מקצוע", desc: "סביבה שקטה ובטוחה מושלמת לאנשי מקצוע מודרניים." },
      { title: "גמלאים", desc: "מגורים שקטים עם נוחות יוקרתית ומתקני קהילה." }
    ],
    benefitsTitle: "למה לבחור בוילות Palm Grove?",
    benefits: [
      { title: "מיקום מרכזי", desc: "גישה נוחה לבתי ספר, בתי חולים ומרכזי קניות." },
      { title: "מתקנים מודרניים", desc: "בריכה, מועדון, מסלולי ריצה וגינות נוף." },
      { title: "חיים יוקרתיים", desc: "וילות מרווחות ואיכותיות עם גימור פרימיום." },
      { title: "קהילה בטוחה", desc: "אבטחה 24/7 וקהילה סגורה לשקט נפשי." },
      { title: "פוטנציאל השקעה", desc: "נכס בעל ערך גבוה עם הזדמנויות מצוינות לעליית ערך." },
      { title: "עיצוב ירוק", desc: "אדריכלות בת-קיימא וצמחיה משולבת בוילות." }
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      {
        question: "היכן ממוקמות וילות Palm Grove?",
        answer:
          "וילות Palm Grove ממוקמות באזור מרכזי ושקט עם גישה נוחה לבתי ספר, בתי חולים, מרכזי קניות ומרכזי הייטק."
      },
      {
        question: "אילו סוגי וילות זמינים?",
        answer:
          "אנו מציעים וילות יוקרה 3, 4 ו-5 חדרים עם תכנון מרווח, גינות פרטיות ועיצוב מודרני."
      },
      {
        question: "האם הוילות מוכנות למגורים?",
        answer:
          "כן, חלק מהוילות מוכנות למגורים ואחרות בשלבי בנייה סופיים עם התחייבות למסירה בזמן."
      },
      {
        question: "אילו מתקנים כלולים?",
        answer:
          "וילות Palm Grove כוללות מועדון, בריכה, גינות נוף, מסלולי ריצה ואבטחה 24/7."
      },
      {
        question: "האם יש אפשרות למימון?",
        answer:
          "כן, אנו מסייעים במשכנתאות, אפשרויות תשלום קלות ושיתופי פעולה עם בנקים."
      }
    ],
    ctaTitle: "מוכן להחזיק בוילה החלומות שלך?",
    ctaDesc:
      "צור קשר לקביעת ביקור ולהבטחת וילה יוקרתית ב-Palm Grove.",
    ctaBtn: "קבע ביקור"
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function PalmGroveVillasPage() {
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
    <div className={`${theme === "dark" ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"}`} dir={isRtl ? "rtl" : "ltr"}>
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-snug text-white">
            {t.heroTitle} <span style={{ color: "#00bfff" }}>{t.heroHighlight}</span>
          </h1>
        </div>
      </section>

      {/* Featured Villas */}
      <section className={`py-16 transition-colors duration-500 ${theme === "dark" ? "bg-[#181818] text-white" : "bg-[#f0f8ff] text-black"}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left: Image */}
          <div className="flex justify-center animate-fadeInLeft">
            <img
              src={a1}
              alt={t.heroHighlight}
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>
          {/* Right: Text Content */}
          <div className="space-y-4 animate-fadeInRight">
            <h2 className={`text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {t.featuredTitle}
            </h2>
            <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} style={{ textAlign: "justify" }}>
              {t.featuredDesc}
            </p>
            <ul className={`space-y-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
              {t.featuredList.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <a href="/contactus" target="_blank" rel="noopener noreferrer">
              <button className={`mt-6 px-6 py-3 rounded-lg transition ${theme === "dark" ? "bg-blue-500 hover:bg-blue-400 text-white" : "bg-blue-600 hover:bg-blue-500 text-white"}`}>
                {t.bookNow}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className={`py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2" style={{ color: theme === "dark" ? "#00bfff" : "#222" }}>
              {t.whoTitle}
            </h2>
            <p className={`text-lg leading-relaxed mb-4 text-justify ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
              {t.whoDesc}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.whoCards.map((card) => (
              <div key={card.title} className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === "dark" ? "bg-[#222]" : "bg-[#fdfcf9]"}`}>
                <h3 className="text-xl font-semibold leading-tight mb-2" style={{ color: "#00bfff" }}>{card.title}</h3>
                <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative w-full bg-cover bg-center py-20" style={{ backgroundImage: `url(${a2})` }}>
        <div className="absolute inset-0" style={{ background: "rgba(0,191,255,0.7)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-8 drop-shadow-lg">{t.benefitsTitle}</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {t.benefits.map((card) => (
              <div key={card.title} className={`backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition ${theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"}`}>
                <h3 className="text-xl font-semibold leading-tight mb-3">{card.title}</h3>
                <p className="text-lg leading-relaxed mb-4">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-center mb-8" style={{ color: "#00bfff" }}>{t.faqTitle}</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.faqs.map((faq, index) => (
              <div key={index} className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ${theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"}`} onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold leading-tight">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: "#00bfff" }}>{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && <p className={`text-lg leading-relaxed mb-4 mt-4 ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>{faq.answer}</p>}
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
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2 text-gray-800">{t.ctaTitle}</h2>
            <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>{t.ctaDesc}</p>
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