<template>
  <div>
    Choose your hero
    <nav>
      <a href="#" @click.prevent="current = 0">DC</a>
      <a href="#" @click.prevent="current = 1">Marvel</a>
    </nav>
    <ul class="List">
      <li class="List__Item" @click="select" v-for="(h, i) in heroes" :key="i" v-show="(current && i > 5) || (!current && i < 6)">
        <img :src="`/${i}.jpg`" alt="hero"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      heroes: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  },
  methods: {
    select () {

    }
  }
}
</script>

<style lang="scss">
.List {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  &__Item {
    width: 33%;
    cursor: pointer;
    img {
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
