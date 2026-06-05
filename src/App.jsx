import { useState, useEffect } from "react";
import logoSrc from './assets/30connect.svg';

// Add to your index.css:
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{ backgroundColor: "#fdf6f0", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Soft background blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[340px] h-[340px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f4a4a4, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #e06070, transparent 70%)" }}
      />

      {/* Logo */}
      <div className={`mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
          <img 
            src={logoSrc} 
            alt="30 Connect" 
            className="w-auto h-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px]" 
          />
      </div>

      {/* Heart + Heading */}
      <div
        className={`relative flex flex-col items-center transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="relative w-[280px] h-[265px] sm:w-[360px] sm:h-[340px] md:w-[460px] md:h-[435px] lg:w-[540px] lg:h-[510px] flex items-center justify-center">
          <svg
            viewBox="0 0 200 190"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="heartGrad" cx="50%" cy="50%" r="55%">
                <stop offset="0%"  stopColor="#f7a8a8" stopOpacity="1" />
                <stop offset="60%" stopColor="#ef8080" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#d24051" stopOpacity="0.85" />
              </radialGradient>
            </defs>
            <path
              d="M100 170 C55 140 8 108 8 58 C8 28 30 8 58 8 C76 8 92 18 100 30 C108 18 124 8 142 8 C170 8 192 28 192 58 C192 108 145 140 100 170Z"
              fill="url(#heartGrad)"
            />
          </svg>

          {/* Text over heart */}
          <div className="relative z-10 text-center pb-8">
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 8vw, 4.2rem)",
                fontWeight: 900,
                color: "#c50b0b",
              }}
            >
              COMING
              <br />
              SOON...
            </h1>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div
        className={`mt-6 text-center max-w-sm px-4 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p
          className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed"
          style={{ color: "#a0162a" }}
        >
          A safe space for singles above 30.
          <br />
          You know exactly what you want.
          <br />
          So do we.
        </p>
      </div>

      {/* Waitlist CTA */}
      <div
        className={`mt-8 w-full max-w-md px-4 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {submitted ? (
          <div
            className="text-center py-5 px-8 rounded-2xl font-semibold text-lg"
            style={{ backgroundColor: "#fcd5d5", color: "#a0162a" }}
          >
            💌 You're on the list! We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-4 rounded-2xl text-base outline-none border-2 transition-all duration-200"
              style={{
                backgroundColor: "#fff",
                borderColor: "#f4a4a4",
                color: "#3a0010",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#c0152a")}
              onBlur={(e) => (e.target.style.borderColor = "#f4a4a4")}
            />
            <button
              type="submit"
              className="px-7 py-4 rounded-2xl font-bold text-base text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #c0152a, #8b0000)",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 20px rgba(160,22,42,0.35)",
              }}
            >
              Join Waitlist
            </button>
          </form>
        )}

        <p className="text-center mt-4 text-sm" style={{ color: "#c07080" }}>
          www.30connect.com
        </p>
      </div>
    </div>
  );
}
