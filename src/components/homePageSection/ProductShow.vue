<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img
          class="img-overly"
          rounded="lg"
          src="../../assets/images/feature/home2.jpg"
          height="593"
          cover
        >
        </v-img>
      </v-col>
      <v-col cols="8">
        <div class="v-row">
          <v-col cols="4" v-for="(item, index) in productShow" :key="index">
            <ProductShowItem :showItem="item" />
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import ProductShowItem from "../product/ProductShowItem.vue";
const productShow = ref([
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
]);
</script>

<style scoped lang="scss">
.img-overly {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
