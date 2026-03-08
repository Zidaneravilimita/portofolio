<template>
  <section class="bg-slate-950 text-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-5xl font-bold mb-4 text-center">Mes Projets</h1>
      <p class="text-center text-slate-400 text-xl mb-16 max-w-2xl mx-auto">
        Découvrez une sélection de mes meilleures réalisations. Chaque projet représente une opportunity
        d'innovation et d'excellence.
      </p>

      <!-- Filter Buttons -->
      <div class="flex justify-center gap-4 mb-12 flex-wrap">
        <button
          v-for="tech in technologies"
          :key="tech"
          @click="selectedTech = selectedTech === tech ? null : tech"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            selectedTech === tech
              ? 'bg-sky-400 text-slate-900'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          ]"
        >
          {{ tech }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          data-aos="fade-up"
        >
          <div class="h-48 bg-gradient-to-br from-sky-400 to-blue-600 overflow-hidden relative group">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-400 mb-4 line-clamp-2">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="bg-sky-900 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">
                {{ tag }}
              </span>
            </div>

            <div class="flex gap-3">
              <a :href="project.demo" target="_blank" class="flex-1 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold transition">Voir en ligne</a>
              <a :href="project.github" target="_blank" class="flex-1 border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-slate-900 px-4 py-2 rounded-lg text-center text-sm font-semibold transition">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import AOS from "aos"
import "aos/dist/aos.css"
import { onMounted } from "vue"

onMounted(() => {
  AOS.init({
    duration: 1200,
    once: true
  })
})

const selectedTech = ref(null)

const projectsList = ref([
  {
    id: 1,
    title: 'Portfolio',
    description: 'Mon portfolio personnel présentant mes projets et compétences en développement web.',
    image: '/project_images/portofolio.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    github: 'https://github.com/Zidaneravilimita/portfolio'
  },
  {
    id: 2,
    title: 'TODO-LIST',
    description: 'Projet d\'exercice du FRAMEWORK JAVASCRIPT - Application de gestion de tâches.',
    image: '/project_images/to-do-list.jpg',
    tags: ['JavaScript', 'Framework'],
    demo: '#',
    github: 'https://github.com/Zidaneravilimita/TODO-LIST'
  },
  {
    id: 3,
    title: 'Agence de Voyage',
    description: 'Site web pour une agence de voyage avec présentation des destinations et services.',
    image: '/project_images/agence-de-voyage.jpg',
    tags: ['HTML', 'CSS'],
    demo: '#',
    github: 'https://github.com/Zidaneravilimita/Agence'
  },
  {
    id: 4,
    title: 'Black Panther',
    description: 'Projet thématique inspiré de Black Panther avec design moderne.',
    image: '/project_images/black_panther.jpg',
    tags: ['HTML', 'CSS'],
    demo: '#',
    github: 'https://github.com/Zidaneravilimita/Black-Panther'
  },
  {
    id: 5,
    title: 'Python Projects',
    description: 'Projets et exercices de programmation en Python.',
    image: '/project_images/python_logo.png',
    tags: ['Python'],
    demo: '#',
    github: 'https://github.com/Zidaneravilimita/python'
  },
  {
    id: 6,
    title: 'Mon Premier Page',
    description: 'Premier projet sur Git - Page web simple et élégante.',
    image: 'https://via.placeholder.com/300x200?text=First+Page',
    tags: ['HTML'],
    demo: '#',
    github: 'https://github.com/Zidaneravilimita/Mon_premier_page'
  }
])

const technologies = computed(() => {
  const allTags = new Set()
  projectsList.value.forEach(project => {
    project.tags.forEach(tag => allTags.add(tag))
  })
  return Array.from(allTags).sort()
})

const filteredProjects = computed(() => {
  if (!selectedTech.value) return projectsList.value
  return projectsList.value.filter(project =>
    project.tags.includes(selectedTech.value)
  )
})
</script><style scoped>
</style>
