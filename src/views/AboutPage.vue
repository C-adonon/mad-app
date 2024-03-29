<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Informations</h1>
            <div class="history">
                <h2>Histoire</h2>
                <p>
                    Les Arts décoratifs sont une institution culturelle française réunissant musées, lieux
                    d'enseignement et
                    bibliothèque autour de l'art de vivre, des arts décoratifs, du design, de la mode et du textile, de
                    la
                    publicité et du graphisme.
                </p>
                <p>
                    Connue jusqu'en 2005 sous la dénomination d'Union centrale des arts décoratifs (UCAD), elle a été
                    fondée
                    en
                    1882 par des collectionneurs et des industriels désireux de mettre en valeur les arts appliqués en
                    créant
                    des liens entre industrie et beaux-arts pour « entretenir en France la culture des arts qui
                    poursuivent
                    la
                    réalisation du beau dans l’utile ». Reconnue d'utilité publique quelques mois après sa création,
                    l'association remplit des missions de conservation de collections publiques, de diffusion
                    culturelle, de
                    soutien à la création, d'éducation artistique et de formation de professionnels.
                </p>
            </div>
            <div class="location">
                <h2>Localisation</h2>
                <div>
                    <p> Les différentes composantes des Arts décoratifs sont installées sur trois sites à Paris :</p>
                    <ul>
                        <li>
                            au <strong class="pink-text">107, rue de Rivoli (75001)</strong>, les ailes de Rohan et de
                            Marsan du palais du
                            Louvre abritent
                            le
                            musée
                            des
                            Arts
                            décoratifs (collections d'arts décoratifs, mode et textile, publicité) et la bibliothèque
                            des
                            Arts
                            décoratifs ;
                        </li>
                        <li>
                            au <strong class="pink-text">63, rue de Monceau (75008)</strong>, se trouve le musée
                            Nissim-de-Camondo ;
                        </li>
                        <li>
                            au <strong class="pink-text">266, boulevard Raspail (75014)</strong> est installée depuis
                            1988 l’école Camondo
                            (appellation née
                            d'une
                            implantation
                            antérieure dans les communs de l'hôtel Camondo), spécialisée dans le design et
                            l’architecture
                            d’intérieur.
                        </li>
                    </ul>
                    <p>Les Ateliers du Carrousel, ateliers de pratique artistique, sont présents sur ces trois sites.
                    </p>
                </div>

            </div>
            <div class="horaires">
                <h2>Horaires</h2>
                <p>
                    Les Arts décoratifs sont ouverts tous les jours sauf le lundi et certains jours fériés.
                    Les horaires d'ouverture sont les suivants :
                </p>
                <h3 class="pink-text">Musée des Arts décoratifs :</h3>
                <h4>Jusqu’au 28 avril :</h4>
                <ul>
                    <li>
                        Le mardi et le mercredi de 11h à 18h
                        Fermeture des caisses à 17h15
                    </li>
                    <li>
                        Nocturnes le jeudi, vendredi et le samedi jusqu’à 21h
                        Fermeture des caisses à 20h15
                    </li>
                    <li>
                        Nocturne le dimanche jusqu’à 20h
                        Fermeture des caisses à 19h15
                    </li>
                </ul>
                <h4>À partir du 29 avril :</h4>
                <ul>
                    <li>
                        Le mardi, mercredi, vendredi, samedi et dimanche de 11h à 18h
                        Fermeture des caisses à 17h15
                    </li>
                    <li>
                        Nocturnes le jeudi jusqu’à 21h
                        Fermeture des caisses à 20h15
                    </li>
                </ul>
                <h3 class="pink-text"> Musée Nissim-de-Camondo :</h3>
                <p>10h-17h</p>
                <h3 class="pink-text">Bibliothèque des Arts décoratifs :</h3>
                <p> 14h-19h</p>
            </div>
            <div class="tarif">

            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref, onMounted } from 'vue';
</script>

<style scoped>
ion-content div{
    margin-bottom: 10%;
}
</style>