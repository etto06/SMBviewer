// main.ts
import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

// Import icone Material Design
import '@mdi/font/css/materialdesignicons.css'; // Aggiungi questo per le icone

import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#1E1E1E',
          primary: '#1E88E5',
          secondary: '#26C6DA',
          accent: '#FF7043',
          error: '#E53935',
          info: '#29B6F6',
          success: '#66BB6A',
          warning: '#FFB74D',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi', // Set icone Material Design
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);
app.use(vuetify);
app.mount('#app');
