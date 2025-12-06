<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('All Categories')

const categories = [
  'All Categories',
  'Vegetables',
  'Fruits',
  'Meat & Seafood',
  'Drink',
  'Cookies',
  'Bakery',
  // ... add more
]

const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', { query: searchQuery.value, category: selectedCategory.value })
}
</script>

<template>
  <div class="search-box">
    <select v-model="selectedCategory" class="category-select">
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for items..."
      class="search-input"
      @keyup.enter="handleSearch"
    />
    <button class="search-btn" @click="handleSearch">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<style scoped>
.search-box {
  display: flex;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  background: white;
}
.category-select {
  padding: 12px;
  border: none;
  background: #f8f8f8;
  font-size: 14px;
}
.search-input {
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  font-size: 14px;
}
.search-btn {
  padding: 0 20px;
  background: #2e7d32;
  color: white;
  border: none;
  cursor: pointer;
}
.search-btn:hover {
  background: #1b5e20;
}
</style>