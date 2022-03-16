<template>
    <div class="service">
        <div class="service__banner">
            <div class="service__txt">
                <h4 class="service__title">{{ titleName }}</h4>
            </div>
            <img class="service__img" :src="require(`@/assets/img/${image}`)" alt="">
        </div>
        <h4 class="service__title">{{ titleName }}</h4>
        <div class="service__text">{{ text }}</div>
    </div>
</template>

<style lang="scss">
@keyframes ani {
  0% {padding: 0;}
  100% {padding: 30px 45px;}
}
.service {
    max-width: 26%;
    padding: 30px 45px;
    animation: ani .3s forwards;
    &__banner {
        position: relative;
        max-width: 100%;
        max-height: 150px;
        overflow: hidden;
    }
    &__img {
        width: 100%;
        height: 100%;
    }
    &__txt {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #000;
        opacity: 0.6;
        font-weight: 700;
    }
    &__title {
        text-transform: uppercase;
        margin: 20px auto;
        font-weight: 700;
    }
    &__text {
        font-size: 14px;
    }
}
</style>

<script>
export default {
    props: {
        image: String,
        titleName: String,
        text: String
    }
}
</script>