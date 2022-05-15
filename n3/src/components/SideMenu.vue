<template>
<!-- THIS FILE IS OBSOLOETE FOR CURRENT STATE OF THE APP, BUT LEAVING IT IN JUST IN CASE -->
  <ion-menu side="start" menu-id="sidemenu" content-id="mymenu">
    <ion-header>
      <ion-toolbar>
        <ion-title> Welcome! </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content >
      <!-- Items for menu -->
      <ion-list>
        <ion-item button v-on:click="toPage('/home')" >
          <ion-icon :icon="home" slot="start" id="menuIcon"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item button v-on:click="toPage('/tasks')">
          <ion-icon :icon="library" slot="start" id="menuIcon"></ion-icon>
          <ion-label>Tasks</ion-label>
        </ion-item>
        <ion-item button v-on:click="toPage('/kanye')">
          <ion-icon :icon="bandage" slot="start" id="menuIcon"></ion-icon>
          <ion-label>Quotes from the one</ion-label>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {IonMenu,IonHeader,IonContent,IonToolbar,IonTitle,
  IonList,IonItem,IonIcon,IonLabel,menuController,} from "@ionic/vue";
import { home, library, bandage, cube } from "ionicons/icons";
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
      library,
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