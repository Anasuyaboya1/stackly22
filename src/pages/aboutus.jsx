import React, { useState, useEffect } from "react";
import aboutHero from "../assets/he3.mp4";
import missionImg from "../assets/mission.avif";
import e1 from "../assets/team4.jpg";
import e2 from "../assets/test3.jpg";
import e3 from "../assets/team5.jpg";
import e4 from "../assets/team1.jpg";
import e5 from "../assets/e5.jpg";
import e6 from "../assets/team2.jpg";

// Multilingual translations
const translations = {
  en: {
    heroTitle: "About Us",
    heroDesc: "We are a leading real estate company committed to helping you find your dream property. From residential homes to commercial spaces.",
    journeyTitle: "Our Journey Through the Years",
    timeline: [
      { year: "2018", title: "Company Founded", desc: "Started with a small team and a vision to provide quality real estate solutions to clients." },
      { year: "2019", title: "First 50 Properties Sold", desc: "Successfully completed transactions for our first 50 residential and commercial properties." },
      { year: "2020", title: "Digital Listings Launched", desc: "Introduced a fully online property listing platform for easier client access and virtual tours." },
      { year: "2021", title: "Regional Expansion", desc: "Expanded operations to 3 new cities, increasing our property portfolio and client base." },
      { year: "2022", title: "Luxury Properties Launch", desc: "Introduced a premium range of luxury homes and commercial properties for elite clients." },
      { year: "2023", title: "Green Housing Initiative", desc: "Launched eco-friendly housing projects focusing on sustainability and energy efficiency." },
      { year: "2024", title: "50,000+ Happy Clients", desc: "Reached a milestone of serving over 50,000 satisfied clients across multiple cities." },
    ],
    visionMissionValues: "Our Vision, Mission & Values",
    vision: "Our Vision",
    visionDesc: "To become the most trusted real estate company delivering dream homes and commercial spaces, empowering clients to invest wisely and live comfortably.",
    mission: "Our Mission",
    missionDesc: "Provide exceptional real estate services with integrity and transparency. Help clients find perfect residential and commercial properties seamlessly.",
    values: "Our Values",
    valuesList: [
      "Integrity, transparency, and dedication in every transaction",
      "Client satisfaction and trust above all",
      "Innovation in property solutions and sustainability",
    ],
    estimatorTitle: "Construction Cost Estimator",
    estimatorArea: "Built-up Area (sqft)",
    estimatorFloors: "Number of Floors",
    estimatorQuality: "Construction Quality",
    estimatorLocation: "Project Location",
    estimatorExtras: "Additional Services",
    estimatorInterior: "Interior Work (+ ₹400/sqft)",
    estimatorLandscaping: "Landscaping (+ ₹200/sqft)",
    estimatorBtn: "Calculate Estimate",
    estimatorResult: "Estimated Cost",
    awardsTitle: "Awards & Certificates",
    awardsDesc: "Our commitment to excellence in real estate has been recognized by industry leaders and organizations. Over the years, we have received numerous awards and certificates for innovation, quality service, and client satisfaction.",
    awardsList: [
      "Best Real Estate Agency 2022 - Global Property Awards",
      "Top 10 Innovative Property Solutions 2023 - Realty Excellence",
      "Fastest Growing Real Estate Company 2024 - Business Insights",
      "Certified by National Association of Realtors",
    ],
    expertsTitle: "Meet Our Real Estate Experts",
    experts: [
      { name: "Priya Sharma", desc: "Senior Residential Agent specializing in luxury apartments and family homes. Over 10 years of experience helping clients find their dream property.", img: e1 },
      { name: "Rahul Verma", desc: "Commercial Real Estate Expert with a strong track record in office spaces and retail properties. Passionate about maximizing client investments.", img: e2 },
      { name: "Anita Desai", desc: "Property Investment Advisor helping clients identify high-value investment opportunities and build profitable real estate portfolios.", img: e3 },
      { name: "Suresh Kumar", desc: "Commercial Leasing Specialist with expertise in office and retail space negotiations, ensuring seamless property deals.", img: e4 },
      { name: "Meera Joshi", desc: "Residential Leasing & Sales Expert helping families find their ideal homes with a personalized approach and attention to detail.", img: e5 },
      { name: "Vikram Singh", desc: "Luxury Property Consultant focusing on high-end residential and commercial properties, providing clients with premium real estate solutions.", img: e6 },
    ],
    communityTitle: "Our Community Impact in Real Estate",
    community: [
      {
        icon: "🏠",
        title: "Affordable Housing",
        desc: "We are committed to developing affordable homes for families, ensuring comfort, safety, and modern amenities.",
        stat: "500+ Homes Built",
      },
      {
        icon: "🌿",
        title: "Green Communities",
        desc: "Our eco-friendly projects feature solar energy, parks, and sustainable construction practices.",
        stat: "20+ Eco Projects",
      },
      {
        icon: "👷",
        title: "Employment Opportunities",
        desc: "Through real estate development, we create jobs and empower local communities with economic growth.",
        stat: "2,000+ Jobs Created",
      },
    ],
    estimatorQualityOptions: [
      { value: "standard", label: "Standard" },
      { value: "premium", label: "Premium" },
      { value: "luxury", label: "Luxury" },
    ],
    estimatorLocationOptions: [
      { value: "urban", label: "Urban" },
      { value: "semiUrban", label: "Semi-Urban" },
      { value: "rural", label: "Rural" },
    ],
  },
  ar: {
    heroTitle: "من نحن",
    heroDesc: "نحن شركة عقارية رائدة ملتزمة بمساعدتك في العثور على عقار أحلامك. من المنازل السكنية إلى المساحات التجارية.",
    journeyTitle: "رحلتنا عبر السنوات",
    timeline: [
      { year: "2018", title: "تأسيس الشركة", desc: "بدأنا بفريق صغير ورؤية لتقديم حلول عقارية عالية الجودة للعملاء." },
      { year: "2019", title: "بيع أول 50 عقارًا", desc: "أكملنا بنجاح معاملات أول 50 عقارًا سكنيًا وتجاريًا." },
      { year: "2020", title: "إطلاق القوائم الرقمية", desc: "قدمنا منصة قوائم عقارية عبر الإنترنت بالكامل لتسهيل وصول العملاء والجولات الافتراضية." },
      { year: "2021", title: "التوسع الإقليمي", desc: "وسعنا عملياتنا إلى 3 مدن جديدة، وزدنا من محفظة العقارات وقاعدة العملاء." },
      { year: "2022", title: "إطلاق العقارات الفاخرة", desc: "قدمنا مجموعة متميزة من المنازل الفاخرة والعقارات التجارية للعملاء المميزين." },
      { year: "2023", title: "مبادرة الإسكان الأخضر", desc: "أطلقنا مشاريع سكنية صديقة للبيئة تركز على الاستدامة وكفاءة الطاقة." },
      { year: "2024", title: "50,000+ عميل سعيد", desc: "وصلنا إلى خدمة أكثر من 50,000 عميل راضٍ في عدة مدن." },
    ],
    visionMissionValues: "رؤيتنا، رسالتنا وقيمنا",
    vision: "رؤيتنا",
    visionDesc: "أن نصبح الشركة العقارية الأكثر ثقة، نقدم منازل وأماكن عمل أحلام، ونمكّن العملاء من الاستثمار بحكمة والعيش براحة.",
    mission: "رسالتنا",
    missionDesc: "تقديم خدمات عقارية استثنائية بنزاهة وشفافية. مساعدة العملاء في العثور على العقار المثالي بسلاسة.",
    values: "قيمنا",
    valuesList: [
      "النزاهة والشفافية والتفاني في كل صفقة",
      "رضا وثقة العميل فوق كل شيء",
      "الابتكار في حلول العقارات والاستدامة",
    ],
    estimatorTitle: "حاسبة تكلفة البناء",
    estimatorArea: "المساحة المبنية (قدم مربع)",
    estimatorFloors: "عدد الطوابق",
    estimatorQuality: "جودة البناء",
    estimatorLocation: "موقع المشروع",
    estimatorExtras: "خدمات إضافية",
    estimatorInterior: "تشطيبات داخلية (+ ₹400/قدم مربع)",
    estimatorLandscaping: "تنسيق حدائق (+ ₹200/قدم مربع)",
    estimatorBtn: "احسب التكلفة",
    estimatorResult: "التكلفة المقدرة",
    awardsTitle: "الجوائز والشهادات",
    awardsDesc: "تم الاعتراف بالتزامنا بالتميز في العقارات من قبل قادة الصناعة والمنظمات. على مر السنين، حصلنا على العديد من الجوائز والشهادات للابتكار وجودة الخدمة ورضا العملاء.",
    awardsList: [
      "أفضل وكالة عقارية 2022 - جوائز العقارات العالمية",
      "أفضل 10 حلول عقارية مبتكرة 2023 - التميز العقاري",
      "أسرع شركة عقارية نموًا 2024 - رؤى الأعمال",
      "معتمد من الجمعية الوطنية للوسطاء العقاريين",
    ],
    expertsTitle: "تعرف على خبراء العقارات لدينا",
    experts: [
      { name: "بريا شارما", desc: "وكيلة سكنية كبيرة متخصصة في الشقق الفاخرة والمنازل العائلية. أكثر من 10 سنوات خبرة في مساعدة العملاء على العثور على عقار أحلامهم.", img: e1 },
      { name: "راهول فيرما", desc: "خبير عقارات تجارية ذو سجل قوي في المساحات المكتبية والعقارات التجارية. شغوف بتحقيق أقصى استفادة من استثمارات العملاء.", img: e2 },
      { name: "أنيتا ديساي", desc: "مستشارة استثمار عقاري تساعد العملاء في تحديد فرص الاستثمار عالية القيمة وبناء محافظ عقارية مربحة.", img: e3 },
      { name: "سوريش كومار", desc: "متخصص في تأجير العقارات التجارية بخبرة في التفاوض على المساحات المكتبية والتجارية، لضمان صفقات سلسة.", img: e4 },
      { name: "ميرا جوشي", desc: "خبيرة تأجير وبيع العقارات السكنية تساعد العائلات في العثور على منازلهم المثالية بأسلوب شخصي واهتمام بالتفاصيل.", img: e5 },
      { name: "فيكرام سينغ", desc: "استشاري عقارات فاخرة يركز على العقارات السكنية والتجارية الراقية، ويقدم للعملاء حلول عقارية متميزة.", img: e6 },
    ],
    communityTitle: "تأثيرنا المجتمعي في العقارات",
    community: [
      {
        icon: "🏠",
        title: "الإسكان الميسر",
        desc: "نلتزم بتطوير منازل ميسورة التكلفة للعائلات، مع ضمان الراحة والأمان والمرافق الحديثة.",
        stat: "500+ منزل تم بناؤه",
      },
      {
        icon: "🌿",
        title: "مجتمعات خضراء",
        desc: "مشاريعنا الصديقة للبيئة تشمل الطاقة الشمسية والحدائق وممارسات البناء المستدامة.",
        stat: "20+ مشروع بيئي",
      },
      {
        icon: "👷",
        title: "فرص عمل",
        desc: "من خلال تطوير العقارات، نخلق وظائف ونمكّن المجتمعات المحلية من النمو الاقتصادي.",
        stat: "2,000+ وظيفة تم إنشاؤها",
      },
    ],
    estimatorQualityOptions: [
      { value: "standard", label: "قياسي" },
      { value: "premium", label: "ممتاز" },
      { value: "luxury", label: "فاخر" },
    ],
    estimatorLocationOptions: [
      { value: "urban", label: "حضري" },
      { value: "semiUrban", label: "شبه حضري" },
      { value: "rural", label: "ريفي" },
    ],
  },
  he: {
    heroTitle: "אודותינו",
    heroDesc: "אנחנו חברת נדל\"ן מובילה המחויבת לעזור לך למצוא את נכס החלומות שלך. מדירות מגורים ועד שטחים מסחריים.",
    journeyTitle: "המסע שלנו לאורך השנים",
    timeline: [
      { year: "2018", title: "הקמת החברה", desc: "התחלנו עם צוות קטן וחזון לספק פתרונות נדל\"ן איכותיים ללקוחות." },
      { year: "2019", title: "50 נכסים ראשונים נמכרו", desc: "השלמנו בהצלחה עסקאות ל-50 נכסים מגורים ומסחריים ראשונים." },
      { year: "2020", title: "השקת רשימות דיגיטליות", desc: "השקנו פלטפורמת רשימות נכסים מקוונת לחלוטין לגישה קלה וסיורים וירטואליים." },
      { year: "2021", title: "התרחבות אזורית", desc: "הרחבנו פעילות ל-3 ערים חדשות, הגדלנו את תיק הנכסים ואת בסיס הלקוחות." },
      { year: "2022", title: "השקת נכסים יוקרתיים", desc: "השקנו קו פרימיום של בתים יוקרתיים ונכסים מסחריים ללקוחות מובילים." },
      { year: "2023", title: "יוזמת דיור ירוק", desc: "השקנו פרויקטים ידידותיים לסביבה המתמקדים בקיימות ויעילות אנרגטית." },
      { year: "2024", title: "50,000+ לקוחות מרוצים", desc: "הגענו לאבן דרך של שירות ליותר מ-50,000 לקוחות מרוצים בערים רבות." },
    ],
    visionMissionValues: "החזון, המשימה והערכים שלנו",
    vision: "החזון שלנו",
    visionDesc: "להיות חברת הנדל\"ן האמינה ביותר, לספק בתים וחללים מסחריים חלומיים, ולהעצים לקוחות להשקיע בחוכמה ולחיות בנוחות.",
    mission: "המשימה שלנו",
    missionDesc: "להעניק שירותי נדל\"ן יוצאי דופן ביושרה ובשקיפות. לסייע ללקוחות למצוא נכס מגורים ומסחרי מושלם בקלות.",
    values: "הערכים שלנו",
    valuesList: [
      "יושרה, שקיפות ומסירות בכל עסקה",
      "שביעות רצון ואמון הלקוח מעל הכל",
      "חדשנות בפתרונות נדל\"ן וקיימות",
    ],
    estimatorTitle: "מחשבון עלות בנייה",
    estimatorArea: "שטח בנוי (רגל רבוע)",
    estimatorFloors: "מספר קומות",
    estimatorQuality: "איכות הבנייה",
    estimatorLocation: "מיקום הפרויקט",
    estimatorExtras: "שירותים נוספים",
    estimatorInterior: "עבודות פנים (+ ₹400/רגל רבוע)",
    estimatorLandscaping: "גינון (+ ₹200/רגל רבוע)",
    estimatorBtn: "חשב עלות",
    estimatorResult: "עלות משוערת",
    awardsTitle: "פרסים ותעודות",
    awardsDesc: "המחויבות שלנו למצוינות בנדל\"ן זכתה להכרה ממובילי התעשייה וארגונים. לאורך השנים קיבלנו פרסים ותעודות רבים על חדשנות, שירות איכותי ושביעות רצון לקוחות.",
    awardsList: [
      "סוכנות הנדל\"ן הטובה ביותר 2022 - פרסי הנדל\"ן הגלובליים",
      "10 פתרונות נדל\"ן חדשניים מובילים 2023 - מצוינות נדל\"ן",
      "החברה הצומחת ביותר בנדל\"ן 2024 - תובנות עסקיות",
      "מאושר על ידי איגוד המתווכים הלאומי",
    ],
    expertsTitle: "הכירו את מומחי הנדל\"ן שלנו",
    experts: [
      { name: "פריה שארמה", desc: "סוכנת מגורים בכירה המתמחה בדירות יוקרה ובתים משפחתיים. מעל 10 שנות ניסיון בעזרה ללקוחות למצוא את נכס החלומות שלהם.", img: e1 },
      { name: "רהול ורמה", desc: "מומחה נדל\"ן מסחרי עם ניסיון רב במשרדים ושטחי מסחר. נלהב למקסם את השקעות הלקוחות.", img: e2 },
      { name: "אניטה דסאי", desc: "יועצת השקעות נדל\"ן המסייעת ללקוחות לזהות הזדמנויות השקעה בעלות ערך גבוה ולבנות תיקי נדל\"ן רווחיים.", img: e3 },
      { name: "סורש קומאר", desc: "מומחה להשכרת נדל\"ן מסחרי עם ניסיון במשא ומתן על שטחי משרדים ומסחר, להבטחת עסקאות חלקות.", img: e4 },
      { name: "מירה ג'ושי", desc: "מומחית השכרה ומכירה של נדל\"ן מגורים המסייעת למשפחות למצוא את ביתן האידיאלי בגישה אישית ותשומת לב לפרטים.", img: e5 },
      { name: "ויקראם סינג", desc: "יועץ נדל\"ן יוקרתי המתמקד בנכסים מגורים ומסחריים יוקרתיים, ומספק ללקוחות פתרונות נדל\"ן פרימיום.", img: e6 },
    ],
    communityTitle: "ההשפעה הקהילתית שלנו בנדל\"ן",
    community: [
      {
        icon: "🏠",
        title: "דיור בר השגה",
        desc: "אנו מחויבים לפיתוח בתים ברי השגה למשפחות, תוך הבטחת נוחות, בטיחות ומתקנים מודרניים.",
        stat: "500+ בתים נבנו",
      },
      {
        icon: "🌿",
        title: "קהילות ירוקות",
        desc: "הפרויקטים הידידותיים לסביבה שלנו כוללים אנרגיה סולארית, פארקים ושיטות בנייה ברות קיימא.",
        stat: "20+ פרויקטים ירוקים",
      },
      {
        icon: "👷",
        title: "הזדמנויות תעסוקה",
        desc: "באמצעות פיתוח נדל\"ן אנו יוצרים מקומות עבודה ומעצימים קהילות מקומיות לצמיחה כלכלית.",
        stat: "2,000+ משרות נוצרו",
      },
    ],
    estimatorQualityOptions: [
      { value: "standard", label: "סטנדרטי" },
      { value: "premium", label: "פרימיום" },
      { value: "luxury", label: "יוקרתי" },
    ],
    estimatorLocationOptions: [
      { value: "urban", label: "עירוני" },
      { value: "semiUrban", label: "חצי עירוני" },
      { value: "rural", label: "כפרי" },
    ],
  },
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function AboutHero() {
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

  // Theme state synced with Header
  const [theme, setTheme] = useState("light");
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
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
      };
    }
  }, []);

  // Construction Cost Estimator state + logic
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState(1);
  const [quality, setQuality] = useState("standard");
  const [projectLocation, setProjectLocation] = useState("urban");
  const [extras, setExtras] = useState({ interior: false, landscaping: false });
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = (e) => {
    e.preventDefault();
    const a = parseFloat(area) || 0;
    const f = parseInt(floors, 10) || 1;
    let baseRate = 1200;
    if (quality === "premium") baseRate = 1600;
    if (quality === "luxury") baseRate = 2000;
    if (projectLocation === "semiUrban") baseRate *= 0.9;
    if (projectLocation === "rural") baseRate *= 0.8;
    let extraCost = 0;
    if (extras.interior) extraCost += 400;
    if (extras.landscaping) extraCost += 200;
    const total = a * f * (baseRate + extraCost);
    setEstimate(total.toLocaleString("en-IN"));
  };

  return (
    <div className={`${theme === "dark" ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black"}`}>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src={aboutHero} autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About <span className="text-[#00BFFF]">Us</span>
          </h1>
          
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-white">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`w-full py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ color: "#00BFFF" }}>
            {t.journeyTitle}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 w-1 bg-[#00BFFF] h-full transform -translate-x-1/2" />
            <div className="flex flex-col gap-16">
              {t.timeline.map((item, idx) => (
                <div key={item.year} className="relative flex items-center min-h-[180px]">
                  {idx % 2 === 0 ? (
                    <>
                      <div className="w-1/2 flex justify-end pr-8">
                        <div className={`rounded-lg shadow-lg p-8 w-full max-w-md ml-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === "dark" ? "bg-[#222]" : "bg-white"}`}>
                          <div className="font-bold mb-2" style={{ color: "#00BFFF" }}>{item.year}</div>
                          <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                          <p className={theme === "dark" ? "text-gray-200" : "text-gray-700"}>{item.desc}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                        <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">{item.year}</span>
                      </div>
                      <div className="w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2" />
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                        <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">{item.year}</span>
                      </div>
                      <div className="w-1/2 flex justify-start pl-8">
                        <div className={`rounded-lg shadow-lg p-8 w-full max-w-md mr-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === "dark" ? "bg-[#222]" : "bg-white"}`}>
                          <div className="font-bold mb-2" style={{ color: "#00BFFF" }}>{item.year}</div>
                          <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                          <p className={theme === "dark" ? "text-gray-200" : "text-gray-700"}>{item.desc}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Cards Section */}
      <section className={`w-full py-16 ${theme === "dark" ? "bg-[#222]" : "bg-[#00BFFF]"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            {t.visionMissionValues}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Values - 3 identical cards */}
            {[1,2,3].map((idx) => (
              <div key={idx} className="relative rounded-3xl p-8 flex flex-col items-center bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="bg-[#00BFFF] rounded-full p-5 mb-4 shadow-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8l-4 4h8l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#00BFFF] text-center">{t.values}</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-2 text-left">
                  <p className="text-gray-700 text-left">
                    {t.valuesList.join(' ')}
                  </p>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Cost Estimator */}
      <section className={`w-full min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${theme === "dark" ? "bg-[#181818] text-white" : "bg-[#e6f7ff] text-gray-900"}`}>
        <div className={`rounded-2xl shadow-2xl w-full max-w-4xl p-8 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: "#00BFFF" }}>
            {t.estimatorTitle}
          </h2>
          <form onSubmit={calculateEstimate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>{t.estimatorArea}</label>
              <input type="number" value={area} onChange={(e) => setArea(e.target.value)} required className={`w-full px-4 py-2 rounded-lg border transition ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white focus:ring-[#00BFFF]" : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-[#00BFFF]"}`} />
            </div>
            <div>
              <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>{t.estimatorFloors}</label>
              <input type="number" min="1" value={floors} onChange={(e) => setFloors(e.target.value)} required className={`w-full px-4 py-2 rounded-lg border transition ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white focus:ring-[#00BFFF]" : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-[#00BFFF]"}`} />
            </div>
            <div>
              <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>{t.estimatorQuality}</label>
              <select value={quality} onChange={(e) => setQuality(e.target.value)} className={`w-full px-4 py-2 rounded-lg border transition ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}>
                {t.estimatorQualityOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div>
              <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>{t.estimatorLocation}</label>
              <select value={projectLocation} onChange={(e) => setProjectLocation(e.target.value)} className={`w-full px-4 py-2 rounded-lg border transition ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}>
                {t.estimatorLocationOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col gap-3">
              <label className={`block mb-2 font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>{t.estimatorExtras}</label>
              <div className="flex gap-6 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={extras.interior} onChange={(e) => setExtras({ ...extras, interior: e.target.checked })} className="accent-[#00BFFF]" />
                  {t.estimatorInterior}
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={extras.landscaping} onChange={(e) => setExtras({ ...extras, landscaping: e.target.checked })} className="accent-[#00BFFF]" />
                  {t.estimatorLandscaping}
                </label>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="px-8 py-3 rounded-lg bg-[#00BFFF] text-white font-semibold hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 transition">
                {t.estimatorBtn}
              </button>
            </div>
          </form>
          {estimate && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold">{t.estimatorResult}</h3>
              <p className="text-3xl font-extrabold mt-2" style={{ color: "#00BFFF" }}>
                ₹ {estimate}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Awards & Certificates Section */}
      <section className={`w-full py-16 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#00BFFF" }}>
              {t.awardsTitle}
            </h2>
            <p className={`text-lg mb-4 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
              {t.awardsDesc}
            </p>
            <ul className={`list-disc pl-5 space-y-2 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
              {t.awardsList.map((award, i) => <li key={i}>{award}</li>)}
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={missionImg} alt={t.awardsTitle} className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
          </div>
        </div>
      </section>

      {/* Our Agents & Experts Section */}
      <section className={`w-full py-16 ${theme === "dark" ? "bg-[#222]" : "bg-[#00BFFF]"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            {t.expertsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {t.experts.map((agent, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                <img src={agent.img} alt={agent.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{agent.name}</h3>
                  <p className="text-white text-sm">{agent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className={`py-20 ${theme === "dark" ? "bg-[#181818]" : "bg-[#e6f7ff]"}`} style={{ borderRadius: "100px 0 100px 0" }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-black"}`}>
            {t.communityTitle}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {t.community.map((card, i) => (
              <div key={i} className={`rounded-2xl p-8 shadow-lg transform transition duration-300 hover:-translate-y-2 ${theme === "dark" ? "bg-[#222]" : "bg-white"}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00BFFF]/10 mb-4">{card.icon}</div>
                  <h3 className={`text-xl font-semibold mb-3 text-[#00BFFF]`}>{card.title}</h3>
                  <p className={`mb-4 text-justify ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{card.desc}</p>
                  <span className="inline-block bg-[#00BFFF] text-white font-semibold px-5 py-2 rounded-full shadow-md">{card.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}