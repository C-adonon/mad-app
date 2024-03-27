<template>
    <ion-page>
        <ion-content>
            <h1>All Collections</h1>
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
import { getAllCollectionCategories } from '../../services/data';
import { CollectionCategories } from '../../services/types';
import { ref, onMounted } from 'vue';

let collectionCategories = ref<CollectionCategories[]>([]);
async function fetchCollectionCategories() {
    const collectionCat = await getAllCollectionCategories();
    return collectionCat;
}

onMounted(async () => {
    console.log('Collections page mounted');
    collectionCategories.value = await fetchCollectionCategories();
    console.log(collectionCategories.value);
});
</script>