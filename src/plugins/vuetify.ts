import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#e67d21',
        accent: '#962f1e',
        background: '#151d39'
      },
      dark: {
        primary: '#e67d21',
        background: '#ff694e'
      }
    }
  }
})
