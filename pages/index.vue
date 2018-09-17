<template>
  <div>
    <h1 class="Title">Heroes Ranking</h1>
    <div v-if="connected" class="Choose">
      <nuxt-link to="/choose">{{ user.hero ? 'Change' : 'Choose' }} your hero</nuxt-link>
    </div>
    <h-statsbar :heroes="heroes"/>
    <transition-group class="Ranking" tag="div" name="hero-item">
      <nuxt-link v-for="(hero, i) in heroes" :key="hero.slug" :to="hero.slug" class="Ranking__Hero" :class="{'Ranking__Hero--choosen': user && user.hero === hero.slug}">
        <img :src="cloudinary(hero.image, 128)" :alt="hero.name" class="Ranking__Hero__Img"/>
        <div class="Ranking__Hero__Infos">
          <h3>{{ '#' + (i + 1) + ' - ' +hero.name }}</h3>
          <img :src="(hero.group === 'dc' ? '/dc.svg' : '/marvel.svg')" :alt="hero.group"/>
          <p>{{ hero.nbFans }} Fan{{ hero.nbFans > 1 ? 's' : ''}}</p>
        </div>
      </nuxt-link>
    </transition-group>
  </div>
</template>

<script>
import hStatsbar from '@/components/statsbar'

import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    hStatsbar
  },
  computed: {
    ...mapGetters('auth', ['connected']),
    ...mapState('auth', ['user']),
    ...mapState('heroes', ['heroes'])
  },
  methods: {
    cloudinary (slug, size = 128) {
      return `https://res.cloudinary.com/wikeo/image/upload/${slug}`
    }
  }
}
</script>

<style lang="scss">
.Choose {
  text-align: center;
  padding-bottom: 40px;
  a {
    text-decoration: none;
    border: 2px solid #aaa;
    color: #aaa;
    padding: 10px 30px;
    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
}
.hero-item-move {
  transition: transform 1s;
}
.Ranking {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  &__Hero {
    padding: 10px;
    color: #aaa;
    display: flex;
    width: 100%;
    text-decoration: none;
    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-width: 1200px) {
      width: 33%;
    }
    &--choosen {
      color: #fff;
      background-color: #333;
      img {
        opacity: 1;
      }
    }
    &__Img {
      height: 128px;
      margin-right: 20px;
      opacity: 0.75;
      border-radius: 50%;
    }
    &__Infos {
      h3 {
        padding: 5px 0;
      }
      img {
        height: 20px;
        opacity: 0.75;
        margin-top: 10px;
      }
      p {
        padding-top: 10px;
      }
    }
    &:hover {
      color: #fff;
      img {
        opacity: 1;
      }
    }
  }
}
</style>
