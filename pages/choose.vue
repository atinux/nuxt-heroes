<template>
  <div>
    <h1 class="Title">Choose your Hero</h1>
    <nav class="Tabs">
      <a class="Tabs__Link Tabs__Link--DC" :class="{'Tabs__Link--DC--active': group === 'dc' }" href="#" @click.prevent="group = 'dc'">
        <img src="dc.svg" alt="DC"/>
      </a>
      <a class="Tabs__Link Tabs__Link--Marvel" :class="{'Tabs__Link--Marvel--active': group === 'marvel' }" href="#" @click.prevent="group = 'marvel'">
        <img src="marvel.svg" alt="Marvel"/>
      </a>
    </nav>
    <ul class="List">
      <li class="List__Item" v-for="hero in filteredHeroes" @click="selectHero(hero)" :key="hero.slug">
        <img :src="`/${hero.slug}.jpg`" :alt="hero.name"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
      const user = await this.$axios.$put('/api/user/hero', { hero: hero.slug })

      this.$store.commit('auth/SET_USER', user)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.Tabs {
  display: flex;
  &__Link {
    width: 50%;
    padding: 20px;
    text-align: center;
    background-color: #333;
    &--DC {
      &:hover, &--active {
        background-color: #266BB0;
      }
    }
    &--Marvel {
      &:hover, &--active {
        background-color: #941112;
      }
    }
    img {
      height: 48px;
      display: inline-block;
    }
  }
}
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
