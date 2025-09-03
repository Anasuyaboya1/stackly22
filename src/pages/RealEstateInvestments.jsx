import React, { useState, useEffect, useMemo } from "react";

import heroVideo from "../assets/he6.mp4";
import a1 from "../assets/Residential Properties.jpg";
import a2 from "../assets/thanks1.jpg";
import a3 from "../assets/a3.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Invest in",
    heroHighlight: "Real Estate",
    featuredTitle: "Our Real Estate Investment Opportunities",
    featuredDesc:
      "We provide a curated selection of investment options tailored for individual investors. Choose from residential apartments, villas, commercial properties, and high-potential land plots. Our team ensures transparency, expert guidance, and support throughout your investment journey.",
    featuredList: [
      { icon: "🏢", text: "Residential & Commercial" },
      { icon: "💹", text: "High ROI Potential" },
      { icon: "🔑", text: "Hassle-Free Process" }
    ],
    startInvesting: "Start Investing",
    whoTitle: "Who Can Benefit From Real Estate Investments?",
    whoDesc:
      "Our investment solutions are ideal for individual investors, first-time buyers, seasoned property owners, and anyone looking to diversify their portfolio with secure, high-return real estate options.",
    whoCards: [
      { title: "Individual Investors", desc: "Grow wealth with high-potential real estate properties." },
      { title: "First-Time Buyers", desc: "Guidance and support for safe entry into property investment." },
      { title: "Seasoned Investors", desc: "Expand and diversify your existing property portfolio." },
      { title: "Real Estate Enthusiasts", desc: "Access curated properties with strong growth prospects." }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "What types of real estate investments do you offer?",
        answer: "We provide investment opportunities in residential apartments, villas, commercial spaces, and land plots to suit diverse investor needs."
      },
      {
        question: "Can beginners invest in real estate?",
        answer: "Absolutely! We guide individual investors through the process, offering personalized investment strategies and market insights."
      },
      {
        question: "Do you help with property acquisition and legal processes?",
        answer: "Yes, we handle property selection, documentation, legal compliance, and registration to ensure a seamless investment experience."
      },
      {
        question: "What kind of returns can I expect?",
        answer: "Returns vary by property type and location, but we focus on high-growth areas that offer excellent potential for capital appreciation and rental income."
      },
      {
        question: "Is property management included?",
        answer: "Yes, we provide optional property management services to help investors maximize rental income and maintain their properties efficiently."
      }
    ],
    ctaTitle: "Ready to Start Your Real Estate Investment?",
    ctaDesc: "Contact us today to explore profitable real estate investment opportunities tailored for individual investors.",
    ctaBtn: "Contact Us Today"
  },
  ar: {
    heroTitle: "استثمر في",
    heroHighlight: "العقارات",
    featuredTitle: "فرص الاستثمار العقاري لدينا",
    featuredDesc:
      "نوفر مجموعة مختارة من خيارات الاستثمار المصممة للمستثمرين الأفراد. اختر من الشقق السكنية، الفلل، العقارات التجارية، والأراضي ذات الإمكانيات العالية. يضمن فريقنا الشفافية والإرشاد والدعم طوال رحلة الاستثمار.",
    featuredList: [
      { icon: "🏢", text: "سكني وتجاري" },
      { icon: "💹", text: "عائد مرتفع" },
      { icon: "🔑", text: "عملية سهلة" }
    ],
    startInvesting: "ابدأ الاستثمار",
    whoTitle: "من يمكنه الاستفادة من الاستثمار العقاري؟",
    whoDesc:
      "حلولنا الاستثمارية مثالية للمستثمرين الأفراد، المشترين لأول مرة، أصحاب العقارات ذوي الخبرة، وكل من يبحث عن تنويع محفظته بعقارات آمنة وعالية العائد.",
    whoCards: [
      { title: "المستثمرون الأفراد", desc: "نمِ ثروتك مع عقارات ذات إمكانيات عالية." },
      { title: "المشترون لأول مرة", desc: "إرشاد ودعم لدخول آمن في الاستثمار العقاري." },
      { title: "المستثمرون ذوو الخبرة", desc: "وسع ونوع محفظتك العقارية الحالية." },
      { title: "محبو العقارات", desc: "احصل على عقارات مختارة ذات فرص نمو قوية." }
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما أنواع الاستثمارات العقارية التي تقدمونها؟",
        answer: "نوفر فرص الاستثمار في الشقق السكنية، الفلل، المساحات التجارية، والأراضي لتلبية احتياجات المستثمرين المختلفة."
      },
      {
        question: "هل يمكن للمبتدئين الاستثمار في العقارات؟",
        answer: "بالتأكيد! نرشد المستثمرين الأفراد خلال العملية ونقدم استراتيجيات استثمار شخصية ورؤى السوق."
      },
      {
        question: "هل تساعدون في شراء العقار والإجراءات القانونية؟",
        answer: "نعم، نتولى اختيار العقار، التوثيق، الامتثال القانوني، والتسجيل لضمان تجربة استثمار سلسة."
      },
      {
        question: "ما نوع العائد المتوقع؟",
        answer: "العائد يختلف حسب نوع العقار والموقع، لكننا نركز على المناطق ذات النمو العالي التي توفر إمكانيات ممتازة لزيادة رأس المال والدخل الإيجاري."
      },
      {
        question: "هل تشمل الخدمة إدارة العقار؟",
        answer: "نعم، نوفر خدمات إدارة العقار الاختيارية لمساعدة المستثمرين على تعظيم الدخل الإيجاري وصيانة العقار بكفاءة."
      }
    ],
    ctaTitle: "جاهز لبدء استثمارك العقاري؟",
    ctaDesc: "اتصل بنا اليوم لاستكشاف فرص الاستثمار العقاري المربحة المصممة للمستثمرين الأفراد.",
    ctaBtn: "اتصل بنا الآن"
  },
  he: {
    heroTitle: "השקיע ב",
    heroHighlight: "נדל\"ן",
    featuredTitle: "הזדמנויות ההשקעה שלנו בנדל\"ן",
    featuredDesc:
      "אנו מציעים מבחר השקעות מותאמות למשקיעים פרטיים. בחר מדירות, וילות, נכסים מסחריים ומגרשים עם פוטנציאל גבוה. הצוות שלנו מבטיח שקיפות, ליווי מקצועי ותמיכה לאורך כל הדרך.",
    featuredList: [
      { icon: "🏢", text: "מגורים ומסחרי" },
      { icon: "💹", text: "פוטנציאל תשואה גבוה" },
      { icon: "🔑", text: "תהליך פשוט" }
    ],
    startInvesting: "התחל להשקיע",
    whoTitle: "למי מתאימות השקעות נדל\"ן?",
    whoDesc:
      "הפתרונות שלנו מתאימים למשקיעים פרטיים, רוכשים ראשונים, בעלי נכסים מנוסים ולכל מי שמחפש לגוון את תיק ההשקעות בנדל\"ן בטוח ורווחי.",
    whoCards: [
      { title: "משקיעים פרטיים", desc: "הגדל הון עם נכסים בעלי פוטנציאל גבוה." },
      { title: "רוכשים ראשונים", desc: "ליווי ותמיכה לכניסה בטוחה להשקעות נדל\"ן." },
      { title: "משקיעים מנוסים", desc: "הרחב וגוון את תיק הנדל\"ן שלך." },
      { title: "חובבי נדל\"ן", desc: "גישה לנכסים נבחרים עם פוטנציאל צמיחה גבוה." }
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      {
        question: "אילו סוגי השקעות נדל\"ן אתם מציעים?",
        answer: "אנו מציעים השקעות בדירות, וילות, נכסים מסחריים ומגרשים לצרכים מגוונים."
      },
      {
        question: "האם מתחילים יכולים להשקיע בנדל\"ן?",
        answer: "בהחלט! אנו מלווים משקיעים פרטיים בתהליך ומציעים אסטרטגיות אישיות ותובנות שוק."
      },
      {
        question: "האם אתם מסייעים ברכישת נכס ותהליכים משפטיים?",
        answer: "כן, אנו מטפלים בבחירת נכס, תיעוד, עמידה בחוק ורישום לניהול השקעה חלקה."
      },
      {
        question: "איזה תשואה אפשר לצפות?",
        answer: "התשואה משתנה לפי סוג ומיקום הנכס, אך אנו מתמקדים באזורים בצמיחה גבוהה עם פוטנציאל מצוין להון ודמי שכירות."
      },
      {
        question: "האם ניהול נכס כלול?",
        answer: "כן, אנו מציעים שירותי ניהול נכס אופציונליים למקסום הכנסה וניהול יעיל."
      }
    ],
    ctaTitle: "מוכן להתחיל להשקיע בנדל\"ן?",
    ctaDesc: "צור קשר היום לגילוי הזדמנויות השקעה רווחיות המותאמות למשקיעים פרטיים.",
    ctaBtn: "צור קשר עכשיו"
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function RealEstateInvestmentsPage() {
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
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Featured Investments */}
      <section
        className={`py-16 transition-colors duration-500 ${
          theme === "dark" ? "bg-[#181818] text-white" : "bg-[#f0f8ff] text-black"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left: Investment Image */}
          <div className="flex justify-center animate-fadeInLeft">
            <img
              src={a1}
              alt={t.featuredTitle}
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>
          {/* Right: Investment Details */}
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
                {t.startInvesting}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section
        className={`py-16 transition-colors duration-500 ${
          theme === "dark" ? "bg-[#222] text-white" : "bg-[#e6f7ff] text-black"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug"
              style={{ color: theme === "dark" ? "#00bfff" : "#222" }}
            >
              {t.whoTitle}
            </h2>
            <p
              className={`text-lg mb-6 text-justify ${
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
                  theme === "dark" ? "bg-[#181818]" : "bg-[#fdfcf9]"
                }`}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#00bfff" }}
                >
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

      {/* FAQs */}
      <section className={`py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: "#00bfff" }}>
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
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
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