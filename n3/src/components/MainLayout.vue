<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar >
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
  } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,

  },
  
  props: ["pageTitle"],
};
</script>