/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: 'var(--main-color)',
        backgroundPage: 'var(--background-page-color)',
        secondaryBackground : 'var(--secondary-background)',
        navbarBorder: 'var(--navbar-border-bottom-color)',
        textWhite: 'var(--text-color)',
        
        buttonNavbarHover : "var(--navbar-button-hover)"
      },
      fontFamily: {
        Rubik: 'var(--font-main)',
      },
      fontSize: {
        font_logo: 'var(--font-size-logo)',
        font_button: 'var(--font-size-button)',
      },
       screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      custom: '900px', 
    },
    },
  },
  plugins: [],
};
