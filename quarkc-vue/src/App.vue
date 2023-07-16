<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b'
      }
    }"
  >
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
