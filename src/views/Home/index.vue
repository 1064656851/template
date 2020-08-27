<template>
  <div class="warp">
    <img class="banner" src="../../assets/img/banner.jpeg" alt="">
    <div class="timeWarp">
      <img class="time" src="../../assets/img/huodong.png" alt="">
      <p class="date">2020年12月12号</p>
    </div>



    <div class="btn">
      <router-link tag="div" to="/home/vote" class="btn_a">投票</router-link>
      <router-link tag="div" to="/home/list" class="btn_b">排行榜</router-link>
      <!-- <div class="btn_a">投票</div> -->
      <!-- <div class="btn_b">排行榜</div> -->
    </div>
    <div class="bottom_prompt" @click="handToBottom">
      <p class="">活动规则</p>
    </div>


    <van-popup class="pop" v-model="show">
      <p class="pop_title">活动规则</p>
      <br>
      <div>
        1.本次网络投票活动遵循公开、公平、公正原则，候选选手排名不分先后。
      </div>
      <div>
        2.每个微信号每天可以投一次，每次需要给六家单位的满意度都做出选择，才能提交。
      </div>
      <div>
        3.严禁刷票，一旦发现刷票等作弊现象，将取消参选资格。
      </div>
      <div>
        4.本次投票活动最终解释权归南山区普法办公室所有。
      </div>
    </van-popup>
    <router-view></router-view>
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
        show: false,
        showone:true
      }
    },

mounted() {
  this.show=true
},
    methods: {
      handToBottom() {
        this.show = true;
      },
    }
  }
</script>

<style scoped>
  .warp {
    background-color: #e1f1ff;
    min-height: 100px;
  }

  .banner {
    width: 100%;
    height: 200px;
  }

  .time {
    width: 345px;
    height: 120px;
    margin: 10px auto;
    display: block;
  }

  .timeWarp {
    position: relative;
  }

  .timeWarp p {
    width: 200px;
    text-align: center;
  }

  .date {
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -100px;
  }

  .btn {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    margin-bottom: 10px;
  }

  .btn div {
    flex: 1;
    text-align: center;
    font-size: 20px;
    color: #5695f6;
    background-color: #ffffff;
    padding: 10px 0;
    ;
  }

  .btn_a {
    border-radius: 20px 0 0 20px;
  }

  .btn_a.router-link-active {
    background-color: #5695f6;
    color: #ffffff;
  }

  .btn_b {
    border-radius: 0 20px 20px 0;
  }

  .btn_b.router-link-active {
    background-color: #5695f6;
    color: #ffffff;
  }

  .bottom_prompt {
    width: 100%;
    height: 50px;
    color: #FFFFFF;
    background: #1989FA;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    z-index: 100;
  }


  .pop {
    width: 80%;
    min-height: 100px;
    border-radius: 20px;
    padding: 20px 0;
  }

  .pop_title {
    width: 100px;
    background: #1989FA;
    color: #ffffff;
    text-align: center;
    border-radius: 0 10px 10px 0;
  }

  .pop div {
    margin: 0 10px 10px 10px;
  }
</style>
