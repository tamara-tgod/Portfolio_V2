/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#1a1a2e",
        "custom-opacity": "rgba(0, 0, 0, 0.04)",
       
      },
      backgroundImage: {
 "contact-gradient": "linear-gradient(150deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      },
      fontFamily: {
        sketch: ['"Caveat"', "cursive"],
        cabin: ["Cabin", "sans-serif"],
        fraunces: ['"Fraunces"', "serif"],
      },

      animation: {
        marquee: "marquee 20s linear infinite",
        morphBlob: "morphBlob 10s ease-in-out infinite",
        greenPulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },

    keyframes: {
      morphBlob: {
        "0%, 100%": {
          borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
        },
        "33%": {
          borderRadius: "55% 45% 40% 60% / 60% 55% 45% 40%",
        },
        "66%": {
          borderRadius: "45% 55% 60% 40% / 40% 60% 55% 45%",
        },
      },
    },

    boxShadow: {
      red: "-6px 4px 0 rgb(248 113 113)",
      green: "-6px 4px 0 rgb(74 222 128)",
      purple: "-6px 4px 0 rgb(192 132 252)",
      blue: "-6px 4px 0 rgb(96 165 250)",
      orange: "-6px 4px 0 rgb(251 146 60)",
    },
  },
  plugins: [],
};
