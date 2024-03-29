<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Les collections permanentes</h1>
            <p>Conçu à la fin du XIXe siècle par un groupe d’industriels, de collectionneurs et d’artisans pour
                encourager la créativité et l’innovation, le musée des Arts décoratifs est encore aujourd’hui une
                formidable source d’inspiration pour les créateurs, designers et artisans. Il conserve avec plus d’un
                million et demi d’œuvres et d’artefacts, l’une des plus importantes et des plus belles collections
                d’arts décoratifs au monde.
            </p>
            <p>
                Mobilier, art de la table, design, mode et textile, bijoux, papiers peints, objets d’art, verre, arts
                asiatiques, jouets, publicité, dessins, photographies... Du Moyen Âge à nos jours, ses collections
                témoignent d’une recherche permanente d’harmonie entre le beau et l’utile. Elles s’enrichissent chaque
                année de très nombreux dons, achats, et legs.
            </p>
            <p>Ces fonds s’organisent en grandes collections chronologiques et thématiques :</p>
            <ion-list v-if="collectionCategories" lines="full">
                <ion-item v-for="collcat in collectionCategories" :key="collcat.Id">
                    <router-link :to="`/collections/${collcat.Id}`">
                        <ion-label>{{ collcat.longName }}</ion-label>
                    </router-link>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonList, IonItem, IonItemGroup, IonItemDivider, IonLabel } from '@ionic/vue';
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
</style>