<template>
<!-- /* THIS FILE IS OBSOLOETE FOR CURRENT STATE OF THE APP, BUT LEAVING IT IN JUST IN CASE */ -->

  <main-layout pageTitle="Ye!">
    <ion-content>

        <div id="quote">🙌{{quotes.quote}}🙌</div>
        <br>
        <img src="https://i0.wp.com/culturalhistoryoftheinternet.com/wp-content/uploads/2020/11/cover2-1.jpg?resize=810%2C580&ssl=1">
        <button id="quoteButton" @click="reloadPage" >Enlighten me more</button>


</ion-content>
</main-layout>
</template>

<script>
  import axios from 'axios'
  import { camera, trash, close } from 'ionicons/icons';
  import { usePhotoGallery } from '@/components/usePhotoGallery';
  import {
    IonContent,
    } from '@ionic/vue';

    export default {
  components: {
    IonContent,
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