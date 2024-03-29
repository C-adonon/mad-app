<template>
  <ion-app>
    <Nav />
    <ion-router-outlet/>
  </ion-app>
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
ion-router-outlet {
  margin-top: 10dvh;
}
</style>
