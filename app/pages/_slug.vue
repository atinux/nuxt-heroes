<template>
  <div>
    <div class="Hero">
      <img :src="`/${hero.slug}.jpg`" :alt="hero.name"/>
      <div class="Hero__Infos">
        <h1>{{ hero.name }}</h1>
        <p>Rank: #1</p>
        <p>0 Fans</p>
      </div>
    </div>
    <pre>{{ hero.fans }}</pre>
  </div>
</template>

<script>
export default {
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

<style lang="scss">
.Hero {
  display: flex;
  padding: 20px;
  color: #fff;
  justify-content: center;
  background-color: #333;
  img {
    height: 120px;
    margin-right: 20px;
    border-radius: 60px;
  }
  &__Infos {
    h1 {
      padding: 5px 0;
    }
    p {
      padding-top: 10px;
    }
  }
}
</style>
