<template>
  <!-- <Header /> -->
  <Hero />
  <Category />
  <Feature />
  <BestSellingProduct />
  <ProductFeature />
  <ProductShow />
  <HomeFeature />
  <PopularProduct />
  <ServiceFeature />
  <Footer />
</template>

<script setup>
import Category from "@/components/category/Category.vue";
import Feature from "@/components/feature/Feature.vue";
import ProductFeature from "@/components/feature/ProductFeature.vue";
import ServiceFeature from "@/components/feature/ServiceFeature.vue";
import Hero from "@/components/hero/Hero.vue";
import BestSellingProduct from "@/components/homePageSection/BestSellingProduct.vue";
import PopularProduct from "@/components/homePageSection/PopularProduct.vue";
import ProductShow from "@/components/homePageSection/ProductShow.vue";
import { useProductStore } from "@/stores/useProductStore";

const product = useProductStore();

console.log(product.data, "product Page");
</script>
