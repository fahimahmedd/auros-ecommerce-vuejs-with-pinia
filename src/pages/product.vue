<template>
  <Header />
  <PageIntro />
  <AllProduct />
  <v-btn @click="clickConsole"> CLick </v-btn>
</template>

<script setup>
import AllProduct from "@/components/homePageSection/AllProduct.vue";
import PageIntro from "@/components/pageExist/PageIntro.vue";

import { onMounted } from "vue";
import { useProductStore } from "@/stores/useProductStore";

const productStore = useProductStore();
const { products, fetchAllProducts } = productStore;

onMounted(async () => {
  await fetchAllProducts();
});

const clickConsole = () => {
  console.log("Products after fetch:", products);
};
</script>

<style lang="scss" scoped></style>
