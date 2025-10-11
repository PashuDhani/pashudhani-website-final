/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        success: '#4CAF50',
        accent: '#2e7d32',
      },
    },
  },
  plugins: [],
}


