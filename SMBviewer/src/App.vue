<template>
  <v-app>
    <!-- NavBar -->
    <NavBar />

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <!-- Pulsante "Add Samba Server" -->
            <v-btn color="primary" @click="openDialog">Add Samba Server</v-btn>
          </v-col>
        </v-row>

        <!-- Dialogo per aggiungere il server Samba -->
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Configure Samba Server</span>
            </v-card-title>

            <v-card-text>
              <v-form ref="form" v-model="valid">
                <!-- Indirizzo IP o nome del server -->
                <v-text-field
                  v-model="formData.serverAddress"
                  label="Server Address"
                  :rules="[rules.required]"
                  required
                ></v-text-field>

                <!-- Nome utente -->
                <v-text-field
                  v-model="formData.username"
                  label="Username"
                  :rules="[rules.required]"
                  required
                ></v-text-field>

                <!-- Password -->
                <v-text-field
                  v-model="formData.password"
                  label="Password"
                  type="password"
                  :rules="[rules.required]"
                  required
                ></v-text-field>

                <!-- Percorso della cartella condivisa -->
                <v-text-field
                  v-model="formData.sharePath"
                  label="Share Path"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="submitForm">Connect</v-btn>
              <v-btn color="secondary" @click="closeDialog">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';

interface SambaFormData {
  serverAddress: string;
  username: string;
  password: string;
  sharePath: string;
}

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const dialog = ref(false);
    const valid = ref(false);

    const formData = ref<SambaFormData>({
      serverAddress: '',
      username: '',
      password: '',
      sharePath: '',
    });

    const rules = {
      required: (value: string) => !!value || 'Required.',
    };

    const openDialog = () => {
      dialog.value = true;
    };

    const closeDialog = () => {
      dialog.value = false;
    };

    // Simula la connessione al server Samba
    const connectToSambaServer = async (data: SambaFormData) => {
      try {
        // Esempio di chiamata a un'API che gestisce il collegamento a un server Samba
        const response = await fetch('http://localhost:3000/samba/connect', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Error connecting to the Samba server');
        }

        const result = await response.json();
        console.log('Connection successful:', result);
      } catch (error) {
        console.error('Failed to connect to Samba server:', error);
      }
    };

    const submitForm = () => {
      if (valid.value) {
        console.log('Attempting to connect:', formData.value);

        // Chiamata alla funzione che tenta la connessione al server Samba
        connectToSambaServer(formData.value);

        closeDialog();
      }
    };

    return {
      dialog,
      valid,
      formData,
      rules,
      openDialog,
      closeDialog,
      submitForm,
    };
  },
});
</script>

<style scoped></style>
