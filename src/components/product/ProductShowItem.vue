<template>
  <v-card elevation="0" color="#fff">
    <v-img height="220" :src="showItem.image"></v-img>
    <v-card-item class="pb-4 bg-ash">
      <div class="text-subtitle-1 font-weight-bold secondary-font">
        {{ showItem.name }}
      </div>
      <div class="text-subtitle-2 secondary-font">{{ showItem.model }}</div>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  showItem: {
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
