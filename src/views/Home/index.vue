<template>
  <div>
    haha
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

      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        API.home.insert({
          id:1,
          status:3
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
  }
</style>
