<template>
    <ion-page>
        <ion-header class="ion-no-border">

            <ion-toolbar >
              <!-- Menu is not really necessary when tasks only page -->
              <!-- <ion-buttons @click="openMenu()" slot="start" id="menuButton">
                <ion-icon :icon="menu" slot="start"></ion-icon>
              </ion-buttons> -->

              <!-- Title for a page comes from here-->
                <ion-title id="menuText">{{pageTitle}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  menuController,
  IonButtons,
  IonIcon,
  } from "@ionic/vue";
import { menu } from "ionicons/icons";
export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,

  },
  
  props: ["pageTitle"],
/*  data() {
    return {
      menu,
    };
  },
  //openMenu is for sidemenu 
  methods: {
    openMenu() {
      menuController.open("sidemenu");
    },
  },*/
};
</script>