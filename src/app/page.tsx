"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Thanks for joining the waitlist! We'll be in touch soon." });
        setEmail("");
      } else {
        setMessage({ type: "error", text: data.error || "Failed to join waitlist. Please try again." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: "📊", title: "Live Analytics", desc: "Pull fresh Spotify & Apple Podcast data — always current when sponsors check." },
    { icon: "🎨", title: "5 Sponsor-Approved Templates", desc: "Proven designs that convert views to deals. Zero design skills needed." },
    { icon: "🔗", title: "Shareable Live Links", desc: "No PDF attachments. Send a live link that updates in real-time." },
    { icon: "🌐", title: "Custom Branded Domains", desc: "yourpodcast.com/kit — own your brand identity end to end." },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F1A]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/95 backdrop-blur-sm border-b border-white/10 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Image src="/logo.svg" alt="Digital Foundry" width={160} height={34} />
          <a
            href="#pricing"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition text-sm"
          >
            Get Early Access
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0F0F1A] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white leading-tight mb-6">
              Stop sending ugly PDFs to sponsors.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate live, professional media kits in 2 minutes. Impress brands with real analytics — land sponsors faster.
            </p>
            <div className="mb-12 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20">
              <Image
                src="/landing-page-hero.png"
                alt="Split-screen: Cringe Canva PDF vs. stunning interactive kit"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 disabled:opacity-50 text-lg whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist →"}
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-3">Join the waitlist · No payment required now</p>
              {message && (
                <p className={`mt-4 ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
                  {message.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Ugly PDFs are silently killing your sponsor deals.
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Sponsors scroll past amateur designs in seconds. Here is what is costing you deals:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Sponsors scroll past amateur designs in seconds",
              "Outdated stats make you look inconsistent",
              "Hours wasted in Canva, zero replies",
              "'Hobby podcaster' vibe loses big-brand money",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
                <span className="text-red-500 text-xl mt-0.5">✕</span>
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Land sponsors effortlessly with pro media kits.
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to look professional and close deals — without touching design tools.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-gray-700 font-medium italic">
            "No tech skills? Just paste your RSS + basics. Done."
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[#0F0F1A] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Launch Special — 50% Off
            </h2>
            <p className="text-lg text-gray-400">Lock in your lifetime discount before we go live.</p>
          </div>
          <div className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-gray-500 line-through text-2xl">$99</span>
                <span className="text-5xl md:text-6xl font-bold text-white">$49</span>
              </div>
              <p className="text-gray-400 text-sm">Lifetime access · No recurring fees</p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Live Spotify & Apple Podcast Analytics",
                "5 Sponsor-Approved Pro Templates",
                "Shareable Live Links (No PDF attachments)",
                "Custom Branded Domains",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition duration-300 disabled:opacity-50 text-lg"
              >
                {isSubmitting ? "Joining..." : "Secure My Spot"}
              </button>
            </form>
            <p className="text-gray-500 text-sm text-center mt-4">Join the waitlist · No payment required now</p>
            {message && (
              <p className={`mt-4 text-center ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {message.text}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F1A] border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <Image src="/logo.svg" alt="Digital Foundry" width={140} height={30} />
          <p className="text-gray-500 text-sm">
            © 2026 Digital Foundry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
