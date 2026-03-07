<template>
  <section class="min-h-screen mt-5 bg-slate-900 text-white flex items-center">
    
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

      <!-- Texte -->
      <div data-aos="fade-right" class="mr-20 -ml-4">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">
          Bonjour !
          <br />
          Je suis
          <span class="text-sky-400">TAHIENDRAZA Zidane</span>
        </h1>

        <h2 class="mt-4 text-2xl text-slate-300">
          Full Stack JavaScript Developer
        </h2>

        <p class="mt-6 text-slate-400 leading-relaxed">
          Étudiant en Master Télécommunication et Réseaux, passionné par
          le développement web et mobile.
        </p>

        <div class="mt-8 flex gap-4">
          
          <a href="#projects"
            class="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25">
            <span class="relative z-10">Voir mes projets</span>
            <div class="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
          </a>

          <a href="#contact"
            class="group relative px-10 py-5 border-2 border-sky-400 text-sky-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20">
            <span class="relative z-10 transition-colors duration-300 group-hover:text-white">Me contacter</span>
            <div class="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div class="absolute inset-0 border-2 border-sky-300 rounded-lg scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

        </div>
      </div>

      <!-- Image -->
      <div class="flex justify-center" data-aos="fade-left">

        <div
          class="w-82 h-121 hover:scale-105 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-end justify-center shadow-3xl pb-8 relative overflow-hidden">

          <div class="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 rounded-full animate-spin"></div>
          <div class="absolute inset-2 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
          
          <img
            src="/profile.png"
            alt="profile"
            class="w-80 h-120 rounded-full object-cover border-2 border-slate-800 relative z-10"
          />

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import AOS from "aos"
import "aos/dist/aos.css"
import { onMounted } from "vue"

onMounted(() => {
  AOS.init({
    duration: 1200,
    once: true
  })
})
</script>
