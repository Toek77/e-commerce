<script setup lang="ts">
import Categories from '@/views/Categories.vue';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


interface CategoryItem {
      id: string;
    name: string,
    productCount: number,
    color: string,
    image: string,
    // group: null,
    createdAt: string,
    updatedAt: string
}



const item_category: Ref<CategoryItem[]> = ref([]);

async function load_cate() {
  try {
    const res = await fetch("http://localhost:3000/api/categories");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const response: CategoryItem[] = await res.json(); // parse JSON here
    item_category.value = response;

    console.log("Loading categories...");
    console.log(item_category.value);

  } catch (err) {
    console.error("Error:", err);
  }
}

function parse_img(input: string): string{
  return "http://localhost:3000/" + input;
}


onMounted(async () => {
  await load_cate();
})

function goToCategory(categoryId: string) {
  router.push(`/categories/${categoryId}`);
}


</script>

<template>
  <button class="category_list" role="list">
    <button
      v-for="item in item_category"
      :key="item.name"
      role="menuitem"
      type="button"
      class="category_btt"
      :style="{ '--bg': item.color }"
      @click="goToCategory(item.id)"
    >
      <img class="category_img" :src="parse_img(item.image)" alt="Category image">
      <span class="category_name">{{ item.name }}</span>
      <span class="category_count">{{ item.productCount }} items </span>


    </button>

  </button>

</template>

<style scoped>

.category_list {
  display        : flex;
  flex-direction : row;
  overflow-x: scroll;
  scrollbar-width: none;
  margin-bottom: 50px;

}

.category_btt {
  border: 2px solid lightgray;
  padding         : 5px;
  min-width       : 100px;
  width           : 100px;
  height          : 130px;
  margin          : 10px;
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  align-items     : center;
  background      : var(--bg);

  border-radius   : 8px;
  transition: transform 0.2s, border-color 0.2s;
}

.category_btt:hover {
  border-color: #4CAF50;
  transform: translateY(-2px);
}

.category_img {
  width         : 65%;
  margin-bottom : 10px;
}

.category_name {
  font-size     : 11px;
  font-weight   : bold;
  margin-bottom : 5px;
}

.category_count {
  font-size : 10px;
  color     : lightslategray;
}


</style>