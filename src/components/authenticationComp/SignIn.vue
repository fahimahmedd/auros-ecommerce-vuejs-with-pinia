<template>
  <v-card width="100%" max-width="400" elevation="0" class="pl-8">
    <div class="text-h5 font-weight-black text-uppercase text-center">Sign In</div>
    <v-divider class="my-5"></v-divider>

    <div class="text-subtitle-1 text-medium-emphasis mt-8">Email Address</div>
    <v-text-field prepend-inner-icon="mdi-email" class="mt-3"></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password

      <a
        class="text-caption text-subtitle-2 font-weight-medium text-decoration-none primary-color"
        href="#"
      >
        Forgot password?</a
      >
    </div>
    <v-text-field
      type="password"
      prepend-inner-icon="mdi-lock"
      class="mt-3"
    ></v-text-field>
    <v-card-text class="d-none text-medium-emphasis text-caption pa-2 assh-bg-color">
      Warning: After 3 consecutive failed login attempts,
    </v-card-text>

    <v-btn color="primary" class="mt-5" size="large" variant="tonal" block>
      Sign In
    </v-btn>
    <div
      class="text-subtitle-2 mt-5 text-center font-weight-medium text-decoration-none"
      href="#"
    >
      <span class="cursor-pointer" @click="$router.push('/authentication/signup')"
        >Don't have an account ? SIGN UP now</span
      >
    </div>
  </v-card>
</template>

<script setup></script>

<style scoped lang="scss"></style>
