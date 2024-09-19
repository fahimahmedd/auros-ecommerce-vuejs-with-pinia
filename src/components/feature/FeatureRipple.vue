<template>
  <div class="ripple-content" @click="rippleToggale">
    <span class="mdi mdi-plus"></span>
    <div class="ripple-item-content" v-if="ripple">
      <div class="ripple-item">
        <div class="text-h6 secondary-font font-weight-bold">{{ rippleItem.name }}</div>
        <p class="mt-1">
          Form
          <span
            class="font-weight-black secondary-font"
            style="font-size: 20px; color: #f3f3f3"
            >{{ rippleItem.price }}</span
          >
          BDT
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const porps = defineProps({
  rippleItem: {
    type: Object,
    required: true,
  },
});

const ripple = ref(false);

const rippleToggale = () => {
  ripple.value = !ripple.value;
  console.log("click");
};
</script>

<style lang="scss" scoped>
.ripple-item-content {
  position: absolute;
  left: 65px;
  top: -10px;

  .ripple-item {
    min-width: 260px;
    background-color: #000;
    border-radius: 10px;
    color: #fff;
    z-index: 2;
    padding: 20px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      height: 30px;
      width: 30px;
      background-color: #000;
      top: 20px;
      left: -5px;
      z-index: -1;
      border-radius: 4px;
      transform: rotate(45deg);
    }
  }
}

.product-riiple {
  position: absolute;
  top: 60px;
  left: 250px;
}

.ripple-content {
  height: 35px;
  width: 35px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  position: relative;
  cursor: pointer;
  &:hover .mdi {
    transform: rotate(-45deg);
    transition: all 200ms linear;
  }
}

.ripple-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  border-radius: 50%;
}

.ripple-content:before,
.ripple-content:after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: solid 3px var(--secondary-color);
  border-radius: 50%;
}

.ripple-content:before {
  animation: ripple 2s linear infinite;
}

.ripple-content:after {
  animation: ripple 2s 1s linear infinite;
}

@keyframes ripple {
  to {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
