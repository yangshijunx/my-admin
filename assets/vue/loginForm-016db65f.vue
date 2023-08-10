<template>
  <div class="login-form">
    <div class="login-form-welcome margin-b-20">Welcome Back！\(@^0^@)/</div>
    <div class="login-form-motto margin-b-40">不积跬步，无以至千里；不积小流，无以成江海。🔔</div>
    <div class="login-form-box margin-b-20">
      <a-form
        :model="loginForm"
        name="basic"
        hideRequiredMark
        :noStyle="true"
        :label-col="{ span: 6 }"
        autocomplete="off"
      >
        <div class="login-form-item login-form-email">
          <span class="iconfont icon-youxiang"></span>
          <a-form-item
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <div class="login-form-item-title">Email Address</div>
            <a-input v-model:value="loginForm.username" />
          </a-form-item>
        </div>
        <div class="login-form-item login-form-password">
          <span class="iconfont icon-mima"></span>
          <a-form-item
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <div class="login-form-item-title">Password</div>
            <a-input-password v-model:value="loginForm.password" autocomplete />
          </a-form-item>
        </div>
      </a-form>
    </div>
    <div class="login-form-remember margin-b-20">
      <a-radio v-model:checked="loginForm.remember">Remember Me</a-radio>
      <div>Forget Password</div>
    </div>
    <div class="login-form-foot margin-b-20">
      <a-button class="margin-r-40" shape="round" type="primary">Login Now</a-button>
      <a-button shape="round" type="primary" class="white-button">Create Account</a-button>
    </div>
    <div class="login-form-other">
      <p>Or you can join with</p>
      <div class="login-form-other-icons">
        <img
          v-for="item of icons"
          :class="{ large: item.id === 3 }"
          :key="item.id"
          :src="getImageUrl(item.img)"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const icons = [
  {
    id: 1,
    label: 'qq',
    img: 'assets/login/qq.svg'
  },
  {
    id: 2,
    label: 'google',
    img: 'assets/login/google.svg'
  },
  {
    id: 3,
    label: 'twitter',
    img: 'assets/login/twitter.svg'
  }
]
let loginForm = reactive({
  username: '',
  password: '',
  remember: false
})
const getImageUrl = (url: string) => {
  // console.log('处理图片路径', import.meta.url)
  return new URL(`../../../${url}`, import.meta.url).href
}
</script>

<style scoped lang="scss">
@import '../style/resetAntInput.scss';
.iconfont {
  font-size: 36px;
  color: #1e1e1e;
  margin-right: 16px;
}
.ant-form-item {
  margin-bottom: 0;
  flex: 1;
}
.ant-input-affix-wrapper {
  height: 40px;
  padding: 0;
  font-size: 18px;
  font-weight: 600;
}
.ant-input {
  height: 40px;
  padding: 0;
  font-size: 18px;
  font-weight: 600;
}
.login-form {
  width: 50%;
  padding: 40px 40px 40px 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 560px;
  &-welcome {
    font-size: 30px;
    font-family: SmileySans-Oblique;
    color: #1e1e1e;
    align-self: flex-start;
  }
  &-motto {
    font-size: 20px;
    font-family: SmileySans-Oblique;
    color: #1e1e1e;
    align-self: flex-start;
  }
  &-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid #ebedf0;
  }
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px 20px;
    &-title {
      font-size: 16px;
      font-family: SmileySans-Oblique;
      color: #1e1e1e;
    }
  }
  &-email {
    background-color: #ebedf0;
  }
  &-password {
    background-color: white;
  }
  &-remember {
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-foot {
    width: 100%;
    display: flex;
    align-items: center;
    .white-button {
      background-color: #fff;
      color: #1e1e1e;
    }
  }
  &-other-icons {
    display: flex;
    align-items: center;
    img {
      margin-right: 16px;
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
    .large {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
