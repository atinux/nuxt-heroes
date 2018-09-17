<template>
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
</template>

<script>
export default {
  props: {
    heroes: {
      type: Array,
      required: true
    }
  },
  computed: {
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
</style>
