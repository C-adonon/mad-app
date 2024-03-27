<template>
  <ion-page>
    <ion-content>
      <h1>Bienvenue au musée des arts décoratifs de Paris</h1>
      <ul v-if="expositions">
        <li v-for="exposition in expositions" :key="exposition.Id">
          <router-link :to="`/expositions/${exposition.Id}`">{{ exposition.title }}</router-link>
        </li>
      </ul>
      <div v-else>OK</div>

      <ul v-if="collectionCategories">
        <li v-for="collcat in collectionCategories" :key="collcat.Id">
          <router-link :to="`/collections/${collcat.Id}`">{{ collcat.longName }}</router-link>
        </li>
      </ul>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { getAllExpositions, getAllCollections, getAllCollectionCategories, } from '@/../services/data';
import { Exposition, Collection, CollectionCategories } from '@/../services/types';
import { ref, onMounted } from 'vue';

let expositions = ref<Exposition[]>([]);
let collectionCategories = ref<CollectionCategories[]>([]);

async function fetchExpos() {
  const expos = await getAllExpositions();
  return expos;
}

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
</style>
