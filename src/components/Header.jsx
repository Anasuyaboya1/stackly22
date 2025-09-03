import React, { useState, useEffect } from 'react';
import ScrollToTop from '../pages/scroll-top';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const translations = {
  en: {
    home: "Home",
    home1: "Home 1",
    home2: "Home 2",
    about: "About Us",
    services: "Services",
    allServices: "All Services",
    residential: "Residential Properties",
    commercial: "Commercial Spaces",
    management: "Property Management",
    investments: "Real Estate Investments",
    interior: "Interior & Renovation Services",
    palm: "Palm Grove Villas",
    blog: "Blog",
    contact: "Contact Us",
    logout: "Logout",
    userDashboard: "User Dashboard",
    adminDashboard: "Back to Admin Dashboard",
    darkMode: "Toggle dark mode",
    language: "Language",
  },
  ar: {
    home: "الرئيسية",
    home1: "الرئيسية 1",
    home2: "الرئيسية 2",
    about: "معلومات عنا",
    services: "الخدمات",
    allServices: "كل الخدمات",
    residential: "عقارات سكنية",
    commercial: "مساحات تجارية",
    management: "إدارة الممتلكات",
    investments: "استثمارات عقارية",
    interior: "خدمات التصميم والتجديد",
    palm: "فلل بالم جروف",
    blog: "مدونة",
    contact: "اتصل بنا",
    logout: "تسجيل خروج",
    userDashboard: "لوحة المستخدم",
    adminDashboard: "العودة للوحة الإدارة",
    darkMode: "تبديل الوضع الداكن",
    language: "اللغة",
  },
  he: {
    home: "בית",
    home1: "בית 1",
    home2: "בית 2",
    about: "אודותינו",
    services: "שירותים",
    allServices: "כל השירותים",
    residential: "נכסים למגורים",
    commercial: "שטחים מסחריים",
    management: "ניהול נכסים",
    investments: "השקעות נדל\"ן",
    interior: "שירותי עיצוב ושיפוץ",
    palm: "וילות פאלם גרוב",
    blog: "בלוג",
    contact: "צור קשר",
    logout: "התנתק",
    userDashboard: "לוח משתמש",
    adminDashboard: "חזרה ללוח מנהל",
    darkMode: "החלף מצב כהה",
    language: "שפה",
  },
};

const Header = () => {
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const homeDropdownTimeout = React.useRef();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownTimeout = React.useRef();
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem('language', language);
    window.dispatchEvent(new Event('language-changed'));
    document.documentElement.dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsAvatarDropdownOpen(false);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Avatar initials logic
  const firstname = (localStorage.getItem('firstname') || '').trim();
  const lastname = (localStorage.getItem('lastname') || '').trim();
  const email = (localStorage.getItem('email') || '').trim();
  let initials = '';
  if (firstname.length > 0) initials += firstname[0].toUpperCase();
  if (lastname.length > 0) initials += lastname[0].toUpperCase();
  if (!initials) initials = '?';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#000] border-b border-[#141B25]' : 'bg-white border-b border-gray-200'}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => navigate('/home1', { state: { fromNav: true } })} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Language Dropdown */}
          <div className="mr-4">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="border rounded px-2 py-1"
              aria-label={t.language}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="he">עברית</option>
            </select>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden min-[480px]:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (homeDropdownTimeout.current) clearTimeout(homeDropdownTimeout.current);
                setIsHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                homeDropdownTimeout.current = setTimeout(() => setIsHomeDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/home1', { state: { fromNav: true } })}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                {t.home}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/home1" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{t.home1}</Link>
                  <Link to="/home2" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{t.home2}</Link>
                </div>
              )}
            </div>

            <Link
              to="/aboutus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
            >
              {t.about}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesDropdownTimeout.current = setTimeout(() => setIsServicesDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/services')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                {t.services}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.allServices}</Link>
                  <Link to="/residential-properties" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.residential}</Link>
                  <Link to="/commercial-spaces" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.commercial}</Link>
                  <Link to="/property-management" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.management}</Link>
                  <Link to="/real-estate-investments" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.investments}</Link>
                  <Link to="/interior-renovation-services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.interior}</Link>
                  <Link to="/palm-groove" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{t.palm}</Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
            >
              {t.blog}
            </Link>

            <Link
              to="/contactus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#00BFFF] transition-colors duration-200`}
            >
              {t.contact}
            </Link>

            {/* Dark Mode Toggle */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-blue-100 border-blue-300 hover:bg-blue-200'}`}
              onClick={toggleTheme}
              aria-label={t.darkMode}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown */}
            <div className="relative">
              <ScrollToTop />
              <button
                className="w-10 h-10 rounded-full bg-[#00bfff] flex items-center justify-center text-white font-semibold focus:outline-none"
                onClick={() => setIsAvatarDropdownOpen((v) => !v)}
              >
                {initials}
              </button>
              {isAvatarDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <button
                    className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#00bfff]' : 'text-gray-800 hover:bg-blue-100'}`}
                    onClick={() => { setIsAvatarDropdownOpen(false); navigate('/welcome'); }}
                  >
                    {t.logout}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile icons - Only visible on very small screens */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-blue-100 border-blue-300 hover:bg-blue-200'}`}
              onClick={toggleTheme}
              aria-label={t.darkMode}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-[#00BFFF] flex items-center justify-center text-white font-semibold focus:outline-none"
                onClick={() => setIsAvatarDropdownOpen((v) => !v)}
              >
                {initials}
              </button>
              {isAvatarDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                    onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/welcome'; }}
                  >
                    {t.logout}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Only visible on very small screens */}
        {isMobileMenuOpen && (
          <div className="min-[480px]:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Language Dropdown (Mobile) */}
              <div className="mb-2">
                <select
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                  className="border rounded px-2 py-1 w-full"
                  aria-label={t.language}
                >
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                  <option value="he">עברית</option>
                </select>
              </div>
              {/* Mobile Home Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{t.home}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="/home1" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.home1}</a>
                    <a href="/home2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.home2}</a>
                  </div>
                )}
              </div>

              <Link to="/aboutus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.about}
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{t.services}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.allServices}</Link>
                    <Link to="/residential-properties" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.residential}</Link>
                    <Link to="/commercial-spaces" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.commercial}</Link>
                    <Link to="/property-management" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.management}</Link>
                    <Link to="/real-estate-investments" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.investments}</Link>
                    <Link to="/interior-renovation-services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.interior}</Link>
                    <Link to="/palm-groove" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{t.palm}</Link>
                  </div>
                )}
              </div>

              <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.blog}
              </Link>

              <Link to="/contactus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {t.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;