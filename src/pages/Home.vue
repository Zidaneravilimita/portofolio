<template>
  <section class="min-h-screen bg-slate-900 text-white flex items-center">
    
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

      <!-- Texte -->
      <div data-aos="fade-right">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
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
          Je développe des applications modernes avec
          Vue.js, React et Node.js.
        </p>

        <div class="mt-8 flex gap-4">
          
          <a href="#projects"
            class="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-lg font-semibold">
            Voir mes projets
          </a>

          <a href="#contact"
            class="border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition px-6 py-3 rounded-lg">
            Me contacter
          </a>

        </div>
      </div>

      <!-- Image -->
      <div class="flex justify-center" data-aos="fade-left">

        <div
          class="w-72 h-72 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">

          <img
            src="/profile.png"
            alt="profile"
            class="w-64 h-64 rounded-full object-cover border-4 border-slate-900"
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
