export const state = () => ({
  heroes: []
})

export const mutations = {
  SET_HEROES(state, heroes) {
    state.heroes = heroes
  },
  SET_HERO_FANS(state, hero) {
    const foundHero = state.heroes.find((h) => h.slug === hero.slug)

    if (!foundHero) return
    foundHero.fans = hero.fans
    foundHero.nbFans = hero.nbFans
  }
}

export const actions = {
  async fetchHeroes({ commit }) {
    const heroes = await this.$axios.$get('/api/heroes')

    commit('SET_HEROES', heroes)
  },
  async syncHeroes({ commit }, socket) {
    this.$socket.on('hero:updated', (hero) => commit('SET_HERO_FANS', hero))
  }
}
