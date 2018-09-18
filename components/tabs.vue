<template>
  <nav class="Tabs">
    <a class="Tabs__Link Tabs__Link--DC" :class="{'Tabs__Link--DC--active': group === 'dc' }" href="#" @click.prevent="group = 'dc'">
      <img :src="cloudinary('v1524136834/dc.svg', 48)" alt="DC"/>
    </a>
    <a class="Tabs__Link Tabs__Link--Marvel" :class="{'Tabs__Link--Marvel--active': group === 'marvel' }" href="#" @click.prevent="group = 'marvel'">
      <img :src="cloudinary('v1524136836/marvel.svg', 48)" alt="Marvel"/>
    </a>
  </nav>
</template>

<script>

export default {
  props: {
    group: {
      type: String,
      required: true
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
</style>
