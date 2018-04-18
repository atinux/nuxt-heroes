<template>
  <div>
    <div class="Hero">
      <img :src="`/flash.jpg`" :alt="'flash'"/>
      <div class="Hero__Infos">
        <h1>flash</h1>
        <p>Rank: #1</p>
        <p>0 Fans</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.Hero {
  display: flex;
  padding: 20px;
  color: #fff;
  justify-content: center;
  background-color: #333;
  img {
    height: 120px;
    margin-right: 20px;
    border-radius: 60px;
  }
  &__Infos {
    h1 {
      padding: 5px 0;
    }
    p {
      padding-top: 10px;
    }
  }
}
</style>
