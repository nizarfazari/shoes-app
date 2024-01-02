/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    
  ],
  theme: {
    colors : {
      primary : "#FF7A00",
      secondary : "#CF6605",
      white : '#ffff',
      stars : '#FEBE48',
      black : {
        primary : "#333333"
      },
      purples : "#E7ECFF",
      grey : {
        primary : "#C4C4C4",
        secondary : "#939EA4",
        tertiary : "#6D7973"
      },
      pink : "#FF268B",
      yellow : "#E2E61E",
      brown : "#9D3856"
    },

    container : {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  
}
