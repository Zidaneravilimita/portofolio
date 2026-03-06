<template>
  <section class="bg-slate-950 text-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h1 class="text-5xl font-bold mb-4">Mon Curriculum Vitae</h1>
        <p class="text-slate-400 text-lg mb-8">Développeur Full Stack Senior avec 5+ années d'expérience</p>
        <button @click="downloadCV" class="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition">
          📥 Télécharger en PDF
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="100">
          <div class="text-4xl font-bold mb-2">5+</div>
          <p class="opacity-90">Années d'expérience</p>
        </div>
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="200">
          <div class="text-4xl font-bold mb-2">50+</div>
          <p class="opacity-90">Projets livrés</p>
        </div>
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="300">
          <div class="text-4xl font-bold mb-2">30+</div>
          <p class="opacity-90">Clients satisfaits</p>
        </div>
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="400">
          <div class="text-4xl font-bold mb-2">4</div>
          <p class="opacity-90">Certifications</p>
        </div>
      </div>

      <div class="bg-slate-900 rounded-lg shadow-lg p-8 md:p-12">
        <!-- Expérience -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">💼</div>
            <h2 class="text-3xl font-bold">Expérience Professionnelle</h2>
          </div>

          <div class="mb-8 pl-6 border-l-4 border-sky-400" data-aos="fade-left">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">Développeur Full Stack Senior</h3>
              <span class="bg-sky-900 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold">2022 - Présent</span>
            </div>
            <p class="text-sky-400 font-semibold mb-3">TechCorp Solutions | Paris, France</p>
            <ul class="text-slate-400 space-y-2">
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Conception et développement d'applications web complètes avec Vue.js et Node.js</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Leadership d'une équipe de 5 développeurs et mentorat technique</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Optimisation des performances et amélioration de l'expérience utilisateur</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Mise en place de bonnes pratiques, standards de code et CI/CD</li>
            </ul>
          </div>

          <div class="mb-8 pl-6 border-l-4 border-sky-400" data-aos="fade-left" data-aos-delay="200">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">Développeur Full Stack</h3>
              <span class="bg-sky-900 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold">2020 - 2022</span>
            </div>
            <p class="text-sky-400 font-semibold mb-3">WebDev Agency | Paris, France</p>
            <ul class="text-slate-400 space-y-2">
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Développement de sites web responsifs et applications SPA pour 20+ clients</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Intégration de designs complexes et création d'interfaces utilisateur modernes</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Gestion des bases de données (SQL/NoSQL) et création d'APIs REST</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Collaboration étroite avec designers, product managers et clients</li>
            </ul>
          </div>

          <div class="pl-6 border-l-4 border-sky-400" data-aos="fade-left" data-aos-delay="400">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">Développeur Frontend</h3>
              <span class="bg-sky-900 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold">2018 - 2020</span>
            </div>
            <p class="text-sky-400 font-semibold mb-3">StartUp Innovations | Lyon, France</p>
            <ul class="text-slate-400 space-y-2">
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Développement d'interfaces utilisateur modernes avec React et Vue.js</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Responsive design et optimisation mobile (mobile-first approach)</li>
              <li class="flex items-start"><span class="text-sky-400 mr-3 font-bold">▸</span>Tests unitaires, intégration continue et déploiement automatisé</li>
            </ul>
          </div>
        </section>

        <!-- Formation -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">🎓</div>
            <h2 class="text-3xl font-bold">Formation</h2>
          </div>

          <div class="mb-8 pl-6 border-l-4 border-sky-400" data-aos="fade-left">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">Master Développement Web</h3>
              <span class="bg-sky-900 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold">2019</span>
            </div>
            <p class="text-sky-400 font-semibold mb-2">Institut Supérieur de l'Informatique</p>
            <p class="text-slate-400">Spécialisation architectures web scalables, technologies modernes et DevOps</p>
          </div>

          <div class="pl-6 border-l-4 border-sky-400" data-aos="fade-left" data-aos-delay="200">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">Licence Informatique</h3>
              <span class="bg-sky-900 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold">2017</span>
            </div>
            <p class="text-sky-400 font-semibold mb-2">Université Paris-Diderot</p>
            <p class="text-slate-400">Spécialisation en développement web, génie logiciel et algorithmique</p>
          </div>
        </section>

        <!-- Certifications -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">🏆</div>
            <h2 class="text-3xl font-bold">Certifications</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="100">
              <div class="flex items-start gap-3 mb-3">
                <span class="text-2xl">⭐</span>
                <div>
                  <h4 class="font-bold mb-1">AWS Certified Solutions Architect</h4>
                  <p class="text-slate-400 text-sm">Amazon Web Services - 2023</p>
                </div>
              </div>
              <p class="text-slate-400 text-sm">Architecture et déploiement sur AWS</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="200">
              <div class="flex items-start gap-3 mb-3">
                <span class="text-2xl">⭐</span>
                <div>
                  <h4 class="font-bold mb-1">Vue.js 3 Professional</h4>
                  <p class="text-slate-400 text-sm">Vue School - 2023</p>
                </div>
              </div>
              <p class="text-slate-400 text-sm">Développement avancé avec Vue.js 3</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="300">
              <div class="flex items-start gap-3 mb-3">
                <span class="text-2xl">⭐</span>
                <div>
                  <h4 class="font-bold mb-1">Scrum Master Certified</h4>
                  <p class="text-slate-400 text-sm">Scrum Alliance - 2022</p>
                </div>
              </div>
              <p class="text-slate-400 text-sm">Gestion agile et méthodologie Scrum</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="400">
              <div class="flex items-start gap-3 mb-3">
                <span class="text-2xl">⭐</span>
                <div>
                  <h4 class="font-bold mb-1">Docker Certified Associate</h4>
                  <p class="text-slate-400 text-sm">Docker - 2022</p>
                </div>
              </div>
              <p class="text-slate-400 text-sm">Containerization et orchestration</p>
            </div>
          </div>
        </section>

        <!-- Langues -->
        <section>
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">🌍</div>
            <h2 class="text-3xl font-bold">Langues</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="100">
              <h4 class="font-bold mb-3 text-lg">Français</h4>
              <div class="bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div class="bg-sky-400 h-full" style="width: 100%"></div>
              </div>
              <p class="text-slate-400 text-sm font-semibold">Natif</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="200">
              <h4 class="font-bold mb-3 text-lg">Anglais</h4>
              <div class="bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div class="bg-sky-400 h-full" style="width: 85%"></div>
              </div>
              <p class="text-slate-400 text-sm font-semibold">Courant (B2)</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="300">
              <h4 class="font-bold mb-3 text-lg">Allemand</h4>
              <div class="bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div class="bg-sky-400 h-full" style="width: 60%"></div>
              </div>
              <p class="text-slate-400 text-sm font-semibold">Intermédiaire (B1)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const downloadCV = () => {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,%0D%0A%0D%0ACV%20-%20Developpeur%20Full%20Stack%0D%0A%0D%0APour%20telecharger%20votre%20vrai%20CV%2C%20veuillez%20remplacer%20ce%20fichier%20avec%20votre%20CV%20PDF.')
  element.setAttribute('download', 'CV_Developpeur.pdf')
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
</style>
