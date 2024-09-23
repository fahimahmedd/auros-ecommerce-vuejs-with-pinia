<template>
  <v-container fluid class="d-flex ga-8">
    <div class="product-side-category">
      <SideCategory />
    </div>
    <div class="all-product-container mt-1">
      <v-row>
        <v-col class="pa-2" cols="3" v-for="(product, index) in allProduct" :key="index">
          <ProductItem :height="210" :product-item="product" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import ProductItem from "../product/ProductItem.vue";

const allProduct = ref([
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
]);
</script>

<style lang="scss" scoped></style>
