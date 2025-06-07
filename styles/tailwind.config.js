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
      // Add custom color themes here
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add more plugins as needed
  ],
};
