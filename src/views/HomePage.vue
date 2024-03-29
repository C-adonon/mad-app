<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1>Musée des arts décoratifs de Paris</h1>
      <swiper-container v-if="expositions" :pagination="true" :pagination-clickable="true" :centered-slides="true"
        autoplay-delay="3500" :autoplay-disable-on-interaction="false" effect="fade" :navigation="true" :loop="true">
        <swiper-slide v-for="exposition in expositions" :key="exposition.Id">
          <router-link :to="`/expositions/${exposition.Id}`">
            <div class="slide-content">
              <div class="title">{{ exposition.title }}</div>
              <img :src="exposition.thumbnail[0].signedUrl" :alt="exposition.title" />
            </div>
          </router-link>
        </swiper-slide>
      </swiper-container>
      <div v-else>Loading</div>
      <div class="info">
        <h2>Notre histoire</h2>
        <p>Mobilier, art de la table, design, mode et textile, bijoux, papiers peints, objets d’art, verre, arts
          asiatiques, jouets, publicité, dessins, photographies… Les collections du musée des Arts décoratifs, parmi les
          plus importantes au monde, réunissent plus d’1 million et demi d’œuvres et artefacts du Moyen Âge à nos jours.
          Elles s’enrichissent chaque année de très nombreux dons, achats, et legs.
        </p>
        <p>
          Lieu d’inspiration et de transmission depuis sa création au XIXe siècle, le musée témoigne d’une recherche
          permanente d’harmonie entre le beau et l’utile.
        </p>
      </div>
      <div class="collections">
        <h2>Nos collections permanentes</h2>
        <p>Les collections du musée des Arts décoratifs, parmi les plus importantes au monde, réunissent plus d’1
          million et demi d’œuvres et artefacts du Moyen Âge à nos jours. Mobilier, art de la table, design, mode
          et textile, bijoux, papiers peints, objets d’art, verre, arts asiatiques, jouets, publicité, dessins,
          photographies… Elles témoignent d’une recherche permanente d’harmonie entre le beau et l’utile et
          s’enrichissent chaque année de très nombreux dons, achats, et legs.</p>
        <ion-list v-if="collectionCategories" lines="full">
          <ion-item v-for="collcat in collectionCategories" :key="collcat.Id">
            <router-link :to="`/collections/${collcat.Id}`">
              <ion-label>{{ collcat.longName }}</ion-label>
            </router-link>
          </ion-item>
        </ion-list>
        <div v-else>Loading</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { getAllExpositions, getAllCollectionCategories, } from '@/../services/data';
import { Exposition, CollectionCategories } from '@/../services/types';
import { ref, onMounted } from 'vue';

let expositions = ref<Exposition[]>([]);
let collectionCategories = ref<CollectionCategories[]>([]);

// Current opened expositions
async function fetchExpos() {
  const expos = await getAllExpositions();
  const currentDate = new Date();
  const activeExpos = expos.filter((expo: any) => {
    const startDate = new Date(expo.startDate);
    const endDate = new Date(expo.endDate);
    return startDate <= currentDate && endDate >= currentDate;
  });
  return activeExpos;
}

// All collections
async function fetchCollectionCategories() {
  const collectionCat = await getAllCollectionCategories();
  return collectionCat;
}

onMounted(async () => {
  console.log('Home page mounted');
  expositions.value = await fetchExpos();
  console.log(expositions.value);
  collectionCategories.value = await fetchCollectionCategories();
  console.log(collectionCategories.value);
});
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-align: center;
  color: black;
}

img {
  width: 100%;
  height: 60dvh;
  object-fit: cover;
}
</style>

<style scoped>
ion-item {
  --inner-padding-top: 16px;
  --inner-padding-bottom: 16px;
  --inner-padding-end: 0px;
}

a {
  text-decoration: none;
  font-family: "MaisonNeueDemi", sans-serif;
  font-size: 20px;
  color: var(--accent-pink);
}

.slide-content {
  position: relative;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 32px;
  font-family: "LibreCaslonText-Regular", serif;
  color: black;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.50);
  padding: 5%;
  width: 75%;
}
</style>