<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Quotes from god</ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content>
  <ion-grid>
    <ion-row>

          
    </ion-row>
  </ion-grid>
  <br>
        <div id="quote">{{quotes.quote}}</div>
        <br>
        <img src="https://i0.wp.com/culturalhistoryoftheinternet.com/wp-content/uploads/2020/11/cover2-1.jpg?resize=810%2C580&ssl=1">


</ion-content>
</ion-page>
</template>

<script>
  import axios from 'axios'
  import { camera, trash, close } from 'ionicons/icons';
  import { usePhotoGallery } from '@/components/usePhotoGallery';
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    } from '@ionic/vue';

    export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
  },
    data() {
    return {
      quotes: [],
      errors: []
    }
  },
      
  setup() {
      const { takePhoto, photos } = usePhotoGallery();

    return {
        photos,
        takePhoto,
        camera,
        trash,
        close,
    };
  },
  created() {
    axios.get(`https://api.kanye.rest/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.quotes = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods:{
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>