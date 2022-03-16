<template>
    <div class="partner">
        <img class="partner__img" :src="require(`@/assets/icons/${image}`)" alt="">
    </div>
</template>

<style lang="scss">
.partner {
    width: 26%;
    padding: 30px 45px;
    &__img {
        display: block;
        margin: 0 auto;
        filter: grayscale(100%);
        transition: all .2s;
        cursor: pointer;
        &:hover {
            transform: scale(1.4);
            filter: grayscale(0);
        }
    }
}
</style>

<script>
export default {
    props: {
        image: String
    }
}
</script>