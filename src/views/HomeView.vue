<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import type { ProductCardProps } from "./types/ProductCardProps";

import MenuComponent from "@/components/MenuComponent.vue";
import CategoryComponent from "@/components/CategoryComponent.vue";
import PosterComponent from "@/components/PosterComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import type ShowCase from "@/components/ShowCase.vue";

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
</script>


<template>
  <ShowCase />
  <main>
    <MenuComponent label="Featured Categories" />
    <CategoryComponent />
    <PosterComponent />
    <MenuComponent label="Popular Products"/>

    <div class="product-contatiner">
      <ProductComponent v-for="item in items" :key="item.id" :product="item" />
    </div>
  </main>
</template>

<style>
body {
  background: white;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.product-contatiner{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px 10px;
}


  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

</style>