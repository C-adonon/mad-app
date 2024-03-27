<template>
    <ion-page>
        <ion-content v-if="collections && collectionCategoryInfo">
            <div v-for="thumbnail in collectionCategoryInfo.thumbnail">
                <img :src="thumbnail.signedUrl" :alt="thumbnail.title" />
            </div>
            <h1>{{ collectionCategoryInfo.longName }}</h1>
            <ul v-for="collection in collections" :key="collection.Id">
                <li>
                    <h2>{{ collection.title}}</h2>
                    <div v-for="thumbnail in collection.thumbnails">
                        <img :src="thumbnail.signedUrl" :alt="thumbnail.title" />
                    </div>
                    <p>{{ collection.description }}</p>
                    <ul v-for="img in collection.images" :key="img.id">
                        <img :src="img.signedUrl" :alt="img.title" />
                    </ul>
                </li>
            </ul>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { CollectionCategories, CollectionDetails } from '@/../services/types';
import { getCollectionCategoryById, getAllCollectionFromCategoryById } from '@/../services/data';

const router = useRouter();
const route = useRoute();
let collectionCatId = ref<string | string[]>([]);
let collectionCategoryInfo = ref<CollectionCategories>();
let collections = ref<CollectionDetails>();

function getCollectionCategoryId() {
    if (route.params.id) {
        collectionCatId.value = route.params.id;
        console.log('Collection category id:', collectionCatId.value);
    } else {
        router.push('/Home');
    }
}

async function fetchCollectionCategoryInfo() {
    let collCatInfo = await getCollectionCategoryById(collectionCatId.value);
    return collCatInfo;
}

async function fetchAllCollection() {
    let allCollections = await getAllCollectionFromCategoryById(collectionCatId.value);
    return allCollections;
}

onMounted(async () => {
    console.log('Collection details page mounted');
    getCollectionCategoryId();
    collectionCategoryInfo.value = await fetchCollectionCategoryInfo();
    console.log(collectionCategoryInfo.value);
    collections.value = await fetchAllCollection();
    console.log(collections.value);
});
</script>