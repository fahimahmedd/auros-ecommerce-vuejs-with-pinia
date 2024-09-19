<template>
  <div class="home-feature">
    <v-container fluid>
      <v-row>
        <v-col cols="5">
          <div class="text-h2 font-weight-black">
            Transform your living space with style that lasts
          </div>
          <div class="text-h5 mt-4">
            Organize every space with our timeless furniture collections
          </div>
          <ul class="mt-5">
            <li>
              <span class="mdi mdi-check"></span> At eleifend mattis ligula, porta finibus
              urna gvida at.
            </li>
            <li>
              <span class="mdi mdi-check"></span> Kenean vehicula sodales arcu non mattis.
            </li>
            <li>
              <span class="mdi mdi-check"></span> Ginteger dapibus ac dui pretium blanss
              aptent.
            </li>
          </ul>
        </v-col>
        <v-col cols="7">
          <div class="feature-image">
            <v-img src="../../assets/images/feature/d.png"></v-img>
          </div>
          <div class="feature-image-slide mt-5">
            <swiper
              :slidesPerView="3"
              :spaceBetween="20"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(product, index) in showProduct"
                :key="index"
                class="pb-1"
              >
                <ProductShowItem :show-item="product" />
              </swiper-slide>
            </swiper>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ref } from "vue";
import ProductShowItem from "../product/ProductShowItem.vue";

// Define the modules
const modules = [Navigation];

const showProduct = ref([
  {
    name: "SINGLE UNIQUE CHAIR",
    image: "src/assets/images/product/chair.png",
    model: "SDC-227-9-1-66",
  },
  {
    name: "LEATHER SOFT SEAT",
    image: "src/assets/images/product/leather-soft.png",
    model: "SDC-227-9-1-66",
  },
  {
    name: "SOFT UNIQUE CHAIR",
    image: "src/assets/images/product/soft-chair.png",
    model: "SDC-227-9-1-66",
  },
  {
    name: "DOUBLE SOFA - POMPEI",
    image: "src/assets/images/product/brown-coution.png",
    model: "SDC-227-9-1-66 (REXINE)",
  },
  {
    name: "CHAIR SOFA - POMPEI",
    image: "src/assets/images/product/purple-chair.png",
    model: "SDC-227-9-1-66",
  },
  {
    name: "SOFA SET WITH TEA TABLE",
    image: "src/assets/images/product/sofaset.png",
    model: "SDC-118-9-1-66",
    price: "16,000",
  },
]);
</script>

<style scoped lang="scss">
.home-feature {
  background-color: rgba(229, 228, 228, 0.5);
  padding: 100px 0;
  margin: 70px 0 70px 0;
}
</style>
