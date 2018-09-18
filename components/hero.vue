<template>
  <div class="Hero">
    <img :src="cloudinary(hero.image, 120)" :alt="hero.name" class="Hero__Img"/>
    <div class="Hero__Infos">
      <h3>{{ '#' + (rank + 1) + ' - ' +hero.name }}</h3>
      <img :src="(hero.group === 'dc' ? '/dc.svg' : '/marvel.svg')" :alt="hero.group"/>
      <p>{{ hero.nbFans }} Fan{{ hero.nbFans > 1 ? 's' : ''}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props:{
    hero: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('heroes', ['heroes']),
    rank () {
      return this.heroes.findIndex((hero) => hero.slug === this.hero.slug)
    }
  },
  methods: {
    cloudinary (slug, size = 128) {
      return `https://res.cloudinary.com/wikeo/image/upload/${slug}`
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
</style>
