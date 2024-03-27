<template>
    <ion-page>
        <ion-content v-if="exposition">
            <h1>{{ exposition.title }}</h1>
            <h2>{{ exposition.startDate }} - {{ exposition.endDate }}</h2>
            <p><strong>Longueur indiqué de la visite :</strong>{{ exposition.tourLength }}</p>
            <ion-button :href="exposition.individualTickets" target="_blank" rel="noopener noreferrer">Billeterie
                individuelle</ion-button>
            <a :href="exposition.individualTickets" target="_blank" rel="noopener noreferrer">Billeterie
                individuelle</a>
            <ion-button :href="exposition.groupTickets" target="_blank" rel="noopener noreferrer">Billeterie groupe en
                visite</ion-button>
            <a :href="exposition.groupTickets" target="_blank" rel="noopener noreferrer">Billeterie groupe en visite
                libre</a>
            <p>{{ exposition.description }}</p>
            <p><strong>Commissaire d'exposition :</strong>{{ exposition.curator }}</p>
            <ul>
                <li v-for="image in exposition.images" :key="image.id">
                    <img :src="image.signedUrl" :alt="image.title" />
                </li>
            </ul>
            <div v-html="exposition.video"></div>
            <div v-html="exposition.activities"></div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { ExpositionDetails } from '@/../services/types';
import { getExpositionById } from '@/../services/data';


const router = useRouter()
const route = useRoute();

let expositionId = ref<string | string[]>([]);
let exposition = ref<ExpositionDetails>();

function getExpoId() {
    if (route.params.id) {
        expositionId.value = route.params.id;
        console.log('Exposition id:', expositionId.value);
    } else {
        router.push('/Home');
    }
}

async function fetchExpo() {
    let currentExpo = await getExpositionById(expositionId.value);
    return currentExpo;
}

onMounted(async () => {
    console.log('Exposition details page mounted');
    getExpoId();
    exposition.value = await fetchExpo();
    console.log(exposition.value);
});
</script>