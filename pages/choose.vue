<template>
  <div>
    <h1 class="Title">Choose your Hero</h1>
    <h-tabs :group.sync="group"/>
    <ul class="List">
      <li class="List__Item" v-for="hero in filteredHeroes" @click="selectHero(hero)" :key="hero.slug">
        <img :src="cloudinary(hero.image, 512)" :alt="hero.name"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import hTabs from '@/components/tabs'

export default {
  components: {
    hTabs
  },
  head: {
    title: 'Choose your hero'
  },
  middleware({ store, redirect }) {
    if (!store.getters['auth/connected']) return redirect('/')
  },
  computed: {
    ...mapState('heroes', ['heroes']),
    filteredHeroes() {
      return this.heroes.filter((hero) => hero.group === this.group)
    }
  },
  data () {
    return {
      group: 'dc'
    }
  },
  methods: {
    async selectHero(hero) {
      this.$router.push('/')
      const user = await this.$axios.$put('/api/user/hero', { hero: hero.slug })

      this.$store.commit('auth/SET_USER', user)
    },
    cloudinary (slug, size = 128) {
      return `https://res.cloudinary.com/wikeo/image/upload/${slug}`
    }
  }
}
</script>

<style lang="scss">
.List {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  &__Item {
    width: 100%;
    cursor: pointer;
    background-color: #000;
    @media (min-width: 576px) {
      width: 50%;
    }
    @media (min-width: 992px) {
      width: 33%;
    }
    img {
      display: inline-block;
      width: 100%;
      opacity: 0.5;
    }
    &:hover {
      img {
        opacity: 1;
      }
    }
  }
}
</style>
