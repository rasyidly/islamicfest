// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-headlessui',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss'
    ],
    routeRules: {
        '/ticket': { redirect: 'http://ktbs.in/islamifest' },
    },
    googleFonts: {
        families: {
            'Space+Grotesk': true
        }
    }
})
