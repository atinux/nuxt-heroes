<template>
  <div>
    <h1 class="Title">Heroes Ranking</h1>
    <div v-if="connected" class="Choose">
      <nuxt-link to="/choose">{{ user.hero ? 'Change' : 'Choose' }} your hero</nuxt-link>
    </div>
    <h3 class="SubTitle">{{ totalFans }}</h3>
    <h-statsbar :heroes="heroes"/>
    <h-ranking :heroes="heroes" :user="user"/>
  </div>
</template>

<script>
import hStatsbar from '@/components/statsbar'
import hRanking from '@/components/ranking'

import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    hStatsbar,
    hRanking
  },
  computed: {
    ...mapGetters('auth', ['connected']),
    ...mapState('auth', ['user']),
    ...mapState('heroes', ['heroes']),
    totalFans () {
      let fans = 0
      this.heroes.filter((hero) => { fans += hero.nbFans })
      return fans + ' fan' + (fans > 1 ? 's' : '')
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
</style>
