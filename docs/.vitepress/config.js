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
            '/travaux/': [
                {
                    text: 'Folie Romancée',
                    collapsible: true,
                    items: [
                        { text: 'Foliosophie', link: '/travaux/folie-romancée' }
                    ]
                },
                {
                    text: 'Suivre Indice Environnement',
                    collapsible: true,
                    items: [
                        { text: 'Chamanisme Holistique', link: '/travaux/suivre-indice-environnement' }
                    ]
                },
                {
                    text: 'Magie Libre',
                    collapsible: true,
                    items: [
                        { text: 'Bible Anarchiste', link: '/travaux/magie-libre' }
                    ]
                },
                // {
                //     text: 'Jeu Médecine',
                //     collapsible: true,
                //     items: [
                //         { text: 'Jeu Psychédélique en devenir', link: '/travaux/jeu-medecine' }
                //     ]
                // },
            ]
        },

        socialLinks: [
        ],

        footer: {
            copyright: 'Copyright © 2022-présent Jérémy Clérin'
        },
    }
})