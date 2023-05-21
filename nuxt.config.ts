// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-headlessui',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss'
    ],
    googleFonts: {
        families: {
            'Space+Grotesk': true
        }
    }
})
