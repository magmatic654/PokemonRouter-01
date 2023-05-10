import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: "/favoritos",
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },

  ]
})

export default router
