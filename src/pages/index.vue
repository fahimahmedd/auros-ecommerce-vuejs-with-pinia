<template>
  <Header />
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
  <CartDrawer />
</template>

<script setup>
import CartDrawer from "@/components/cart/CartDrawer.vue";
import Category from "@/components/category/Category.vue";
import Feature from "@/components/feature/Feature.vue";
import ProductFeature from "@/components/feature/ProductFeature.vue";
import ServiceFeature from "@/components/feature/ServiceFeature.vue";
import Header from "@/components/header/Header.vue";
import Hero from "@/components/hero/Hero.vue";
import BestSellingProduct from "@/components/homePageSection/BestSellingProduct.vue";
import PopularProduct from "@/components/homePageSection/PopularProduct.vue";
import ProductShow from "@/components/homePageSection/ProductShow.vue";
import { useStoreDrawerCart } from "@/stores/storeDrawerCart";

const storeDrawer = useStoreDrawerCart();
</script>
