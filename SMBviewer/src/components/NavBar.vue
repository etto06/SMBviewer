<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>My Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Icona Home -->
        <v-btn icon>
            <v-icon>mdi-home</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
});
</script>

<style scoped></style>