<template>
  <v-container fluid>
    <div class="section-heading text-center mb-10">
      <div class="text-h3 secondary-font font-weight-bold">Our Popular Product</div>
    </div>
    <swiper
      :slidesPerView="4"
      :spaceBetween="20"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(product, index) in popularProduct" :key="index" class="pb-1">
        <ProductItem :product-item="product" />
      </swiper-slide>
    </swiper>
  </v-container>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ref } from "vue";
import ProductItem from "../product/ProductItem.vue";

// Define the modules
const modules = [Navigation];

const popularProduct = ref([
  {
    name: "SINGLE UNIQUE CHAIR",
    image: "src/assets/images/product/chair.png",
    model: "SDC-227-9-1-66",
    price: "14,000",
  },
  {
    name: "LEATHER SOFT SEAT",
    image: "src/assets/images/product/leather-soft.png",
    model: "SDC-227-9-1-66",
    price: "11,000",
  },
  {
    name: "SOFT UNIQUE CHAIR",
    image: "src/assets/images/product/soft-chair.png",
    model: "SDC-227-9-1-66",
    price: "9,000",
  },
  {
    name: "DOUBLE SOFA - POMPEI",
    image: "src/assets/images/product/brown-coution.png",
    model: "SDC-227-9-1-66 (REXINE)",
    price: "24,000",
  },
  {
    name: "CHAIR SOFA - POMPEI",
    image: "src/assets/images/product/purple-chair.png",
    model: "SDC-227-9-1-66",
    price: "22,000",
  },
  {
    name: "SOFA SET WITH TEA TABLE",
    image: "src/assets/images/product/sofaset.png",
    model: "SDC-118-9-1-66",
    price: "16,000",
  },
  {
    name: "LEATHER SOFT SEAT",
    image: "src/assets/images/product/leather-soft.png",
    model: "SDC-227-9-1-66",
    price: "11,000",
  },
  {
    name: "SOFT UNIQUE CHAIR",
    image: "src/assets/images/product/soft-chair.png",
    model: "SDC-227-9-1-66",
    price: "9,000",
  },
  {
    name: "DOUBLE SOFA - POMPEI",
    image: "src/assets/images/product/brown-coution.png",
    model: "SDC-227-9-1-66 (REXINE)",
    price: "24,000",
  },
  {
    name: "CHAIR SOFA - POMPEI",
    image: "src/assets/images/product/purple-chair.png",
    model: "SDC-227-9-1-66",
    price: "22,000",
  },
  {
    name: "SOFA SET WITH TEA TABLE",
    image: "src/assets/images/product/sofaset.png",
    model: "SDC-118-9-1-66",
    price: "16,000",
  },
]);
</script>

<style lang="scss" scoped></style>
