<template>
  <nav class="sticky top-0 z-50 bg-slate-900 shadow-lg">
    <div class="max-w-7xl mx-auto px-5 h-20 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-white hover:text-sky-400 transition-all duration-300 transform hover:scale-105 flex-shrink-0">
        Portfolio
      </router-link>

      <button
        class="md:hidden flex flex-col gap-1.5 w-8 h-8 cursor-pointer"
        @click="toggleMenu"
        :class="{ active: isOpen }"
      >
        <span class="h-0.5 w-full bg-white rounded transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span class="h-0.5 w-full bg-white rounded transition-all duration-300" :class="{ 'opacity-0': isOpen }"></span>
        <span class="h-0.5 w-full bg-white rounded transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>

      <ul class="hidden md:flex list-none gap-8 m-0 p-0 flex-1 justify-center">
        <li class="nav-item">
          <router-link to="/" class="text-white font-medium hover:text-sky-400 transition-all duration-300 router-link-active:text-sky-400 relative group">
            Accueil
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="text-white font-medium hover:text-sky-400 transition-all duration-300 router-link-active:text-sky-400 relative group">
            À propos
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="text-white font-medium hover:text-sky-400 transition-all duration-300 router-link-active:text-sky-400 relative group">
            Compétences
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="text-white font-medium hover:text-sky-400 transition-all duration-300 router-link-active:text-sky-400 relative group">
            Projets
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="text-white font-medium hover:text-sky-400 transition-all duration-300 router-link-active:text-sky-400 relative group">
            Contact
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cv" class="text-white font-medium hover:text-sky-400 transition-all duration-300 router-link-active:text-sky-400 relative group">
            CV
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <Transition
      name="slide-down"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-if="isOpen" class="md:hidden bg-slate-900 border-t border-slate-700">
        <ul class="flex flex-col list-none m-0 p-0">
          <li class="border-b border-slate-700 mobile-nav-item">
            <router-link to="/" class="block px-5 py-4 text-white font-medium hover:bg-slate-800 transition-all duration-300 transform hover:translate-x-2" @click="closeMenu">Accueil</router-link>
          </li>
          <li class="border-b border-slate-700 mobile-nav-item">
            <router-link to="/about" class="block px-5 py-4 text-white font-medium hover:bg-slate-800 transition-all duration-300 transform hover:translate-x-2" @click="closeMenu">À propos</router-link>
          </li>
          <li class="border-b border-slate-700 mobile-nav-item">
            <router-link to="/skills" class="block px-5 py-4 text-white font-medium hover:bg-slate-800 transition-all duration-300 transform hover:translate-x-2" @click="closeMenu">Compétences</router-link>
          </li>
          <li class="border-b border-slate-700 mobile-nav-item">
            <router-link to="/projects" class="block px-5 py-4 text-white font-medium hover:bg-slate-800 transition-all duration-300 transform hover:translate-x-2" @click="closeMenu">Projets</router-link>
          </li>
          <li class="border-b border-slate-700 mobile-nav-item">
            <router-link to="/contact" class="block px-5 py-4 text-white font-medium hover:bg-slate-800 transition-all duration-300 transform hover:translate-x-2" @click="closeMenu">Contact</router-link>
          </li>
          <li class="mobile-nav-item">
            <router-link to="/cv" class="block px-5 py-4 text-white font-medium hover:bg-slate-800 transition-all duration-300 transform hover:translate-x-2" @click="closeMenu">CV</router-link>
          </li>
        </ul>
      </div>
    </Transition>
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
.nav-item {
  position: relative;
}

.nav-item a {
  position: relative;
  padding-bottom: 2px;
}

.mobile-nav-item {
  overflow: hidden;
}

.mobile-nav-item a {
  position: relative;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-item {
  animation: fadeInUp 0.6s ease-out forwards;
}

.nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-item:nth-child(2) { animation-delay: 0.2s; }
.nav-item:nth-child(3) { animation-delay: 0.3s; }
.nav-item:nth-child(4) { animation-delay: 0.4s; }
.nav-item:nth-child(5) { animation-delay: 0.5s; }
.nav-item:nth-child(6) { animation-delay: 0.6s; }

.nav-item {
  opacity: 0;
}
</style>
