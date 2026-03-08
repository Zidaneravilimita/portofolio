<template>
  <section class="bg-slate-950 text-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-5xl font-bold mb-4 text-center">Mes Compétences</h1>
      <p class="text-center text-slate-400 text-xl mb-16 max-w-2xl mx-auto">
        Un aperçu de mes compétences techniques et de mon expérience dans le développement web.
      </p>

      <!-- Frontend Skills -->
      <div class="mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-sky-400 mb-8 text-center">Frontend</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                V
              </div>
              <div>
                <h3 class="text-xl font-semibold">Vue.js</h3>
                <p class="text-slate-400 text-sm">Framework JavaScript</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-sky-500 h-2 rounded-full" style="width: 85%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                R
              </div>
              <div>
                <h3 class="text-xl font-semibold">React</h3>
                <p class="text-slate-400 text-sm">Framework JavaScript</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                H
              </div>
              <div>
                <h3 class="text-xl font-semibold">HTML5</h3>
                <p class="text-slate-400 text-sm">Markup Language</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-orange-500 h-2 rounded-full" style="width: 95%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                C
              </div>
              <div>
                <h3 class="text-xl font-semibold">CSS3</h3>
                <p class="text-slate-400 text-sm">Styling Language</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                J
              </div>
              <div>
                <h3 class="text-xl font-semibold">JavaScript</h3>
                <p class="text-slate-400 text-sm">Programming Language</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-yellow-500 h-2 rounded-full" style="width: 88%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                T
              </div>
              <div>
                <h3 class="text-xl font-semibold">Tailwind CSS</h3>
                <p class="text-slate-400 text-sm">CSS Framework</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-cyan-500 h-2 rounded-full" style="width: 82%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Backend Skills -->
      <div class="mb-16" data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-3xl font-bold text-sky-400 mb-8 text-center">Backend</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                N
              </div>
              <div>
                <h3 class="text-xl font-semibold">Node.js</h3>
                <p class="text-slate-400 text-sm">Runtime Environment</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                P
              </div>
              <div>
                <h3 class="text-xl font-semibold">Python</h3>
                <p class="text-slate-400 text-sm">Programming Language</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-purple-500 h-2 rounded-full" style="width: 70%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                E
              </div>
              <div>
                <h3 class="text-xl font-semibold">Express.js</h3>
                <p class="text-slate-400 text-sm">Web Framework</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-red-500 h-2 rounded-full" style="width: 72%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools & Others -->
      <div data-aos="fade-up" data-aos-delay="400">
        <h2 class="text-3xl font-bold text-sky-400 mb-8 text-center">Outils & Autres</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                G
              </div>
              <div>
                <h3 class="text-xl font-semibold">Git</h3>
                <p class="text-slate-400 text-sm">Version Control</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-gray-500 h-2 rounded-full" style="width: 85%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                F
              </div>
              <div>
                <h3 class="text-xl font-semibold">Firebase</h3>
                <p class="text-slate-400 text-sm">Backend-as-a-Service</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-orange-600 h-2 rounded-full" style="width: 78%"></div>
            </div>
          </div>

          <div class="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-sky-500 transition-all duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                M
              </div>
              <div>
                <h3 class="text-xl font-semibold">MongoDB</h3>
                <p class="text-slate-400 text-sm">Database</p>
              </div>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 73%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1200,
    once: true
  })
})
</script>

<style scoped>
</style>
