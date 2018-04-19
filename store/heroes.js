export const state = () => ({
  heroes: []
})

const sortHeroes = (heroes) => heroes.sort((h1, h2) => h2.nbFans - h1.nbFans)

export const mutations = {
  SET_HEROES(state, heroes) {
    state.heroes = sortHeroes(heroes)
  },
  SET_HERO_FANS(state, hero) {
    const foundHero = state.heroes.find((h) => h.slug === hero.slug)

    if (!foundHero) return
    foundHero.fans = hero.fans
    foundHero.nbFans = hero.nbFans
    // Sort heroes
    state.heroes = sortHeroes(state.heroes)
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
