import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/he11.mp4"; // Replace with your background video
import house1 from "../assets/villa.jpg"; 
import house2 from "../assets/villa2.jpg"; 
import house3 from "../assets/villa3.jpg"; 
import house4 from "../assets/villa4.jpg"; 

const THEME_KEY = "theme";

export default function Article() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem(THEME_KEY) || "light";
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

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  return (
    <div
      className={themedClass(
        "transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800"
      )}
    >
      {/* ✅ 1. Hero Section */}
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
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-6 animate-slideUp">
            Latest Real Estate Insights
          </h2>
          <p className="text-xl mb-8 animate-fadeIn delay-200">
            Discover trends, tips, and strategies shaping the real estate
            industry in 2025.
          </p>
        </div>
      </section>

      {/* ✅ 2. Article 1 */}
{/* ✅ Article 1 (Image Left / Text Right) */}
<section className="flex      items-center gap-10 px-6 py-16   mx-auto">
  {/* Text Left */}
  <div className=" w-full md:w-1/2">
    <h3
      className={themedClass(
        "text-3xl font-bold mb-4",
        "text-blue-300",
        "text-blue-700"
      )}
    >
      The Rise of Smart Urban Living
    </h3>
    <p className="mb-6 leading-relaxed text-justify">
      Cities are rapidly transforming with the integration of smart
      technologies, co-living communities, and sustainable urban planning.
      Modern apartments are no longer just about providing shelter—they now
      offer integrated solutions for comfort, security, and eco-conscious
      lifestyles.
    </p>
    <p className="mb-6 leading-relaxed text-justify">
      From energy-efficient appliances to intelligent climate control, every
      aspect of new-age housing is designed to reduce waste and enhance
      convenience. Shared workspaces, rooftop gardens, and community-driven
      recreational zones are also becoming the new norm in metropolitan areas.
    </p>
    <ul className="list-disc ml-6 space-y-2">
      <li>AI-powered smart homes with automated systems</li>
      <li>Eco-friendly building materials reducing carbon footprint</li>
      <li>Affordable micro-apartments for young professionals</li>
      <li>Green rooftops and community spaces for better well-being</li>
    </ul>
  </div>

  {/* Image Right */}
  <div className=" w-full md:w-1/2">
    <img
      src={house1}
      alt="Urban Living"
      className="rounded-xl shadow-lg w-full h-[450px] object-cover"
    />
  </div>
</section>






      {/* ✅ 3. Article 2 */}
      <section className="flex      items-center gap-10 px-6 py-16   mx-auto">
  {/* Text Left */}
  <div className=" w-full md:w-1/2">
          <img
            src={house2}
            alt="Investment Strategies"
            className="rounded-xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>
<div className=" w-full md:w-1/2">
          <h3
            className={themedClass(
              "text-3xl font-bold mb-4",
              "text-blue-300",
              "text-blue-700"
            )}
          >
            Top Investment Strategies for 2025
          </h3>
          <p className="mb-6 leading-relaxed text-justify">
            From rental properties to REITs, investors are diversifying their
            portfolios. This article explores the most profitable strategies in
            today’s market and how to maximize ROI in changing economic
            conditions The rise of sustainable and eco-friendly buildings has created a surge in
      demand for green-certified projects. These not only attract higher rental
      yields but also qualify for government incentives, making them a
      lucrative choice for forward-thinking investors  Technology-driven real estate platforms are also revolutionizing the
      investment landscape. Fractional ownership, digital property management,
      and blockchain-powered transactions provide accessibility, transparency,
      and security to a broader range of investors.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Rental property investments</li>
            <li>Commercial real estate growth</li>
            <li>REIT opportunities</li>
          </ul>
        </div>
      </section>







      {/* ✅ 4. Article 3 */}
      <section className="flex      items-center gap-10 px-6 py-16   mx-auto">
  {/* Text Left */}

        <div className=" w-full md:w-1/2">
          <h3
            className={themedClass(
              "text-3xl font-bold mb-4",
              "text-blue-300",
              "text-blue-700"
            )}
          >
            Luxury Real Estate Trends
          </h3>
          <p className="mb-6 leading-relaxed text-justify">
            High-net-worth buyers are seeking waterfront properties, smart
            security systems, and eco-friendly luxury estates. Explore what’s
            driving demand in this premium market segment.
          </p>
        </div>
          <div className=" w-full md:w-1/2">
          <img
            src={house3}
            alt="Luxury Homes"
            className="rounded-xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>
      </section>





      

      {/* ✅ 5. Article 4 */}
      <section className="flex      items-center gap-10 px-6 py-16   mx-auto">
  {/* Text Left */}
  <div className=" w-full md:w-1/2">
          <img
            src={house4}
            alt="Suburban Growth"
            className="rounded-xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>
       <div className=" w-full md:w-1/2">
          <h3
            className={themedClass(
              "text-3xl font-bold mb-4",
              "text-blue-300",
              "text-blue-700"
            )}
          >
            Suburban Growth in 2025
          </h3>
          <p className="mb-6 leading-relaxed text-justify">
            Remote work has fueled suburban housing demand. Families are
            prioritizing larger homes, green spaces, and community-driven
            neighborhoods  Technology-driven real estate platforms are also revolutionizing the
      investment landscape. Fractional ownership, digital property management,
      and blockchain-powered transactions provide accessibility, transparency,
      and security to a broader range of investors  Technology-driven real estate platforms are also revolutionizing the
      investment landscape. Fractional ownership, digital property management,
      and blockchain-powered transactions provide accessibility, transparency,
      and security to a broader range of investors The rise of sustainable and eco-friendly buildings has created a surge in
      demand for green-certified projects. These not only attract higher rental
      yields but also qualify for government incentives, making them a
      lucrative choice for forward-thinking investors The rise of sustainable and eco-friendly buildings has created a surge in
      demand for green-certified projects. These not only attract higher rental
      yields but also qualify for government incentives, making them a
      lucrative choice for forward-thinking investors digital property management,
      and blockchain-powered transactions provide accessibility, transparency,
      and security to a broader range of investors.
          </p>
        </div>
      </section>

      {/* ✅ 6. Extra Section: Real Estate Tips */}
      {(() => {
        const tips = [
          {
            icon: "🏠",
            title: "First-Time Buyers",
            desc: "Get pre-approved early and explore government-backed loan options.",
          },
          {
            icon: "📈",
            title: "Market Trends",
            desc: "Stay informed about mortgage rates and regional growth hotspots.",
          },
          {
            icon: "💼",
            title: "Commercial Spaces",
            desc: "Look for mixed-use properties combining retail, office, and residential.",
          },
          {
            icon: "🌎",
            title: "Sustainability",
            desc: "Eco-friendly homes are not just trendy but hold higher resale value.",
          },
          {
            icon: "💡",
            title: "Smart Investments",
            desc: "Diversify between residential, commercial, and REITs for balance.",
          },
        ];

        return (
          <section
            className={themedClass(
              "py-16 px-4 text-center w-full",
              "bg-[#1E2A38]",
              "bg-blue-50"
            )}
          >
            <h2
              className={themedClass(
                "text-4xl font-bold mb-6",
                "text-blue-300",
                "text-blue-700"
              )}
            >
              Quick Real Estate Tips
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {tips.map((tip, i) => (
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
        );
      })()}
    </div>
  );
}
