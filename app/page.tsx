"use client";
import Link from "next/link";
import Script from "next/script";

// Social media SVG icons for background
const icons = [
  // Twitter
  <svg key="twitter" className="w-16 h-16 text-cyan-400 opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .386.045.763.127 1.124C7.728 8.89 4.1 6.89 1.671 3.905c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>,
  // Facebook
  <svg key="facebook" className="w-16 h-16 text-blue-600 opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>,
  // Instagram
  <svg key="instagram" className="w-16 h-16 text-pink-500 opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.241 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.241-1.314-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C4.521 2.573 5.788 2.295 7.154 2.233 8.42 2.175 8.8 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.388 3.678 1.37c-.98.98-1.238 2.092-1.297 3.373C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.945.059 1.281.317 2.393 1.297 3.373.98.98 2.092 1.238 3.373 1.297 1.28.059 1.689.072 4.945.072s3.665-.013 4.945-.072c1.281-.059 2.393-.317 3.373-1.297.98-.98 1.238-2.092 1.297-3.373.059-1.28.072-1.689.072-4.945V9.333c0-3.256-.013-3.665-.072-4.945-.059-1.281-.317-2.393-1.297-3.373-.98-.98-2.092-1.238-3.373-1.297C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>,
  // TikTok
  <svg key="tiktok" className="w-16 h-16 text-fuchsia-500 opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 2v14.25a2.25 2.25 0 1 1-2.25-2.25h.75V12h-.75a4.5 4.5 0 1 0 4.5 4.5V7.5c.66.36 1.4.57 2.25.57V6.07c-.81-.09-1.5-.54-1.5-1.57V2h-3z"/></svg>,
  // LinkedIn
  <svg key="linkedin" className="w-16 h-16 text-blue-400 opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>,
];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] text-white flex flex-col overflow-hidden">
      {/* Social Media Icons Background */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 z-0"
      >
        <div className="w-full h-full flex flex-wrap justify-center items-center gap-32 opacity-60">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="animate-pulse"
              style={{
                transform: `translateY(${(i % 2 === 0 ? -1 : 1) * 30}px) rotate(${i * 15}deg)`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

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
            MediaTools<span className="text-[#0ea5e9]">.online</span>
          </h1>
          <nav className="flex gap-6">
            <Link href="#features" className="hover:text-cyan-400 transition">Features</Link>
            <Link href="#pricing" className="hover:text-cyan-400 transition">Pricing</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
            <Link href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full font-semibold shadow transition">Sign In</Link>
          </nav>
        </header>

        {/* AdSense Ad: Top Banner */}
        <div className="flex justify-center my-4">
          <ins className="adsbygoogle"
            style={{ display: "block", width: "100%", maxWidth: 728, height: 90 }}
            data-ad-client="ca-pub-2428925859543002" // <-- Replace with your AdSense publisher ID
            data-ad-slot="YOUR-ADSENSE-SLOT-ID-1"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
        <Script id="adsense-init-1" strategy="afterInteractive">{`
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

        {/* AdSense Ad: In-content */}
        <div className="flex justify-center my-8">
          <ins className="adsbygoogle"
            style={{ display: "block", width: "100%", maxWidth: 728, height: 90 }}
            data-ad-client="ca-pub-2428925859543002" // <-- Replace with your AdSense publisher ID
            data-ad-slot="YOUR-ADSENSE-SLOT-ID-2"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
        <Script id="adsense-init-2" strategy="afterInteractive">{`
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

        {/* AdSense Ad: Footer */}
        <div className="flex justify-center my-8">
          <ins className="adsbygoogle"
            style={{ display: "block", width: "100%", maxWidth: 728, height: 90 }}
            data-ad-client="ca-pub-2428925859543002" // <-- Replace with your AdSense publisher ID
            data-ad-slot="YOUR-ADSENSE-SLOT-ID-3"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
        <Script id="adsense-init-3" strategy="afterInteractive">{`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}</Script>

        {/* Contact */}
        <section id="contact" className="py-16 bg-[#0f172a] text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-slate-300">Questions or feedback? Reach out to our team!</p>
          <a href="mailto:support@mediatools.online" className="text-cyan-400 underline hover:text-cyan-200">
            support@mediatools.online
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