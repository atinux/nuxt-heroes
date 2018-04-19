export const state = () => ({
  user: null,
  jwt: null
})

export const mutations = {
  SET_JWT(state, jwt) {
    state.jwt = jwt
  },
  SET_USER(state, user) {
    state.user = user
  }
}

export const getters = {
  connected: (state) => !!state.user,
}

export const actions = {
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
      cookies.set('jwt') // Remove jwt cookie
    }
  },
  async logout({ commit }) {
    commit('SET_JWT', null)
    commit('SET_USER', null)
    this.$axios.setToken(false) // Remove jwt in axios requests
    await this.$axios.get('/logout')
  }
}
