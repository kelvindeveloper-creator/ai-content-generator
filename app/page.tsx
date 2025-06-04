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
          backgroundAttachment: "fixed", // Keeps it fixed while scrolling
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
        <header className="flex justify-between items-center px-8 py-6">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            MediaTools<span className="text-[#0ea5e9]">Studio</span>
          </h1>
          <nav className="flex gap-6">
            <Link href="#features" className="hover:text-cyan-400 transition">Features</Link>
            <Link href="#pricing" className="hover:text-cyan-400 transition">Pricing</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
            <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full font-semibold shadow transition">Sign In</Link>
          </nav>
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
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Supercharge Your <span className="text-cyan-400">Content Creation</span>
          </h2>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-slate-200">
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
          <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
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
        <section id="features" className="py-20 bg-[#1e293b]">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10">
            <div className="bg-[#0ea5e9]/10 rounded-xl p-8 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3 text-cyan-300">AI Content Generator</h3>
              <p>Produce high-quality articles, social posts, and marketing copy in seconds using advanced AI models.</p>
            </div>
            <div className="bg-[#0ea5e9]/10 rounded-xl p-8 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3 text-cyan-300">Media Editing Suite</h3>
              <p>Edit images, videos, and audio with intuitive, AI-assisted tools for creators of all skill levels.</p>
            </div>
            <div className="bg-[#0ea5e9]/10 rounded-xl p-8 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3 text-cyan-300">Templates & Automation</h3>
              <p>Access 50+ ready-to-use templates and automate repetitive content tasks to save time and boost productivity.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gradient-to-r from-[#0ea5e9]/20 to-[#0f172a]/60">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Simple Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1e293b] rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="mb-4 text-slate-300">Perfect for getting started</p>
                <ul className="mb-6 text-left space-y-2">
                  <li>✅ 10,000 Words/Month</li>
                  <li>✅ 50+ Content Templates</li>
                  <li>✅ Unlimited Download & Copy</li>
                  <li>✅ 1 Month of History</li>
                </ul>
                <span className="text-3xl font-bold">0$</span>
              </div>
              <div className="bg-cyan-600 rounded-xl p-8 shadow-lg border-2 border-cyan-400">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="mb-4 text-slate-100">For professionals & teams</p>
                <ul className="mb-6 text-left space-y-2">
                  <li>🚀 100,000 Words/Month</li>
                  <li>🚀 50+ Template Access</li>
                  <li>🚀 Unlimited Download & Copy</li>
                  <li>🚀 1 Year of History</li>
                </ul>
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-lg font-semibold">/month</span>
                <div className="mt-6">
                  <Link href="/dashboard/billing" className="bg-white text-cyan-600 px-6 py-3 rounded-full font-bold shadow hover:bg-cyan-100 transition">
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
        <section id="contact" className="py-16 bg-[#0f172a] text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-slate-300">Questions or feedback? Reach out to our team!</p>
          <a href="mailto:mediatools.onlinee@gmail.com" className="text-cyan-400 underline hover:text-cyan-200">
            mediatools.onlinee@gmail.com
          </a>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-slate-400 text-sm bg-[#0f172a]">
          &copy; {new Date().getFullYear()} MediaTools.online &mdash; All rights reserved.
        </footer>
      </div>
    </main>
  );
}
