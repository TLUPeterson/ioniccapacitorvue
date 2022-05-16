<template>
  <!-- List of Text Items -->
  <main-layout pageTitle="Tasks">

        <div class="svg-container">
          <img src="assets/header.svg" alt="header">
        </div>

<div className="main">
  <!-- Add new task form. Does't allow empty entry.  -->
      <form @keydown.enter.prevent="">
        <ion-input type="text" class="input-todo" v-bind:class="{ active: new_todo }" placeholder="New Task" v-model="new_todo" v-on:keyup.enter="addItem"></ion-input>
        <ion-button expand="full" class="addButton" v-bind:class="{ active: new_todo }"  @click="addItem">Add task</ion-button>
      </form>
  <!-- If you have atleast 1 task > shows aviable tasks -->
      <div v-if="pending.length > 0">
        <p className="statusBusy">You have {{ pending.length }} pending task<span v-if="pending.length>1">s</span></p>

  <!-- Adds task to array -->
<!-- eslint-disable-next-line vue/no-unused-vars -->
          <ion-list v-for="(item, index) in pending" v-bind:key="item.id">
            <ion-checkbox v-bind:id="'item_' + item.id" v-model="item.done" ></ion-checkbox>
            <span class="todo-text"> &#160; {{ item.title }}</span>
          </ion-list>
      </div> 
  <!-- If no more tasks > shows no tasks message with img -->
      <div class="ye2" v-if="!pending.length" ><img src="assets/kanye.jpg" alt="celebration">Time to chill!  You have no todos.</div> 
  <!-- Shows the percentage of completed tasks, if more than one task is completed -->
      <div v-if="completed.length > 0 && showComplete">
        <p class="status">Completed tasks: {{ completedPercentage }}</p>

  <!-- Lists already completed tasks if showComplete is true(button has been clicked) -->
<!-- eslint-disable-next-line vue/no-unused-vars -->
          <ion-list v-for="(item, index) in completed" v-bind:key="item.id">
            <ion-checkbox v-bind:id="'item_' + item.id" v-model="item.done" ></ion-checkbox>
            <label v-bind:for="'item_' + item.id"></label>
            <span class="done-text">&#160;{{ item.title }}</span>
          </ion-list>

      </div>
  <!-- Toggle for showButton, which shows the completed tasks -->
      <ion-button  className="showButton" v-if="completed.length > 0" @click="toggleShowComplete">
        <span v-if="!showComplete">Show</span>
        <span v-else>Hide</span> &#160; Complete
      </ion-button>
  <!-- If showButton is true and completed.length > 0, then show the clear all button -->
      <ion-button className="clearBtn"  v-if="completed.length > 0 && showComplete" @click="clearAll">Clear All</ion-button>
      

</div>



  </main-layout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue';
import { 
  IonList, 
  IonInput,
  IonCheckbox,
  IonButton,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonCheckbox,
    IonInput,
    IonList,
    IonButton,
    MainLayout 
  },
  data() {
    return {
      // Example tasks for startup
      todoList: [
        {"id":0,"title":"done1","done":false},
        {"id":1,"title":"done2","done":false},
        {"id":4,"title":"don3","done":true}
      ],
      new_todo: '',
      showComplete: false,
    };
  },
  mounted() {
    this.getTodos();
  },
  /* If change has been noted*/
  watch: {
    todoList: {
      handler: function(updatedList) {
        localStorage.setItem('todo_list', JSON.stringify(updatedList));
      },
      deep: true
    }
  },
  //Due to needing pending and completed constaly updated, I use computed properties to change them reactively
  computed:{
    pending: function() {
      return this.todoList.filter(function(item) {
        return !item.done;
      })
    },
    completed: function() {
      return this.todoList.filter(function(item) {
        return item.done;
      }); 
    },
    // Percentage of tasks completed
    completedPercentage: function() {
      return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
    },
  },
  methods: {
    // get all todos when loading the page
    getTodos() {
      if (localStorage.getItem('todo_list')) {
        this.todoList = JSON.parse(localStorage.getItem('todo_list'));
      }
    },
    // add a new item
    addItem() {
      // validation check
      if (this.new_todo) {
        this.todoList.unshift({
          id: this.todoList.length,
          title: this.new_todo,
          done: false,
        });
      }
      // reset new_todo
      this.new_todo = '';
      // save the new item in localstorage
      return true;
    },
    // delete an item
    deleteItem(item) {
      this.todoList.splice(this.todoList.indexOf(item), 1);
    },
    // Toggle for completed tasks
    toggleShowComplete() {
      this.showComplete = !this.showComplete;
    },
    // Delete all tasks for list
    clearAll() {
      this.todoList = [];
    }
  },
});
</script>