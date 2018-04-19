<template>
  <div>
    <h1 class="Title">Heroes Ranking</h1>
    <div v-if="connected" class="Choose">
      <nuxt-link to="/choose">{{ user.hero ? 'Change' : 'Choose' }} your hero</nuxt-link>
    </div>
    <div class="Groups">
      <div class="Groups__Stats">
        <div class="Groups__Stats--DC" :style="stats.dc">
          <img src="dc.svg" alt="DC"/>
        </div>
        <div class="Groups__Stats--Marvel" :style="stats.marvel">
          <img src="marvel.svg" alt="Marvel"/>
        </div>
      </div>
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
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['connected']),
    ...mapState('auth', ['user']),
    ...mapState('heroes', ['heroes']),
    stats () {
      let s = { dc: 0, marvel: 0 }
      this.heroes.forEach(hero => { s[hero.group] += hero.nbFans })
      return {
        dc: {
          width: (s.dc / (s.dc + s.marvel) * 100) + '%'
        },
        marvel: {
          width: (s.marvel / (s.dc + s.marvel) * 100) + '%'
        }
      }
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
  padding: 20px;
  &__Stats {
    height: 48px;
    display: flex;
    align-items: stretch;
    &--DC {
      display: flex;
      overflow: hidden;
      align-content: center;
      background-color: #266BB0;
      img {
        height: 24px;
        float: left;
        margin-left: 20px;
      }
    }
    &--Marvel {
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: flex-end;
      background-color: #941112;
      img {
        height: 24px;
        float: right;
        margin-right: 20px;
      }
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
