<!-- <template>
  <div class="category-menu">
    <button
      v-for="(item, index) in items"
      :key="index"
      @click="$emit('select', item)"
      :class="['tab', item === active ? 'active' : '']"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup lang = "ts">
    defineProps({
        items: Array, 
        active: String})
    defineEmits(["select"])
</script>

<style scoped>
.menu-container {
  display: flex;
  gap: 16px;
  padding: 12px 16px;
  overflow-x: auto;
  flex-wrap: wrap;
}

.info {
  padding: 8px 20px;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  background: none;
  border: none;
}

.info.active {
  font-weight: bold;
  border-bottom: 2px solid #4caf50;
  color: #4caf50;
}

.menu-item.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: #3BB77E;
}

</style> -->


<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<ComponentAttribute>(), {
  label: 'Featured Categories'
})

interface ComponentAttribute {
  label?: string;
}

const categories = ref([
  'All',
  'Milks & Dairies',
  'Coffes & Teas',
  'Pet Foods',
  'Meats',
  'Vegetables',
  'Fruits'
]);

const activeCategory = ref('All');

const selectCategory = (category: string) => {
  activeCategory.value = category;
};
</script>

<template>
  <div class="featured-container">
    <div class="label-container">{{ props.label }}</div>
    <div class="categories-nav">
      <button
        v-for="category in categories"
        :key="category"
        :class="['category-btn', { active: activeCategory === category }]"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.featured-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.label-container {
  font-size: 24px;
  font-weight: bold;
  color: #253D4E;
}

.categories-nav {
  display: flex;
  gap: 10px;
}

.category-btn {
  padding: 8px 10px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #7E7E7E;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  color: #3BB77E;
}

.category-btn.active {
  font-weight: 800;
  color: black
}
</style>