export const state = () => ({
  user: null,
  jwt: null,
  heroes: []
})

export const mutations = {
  SET_JWT(state, jwt) {
    state.jwt = jwt
    this.$axios.setToken(jwt || false)
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_HEROES(state, heroes) {
    state.heroes = heroes
  }
}

export const getters = {
  connected: (state) => !!state.user,
  oauthUrl: (state) => `${process.env.github.oauthUrl}`
}

export const actions = {
  // Called on page load on server-side
  async nuxtServerInit({ dispatch, commit }, context) {
    await dispatch('checkConnectedUser', context)
    await dispatch('fetchHeroes', context)
  },
  async checkConnectedUser({ dispatch, commit, rootState }, { error, req, res }) {
    const Cookies = (process.server ? require('cookies') : null)
    const cookies = new Cookies(req, res)

    // Get hwt cookie
    let jwt = cookies.get('jwt')
    if (!jwt) return
    // Check if JWT is good
    try {
      const user = await this.$axios.$get(`/api/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
      // Update state
      commit('SET_JWT', jwt)
      commit('SET_USER', user)
    } catch (err) {
      console.log(err)
      cookies.set('jwt') // Remove jwt cookie
    }
  },
  async fetchHeroes({ commit }, { app }) {
    const heroes = await app.$axios.$get('/api/heroes')

    commit('SET_HEROES', heroes)
  },
  async logout({ commit }) {
    commit('SET_JWT', null)
    commit('SET_USER', null)
    await axios.get('/logout')
  }
}
