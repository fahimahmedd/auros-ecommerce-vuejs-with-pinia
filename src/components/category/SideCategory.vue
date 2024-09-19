<template>
  <div class="side-category-container"></div>
  <v-card width="260" min-height="600" elevation="2" rounded="lg">
    <v-list select-strategy="classic">
      <v-list-subheader>Category List</v-list-subheader>
      <v-divider class="mb-4"></v-divider>
      <div v-for="(item, index) in category" :key="index">
        <SideCategoryItem :category-item="item" />
      </div>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import SideCategoryItem from "./SideCategoryItem.vue";

const category = ref([
  {
    title: "Living Room",
    itemQuantity: "78 Items",
  },
  {
    title: "Bedroom",
    itemQuantity: "120 Items",
  },
  {
    title: "Business",
    itemQuantity: "57 Items",
  },
  {
    title: "Home Office",
    itemQuantity: "90 Items",
  },
  {
    title: "Lighting",
    itemQuantity: "70 Items",
  },
  {
    title: "Kitchen",
    itemQuantity: "80 Items",
  },
  {
    title: "Restaurant",
    itemQuantity: "190 Items",
  },
]);
</script>

<style lang="scss" scoped></style>
