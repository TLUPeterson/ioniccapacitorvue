<template>
  <!-- List of Text Items -->
  <main-layout pageTitle="Notes">
        <svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100vh" height="20vh" 
          >
              <polygon points="0 0, 0 75, 0 75, 75 0" style="fill:#ee786c;" />
              <polygon points="75 0, 0 75, 175 75, 250 0" style="fill:#6baed8" />
              <circle cx="175" cy="75" r="75" style="fill:#2c365a;opacity:1"/>
              <polygon points="250 0, 250 150, 175 75" style="fill:#88cbdb" />
              <polygon points="175 75, 175 0, 250 0" style="fill:#2c365a" />
              <polygon points="175 75, 250 75, 250 175, 175, 175" style="fill:#fffcdb" />
              <polygon points="250 0, 395 0, 395 175, 250 175" style="fill:#ee786c" />
        </svg>  







    <ion-title>ARLauncher</ion-title>



<ion-content>
  <iframe src="./scene.html"></iframe>
</ion-content>

  </main-layout>
</template>

<script>

import MainLayout from '@/components/MainLayout.vue';

import { 
  IonTitle,
  IonContent,


} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    MainLayout,
    IonContent ,
    IonTitle,


  }
});
</script>