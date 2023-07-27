// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons:{
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#000000',
          text: '#ffffff',
          dark: '#0f0f0faa'
        }
        
      }
    }
  }
})