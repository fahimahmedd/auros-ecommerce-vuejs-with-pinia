<template>
  <v-container fluid class="pa-0">
    <div class="authentication-graphic">
      <v-row class="align-center ma-0">
        <v-col cols="8" class="pa-0">
          <AuthenticationGraphic />
        </v-col>
        <v-col cols="4" class="pa-0">
          <SignUp />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import AuthenticationGraphic from "@/components/authenticationComp/AuthenticationGraphic.vue";
</script>

<style scoped lang="scss"></style>
