<script setup lang="ts">
import { Spin } from 'ant-design-vue'
import { RouterView } from 'vue-router'
import { globalStore } from '@/stores'
const globalStoreData = globalStore()
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#0490f3'
      }
    }"
  >
    <Spin
      :spinning="globalStoreData.getLoading"
      size="large"
      :tip="globalStoreData.getLoadingText"
      class="global-loading"
    >
      <RouterView />
    </Spin>
  </a-config-provider>
</template>

<style scoped lang="scss">
.ant-spin-nested-loading {
  height: 100%;
  :deep(.ant-spin-container) {
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
