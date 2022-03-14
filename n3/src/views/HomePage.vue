<template>
    <main-layout pageTitle="Home">
        
        <div id="container">
        <h4 id="h4">Home page</h4>
        <img id="tent" src="https://images.pexels.com/photos/9468923/pexels-photo-9468923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
        alt="Pic"
        width=400
        />
        <h4 id="h4-2">Profile Page</h4>
        <ion-button @click="toPage('/profile')" size=full id="profileButton">Profile</ion-button>
        </div>
    </main-layout>
</template>

<script>
import { IonButton } from '@ionic/vue'
import {useRouter} from 'vue-router'
export default {
components:{ IonButton },
setup(){
    const router = useRouter();
    return{
      router
    };},
methods:{
    toPage(path){
        this.router.push(path);
    }
  }
};
</script>