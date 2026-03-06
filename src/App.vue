<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen bg-white">
    <Navigation />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
