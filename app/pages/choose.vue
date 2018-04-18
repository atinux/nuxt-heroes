<template>
  <div>
    <h1 class="Title">Choose your Hero</h1>
    <nav class="Tabs">
      <a class="Tabs__Link Tabs__Link--DC" :class="{'Tabs__Link--DC--active': !current}" href="#" @click.prevent="current = 0">
        <img src="dc.svg" alt="DC"/>
      </a>
      <a class="Tabs__Link Tabs__Link--Marvel" :class="{'Tabs__Link--Marvel--active': current}" href="#" @click.prevent="current = 1">
        <img src="marvel.svg" alt="Marvel"/>
      </a>
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
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.Title {
  text-align: center;
  text-transform: uppercase;
  padding: 40px 20px;
  color: #fff;
  font-size: 48px;
}
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
.List {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  &__Item {
    width: 100%;
    cursor: pointer;
    background-color: #000;
    @media (min-width: 576px) {
      width: 50%;
    }
    @media (min-width: 992px) {
      width: 33%;
    }
    img {
      display: inline-block;
      width: 100%;
      opacity: 0.5;
    }
    &:hover {
      img {
        opacity: 1;
      }
    }
  }
}
</style>
