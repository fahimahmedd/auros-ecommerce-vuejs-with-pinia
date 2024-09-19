<template>
  <div class="authentication-graphic-warpper position-relative">
    <div class="lamp">
      <v-img
        src="../../assets/images/authentication/lamp.svg"
        height="200"
        width="180"
      ></v-img>
    </div>
    <div class="graphic-content text-center">
      <!-- <div class="text-h4 font-weight-black text-uppercase">Welcome</div> -->
      <v-img src="../../assets/images/logo/logo.svg" width="200" class="mx-auto mb-5">
      </v-img>
      <div class="text-subtitle-1 mt-2">
        Auros is a fast-growing Global Furniture Brand <br />
        with customers and connoisseurs around the globe.
      </div>
    </div>
    <v-img src="../../assets/images/feature/d.png"></v-img>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.authentication-graphic-warpper {
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(circle, #e8cd7e, #edd493, #f2dca7, #f5e3bc, #f8ebd1);
}
.lamp {
  position: absolute;
  top: -20px;
  left: 0;
}
.graphic-content {
  position: relative;
  top: 120px;
}
</style>
