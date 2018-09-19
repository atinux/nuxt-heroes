<template>
  <ul class="Fans">
    <li class="Fans__Item" v-for="fan in fans" :key="fan.githubId">
      <a :href="`https://github.com/${fan.username}`" target="_blank" rel="noopener">
        <img :src="`${avatar(fan.githubId)}?s=48`" :srcset="`${avatar(fan.githubId)}?s=96 2x`" width="48" height="48" :alt="fan.username"/> {{ fan.username }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props:{
    fans: {
      type: Array,
      required: true
    }
  },
  methods: {
    avatar(githubId) {
      return `https://avatars0.githubusercontent.com/u/${githubId}`
    }
  }
}
</script>

<style lang="scss">
.Fans {
  list-style: none;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  &__Item {
    a {
      color: #fff;
      display: flex;
      padding: 10px;
      align-items: center;
      text-decoration: none;
    }
    img {
      margin-right: 10px;
      border-radius: 48px;
    }
  }
}
</style>
