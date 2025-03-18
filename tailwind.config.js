module.exports = {
    content: ["./index.html", "./src/**/*.{html,js}"], // Adapte selon ton projet
    theme: {
        screens: {
            'xs': '480px',  // Ajoute un xs pour les écrans < 640px
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        }
    },
    plugins: [],
};
