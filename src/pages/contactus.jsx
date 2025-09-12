import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import backgroudvedio from "../assets/contactus vedio.mp4";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Building2,
  Users,
  ChevronDown,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";

// Multilingual translations
const translations = {
  en: {
    hero: "Contact Us",
    quickContact: [
      { icon: <Phone />, title: "Call Us", info: "+91 98765 43210" },
      { icon: <Mail />, title: "Email", info: "info@realestate.com" },
      { icon: <MessageSquare />, title: "WhatsApp", info: "+91 98765 43210" },
      { icon: <MapPin />, title: "Visit", info: "Hyderabad, India" }
    ],
    sendMessage: "Send Us a Message",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    send: "Send",
    offices: "Our Offices",
    officeCity: "Hyderabad",
    officeLocation: "Madhapur, HiTech City",
    officeHours: "Office Hours",
    officeTiming: "Mon - Sat, 9:00 AM - 7:00 PM",
    meetTeam: "Meet Our Team",
    team: [
      { name: "Rahul Sharma", role: "Sales Manager" },
      { name: "Ananya Gupta", role: "Marketing Lead" },
      { name: "Vikram Singh", role: "Customer Support" }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How can I schedule a property visit?",
        answer: "You can book a visit through our contact form, call us, or WhatsApp directly. Our team will confirm your appointment within 24 hours."
      },
      {
        question: "Do you assist with home loans?",
        answer: "Yes! We partner with leading banks to provide assistance with home loan approvals and documentation."
      },
      {
        question: "Where are your offices located?",
        answer: "We have offices in multiple cities across India. Check the offices section for more details."
      },
      {
        question: "Can I list my property with your agency?",
        answer: "Absolutely. Please contact our sales team, and we’ll guide you through the listing process."
      }
    ]
  },
  ar: {
    hero: "اتصل بنا",
    quickContact: [
      { icon: <Phone />, title: "اتصل بنا", info: "+91 98765 43210" },
      { icon: <Mail />, title: "البريد الإلكتروني", info: "info@realestate.com" },
      { icon: <MessageSquare />, title: "واتساب", info: "+91 98765 43210" },
      { icon: <MapPin />, title: "زيارة", info: "حيدر آباد، الهند" }
    ],
    sendMessage: "أرسل لنا رسالة",
    name: "اسمك",
    email: "بريدك الإلكتروني",
    message: "رسالتك",
    send: "إرسال",
    offices: "مكاتبنا",
    officeCity: "حيدر آباد",
    officeLocation: "مادهابور، مدينة التقنية",
    officeHours: "ساعات العمل",
    officeTiming: "الاثنين - السبت، 9:00 صباحًا - 7:00 مساءً",
    meetTeam: "تعرف على فريقنا",
    team: [
      { name: "راهول شارما", role: "مدير المبيعات" },
      { name: "أنانيا جوبتا", role: "رئيس التسويق" },
      { name: "فيكرام سينغ", role: "دعم العملاء" }
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "كيف يمكنني تحديد موعد زيارة للعقار؟",
        answer: "يمكنك حجز زيارة من خلال نموذج الاتصال أو الاتصال بنا أو عبر واتساب. سيؤكد فريقنا موعدك خلال 24 ساعة."
      },
      {
        question: "هل تساعدون في قروض المنازل؟",
        answer: "نعم! نحن نتعاون مع بنوك رائدة لتقديم المساعدة في الموافقة على القروض المنزلية والوثائق."
      },
      {
        question: "أين تقع مكاتبكم؟",
        answer: "لدينا مكاتب في عدة مدن في الهند. تحقق من قسم المكاتب لمزيد من التفاصيل."
      },
      {
        question: "هل يمكنني إدراج عقاري مع وكالتكم؟",
        answer: "بالتأكيد. يرجى التواصل مع فريق المبيعات وسنرشدك خلال عملية الإدراج."
      }
    ]
  },
  he: {
    hero: "צור קשר",
    quickContact: [
      { icon: <Phone />, title: "התקשרו אלינו", info: "+91 98765 43210" },
      { icon: <Mail />, title: "אימייל", info: "info@realestate.com" },
      { icon: <MessageSquare />, title: "וואטסאפ", info: "+91 98765 43210" },
      { icon: <MapPin />, title: "בקרו", info: "היידראבאד, הודו" }
    ],
    sendMessage: "שלח לנו הודעה",
    name: "השם שלך",
    email: "האימייל שלך",
    message: "ההודעה שלך",
    send: "שלח",
    offices: "המשרדים שלנו",
    officeCity: "היידראבאד",
    officeLocation: "מדאפור, עיר ההייטק",
    officeHours: "שעות פעילות",
    officeTiming: "שני - שבת, 9:00 - 19:00",
    meetTeam: "הכירו את הצוות שלנו",
    team: [
      { name: "רהול שארמה", role: "מנהל מכירות" },
      { name: "אנניה גופטה", role: "ראש שיווק" },
      { name: "ויקראם סינג", role: "שירות לקוחות" }
    ],
    faqTitle: "שאלות נפוצות",
    faqs: [
      {
        question: "איך ניתן לקבוע ביקור בנכס?",
        answer: "ניתן להזמין ביקור דרך הטופס, בטלפון או בוואטסאפ. הצוות יאשר את התור תוך 24 שעות."
      },
      {
        question: "האם אתם מסייעים במשכנתאות?",
        answer: "כן! אנו עובדים עם בנקים מובילים לסיוע באישור משכנתאות ומסמכים."
      },
      {
        question: "היכן ממוקמים המשרדים שלכם?",
        answer: "יש לנו משרדים בערים שונות בהודו. בדוק את אזור המשרדים לפרטים נוספים."
      },
      {
        question: "האם אפשר לפרסם נכס בסוכנות שלכם?",
        answer: "בהחלט. פנה לצוות המכירות ונדריך אותך בתהליך הפרסום."
      }
    ]
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

const ContactUs = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

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
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1) HERO SECTION */}
      <section className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroudvedio}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white text-center drop-shadow-lg"
          >
            {t.hero}
          </motion.h1>
        </div>
      </section>

      {/* 2) QUICK CONTACT CARDS */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-4 gap-6 text-center">
        {t.quickContact.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`p-6 rounded-2xl shadow-lg transition-colors ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <div className="text-blue-600 dark:text-blue-400 flex justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="font-bold text-lg leading-tight mb-2">{card.title}</h3>
            <p className="text-lg leading-relaxed">{card.info}</p>
          </motion.div>
        ))}
      </section>

      {/* 3) CONTACT FORM */}
      <section className="py-20 px-6 md:px-20">
        <div
          className={`max-w-3xl mx-auto transition-colors ${
            isDark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8">
            {t.sendMessage}
          </h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder={t.name}
              className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            />
            <input
              type="email"
              placeholder={t.email}
              className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            />
            <textarea
              placeholder={t.message}
              rows="4"
              className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              {t.send} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* 4) OFFICES & MAP */}
      <section className="py-20 px-6 md:px-20">
  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-12">{t.offices}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Building2 className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <div>
                <h3 className="font-bold text-xl leading-tight">{t.officeCity}</h3>
                <p className="text-lg leading-relaxed">{t.officeLocation}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <div>
                <h3 className="font-bold text-xl leading-tight">{t.officeHours}</h3>
                <p className="text-lg leading-relaxed">{t.officeTiming}</p>
              </div>
            </div>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.19949928722!2d78.3826!3d17.4478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c5a49d6f11%3A0x99d68b41b8c0f9a5!2sHitech%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1616400830105!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* 5) TEAM */}
      <section
        className={`py-20 px-6 md:px-20 transition-colors ${
          isDark ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-12">{t.meetTeam}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl shadow-lg text-center transition-colors ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl leading-tight">{member.name}</h3>
              <p className="text-lg leading-relaxed">{member.role}</p>
              <div className="flex justify-center gap-3 mt-3 text-blue-600 dark:text-blue-400">
                <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 cursor-pointer" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6) FAQ */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-12">
          {t.faqTitle}
        </h2>
        <div className="max-w-3xl mx-auto">
          {t.faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-300 dark:border-gray-700 py-4"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="flex justify-between items-center w-full font-medium text-left"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openFAQ === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === i && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;