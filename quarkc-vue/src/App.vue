<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#0490f3'
      }
    }"
  >
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
