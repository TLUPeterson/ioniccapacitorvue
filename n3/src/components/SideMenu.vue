<template>
  <ion-menu side="start" menu-id="sidemenu" content-id="mymenu">
    <ion-header>
      <ion-toolbar>
        <ion-title> Welcome! </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content >
      <ion-list>
        <ion-item button v-on:click="toPage('/home')" >
          <ion-icon :icon="home" slot="start" id="menuIcon"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item button v-on:click="toPage('/page2')">
          <ion-icon :icon="build" slot="start" id="menuIcon"></ion-icon>
          <ion-label>Pages2</ion-label>
        </ion-item>
        <ion-item button v-on:click="toPage('/kanye')">
          <ion-icon :icon="bandage" slot="start" id="menuIcon"></ion-icon>
          <ion-label>Quotes from the one</ion-label>
        </ion-item>
        <ion-item button v-on:click="toPage('/vr')">
          <ion-icon :icon="cube" slot="start" id="menuIcon"></ion-icon>
          <ion-label>AR</ion-label>
        </ion-item>
        <ion-item button v-on:click="toPage('/test')">
          <ion-icon :icon="cube" slot="start" id="menuIcon"></ion-icon>
          <ion-label>Test</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {IonMenu,IonHeader,IonContent,IonToolbar,IonTitle,
  IonList,IonItem,IonIcon,IonLabel,menuController,} from "@ionic/vue";
import { home, build, bandage, cube } from "ionicons/icons";
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
      bandage,
      cube,
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