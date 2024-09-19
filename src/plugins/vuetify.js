import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#8880DF', 
          secondary: '#FFBC11', 
          assh:'#f3f3f3'
        },
      },
    },
    options: {
      customProperties: true,
    },
  },
});

export default vuetify;
