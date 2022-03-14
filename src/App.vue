<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
      return {
          preloader: true,
      }
  },
  methods: {
    isClick() {
      console.log('true')
      this.preloader = false
      console.log(this.preloader)
    }
  }
}
</script>

<style lang="scss">
body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  line-height: 1.42;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}

*, *::before, after{
  box-sizing: border-box;
}

body, html {
  widows: 100%;
  height: 100%;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.wrapper {
  position: relative;
  width: 100%;
  min-width: 100%;
  overflow: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  margin-top: 0;
}
</style>
