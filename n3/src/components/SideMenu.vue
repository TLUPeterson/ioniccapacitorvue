<template>
  <ion-menu side="start" menu-id="sidemenu" content-id="mymenu">
    <ion-header>
      <ion-toolbar>
        <ion-title> Welcome! </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="menu">
      <ion-list id="menu">
        <ion-item button @click="toPage('/home')" >
          <ion-icon :icon="home" slot="start"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item button @click="toPage('/page2')">
          <ion-icon :icon="build" slot="start"></ion-icon>
          <ion-label>Pages2</ion-label>
        </ion-item>
        <ion-item button @click="toPage('/profile')">
          <ion-icon :icon="bandage" slot="start"></ion-icon>
          <ion-label>Profile Page</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {IonMenu,IonHeader,IonContent,IonToolbar,IonTitle,
  IonList,IonItem,IonIcon,IonLabel,menuController,} from "@ionic/vue";
import { home, build, bandage } from "ionicons/icons";
import {useRouter} from 'vue-router'
export default {
  components: {
    IonMenu,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
  },
  data() {
    return {
      home,
      build,
      bandage
    };
  },
  setup(){
    const router = useRouter();
    return{
      router
    };
  },
  methods:{
    toPage(path){
      menuController.close('sidemenu');
      this.router.push(path);
    }
  }
};
</script>