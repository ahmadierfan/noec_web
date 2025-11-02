export default defineNuxtConfig({
    css: [
        '~/assets/css/global.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/icon',
        'nuxt-toast'
    ],
    icon: {
        collections: ['uil'],
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'ico', href: '/images/favico.ico' },
            ],
            htmlAttrs: {
                lang: 'fa',
            },
            title: 'Next Oil Energy'
        },
    },

    compatibilityDate: '2025-02-06'
})