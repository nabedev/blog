/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#73ef96",
        
"secondary": "#ba961f",
        
"accent": "#2942aa",
        
"neutral": "#21222C",
        
"base-100": "#F0EFF1",
        
"info": "#A0DBE9",
        
"success": "#157546",
        
"warning": "#B29710",
        
"error": "#DF304A",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
