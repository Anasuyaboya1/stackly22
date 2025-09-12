import React, { useState, useEffect, useMemo } from "react";

import heroVideo from "../assets/he9.mp4";
import a1 from "../assets/Residential Properties.jpg";
import a2 from "../assets/thanks1.jpg";
import a3 from "../assets/contact1.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Transform Your Space with",
    heroHighlight: "Interior & Renovation Services",
    featuredTitle: "Our Interior & Renovation Services",
    featuredDesc:
      "We offer personalized interior design and renovation solutions for individual homeowners. Our services include full home redesign, modular kitchen design, bathroom and bedroom renovation, furniture customization, and project management. We ensure every detail aligns with your vision and lifestyle.",
    featuredList: [
      { icon: "🏡", text: "Residential Spaces" },
      { icon: "🎨", text: "Custom Designs" },
      { icon: "🛠️", text: "Full Renovation Services" }
    ],
    contactNow: "Schedule Consultation",
    whoTitle: "Who Can Benefit From Our Services?",
    whoDesc:
      "Our interior and renovation services are perfect for homeowners, apartment owners, and real estate investors looking to enhance property value, functionality, and aesthetics.",
    whoCards: [
      { title: "Homeowners", desc: "Transform your living spaces with expert design and renovation." },
      { title: "Apartment Owners", desc: "Upgrade your units for comfort, style, and functionality." },
      { title: "Investors", desc: "Increase property value with strategic renovations." },
      { title: "Interior Enthusiasts", desc: "Bring your dream interiors to life with our team." }
    ],
    benefitsTitle: "Why Choose Our Interior & Renovation Services?",
    benefits: [
      { title: "Customized Designs", desc: "Tailored interiors to match your style and preferences." },
      { title: "Expert Craftsmanship", desc: "Professional execution for flawless results." },
      { title: "Material Selection", desc: "High-quality materials and finishes for durability." },
      { title: "Project Management", desc: "End-to-end management for hassle-free renovations." },
      { title: "Timely Completion", desc: "We stick to schedules and keep you updated." },
      { title: "Enhanced Property Value", desc: "Increase comfort, aesthetics, and market value." }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "What types of interior design services do you offer?",
        answer:
          "We provide complete interior design, renovation, remodeling, space optimization, and custom furniture solutions for residential and commercial properties."
      },
      {
        question: "Do you handle renovation projects for individual homeowners?",
        answer:
          "Yes, we specialize in helping individual homeowners transform their spaces according to their style, needs, and budget."
      },
      {
        question: "Can you help with both modern and traditional designs?",
        answer:
          "Absolutely! Our designers are skilled in various styles including modern, contemporary, traditional, minimalist, and luxury interiors."
      },
      {
        question: "Do you manage the entire renovation process?",
        answer:
          "Yes, from initial design concepts to material procurement and execution, we handle every stage for a seamless renovation experience."
      },
      {
        question: "How long does a typical renovation take?",
        answer:
          "Project timelines vary depending on the scope, but we provide a detailed schedule and regular updates to ensure timely completion."
      }
    ],
    ctaTitle: "Ready to Transform Your Home?",
    ctaDesc:
      "Contact us today to schedule a consultation and start your interior design or renovation project with our experts.",
    ctaBtn: "Schedule Consultation"
  },
  ar: {
    heroTitle: "حوّل مساحتك مع",
    heroHighlight: "خدمات التصميم الداخلي والتجديد",
    featuredTitle: "خدمات التصميم الداخلي والتجديد",
    featuredDesc:
      "نقدم حلول تصميم داخلي وتجديد مخصصة لأصحاب المنازل. تشمل خدماتنا إعادة تصميم كاملة للمنزل، تصميم المطابخ المعيارية، تجديد الحمامات وغرف النوم، تخصيص الأثاث، وإدارة المشروع. نضمن أن يتوافق كل تفصيل مع رؤيتك ونمط حياتك.",
    featuredList: [
      { icon: "🏡", text: "مساحات سكنية" },
      { icon: "🎨", text: "تصاميم مخصصة" },
      { icon: "🛠️", text: "خدمات تجديد كاملة" }
    ],
    contactNow: "جدولة استشارة",
    whoTitle: "من يمكنه الاستفادة من خدماتنا؟",
    whoDesc:
      "خدمات التصميم الداخلي والتجديد لدينا مثالية لأصحاب المنازل، مالكي الشقق، والمستثمرين العقاريين الذين يسعون لتعزيز قيمة العقار والوظائف والجماليات.",
    whoCards: [
      { title: "أصحاب المنازل", desc: "حوّل مساحاتك المعيشية بتصميم وتجديد احترافي." },
      { title: "مالكو الشقق", desc: "قم بترقية وحداتك للراحة والأناقة والوظائف." },
      { title: "المستثمرون", desc: "زد قيمة العقار من خلال التجديدات الاستراتيجية." },
      { title: "محبو التصميم الداخلي", desc: "حقق حلمك في التصميم الداخلي مع فريقنا." }
    ],
    benefitsTitle: "لماذا تختار خدماتنا؟",
    benefits: [
      { title: "تصاميم مخصصة", desc: "تصاميم داخلية تناسب أسلوبك وتفضيلاتك." },
      { title: "حرفية خبيرة", desc: "تنفيذ احترافي لنتائج مثالية." },
      { title: "اختيار المواد", desc: "مواد وتشطيبات عالية الجودة للمتانة." },
      { title: "إدارة المشروع", desc: "إدارة شاملة لتجديدات بدون عناء." },
      { title: "إنجاز في الوقت المحدد", desc: "نلتزم بالجداول الزمنية ونبقيك على اطلاع." },
      { title: "زيادة قيمة العقار", desc: "زد الراحة والجمال والقيمة السوقية." }
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما أنواع خدمات التصميم الداخلي التي تقدمونها؟",
        answer:
          "نقدم تصميم داخلي كامل، تجديد، إعادة تشكيل، تحسين المساحات، وحلول أثاث مخصصة للعقارات السكنية والتجارية."
      },
      {
        question: "هل تديرون مشاريع التجديد لأصحاب المنازل الأفراد؟",
        answer:
          "نعم، نحن متخصصون في مساعدة أصحاب المنازل الأفراد على تحويل مساحاتهم حسب أسلوبهم واحتياجاتهم وميزانيتهم."
      },
      {
        question: "هل يمكنكم المساعدة في التصاميم الحديثة والتقليدية؟",
        answer:
          "بالتأكيد! مصممونا ماهرون في أنماط متنوعة مثل الحديث، المعاصر، التقليدي، البسيط، والفاخر."
      },
      {
        question: "هل تديرون عملية التجديد بالكامل؟",
        answer:
          "نعم، من المفاهيم الأولية إلى شراء المواد والتنفيذ، ندير كل مرحلة لتجربة تجديد سلسة."
      },
      {
        question: "كم يستغرق التجديد عادة؟",
        answer:
          "تختلف مدة المشروع حسب النطاق، لكننا نقدم جدولاً مفصلاً وتحديثات منتظمة لضمان الإنجاز في الوقت المحدد."
      }
    ],
    ctaTitle: "جاهز لتحويل منزلك؟",
    ctaDesc:
      "اتصل بنا اليوم لجدولة استشارة وابدأ مشروع التصميم الداخلي أو التجديد مع خبرائنا.",
    ctaBtn: "جدولة استشارة"
  },
  he: {
    heroTitle: "הפוך את הבית שלך עם",
    heroHighlight: "שירותי עיצוב ושיפוץ פנים",
    featuredTitle: "שירותי עיצוב ושיפוץ פנים",
    featuredDesc:
      "אנו מציעים פתרונות עיצוב פנים ושיפוץ מותאמים אישית לבעלי בתים. השירותים כוללים עיצוב מחדש מלא, מטבח מודולרי, שיפוץ חדרי רחצה וחדרי שינה, התאמת ריהוט וניהול פרויקט. אנו דואגים שכל פרט יתאים לחזון ולאורח החיים שלך.",
    featuredList: [
      { icon: "🏡", text: "חללים למגורים" },
      { icon: "🎨", text: "עיצובים מותאמים אישית" },
      { icon: "🛠️", text: "שירותי שיפוץ מלאים" }
    ],
    contactNow: "קבע פגישה",
    whoTitle: "מי יכול להרוויח מהשירותים שלנו?",
    whoDesc:
      "השירותים שלנו מתאימים לבעלי בתים, בעלי דירות ומשקיעי נדל\"ן שרוצים לשפר ערך, פונקציונליות ואסתטיקה.",
    whoCards: [
      { title: "בעלי בתים", desc: "הפוך את חללי המגורים שלך עם עיצוב ושיפוץ מקצועי." },
      { title: "בעלי דירות", desc: "שדרג את היחידות שלך לנוחות, סגנון ופונקציונליות." },
      { title: "משקיעים", desc: "הגדל את ערך הנכס עם שיפוצים אסטרטגיים." },
      { title: "חובבי עיצוב פנים", desc: "הגשם את חלום העיצוב שלך עם הצוות שלנו." }
    ],
    benefitsTitle: "למה לבחור בשירותי העיצוב והשיפוץ שלנו?",
    benefits: [
      { title: "עיצובים מותאמים אישית", desc: "עיצוב פנים בהתאמה אישית לסגנון שלך." },
      { title: "ביצוע מקצועי", desc: "ביצוע מקצועי לתוצאות מושלמות." },
      { title: "בחירת חומרים", desc: "חומרים וגימורים איכותיים לעמידות." },
      { title: "ניהול פרויקט", desc: "ניהול מלא לשיפוץ ללא טרחה." },
      { title: "השלמה בזמן", desc: "עמידה בלוחות זמנים ועדכונים שוטפים." },
      { title: "ערך נכס מוגבר", desc: "הגדל נוחות, אסתטיקה וערך שוק." }
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      {
        question: "אילו שירותי עיצוב פנים אתם מציעים?",
        answer:
          "אנו מספקים עיצוב פנים מלא, שיפוץ, אופטימיזציה של חללים וריהוט מותאם אישית לנכסים פרטיים ומסחריים."
      },
      {
        question: "האם אתם מנהלים פרויקטים לבעלי בתים פרטיים?",
        answer:
          "כן, אנו מתמחים בעזרה לבעלי בתים פרטיים לשנות את החללים לפי סגנון, צרכים ותקציב."
      },
      {
        question: "האם אתם עובדים גם בסגנון מודרני וגם מסורתי?",
        answer:
          "בהחלט! המעצבים שלנו מיומנים בסגנונות מודרניים, עכשוויים, מסורתיים, מינימליסטיים ויוקרתיים."
      },
      {
        question: "האם אתם מנהלים את כל תהליך השיפוץ?",
        answer:
          "כן, מהקונספט הראשוני ועד רכישת חומרים וביצוע, אנו מנהלים כל שלב לשיפוץ חלק."
      },
      {
        question: "כמה זמן לוקח שיפוץ טיפוסי?",
        answer:
          "הזמן משתנה לפי היקף הפרויקט, אך אנו מספקים לוח זמנים מפורט ועדכונים שוטפים להשלמה בזמן."
      }
    ],
    ctaTitle: "מוכן לשדרג את הבית שלך?",
    ctaDesc:
      "צור קשר לקביעת פגישה והתחל את פרויקט העיצוב או השיפוץ עם המומחים שלנו.",
    ctaBtn: "קבע פגישה"
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function InteriorRenovationPage() {
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-snug text-white">
            {t.heroTitle} <span style={{ color: "#00bfff" }}>{t.heroHighlight}</span>
          </h1>
        </div>
      </section>

      {/* Featured Services */}
      <section
        className={`py-16 transition-colors duration-500 ${
          theme === "dark" ? "bg-[#181818] text-white" : "bg-[#f0f8ff] text-black"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left: Service Image */}
          <div className="flex justify-center animate-fadeInLeft">
            <img
              src={a1}
              alt={t.featuredTitle}
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>
          {/* Right: Service Details */}
          <div className="space-y-4 animate-fadeInRight">
            <h2
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.featuredTitle}
            </h2>
            <p
              className={`${
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
      <section className={`py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2" style={{ color: theme === "dark" ? "#00bfff" : "#222" }}>
              {t.whoTitle}
            </h2>
            <p className={`text-lg mb-6 text-justify ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
              {t.whoDesc}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.whoCards.map((card) => (
              <div key={card.title} className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === "dark" ? "bg-[#222]" : "bg-[#fdfcf9]"}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#00bfff" }}>
                  {card.title}
                </h3>
                <p className={theme === "dark" ? "text-gray-200" : "text-gray-600"}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative w-full bg-cover bg-center py-20" style={{ backgroundImage: `url(${a2})` }}>
        <div className="absolute inset-0" style={{ background: "rgba(0,191,255,0.7)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-8 drop-shadow-lg">
            {t.benefitsTitle}
          </h2>
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
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-center mb-8" style={{ color: "#00bfff" }}>
            {t.faqTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ${theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold leading-tight">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: "#00bfff" }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className={`text-lg leading-relaxed mb-4 mt-4 ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>{faq.answer}</p>
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