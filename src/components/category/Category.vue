<template>
  <v-container>
    <div class="category-list">
      <swiper
        :slidesPerView="6"
        :spaceBetween="20"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in category" :key="index" class="pb-1">
          <CategoryItem :category-item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import CategoryItem from "./CategoryItem.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Define the modules
const modules = [Navigation];

const category = ref([
  {
    title: "Living Room",
    itemQuantity: "78 Items",
    image: "src/assets/images/category/living.png",
  },
  {
    title: "Bedroom",
    itemQuantity: "120 Items",
    image: "src/assets/images/category/bathroom.png",
  },
  {
    title: "Business",
    itemQuantity: "57 Items",
    image: "src/assets/images/category/office-desk.png",
  },
  {
    title: "Home Office",
    itemQuantity: "90 Items",
    image: "src/assets/images/category/meeting-room.png",
  },
  {
    title: "Lighting",
    itemQuantity: "70 Items",
    image: "src/assets/images/category/lamp.png",
  },
  {
    title: "Kitchen",
    itemQuantity: "80 Items",
    image: "src/assets/images/category/kitchen.png",
  },
  {
    title: "Restaurant",
    itemQuantity: "190 Items",
    image: "src/assets/images/category/restaurant.png",
  },
]);
</script>

<style lang="scss" scoped></style>
