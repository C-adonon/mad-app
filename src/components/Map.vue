<template>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 400px">
        <ol-view ref="view" :center="center" :zoom="zoom" />
        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>
        <ol-vector-layer>
            <ol-source-vector>
                <ol-feature>
                    <ol-geom-point :coordinates="center"></ol-geom-point>
                    <ol-style>
                        <ol-style-icon :src="markerIcon"></ol-style-icon>
                    </ol-style>
                </ol-feature>
            </ol-source-vector>
        </ol-vector-layer>
        <ol-overlay :position="center">
            <div class="overlay-content">
                <p>{{ msg }}</p>
            </div>
        </ol-overlay>
    </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";
import markerIcon from "@/assets/img/map-pin.svg";
import { fromLonLat } from "ol/proj";

const props = defineProps({
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    zoom: {
        type: Number,
        required: true
    },
    msg: {
        type: String,
        required: false
    }
});

const center = ref(fromLonLat([props.long, props.lat]));
const overlayPosition = ref(fromLonLat([props.long, props.lat + 0.01]));
const zoom = ref(props.zoom);
</script>

<style scoped>
.overlay-content {
    background-color: white;
    color: black;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>