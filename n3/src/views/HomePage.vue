<template>
    <main-layout pageTitle="Home">
<ion-content >
          <svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100vh" height="20vh" 
          >
              <polygon points="0 0, 0 75, 0 75, 75 0" style="fill:#2c365a;" />
              <polygon points="75 0, 0 75, 175 75, 250 0" style="fill:#6baed8" />
              <circle cx="175" cy="75" r="75" style="fill:#88cbdb;opacity:1"/>
              <polygon points="250 0, 250 150, 175 75" style="fill:#2c365a" />
              <polygon points="175 75, 175 0, 250 0" style="fill:#88cbdb" />
              <polygon points="175 75, 250 75, 250 175, 175, 175" style="fill:#ee786c" />
              <polygon points="250 0, 395 0, 395 175, 250 175" style="fill:#fffcdb" />
          </svg>  
    
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button v-on:click="takePhoto()"> 
          <ion-icon :icon="camera"></ion-icon>
      </ion-fab-button>
  </ion-fab>

  <ion-avatar id="mainProfileImage" :key="photo" v-for="photo in photos">
      <ion-img :src="photo.webviewPath" ></ion-img> 
  </ion-avatar>

  <h2>
    Peeter Paan
  </h2>

  
</ion-content>
    </main-layout>
</template>

<script>
import { Storage } from "@ionic/storage";
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery } from '@/components/usePhotoGallery';
import {  
          IonAvatar,
          IonFab,
          IonFabButton,
          IonIcon,
          IonContent,
          IonImg,
        } from '@ionic/vue'
import {useRouter} from 'vue-router'

export default {
components:{ IonAvatar, IonFab, IonFabButton, IonIcon, IonContent, IonImg },
setup(){
    const { takePhoto, photos } = usePhotoGallery();
    const router = useRouter();
    return{
        router,
        photos,
        takePhoto,
        camera,
        trash,
        close,
        
    };},
methods:{
    toPage(path){
        this.router.push(path);
    }
}
}
</script>