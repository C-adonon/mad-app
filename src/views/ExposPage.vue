<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Découvrez nos expositions</h1>
            <ion-button id="open-modal" expand="full" fill="outline" shape="round">Filtrer & Trier</ion-button>
            <!-- FILTERS MODAL -->
            <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel()">
                                <ion-icon slot="icon-only" :icon="close"></ion-icon>
                            </ion-button>
                        </ion-buttons>
                        <ion-title>Filtrer & Trier</ion-title>
                        <ion-buttons slot="end">
                            <ion-button :strong="true" @click="confirm()">Afficher</ion-button>
                        </ion-buttons>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">
                    <div class="filter">
                        <h2>Filtrer</h2>
                        <ion-radio-group ref="filterRadio" value="all">
                            <ion-radio label-placement="end" value="all">
                                Toutes
                            </ion-radio><br />
                            <ion-radio label-placement="end" value="open">
                                En cours
                            </ion-radio><br />
                            <ion-radio label-placement="end" value="closed">
                                Terminées
                            </ion-radio><br />
                            <ion-radio label-placement="end" value="future">
                                Futures
                            </ion-radio><br />
                        </ion-radio-group>
                    </div>
                    <div class="order-by">
                        <h2>Trier par</h2>
                        <ion-radio-group ref="orderRadio" value="alpha">
                            <ion-radio label-placement="end" value="alpha">Alphabétique</ion-radio><br />
                            <ion-radio label-placement="end" value="newerFirst">Par date -
                                croissante</ion-radio><br />
                            <ion-radio label-placement="end" value="olderFirt">Par date -
                                décroissante</ion-radio><br />
                            <ion-radio label-placement="end" value="longerFirst">Durée - du plus long au plus
                                court</ion-radio><br />
                            <ion-radio label-placement="end" value="shorterFirst">Durée - du plus court au plus
                                long</ion-radio>
                        </ion-radio-group>
                    </div>
                </ion-content>
            </ion-modal>

            <!-- LIST OF EXPOSITIONS -->
            <ion-list v-if="expositions">
                <ion-item v-for="exposition in expositions" :key="exposition.Id"
                    @click="goToExpoDetails(exposition.Id)">
                    <ion-thumbnail slot="start">
                        <img :src="exposition.thumbnail[0].signedUrl" :alt="exposition.thumbnail[0].title" />
                    </ion-thumbnail>
                    <ion-label>
                        <h2 class="card-title">{{ exposition.title }}</h2>
                        <p>Du {{ exposition.startDate }} au {{ exposition.endDate }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonRadio, IonRadioGroup, IonModal, IonButtons, IonHeader, IonToolbar, IonIcon, IonTitle, IonList, IonItem, IonThumbnail, IonLabel, IonCardContent, IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { OverlayEventDetail } from '@ionic/core/components';
import { getAllExpositions } from '@/../services/data';
import { Exposition } from '@/../services/types';
import { ref, onMounted, onUpdated } from 'vue';
import { close } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

let expositions = ref<Exposition[]>([]);
const modal = ref();
const filterRadio = ref();
const orderRadio = ref();
const appliedFilter = ref<object>();

// Expositions functions
// Lists all expositions
async function fetchExpos() {
    const expos = await getAllExpositions();
    return expos;
}

// Modal functions
// close modal
const cancel = () => modal.value.$el.dismiss(null, 'cancel');
// confirm modal
const confirm = () => {
    const filter = filterRadio.value.$el.value;
    const order = orderRadio.value.$el.value;
    const currentFilters = { filter, order };
    modal.value.$el.dismiss(currentFilters, 'confirm');
};

const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    if (ev.detail.role === 'confirm') {
        appliedFilter.value = ev.detail.data;
        filterExpos(appliedFilter.value);
    }
};

async function filterExpos(filterBy: any) {
    // get current date
    let currentDate = new Date();
    switch (filterBy.filter) {
        case "all":
            expositions.value = await fetchExpos();
            break;
        case "open":
            expositions.value = expositions.value.filter((expo) => {
                return new Date(expo.endDate as string) > currentDate;
            });
            break;
        case "closed":
            expositions.value = expositions.value.filter((expo) => {
                return new Date(expo.endDate as string) < currentDate;
            });
            break;
        case "future":
            expositions.value = expositions.value.filter((expo) => {
                return new Date(expo.startDate as string) > currentDate;
            });
            break;
    }

    switch (filterBy.order) {
        case "alpha":
            expositions.value.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "newerFirst":
            expositions.value.sort((a, b) => new Date(a.startDate as string).getTime() - new Date(b.startDate as string).getTime());
            break;
        case "olderFirt":
            expositions.value.sort((a, b) => new Date(b.startDate as string).getTime() - new Date(a.startDate as string).getTime());
            break;
        case "longerFirst":
            expositions.value.sort((a, b) => a.length - b.length);
            break;
        case "shorterFirst":
            expositions.value.sort((a, b) => b.length - a.length);
            break;
    }
}

function goToExpoDetails(id: number) {
    router.push(`/expositions/${id}`);
}

onMounted(async () => {
    expositions.value = await fetchExpos();
});

onUpdated(() => {
    console.log('Expositions page updated');
});

</script>

<style scoped>
.card-title {
    font-weight: 600;
    color: var(--accent-pink);
}

ion-radio{
    --color-checked: var(--accent-gold);
}

ion-button{
    --border-color: black;
    --color: black;
    --background-hover: var(--accent-gold);
}
</style>