/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,tsx}'],
    safelist: [
        {
            pattern:
                /bg-(gray|neutral|red|orange|yellow|green|emerald|sky|blue|purple|pink)-(100|200|300|400|500|600|700|800|900)/,
        },
    ],
    theme: {
        extend: {},
    },
    plugins: [require('./node_modules/tailwind-percentage-heights-plugin')()],
}
