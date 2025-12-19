<template>
  <section class="category-banner">
    <div class="content">
      <h1>{{ title }}</h1>

      <div class="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <span>Categories</span>
        <span>›</span>
        <span class="current">{{ title }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.category-banner {
  width: 100%;
  background: #40bb71;
  border-radius: 20px;
  padding: 48px 56px;
  margin: 24px auto;
  max-width: 1400px;

  /* subtle background pattern feel */
  background-image:
    radial-gradient(circle at 10% 20%, rgba(0,0,0,0.03) 1px, transparent 1px),
    radial-gradient(circle at 80% 80%, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 120px 120px;
}

.content h1 {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.breadcrumb {
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #7a8a85;
}

.breadcrumb .current {
  color: #4CAF50;
  font-weight: 600;
}
</style>
