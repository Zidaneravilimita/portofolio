<template>
<section class="relative bg-slate-950 text-white py-24 overflow-hidden">

  <!-- background glow -->
  <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500 blur-[200px] opacity-20"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 blur-[200px] opacity-20"></div>

  <div class="relative max-w-6xl mx-auto px-6">

    <!-- TITLE -->
    <div class="text-center mb-20" data-aos="fade-up">
      <h1 class="text-5xl font-bold mb-4">
        Contactez-moi
      </h1>

      <p class="text-slate-400 text-lg max-w-2xl mx-auto">
        Vous avez un projet ou une idée ? Discutons ensemble pour la transformer
        en une application moderne et performante.
      </p>
    </div>


    <div class="grid lg:grid-cols-3 gap-10">

      <!-- FORM -->
      <div class="lg:col-span-2">

        <div
          class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
          data-aos="fade-right"
        >

          <form @submit.prevent="submitForm" class="space-y-6">

            <!-- NAME -->
            <div>
              <label class="text-sm text-slate-300">Nom</label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Votre nom"
                class="mt-2 w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 outline-none transition"
                required
              />
            </div>

            <!-- EMAIL -->
            <div>
              <label class="text-sm text-slate-300">Email</label>

              <input
                v-model="form.email"
                type="email"
                placeholder="email@example.com"
                class="mt-2 w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 outline-none transition"
                required
              />
            </div>

            <!-- MESSAGE -->
            <div>
              <label class="text-sm text-slate-300">Message</label>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Votre message..."
                class="mt-2 w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 outline-none transition resize-none"
                required
              ></textarea>
            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              class="w-full py-4 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 font-semibold text-lg transition transform hover:scale-105 shadow-lg"
            >
              Envoyer le message
            </button>

          </form>

          <!-- SUCCESS -->
          <div
            v-if="successMessage"
            class="mt-6 p-4 rounded-lg bg-green-900/40 border border-green-700"
          >
            <p class="text-green-400 font-semibold">
              ✓ Message envoyé avec succès !
            </p>
          </div>

        </div>

      </div>


      <!-- CONTACT INFO -->
      <div class="space-y-6">

        <!-- CONTACT CARD -->
        <div
          class="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 shadow-xl"
          data-aos="fade-left"
        >

          <h3 class="text-xl font-bold mb-6">
            Informations
          </h3>

          <div class="space-y-6">

            <div class="flex items-center gap-4">
              <div class="text-2xl">📧</div>
              <div>
                <p class="font-semibold">Email</p>
                <p class="text-sm opacity-80">contact@email.com</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="text-2xl">📱</div>
              <div>
                <p class="font-semibold">Téléphone</p>
                <p class="text-sm opacity-80">+261 XX XX XXX XX</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="text-2xl">📍</div>
              <div>
                <p class="font-semibold">Localisation</p>
                <p class="text-sm opacity-80">Madagascar</p>
              </div>
            </div>

          </div>

        </div>


        <!-- SOCIAL -->
        <div
          class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          data-aos="fade-left"
          data-aos-delay="200"
        >

          <h3 class="text-xl font-bold mb-4">
            Me suivre
          </h3>

          <div class="flex gap-4">

            <a
              href="#"
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-sky-500 transition"
            >
              🐙
            </a>

            <a
              href="#"
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-sky-500 transition"
            >
              in
            </a>

            <a
              href="#"
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-sky-500 transition"
            >
              𝕏
            </a>

          </div>

        </div>

        <!-- CHAT BUTTON -->
        <div
          class="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-xl"
          data-aos="fade-left"
          data-aos-delay="300"
        >

          <h3 class="text-xl font-bold mb-4">
            Besoin d'aide rapide ?
          </h3>

          <p class="text-sm opacity-80 mb-6">
            Posez vos questions directement à mon assistant IA
          </p>

          <router-link
            to="/chat"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition font-semibold"
          >
            <MessageCircle class="w-5 h-5" />
            Plus de questions
          </router-link>

        </div>

      </div>

    </div>


    <!-- FAQ -->
    <div class="mt-24" data-aos="fade-up">

      <h2 class="text-3xl font-bold text-center mb-14">
        Questions fréquentes
      </h2>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-sky-400">
          <h4 class="font-semibold mb-2">Quel est votre tarif ?</h4>
          <p class="text-slate-400 text-sm">
            Le tarif dépend du projet. Une consultation gratuite est proposée.
          </p>
        </div>

        <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-sky-400">
          <h4 class="font-semibold mb-2">Travaillez-vous à distance ?</h4>
          <p class="text-slate-400 text-sm">
            Oui, je travaille avec des clients partout dans le monde.
          </p>
        </div>

        <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-sky-400">
          <h4 class="font-semibold mb-2">Combien de temps pour un projet ?</h4>
          <p class="text-slate-400 text-sm">
            Cela dépend du projet, mais une estimation est fournie avant le début.
          </p>
        </div>

        <div class="bg-slate-800 p-6 rounded-xl border-l-4 border-sky-400">
          <h4 class="font-semibold mb-2">Support après livraison ?</h4>
          <p class="text-slate-400 text-sm">
            Oui, je fournis 30 jours de support gratuit.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

<!-- Chatbot Component -->
<Chatbot />
</template>

<script setup>
import { ref, onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"
import Chatbot from "../components/Chatbot.vue"
import { MessageCircle } from 'lucide-vue-next'

const form = ref({
  name: "",
  email: "",
  message: ""
})

const successMessage = ref(false)

const submitForm = () => {
  if (form.value.name && form.value.email && form.value.message) {

    successMessage.value = true

    form.value = {
      name: "",
      email: "",
      message: ""
    }

    setTimeout(() => {
      successMessage.value = false
    }, 4000)
  }
}

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true
  })
})
</script>
