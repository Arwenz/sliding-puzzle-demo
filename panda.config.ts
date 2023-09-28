import { defineConfig } from "@pandacss/dev"
export default defineConfig({
    // Whether to use css reset
    preflight: true,
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
    // Files to exclude
    exclude: [],
    // Useful for theme customization
    theme: {
      tokens: {
        colors: {
          primary: { value: '' },
          secondary: { value: '#0062E3' },
          tertiary: { value: '#D41F33' },
          quaternary: { value: '#F1F1F1' },
          gray: { value: '#CCCCCC' },
          gray100: { value: '#666666' },
          black50: { value: '#0f1f2c40' },
          black100: { value: '#0F1F2C' },
        }
      },
      extend: {
        keyframes: {
          slideDown: {
            'from': { height: '0' },
            'to': { height: 'var(--radix-accordion-content-height)' }
          },
          slideUp: {
            'from': { height: 'var(--radix-accordion-content-height)' },
            'to': { height: '0' }
          }
        }
      }
    },
    globalCss: {
      body: {
        position: 'relative',
        h: '100vh',
        color: 'black100'
      },
      "input, textarea, button": {
        all: 'unset',
        boxSizing: 'border-box',
      }
    },
    // The output directory for your css system
    outdir: "styled-system",
})