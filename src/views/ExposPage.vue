<template>
    <ion-page>
        <ion-content>
            <h1>All expositions</h1>
            <ul v-if="expositions">
                <li v-for="exposition in expositions" :key="exposition.Id">
                    <router-link :to="`/expositions/${exposition.Id}`">{{ exposition.title }}</router-link>
                </li>
            </ul>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { getAllExpositions } from '@/../services/data';
import { Exposition } from '@/../services/types';
import { ref, onMounted } from 'vue';

let expositions = ref<Exposition[]>([]);
async function fetchExpos() {
    const expos = await getAllExpositions();
    return expos;
}

onMounted(async () => {
    console.log('Expositions page mounted');
    expositions.value = await fetchExpos();
    console.log(expositions.value);
});
</script>