export const state = () => ({
  user: null,
  jwt: null
})

export const getters = {
  connected: (state) => !!state.user,
}
