const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin')
const path = require('path')

const pack = (webpackConfig, projectConfig, mode) => {
    const connectSources = []

    if (mode !== 'build') {
        /** Für dev / prod "self" hinzufügen damit Hot Reloading gewährleistet
         * werden kann */
        connectSources.push("'self'")
    }

    try {
        // Hier extrahieren wir die API Hosts aus der Konfiguration die wir für
        // connect-src benötigen
        Object.entries(projectConfig.API.value).forEach(([_, content]) => {
            const url = new URL(content.host)
            connectSources.push(url.origin)
        })
    } catch (e) {}

    return {
        resolve: {
            extensions: ['.v.js', '.v.json', '.v.jsx'],
            alias: {
                components: path.resolve(
                    webpackConfig.PROJECT_PATH,
                    '../../node_modules/components/presentational/MUI/'
                )
            }
        },
        plugins: [
            new CspHtmlWebpackPlugin(
                {
                    'default-src': "'none'",
                    'img-src': ["'self'"],
                    'connect-src': connectSources,
                    'manifest-src': ["'self'"],
                    'style-src': [
                        // @todo: unsafe-inline stellt ein Sicherheitsrisiko dar und sollte in
                        // Zukunft entfernt werden. Aktuell noch nicht möglich da im Timbra zum Teil
                        // noch mit inline styles gearbeitet wird.
                        "'unsafe-inline'",
                        "'self'",
                        'https://use.typekit.net/anu4fpg.css',
                        'https://hello.myfonts.net/count/3b23b7',
                        'https://p.typekit.net/p.css',
                        'https://fonts.googleapis.com/css'
                    ],
                    'font-src': [
                        "'self'",
                        'https://use.typekit.net',
                        'https://hello.myfonts.net/count/3b23b7',
                        'https://fonts.gstatic.com'
                    ]
                },
                {
                    enabled: true,
                    nonceEnabled: {
                        'script-src': true,
                        'style-src': false
                    }
                }
            )
        ]
    }
}
module.exports = pack
