<template>
  <section class="bg-slate-950 text-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-16 text-center">Mes Compétences</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Frontend -->
        <div data-aos="fade-up">
          <h2 class="text-2xl font-bold text-sky-400 mb-6 pb-3 border-b-4 border-sky-400">Frontend</h2>
          <div class="space-y-6">
            <div v-for="skill in frontendSkills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-slate-300">{{ skill.name }}</span>
                <span class="text-sky-400 font-bold text-sm">{{ skill.percent }}%</span>
              </div>
              <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-sky-400 rounded-full" :style="{ width: skill.percent + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 class="text-2xl font-bold text-sky-400 mb-6 pb-3 border-b-4 border-sky-400">Backend</h2>
          <div class="space-y-6">
            <div v-for="skill in backendSkills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-slate-300">{{ skill.name }}</span>
                <span class="text-sky-400 font-bold text-sm">{{ skill.percent }}%</span>
              </div>
              <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-sky-400 rounded-full" :style="{ width: skill.percent + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Outils & DevOps -->
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 class="text-2xl font-bold text-sky-400 mb-6 pb-3 border-b-4 border-sky-400">Outils & DevOps</h2>
          <div class="space-y-6">
            <div v-for="skill in toolsSkills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-slate-300">{{ skill.name }}</span>
                <span class="text-sky-400 font-bold text-sm">{{ skill.percent }}%</span>
              </div>
              <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-sky-400 rounded-full" :style="{ width: skill.percent + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div data-aos="fade-up" data-aos-delay="600">
          <h2 class="text-2xl font-bold text-sky-400 mb-6 pb-3 border-b-4 border-sky-400">Soft Skills</h2>
          <div class="space-y-6">
            <div v-for="skill in softSkills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-slate-300">{{ skill.name }}</span>
                <span class="text-sky-400 font-bold text-sm">{{ skill.percent }}%</span>
              </div>
              <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-sky-400 rounded-full" :style="{ width: skill.percent + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AOS from "aos"
import "aos/dist/aos.css"
import { onMounted } from "vue"

onMounted(() => {
  AOS.init({
    duration: 1200,
    once: true
  })
})

const frontendSkills = ref([
  { name: 'Vue.js', percent: 95 },
  { name: 'React', percent: 85 },
  { name: 'JavaScript / TypeScript', percent: 90 },
  { name: 'HTML5 / CSS3', percent: 92 },
  { name: 'Tailwind CSS', percent: 88 }
])

const backendSkills = ref([
  { name: 'Node.js / Express', percent: 88 },
  { name: 'Python', percent: 80 },
  { name: 'MongoDB / SQL', percent: 85 },
  { name: 'RESTful API', percent: 90 },
  { name: 'GraphQL', percent: 75 }
])

const toolsSkills = ref([
  { name: 'Git / GitHub', percent: 95 },
  { name: 'Docker', percent: 80 },
  { name: 'Webpack / Vite', percent: 85 },
  { name: 'AWS / Firebase', percent: 78 },
  { name: 'Linux / Terminal', percent: 85 }
])

const softSkills = ref([
  { name: 'Communication', percent: 90 },
  { name: 'Travail d\'équipe', percent: 92 },
  { name: 'Résolution de problèmes', percent: 88 },
  { name: 'Leadership', percent: 80 },
  { name: 'Gestion de projet', percent: 85 }
])
</script>

<style scoped>
</style>
