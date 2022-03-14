<template>
    <div class="feauteres__list">
        <div class="feauteres__icon">
          <img :src="require(`@/assets/icons/${icon}`)" alt="" >
        </div>
        <p class="feauteres__paragraph">{{ paragraph }}</p>
        <p class="feauteres__text">{{ txt }}</p>
        <ul class="feauteres__ul">
          <li v-for="(li, k) in list" :key="k">• {{ li }}</li>
        </ul>
      </div>
</template>

<style lang="scss">
.feauteres__list {
    max-width: 30%;
    text-align: center;
    .feauteres__paragraph {
        text-transform: uppercase;
        font-size: 16px;
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