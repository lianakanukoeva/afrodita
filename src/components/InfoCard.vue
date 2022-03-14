<template>
    <div class="info-card">
        <div class="info-card__img">
            <img :src="require(`@/assets/img/${imageName}`)" alt="">
        </div>
        <div class="info-card__info">
            <div class="info-card__date">
                {{ date }}
            </div>
            <div class="info-card__title">
                {{ titleName }}
            </div>
            <div class="info-card__text">
                {{ txt }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.info-card {
    display: flex;
    padding: 40px 0;
    &__img {
        box-sizing: border-box;
        img {
            display: block;
            border-radius: 50%;
            overflow: hidden;
            background-color: #ccc;
        }
    }
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 50px;
    }
    &__date {
        color: #ccc;
        font-weight: 400;
    }
    &__title {
        color: #000;
        font-weight: 700;
    }
    &__text {
        font-weight: 300;
    }
}
</style>

<script>
export default {
    props: {
        imageName: String,
        date: String,
        titleName: String,
        txt: String
    }
}
</script>