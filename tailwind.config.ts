import type { Config } from 'tailwindcss'

type PluginFunction = (api: { addComponents: (components: Record<string, any>) => void }) => void

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'tuiu-blue': {
          50: '#D3E9F5',
          100: '#C4E4F6',
          200: '#AEE0FC',
          300: '#4095DB',
          400: '#327DBB'
        },
        'tuiu-green': {
          100: '#CBE9D1',
          200: '#BAE0C2',
          300: '#205E5E',
          400: '#1B4E4E',
          500: '#1b485a'
        },
        'tuiu-gray': {
          50: '#eef4f7',
          100: '#DEDEDE',
          300: '#9E9E9E',
          400: '#717171',
          500: '#404040'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      }
    }
  },
  plugins: [
    function ({ addComponents }: { addComponents: (components: Record<string, any>) => void }) {
      addComponents({
        '.input-no-spinners': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'textfield',
          '-ms-appearance': 'none',
          margin: '0'
        },
        '.input-no-spinners::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0'
        },
        '.input-no-spinners::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0'
        }
      })
    }
  ]
}
export default config
