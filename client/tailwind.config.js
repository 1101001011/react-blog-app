const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({addComponents, addUtilities}) => {
            addComponents({
                '.btn-primary': {
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '6px'
                }
            })
            addUtilities({
                '.text-l': {
                    fontSize: '15px'
                },
                '.grid-primary': {
                    gridTemplateColumns: '18rem 1fr'
                },
                '.grid-menubar-item': {
                    gridTemplateColumns: '30px 1fr'
                },
                '.bg-white-transparent': {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)'
                },
                '.min-h-300': {
                    minHeight: '300px'
                },
                '.shadow-primary': {
                    boxShadow: '0 6px 12px -1px rgb(0, 0, 0, 0.3)'
                },
                '.h-min-screen': {
                    minHeight: '100vh'
                }
            })
        })
    ],
}
