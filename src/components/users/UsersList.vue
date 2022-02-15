<template>
  <button @click="changeUrl">Go to TeamsList</button>
  <button @click="saveChangeFun">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return{
      isChangesSaved: false,
    };
  },
  methods:{
    changeUrl(){
      this.$router.push('/teams');
    },
    saveChangeFun(){
      this.isChangesSaved = true;
    },
  },
  beforeRouteLeave(_, _2, next){
    if(this.isChangesSaved){
      next();
    }
    else{
      let isConfirm = confirm('Unsaved changes will lost');
      next(isConfirm);
    }
  },

// Navigation guard inside components

  // beforeRouteEnter(to, from, next){
  //   console.log(to);
  //   console.log(from);
  //   next();
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>