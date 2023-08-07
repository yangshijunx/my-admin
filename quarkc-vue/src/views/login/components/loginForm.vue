<template>
  <div class="login-form">
    <div class="login-form-welcome margin-b-20">Welcome Back！\(@^0^@)/</div>
    <div class="login-form-motto margin-b-40">不积跬步，无以至千里；不积小流，无以成江海。🔔</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.login-form {
  width: 50%;
  padding: 40px 40px 40px 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
}
</style>
