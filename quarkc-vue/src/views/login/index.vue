<template>
  <div class="login-body">
    <LeftSide />
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LeftSide from './components/leftSide.vue'
import LoginForm from './components/loginForm.vue'
</script>

<style lang="scss" scoped>
.login-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  background-color: #f8fafb;
  width: 90vw;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 700px;
  // 居中
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, 5%);
}
body {
  background-color: #ebedf0;
}
</style>
