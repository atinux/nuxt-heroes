<template>
  <div>
    <h-hero :hero="hero"/>
    <h-fans :fans="hero.fans" v-if="hero.nbFans > 0"/>
  </div>
</template>

<script>
import hHero from '@/components/hero'
import hFans from '@/components/fans'

export default {
  components: {
    hHero,
    hFans
  },
  head() {
    return {
      title: `Heroes: ${this.hero.name}`
    }
  },
  asyncData ({ store, error, params }) {
    const hero = store.state.heroes.heroes.find((h) => h.slug === params.slug)
    if (!hero) {
      return error({ statusCode: 404, message: 'Hero not found' })
    }
    return {
      hero
    }
  }
}
</script>
