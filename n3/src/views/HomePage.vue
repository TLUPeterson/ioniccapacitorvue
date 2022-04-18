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
      <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)" ></ion-img> 
  </ion-avatar>

  <div id="profile">
  <p>
    My name is <input v-model="name">
    and I am <input v-model="age"> years old.
  </p>
  <p>
    <button id="quoteButton" @click="persist">Save</button>
  </p>
</div>


</ion-content>
    </main-layout>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { camera, trash, close, checkmark } from 'ionicons/icons';
import { usePhotoGallery } from '@/components/usePhotoGallery';
import { Storage } from '@capacitor/storage';

import {  
          IonAvatar,
          IonFab,
          IonFabButton,
          IonIcon,
          IonContent,
          IonImg,
          actionSheetController,
        } from '@ionic/vue'
import {useRouter} from 'vue-router'

export default {
components:{ IonAvatar, IonFab, IonFabButton, IonIcon, IonContent, IonImg, actionSheetController },
setup(){
    const { takePhoto, photos, deletePhoto } = usePhotoGallery();
    const router = useRouter();

    const setName = async () => {
        await Storage.set({
            key: 'name',
            value: 'Max',
        });};

    const checkName = async () => {
        const { value } = await Storage.get({ key: 'name' });
        console.log(`Hello ${value}!`);
        };

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
        setName,
        checkName,
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
        console.log('now pretend I did more stuff...');
        }
    },
}
</script>