<template>
    <div class="preloader">
        <div class="preloader__img">
            <img src="../assets/img/logo_1.png" alt="">
        </div>
        <router-link to="/main">перейти на сайт</router-link>
    </div>
</template>

<style lang="scss">
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.preloader {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(../assets/img/bg.png) 100% 100% no-repeat;
    background-size: cover;
    font-family: OpenSans-Bold;
    &__img {
        animation: fade-in 1s ease-in;
    }
    a {
        animation: fade-in .6s ease-in;
        background-color: #f89513;
        padding: 20px;
        text-decoration: none;
        color: #ffffff;
        border-radius: 5px;
        text-transform: uppercase;
        transition: .2s ease-in-out;
        &:hover {
            background-color: #000000;
            padding: 30px;
        }
    }
}
</style>