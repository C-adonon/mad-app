<template>
    <ion-page>
        <ion-content v-if="collections && collectionCategoryInfo" class="ion-padding">
            <div v-for="thumbnail in collectionCategoryInfo.thumbnail" class="thumbnail"
                :style="{ backgroundImage: 'url(' + thumbnail.signedUrl + ')' }">
                <img class="thumbnail-logo" src="../assets/img/mad-logo.svg" alt="logo" />
            </div>
            <h1>{{ collectionCategoryInfo.longName }}</h1>
            <div v-for="collection in collections" :key="collection.Id">
                <div class="child-collection" v-if="collLength > 1">
                    <h2>{{ collection.title }}</h2>
                    <div v-for="thumbnail in collection.thumbnails">
                        <img :src="thumbnail.signedUrl" :alt="thumbnail.title" />
                    </div>
                </div>
                <div class="description">
                    <h3>Description</h3>
                    <p>{{ collection.description }}</p>
                </div>
                <div class="gallery">
                    <h3>Galerie photos</h3>
                    <swiper-container :pagination="true" :navigation="true" :centered-slides="true" effect="fade"
                        :loop="true">
                        <swiper-slide v-for="img in collection.images" :key="img.id">
                            <img :src="img.signedUrl" :alt="img.title" />
                        </swiper-slide>
                    </swiper-container>
                </div>

            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { CollectionCategories, Collection } from '@/../services/types';
import { getCollectionCategoryById, getAllCollectionFromCategoryById } from '@/../services/data';

const router = useRouter();
const route = useRoute();
let collectionCatId = ref<string | string[]>([]);
let collectionCategoryInfo = ref<CollectionCategories>();
let collections = ref<Collection>();
let collLength = ref<number>(0);

function getCollectionCategoryId() {
    if (route.params.id) {
        collectionCatId.value = route.params.id;
        // console.log('Collection category id:', collectionCatId.value);
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
    // console.log(allCollections);
    collLength.value = allCollections.length;
    // console.log(allCollections.length);
    return allCollections;
}

onMounted(async () => {
    // console.log('Collection details page mounted');
    getCollectionCategoryId();
    collectionCategoryInfo.value = await fetchCollectionCategoryInfo();
    // console.log(collectionCategoryInfo.value);
    collections.value = await fetchAllCollection();
});
</script>

<style scoped>
swiper-container {
    width: 100%;
    height: 500px;
}

ion-content div {
    margin-bottom: 10%;
}

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
</style>