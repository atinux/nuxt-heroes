<template>
  <footer>
    <div class="Footer">
      Credits:
      <a href="https://www.instagram.com/aniketjatav/" target="_blank" rel="noopener">Images</a>
    </div>
    <div class="Footer">
      <a href="https://github.com/Atinux/nuxt-heroes" target="_blank" rel="noopener">Source code</a>
    </div>
  </footer>
</template>

<style lang="scss">
.Footer {
  display: flex;
  padding: 20px;
  color: #fff;
  font-size: 16px;
  justify-content: center;
  border-top: 1px solid #333;
  a {
    text-decoration: none;
    color: #aaa;
    margin-left: 5px;
    &:hover {
      color: #fff;
    }
  }
}
</style>
