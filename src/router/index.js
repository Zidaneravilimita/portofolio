import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Skills from '../pages/Skills.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'
import CV from '../pages/CV.vue'
import Chat from '../pages/Chat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
