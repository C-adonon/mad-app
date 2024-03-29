# PROJET CROSSPLATFORM - Musée des arts décoratifs de Paris

![Logo du musée des arts décoratifs de Paris](/screenshots/mad-banner.jpg "Musée des arts décoratifs")

## Description

Cette application permet de découvrir le musée des arts décoratifs de Paris. Elle présente les différentes collections du musée, les expositions temporaires, les informations pratiques et les événements à venir.

## Stack technique

### Ionic 7 avec VUE 3 pour le front

Ionic est un framework open-source de développement d'applications mobiles multiplateformes. Il permet de créer des applications mobiles pour iOS, Android. Je l'ai choisis particulièrment parcequ'il possède une intégation avec VueJS 3 ce qui me permet de développer une application mobile en utilisant un framework que je maitrise déjà. De plus il propose des composants prêts à l'emploi pour le développement d'applications mobiles.

### NocoDB pour la base de données :

NocoDB est une base de données no code similar à Airtable. Elle permet de créer des bases de données sans écrire de code. J'ai choisis cette solution pour sa simplicité d'utilisation, sa rapidité de mise en place et le fait qu'elle expose une API REST qui me permet de l'utiliser avec Ionic.

https://w942egbw.nocodb.com/#/base/301f2ea4-15ee-4469-b055-44395984aa2b

<iframe src="https://w942egbw.nocodb.com/#/base/301f2ea4-15ee-4469-b055-44395984aa2b" width="100%" height="600px" style="border: solid 1px lightgrey; border-radius: 12px"></iframe>

## Schéma de la base de données

La base de données contient 3 collections :
- Collections : contient les différentes collections du musée
- Collections-categories : contient les catégories des collections
- Expositions : contient les expositions temporaires du musée
  
![Schéma de la base de données](/screenshots/schema.jpg "Schéma de la base de données")

## Post mortem

### Ce qui a fonctionné

- La mise en place de l'application mobile avec Ionic 7 et Vue 3 a été plutôt simple et rapide.
- L'apprentissage de Ionic 7 a été rapide car j'ai déjà des connaissances en VueJS 3.

### Ce qui a été difficile

- L'intégration d'un slider pour afficher les images des collections a été difficile car les composants <ion-slides> ont été déprécié . J'ai donc du chercher une solution alternative : https://swiperjs.com/.

### Ce qui n'a pas fonctionné

- L'intégration de Leaflet pour afficher une carte des musées de Paris n'a pas fonctionné car Leaflet ne supporte pas encore TypeScript. J'ai donc décidé de remplacer Leaflet par OpenStreetMap.

### Pistes d'amélioration

- Ajouter une fonctionnalité de recherche dans les collections
- Améliorer le design de l'application
- Ajouter une visite 3D du musée