import io from 'socket.io-client'

export default ({ store, env }, inject) => {
  const socket = io(`${env.api}/push`)
  inject('socket', socket)

  if (store.getters['auth/connected']) {
    socket.on('connect', function () {
      socket
        .emit('authenticate', { token: store.state.auth.jwt })
        .on('authenticated', function () {
          store.dispatch('heroes/syncHeroes')
        })
    })
  }
}
