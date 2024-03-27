<template>
    <ion-menu side="end" content-id="main-content" class="ion-padding">
        <ion-header>
            <ion-toolbar>
                <ion-menu-toggle><ion-icon :icon="close" size="large"></ion-icon></ion-menu-toggle>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-label router-link="/expositions">Expositions</ion-label>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-label router-link="/collections">Collections</ion-label>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-label router-link="/">Activité</ion-label>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-label router-link="/about">Information</ion-label>
                    </ion-menu-toggle>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
    <ion-content id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title router-link="/">
                    <ion-thumbnail>
                        <img class="logo" alt="Logo du musée des arts décoratifs" src="../assets/img/mad-logo.svg" />
                    </ion-thumbnail>
                </ion-title>
                <ion-buttons slot="end">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
    </ion-content>
</template>

<script setup lang="ts">
import { close } from 'ionicons/icons';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonThumbnail, IonMenuToggle, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';

</script>

<style scoped>
ion-menu-button {
    --background: var(--primary-black);
    --color: white;
}
</style>
