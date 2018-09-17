<template>
  <div>
    <h-header/>
    <nuxt/>
    <h-footer/>
  </div>
</template>

<script>
import hHeader from '@/components/header'
import hFooter from '@/components/footer'

export default {
  components: {
    hHeader,
    hFooter
  }
}
</script>

<style lang="scss">
html
{
  font-family: "Impact", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #000;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.Title {
  text-align: center;
  text-transform: uppercase;
  padding: 40px 20px;
  color: #fff;
  font-size: 48px;
}
</style>
