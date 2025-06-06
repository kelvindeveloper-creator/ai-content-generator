"use client";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import React from "react";

const creativeImages = [
  "/images/creative1.jpg",
  "/images/creative2.jpg",
  "/images/creative3.jpg",
  "/images/creative4.jpg",
];

export default function LandingPage() {
  const [current, setCurrent] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Preload images
  React.useEffect(() => {
    creativeImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Slideshow effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % creativeImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Close menu on navigation (for mobile)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] text-white flex flex-col overflow-hidden">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PFFHR77283"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PFFHR77283');
        `}
      </Script>

      {/* Fullscreen Slideshow Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out transform"
        style={{
          backgroundImage: `url(${creativeImages[current]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Google AdSense Script */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />

        {/* Header */}
        <header className="flex justify-between items-center px-4 md:px-8 py-6">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Media Tools <span className="text-[#0ea5e9]">Studio</span>
          </h1>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="hover:text-cyan-400 transition">Features</Link>
            <Link href="#pricing" className="hover:text-cyan-400 transition">Pricing</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
            <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full font-semibold shadow transition">Sign In</Link>
          </nav>
          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
          {/* Mobile Dropdown Menu */}
          {menuOpen && (
  <div
    className="fixed inset-0 z-[100] bg-black/60 md:hidden"
    onClick={handleNavClick}
  >
    <div
      className="absolute top-16 left-4 right-4 bg-[#1e293b] rounded-xl shadow-lg flex flex-col py-4 z-[101] animate-fade-in"
      onClick={e => e.stopPropagation()}
    >
      <Link href="#features" className="px-6 py-3 hover:bg-cyan-700 rounded transition" onClick={handleNavClick}>
        Features
      </Link>
      <Link href="#pricing" className="px-6 py-3 hover:bg-cyan-700 rounded transition" onClick={handleNavClick}>
        Pricing
      </Link>
      <Link href="#contact" className="px-6 py-3 hover:bg-cyan-700 rounded transition" onClick={handleNavClick}>
        Contact
      </Link>
      <Link href="/dashboard" className="px-6 py-3 mt-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold shadow transition text-center" onClick={handleNavClick}>
        Sign In
      </Link>
    </div>
  </div>
)}
        </header>

        {/* AdSense Ad: Footer - Block 1 */}
        <div className="flex justify-center my-8">
          <div style={{ minWidth: 320, width: "100%", maxWidth: 900 }}>
            <ins className="adsbygoogle"
              style={{ display: "block", minWidth: 320 }}
              data-ad-client="ca-pub-2428925859543002"
              data-ad-slot="9942454769"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
        <Script id="adsense-footer-init-1" strategy="afterInteractive">{`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}</Script>

        {/* Hero Section with Video */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-2 md:px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Supercharge Your <span className="text-cyan-400">Content Creation</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-slate-200">
            AI-powered tools for creators, marketers, and businesses. Generate, edit, and manage your media content with futuristic efficiency.
          </p>
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg mb-8 border-4 border-cyan-500">
            <video
              src="/landing-demo.mp4"
              poster="/video-poster.png"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
          <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition">
            Get Started For Free
          </Link>
        </section>

        {/* AdSense Ad: Footer - Block 2 (Matched Content) */}
        <div className="flex justify-center my-8">
          <div style={{ width: "100%", minWidth: 320, maxWidth: 900 }}>
            <ins className="adsbygoogle"
              style={{ display: "block", minWidth: 320 }}
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-2428925859543002"
              data-ad-slot="4374433318"
            />
          </div>
        </div>
        <Script id="adsense-footer-init-2" strategy="afterInteractive">{`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}</Script>

        {/* Features */}
        <section id="features" className="py-16 md:py-20 bg-[#1e293b]">
          <div className="max-w-5xl mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-[#0ea5e9]/10 rounded-xl p-6 md:p-8 shadow-lg hover:scale-105 transition">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-cyan-300">AI Content Generator</h3>
              <p className="text-sm md:text-base">Produce high-quality articles, social posts, and marketing copy in seconds using advanced AI models.</p>
            </div>
            <div className="bg-[#0ea5e9]/10 rounded-xl p-6 md:p-8 shadow-lg hover:scale-105 transition">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-cyan-300">Media Editing Suite</h3>
              <p className="text-sm md:text-base">Edit images, videos, and audio with intuitive, AI-assisted tools for creators of all skill levels.</p>
            </div>
            <div className="bg-[#0ea5e9]/10 rounded-xl p-6 md:p-8 shadow-lg hover:scale-105 transition">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-cyan-300">Templates & Automation</h3>
              <p className="text-sm md:text-base">Access 50+ ready-to-use templates and automate repetitive content tasks to save time and boost productivity.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-20 bg-gradient-to-r from-[#0ea5e9]/20 to-[#0f172a]/60">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[#1e293b] rounded-xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Free</h3>
                <p className="mb-4 text-slate-300 text-sm md:text-base">Perfect for getting started</p>
                <ul className="mb-6 text-left space-y-2 text-sm md:text-base">
                  <li>✅ 10,000 Words/Month</li>
                  <li>✅ 50+ Content Templates</li>
                  <li>✅ Unlimited Download & Copy</li>
                  <li>✅ 1 Month of History</li>
                </ul>
                <span className="text-2xl md:text-3xl font-bold">0$</span>
              </div>
              <div className="bg-cyan-600 rounded-xl p-6 md:p-8 shadow-lg border-2 border-cyan-400">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Pro</h3>
                <p className="mb-4 text-slate-100 text-sm md:text-base">For professionals & teams</p>
                <ul className="mb-6 text-left space-y-2 text-sm md:text-base">
                  <li>🚀 100,000 Words/Month</li>
                  <li>🚀 50+ Template Access</li>
                  <li>🚀 Unlimited Download & Copy</li>
                  <li>🚀 1 Year of History</li>
                </ul>
                <span className="text-2xl md:text-3xl font-bold">$9.99</span>
                <span className="text-base md:text-lg font-semibold">/month</span>
                <div className="mt-6">
                  <Link href="/dashboard/billing" className="bg-white text-cyan-600 px-4 md:px-6 py-3 rounded-full font-bold shadow hover:bg-cyan-100 transition">
                    Upgrade Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AdSense Ad: Footer - Block 3 */}
        <div className="flex justify-center my-8">
          <div style={{ minWidth: 320, width: "100%", maxWidth: 900 }}>
            <ins className="adsbygoogle"
              style={{ display: "block", minWidth: 320 }}
              data-ad-client="ca-pub-2428925859543002"
              data-ad-slot="4367700048"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
        <Script id="adsense-footer-init-3" strategy="afterInteractive">{`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}</Script>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-16 bg-[#0f172a] text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-slate-300 text-sm md:text-base">Questions or feedback? Reach out to our team!</p>
          <a href="mailto:mediatools.onlinee@gmail.com" className="text-cyan-400 underline hover:text-cyan-200 break-all">
            mediatools.onlinee@gmail.com
          </a>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-slate-400 text-xs md:text-sm bg-[#0f172a]">
          &copy; {new Date().getFullYear()} MediaTools.online &mdash; All rights reserved.
        </footer>
      </div>
    </main>
  );
}
