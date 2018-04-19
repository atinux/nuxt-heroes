<template>
  <div>
    <div class="Hero">
      <img :src="`/${hero.slug}.jpg`" :alt="hero.name" class="Hero__Img"/>
      <div class="Hero__Infos">
        <h3>{{ '#' + (rank + 1) + ' - ' +hero.name }}</h3>
        <img :src="`/${hero.group}.svg`" :alt="hero.group"/>
        <p>{{ hero.nbFans }} Fan{{ hero.nbFans > 1 ? 's' : ''}}</p>
      </div>
    </div>
    <ul class="Fans">
      <li class="Fans__Item" v-for="fan in hero.fans" :key="fan.githubId">
        <a :href="`https://github.com/${fan.username}`" target="_blank" rel="noopener">
          <img :src="`${avatar(fan.githubId)}?s=48`" :srcset="`${avatar(fan.githubId)}?s=96 2x`" width="48" height="48" :alt="fan.username"/> {{ fan.username }}
        </a>
      </li>
    </ul>
    <pre>{{ hero.fans }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  asyncData ({ store, error, params }) {
    const hero = store.state.heroes.heroes.find((h) => h.slug === params.slug)
    if (!hero) {
      return error({ statusCode: 404, message: 'Hero not found' })
    }
    return {
      hero
    }
  },
  computed: {
    ...mapState('heroes', ['heroes']),
    rank () {
      return this.heroes.findIndex((hero) => hero.slug === this.hero.slug)
    }
  },
  methods: {
    avatar(githubId) {
      return `https://avatars0.githubusercontent.com/u/${githubId}`
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
  border-bottom: 1px solid #333;
  &__Img {
    height: 120px;
    margin-right: 20px;
    border-radius: 60px;
  }
  &__Infos {
    h3 {
      padding: 5px 0;
    }
    img {
      height: 20px;
      margin-top: 10px;
    }
    p {
      padding-top: 10px;
    }
  }
}
.Fans {
  list-style: none;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  &__Item {
    a {
      color: #fff;
      display: flex;
      padding: 10px;
      align-items: center;
      text-decoration: none;
    }
    img {
      margin-right: 10px;
      border-radius: 48px;
    }
  }
}
</style>
