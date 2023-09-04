<script setup>
import Versions from './components/Versions.vue'
import sidebar from './components/sidebar.vue'
import mainPageContaineer from './components/mainPageContaineer.vue'
import 'primeicons/primeicons.css'
</script>

<template>
  <sidebar></sidebar>
  <Versions></Versions>
  <Versions></Versions>
  <div>
    <mainPageContaineer></mainPageContaineer>
  </div>
  <!-- <i class="pi pi-user" style="font-size: 2.5rem"></i> -->
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
