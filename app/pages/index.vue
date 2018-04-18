<template>
  <section class="container">
    Heroes Ranking
    <div class="links">
      <a :href="oauthUrl" class="no-underline text-blue hover:text-blue-dark">Login with GitHub</a>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ app }) {
  },
  computed: {
    ...mapGetters(['oauthUrl'])
  }
}
</script>

<style lang="scss">
</style>
