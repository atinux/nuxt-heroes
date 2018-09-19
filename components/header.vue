<template>
  <header class="Header">
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <h1>London Heroes</h1>
    <a v-if="connected" href="#" @click.prevent="logout">
      <img :src="`${avatar(user.githubId)}?s=24`" :srcset="`${avatar(user.githubId)}?s=48 2x`" width="24" height="24" :alt="user.username"/>
      Logout
    </a>
    <a v-else :href="`github`">
      Login
    </a>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['connected'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    },
    avatar(githubId) {
      return `https://avatars0.githubusercontent.com/u/${githubId}`
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
  img {
    float: left;
    margin-right: 10px;
    border-radius: 50%;
  }
}
</style>
