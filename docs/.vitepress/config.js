import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/',

    lang: 'fr-FR',
    title: 'Travaux de Jérémy Clérin',
    description: 'Site web rassemblant des des travaux.',

    // Theme related configuration
    themeConfig: {
        nav: [
            { text: 'Travaux', link: '/travaux/' }
        ],

        sidebar: {
        },

        socialLinks: [
        ],

        footer: {
            copyright: 'Copyright © 2022-présent Jérémy Clérin'
        },

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
        },
    }
})