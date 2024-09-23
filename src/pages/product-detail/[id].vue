<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="7">
        <swiper
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="mySwiper2"
        >
          <swiper-slide v-for="(productImage, index) in productSlideImg" :key="index">
            <v-img :src="productImage.image" width="100%"></v-img>
          </swiper-slide>
        </swiper>

        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="5"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(productImage, index) in productSlideImg" :key="index">
            <v-img :src="productImage.image" max-height="80" width="100%"></v-img>
          </swiper-slide>
        </swiper>
      </v-col>
      <v-col cols="5">
        <div class="category-highlight">Sofa</div>
        <div class="text-h4 font-weight-black mt-2">DOUBLE SOFA - POMPEI</div>
        <div class="text-subtitle-2 font-weight-regular mt-2">
          <span class="font-weight-medium">Code :</span> SDC-227-9-1-66 (REXINE)
        </div>
        <v-divider class="mt-5"></v-divider>
        <div class="product-feature mt-5">
          <ul>
            <li>Ergonomic Comfort: Designed to support your posture .</li>
            <li>Durable Fabric: Upholstered in high-quality.</li>
            <li>Spacious Seating: Generously sized .</li>
            <li>
              Stylish Design: A sleek, modern design that complements any interior decor,
            </li>
            <li>Sturdy Build: Constructed with a solid wood frame and reinforced.</li>
          </ul>
        </div>
        <v-divider class="mt-5"></v-divider>
        <div class="add-cart-container mt-10">
          <div class="cart-plus-minus d-flex align-center">
            <v-btn icon="mdi-minus" color="primary" width="55" height="55"> </v-btn>
            <v-text-field
              variant="solo"
              class="mx-2 text-center"
              hide-details
              max-width="180"
              color="primary"
              rounded="pill"
              type="number"
              bg-color="rgb(229 229 229)"
              placeholder="1"
            >
            </v-text-field>
            <v-btn icon="mdi-plus" color="primary" width="55" height="55"> </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Set up thumbsSwiper and modules in Composition API
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];

const productSlideImg = ref([
  {
    image: "../src/assets/images/product/brown-coution.png",
  },
  {
    image: "../src/assets/images/product/purple-chair.png",
  },
  {
    image: "../src/assets/images/product/sofaset.png",
  },
  {
    image: "../src/assets/images/product/chair.png",
  },
  {
    image: "../src/assets/images/product/leather-soft.png",
  },
  {
    image: "../src/assets/images/product/soft-chair.png",
  },
]);
</script>

<style scoped lang="scss">
.mySwiper2 {
  width: 100%;
  height: 450px;
}

.mySwiper {
  width: 100%;
  height: 110px;
  padding-bottom: 10px;
  padding-right: 10px;
  margin-top: 20px;
  .swiper-slide {
    border: 1px solid #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
}
.category-highlight {
  padding: 4px 15px;
  background-color: #dabdf04a;
  border-radius: 35px;
  display: inline-block;
  font-size: 12px;
}
.product-feature {
  ul {
    margin-left: 20px;
    li {
      list-style: disc;
      color: #545353;
      font-weight: normal;
      margin-top: 8px;
      font-size: 14px;
    }
  }
}
.text-center :deep(input) {
  text-align: center;
}
</style>
