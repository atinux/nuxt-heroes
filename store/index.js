export const state = () => ({})

export const getters = {
  oauthUrl: (state) => `${process.env.github.oauthUrl}`
}

export const actions = {
  // Called on page load on server-side
  async nuxtServerInit({ getters, dispatch, commit }, context) {
    await dispatch('auth/checkConnectedUser', context)
    await dispatch('heroes/fetchHeroes', context)
  }
}
