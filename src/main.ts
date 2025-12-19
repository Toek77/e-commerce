import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  


// Global components
import CategoryComponent from "@/components/CategoryComponent.vue";
import PosterComponent from "@/components/PosterComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import MenuItem from '@/components/MenuItem.vue';
import ShowCase from './components/ShowCase.vue';

createApp(App)
  .component("CategoryComponent", CategoryComponent)
  .component("PosterComponent", PosterComponent)
  .component("ButtonComponent", ButtonComponent)
  .component("MenuComponent", MenuComponent)
  .component("ProductComponent", ProductComponent)
  .component("MenuItem", MenuItem)
  .component("ShowCase", ShowCase)

  .use(router)                
  .mount('#app')
