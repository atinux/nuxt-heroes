import io from 'socket.io-client'

export default ({ store, env }, inject) => {
  const socket = io(`${env.api}/push`)

  inject('socket', socket)
  socket.on('connect', () => store.dispatch('heroes/syncHeroes'))
}
