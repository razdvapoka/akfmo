const range = (length) => Array.from(Array(length).keys())

const gridColumnExtend = range(12).reduce(
  (agg, s) => ({
    ...agg,
    [s + 13]: `${s + 13}`,
  }),
  {}
)

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    spacing: range(30).reduce(
      (acc, step) => ({
        ...acc,
        [step]: `${(step * 5) / 10}rem`,
      }),
      {}
    ),
    screens: {
      lg: {
        max: '1023px',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#231F20',
      grey1: '#F4F4F2',
      grey2: '#A1A198',
      grey3: '#9AA198',
      grey4: '#2E2C2C',
      grey5: '#242222',
      pink: '#FFE8E8',
      red: '#ED4A57',
    },
    fontSize: {
      xxs: '1.1rem',
      xs: '1rem',
      s: '1.2rem',
      m: '1.6rem',
      l: '1.8rem',
      ml: '2rem',
      mx: '3rem',
      mxx: '4rem',
      xl: '3.2rem',
      xxl: '7.8rem',
    },
    lineHeight: {
      m: 1,
      ml: 1.1,
      l: 1.2,
    },
    letterSpacing: {
      wider: '0.01em',
      wide: '0.03em',
      tighter: '-0.01em',
    },
    extend: {
      gridTemplateColumns: {
        18: 'repeat(18, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 1fr))',
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumnStart: gridColumnExtend,
      gridColumnEnd: gridColumnExtend,
      width: {
        '7/10': '70%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
