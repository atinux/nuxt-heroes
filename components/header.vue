<template>
  <header class="Header">
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <h1>London Heroes</h1>
    <a v-if="connected" href="#" @click.prevent="logout">
      Logout
    </a>
    <a v-else :href="oauthUrl">
      Login
    </a>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['oauthUrl']),
    ...mapGetters('auth', ['connected'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.Header {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  a {
    color: #aaa;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
  h1 {
    color: #fff;
    font-size: 22px;
    margin: 0;
    padding: 0;
  }
}
</style>
