module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./projects/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        khand: "Khand, sans-serif",
        fredoka: "Fredoka, sans-serif",
        "yanone-kaffeesatz": "Yanone Kaffeesatz, sans-serif",
      },
      colors: {
        display: "var(--background-color)",
        "box-00": "var(--box-color-00)",
        "box-01": "var(--box-color-01)",
        "base-color-00": "var(--text-color-00)",
        "base-color-01": "var(--border-color)",
        success: "var(--success-color)",
        danger: "var(--danger-color)",
        warning: "var(--warning-color)",
      },
      boxShadow: {
        base: "var(--shadow)",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
