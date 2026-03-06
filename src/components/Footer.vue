<template>
  <footer class="bg-gray-800 text-white mt-16">
    <div class="max-w-7xl mx-auto px-5 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        <div>
          <h4 class="text-xl font-bold mb-4">Portfolio</h4>
          <p class="text-gray-400">Un portfolio moderne créé avec Vue.js et Tailwind CSS</p>
        </div>

        <div>
          <h4 class="text-xl font-bold mb-4">Navigation</h4>
          <ul class="space-y-2 text-gray-400">
            <li><router-link to="/" class="hover:text-primary transition-colors">Accueil</router-link></li>
            <li><router-link to="/about" class="hover:text-primary transition-colors">À propos</router-link></li>
            <li><router-link to="/projects" class="hover:text-primary transition-colors">Projets</router-link></li>
            <li><router-link to="/contact" class="hover:text-primary transition-colors">Contact</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-bold mb-4">Réseaux sociaux</h4>
          <div class="flex flex-col gap-2">
            <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-primary transition-colors">GitHub</a>
            <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
