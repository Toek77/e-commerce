< setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import type { ProductCardProps } from "./types/ProductCardProps";

import MenuComponent from '@/components/MenuComponent.vue'
import CategoryComponent from '@/components/CategoryComponent.vue'
import PosterComponent from '@/components/PosterComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'


const items: Ref<ProductCardProps[]> = ref([]);

async function load_cate() {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const response: ProductCardProps[] = await res.json();
    items.value = response;

    console.log("Loaded products:", items.value);
  } catch (err) {
    console.error("Error:", err);
  }
}

onMounted(() => {
  load_cate();
});
</scri>

<template>
  <main>
    <MenuComponent />
    <CategoryComponent />
    <PosterComponent />
    <MenuComponent />

    <!-- If productComponent displays products, you MUST pass items -->
    <ProductComponent :items="items" />
  </main>
</template>

<style>
body {
  background: white;
}
header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
