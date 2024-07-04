import { createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ControlView from '@/views/ControlView.vue'
import BigCard from '@/components/BigCard.vue'
import FormUpdateCreate from '@/components/FormUpdateCreate.vue'
import CompareChoise from '@/components/CompareChoise.vue'
import CompareView from '@/views/CompareView.vue'
import CheckPanel from '@/components/CheckPanel.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  }, 
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/control',
    name: 'control',
    component: ControlView
  },
  {
    path: '/:model/:id',
    name: 'bigCard',
    component: BigCard
  },
  {
    path: '/control/:action/:id',
    name: 'CreateUpdate',
    component: FormUpdateCreate
  },
  {
    path: '/comparisonChoise',
    name: 'compareChoise',
    component: CompareChoise
  },
  {
    path: '/comparison/:model1 Versus :model2',
    name: 'compare',
    component: CompareView
  },
  {
    path: '/check',
    name: 'check',
    component: CheckPanel
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
