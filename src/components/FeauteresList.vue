<template>
    <div class="feauteres__list">
      <div class="feauteres__icon">
        <img :src="require(`@/assets/icons/${icon}`)" alt="" >
      </div>
      <p class="feauteres__paragraph">{{ paragraph }}</p>
      <p class="feauteres__text">{{ txt }}</p>
      <ul class="feauteres__ul">
        <li v-for="(li, k) in list" :key="k"><p>• {{ li }}</p></li>
      </ul>
    </div>
</template>

<style lang="scss">
.feauteres__list {
    max-width: 30%;
    text-align: center;
    .feauteres__paragraph {
      font-family: OpenSans-Bold;
        text-transform: uppercase;
        font-size: 16px;
    }
    .feauteres__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      margin: 0 auto;
      border-radius: 50%;
      background-color: #f89513;
      img {
        width: 65%;
        height: 65%;
      }
    }
    .feauteres__ul {
      text-align: left;
      li {
        margin: 0 20%;
        width: 80%;
      }
    }
}
</style>

<script>
export default {
    props: {
        icon: String,
        paragraph: String,
        txt: String,
        list: Array
    }
}
</script>