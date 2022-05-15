<template>
<!-- /* THIS FILE IS OBSOLOETE FOR CURRENT STATE OF THE APP, BUT LEAVING IT IN JUST IN CASE */ -->

    <main-layout pageTitle="Home">
<ion-content >
          <svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100vh" height="20vh" 
          >
              <polygon points="0 0, 0 75, 0 75, 75 0" style="fill:#2c365a;" />
              <polygon points="75 0, 0 75, 175 75, 250 0" style="fill:#6baed8" />
              <polygon points="0 75, 0 175, 175 175, 175 75" style="fill:#2c365a;" />
              <circle cx="175" cy="75" r="75" style="fill:#88cbdb;opacity:1"/>
              <polygon points="250 0, 250 150, 175 75" style="fill:#2c365a" />
              <polygon points="175 75, 175 0, 250 0" style="fill:#88cbdb" />
              <polygon points="175 75, 250 75, 250 175, 175 175" style="fill:#ee786c" />
              <polygon points="250 0, 395 0, 395 175, 250 175" style="fill:#fffcdb" />
          </svg>  
    
  <ion-fab class="takePhoto" vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button class="takePhoto" v-on:click="takePhoto()"> 
          <ion-icon  :icon="camera"></ion-icon>
      </ion-fab-button>
  </ion-fab>

  <ion-avatar id="mainProfileImage" :key="photo" v-for="photo in photos">
      <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)" ></ion-img> 
  </ion-avatar>

<div id="profile">

    <ion-input class="profileButton" v-model="name" placeholder="Name"/>

    <ion-button class="saveButton" @click="persist">Save</ion-button>

</div>


</ion-content>
    </main-layout>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { camera, trash, close, checkmark } from 'ionicons/icons';
import { usePhotoGallery } from '@/components/usePhotoGallery';
import {useRouter} from 'vue-router'
import {  
          IonAvatar,
          IonFab,
          IonFabButton,
          IonIcon,
          IonContent,
          IonImg,
          actionSheetController,
          IonInput,
          IonButton,
        } from '@ionic/vue'

export default {
components:{ IonAvatar, IonFab, IonFabButton, IonIcon, IonContent, IonImg, actionSheetController, IonInput, IonButton },
setup(){
    const { takePhoto, photos, deletePhoto } = usePhotoGallery();
    const router = useRouter();

    const showActionSheet = async (photo) => {
    const actionSheet = await actionSheetController.create({
        header: 'Photos',
        buttons: [
        {
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
            deletePhoto(photo);
            },
        },
        {
            text: 'Cancel',
            icon: close,
            role: 'cancel',
            handler: () => {
            // Nothing to do, action sheet is automatically closed
            },
        },
        ],
    });
    await actionSheet.present();
};
    return{
        router,
        photos,
        takePhoto,
        showActionSheet,
        camera,
        trash,
        close,
        checkmark,
        name: '',
        age: 0,

    };
    },
    mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.age) {
      this.age = localStorage.age;
    }
  },
    methods:{
        toPage(path){
            this.router.push(path);
        },
        persist() {
        localStorage.name = this.name;
        localStorage.age = this.age;
        console.log('...done');
        }
    },

}
</script>