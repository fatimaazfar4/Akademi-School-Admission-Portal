/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B4FFF',
        secondary: '#F2F4FF',
        card: '#FFFFFF',
        iconBg: '#E5E5FF',
        sidebar: '#5B4FFF',
        textDark: '#1F2937',
        textLight: '#6B7280',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
