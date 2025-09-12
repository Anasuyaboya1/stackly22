import React, { useState, useEffect, useMemo } from "react";

import heroVideo from "../assets/he7.mp4";
import a1 from "../assets/Residential Properties.jpg";
import a2 from "../assets/thanks1.jpg";
import a3 from "../assets/a3.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Professional",
    heroHighlight: "Property Management",
    featuredTitle: "Our Property Management Services",
    featuredDesc:
      "We manage your properties professionally to maximize your returns while minimizing your stress. Our services include tenant management, rent collection, regular inspections, maintenance coordination, and legal compliance. Whether you own residential or commercial properties, our experienced team ensures your investments are protected and profitable.",
    featuredList: [
      { icon: "🏢", text: "Residential & Commercial" },
      { icon: "💼", text: "Full-Service Management" },
      { icon: "📈", text: "Maximize Returns" }
    ],
    getStarted: "Get Started",
    whoTitle: "Who Can Benefit From Our Services?",
    whoDesc:
      "Our property management solutions are ideal for individual property owners, real estate investors, and landlords seeking reliable management services for residential or commercial properties.",
    whoCards: [
      { title: "Property Owners", desc: "Stress-free management of your residential or commercial properties." },
      { title: "Investors", desc: "Maximize rental returns and property value with professional oversight." },
      { title: "Landlords", desc: "Reliable tenant placement, rent collection, and maintenance services." },
      { title: "Real Estate Professionals", desc: "Comprehensive support for property portfolios." }
    ],
    benefitsTitle: "Why Choose Our Property Management?",
    benefits: [
      { title: "Tenant Management", desc: "Screening, leasing, and reliable tenant coordination." },
      { title: "Maintenance & Repairs", desc: "Prompt handling of all property maintenance needs." },
      { title: "Rent Collection", desc: "Timely collection and accounting of rental income." },
      { title: "Legal Compliance", desc: "Ensuring your property adheres to all regulations." },
      { title: "Transparent Reporting", desc: "Regular updates on property status and financials." },
      { title: "Maximized ROI", desc: "Optimize income and property value with expert management." }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "What services do you provide under property management?",
        answer:
          "We offer tenant management, rent collection, maintenance coordination, property inspections, and legal compliance services to ensure hassle-free property ownership."
      },
      {
        question: "Do you handle both residential and commercial properties?",
        answer:
          "Yes, we manage residential apartments, villas, and commercial spaces, ensuring maximum returns and minimal stress for property owners."
      },
      {
        question: "Can you help with tenant placement?",
        answer:
          "Absolutely! We handle tenant screening, leasing agreements, and move-in coordination to find reliable tenants for your property."
      },
      {
        question: "How do you handle maintenance requests?",
        answer:
          "Our team coordinates all maintenance and repair requests promptly, using trusted vendors to keep your property in top condition."
      },
      {
        question: "Is there a service fee for property management?",
        answer:
          "Yes, our service fee is competitive and transparent, calculated as a percentage of rental income or a fixed monthly fee depending on the service package."
      }
    ],
    ctaTitle: "Ready to Simplify Your Property Management?",
    ctaDesc:
      "Contact us today and let our experts manage your properties efficiently while maximizing returns.",
    ctaBtn: "Contact Us Today"
  },
  ar: {
    heroTitle: "إدارة",
    heroHighlight: "العقارات الاحترافية",
    featuredTitle: "خدمات إدارة العقارات",
    featuredDesc:
      "ندير عقاراتك باحترافية لزيادة العائد وتقليل التوتر. تشمل خدماتنا إدارة المستأجرين، تحصيل الإيجار، الفحص الدوري، تنسيق الصيانة، والامتثال القانوني. سواء كنت تملك عقارات سكنية أو تجارية، يضمن فريقنا حماية استثماراتك وتحقيق الأرباح.",
    featuredList: [
      { icon: "🏢", text: "سكني وتجاري" },
      { icon: "💼", text: "إدارة شاملة" },
      { icon: "📈", text: "تعظيم العائد" }
    ],
    getStarted: "ابدأ الآن",
    whoTitle: "من يمكنه الاستفادة من خدماتنا؟",
    whoDesc:
      "حلول إدارة العقارات لدينا مثالية لأصحاب العقارات الأفراد، المستثمرين العقاريين، والمالكين الباحثين عن خدمات إدارة موثوقة للعقارات السكنية أو التجارية.",
    whoCards: [
      { title: "أصحاب العقارات", desc: "إدارة بدون توتر لعقاراتك السكنية أو التجارية." },
      { title: "المستثمرون", desc: "تعظيم العائد وقيمة العقار بإشراف احترافي." },
      { title: "المالكون", desc: "تأجير موثوق، تحصيل الإيجار، وخدمات الصيانة." },
      { title: "محترفو العقارات", desc: "دعم شامل لمحافظ العقارات." }
    ],
    benefitsTitle: "لماذا تختار إدارة العقارات معنا؟",
    benefits: [
      { title: "إدارة المستأجرين", desc: "فحص، تأجير، وتنسيق موثوق للمستأجرين." },
      { title: "الصيانة والإصلاحات", desc: "التعامل السريع مع جميع احتياجات الصيانة." },
      { title: "تحصيل الإيجار", desc: "تحصيل الإيجار في الوقت المناسب ومحاسبة دقيقة." },
      { title: "الامتثال القانوني", desc: "ضمان التوافق مع جميع اللوائح." },
      { title: "تقارير شفافة", desc: "تحديثات منتظمة عن حالة العقار والمالية." },
      { title: "تعظيم العائد", desc: "تحسين الدخل وقيمة العقار بإدارة خبيرة." }
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما الخدمات التي تقدمونها في إدارة العقارات؟",
        answer:
          "نقدم إدارة المستأجرين، تحصيل الإيجار، تنسيق الصيانة، الفحص الدوري، وخدمات الامتثال القانوني لضمان ملكية عقار بدون عناء."
      },
      {
        question: "هل تديرون العقارات السكنية والتجارية؟",
        answer:
          "نعم، ندير الشقق السكنية، الفلل، والمساحات التجارية لضمان عائد مرتفع وراحة للمالك."
      },
      {
        question: "هل تساعدون في إيجاد المستأجرين؟",
        answer:
          "بالتأكيد! نقوم بفحص المستأجرين، إعداد العقود، وتنسيق الانتقال لضمان مستأجرين موثوقين."
      },
      {
        question: "كيف تتعاملون مع طلبات الصيانة؟",
        answer:
          "يقوم فريقنا بتنسيق جميع طلبات الصيانة والإصلاح بسرعة باستخدام موردين موثوقين للحفاظ على العقار في أفضل حالة."
      },
      {
        question: "هل هناك رسوم لخدمة إدارة العقارات؟",
        answer:
          "نعم، رسومنا تنافسية وشفافة، تُحسب كنسبة من الدخل أو رسوم شهرية ثابتة حسب الباقة."
      }
    ],
    ctaTitle: "جاهز لتبسيط إدارة عقارك؟",
    ctaDesc:
      "اتصل بنا اليوم ودع خبرائنا يديرون عقاراتك بكفاءة ويحققون أعلى عائد.",
    ctaBtn: "اتصل بنا الآن"
  },
  he: {
    heroTitle: "ניהול",
    heroHighlight: "נכסים מקצועי",
    featuredTitle: "שירותי ניהול נכסים",
    featuredDesc:
      "אנו מנהלים את הנכסים שלך במקצועיות למקסום תשואה ומינימום דאגות. השירותים כוללים ניהול דיירים, גביית שכירות, בדיקות תקופתיות, תיאום תחזוקה ועמידה בחוק. בין אם מדובר בנכסים פרטיים או מסחריים, הצוות שלנו מבטיח הגנה ורווחיות להשקעות שלך.",
    featuredList: [
      { icon: "🏢", text: "מגורים ומסחרי" },
      { icon: "💼", text: "ניהול מלא" },
      { icon: "📈", text: "מקסום תשואה" }
    ],
    getStarted: "התחל עכשיו",
    whoTitle: "מי יכול להרוויח מהשירותים שלנו?",
    whoDesc:
      "פתרונות ניהול הנכסים שלנו מתאימים לבעלי נכסים פרטיים, משקיעי נדל\"ן ובעלי דירות שמחפשים שירותי ניהול אמינים לנכסים פרטיים או מסחריים.",
    whoCards: [
      { title: "בעלי נכסים", desc: "ניהול ללא דאגות לנכסים פרטיים או מסחריים." },
      { title: "משקיעים", desc: "מקסום תשואה וערך הנכס בניהול מקצועי." },
      { title: "בעלי דירות", desc: "איתור דיירים, גביית שכירות ותחזוקה אמינה." },
      { title: "אנשי נדל\"ן", desc: "תמיכה מלאה בניהול תיקי נכסים." }
    ],
    benefitsTitle: "למה לבחור בניהול נכסים שלנו?",
    benefits: [
      { title: "ניהול דיירים", desc: "סינון, השכרה ותיאום דיירים אמין." },
      { title: "תחזוקה ותיקונים", desc: "טיפול מהיר בכל צורכי התחזוקה." },
      { title: "גביית שכירות", desc: "גבייה בזמן ודיווח מדויק." },
      { title: "עמידה בחוק", desc: "הבטחת עמידה בכל התקנות." },
      { title: "דיווח שקוף", desc: "עדכונים שוטפים על מצב הנכס והפיננסים." },
      { title: "מקסום תשואה", desc: "אופטימיזציה של הכנסה וערך הנכס בניהול מומחה." }
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      {
        question: "אילו שירותים כלולים בניהול נכסים?",
        answer:
          "אנו מספקים ניהול דיירים, גביית שכירות, תיאום תחזוקה, בדיקות תקופתיות ועמידה בחוק לניהול נכס ללא דאגות."
      },
      {
        question: "האם אתם מנהלים נכסים פרטיים ומסחריים?",
        answer:
          "כן, אנו מנהלים דירות, וילות וחללים מסחריים למקסום תשואה ולנוחות הבעלים."
      },
      {
        question: "האם אתם מסייעים באיתור דיירים?",
        answer:
          "בהחלט! אנו מבצעים סינון, חוזים ותיאום כניסה לדיירים אמינים."
      },
      {
        question: "איך אתם מטפלים בבקשות תחזוקה?",
        answer:
          "הצוות שלנו מתאם את כל הבקשות במהירות עם ספקים אמינים לשמירה על הנכס במצב מיטבי."
      },
      {
        question: "האם יש עמלה על ניהול נכסים?",
        answer:
          "כן, העמלה שלנו תחרותית ושקופה, כאחוז מההכנסה או תשלום חודשי קבוע לפי חבילה."
      }
    ],
    ctaTitle: "מוכן לפשט את ניהול הנכס שלך?",
    ctaDesc:
      "צור קשר היום ותן למומחים שלנו לנהל את הנכסים שלך ביעילות ולהשיג תשואה מקסימלית.",
    ctaBtn: "צור קשר עכשיו"
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function PropertyManagementPage() {
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
              className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
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
                {t.getStarted}
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
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
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
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: "#00bfff" }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className={theme === "dark" ? "mt-4 text-gray-200" : "mt-4 text-gray-600"}>
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
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-2 text-gray-800">
              {t.ctaTitle}
            </h2>
            <p
              className={`text-lg ${
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