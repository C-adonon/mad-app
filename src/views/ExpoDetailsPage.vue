<template>
    <ion-page>
        <ion-content v-if="exposition" class="ion-padding">
            <div class="thumbnail" :style="{ backgroundImage: 'url(' + exposition.thumbnail[0].signedUrl + ')' }">
                <img class="thumbnail-logo" src="../assets/img/mad-logo.svg" alt="logo" />
            </div>
            <h1>{{ exposition.title }}</h1>
            <h2>Du {{ exposition.startDate }} au {{ exposition.endDate }}</h2>
            <div class="descritpion">
                <h3>Description de l'exposition</h3>
                <p>{{ exposition.description }}</p>
                <p><strong>Longueur indiqué de la visite :</strong>{{ convertSecToHour(exposition.length) }}</p>
                <p><strong>Commissaire d'exposition :</strong>{{ exposition.curator }}</p>
            </div>
            <div class="tickets">
                <ion-button :href="exposition.individualTickets" target="_blank" rel="noopener noreferrer"
                    shape="round">Billeterie
                    individuelle</ion-button>
                <ion-button :href="exposition.groupTickets" target="_blank" rel="noopener noreferrer"
                    shape="round">Billeterie groupe
                    en
                    visite</ion-button>
            </div>
            <div v-if="exposition.audioGuide" class="audio-guide">
                <h3>Audio guide</h3>
                <audio controls>
                    <source :src="exposition.audioGuide[0].signedUrl" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div class="gallery">
                <h3>Galerie photos</h3>
                <swiper-container :pagination="true" :navigation="true" :centered-slides="true" effect="fade"
                    :loop="true">
                    <swiper-slide v-for="image in exposition.images" :key="image.id">
                        <img :src="image.signedUrl" :alt="image.title" />
                    </swiper-slide>
                </swiper-container>
            </div>
            <div class="video">
                <h3>Video</h3>
                <div v-html="exposition.video"></div>
            </div>
            <div class="activities">
                <h3>Activités</h3>
                <div v-html="exposition.activities "></div>
            </div>
            <div class="location">
                <h3>Lieux:</h3>
                <p>Site Rivoli</p>
                <Map :lat="48.863" :long="2.33" :zoom="14" :msg="msg" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { Exposition } from '@/../services/types';
import { getExpositionById } from '@/../services/data';
import Map from '@/components/Map.vue';

const router = useRouter()
const route = useRoute();

let expositionId = ref<string | string[]>([]);
let exposition = ref<Exposition>();
let msg = '107 Rue de Rivoli, 75001 Paris';

function getExpoId() {
    if (route.params.id) {
        expositionId.value = route.params.id;
    } else {
        router.push('/Home');
    }
}

async function fetchExpo() {
    let currentExpo = await getExpositionById(expositionId.value);
    return currentExpo;
}

function convertSecToHour(sec: number) {
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    return hours + 'h' + minutes + 'm ';
}

onMounted(async () => {
    getExpoId();
    exposition.value = await fetchExpo();
});
</script>

<style scoped>
.thumbnail {
    min-height: 20dvh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

img.thumbnail-logo {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 100px;
    height: 100px;
    filter: invert(54%) sepia(48%) saturate(2941%) hue-rotate(21deg) brightness(103%) contrast(101%);
}

swiper-container {
    width: 100%;
    height: 500px;
}

ion-content div {
    margin-bottom: 10%;
}

ion-button {
    --background: var(--accent-pink);
    --color: white;
}
</style>