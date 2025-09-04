import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import welcomeImg from "../assets/wel.jpg";
import logoImg from "../assets/logo.png";

// Multilingual translations
const translations = {
  en: {
    weMake: "We Make",
    dreamHouses: "Dream Houses",
    login: "Login",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    loginBtn: "Login",
    noAccount: "Don’t have an account?",
    signup: "Sign up",
    resetPassword: "Reset Password",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    resetBtn: "Reset Password",
    cancel: "Cancel",
    signupTitle: "Sign Up",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone Number",
    confirmPassword: "Confirm Password",
    signupBtn: "Sign Up",
    haveAccount: "Already have an account?",
    passwordsNotMatch: "Passwords do not match.",
    emailExists: "Email already registered.",
    signupSuccess: "Signup successful!",
    invalidLogin: "Invalid email or password.",
    emailNotFound: "Email not found.",
    passwordUpdated: "Password updated successfully!",
    adminEmail: "admin@enkonix.in",
    adminPassword: "admin123"
  },
  ar: {
    weMake: "نحن نصنع",
    dreamHouses: "منازل الأحلام",
    login: "تسجيل الدخول",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    loginBtn: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟",
    signup: "إنشاء حساب",
    resetPassword: "إعادة تعيين كلمة المرور",
    newPassword: "كلمة مرور جديدة",
    confirmNewPassword: "تأكيد كلمة المرور الجديدة",
    resetBtn: "إعادة تعيين",
    cancel: "إلغاء",
    signupTitle: "إنشاء حساب",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    phone: "رقم الهاتف",
    confirmPassword: "تأكيد كلمة المرور",
    signupBtn: "إنشاء حساب",
    haveAccount: "لديك حساب بالفعل؟",
    passwordsNotMatch: "كلمات المرور غير متطابقة.",
    emailExists: "البريد الإلكتروني مسجل بالفعل.",
    signupSuccess: "تم التسجيل بنجاح!",
    invalidLogin: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    emailNotFound: "البريد الإلكتروني غير موجود.",
    passwordUpdated: "تم تحديث كلمة المرور بنجاح!",
    adminEmail: "admin@enkonix.in",
    adminPassword: "admin123"
  },
  he: {
    weMake: "אנחנו יוצרים",
    dreamHouses: "בתי חלומות",
    login: "התחברות",
    email: "אימייל",
    password: "סיסמה",
    forgotPassword: "שכחת סיסמה?",
    loginBtn: "התחבר",
    noAccount: "אין לך חשבון?",
    signup: "הרשמה",
    resetPassword: "איפוס סיסמה",
    newPassword: "סיסמה חדשה",
    confirmNewPassword: "אישור סיסמה חדשה",
    resetBtn: "אפס סיסמה",
    cancel: "ביטול",
    signupTitle: "הרשמה",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    phone: "מספר טלפון",
    confirmPassword: "אישור סיסמה",
    signupBtn: "הרשם",
    haveAccount: "כבר יש לך חשבון?",
    passwordsNotMatch: "הסיסמאות אינן תואמות.",
    emailExists: "האימייל כבר רשום.",
    signupSuccess: "ההרשמה הצליחה!",
    invalidLogin: "אימייל או סיסמה שגויים.",
    emailNotFound: "האימייל לא נמצא.",
    passwordUpdated: "הסיסמה עודכנה בהצלחה!",
    adminEmail: "admin@enkonix.in",
    adminPassword: "admin123"
  }
};

function getDirection(lang) {
  return lang === "ar" || lang === "he" ? "rtl" : "ltr";
}

export default function WelcomePage() {
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotPassword, setForgotPassword] = useState("");
  const [forgotConfirm, setForgotConfirm] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

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
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (forgotPassword !== forgotConfirm) {
      alert(t.passwordsNotMatch);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex(u => u.email === forgotEmail);
    if (idx === -1) {
      alert(t.emailNotFound);
      return;
    }
    users[idx].password = forgotPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert(t.passwordUpdated);
    setShowForgot(false);
    setForgotEmail("");
    setForgotPassword("");
    setForgotConfirm("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail === t.adminEmail && loginPassword === t.adminPassword) {
      localStorage.setItem("firstname", "admin");
      localStorage.setItem("lastname", "dashboard");
      localStorage.setItem("email", loginEmail);
      navigate("/admindashboard");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      localStorage.setItem("firstname", user.firstName || "");
      localStorage.setItem("lastname", user.lastName || "");
      localStorage.setItem("email", user.email || "");
      navigate("/home1");
    } else {
      alert(t.invalidLogin);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert(t.passwordsNotMatch);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === signupData.email)) {
      alert(t.emailExists);
      return;
    }
    const now = new Date();
    const newUser = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      phone: signupData.phone,
      password: signupData.password,
      signupTime: now.toLocaleTimeString(),
      signupDate: now.toLocaleDateString()
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert(t.signupSuccess);
    setShowSignup(false);
    setSignupData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="relative w-full h-screen" dir={isRtl ? "rtl" : "ltr"}>
      <img
        src={welcomeImg}
        alt="Welcome"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          className={`px-3 py-1 rounded border font-semibold transition ${language === 'en' ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-white text-[#222] border-gray-300'}`}
          onClick={() => { setLanguage('en'); localStorage.setItem('language', 'en'); document.documentElement.dir = 'ltr'; }}
        >English</button>
        <button
          className={`px-3 py-1 rounded border font-semibold transition ${language === 'ar' ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-white text-[#222] border-gray-300'}`}
          onClick={() => { setLanguage('ar'); localStorage.setItem('language', 'ar'); document.documentElement.dir = 'rtl'; }}
        >العربية</button>
        <button
          className={`px-3 py-1 rounded border font-semibold transition ${language === 'he' ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-white text-[#222] border-gray-300'}`}
          onClick={() => { setLanguage('he'); localStorage.setItem('language', 'he'); document.documentElement.dir = 'rtl'; }}
        >עברית</button>
      </div>

      <div className="relative flex items-center justify-center h-full px-2 sm:px-0">
        <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white/90">
          <div className={`flex flex-col items-${isRtl ? "end" : "start"} mb-4`}>
            <img src={logoImg} alt="Logo" className="h-13 w-20 mb-2" />
          </div>

          <div className={`text-${isRtl ? "right" : "left"} mb-6`}>
            <h3 className="text-sm uppercase tracking-widest text-[#1E90FF] font-semibold">
              {t.weMake}
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222] mt-1">
              {t.dreamHouses}
            </h1>
          </div>

          {!showSignup && !showForgot ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-[#1E90FF] text-left">
                {t.login}
              </h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                <input 
                  type="email" 
                  placeholder={t.email} 
                  className="w-full border p-3 rounded-lg"
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  required
                />
                <input 
                  type="password" 
                  placeholder={t.password} 
                  className="w-full border p-3 rounded-lg"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  required
                />
                <div className="flex justify-between items-center text-sm">
                  <button 
                    type="button" 
                    className="text-[#1E90FF] hover:underline" 
                    onClick={() => setShowForgot(true)}
                  >
                    {t.forgotPassword}
                  </button>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#1E90FF] text-white p-3 rounded-lg hover:bg-[#1C86EE]"
                >
                  {t.loginBtn}
                </button>
              </form>

              <p className="mt-4 text-sm text-[#222]">
                {t.noAccount}{" "}
                <button 
                  className="text-[#1E90FF] hover:underline" 
                  onClick={() => setShowSignup(true)}
                >
                  {t.signup}
                </button>
              </p>
            </>
          ) : showForgot ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-[#1E90FF] text-left">
                {t.resetPassword}
              </h2>
              <form className="space-y-4" onSubmit={handleForgotPassword}>
                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full border p-3 rounded-lg"
                  value={forgotEmail}
                  onChange={e => setForgotEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.newPassword}
                  className="w-full border p-3 rounded-lg"
                  value={forgotPassword}
                  onChange={e => setForgotPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder={t.confirmNewPassword}
                  className="w-full border p-3 rounded-lg"
                  value={forgotConfirm}
                  onChange={e => setForgotConfirm(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#1E90FF] text-white p-3 rounded-lg hover:bg-[#1C86EE]"
                >
                  {t.resetBtn}
                </button>
                <button
                  type="button"
                  className="w-full mt-2 bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300"
                  onClick={() => setShowForgot(false)}
                >
                  {t.cancel}
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#1E90FF] mb-6">{t.signupTitle}</h2>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="flex gap-2 flex-col sm:flex-row">
                  <input 
                    type="text" 
                    placeholder={t.firstName} 
                    className="w-full sm:w-1/2 border p-3 rounded-lg"
                    value={signupData.firstName}
                    onChange={e => setSignupData({ ...signupData, firstName: e.target.value })}
                    required
                  />
                  <input 
                    type="text" 
                    placeholder={t.lastName} 
                    className="w-full sm:w-1/2 border p-3 rounded-lg"
                    value={signupData.lastName}
                    onChange={e => setSignupData({ ...signupData, lastName: e.target.value })}
                    required
                  />
                </div>
                <input 
                  type="email" 
                  placeholder={t.email} 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.email}
                  onChange={e => setSignupData({ ...signupData, email: e.target.value })}
                  required
                />
                <input 
                  type="tel" 
                  placeholder={t.phone} 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.phone}
                  onChange={e => setSignupData({ ...signupData, phone: e.target.value })}
                  required
                />
                <input 
                  type="password" 
                  placeholder={t.password} 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.password}
                  onChange={e => setSignupData({ ...signupData, password: e.target.value })}
                  required
                />
                <input 
                  type="password" 
                  placeholder={t.confirmPassword} 
                  className="w-full border p-3 rounded-lg"
                  value={signupData.confirmPassword}
                  onChange={e => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#1E90FF] text-white p-3 rounded-lg hover:bg-[#1C86EE]"
                >
                  {t.signupBtn}
                </button>
              </form>

              <p className="mt-4 text-sm text-[#222]">
                {t.haveAccount}{" "}
                <button 
                  className="text-[#1E90FF] hover:underline" 
                  onClick={() => setShowSignup(false)}
                >
                  {t.login}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}