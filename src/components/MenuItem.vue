<script setup>
defineProps<{
  label: string
  items?: string[]
}>()

const isOpen = ref(false)
</script>

<template>
  <div class="menu-item" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <span class="menu-label">{{ label }} <i class="fas fa-chevron-down"></i></span>
    <transition name="fade">
      <ul v-if="items && isOpen" class="dropdown">
        <li v-for="item in items" :key="item">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.menu-item {
  position: relative;
  display: inline-block;
  padding: 10px 16px;
  cursor: pointer;
}
.menu-label {
  font-weight: 500;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-radius: 4px;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  z-index: 1000;
}
.dropdown li a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
}
.dropdown li a:hover {
  background: #f0f0f0;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>