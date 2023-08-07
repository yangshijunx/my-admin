<template>
  <div class="left-side">
    <img src="@/assets/login/left-side.svg" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.left-side {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
  }
}
@media screen and (max-width: 700px) {
  .left-side {
    display: none;
  }
}
</style>
