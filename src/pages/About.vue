<template>
  <section id="about" class="bg-slate-950 text-white py-20">

    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <!-- Image -->
      <div data-aos="fade-right" class="flex justify-center">
        <img
          src="/profile.png"
          alt="photo"
          class="w-80 rounded-2xl shadow-2xl border border-slate-800"
        />
      </div>

      <!-- Texte -->
      <div data-aos="fade-left">

        <h2 class="text-4xl font-bold mb-6">
          À propos de moi
        </h2>

        <p class="text-slate-400 leading-relaxed mb-4">
          Je suis <span class="text-sky-400 font-semibold">TAHIENDRAZA Zidane</span>,
          étudiant en <strong>Master Télécommunication et Réseaux</strong>.
          Je suis passionné par le développement d'applications web et mobiles
          modernes.
        </p>

        <p class="text-slate-400 leading-relaxed mb-4">
          J'aime créer des solutions numériques avec des technologies modernes
          comme <span class="text-sky-400">Vue.js</span>,
          <span class="text-sky-400">React</span>,
          <span class="text-sky-400">Node.js</span>
          et <span class="text-sky-400">Firebase</span>.
        </p>

        <p class="text-slate-400 leading-relaxed mb-6">
          Actuellement, je développe des projets web et mobiles afin
          d'améliorer mes compétences en développement full stack
          et en conception d'applications modernes.
        </p>

        <!-- Infos -->
        <div class="grid grid-cols-2 gap-4 text-sm">

          <div class="bg-slate-900 p-4 rounded-lg">
            🎓 <strong>Master</strong><br />
            Télécommunication & Réseaux
          </div>

          <div class="bg-slate-900 p-4 rounded-lg">
            💻 <strong>Domaine</strong><br />
            Full Stack JavaScript
          </div>

          <div class="bg-slate-900 p-4 rounded-lg">
            📍 <strong>Pays</strong><br />
            Madagascar
          </div>

          <div class="bg-slate-900 p-4 rounded-lg">
            🚀 <strong>Objectif</strong><br />
            Développeur professionnel
          </div>

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
