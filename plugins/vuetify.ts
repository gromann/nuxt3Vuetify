import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi'
import { aliases, fa } from 'vuetify/iconsets/fa'



export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({ // Replaces new Vuetify(...)
        components,
        directives,
        theme: {
            defaultTheme: 'dark'
        },
        icons: {
            defaultSet: 'fa',
            aliases,
            sets: {
                mdi,
                fa
            }
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
