// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-headlessui',
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss'
    ],
    app: {
        buildAssetsDir: 'festival',
        head: {
            script: [
                { src: '//www.instagram.com/embed.js', async: true }
            ]
        }
    },
    googleFonts: {
        families: {
            'Space+Grotesk': true
        }
    }
})
