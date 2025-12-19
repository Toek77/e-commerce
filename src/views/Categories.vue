// filepath: c:\Users\ASUS\Desktop\ITC Course\internet programming\e-commerce\src\views\Categories.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import Header2 from '@/components/Header2.vue';

interface Category {
  id: number;
  name: string;
  image: string;
  description?: string;
}

const categories = ref<Category[]>([]);

async function loadCategories() {
  try {
    const res = await fetch('http://localhost:3000/api/categories');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    categories.value = await res.json();
  } catch (err) {
    console.error('Error loading categories:', err);
    categories.value = [
      { id: 1, name: 'Fruits', image: '/fruits.jpg', description: 'Fresh fruits' },
      { id: 2, name: 'Vegetables', image: '/vegetables.jpg', description: 'Healthy veggies' },
      { id: 3, name: 'Dairy', image: '/dairy.jpg', description: 'Milk and cheese' },
    ];
  }
}

onMounted(() => {
  loadCategories();
});
</script>

<template>
  <div>
    <Header2 />
    
    <main class="categories-page">
      <h1>Shop by Category</h1>
      <div class="categories-grid">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="`/category/${category.id}`"
          class="category-card"
        >
          <img :src="category.image" :alt="category.name" />
          <h3>{{ category.name }}</h3>
          <p v-if="category.description">{{ category.description }}</p>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.categories-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 32px;
}

.categories-page h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.category-card {
  background: white;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.category-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.category-card h3 {
  margin: 10px 0;
  color: #333;
}

.category-card p {
  color: #666;
  font-size: 14px;
}
</style>