import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'purple': 'hsl(252, 66%, 62%)',
      'orange': 'hsl(28, 89%, 67%)',
      'pink': 'hsl(0, 78%, 79%)',
      'salmon': 'hsl(7, 77%, 66%)',
      'teal': 'hsl(172, 46%, 57%)',
      'magenta': 'hsl(314, 45%, 23%)',
      'black': 'hsl(0, 0%, 1%)',
      'grey': 'hsl(30, 5%, 45%)',
      'biege': '#FFF7F0',
      'white': '#FFFFFF',
      

    },
    screens: {
      "tablet": "768px",
      "desktop": "1440px"
    },
    fontSize: {
      'h-lg': '56px',
      'h-md': '40px',
      'h-sm': '32px',
      'b-md': ['18px', {lineHeight: '155%'}]
    },

    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
