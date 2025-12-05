<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';


class PosterItem {
  img: string;
  label: string;
  btt_label: string;
  btt_color: string;
  bg_color: string;

  constructor(img: string, label: string, btt_label: string, btt_color: string, bg_color: string) {
    this.img = img;
    this.label = label;
    this.btt_label = btt_label;
    this.btt_color = btt_color;
    this.bg_color = bg_color;
  }
}

let item_poster: Ref<PosterItem[]> = ref([])


async function load_promotion(){
  try{
    const response = await fetch("http://localhost:3000/api/promotions");
     const data = await response.json();
    item_poster.value = data.map((promotion: any) =>
        new PosterItem(
          promotion.image || "imgs/cate_item_1.png",
          promotion.title || "Promotion",
          "Shop Now",
          promotion.buttonColor || "red",
          promotion.color || "white",
          
        )
      );

      // console.log(item_poster);
  }catch(err){
    console.error(err);
  }
}

onMounted(async () => {
  await load_promotion();
})

</script>

<template>
  <div class="poster_list" role="list">
    <div v-for="item in item_poster" class="poster_item" role="listitem" :key="item.label">
      <div class="poster_main">
        <span class="poster_label">{{ item.label }}</span>
        <ButtonComponent/>
      </div>
      <img class="poster_img" :src="`http://localhost:3000/${item.img}`" alt="Poster image">

      >
    </div>
  </div>

</template>

<style scoped>
.poster_list{
  display        : flex;
  flex-direction : row;
  overflow-x     : scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap            : 24px;
  margin-top     : 24px;
}
.poster_main {
  margin-left    : 24px;
  display        : flex;
  flex-direction : column;
  align-items    : flex-start;
  justify-content: center;
  height         : 100%;
  width          : 100%;
  
}

.poster_label{
  font-size: 16px;
  font-weight: bold;
  color: #181818;
  margin-bottom: 16px;
}

.poster_item {
  border: 2px solid lightgray;
  display        : flex;
  flex-direction : row;
  align-items    : center;
  height         : 200px;
  width          : 380px;
  min-width      : 300px;
  background     : white;
  border-radius  : 8px;
}

.poster_img {
  max-width: 150px;
  max-height: 150px;
}

</style>