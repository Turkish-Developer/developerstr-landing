/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Container'ı ortalar
        padding: {
          DEFAULT: '1rem', // Varsayılan padding
        },
        screens: {
          'sm': '480px', // Küçük ekranlar için container genişliği
          'md': '768px', // Orta ekranlar için container genişliği
          'lg': '992px', // Büyük ekranlar için container genişliği
          'xl': '1200px', // Çok büyük ekranlar için container genişliği
        },
      },
      spacing: {
        'narrow': '80%', // Özel container genişliği
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
};
