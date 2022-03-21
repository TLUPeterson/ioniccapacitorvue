<template>
    <ion-page>
        <ion-header class="ion-no-border">

            <ion-toolbar >
              <ion-buttons @click="openMenu()" slot="start" id="menuButton">
                <ion-icon :icon="menu" slot="start"></ion-icon>
              </ion-buttons>
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
  IonPage,IonHeader,IonContent,IonTitle,IonToolbar,
  IonButtons,menuController,IonIcon,} from "@ionic/vue";
import { menu } from "ionicons/icons";
export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonIcon,
  },
  props: ["pageTitle"],
  data() {
    return {
      menu,
    };
  },
  methods: {
    openMenu() {
      menuController.open("sidemenu");
    },
  },
};
</script>