import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

const opts = {
  theme: {
    dark: true,
    themes: {
      light: {
        primary: 'white',
      },
      dark: {
        primary: 'black',
      }
    }
  }
}
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.use(Vuetify,opts)
}