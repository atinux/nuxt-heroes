export default ({ app, store }) => {
  // Set token to axios
  if (store.state.auth.jwt) {
    app.$axios.setToken(store.state.auth.jwt, 'Bearer')
  }
}
