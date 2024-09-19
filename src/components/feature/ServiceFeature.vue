<template>
  <div
    class="service-feature"
    style="background-image: url('src/assets/images/feature/servFeature.webp')"
  >
    <v-container>
      <div class="service-feature-wrapper">
        <div class="text-h3 text-uppercase font-weight-black secondary-font text-center">
          YOU'RE PAYING TOO MUCH
        </div>
        <p class="text-center">
          Simply become a member of the Club and start enjoying the benefits of shopping
        </p>
        <v-row class="mt-10">
          <v-col cols="3" v-for="(item, index) in serviceFeature" :key="index">
            <ServiceFeatureCard :service-feature="item" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import ServiceFeatureCard from "./ServiceFeatureCard.vue";
import { ref } from "vue";

const serviceFeature = ref([
  {
    title: "FAST DELIVERY",
    detail: "Free shipping on all orders over",
    image: "src/assets/images/feature/shipped.png",
  },
  {
    title: "Return Plicy",
    detail: "You can return your purchase",
    image: "src/assets/images/feature/purchase.png",
  },
  {
    title: "EXTENSIVE STOCKS",
    detail: "Get in touch with any query",
    image: "src/assets/images/feature/in-stock.png",
  },
  {
    title: "Customer Support",
    detail: "We are here to serve you",
    image: "src/assets/images/feature/customer-service.png",
  },
]);
</script>

<style scoped lang="scss">
.service-feature {
  padding: 120px 0;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 100px 0;
  position: relative;
  z-index: 1;
  background-attachment: fixed;
  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}
.service-feature-wrapper {
  padding: 80px 40px;
  background-color: #ffffffec;
  border-radius: 26px;
  min-height: 400px;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
