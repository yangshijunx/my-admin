<template>
  <div class="login-form">
    <div class="login-form-welcome margin-b-20">Welcome Back！\(@^0^@)/</div>
    <div class="login-form-motto margin-b-40">不积跬步，无以至千里；不积小流，无以成江海。🔔</div>
    <div class="login-form-box margin-b-40">
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
            <a-input-password v-model:value="loginForm.password" />
          </a-form-item>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
let loginForm = reactive({
  username: '',
  password: '',
  remember: false
})
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
}
</style>
