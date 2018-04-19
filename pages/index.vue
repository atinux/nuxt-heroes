<template>
  <div>
    <h1 class="Title">Heroes Ranking</h1>
    <div v-if="connected" class="Choose">
      <nuxt-link to="/choose">{{ user.hero ? 'Change' : 'Choose' }} your hero</nuxt-link>
    </div>
    <div class="Groups">
      <div class="Groups__Stats">
        <div class="Groups__Stats--DC" :style="stats.dc">
          <img :src="cloudinary('v1524136834/dc.svg', 24)" alt="DC"/>
        </div>
        <div class="Groups__Stats--Marvel" :style="stats.marvel">
          <img :src="cloudinary('v1524136836/marvel.svg', 24)" alt="Marvel"/>
        </div>
      </div>
    </div>
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
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['connected']),
    ...mapState('auth', ['user']),
    ...mapState('heroes', ['heroes']),
    stats () {
      let s = { dc: 0, marvel: 0 }
      this.heroes.forEach(hero => { s[hero.group] += hero.nbFans })
      if (s.dc + s.marvel) {
        return {
          dc: { width: (s.dc / (s.dc + s.marvel) * 100) + '%' },
          marvel: { width: (s.marvel / (s.dc + s.marvel) * 100) + '%' }
        }
      } else {
        return {
          dc: { width: '50%' },
          marvel: { width: '50%' }
        }
      }
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
.Groups {
  padding: 20px 10px;
  &__Stats {
    height: 48px;
    display: flex;
    align-items: stretch;
    &--DC {
      display: flex;
      overflow: hidden;
      align-items: center;
      background-color: #266BB0;
      transition: width 0.5s linear;
      img {
        height: 24px;
        margin-left: 20px;
      }
    }
    &--Marvel {
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: flex-end;
      background-color: #941112;
      transition: width 0.5s linear;
      img {
        height: 24px;
        margin-right: 20px;
      }
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
