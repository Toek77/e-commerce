<template>
  <div class="search-box">
    <select v-model="category" class="category-select">
      <option value="">All Categories</option>
      <!-- Add more options as needed -->
    </select>
    <input
      v-model="query"
      type="text"
      placeholder="Search for items"
      class="search-input"
    />
    <button class="search-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const category = ref('');
const query = ref('');
</script>

<style scoped>
.search-box {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 600px;
  height: 48px;
}

.category-select {
  padding: 0 16px;
  border: none;
  border-right: 1px solid #ccc;
  background: #f9f9f9;
  font-size: 16px;
  outline: none;
}

.search-input {
  flex: 1;
  padding: 0 16px;
  border: none;
  font-size: 16px;
  outline: none;
}

.search-button {
  padding: 0 16px;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-button svg {
  width: 24px;
  height: 24px;
  stroke: #666;
}

.search-button:hover svg {
  stroke: #333;
}
</style>