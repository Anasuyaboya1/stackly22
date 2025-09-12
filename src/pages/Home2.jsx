import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, ShieldCheck } from 'lucide-react';
import backgroudvedio from "../assets/home23.mp4";
import img from "../assets/villa.jpg";
import img1 from "../assets/villa2.jpg";
import img2 from "../assets/villa3.jpg";
import img3 from "../assets/villa4.jpg";
import img4 from "../assets/villa12.jpg";
import img5 from "../assets/villa7.jpg";
import img6 from "../assets/villa11.jpg";
import img7 from "../assets/villa6.jpg";
import img8 from "../assets/villa9.jpg";
import img9 from "../assets/villa10.jpg";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/logo1.jpg";
import logo7 from "../assets/logo2.jpg";
import logo8 from "../assets/logo3.jpg";
import logo9 from "../assets/logo4.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "Find Your Dream Home",
    heroHighlight: "Today",
    heroDesc: "Discover the perfect property that fits your lifestyle. From modern apartments to luxury estates, we make your home search simple, fast, and stress-free",
    learnMore: "Learn More",
    beforeAfterTitle: "Transformations That Speak",
    beforeAfterDesc: "See the difference our expertise makes — real before & after results from our construction projects.",
    partneredTitle: "Partnered with",
    partneredHighlight: "Top Institutions",
    specialOffers: "Special Bumper Offers",
    whyChooseUsTitle: "Why Partner With Us?",
    whyChooseUsDesc: "Discover the foundational principles that distinguish our service and ensure your real estate success.",
    reasons: [
      {
        title: "Unmatched Market Expertise",
        desc: "Our team possesses deep local market knowledge, providing you with data-driven insights and strategic advice to make informed decisions.",
      },
      {
        title: "Personalized Client Service",
        desc: "Your unique goals are our priority. We offer bespoke solutions and dedicated support, ensuring a tailored experience from start to finish.",
      },
      {
        title: "Proven Track Record",
        desc: "With years of successful transactions and satisfied clients, our reputation is built on results and a commitment to excellence.",
      },
      {
        title: "Seamless & Stress-Free Process",
        desc: "We streamline every step of your real estate journey, handling complexities with efficiency and clear communication for a smooth transaction.",
      },
    ],
    subscribeTitle: "Subscribe to Our Newsletter",
    subscribeDesc: "Get the latest property updates directly in your inbox.",
    subscribeBtn: "Subscribe",
    emailPlaceholder: "Your Email",
    properties: [
      {
        title: "Luxury Villa in Hyderabad",
        location: "Banjara Hills, Hyderabad",
        price: "₹2.5 Cr",
        offer: "Hot Deal",
      },
      {
        title: "Modern Apartment",
        location: "Hitech City, Hyderabad",
        price: "₹85 Lakh",
        offer: "Special Offer",
      },
      {
        title: "Independent House",
        location: "Kukatpally, Hyderabad",
        price: "₹1.2 Cr",
        offer: "Limited Time",
      },
      {
        title: "Premium Office Space",
        location: "Madhapur, Hyderabad",
        price: "₹3.8 Cr",
        offer: "New Listing",
      },
    ],
  },
  ar: {
    heroTitle: "ابحث عن منزل أحلامك",
    heroHighlight: "اليوم",
    heroDesc: "اكتشف العقار المثالي الذي يناسب نمط حياتك. من الشقق الحديثة إلى العقارات الفاخرة، نجعل بحثك عن المنزل سهلاً وسريعاً وخالياً من التوتر",
    learnMore: "اعرف المزيد",
    beforeAfterTitle: "تحولات تتحدث",
    beforeAfterDesc: "شاهد الفرق الذي تصنعه خبرتنا — نتائج حقيقية قبل وبعد من مشاريعنا الإنشائية.",
    partneredTitle: "شراكة مع",
    partneredHighlight: "المؤسسات الكبرى",
    specialOffers: "عروض خاصة مميزة",
    whyChooseUsTitle: "لماذا تتعاون معنا؟",
    whyChooseUsDesc: "اكتشف المبادئ الأساسية التي تميز خدمتنا وتضمن نجاحك العقاري.",
    reasons: [
      {
        title: "خبرة سوق لا مثيل لها",
        desc: "يمتلك فريقنا معرفة عميقة بالسوق المحلي، ويقدم لك رؤى قائمة على البيانات ونصائح استراتيجية لاتخاذ قرارات مدروسة.",
      },
      {
        title: "خدمة عملاء مخصصة",
        desc: "أهدافك الفريدة هي أولويتنا. نقدم حلولاً مصممة ودعماً مخصصاً لضمان تجربة فريدة من البداية حتى النهاية.",
      },
      {
        title: "سجل حافل بالنجاحات",
        desc: "مع سنوات من الصفقات الناجحة والعملاء الراضين، بنيت سمعتنا على النتائج والالتزام بالتميز.",
      },
      {
        title: "عملية سلسة وخالية من التوتر",
        desc: "نقوم بتبسيط كل خطوة في رحلتك العقارية، ونتعامل مع التعقيدات بكفاءة وتواصل واضح لضمان صفقة سلسة.",
      },
    ],
    subscribeTitle: "اشترك في نشرتنا الإخبارية",
    subscribeDesc: "احصل على آخر تحديثات العقارات مباشرة إلى بريدك الإلكتروني.",
    subscribeBtn: "اشترك",
    emailPlaceholder: "بريدك الإلكتروني",
    properties: [
      {
        title: "فيلا فاخرة في حيدر آباد",
        location: "بانجارا هيلز، حيدر آباد",
        price: "٢.٥ كرور",
        offer: "عرض ساخن",
      },
      {
        title: "شقة حديثة",
        location: "حي التقنية، حيدر آباد",
        price: "٨٥ لاك",
        offer: "عرض خاص",
      },
      {
        title: "منزل مستقل",
        location: "كوكاتباللي، حيدر آباد",
        price: "١.٢ كرور",
        offer: "لفترة محدودة",
      },
      {
        title: "مساحة مكتبية مميزة",
        location: "مادهابور، حيدر آباد",
        price: "٣.٨ كرور",
        offer: "إدراج جديد",
      },
    ],
  },
  he: {
    heroTitle: "מצא את בית החלומות שלך",
    heroHighlight: "היום",
    heroDesc: "גלה את הנכס המושלם שמתאים לאורח החיים שלך. מדירות מודרניות ועד נכסים יוקרתיים, אנו הופכים את החיפוש שלך לבית לפשוט, מהיר וללא לחץ",
    learnMore: "למידע נוסף",
    beforeAfterTitle: "שינויים שמדברים בעד עצמם",
    beforeAfterDesc: "ראה את ההבדל שהמומחיות שלנו עושה — תוצאות אמיתיות לפני ואחרי מפרויקטי הבנייה שלנו.",
    partneredTitle: "בשיתוף עם",
    partneredHighlight: "מוסדות מובילים",
    specialOffers: "הצעות מיוחדות",
    whyChooseUsTitle: "למה לשתף פעולה איתנו?",
    whyChooseUsDesc: "גלה את העקרונות שמייחדים את השירות שלנו ומבטיחים את הצלחתך בנדל\"ן.",
    reasons: [
      {
        title: "מומחיות שוק שאין לה תחרות",
        desc: "הצוות שלנו מחזיק בידע מעמיק בשוק המקומי, ומספק לך תובנות מבוססות נתונים וייעוץ אסטרטגי לקבלת החלטות מושכלות.",
      },
      {
        title: "שירות לקוחות מותאם אישית",
        desc: "המטרות הייחודיות שלך הן בראש סדר העדיפויות שלנו. אנו מציעים פתרונות מותאמים ותמיכה מסורה לחוויה אישית מההתחלה ועד הסוף.",
      },
      {
        title: "היסטוריית הצלחות מוכחת",
        desc: "עם שנים של עסקאות מוצלחות ולקוחות מרוצים, המוניטין שלנו מבוסס על תוצאות ומחויבות למצוינות.",
      },
      {
        title: "תהליך חלק וללא לחץ",
        desc: "אנו מפשטים כל שלב במסע הנדל\"ן שלך, מטפלים במורכבויות ביעילות ובתקשורת ברורה לעסקה חלקה.",
      },
    ],
    subscribeTitle: "הירשם לניוזלטר שלנו",
    subscribeDesc: "קבל עדכוני נכסים ישירות לתיבת הדואר שלך.",
    subscribeBtn: "הירשם",
    emailPlaceholder: "האימייל שלך",
    properties: [
      {
        title: "וילה יוקרתית בהיידראבאד",
        location: "בנג'רה הילס, היידראבאד",
        price: "2.5 קרור",
        offer: "עסקה חמה",
      },
      {
        title: "דירה מודרנית",
        location: "הייטק סיטי, היידראבאד",
        price: "85 לאך",
        offer: "הצעה מיוחדת",
      },
      {
        title: "בית עצמאי",
        location: "קוקאטפלי, היידראבאד",
        price: "1.2 קרור",
        offer: "לתקופה מוגבלת",
      },
      {
        title: "משרד פרימיום",
        location: "מדאפור, היידראבאד",
        price: "3.8 קרור",
        offer: "רשימה חדשה",
      },
    ],
  },
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

const logoPlaceholders = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];


const reImagePlaceholders = [
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const propertyImages = [img, img1, img2, img3];

const whyUsIcons = [Briefcase, Users, Award, ShieldCheck];

const offerColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-blue-600",
];

const WhyChooseUs = ({ t }) => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950 font-inter">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.whyChooseUsTitle}
        </motion.h2>
        <motion.p
          className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.whyChooseUsDesc}
        </motion.p>

        <div className="mt-20 flex flex-col gap-16">
          {t.reasons.map((reason, index) => {
            const Icon = whyUsIcons[index];
            const bgClass = ["bg-blue-600", "bg-emerald-600", "bg-purple-600", "bg-rose-600"][index];
            const gradientToClass = ["to-blue-200 dark:to-blue-700", "to-emerald-200 dark:to-emerald-700", "to-purple-200 dark:to-purple-700", "to-rose-200 dark:to-rose-700"][index];
            const underlineClass = ["bg-blue-600", "bg-emerald-600", "bg-purple-600", "bg-rose-600"][index];
            return (
              <motion.div
                key={index}
                className={`group relative flex flex-col md:flex-row items-center md:items-start p-8 rounded-xl
                          bg-gray-100 dark:bg-gray-800 shadow-xl overflow-hidden
                          transition-all duration-500 ease-in-out cursor-pointer
                          ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 * index, ease: "easeOut" }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent ${gradientToClass} opacity-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? '-100%' : '100%' }}
                  whileHover={{ opacity: 0.2, x: '0%' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className={`relative z-10 flex items-center justify-center h-20 w-20 min-w-[5rem] rounded-full shadow-lg mb-6 md:mb-0
                          ${bgClass} text-white transition-transform duration-300 ease-in-out
                          group-hover:rotate-[10deg] group-hover:scale-110
                          ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Icon size={36} />
                </div>
                <div className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'text-center md:text-left' : 'text-center md:text-right'} w-full`}>
                  <h3 className={`text-3xl font-bold mb-3 text-gray-900 dark:text-white`}>
                    {reason.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {reason.desc}
                  </p>
                  <motion.div
                    className={`mt-4 mx-auto md:mx-0 h-1 ${underlineClass} rounded-full`}
                    style={{ width: index % 2 === 0 ? '0%' : 'auto', alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '50%' }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default function Home2() {
  // Language and RTL support
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = translations[language];
  useEffect(() => {
    const handleLangChange = () => {
      setLanguage(localStorage.getItem("language") || "en");
    };
    window.addEventListener("storage", handleLangChange);
    window.addEventListener("language-changed", handleLangChange);
    document.documentElement.dir = getDirection(language);
    return () => {
      window.removeEventListener("storage", handleLangChange);
      window.removeEventListener("language-changed", handleLangChange);
    };
  }, [language]);

  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Image carousel state
  const images = reImagePlaceholders;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

  // Logos
  const logos = logoPlaceholders;

  // Properties
  const properties = t.properties.map((property, i) => ({
    ...property,
    image: propertyImages[i % propertyImages.length],
    offerColor: offerColors[i % offerColors.length],
    id: i + 1,
  }));

  return (
    <div className={theme === "dark" ? "min-h-screen text-white" : "min-h-screen text-black"}>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroudvedio}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 
            className="text-4xl md:text-6xl font-bold" 
            style={{ color: '#fff' }}
          >
            {t.heroTitle} <span style={{ color: '#00BFFF' }}>{t.heroHighlight}</span>
          </h1>
          <p className="mt-4 max-w-4xl text-lg md:text-xl text-white">
            {t.heroDesc}
          </p>
          <button
            onClick={() => window.scrollTo({ top: document.getElementById('about-us').offsetTop, behavior: 'smooth' })}
            className={
              `${theme === 'dark' ? 'bg-[#facc15] text-white hover:bg-[#00BFFF]' : 'bg-[#00BFFF] text-white hover:bg-[#00CFFF]'} px-6 py-3 mt-5 rounded-lg transition-colors font-semibold`
            }
          >
            {t.learnMore}
          </button>
        </div>
      </section>

      {/* Before & After Section */}
      <section className={`w-full py-16 sm:py-20 ${theme === "dark" ? "bg-[#000]" : "bg-[#FFF]"}`} id="before-after">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
            {t.beforeAfterTitle}
          </h2>
          <p className={`text-lg leading-relaxed mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            {t.beforeAfterDesc}
          </p>
          <div className="relative w-full h-[500px] max-w-full mx-auto">
            <img
              src={images[currentIndex]}
              alt={`Result ${currentIndex + 1}`}
              className="w-full h-[500px] rounded-2xl shadow-lg transition-opacity duration-700 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className={`w-full py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight text-center mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
            {t.partneredTitle} <span style={{ color: "#00BFFF" }}>{t.partneredHighlight}</span>
          </h2>
          <div className="overflow-hidden relative">
            <div className="flex animate-logo-scroll" style={{ width: `${logos.length * 2 * 120}px` }}>
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="flex-shrink-0 px-6" style={{ width: "224px" }}>
                  <img src={logo.src} alt={logo.alt} className="h-56 w-56 object-cover transition-transform duration-300 hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes logo-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-logo-scroll {
              animation: logo-scroll 30s linear infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className={`w-full py-16 ${theme === "dark" ? "bg-[#111]" : "bg-[#f0f9ff]"}`} id="special-offers">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-12 text-[#00BFFF]">{t.specialOffers}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white dark:bg-[#1a1a1a]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-60 object-cover animate-zoom-slow"
                  />
                  <span className={`absolute top-3 left-3 ${property.offerColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-bounce`}>
                    {property.offer}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[#00BFFF] text-white text-sm font-semibold px-3 py-1 rounded-lg shadow">
                    {property.price}
                  </span>
                </div>
                <div className="p-5 text-center">
                  <h3 className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    {property.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}> 
                    {property.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs t={t} />

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-[#e6f7ff]">
  <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-xl p-10 relative">
    {/* Decorative top border accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></div>

    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
      {t.subscribeTitle}
    </h2>
    <p className="mb-8 text-gray-600 text-lg leading-relaxed">
      {t.subscribeDesc}
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <input
        type="email"
        placeholder={t.emailPlaceholder}
        className="p-4 rounded-lg border border-gray-300 w-full sm:w-80 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <Link to="/contactus">
        <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition">
          {t.subscribeBtn}
        </button>
      </Link>
    </div>
  </div>
</section>


    </div>
  );
}