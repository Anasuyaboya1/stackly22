import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages (file names matched exactly as in /pages folder)
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/aboutus";   // ✅ matches aboutus.jsx
import ServiceHero from "./pages/services"; // ✅ matches services.jsx
import WelcomePage from "./pages/welcome"; // ✅ matches welcome.jsx
import ResidentialProperties from "./pages/ResidentialProperties";
import CommercialSpaces from "./pages/CommercialSpaces";
import PropertyManagement from "./pages/PropertyManagement";
import InteriorRenovationServices from "./pages/InteriorRenovationServices";
import RealEstateInvestments from "./pages/RealEstateInvestments";
import PalmGroove from "./pages/PalmGroove";
import BlogHero from "./pages/blog"; // ✅ matches blog.jsx
import Article from "./pages/Article";
import ContactHero from "./pages/contactus"; // ✅ matches contactus.jsx
import UserDetailsSection from "./pages/admindashboard"; // ✅ matches admindashboard.jsx
import UserDashboard from "./pages/userdashboard"; // ✅ matches userdashboard.jsx

// ✅ Layout with Header + Footer
function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Renders child route */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root / Welcome */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />

        {/* Admin Dashboard (No Header/Footer) */}
        <Route path="/admindashboard" element={<UserDetailsSection />} />

        {/* All routes with Header/Footer */}
        <Route element={<Layout />}>
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/aboutus" element={<AboutUs />} /> {/* ✅ fixed */}
          <Route path="/services" element={<ServiceHero />} />
          <Route path="/residential-properties" element={<ResidentialProperties />} />
          <Route path="/commercial-spaces" element={<CommercialSpaces />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/interior-renovation-services" element={<InteriorRenovationServices />} />
          <Route path="/real-estate-investments" element={<RealEstateInvestments />} />
          <Route path="/palm-groove" element={<PalmGroove />} />
          <Route path="/blog" element={<BlogHero />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contactus" element={<ContactHero />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
