/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const containerScreens = Object.assign({}, defaultTheme.screens);
delete containerScreens["2xl"];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      screens: containerScreens,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#eef8f2",
          100: "#d4ede1",
          200: "#b2ddc9",
          300: "#81ceb0",
          400: "#50c79c",
          500: "#1aab7c",
          600: "#099067",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c1f",
        },
      },
      spacing: {
        128: "32rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                opacity: 0.7,
              },
            },
            // https://tailwindcss.com/docs/typography-plugin#adding-custom-color-themes
            "--tw-prose-links": theme("colors.primary[700]"),
            "--tw-prose-body": theme("colors.slate[700]"),
            "--tw-prose-headings": theme("colors.slate[900]"),
            "--tw-prose-lead": theme("colors.slate[600]"),
            "--tw-prose-bold": theme("colors.slate[700]"),
            "--tw-prose-counters": theme("colors.slate[500]"),
            "--tw-prose-bullets": theme("colors.slate[300]"),
            "--tw-prose-hr": theme("colors.slate[200]"),
            "--tw-prose-quotes": theme("colors.slate[900]"),
            "--tw-prose-quote-borders": theme("colors.slate[200]"),
            "--tw-prose-captions": theme("colors.slate[500]"),
            "--tw-prose-kbd": theme("colors.slate[900]"),
            "--tw-prose-code": theme("colors.slate[900]"),
            "--tw-prose-pre-code": theme("colors.slate[200]"),
            "--tw-prose-pre-bg": theme("colors.slate[800]"),
            "--tw-prose-th-borders": theme("colors.slate[300]"),
            "--tw-prose-td-borders": theme("colors.slate[200]"),
            "--tw-prose-invert-body": theme("colors.slate[300]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.slate[400]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.slate[400]"),
            "--tw-prose-invert-bullets": theme("colors.slate[600]"),
            "--tw-prose-invert-hr": theme("colors.slate[700]"),
            "--tw-prose-invert-quotes": theme("colors.slate[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.slate[700]"),
            "--tw-prose-invert-captions": theme("colors.slate[400]"),
            "--tw-prose-invert-kbd": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.slate[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.slate[600]"),
            "--tw-prose-invert-td-borders": theme("colors.slate[700]"),
          },
        },
        primary: {
          css: {
            "--tw-prose-headings": theme("colors.primary[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
