<template>
  <section class="container">
    Heroes Ranking
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const data = await app.$axios.$get('/_')

    console.log(data)
  }
}
</script>

<style lang="scss">
</style>
