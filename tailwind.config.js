const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
		screens: {
			xs: '350px',
			msm: '425px',
			...screens,
			'3xl': '2250px',
	  },
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }),
    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
