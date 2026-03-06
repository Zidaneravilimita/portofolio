<template>
  <nav class="sticky top-0 z-50 bg-slate-900 shadow-lg">
    <div class="max-w-7xl mx-auto px-5 h-20 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-white hover:text-sky-400 transition-colors flex-shrink-0">
        Portfolio
      </router-link>

      <button
        class="md:hidden flex flex-col gap-1.5 w-8 h-8 cursor-pointer"
        @click="toggleMenu"
        :class="{ active: isOpen }"
      >
        <span class="h-0.5 w-full bg-white rounded transition-all" :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span class="h-0.5 w-full bg-white rounded transition-all" :class="{ 'opacity-0': isOpen }"></span>
        <span class="h-0.5 w-full bg-white rounded transition-all" :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>

      <ul class="hidden md:flex list-none gap-8 m-0 p-0 ml-auto">
        <li>
          <router-link to="/" class="text-white font-medium hover:text-sky-400 transition-colors router-link-active:text-sky-400">Accueil</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white font-medium hover:text-sky-400 transition-colors router-link-active:text-sky-400">À propos</router-link>
        </li>
        <li>
          <router-link to="/skills" class="text-white font-medium hover:text-sky-400 transition-colors router-link-active:text-sky-400">Compétences</router-link>
        </li>
        <li>
          <router-link to="/projects" class="text-white font-medium hover:text-sky-400 transition-colors router-link-active:text-sky-400">Projets</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-white font-medium hover:text-sky-400 transition-colors router-link-active:text-sky-400">Contact</router-link>
        </li>
        <li>
          <router-link to="/cv" class="text-white font-medium hover:text-sky-400 transition-colors router-link-active:text-sky-400">CV</router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-slate-900 border-t border-slate-700">
      <ul class="flex flex-col list-none m-0 p-0">
        <li class="border-b border-slate-700">
          <router-link to="/" class="block px-5 py-4 text-white font-medium hover:bg-slate-800" @click="closeMenu">Accueil</router-link>
        </li>
        <li class="border-b border-slate-700">
          <router-link to="/about" class="block px-5 py-4 text-white font-medium hover:bg-slate-800" @click="closeMenu">À propos</router-link>
        </li>
        <li class="border-b border-slate-700">
          <router-link to="/skills" class="block px-5 py-4 text-white font-medium hover:bg-slate-800" @click="closeMenu">Compétences</router-link>
        </li>
        <li class="border-b border-slate-700">
          <router-link to="/projects" class="block px-5 py-4 text-white font-medium hover:bg-slate-800" @click="closeMenu">Projets</router-link>
        </li>
        <li class="border-b border-slate-700">
          <router-link to="/contact" class="block px-5 py-4 text-white font-medium hover:bg-slate-800" @click="closeMenu">Contact</router-link>
        </li>
        <li>
          <router-link to="/cv" class="block px-5 py-4 text-white font-medium hover:bg-slate-800" @click="closeMenu">CV</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
</style>
