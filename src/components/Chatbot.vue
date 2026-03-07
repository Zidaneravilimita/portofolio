<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Button -->
    <button
      @click="toggleChat"
      class="w-14 h-14 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
      :class="{ 'rotate-180': isOpen }"
    >
      <MessageCircle v-if="!isOpen" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>

    <!-- Chat Window -->
    <div
      v-if="isOpen"
      class="absolute bottom-20 right-0 w-96 h-[500px] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden"
      data-aos="fade-up"
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-sky-500 to-blue-600 p-4 text-white">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-semibold">Assistant IA</h3>
            <p class="text-xs opacity-80">En ligne - Je réponds instantanément</p>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div class="flex-1 overflow-y-auto p-4 space-y-3" ref="messagesContainer">
        <div
          v-for="message in messages"
          :key="message.id"
          class="flex"
          :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-[80%] px-4 py-2 rounded-2xl text-sm"
            :class="message.sender === 'user' 
              ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white' 
              : 'bg-slate-800 text-slate-200'"
          >
            {{ message.text }}
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-slate-800 px-4 py-2 rounded-2xl">
            <div class="flex gap-1">
              <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
              <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
              <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-slate-700">
        <div class="flex gap-2">
          <input
            v-model="inputMessage"
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Tapez votre message..."
            class="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
            :disabled="isTyping"
          />
          <button
            @click="sendMessage"
            :disabled="!inputMessage.trim() || isTyping"
            class="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-transform"
          >
            <Send class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
import { MessageCircle, X, Bot, Send } from 'lucide-vue-next'

const isOpen = ref(false)
const inputMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)

const messages = ref([
  {
    id: 1,
    text: "Bonjour ! Je suis l'assistant IA du portfolio. Comment puis-je vous aider ?",
    sender: 'bot'
  }
])

const responses = {
  greetings: [
    "Bonjour ! Ravie de vous aider. Je suis là pour répondre à vos questions sur mes services et projets.",
    "Salut ! N'hésitez pas à me poser des questions sur mon travail ou mes compétences."
  ],
  services: [
    "Je propose des services de développement web, mobile et desktop. Je maîtrise Vue.js, React, Node.js et bien d'autres technologies.",
    "Mes services incluent : développement d'applications web modernes, création de sites web sur mesure, et maintenance de projets existants."
  ],
  pricing: [
    "Mes tarifs varient selon la complexité du projet. Je propose une consultation gratuite pour évaluer vos besoins et vous fournir un devis personnalisé.",
    "Le tarif dépend du scope du projet, de la technologie utilisée et des délais. Contactez-moi pour un devis détaillé !"
  ],
  availability: [
    "Je suis actuellement disponible pour de nouveaux projets. N'hésitez pas à me contacter pour discuter de votre projet.",
    "Oui, j'ai des disponibilités pour prendre en charge de nouveaux projets. Délais moyens : 2-4 semaines selon la complexité."
  ],
  location: [
    "Je suis basé à Madagascar mais je travaille avec des clients du monde entier en remote.",
    "Je travaille principalement à distance, ce qui me permet de collaborer avec des clients internationaux."
  ],
  experience: [
    "J'ai plusieurs années d'expérience en développement web, avec une expertise particulière en JavaScript et ses frameworks modernes.",
    "Mon expérience couvre différents types de projets : sites vitrines, applications web complexes, plateformes e-commerce, etc."
  ],
  contact: [
    "Vous pouvez me contacter via le formulaire de cette page, ou directement par email à contact@email.com. Je réponds généralement sous 24h.",
    "Pour me contacter, utilisez le formulaire sur cette page ou envoyez-moi un email. Je suis réactive et disponible pour échanger sur votre projet."
  ],
  technologies: [
    "Mes technologies principales : Vue.js, React, Node.js, Python, Tailwind CSS, et les bases de données comme PostgreSQL et MongoDB.",
    "Je maîtrise le stack JavaScript moderne, mais aussi Python, PHP, et j'ai de bonnes bases en DevOps avec Docker et CI/CD."
  ],
  timeline: [
    "Les délais varient selon le projet : site vitrine 1-2 semaines, application web complexe 1-3 mois, e-commerce 2-4 mois.",
    "Une estimation précise des délais vous sera fournie après analyse de vos besoins spécifiques."
  ],
  support: [
    "Oui, je fournis 30 jours de support gratuit après la livraison, puis des contrats de maintenance sont disponibles.",
    "Le support post-livraison inclut corrections de bugs, petites évolutions et assistance technique pendant 30 jours."
  ],
  default: [
    "C'est une excellente question ! Pour y répondre précisément, je vous invite à me contacter directement via le formulaire. En attendant, je peux vous dire que...",
    "Je comprends votre intérêt pour ce sujet. La meilleure approche serait d'en discuter lors d'un appel. N'hésitez pas à prendre contact !",
    "Merci pour votre question. Chaque projet étant unique, je vous propose de m'envoyer un message pour en discuter plus en détail."
  ]
}

const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase()
  
  if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
    return responses.greetings[Math.floor(Math.random() * responses.greetings.length)]
  }
  
  if (message.includes('service') || message.includes('compétence') || message.includes('fait')) {
    return responses.services[Math.floor(Math.random() * responses.services.length)]
  }
  
  if (message.includes('tarif') || message.includes('prix') || message.includes('coût')) {
    return responses.pricing[Math.floor(Math.random() * responses.pricing.length)]
  }
  
  if (message.includes('disponible') || message.includes('disponibilité') || message.includes('libre')) {
    return responses.availability[Math.floor(Math.random() * responses.availability.length)]
  }
  
  if (message.includes('où') || message.includes('localisation') || message.includes('pays')) {
    return responses.location[Math.floor(Math.random() * responses.location.length)]
  }
  
  if (message.includes('expérience') || message.includes('années') || message.includes('depuis')) {
    return responses.experience[Math.floor(Math.random() * responses.experience.length)]
  }
  
  if (message.includes('contact') || message.includes('contacter') || message.includes('email')) {
    return responses.contact[Math.floor(Math.random() * responses.contact.length)]
  }
  
  if (message.includes('technologie') || message.includes('langage') || message.includes('stack')) {
    return responses.technologies[Math.floor(Math.random() * responses.technologies.length)]
  }
  
  if (message.includes('délai') || message.includes('temps') || message.includes('combien')) {
    return responses.timeline[Math.floor(Math.random() * responses.timeline.length)]
  }
  
  if (message.includes('support') || message.includes('maintenance') || message.includes('après')) {
    return responses.support[Math.floor(Math.random() * responses.support.length)]
  }
  
  return responses.default[Math.floor(Math.random() * responses.default.length)]
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isTyping.value) return
  
  const userMessage = inputMessage.value.trim()
  
  messages.value.push({
    id: Date.now(),
    text: userMessage,
    sender: 'user'
  })
  
  inputMessage.value = ''
  isTyping.value = true
  
  await scrollToBottom()
  
  setTimeout(async () => {
    const botResponse = getBotResponse(userMessage)
    
    messages.value.push({
      id: Date.now() + 1,
      text: botResponse,
      sender: 'bot'
    })
    
    isTyping.value = false
    await scrollToBottom()
  }, 1500)
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => scrollToBottom())
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

watch(messages, () => {
  scrollToBottom()
}, { deep: true })
</script>

<style scoped>
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
