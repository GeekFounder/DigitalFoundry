"use client";

import Image from "next/image";
import Link from "next/link";
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Stop sending ugly PDFs to sponsors. Generate live, professional media kits in 2 minutes.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your bland PDFs scream 'hobbyist'. Impress brands with live, updating kits packed with real analytics – land sponsors faster, no design skills.
            </p>
            <div className="mb-12">
              <Image
                src="/landing-page-hero.png"
                alt="Split-screen: Cringe Canva PDF vs. stunning interactive kit"
                width={1200}
                height={600}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist – 50% Off LTD"}
                </button>
              </form>
              {message && (
                <p className={`mt-4 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {message.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ugly PDFs are silently killing your sponsor deals.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Sponsors scroll past amateur designs in seconds
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Outdated stats make you look inconsistent
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Hours wasted in Canva, zero replies
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    'Hobby podcaster' vibe loses big-brand money
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Land sponsors effortlessly with automated pro media kits.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    <strong>Live Analytics:</strong> Pull fresh Spotify/Apple data – always current.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    <strong>Sponsor-Approved Designs:</strong> 5 templates that convert views to deals.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    <strong>Shareable Live Links:</strong> No attachments, instant wow.
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    <strong>Built-in Rate Cards:</strong> Price your show like a pro.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    <strong>Branded Domains:</strong> yourshow.com/kit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 mb-8">
            "No tech skills? Just paste your RSS + basics. Done."
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-4">
            "Doubled sponsor replies overnight!" – Beta podcaster
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Waitlist LTD: $49 (save $50)
          </h2>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join podcasters landing real sponsor dollars. Waitlist now.
          </h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Joining..." : "Secure My Spot"}
              </button>
            </form>
            {message && (
              <p className={`mt-4 ${message.type === "success" ? "text-green-200" : "text-red-200"}`}>
                {message.text}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Podcast Media Kit Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}