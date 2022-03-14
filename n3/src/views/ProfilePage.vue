<template>
    <main-layout pageTitle="Profile Page">
        <h4>Your Profile</h4>
          <ion-avatar id="avatar">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
    </main-layout>
</template>
<script>
import { IonAvatar }  from '@ionic/vue'
export default {
    components:{
        IonAvatar,
    }
}
</script>