/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: "'Nunito Sans', sans-serif"
            },
            colors: {
                'uma-blue': '#0A6DD6',
                'uma-blue-dark': '#0043A5',
                'uma-green': '#48BB78'
            },
            backgroundImage: {
                'form-pattern': 'linear-gradient(to bottom, rgba(230,242,255,0), rgba(208,231,255,.5)), url("src/assets/img/elipse.4eefc5c4.webp")'
            }
        }
    },
    plugins: []
}
