<template>
  <!-- <v-sheet v-if="storeDrawer.drawer" elevation="2" height="100%" width="360"></v-sheet> -->
  <v-navigation-drawer
    v-model="storeDrawer.drawer"
    location="right"
    temporary
    width="360"
    elevation="2"
    class="n-v"
  >
    <v-sheet height="100%" width="100%" class="position-relative">
      <v-sheet class="cart-drawer-header d-flex justify-space-between align-center px-3">
        <div class="text-h6 font-weight-bold">Shoping Cart</div>
        <v-btn
          color="primary"
          variant="tonal"
          icon="mdi-close"
          elevation="0"
          size="small"
        ></v-btn>
      </v-sheet>
      <div class="cart-drawer-content"></div>
      <v-sheet class="cart-drawer-footer">
        <div
          class="cart-proceed-container d-flex justify-space-between align-center pa-2"
        >
          <div class="proceed-left d-flex align-center">
            <span class="mdi mdi-cart"></span>
            <div class="text-h6 ml-2 color-white font-weight-bold secondary-font">
              3 Items
            </div>
          </div>
          <div class="proceed-right text-end secondary-font">
            <div class="text-subtitle-1 color-white font-weight-bold">
              Proceed Checkout
            </div>
            <div class="text-subtitle-2 color-white font-weight-bold">1200 BDT</div>
          </div>
        </div>
      </v-sheet>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script setup>
import { useStoreDrawerCart } from "@/stores/storeDrawerCart";

const storeDrawer = useStoreDrawerCart();
</script>

<style lang="scss" scoped>
.v-navigation-drawer__scrim {
  opacity: 0.2;
  z-index: 9999999 !important;
}
.v-navigation-drawer {
  z-index: 99999999 !important;
  transform: none !important;
  right: -365px !important;
  transition: right 0.3s ease !important;
  position: fixed !important;
  height: 100vh !important;
  top: 0 !important;
}
.v-navigation-drawer--active {
  right: 0 !important;
}
.cart-drawer-header {
  position: fixed;
  top: 0;
  width: 360px;
  height: 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.cart-drawer-content {
  padding: 70px 20px 80px 20px;
}

.cart-drawer-footer {
  position: fixed;
  bottom: 0;
  width: 360px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 10px;
  border-top: 1px solid #c3c3c375;
}
.cart-proceed-container {
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 6px;
}
.proceed-left .mdi {
  height: 35px;
  width: 35px;
  background-color: #f3f3f338;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 22px;
}
</style>
