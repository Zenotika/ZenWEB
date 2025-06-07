// Tailwind CSS configuration for Zenotika
// Next steps: Add custom themes, typography, and plugin setup

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo-500
          dark: '#4338ca',    // Indigo-700
          light: '#a5b4fc',   // Indigo-300
        },
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(99,102,241,0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add more plugins as needed
  ],
};
