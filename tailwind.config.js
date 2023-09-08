/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  content: ["*.{html,js}","componentes/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
}

