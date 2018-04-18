<template>
  <div>
    <header class="Header">
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <img src="/logo.svg" alt="Logo">
      <a v-if="connected" href="#" @click.prevent="logout">
        Logout
      </a>
      <a v-else :href="oauthUrl">
        Login
      </a>
    </header>
    <nuxt/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['oauthUrl', 'connected'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
html
{
  font-family: "Impact", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #000;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
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
  img {
    height: 24px;
  }
}
</style>
