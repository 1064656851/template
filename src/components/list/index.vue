<template>
  <div class="list_warp">
    <div class="warp">
      <ul class="list_first">
        <li>
          <div class="list_lr">
            <img class="head" src="../../assets/img/head.png" alt="">
            <img class="img_tag" src="../../assets/img/crown_silver.png" alt="">
          </div>
          <p>{{list[1].name}}</p>
          <span>{{list[1].xxa}}票</span>
        </li>
        <li>
          <div>
            <img class="headcenter" src="../../assets/img/head.png" alt="">
            <img class="img_taga" src="../../assets/img/crown_gold.png" alt="">
          </div>

          <p>{{list[0].name}}</p>
          <span>{{list[0].xxa}}票</span>
        </li>
        <li>
          <div class="list_lr">
            <img class="head" src="../../assets/img/head.png" alt="">
            <img class="img_tag" src="../../assets/img/crown_bronze.png" alt="">
          </div>
          <p>{{list[2].name}}</p>
          <span>{{list[2].xxa}}票</span>
        </li>
      </ul>


      <ul class="list_last">
        <li>
          <i>4</i>
          <div class="list_last_content">
            <img src="../../assets/img/banner.jpeg" alt="">
            <div>
              <p>{{list[3].name}}</p>
              <span>{{list[3].xxa}}票</span>
            </div>
          </div>
        </li>
        <li>
          <i>5</i>
          <div class="list_last_content">
            <img src="../../assets/img/banner.png" alt="">
            <div>
              <p>{{list[4].name}}</p>
              <span>{{list[4].xxa}}票</span>
            </div>
          </div>
        </li>
        <li>
          <i>6</i>
          <div class="list_last_content">
            <img src="../../assets/img/banner.png" alt="">
            <div>
              <p>{{list[5].name}}</p>
              <span>{{list[5].xxa}}票</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import API from "@/api";
  import {
    phb
  } from "@/api/modules/home.js";
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        API.home.phb({
          shapyid: 1
        }).then(data => {
          this.list = data.data

        });
      },
    }
  }
</script>

<style scoped>
  .list_warp {
    padding: 10px;
    background: #e1f1ff;
  }

  .warp {
    background: #ffffff;
    margin: 0 10px;

  }

  .list_first .list_lr {
    position: relative;
    padding-top: 20px;
    height: 50px;
  }

  .list_first {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-top: 15px;
    margin-bottom: 20px;
  }

  .list_first div {
    height: 70px;
    position: relative;
  }

  .list_first p {
    font-size: 10px;
    color: #757575;
    margin: 5px 0;
  }

  .list_first span {
    font-size: 12px;
    color: #757575;
  }

  .list_first .head {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .list_first .headcenter {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .tag_one {
    position: absolute;
    top: 4px;
    left: 8px;
    width: 50px;
    height: 65px;
  }

  .tag_two {
    position: absolute;
    top: 4px;
    left: 8px;
    width: 50px;
    height: 65px;
  }

  .tag_three {
    position: absolute;
    top: -20px;
    left: 0;
    width: 70px;
    height: 90px;
  }

  .list_last li {
    display: flex;
    align-items: center;
  }

  .list_last li i {
    display: block;
    margin: 0 15px;
    font-size: 10px;
    color: #696969;
  }

  .list_last_content {
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    padding: 5px 0;
    width: 100%;
  }

  .list_last_content img {
    width: 90px;
    height: 55px;
    margin-right: 35px;
  }

  .list_last_content p {
    font-size: 12px;
    color: #7b7b7b;
    margin: 5px 0 10px 0;
  }

  .list_last_content span {
    font-size: 10px;
    color: #7b7b7b;
  }

  .img_tag {
    position: absolute;
    left: 50%;
    top: 5px;
    width: 35px;
    height: 20px;
    margin-left: -17px;
  }

  .img_taga {
    position: absolute;
    left: 50%;
    top: -15px;
    width: 35px;
    height: 20px;
    margin-left: -17px;
  }
</style>
