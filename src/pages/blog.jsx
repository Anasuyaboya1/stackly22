import React, { useState, useEffect, useMemo } from "react";
import blogHero from "../assets/he5.mp4";
import image from "../assets/villa2.jpg";
import image1 from "../assets/villa.jpg";
import image2 from "../assets/villa3.jpg";

// Translations
const translations = {
  en: {
    heroTitle: "Discover Our",
    heroHighlight: "Blogs",
    heroDesc: "Stay ahead in the property market with expert tips, investment strategies, home buying guides, and real estate trends.",
    featured: "Featured",
    article: "Article",
    readMore: "Read More",
    latest: "Latest",
    realEstateBlogs: "Real Estate Blogs",
    comparison: "Real Estate Service Comparison",
    features: [
      "Property Listings",
      "Virtual Tours",
      "Agent Assistance",
      "Home Valuation",
      "Legal Support",
      "Mortgage Assistance",
      "Customer Support"
    ],
    mythsFactsTitle: "Real Estate Myths & Facts",
    myth: "Myth:",
    fact: "Fact:",
    blogCards: [
      {
        title: "Luxury Apartment Trends in 2025",
        desc: "Explore the latest features and amenities buyers are seeking in premium apartments this year.",
        author: "John Doe",
        date: "2025-08-21",
        image: image,
        btn: "Read More"
      },
      {
        title: "Smart Homes: Future of Real Estate",
        desc: "How technology and AI are transforming the way we live in modern smart homes.",
        author: "Sarah Lee",
        date: "2025-08-20",
        image: image1,
        btn: "Explore"
      },
      {
        title: "Affordable Housing in Cities",
        desc: "A deep dive into the challenges and opportunities of affordable housing projects in urban areas.",
        author: "Mark Wilson",
        date: "2025-08-18",
        image: image2,
        btn: "Details"
      }
    ],
    featuredArticle: {
      title: "Luxury Homes Market Boom in 2025",
      description: "Discover why the luxury real estate market is thriving this year and what it means for investors and homebuyers.",
      author: "Emily Realtor",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      createdAt: "2025-08-20T08:00:00",
      link: "#",
      readTime: "5 min read",
      tag: "Luxury"
    },
    servicePlans: [
      { name: "Basic Plan", features: ["✔️", "—", "—", "✔️", "—", "—", "Email Only"] },
      { name: "Premium Plan", features: ["✔️", "✔️", "✔️", "✔️", "✔️", "—", "24/7 Support"] },
      { name: "Elite Plan", features: ["✔️", "✔️", "✔️", "✔️", "✔️", "✔️", "Priority Support"] }
    ],
    mythsFacts: [
      { myth: "You must have 20% down payment to buy a house.", fact: "Many lenders allow as little as 3-5% down payment." },
      { myth: "Real estate always appreciates in value.", fact: "Markets fluctuate; research and timing matter." },
      { myth: "The asking price is the final price.", fact: "Negotiations are common in real estate transactions." }
    ]
  },
  ar: {
    heroTitle: "اكتشف",
    heroHighlight: "رؤى العقارات",
    heroDesc: "ابقَ في صدارة سوق العقارات مع نصائح الخبراء، استراتيجيات الاستثمار، أدلة شراء المنازل، واتجاهات السوق.",
    featured: "مقال",
    article: "مميز",
    readMore: "اقرأ المزيد",
    latest: "أحدث",
    realEstateBlogs: "مدونات العقارات",
    comparison: "مقارنة خدمات العقارات",
    features: [
      "قوائم العقارات",
      "الجولات الافتراضية",
      "مساعدة الوكلاء",
      "تقييم المنزل",
      "الدعم القانوني",
      "مساعدة الرهن العقاري",
      "دعم العملاء"
    ],
    mythsFactsTitle: "خرافات وحقائق العقارات",
    myth: "الخرافة:",
    fact: "الحقيقة:",
    blogCards: [
      {
        title: "اتجاهات الشقق الفاخرة في 2025",
        desc: "استكشف أحدث الميزات والمرافق التي يبحث عنها المشترون في الشقق الفاخرة هذا العام.",
        author: "جون دو",
        date: "2025-08-21",
        image: image,
        btn: "اقرأ المزيد"
      },
      {
        title: "المنازل الذكية: مستقبل العقارات",
        desc: "كيف تغير التكنولوجيا والذكاء الاصطناعي طريقة حياتنا في المنازل الذكية الحديثة.",
        author: "سارة لي",
        date: "2025-08-20",
        image: image1,
        btn: "استكشف"
      },
      {
        title: "الإسكان الميسور في المدن",
        desc: "نظرة معمقة على التحديات وفرص مشاريع الإسكان الميسور في المناطق الحضرية.",
        author: "مارك ويلسون",
        date: "2025-08-18",
        image: image2,
        btn: "تفاصيل"
      }
    ],
    featuredArticle: {
      title: "ازدهار سوق المنازل الفاخرة في 2025",
      description: "اكتشف لماذا يزدهر سوق العقارات الفاخرة هذا العام وما يعنيه للمستثمرين والمشترين.",
      author: "إميلي ريلتور",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      createdAt: "2025-08-20T08:00:00",
      link: "#",
      readTime: "٥ دقائق",
      tag: "فاخر"
    },
    servicePlans: [
      { name: "الخطة الأساسية", features: ["✔️", "—", "—", "✔️", "—", "—", "البريد فقط"] },
      { name: "الخطة المميزة", features: ["✔️", "✔️", "✔️", "✔️", "✔️", "—", "دعم 24/7"] },
      { name: "الخطة النخبوية", features: ["✔️", "✔️", "✔️", "✔️", "✔️", "✔️", "دعم أولوية"] }
    ],
    mythsFacts: [
      { myth: "يجب أن يكون لديك دفعة أولى بنسبة 20٪ لشراء منزل.", fact: "يسمح العديد من المقرضين بدفعة أولى تصل إلى 3-5٪ فقط." },
      { myth: "العقارات دائمًا ترتفع قيمتها.", fact: "الأسواق تتقلب؛ البحث والتوقيت مهمان." },
      { myth: "سعر الطلب هو السعر النهائي.", fact: "المفاوضات شائعة في معاملات العقارات." }
    ]
  },
  he: {
    heroTitle: "גלה את",
    heroHighlight: "תובנות הנדל\"ן שלנו",
    heroDesc: "הישאר מוביל בשוק הנדל\"ן עם טיפים מקצועיים, אסטרטגיות השקעה, מדריכי רכישת דירות ומגמות נדל\"ן.",
    featured: "מאמר",
    article: "מומלץ",
    readMore: "קרא עוד",
    latest: "העדכונים",
    realEstateBlogs: "בלוגי נדל\"ן",
    comparison: "השוואת שירותי נדל\"ן",
    features: [
      "רשימות נכסים",
      "סיורים וירטואליים",
      "סיוע סוכן",
      "הערכת נכס",
      "תמיכה משפטית",
      "סיוע במשכנתא",
      "תמיכה בלקוחות"
    ],
    mythsFactsTitle: "מיתוסים ועובדות בנדל\"ן",
    myth: "מיתוס:",
    fact: "עובדה:",
    blogCards: [
      {
        title: "מגמות דירות יוקרה ב-2025",
        desc: "גלה את התכונות והנוחות החדשות שמחפשים הרוכשים בדירות יוקרה השנה.",
        author: "ג'ון דו",
        date: "2025-08-21",
        image: image,
        btn: "קרא עוד"
      },
      {
        title: "בתים חכמים: עתיד הנדל\"ן",
        desc: "איך טכנולוגיה ובינה מלאכותית משנות את הדרך בה אנו חיים בבתים חכמים מודרניים.",
        author: "שרה לי",
        date: "2025-08-20",
        image: image1,
        btn: "גלה"
      },
      {
        title: "דיור בר-השגה בערים",
        desc: "סקירה מעמיקה של האתגרים וההזדמנויות בפרויקטים של דיור בר-השגה בערים.",
        author: "מארק וילסון",
        date: "2025-08-18",
        image: image2,
        btn: "פרטים"
      }
    ],
    featuredArticle: {
      title: "בום בשוק הבתים היוקרתיים ב-2025",
      description: "גלה מדוע שוק הנדל\"ן היוקרתי פורח השנה ומה זה אומר למשקיעים ורוכשי דירות.",
      author: "אמילי רילטור",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      createdAt: "2025-08-20T08:00:00",
      link: "#",
      readTime: "5 דקות",
      tag: "יוקרה"
    },
    servicePlans: [
      { name: "תוכנית בסיסית", features: ["✔️", "—", "—", "✔️", "—", "—", "דוא\"ל בלבד"] },
      { name: "תוכנית פרימיום", features: ["✔️", "✔️", "✔️", "✔️", "✔️", "—", "תמיכה 24/7"] },
      { name: "תוכנית עלית", features: ["✔️", "✔️", "✔️", "✔️", "✔️", "✔️", "תמיכה מועדפת"] }
    ],
    mythsFacts: [
      { myth: "צריך מקדמה של 20% כדי לקנות בית.", fact: "רבים מהמלווים מאפשרים מקדמה של 3-5% בלבד." },
      { myth: "נדל\"ן תמיד עולה בערך.", fact: "השוק משתנה; מחקר ותזמון חשובים." },
      { myth: "מחיר המבוקש הוא המחיר הסופי.", fact: "משא ומתן נפוץ בעסקאות נדל\"ן." }
    ]
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

const Blog = () => {
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

  // Helper Classes
  const textMain = isDark ? "text-white" : "text-gray-900";
  const subText = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark ? "bg-[#1e1e1e]" : "bg-white";
  const bgMain = isDark ? "bg-[#121212]" : "bg-[#f0faff]";

  return (
    <div className={isDark ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"} dir={isRtl ? "rtl" : "ltr"}>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <video className="absolute inset-0 w-full h-full object-cover" src={blogHero} autoPlay muted loop />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.heroTitle} <span className="text-[#00bfff]">{t.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{t.heroDesc}</p>
        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      <section
  className={`py-20 px-6 transition-colors duration-500 ${
    isDark ? "bg-[#181818] text-white" : "bg-[#f0f8ff] text-black"
  }`}
>
  {/* Heading */}
  <h2
    className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
      isDark ? "text-white" : "text-black"
    }`}
  >
    {t.featured}{" "}
    <span className="text-[#00bfff]">{t.article}</span>
  </h2>

  {/* Main Card */}
  <div
    className={`group relative flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 ${
      isDark ? "bg-[#222]" : "bg-white"
    }`}
  >
    {/* Image Section */}
    <div className="w-full md:w-1/2 relative overflow-hidden">
      <img
        src={t.featuredArticle.image}
        alt={t.featuredArticle.title}
        className="w-full h-64 md:h-[400px] object-cover transform transition duration-500 group-hover:scale-105"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      {/* Tag */}
      <div
        className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full shadow ${
          isDark ? "bg-[#00bfff] text-black" : "bg-[#00bfff] text-black"
        }`}
      >
        {t.featuredArticle.tag}
      </div>
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
      <h3
        className={`text-3xl lg:text-4xl font-bold mb-4 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {t.featuredArticle.title}
      </h3>
      <p
        className={`text-lg leading-relaxed mb-6 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {t.featuredArticle.description}
      </p>
      {/* Meta info */}
      <div
        className={`flex flex-wrap items-center gap-3 text-sm ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <span>{t.featuredArticle.author}</span>
        <span className="opacity-40">•</span>
        <span>
          {new Date(t.featuredArticle.createdAt).toLocaleDateString()}
        </span>
        <span className="opacity-40">•</span>
        <span>{t.featuredArticle.readTime}</span>
      </div>
      {/* Button */}
      <a
        href={t.featuredArticle.link}
        className={`inline-flex items-center w-fit mt-6 px-6 py-3 rounded-full font-semibold transition ${
          isDark
            ? "bg-blue-500 hover:bg-blue-400 text-white"
            : "bg-[#00bfff] text-white hover:bg-[#009acd]"
        }`}
      >
        {t.readMore} →
      </a>
    </div>
  </div>
</section>

      {/* ================= LATEST BLOGS ================= */}
      <section className={`py-16 ${isDark ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight text-center mb-6 ${textMain}`}>
            {t.latest} <span className="text-[#00bfff]">{t.realEstateBlogs}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.blogCards.map((blog, idx) => (
              <article
                key={idx}
                className={`group rounded-2xl shadow transition duration-300 overflow-hidden hover:shadow-xl ${isDark ? "bg-[#222] text-white" : "bg-white text-black"}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${textMain}`}>{blog.title}</h3>
                  <p className={`text-sm leading-relaxed mb-3 ${subText}`}>{blog.desc}</p>
                  <div className={`text-xs mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{blog.author}</div>
                  <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>{new Date(blog.date).toLocaleString()}</div>
                  <a
                    href="/article"
                    className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#00bfff] text-white hover:bg-[#009acd] transition"
                  >
                    {blog.btn}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE COMPARISON ================= */}
      <section className={`py-16 ${isDark ? "bg-[#222]" : "bg-[#00bfff]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-6 text-white">
            {t.comparison}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg shadow-md text-left border-gray-200">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-6 py-3">{t.features[0]}</th>
                  {t.servicePlans.map((service, idx) => (
                    <th key={idx} className="px-6 py-3 text-center">{service.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {t.features.map((feature, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{feature}</td>
                    {t.servicePlans.map((service, j) => (
                      <td key={j} className="px-6 py-4 text-center text-gray-600">{service.features[i] || "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= MYTHS & FACTS ================= */}
      <section className={`py-16 ${isDark ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-6 text-[#00bfff]">
            {t.mythsFactsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {t.mythsFacts.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="flex gap-2">
                  <h3 className="text-red-600 font-bold">{t.myth}</h3>
                  <p className={isDark ? "text-white" : "text-black"}>{item.myth}</p>
                </div>
                <div className="flex gap-2">
                  <h3 className="text-green-600 font-bold">{t.fact}</h3>
                  <p className={isDark ? "text-white" : "text-black"}>{item.fact}</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00bfff]/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;