<template>
  <section class="min-h-screen bg-slate-950 text-white py-24 pb-32 flex items-center justify-center">
    
    <!-- Background Glow -->
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500 blur-[200px] opacity-20"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 blur-[200px] opacity-20"></div>

    <div class="relative w-full max-w-5xl px-6">

      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl font-bold mb-4">
          Assistant IA Conversation
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Posez toutes vos questions sur mes services, projets, ou compétences. Je suis là pour vous aider instantanément !
        </p>
      </div>

      <!-- Chat Container -->
      <div class="w-full max-w-4xl mx-auto">
        <div class="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden" data-aos="fade-up">
          
          <!-- Chat Header -->
          <div class="bg-gradient-to-r from-sky-500 to-blue-600 p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot class="w-8 h-8" />
                </div>
                <div>
                  <h2 class="text-xl font-semibold">Assistant IA</h2>
                  <p class="text-sm opacity-80">🟢 En ligne - Réponses instantanées</p>
                </div>
              </div>
              <button
                @click="clearChat"
                class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition text-sm"
              >
                Effacer la conversation
              </button>
            </div>
          </div>

          <!-- Messages Area -->
          <div class="h-[500px] overflow-y-auto p-6 bg-slate-800/50" ref="messagesContainer">
            <div class="space-y-4">
              <!-- Welcome Message -->
              <div class="flex justify-start" v-if="messages.length === 1">
                <div class="max-w-[80%] bg-slate-700 px-6 py-4 rounded-2xl">
                  <p class="text-slate-200">
                    👋 Bonjour ! Je suis votre assistant IA personnel. Je peux vous aider avec :
                  </p>
                  <ul class="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• Informations sur mes services et tarifs</li>
                    <li>• Détails sur mes compétences techniques</li>
                    <li>• Mes projets et réalisations</li>
                    <li>• Disponibilités et délais</li>
                    <li>• Processus de collaboration</li>
                  </ul>
                  <p class="mt-3 text-slate-200">
                    N'hésitez pas à me poser n'importe quelle question !
                  </p>
                </div>
              </div>

              <!-- Chat Messages -->
              <div
                v-for="message in messages"
                :key="message.id"
                class="flex"
                :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
              >
                <div
                  class="max-w-[80%] px-6 py-3 rounded-2xl"
                  :class="message.sender === 'user' 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-200'"
                >
                  <p>{{ message.text }}</p>
                  <p class="text-xs mt-2 opacity-70">
                    {{ formatTime(message.timestamp) }}
                  </p>
                </div>
              </div>

              <!-- Typing Indicator -->
              <div v-if="isTyping" class="flex justify-start">
                <div class="bg-slate-700 px-6 py-3 rounded-2xl">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                    <div class="w-3 h-3 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                    <div class="w-3 h-3 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="p-4 bg-slate-900 border-t border-slate-700">
            <div class="flex flex-wrap gap-2 mb-4">
              <button
                v-for="suggestion in quickSuggestions"
                :key="suggestion"
                @click="sendQuickMessage(suggestion)"
                class="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-sm transition"
              >
                {{ suggestion }}
              </button>
            </div>
          </div>

          <!-- Input Area -->
          <div class="p-4 bg-slate-900 border-t border-slate-700">
            <div class="flex gap-3">
              <input
                v-model="inputMessage"
                @keyup.enter="sendMessage"
                type="text"
                placeholder="Tapez votre message ici..."
                class="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
                :disabled="isTyping"
              />
              <button
                @click="sendMessage"
                :disabled="!inputMessage.trim() || isTyping"
                class="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
              >
                <Send class="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        <!-- Info Cards -->
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="text-3xl mb-3">⚡</div>
            <h3 class="font-semibold mb-2">Réponses Rapides</h3>
            <p class="text-slate-400 text-sm">Obtenez des réponses instantanées à vos questions</p>
          </div>
          <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="text-3xl mb-3">🎯</div>
            <h3 class="font-semibold mb-2">Précis</h3>
            <p class="text-slate-400 text-sm">Informations détaillées sur mes services</p>
          </div>
          <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center" data-aos="fade-up" data-aos-delay="300">
            <div class="text-3xl mb-3">🔄</div>
            <h3 class="font-semibold mb-2">Disponible 24/7</h3>
            <p class="text-slate-400 text-sm">Accessible à tout moment pour vos questions</p>
          </div>
        </div>

        <!-- Back Button -->
        <div class="text-center mt-8">
          <a href="#contact" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
            <ArrowLeft class="w-4 h-4" />
            Retour au contact
          </a>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { Bot, Send, ArrowLeft } from 'lucide-vue-next'
import AOS from 'aos'
import 'aos/dist/aos.css'

const inputMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)

const messages = ref([
  {
    id: 1,
    text: "Bonjour ! Je suis l'assistant IA du portfolio. Comment puis-je vous aider aujourd'hui ?",
    sender: 'bot',
    timestamp: new Date()
  }
])

const quickSuggestions = [
  "Quels sont vos services ?",
  "Quel est votre tarif ?",
  "Êtes-vous disponible ?",
  "Quelles technologies utilisez-vous ?",
  "Combien de temps pour un projet ?",
  "Comment vous contacter ?",
  "Quelle est votre expérience ?",
  "Comment travaillez-vous ?",
  "Pouvez-vous faire un site e-commerce ?",
  "Quel est votre processus de recrutement ?"
]

const responses = {
  greetings: [
    "Bonjour ! Ravie de vous aider. Je suis là pour répondre à toutes vos questions sur mes services et projets.",
    "Salut ! N'hésitez pas à me poser des questions sur mon travail, mes compétences ou mes tarifs.",
    "Hello ! Je suis votre assistant IA personnel. Comment puis-je vous aider aujourd'hui ?",
    "Bienvenue ! Je suis là pour vous informer sur mes services et répondre à toutes vos questions."
  ],
  services: [
    "Je propose des services complets de développement web : 🌐 Sites web sur mesure, 📱 Applications web progressives, 🛒 Plateformes e-commerce, 🔧 Maintenance et évolution de projets existants. Je travaille avec les technologies modernes comme Vue.js, React, Node.js, et bien d'autres.",
    "Mes services incluent le développement full-stack : Frontend (Vue.js, React, Tailwind CSS), Backend (Node.js, Express, Python), Bases de données (PostgreSQL, MongoDB), et DevOps (Docker, CI/CD). Chaque projet est adapté à vos besoins spécifiques.",
    "Je suis spécialisée dans : Développement d'applications web modernes, Création de sites vitrines et corporatifs, Développement d'applications mobiles (React Native), Intégration d'API tierces, Optimisation des performances web, et Configuration de serveurs et déploiement."
  ],
  pricing: [
    "Mes tarifs sont adaptés à chaque projet. Pour vous donner une idée : 📍 Site vitrine simple : 300-800€, 📍 Application web complexe : 1000-5000€, 📍 E-commerce complet : 1500-8000€. Je propose toujours une consultation gratuite pour évaluer vos besoins et vous fournir un devis personnalisé.",
    "Le tarif dépend de plusieurs facteurs : complexité technique, délais requis, fonctionnalités spécifiques, et design. Je vous invite à me décrire votre projet pour recevoir un devis précis et détaillé.",
    "Mes prix sont compétitifs et basés sur la valeur livrée : Développement frontend : 25-50€/heure, Développement backend : 30-60€/heure, Projet complet : sur devis. Je propose aussi des forfaits pour les projets standards."
  ],
  availability: [
    "Oui, je suis actuellement disponible pour de nouveaux projets ! 🚀 Les délais habituels sont : 📍 Projets simples : 1-2 semaines, 📍 Projets moyens : 3-6 semaines, 📍 Projets complexes : 2-4 mois. Contactez-moi rapidement pour réserver votre créneau !",
    "J'ai des disponibilités immédiates pour les petits et moyens projets. Pour les gros projets, je peux commencer dans 2-4 semaines selon le planning. N'hésitez pas à me contacter pour discuter de vos délais.",
    "Mon planning actuel me permet de prendre : 2-3 projets simultanément, avec des délais de livraison garantis. Je travaille aussi en mode agile pour livrer rapidement des fonctionnalités."
  ],
  technologies: [
    "Ma stack technique principale : ⚛️ Frontend : Vue.js, React, TypeScript, Tailwind CSS, 🔧 Backend : Node.js, Express, Python, FastAPI, 🗄️ Bases de données : PostgreSQL, MongoDB, Redis, 🐳 DevOps : Docker, GitHub Actions, Vercel, Netlify. J'apprends constamment de nouvelles technologies !",
    "Je maîtrise l'écosystème JavaScript moderne, mais aussi Python pour certains projets backend. J'ai une bonne expérience avec les APIs REST, GraphQL, et les architectures microservices. Je m'adapte rapidement aux technologies spécifiques de vos projets.",
    "Technologies par domaine : Frontend - Vue 3, React 18, TypeScript, Tailwind CSS, Three.js; Backend - Node.js, Express, Python, FastAPI, GraphQL; Database - PostgreSQL, MongoDB, Redis, Firebase; DevOps - Docker, AWS, Vercel, CI/CD."
  ],
  timeline: [
    "Les délais varient selon la complexité : 🚀 Site vitrine : 1-3 semaines, 📱 Application web : 4-8 semaines, 🛒 E-commerce : 6-12 semaines, 🏢 Plateforme complexe : 3-6 mois. Une estimation précise sera fournie après analyse de vos besoins.",
    "Pour optimiser les délais, je travaille par itérations : MVP en 2-4 semaines, puis améliorations progressives. Cela vous permet d'avoir un produit fonctionnel rapidement tout en développant les fonctionnalités complexes.",
    "Processus de développement : Phase 1 (1 semaine) - Analyse et design, Phase 2 (2-4 semaines) - Développement core, Phase 3 (1-2 semaines) - Tests et déploiement. Les délais peuvent être ajustés selon vos besoins."
  ],
  contact: [
    "Vous pouvez me contacter de plusieurs manières : 📧 Email : contact@email.com (réponse sous 24h), 📱 Téléphone : +261 XX XX XXX XX, 📋 Formulaire de contact sur ce site, 💬 Ou via ce chat ! Je suis réactive et disponible pour échanger sur votre projet.",
    "Pour démarrer rapidement, envoyez-moi un email avec : description du projet, budget approximatif, et délais souhaités. Je vous répondrai avec une proposition détaillée et un devis personnalisé.",
    "Modes de communication préférés : Email pour les détails techniques, Appel vidéo pour les discussions stratégiques, Chat pour les questions rapides. Je suis flexible et m'adapte à vos préférences."
  ],
  experience: [
    "J'ai 5+ années d'expérience en développement web, avec une expertise en JavaScript et ses frameworks. J'ai travaillé sur : 20+ projets web complets, 10+ applications mobiles, 5+ plateformes e-commerce, et 3+ projets SaaS. Mon portfolio contient mes réalisations les plus récentes.",
    "Mon expérience couvre différents secteurs : e-commerce, éducation, santé, finance, et startups. J'ai travaillé en freelance et en agence, ce qui me donne une vision complète des projets web.",
    "Parcours professionnel : 3 ans en agence digitale, 2+ ans en freelance, Formation continue en nouvelles technologies, Certifications en cloud et sécurité. Je combine expertise technique et compréhension business."
  ],
  process: [
    "Mon processus de collaboration : 📋 1. Découverte : Analyse de vos besoins, 🎨 2. Design : Maquettes et UI/UX, 💻 3. Développement : Itérations agiles, 🧪 4. Tests : Validation et recettes, 🚀 5. Livraison : Déploiement et formation, 🔄 6. Support : Maintenance et évolutions.",
    "Je travaille en mode agile avec des sprints de 2 semaines. Vous aurez accès à un tableau de bord pour suivre l'avancement, et nous aurons des points réguliers pour ajuster la direction si nécessaire.",
    "Méthodologie : Kick-off meeting (1 jour), Sprint planning (chaque 2 semaines), Daily standups (15min), Sprint review et retrospective, Documentation continue, Déploiement progressif."
  ],
  portfolio: [
    "Découvrez mes projets récents dans la section 'Projets' du site ! J'ai récemment livré : une plateforme e-commerce avec 10k+ produits, une application SaaS pour la gestion de projets, et plusieurs sites vitrines pour des startups. Chaque projet présente des défis techniques différents et des solutions innovantes.",
    "Mon portfolio montre ma polyvalence : applications React complexes, sites Vue.js performants, API Node.js robustes, et intégrations avec des services tiers. N'hésitez pas à explorer les études de cas détaillées !",
    "Projets marquants : Platforme e-commerce B2B avec paiement intégré, Application de gestion de projet en temps réel, Site corporatif avec CMS personnalisé, Application mobile React Native, API REST pour service de streaming."
  ],
  ecommerce: [
    "Oui ! Je développe des plateformes e-commerce complètes : 🛒 Catalogue produits avec filtres avancés, 🛒 Panier et checkout sécurisé, 💳 Intégration paiements (Stripe, PayPal), 📦 Gestion des stocks et commandes, 📊 Tableau de bord admin, et optimisation pour la conversion.",
    "Solutions e-commerce que je propose : Shopify personnalisé, WooCommerce sur mesure, Prestashop avec modules custom, Plateforme e-commerce from scratch, Intégration avec ERP existants, et solutions dropshipping.",
    "Technologies e-commerce : Frontend - React/Vue avec état avancé, Backend - Node.js/Python avec microservices, Paiements - Stripe API, Webhooks, Search - Elasticsearch/Algolia, Analytics - Google Tag Manager."
  ],
  collaboration: [
    "Pour collaborer avec moi : 1️⃣ Décrivez votre projet et objectifs, 2️⃣ Définissez votre budget et délais, 3️⃣ Signez un devis détaillé, 4️⃣ Accédez au tableau de bord de suivi, 5️⃣ Participez aux revues régulières. Je transparence et communication sont mes priorités !",
    "Mon mode de travail : Contrat clair avec livrables définis, Outils collaboratifs (Slack, Notion, GitHub), Reporting hebdomadaire, Flexibilité pour les changements, Documentation complète du projet.",
    "Je cherche des clients qui : Ont une vision claire de leur projet, Sont ouverts aux recommandations techniques, Valorisent la qualité et la communication, Ont des délais réalistes, Sont prêts à collaborer étroitement."
  ],
  support: [
    "Mon service après-livraison : 🛠️ 30 jours de support gratuit inclus, 🔧 Corrections de bugs prioritaires, 📚 Formation et documentation, 🔄 Contrats de maintenance optionnels, ⚡ Support prioritaire 24/7 pour clients premium.",
    "Options de maintenance : Forfait basic - 4h/mois, Forfait standard - 10h/mois, Forfait premium - 20h/mois + support prioritaire. Toutes les options incluent monitoring et sauvegardes.",
    "Garanties : Code propre et documenté, Tests automatiques, Sécurité renforcée, Performance optimisée, SEO-friendly, Responsive design. Je reste engagée dans la réussite de votre projet."
  ],
  skills: [
    "Mes compétences techniques : 💻 Programmation - JavaScript, TypeScript, Python, 🎨 Frontend - Vue.js, React, HTML5/CSS3, ⚙️ Backend - Node.js, Express, FastAPI, 🗄️ Database - SQL, NoSQL, Redis, ☁️ Cloud - AWS, Vercel, Docker.",
    "Soft skills importantes : 🧠 Résolution de problèmes complexes, 🤝 Communication client efficace, 📈 Gestion de projet agile, 🎯 Orientation résultat, 🔄 Adaptabilité aux nouvelles technologies, 👥 Travail d'équipe collaboratif.",
    "Compétences spécialisées : Architecture microservices, Performance web (Core Web Vitals), Sécurité applicative, SEO technique, UX/UI design principles, DevOps et CI/CD."
  ],
  education: [
    "Ma formation : 🎓 Master Télécommunication et Réseaux (en cours), 📚 Licence en Informatique, 🏆 Certifications : AWS Cloud Practitioner, Google Cloud Fundamentals, React Advanced Patterns, 📖 Formation continue : Udemy, Coursera, documentation officielle.",
    "Parcours académique : Études supérieures en ingénierie, Spécialisation en réseaux et communications, Projets universitaires en développement web, Stages en entreprise digitale, Veille technologique constante.",
    "Compétences acquises : Architecture système, Sécurité réseau, Protocoles de communication, Gestion de projet technique, Anglais technique (C1), Méthodologies agiles."
  ],
  default: [
    "C'est une excellente question ! Pour y répondre précisément, je vous invite à me contacter directement. En attendant, je peux vous dire que chaque projet est unique et mérite une attention particulière.",
    "Je comprends votre intérêt pour ce sujet. La meilleure approche serait d'en discuter lors d'un appel ou d'un échange par email. N'hésitez pas à prendre contact pour approfondir ce sujet !",
    "Merci pour votre question. Chaque projet étant spécifique, je vous propose de m'envoyer un message pour en discuter plus en détail et vous fournir une réponse personnalisée.",
    "Question intéressante ! Pour vous donner la réponse la plus précise, je dois comprendre le contexte de votre projet. Pouvez-vous me donner plus de détails sur ce que vous avez en tête ?"
  ]
}

const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase()
  
  if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('coucou')) {
    return responses.greetings[Math.floor(Math.random() * responses.greetings.length)]
  }
  
  if (message.includes('service') || message.includes('compétence') || message.includes('fait') || message.includes('propose')) {
    return responses.services[Math.floor(Math.random() * responses.services.length)]
  }
  
  if (message.includes('tarif') || message.includes('prix') || message.includes('coût') || message.includes('budget')) {
    return responses.pricing[Math.floor(Math.random() * responses.pricing.length)]
  }
  
  if (message.includes('disponible') || message.includes('disponibilité') || message.includes('libre') || message.includes('quand')) {
    return responses.availability[Math.floor(Math.random() * responses.availability.length)]
  }
  
  if (message.includes('technologie') || message.includes('langage') || message.includes('stack') || message.includes('outil')) {
    return responses.technologies[Math.floor(Math.random() * responses.technologies.length)]
  }
  
  if (message.includes('délai') || message.includes('temps') || message.includes('durée') || message.includes('combien')) {
    return responses.timeline[Math.floor(Math.random() * responses.timeline.length)]
  }
  
  if (message.includes('contact') || message.includes('contacter') || message.includes('email') || message.includes('téléphone')) {
    return responses.contact[Math.floor(Math.random() * responses.contact.length)]
  }
  
  if (message.includes('expérience') || message.includes('années') || message.includes('depuis') || message.includes('parcours')) {
    return responses.experience[Math.floor(Math.random() * responses.experience.length)]
  }
  
  if (message.includes('processus') || message.includes('méthode') || message.includes('collaboration') || message.includes('comment')) {
    return responses.process[Math.floor(Math.random() * responses.process.length)]
  }
  
  if (message.includes('portfolio') || message.includes('projet') || message.includes('réalisation') || message.includes('travail')) {
    return responses.portfolio[Math.floor(Math.random() * responses.portfolio.length)]
  }
  
  if (message.includes('e-commerce') || message.includes('ecommerce') || message.includes('boutique') || message.includes('vente')) {
    return responses.ecommerce[Math.floor(Math.random() * responses.ecommerce.length)]
  }
  
  if (message.includes('collaborer') || message.includes('recrutement') || message.includes('travailler ensemble') || message.includes('partenariat')) {
    return responses.collaboration[Math.floor(Math.random() * responses.collaboration.length)]
  }
  
  if (message.includes('support') || message.includes('maintenance') || message.includes('après') || message.includes('garantie')) {
    return responses.support[Math.floor(Math.random() * responses.support.length)]
  }
  
  if (message.includes('skill') || message.includes('compétence technique') || message.includes('maîtrise') || message.includes('expertise')) {
    return responses.skills[Math.floor(Math.random() * responses.skills.length)]
  }
  
  if (message.includes('formation') || message.includes('éducation') || message.includes('étude') || message.includes('diplôme')) {
    return responses.education[Math.floor(Math.random() * responses.education.length)]
  }
  
  return responses.default[Math.floor(Math.random() * responses.default.length)]
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isTyping.value) return
  
  const userMessage = inputMessage.value.trim()
  
  messages.value.push({
    id: Date.now(),
    text: userMessage,
    sender: 'user',
    timestamp: new Date()
  })
  
  inputMessage.value = ''
  isTyping.value = true
  
  await scrollToBottom()
  
  setTimeout(async () => {
    const botResponse = getBotResponse(userMessage)
    
    messages.value.push({
      id: Date.now() + 1,
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    })
    
    isTyping.value = false
    await scrollToBottom()
  }, 1500)
}

const sendQuickMessage = (suggestion) => {
  inputMessage.value = suggestion
  sendMessage()
}

const clearChat = () => {
  messages.value = [
    {
      id: 1,
      text: "Conversation effacée. Comment puis-je vous aider maintenant ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]
}

const formatTime = (timestamp) => {
  return timestamp.toLocaleTimeString('fr-FR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
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

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true
  })
  scrollToBottom()
})
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
