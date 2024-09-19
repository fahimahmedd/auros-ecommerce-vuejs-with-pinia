<template>
  <v-container>
    <div
      class="product-feature overflow-hidden"
      style="background-image: url('src/assets/images/feature/product-feature.jpg')"
    >
      <div v-for="(item, index) in productRipple" :key="index" :class="item.positionName">
        <FeatureRipple :rippleItem="item" />
      </div>

      <!-- <div class="product-riiple-2">
        <FeatureRipple />
      </div> -->
    </div>
  </v-container>
</template>

<script setup>
const productRipple = ref([
  { positionName: "product-riiple-1", name: "Artiss Floor Lamp LED", price: "8990" },
  { positionName: "product-riiple-2", name: "Soft Single Sofa", price: "9990" },
  {
    positionName: "product-riiple-3",
    name: "Fabric Triple Seat Sofa",
    price: "22990",
  },
  { positionName: "product-riiple-4", name: "Round Tea Table ", price: "9990" },
]);
</script>

<style lang="scss" scoped>
.product-feature {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 22px;
  margin-top: 70px;
  margin-bottom: 70px;
  height: 560px;
  position: relative;
}
.product-riiple-1 {
  position: absolute;
  top: 150px;
  left: 250px;
}
.product-riiple-2 {
  position: absolute;
  bottom: 140px;
  left: 140px;
}
.product-riiple-3 {
  position: absolute;
  bottom: 220px;
  left: 50%;
  transform: translateX(-50%);
}
.product-riiple-4 {
  position: absolute;
  bottom: 70px;
  right: 38%;
  transform: translateX(-38%);
}
</style>
