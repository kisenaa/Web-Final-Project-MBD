import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        animatedgradient : {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["cupcake"],
  },
}
