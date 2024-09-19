<template>
  <v-card rounded="lg" elevation="0" class="pa-2" width="100%" link>
    <v-card-item class="text-center">
      <v-img :src="categoryItem.image" max-height="65"></v-img>
      <div class="text-subtitle-1 my-1 mt-5 font-weight-bold">
        {{ categoryItem.title }}
      </div>
      <v-card-subtitle> {{ categoryItem.itemQuantity }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  categoryItem: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
