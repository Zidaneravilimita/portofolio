<template>
  <section class="bg-slate-950 text-white py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-5xl font-bold mb-4 text-center">Contactez-moi</h1>
      <p class="text-center text-slate-400 text-xl mb-16 max-w-2xl mx-auto">
        Vous avez un projet en tête ? N'hésitez pas à me contacter. Je serais ravi de discuter
        de vos idées et de comment je peux vous aider.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="bg-slate-900 rounded-lg shadow-lg p-8" data-aos="fade-right">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-slate-300 mb-2">Nom</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Votre nom"
                    class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition text-white placeholder-slate-500"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="votre@email.com"
                    class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition text-white placeholder-slate-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Sujet</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition text-white placeholder-slate-500"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  placeholder="Votre message..."
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition resize-none text-white placeholder-slate-500"
                  rows="8"
                  required
                ></textarea>
              </div>

              <button type="submit" class="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 text-lg font-semibold rounded-lg transition">
                Envoyer le message
              </button>
            </form>

            <!-- Success Message -->
            <div
              v-if="successMessage"
              class="mt-6 p-4 bg-green-900/50 border border-green-700 rounded-lg"
            >
              <p class="text-green-400 font-semibold">✓ Message envoyé avec succès !</p>
              <p class="text-green-500 text-sm mt-1">Je vous répondrai dans les 24h.</p>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="space-y-6">
          <!-- Direct Contact -->
          <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-8 text-white" data-aos="fade-left">
            <h3 class="text-xl font-bold mb-6">Informations de contact</h3>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="text-2xl">📧</div>
                <div>
                  <p class="font-semibold mb-1">Email</p>
                  <a href="mailto:contact@example.com" class="hover:underline opacity-90">contact@example.com</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="text-2xl">📱</div>
                <div>
                  <p class="font-semibold mb-1">Téléphone</p>
                  <a href="tel:+33612345678" class="hover:underline opacity-90">+33 6 12 34 56 78</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="text-2xl">📍</div>
                <div>
                  <p class="font-semibold mb-1">Localisation</p>
                  <p class="opacity-90">Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Availability -->
          <div class="bg-slate-800 rounded-lg p-8" data-aos="fade-left" data-aos-delay="200">
            <h3 class="text-xl font-bold text-white mb-4">Disponibilité</h3>
            <ul class="space-y-3 text-slate-300">
              <li class="flex items-center gap-2">
                <span class="text-green-400">✓</span>
                Freelance disponible
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✓</span>
                Réponse en 24h
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✓</span>
                Consultation gratuite
              </li>
            </ul>
          </div>

          <!-- Social Links -->
          <div class="bg-slate-800 rounded-lg p-8" data-aos="fade-left" data-aos-delay="400">
            <h3 class="text-xl font-bold text-white mb-4">Me suivre</h3>
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 bg-slate-700 border-2 border-sky-400 rounded-lg flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition text-sky-400">
                f
              </a>
              <a href="#" class="w-12 h-12 bg-slate-700 border-2 border-sky-400 rounded-lg flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition text-sky-400">
                𝕏
              </a>
              <a href="#" class="w-12 h-12 bg-slate-700 border-2 border-sky-400 rounded-lg flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition text-sky-400">
                in
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-center text-white mb-12">Questions fréquentes</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400">
            <h4 class="font-bold text-white mb-2">Quel est votre tarif ?</h4>
            <p class="text-slate-400 text-sm">Les tarifs dépendent du projet et de sa complexité. Je propose une consultation gratuite pour discuter des détails.</p>
          </div>

          <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400">
            <h4 class="font-bold text-white mb-2">Combien de temps pour un projet ?</h4>
            <p class="text-slate-400 text-sm">La durée varie selon le scope. Je fournis toujours une estimation détaillée avant de commencer.</p>
          </div>

          <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400">
            <h4 class="font-bold text-white mb-2">Travaillez-vous à distance ?</h4>
            <p class="text-slate-400 text-sm">Oui, je travaille complètement à distance. Communication régulière via Slack, email ou visio.</p>
          </div>

          <div class="p-6 bg-slate-800 rounded-lg border-l-4 border-sky-400">
            <h4 class="font-bold text-white mb-2">Offrez-vous un support après livraison ?</h4>
            <p class="text-slate-400 text-sm">Bien sûr ! Je fournis 30 jours de support gratuit après la mise en ligne du projet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const successMessage = ref(false)

const submitForm = () => {
  // Validation simple
  if (form.value.name && form.value.email && form.value.subject && form.value.message) {
    successMessage.value = true
    
    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Masquer le message après 5 secondes
    setTimeout(() => {
      successMessage.value = false
    }, 5000)
  }
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
