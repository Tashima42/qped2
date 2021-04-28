import Vue from 'vue'
import VueRouter from 'vue-router'
import Question from "../components/Question.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Question',
    component: Question,
  },
]

const router = new VueRouter({
  routes
})

export default router
