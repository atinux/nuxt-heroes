<template>
  <div>
    <h1 class="Title">Heroes Ranking</h1>
    <div class="Choose">
      <nuxt-link to="/choose">Choose a hero</nuxt-link>
    </div>
    <div class="Ranking">
      <nuxt-link class="Ranking__Hero" v-for="(hero, i) in heroes" :key="hero.slug" :to="hero.slug">
        <img :src="`/${hero.slug}.jpg`" :alt="hero.name" class="Ranking__Hero__Img"/>
        <div class="Ranking__Hero__Infos">
          <h3>{{ '#' + (i + 1) + ' - ' +hero.name }}</h3>
          <img :src="`/${hero.group}.svg`" :alt="hero.group"/>
          <p>{{ hero.nbFans }} Fan{{ hero.nbFans > 1 ? 's' : ''}}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('heroes', ['heroes'])
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
