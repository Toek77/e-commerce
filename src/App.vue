<script setup lang="ts">

import { Ref } from 'vue';
import 
const items : Ref<ProductCardProps[]> = ref([]);

async function load_cate() {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const response: ProductCardProps[] = await res.json(); // parse JSON here
    items.value = response;

    console.log("Loading categories...");


  } catch (err) {
    console.error("Error:", err);
  }
}


</script>

<template>
  <main>
    <MenuComponent/>
    <CategoryComponent/>
    <PosterComponent/>
    <MenuComponent/>
    <productComponent/>
    
  </main>
</template>

<style>

body{
  background: white;
}
header {
  line-height : 1.5;
}

.logo {
  display : block;
  margin  : 0 auto 2rem;
}

@media (min-width : 1024px) {
  header {
    display       : flex;
    place-items   : center;
    padding-right : calc(var(--section-gap) / 2);
  }

  .logo {
    margin : 0 2rem 0 0;
  }

  header .wrapper {
    display     : flex;
    place-items : flex-start;
    flex-wrap   : wrap;
  }
}
</style>