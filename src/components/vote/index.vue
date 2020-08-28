<template>
  <div>
    <ul class="list">
      <li v-for="(item,index) in list">
        <img class="list_img" :src="item.palyer_pic" alt="">
        <div class="tag">{{index+1}}</div>
        <p class="contentp">{{item.name}}</p>
        <span class="contentspan" @click="handToPath(item.palyer_id)">查看履职报告>>></span>
        <div class="tbsm">
          <span>满意 {{item.xxa}}票</span>
          <span>一般 {{item.xxb}}票</span>
        </div>
        <div class="list_btn">
          <span @click="handToMy(index)" :class="tpList.tpxq[index].i=='t'?'':'list_span_last'">满意</span>
          <span @click="handToYb(index)" :class="tpList.tpxq[index].i=='y'?'':'list_span_last'">一般</span>
        </div>
      </li>
    </ul>


    <van-button type="primary" size="large" class="btn" @click="handToOk" :disabled="disabled">确认选择</van-button>
  </div>
</template>

<script>
  import API from "@/api";
  import {
    insert,
    myd
  } from "@/api/modules/home.js";
  import {
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        user: {
          'ip': ''
        },
        ids: '',
        list: [],
        disabled: false,
        tpList: {
          "id": this.$store.state.login.userid,
          "shapy_id": "1",
          "tpxq": [{
            "palyer_id": "",
            "i": ""
          }, {
            "palyer_id": "",
            "i": ""
          }, {
            "palyer_id": "",
            "i": ""
          }, {
            "palyer_id": "",
            "i": ""
          }, {
            "palyer_id": "",
            "i": ""
          }, {
            "palyer_id": "",
            "i": ""
          }]
        }
      }
    },
    created() {
      this.ready()
      this.init()

      console.log(this.$store.state.login.userid)
    },
    methods: {
      handToPath(id) {
        this.$router.push({
          path: '/img',
          query: {
            id: id
          }
        })
      },
ready: function() {
        //获取本地IP地址
        //js 引入 <!-- 获取本机ip  -->
        //<script src="http://pv.sohu.com/cityjson?ie=utf-8">
        var cip = returnCitySN["cip"];
        //给vuedata对象里的字段赋值
        this.user.ip = cip
        this.$store.commit('login/USER_ID', this.user.ip);
        window.localStorage.setItem('userid', this.user.ip)
        console.log(this.user.ip)
      },
      init() {
        API.home.insert({
          id: this.$store.state.login.userid,
          shapyid: 1
        }).then(data => {
          this.list = data.data
          this.ids = data.data[0].ids
          this.tpList.tpxq[0].palyer_id = data.data[0].palyer_id
          this.tpList.tpxq[1].palyer_id = data.data[1].palyer_id
          this.tpList.tpxq[2].palyer_id = data.data[2].palyer_id
          this.tpList.tpxq[3].palyer_id = data.data[3].palyer_id
          this.tpList.tpxq[4].palyer_id = data.data[4].palyer_id
          this.tpList.tpxq[5].palyer_id = data.data[5].palyer_id
          if (this.ids == 1) {
            this.disabled = true
          } else if (this.ids == 0) {
            this.disabled = false
          }
        });
      },

      handToOk() {
        if (this.tpList.tpxq[0].i == '' || this.tpList.tpxq[1].i == '' || this.tpList.tpxq[2].i == '' || this.tpList.tpxq[
            3].i == '' || this.tpList.tpxq[4].i == '' || this.tpList.tpxq[5].i == '') {
          Dialog.alert({
            title: '请全部选择后进行确认投票',
            // message: '弹窗内容',
          }).then(() => {});
        } else {
          this.tpList.id=this.$store.state.login.userid
          API.home.myd({
            json: JSON.stringify(this.tpList)
          }).then(data => {
            Dialog.alert({
              title: '投票成功',
              // message: '弹窗内容',
            }).then(() => {
              console.log(data)
              this.init();
            });
          });
        }
      },
      handToMy(idx) {
        this.tpList.tpxq[idx].i = "t"
      },
      handToYb(idx) {
        this.tpList.tpxq[idx].i = "y"
      }
    }
  }
</script>

<style scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .list li {
    width: 165px;
    margin: 0 10px;
    margin-bottom: 10px;
  }

  .list_img {
    width: 100%;
    height: 105px;
  }

  .tbsm {
    background: url(../../assets/img/bj.jpg)no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
  }

  .tbsm span {
    font-size: 10px;
    color: #ffffff;
  }

  .list li {
    position: relative;
    background-color: #ffffff;
  }

  .tag {
    width: 40px;
    height: 25px;
    background-color: #1989FA;
    text-align: center;
    line-height: 25px;
    color: #ffffff;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    top: 90px;
  }

  .list_btn {
    display: flex;
    justify-content: space-between;
  }

  .list_btn span {
    flex: 1;
    text-align: center;
    font-size: 12px;
    height: 25px;
    background-color: #2a8de9;
    line-height: 25px;
    color: #ffffff;
  }

  .bgd {
    margin: 15px 5px;
    width: 150px;
    height: 15px;
  }

  .list_btn .list_span_last {
    background-color: #d8d8d8;
  }

  .contentp {
    font-size: 12px;
    color: #6f6f6f;
    text-align: center;
    margin-top: 25px;
  }

  .contentspan {
    font-size: 12px;
    color: #6f6f6f;
    text-align: center;
    display: block;
  }

  .btn {
    width: 90%;
    margin-left: 18px;
    margin-top: 20px;
    margin-bottom: 100px;
    border-radius: 50px;
    background: #1989FA;
    border: none;
  }
</style>
