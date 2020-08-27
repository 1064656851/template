<template>
  <div>
    <van-nav-bar title="登陆" />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" :rules="[{ required: true, message: '请填写短信验证码' }]">
        <template #button>
          <van-button size="small" type="primary" class="yzm" @click="handToClick" :disabled="disabled">{{content}}</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登陆
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
  import API from "@/api";
  import {
    login,
    verifi
  } from "@/api/modules/login.js";
  import {
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        username: '',
        sms: '',
        content: '获取验证码',
        totalTime: 60,
        canClick: true,
        disabled: false,
        fhyzm: ''
      };
    },
    methods: {
      handToClick() {
        this.verify()
        if (!this.canClick) return
        this.canClick = false
        this.disabled = true
        this.content = this.totalTime + 's后重新发送'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送验证码'
            this.totalTime = 60
            this.canClick = true
            this.disabled = false
          }
        }, 1000)
      },
      //获取验证码
      verify() {
        API.login.verifi({
          name: this.username
        }).then(data => {
          this.fhyzm = data.data
          console.log(this.fhyzm)
        });
      },
      //登陆
      onSubmit(values) {
        console.log('submit', values);
        this.init()
      },
      init() {
        API.login.login({
          name: this.username,
          old: this.fhyzm,
          news: this.sms
        }).then(data => {
          console.log(data)
          if (data.data != 1) {
            Dialog.alert({
              title: '登陆成功',
              message: '登陆成功请跳转',
            }).then(() => {
              this.$router.push('/home')
              this.$store.commit('login/USER_ID', data.data);
              window.localStorage.setItem('userid', data.data)
            });
            this.$store.commit('login/USER_ID', 187);
            window.localStorage.setItem('userid', 187)
          } else if (data.data == 1) {
            Dialog.alert({
              title: '登陆失败',
              message: '验证码错误',
            }).then(() => {

            });
          }
        });
      },
    },
  };
</script>

<style scoped>
  .list {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    font-size: 10px;
    color: #cccccc;
  }

  .yzm {
    background: #1989fa;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
  }
</style>
