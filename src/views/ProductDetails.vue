// filepath: c:\Users\ASUS\Desktop\ITC Course\internet programming\e-commerce\src\views\ProductDetails.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref(null);

async function loadProduct() {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${route.params.productId}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    product.value = await res.json();
  } catch (err) {
    console.error('Error loading product:', err);
  }
}

onMounted(() => {
  loadProduct();
});
</script>

<template>
  <div>
    
    <main v-if="product" class="product-details">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </main>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped>
.product-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>