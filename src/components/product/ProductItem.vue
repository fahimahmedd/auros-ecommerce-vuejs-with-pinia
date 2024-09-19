<template>
  <v-card elevation="0" class="border">
    <v-img :height="`${height}px`" :src="productItem.image"></v-img>
    <v-card-item class="pb-4 bg-ash">
      <div class="text-subtitle-1 font-weight-bold secondary-font">
        {{ productItem.name }}
      </div>
      <div class="text-subtitle-2 secondary-font">{{ productItem.model }}</div>
      <div class="sell-content mt-2">
        <div class="text-h6 secondary-font font-weight-bold">
          {{ productItem.price }} BDT
        </div>

        <!-- <v-btn color="primary" class="mt-3 px-0" rounded="0" elevation="0" block>
          Add To Cart
        </v-btn> -->
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  height: {
    type: [String, Number], // Accept both string or number
    default: 300, // Set the default height to 300 if not provided
  },
  productItem: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.bg-ash {
  background-color: #f3f3f3;
}
</style>
