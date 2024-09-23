<template>
  <v-app>
    <Header v-if="!signInPage && !signUpPage" />
    <v-main>
      <router-view />
    </v-main>
    <CartDrawer />
  </v-app>
</template>

<script setup>
import Header from "@/components/header/Header.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import CartDrawer from "@/components/cart/CartDrawer.vue";

const route = useRoute();

const signInPage = computed(() => route.path === "/authentication/signin");
const signUpPage = computed(() => route.path === "/authentication/signup");
</script>
