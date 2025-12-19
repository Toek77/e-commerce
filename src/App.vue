<script setup lang="ts">
  import Header1 from '@/components/Header1.vue';
</script>

<template>
  <Header1 />
  <router-view />
</template>

<style>
  #app {
    display: flex;
    flex-direction: column;
  }
</style>