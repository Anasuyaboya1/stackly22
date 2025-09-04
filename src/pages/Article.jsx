import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import video from "../assets/he11.mp4";
import house1 from "../assets/villa.jpg";
import house2 from "../assets/villa2.jpg";
import house3 from "../assets/villa3.jpg";
import house4 from "../assets/villa4.jpg";

const translations = {
  en: {
    heroTitle: "Latest Real Estate Insights",
    heroDesc: "Discover trends, tips, and strategies shaping the real estate industry in 2025.",
    articles: [
      {
        title: "The Rise of Smart Urban Living",
        paragraphs: [
          "Cities are rapidly transforming with the integration of smart technologies, co-living communities, and sustainable urban planning. Modern apartments are no longer just about providing shelter—they now offer integrated solutions for comfort, security, and eco-conscious lifestyles.",
          "From energy-efficient appliances to intelligent climate control, every aspect of new-age housing is designed to reduce waste and enhance convenience. Shared workspaces, rooftop gardens, and community-driven recreational zones are also becoming the new norm in metropolitan areas."
        ],
        list: [
          "AI-powered smart homes with automated systems",
          "Eco-friendly building materials reducing carbon footprint",
          "Affordable micro-apartments for young professionals",
          "Green rooftops and community spaces for better well-being"
        ],
        image: house1,
        imageAlt: "Urban Living"
      },
      {
        title: "Top Investment Strategies for 2025",
        paragraphs: [
          "From rental properties to REITs, investors are diversifying their portfolios. This article explores the most profitable strategies in today’s market and how to maximize ROI in changing economic conditions.",
          "The rise of sustainable and eco-friendly buildings has created a surge in demand for green-certified projects. These not only attract higher rental yields but also qualify for government incentives, making them a lucrative choice for forward-thinking investors.",
          "Technology-driven real estate platforms are also revolutionizing the investment landscape. Fractional ownership, digital property management, and blockchain-powered transactions provide accessibility, transparency, and security to a broader range of investors."
        ],
        list: [
          "Rental property investments",
          "Commercial real estate growth",
          "REIT opportunities"
        ],
        image: house2,
        imageAlt: "Investment Strategies"
      },
      {
        title: "Luxury Real Estate Trends",
        paragraphs: [
          "High-net-worth buyers are seeking waterfront properties, smart security systems, and eco-friendly luxury estates. Explore what’s driving demand in this premium market segment."
        ],
        image: house3,
        imageAlt: "Luxury Homes"
      },
      {
        title: "Suburban Growth in 2025",
        paragraphs: [
          "Remote work has fueled suburban housing demand. Families are prioritizing larger homes, green spaces, and community-driven neighborhoods.",
          "Technology-driven real estate platforms are also revolutionizing the investment landscape. Fractional ownership, digital property management, and blockchain-powered transactions provide accessibility, transparency, and security to a broader range of investors.",
          "The rise of sustainable and eco-friendly buildings has created a surge in demand for green-certified projects. These not only attract higher rental yields but also qualify for government incentives, making them a lucrative choice for forward-thinking investors."
        ],
        image: house4,
        imageAlt: "Suburban Growth"
      }
    ],
    tipsTitle: "Quick Real Estate Tips",
    tips: [
      {
        icon: "🏠",
        title: "First-Time Buyers",
        desc: "Get pre-approved early and explore government-backed loan options."
      },
      {
        icon: "📈",
        title: "Market Trends",
        desc: "Stay informed about mortgage rates and regional growth hotspots."
      },
      {
        icon: "💼",
        title: "Commercial Spaces",
        desc: "Look for mixed-use properties combining retail, office, and residential."
      },
      {
        icon: "🌎",
        title: "Sustainability",
        desc: "Eco-friendly homes are not just trendy but hold higher resale value."
      },
      {
        icon: "💡",
        title: "Smart Investments",
        desc: "Diversify between residential, commercial, and REITs for balance."
      }
    ]
  },
  ar: {
    heroTitle: "أحدث رؤى العقارات",
    heroDesc: "اكتشف الاتجاهات والنصائح والاستراتيجيات التي تشكل صناعة العقارات في 2025.",
    articles: [
      {
        title: "صعود الحياة الحضرية الذكية",
        paragraphs: [
          "تتحول المدن بسرعة مع دمج التقنيات الذكية ومجتمعات السكن المشترك والتخطيط الحضري المستدام. لم تعد الشقق الحديثة مجرد مأوى بل توفر حلولاً متكاملة للراحة والأمان ونمط الحياة الصديق للبيئة.",
          "من الأجهزة الموفرة للطاقة إلى التحكم الذكي في المناخ، كل جانب من جوانب السكن الحديث مصمم لتقليل الهدر وزيادة الراحة. أصبحت مساحات العمل المشتركة وحدائق الأسطح والمناطق الترفيهية المجتمعية هي القاعدة الجديدة في المناطق الحضرية."
        ],
        list: [
          "منازل ذكية تعمل بالذكاء الاصطناعي",
          "مواد بناء صديقة للبيئة تقلل البصمة الكربونية",
          "شقق صغيرة ميسورة للشباب",
          "أسطح خضراء ومساحات مجتمعية لرفاهية أفضل"
        ],
        image: house1,
        imageAlt: "الحياة الحضرية"
      },
      {
        title: "أفضل استراتيجيات الاستثمار لعام 2025",
        paragraphs: [
          "ينوع المستثمرون محافظهم بين العقارات المؤجرة وصناديق الاستثمار العقاري. يستكشف هذا المقال أكثر الاستراتيجيات ربحية وكيفية تعظيم العائد في ظل الظروف الاقتصادية المتغيرة.",
          "خلق صعود المباني المستدامة والصديقة للبيئة طلبًا متزايدًا على المشاريع المعتمدة بيئيًا. هذه المشاريع تجذب عوائد إيجارية أعلى وتؤهل للحصول على حوافز حكومية، مما يجعلها خيارًا مربحًا للمستثمرين المتطلعين.",
          "تعمل منصات العقارات الرقمية على تغيير مشهد الاستثمار. الملكية الجزئية، إدارة العقارات الرقمية، والمعاملات القائمة على البلوك تشين توفر سهولة الوصول والشفافية والأمان لمجموعة أوسع من المستثمرين."
        ],
        list: [
          "استثمارات العقارات المؤجرة",
          "نمو العقارات التجارية",
          "فرص صناديق الاستثمار العقاري"
        ],
        image: house2,
        imageAlt: "استراتيجيات الاستثمار"
      },
      {
        title: "اتجاهات العقارات الفاخرة",
        paragraphs: [
          "يبحث المشترون الأثرياء عن عقارات مطلة على الماء وأنظمة أمان ذكية وعقارات فاخرة صديقة للبيئة. اكتشف ما الذي يدفع الطلب في هذا القطاع المتميز."
        ],
        image: house3,
        imageAlt: "المنازل الفاخرة"
      },
      {
        title: "نمو الضواحي في 2025",
        paragraphs: [
          "أدى العمل عن بعد إلى زيادة الطلب على السكن في الضواحي. تفضل الأسر المنازل الأكبر والمساحات الخضراء والأحياء المجتمعية.",
          "تعمل منصات العقارات الرقمية على تغيير مشهد الاستثمار. الملكية الجزئية، إدارة العقارات الرقمية، والمعاملات القائمة على البلوك تشين توفر سهولة الوصول والشفافية والأمان لمجموعة أوسع من المستثمرين.",
          "خلق صعود المباني المستدامة والصديقة للبيئة طلبًا متزايدًا على المشاريع المعتمدة بيئيًا. هذه المشاريع تجذب عوائد إيجارية أعلى وتؤهل للحصول على حوافز حكومية، مما يجعلها خيارًا مربحًا للمستثمرين المتطلعين."
        ],
        image: house4,
        imageAlt: "نمو الضواحي"
      }
    ],
    tipsTitle: "نصائح سريعة للعقارات",
    tips: [
      {
        icon: "🏠",
        title: "المشترون لأول مرة",
        desc: "احصل على الموافقة المسبقة مبكرًا واستكشف خيارات القروض المدعومة حكوميًا."
      },
      {
        icon: "📈",
        title: "اتجاهات السوق",
        desc: "ابقَ على اطلاع بأسعار الفائدة ونقاط النمو الإقليمية."
      },
      {
        icon: "💼",
        title: "المساحات التجارية",
        desc: "ابحث عن عقارات متعددة الاستخدام تجمع بين البيع بالتجزئة والمكاتب والسكن."
      },
      {
        icon: "🌎",
        title: "الاستدامة",
        desc: "المنازل الصديقة للبيئة ليست مجرد موضة بل لها قيمة إعادة بيع أعلى."
      },
      {
        icon: "💡",
        title: "استثمارات ذكية",
        desc: "نوع بين السكني والتجاري وصناديق الاستثمار لتحقيق التوازن."
      }
    ]
  },
  he: {
    heroTitle: "תובנות הנדל\"ן האחרונות",
    heroDesc: "גלה מגמות, טיפים ואסטרטגיות שמעצבות את ענף הנדל\"ן ב-2025.",
    articles: [
      {
        title: "עליית החיים העירוניים החכמים",
        paragraphs: [
          "ערים משתנות במהירות עם שילוב טכנולוגיות חכמות, קהילות מגורים משותפים ותכנון עירוני בר-קיימא. דירות מודרניות אינן רק מקום מגורים – הן מציעות פתרונות משולבים לנוחות, ביטחון ואורח חיים ירוק.",
          "ממכשירים חסכוניים באנרגיה ועד בקרת אקלים חכמה, כל היבט בדיור החדשני נועד להפחית בזבוז ולהגביר נוחות. חללי עבודה משותפים, גינות גג ואזורי פנאי קהילתיים הופכים לנורמה בערים הגדולות."
        ],
        list: [
          "בתים חכמים עם מערכות אוטומטיות",
          "חומרי בנייה ירוקים להפחתת פליטת פחמן",
          "דירות מיקרו משתלמות לצעירים",
          "גגות ירוקים ומרחבים קהילתיים לרווחה"
        ],
        image: house1,
        imageAlt: "חיים עירוניים"
      },
      {
        title: "אסטרטגיות השקעה מובילות ל-2025",
        paragraphs: [
          "משקיעים מגוונים את תיקיהם בין נכסים להשכרה לקרנות נדל\"ן. מאמר זה סוקר את האסטרטגיות הרווחיות ביותר וכיצד למקסם תשואה בתנאים משתנים.",
          "העלייה בבנייה ירוקה יצרה ביקוש לפרויקטים מוסמכים סביבתית. אלו מושכים תשואות גבוהות יותר וגם זכאים לתמריצים ממשלתיים.",
          "פלטפורמות נדל\"ן דיגיטליות משנות את עולם ההשקעות. בעלות חלקית, ניהול נכסים דיגיטלי ועסקאות מבוססות בלוקצ'יין מספקות נגישות, שקיפות וביטחון למשקיעים."
        ],
        list: [
          "השקעות בנכסים להשכרה",
          "צמיחה בנדל\"ן מסחרי",
          "הזדמנויות בקרנות נדל\"ן"
        ],
        image: house2,
        imageAlt: "אסטרטגיות השקעה"
      },
      {
        title: "מגמות נדל\"ן יוקרתי",
        paragraphs: [
          "רוכשים עשירים מחפשים נכסים על קו המים, מערכות אבטחה חכמות ואחוזות ירוקות. גלה מה מניע את הביקוש במגזר היוקרתי."
        ],
        image: house3,
        imageAlt: "בתים יוקרתיים"
      },
      {
        title: "צמיחה בפרברים ב-2025",
        paragraphs: [
          "העבודה מרחוק הגבירה את הביקוש לדיור בפרברים. משפחות מעדיפות בתים גדולים יותר, שטחים ירוקים ושכונות קהילתיות.",
          "פלטפורמות נדל\"ן דיגיטליות משנות את עולם ההשקעות. בעלות חלקית, ניהול נכסים דיגיטלי ועסקאות מבוססות בלוקצ'יין מספקות נגישות, שקיפות וביטחון למשקיעים.",
          "העלייה בבנייה ירוקה יצרה ביקוש לפרויקטים מוסמכים סביבתית. אלו מושכים תשואות גבוהות יותר וגם זכאים לתמריצים ממשלתיים."
        ],
        image: house4,
        imageAlt: "צמיחה בפרברים"
      }
    ],
    tipsTitle: "טיפים מהירים לנדל\"ן",
    tips: [
      {
        icon: "🏠",
        title: "קונים בפעם הראשונה",
        desc: "קבל אישור מוקדם ובדוק אפשרויות הלוואה ממשלתיות."
      },
      {
        icon: "📈",
        title: "מגמות שוק",
        desc: "הישאר מעודכן בריביות ובאזורים מתפתחים."
      },
      {
        icon: "💼",
        title: "מרחבים מסחריים",
        desc: "חפש נכסים משולבים הכוללים מסחר, משרדים ומגורים."
      },
      {
        icon: "🌎",
        title: "קיימות",
        desc: "בתים ירוקים אינם רק טרנד – יש להם ערך מכירה גבוה יותר."
      },
      {
        icon: "💡",
        title: "השקעות חכמות",
        desc: "גוון בין מגורים, מסחרי וקרנות נדל\"ן לאיזון."
      }
    ]
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

const THEME_KEY = "theme";
const LANG_KEY = "language";

export default function Article() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });
  const [language, setLanguage] = useState(localStorage.getItem(LANG_KEY) || "en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleThemeChange = () => {
        setTheme(localStorage.getItem(THEME_KEY) || "light");
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);

      const handleLanguageChange = () => {
        setLanguage(localStorage.getItem(LANG_KEY) || "en");
        document.documentElement.dir = getDirection(localStorage.getItem(LANG_KEY) || "en");
      };
      window.addEventListener("language-changed", handleLanguageChange);
      window.addEventListener("storage", handleLanguageChange);

      // Set direction on mount
      document.documentElement.dir = getDirection(localStorage.getItem(LANG_KEY) || "en");

      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
        window.removeEventListener("language-changed", handleLanguageChange);
        window.removeEventListener("storage", handleLanguageChange);
      };
    }
  }, []);

  const t = useMemo(() => translations[language], [language]);
  const isRtl = getDirection(language) === "rtl";

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  return (
    <div
      className={themedClass(
        "transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800"
      )}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl animate-fadeIn">
          <h2 className="text-5xl font-bold mb-6 animate-slideUp">
            {t.heroTitle}
          </h2>
          <p className="text-xl mb-8 animate-fadeIn delay-200">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Articles */}
      {t.articles.map((article, idx) => (
        <section
          key={idx}
          className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 mx-auto"
        >
          {/* Alternate image/text sides */}
          {(idx % 2 === 0) ? (
            <>
              <div className="w-full md:w-1/2">
                <h3
                  className={themedClass(
                    "text-3xl font-bold mb-4",
                    "text-blue-300",
                    "text-blue-700"
                  )}
                >
                  {article.title}
                </h3>
                {article.paragraphs.map((p, i) => (
                  <p key={i} className="mb-6 leading-relaxed text-justify">
                    {p}
                  </p>
                ))}
                {article.list && (
                  <ul className="list-disc ml-6 space-y-2">
                    {article.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="rounded-xl shadow-lg w-full h-[450px] object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="rounded-xl shadow-lg w-full h-[450px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3
                  className={themedClass(
                    "text-3xl font-bold mb-4",
                    "text-blue-300",
                    "text-blue-700"
                  )}
                >
                  {article.title}
                </h3>
                {article.paragraphs.map((p, i) => (
                  <p key={i} className="mb-6 leading-relaxed text-justify">
                    {p}
                  </p>
                ))}
                {article.list && (
                  <ul className="list-disc ml-6 space-y-2">
                    {article.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </section>
      ))}

      {/* Tips Section */}
      <section
        className={themedClass(
          "py-16 px-4 text-center w-full",
          "bg-[#1E2A38]",
          "bg-blue-50"
        )}
      >
        <h2
          className={themedClass(
            "text-4xl font-bold mb-12",
            "text-blue-300",
            "text-blue-700"
          )}
        >
          {t.tipsTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {t.tips.map((tip, i) => (
            <div key={i} className="group flip-card">
              <div className="flip-card-inner group-hover:rotate-y-180">
                {/* Front Side */}
                <div
                  className={themedClass(
                    "flip-card-front flex flex-col items-center justify-center p-6",
                    "bg-[#22304a] text-blue-300",
                    "bg-white text-blue-700"
                  )}
                >
                  <span className="text-6xl mb-4">{tip.icon}</span>
                  <h3 className="text-xl font-bold">{tip.title}</h3>
                </div>
                {/* Back Side */}
                <div
                  className={themedClass(
                    "flip-card-back flex items-center justify-center p-6",
                    "bg-blue-700 text-white",
                    "bg-blue-100 text-gray-800"
                  )}
                >
                  <p className="text-lg leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}