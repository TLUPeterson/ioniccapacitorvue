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
  <!-- List of Input Items -->
  <ion-list>
    <!-- <ion-item>
      <ion-label>Toggle</ion-label>
      <ion-toggle slot="end"></ion-toggle>
    </ion-item> -->
    <ion-item>
      <ion-label>Item 1</ion-label>
      <ion-checkbox slot="start"></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label>Item 2</ion-label>
      <ion-checkbox slot="start"></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label>Item 3</ion-label>
      <ion-checkbox slot="start"></ion-checkbox>
    </ion-item>
  </ion-list>

  <!-- List of Sliding Items -->
  <!-- <ion-list> -->
    <!-- <ion-item-sliding>
      <ion-item>
        <ion-label>Item</ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding> -->

  <!-- </ion-list> -->
  </main-layout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue';
import { 
  IonCheckbox, 
  IonItem, 
  IonList, 
  IonLabel,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonCheckbox,  
    IonItem, 
    IonList, 
    IonLabel, 
    MainLayout 
  }
});
</script>