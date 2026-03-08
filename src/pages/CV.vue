<template>
  <section class="bg-slate-950 text-white py-20 pb-32">
    <div class="max-w-7xl mx-auto px-16">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h1 class="text-5xl font-bold mb-4">TAHIENDRAZA Ravilimita Zidane</h1>
        <p class="text-slate-400 text-lg mb-8">Développeur Full-Stack Junior</p>
        <button @click="downloadCV" class="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition">
          📥 Télécharger en PDF
        </button>
      </div>

      <!-- Profil -->
      <div class="bg-slate-800 rounded-lg p-8 mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-4 text-sky-400">PROFIL</h2>
        <p class="text-slate-300 leading-relaxed">
          Étudiant en Master One de Télécommunication et Réseau, et aussi spécialisé en développement web et mobile. Expérience pratique
          en React, React Native, Firebase, Supabase et MySQL à travers des projets académiques et un stage professionnel. Capable de
          concevoir des applications performantes, structurées et orientées utilisateur.
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="100">
          <div class="text-4xl font-bold mb-2">2+</div>
          <p class="opacity-90">Années d'expérience</p>
        </div>
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="200">
          <div class="text-4xl font-bold mb-2">10+</div>
          <p class="opacity-90">Projets réalisés</p>
        </div>
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="300">
          <div class="text-4xl font-bold mb-2">5+</div>
          <p class="opacity-90">Technologies maîtrisées</p>
        </div>
        <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-6 text-white text-center" data-aos="fade-up" data-aos-delay="400">
          <div class="text-4xl font-bold mb-2">1</div>
          <p class="opacity-90">Stage professionnel</p>
        </div>
      </div>

      <div class="bg-slate-900 rounded-lg shadow-lg p-12 md:p-16">
        <!-- Expérience -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">💼</div>
            <h2 class="text-3xl font-bold">Expérience Professionnelle</h2>
          </div>

          <div class="bg-slate-800 rounded-lg p-6 border-l-4 border-sky-400" data-aos="fade-left">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Développeur Web et Mobile</h3>
                <p class="text-sky-400 font-semibold mb-1">Stage Professionnel | Fianarantsoa, Madagascar</p>
                <p class="text-slate-400 text-sm mb-4">Juin 2024 - Août 2024 (3 mois)</p>
              </div>
              <div class="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                Stage
              </div>
            </div>
            
            <div class="space-y-4">
              <p class="text-slate-300 leading-relaxed">
                Développement d'applications web et mobiles dans un environnement professionnel. Participation active à tous les aspects du cycle de développement, de la conception à la mise en production.
              </p>
              
              <div>
                <h4 class="font-semibold text-sky-400 mb-3">Missions principales :</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-3">
                    <span class="text-sky-400 mt-1">▸</span>
                    <div>
                      <span class="text-slate-300 font-medium">Développement d'applications Android natives</span>
                      <p class="text-slate-400 text-sm mt-1">Utilisation de React Native pour créer des applications performantes et optimisées</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-sky-400 mt-1">▸</span>
                    <div>
                      <span class="text-slate-300 font-medium">Création de sites web dynamiques</span>
                      <p class="text-slate-400 text-sm mt-1">Développement avec PHP et MySQL pour des applications web interactives</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-sky-400 mt-1">▸</span>
                    <div>
                      <span class="text-slate-300 font-medium">Gestion de version avec Git</span>
                      <p class="text-slate-400 text-sm mt-1">Collaboration efficace avec l'équipe via GitHub et Git workflows</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-sky-400 mt-1">▸</span>
                    <div>
                      <span class="text-slate-300 font-medium">Conception et gestion de bases de données</span>
                      <p class="text-slate-400 text-sm mt-1">Optimisation des schémas MySQL pour de meilleures performances</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">React Native</span>
                <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">PHP</span>
                <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">MySQL</span>
                <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Git</span>
                <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">GitHub</span>
                <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Android Studio</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Formation -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">🎓</div>
            <h2 class="text-3xl font-bold">Formation Académique</h2>
          </div>

          <div class="space-y-8">
            <div class="bg-slate-800 rounded-lg p-6 border-l-4 border-sky-400" data-aos="fade-left">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Master One en Télécommunication et Réseau</h3>
                  <p class="text-sky-400 font-semibold mb-3">Université de Fianarantsoa | 2023 - 2024</p>
                </div>
                <div class="bg-sky-900 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold">
                  En cours
                </div>
              </div>
              <div class="space-y-3">
                <p class="text-slate-300 leading-relaxed">
                  Spécialisation en développement web et mobile, réseaux et télécommunications
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Réseaux</span>
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Télécommunications</span>
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Développement Web</span>
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Développement Mobile</span>
                </div>
              </div>
            </div>

            <div class="bg-slate-800 rounded-lg p-6 border-l-4 border-sky-400" data-aos="fade-left" data-aos-delay="200">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Licence Professionnelle en Télécommunication et Réseau</h3>
                  <p class="text-sky-400 font-semibold mb-3">Université de Fianarantsoa | 2020 - 2023</p>
                </div>
                <div class="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                  Obtenu
                </div>
              </div>
              <div class="space-y-3">
                <p class="text-slate-300 leading-relaxed">
                  Formation complète en télécommunications, réseaux et développement informatique
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Protocoles Réseaux</span>
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Administration Système</span>
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Programmation</span>
                  <span class="bg-slate-700 text-sky-300 text-xs px-2 py-1 rounded">Sécurité</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Compétences -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">💻</div>
            <h2 class="text-3xl font-bold">Compétences Techniques</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <h4 class="font-bold mb-4 text-sky-400 flex items-center gap-2">
                <span class="text-xl">🌐</span> Frontend
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">React</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">React Native</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">HTML/CSS</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <h4 class="font-bold mb-4 text-sky-400 flex items-center gap-2">
                <span class="text-xl">⚙️</span> Backend
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">PHP</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">MySQL</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">Node.js</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <h4 class="font-bold mb-4 text-sky-400 flex items-center gap-2">
                <span class="text-xl">🔥</span> Frameworks & DB
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">Firebase</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">Supabase</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">MongoDB</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
              <h4 class="font-bold mb-4 text-sky-400 flex items-center gap-2">
                <span class="text-xl">🛠️</span> Outils
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">Git/GitHub</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">VS Code</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-300">Figma</span>
                  <div class="flex gap-1">
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Certifications -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">🏆</div>
            <h2 class="text-3xl font-bold">Certifications</h2>
          </div>

          <div class="bg-slate-800 p-6 rounded-lg">
            <p class="text-slate-400 text-center">Aucune certification pour le moment</p>
          </div>
        </section>

        <!-- Contact -->
        <section class="mb-16 pb-16 border-b border-slate-700">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">📞</div>
            <h2 class="text-3xl font-bold">Contact</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-sky-400">📧</span>
                <div>
                  <h4 class="font-bold">Email</h4>
                  <p class="text-slate-400 text-sm">zidane.tahiendraza@univ-fianarantsoa.mg</p>
                </div>
              </div>
            </div>
            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-sky-400">📱</span>
                <div>
                  <h4 class="font-bold">Téléphone</h4>
                  <p class="text-slate-400 text-sm">+261 34 63 415 69</p>
                </div>
              </div>
            </div>
            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-sky-400">📍</span>
                <div>
                  <h4 class="font-bold">Adresse</h4>
                  <p class="text-slate-400 text-sm">Fianarantsoa, Madagascar</p>
                </div>
              </div>
            </div>
            <div class="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-sky-400">🔗</span>
                <div>
                  <h4 class="font-bold">LinkedIn</h4>
                  <p class="text-slate-400 text-sm">linkedin.com/in/zidane-tahiendraza</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Intérêts -->
        <section class="mb-16 pb-16">
          <div class="flex items-center gap-3 mb-8" data-aos="fade-right">
            <div class="text-4xl">🎯</div>
            <h2 class="text-3xl font-bold">Centres d'intérêt</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-slate-800 p-6 rounded-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="text-3xl mb-3">🎮</div>
              <h4 class="font-bold mb-2">Jeux Vidéo</h4>
              <p class="text-slate-400 text-sm">Stratégie et aventure</p>
            </div>
            <div class="bg-slate-800 p-6 rounded-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="text-3xl mb-3">📚</div>
              <h4 class="font-bold mb-2">Lecture</h4>
              <p class="text-slate-400 text-sm">Technologie et développement</p>
            </div>
            <div class="bg-slate-800 p-6 rounded-lg text-center" data-aos="fade-up" data-aos-delay="300">
              <div class="text-3xl mb-3">🏃</div>
              <h4 class="font-bold mb-2">Sport</h4>
              <p class="text-slate-400 text-sm">Course et fitness</p>
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
              <p class="text-slate-400 text-sm font-semibold">Courant</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="200">
              <h4 class="font-bold mb-3 text-lg">Anglais</h4>
              <div class="bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div class="bg-sky-400 h-full" style="width: 75%"></div>
              </div>
              <p class="text-slate-400 text-sm font-semibold">Intermédiaire</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400" data-aos="fade-up" data-aos-delay="300">
              <h4 class="font-bold mb-3 text-lg">Malagasy</h4>
              <div class="bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
                <div class="bg-sky-400 h-full" style="width: 100%"></div>
              </div>
              <p class="text-slate-400 text-sm font-semibold">Natif</p>
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
  element.setAttribute('href', '/CV/New CV Zidane.pdf')
  element.setAttribute('download', 'TAHIENDRAZA_Ravilimita_Zidane_CV.pdf')
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
