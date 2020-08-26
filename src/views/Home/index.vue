<template>
  <div>
    <div>
      haha
    </div>
    <button @click="handToClick">1</button>
  </div>
</template>

<script>
  import API from "@/api";
  import {
    insert
  } from "@/api/modules/home.js";
  export default {
    data() {
      return {
        userid: this.$store.state.login.userid
      }
    },
    created() {
      this.init();
      this.$store.commit('login/USER_ID', 187);
      window.localStorage.setItem('userid', 187)
    },
    methods: {
      handToClick() {
        console.log(this.userid)
      },
      init() {
        API.home.insert({
          id: 1,
          status: 3
        }).then(data => {
          console.log(data)
        });
      }
    }
  }
</script>

<style scoped>
  div {
    width: 100px;
    height: 100px;
    background: pink;
    font-size: 10px;
  }
</style>
