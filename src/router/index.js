import { createRouter, createWebHistory } from 'vue-router'
import ProgramView from '../views/Program.vue'
import AboutView from '../views/About.vue'
import TeamView from '../views/Team.vue'
import ProfileView from '../views/profiles/Profile.vue'

// Placeholder for future developer components
const DevPlaceholder = { template: '<div style="padding: 2rem; text-align: center;"><h3>Developer content not yet uploaded</h3></div>' }

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProgramView
  },
  {
    path: '/program',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/developers/frontend',
    name: 'frontend-dev',
    component: DevPlaceholder
  },
  {
    path: '/developers/backend',
    name: 'backend-dev',
    component: DevPlaceholder
  },
  {
    path: '/developers/devops',
    name: 'devops-dev',
    component: DevPlaceholder
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
