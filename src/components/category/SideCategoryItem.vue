<template>
  <v-list-item color="primary" min-height="auto" :value="categoryItem.title">
    <template class="pa-0" v-slot:prepend="{ isActive }">
      <v-list-item-action start>
        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
      </v-list-item-action>
    </template>

    <v-list-item-title>
      {{ categoryItem.title }}
      <span class="ml-2 font-weight-light" style="font-size: 12px">
        ( {{ categoryItem.itemQuantity }} )
      </span>
    </v-list-item-title>
  </v-list-item>
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
