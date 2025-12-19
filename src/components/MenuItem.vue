<template>
  <div
    class="menu-item-wrapper"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <RouterLink
      :to="to || '#'"
      class="menu-item"
      :class="{ active: isActive }"
    >
      {{ label }}

      <span v-if="hasDropdown" class="arrow">▼</span>
    </RouterLink>

    <div v-if="hasDropdown && show" class="dropdown">
      <slot>
        <RouterLink to="#" class="dropdown-link">Item 1</RouterLink>
        <RouterLink to="#" class="dropdown-link">Item 2</RouterLink>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  label: string
  to?: string
  hasDropdown?: boolean
  isActive?: boolean
}>()

const show = ref(false)
</script>

<style scoped>
.menu-item-wrapper {
  position: relative;
}

.menu-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 12px;
}

.menu-item:hover {
  color: #4CAF50;
}

.menu-item.active {
  color: #4CAF50;
  border-bottom: 3px solid #4CAF50;
}

.arrow {
  margin-left: 6px;
  font-size: 10px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 160px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  border-radius: 6px;
  margin-top: 6px;
}

.dropdown-link {
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  color: #333;
}

.dropdown-link:hover {
  background: #f2f2f2;
}
</style>
