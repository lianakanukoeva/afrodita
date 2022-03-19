<template>
    <header class="header">
        <div class="header__logo">
            Афродита
            <SvgSprite 
                symbol="icon-example"
                size="0 0 24 24"
                class="header__icon"
             /> 
        </div>
        <nav class="header__menu">
            <router-link to="/main"><SvgIcon name="heart_meter" />Главная </router-link>
            <router-link to="/about"><SvgIcon name="star" />Отзывы </router-link>
            <router-link to="/lists"><SvgIcon name="dumbbell" />Услуги</router-link>
        </nav>
        <div class="header__info">
            <div class="header__phone">8(800)00-392-10</div>
            <div class="header__graph">
                <p>График работы</p>
                <div class="header__graph header__graph-timing">
                    <span>пн-вс 9:00-20:00</span>
                    обед 14:00-14:30
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
  export default {
      components: {
        SvgIcon
    },
  }
</script>

<style lang="scss">
.header {
    position: relative;
    background-color: #000;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
    &__logo {
        color: #f89513;
        font-family: Gora-Free;
        font-size: 22px;
    }
    &__menu {
        a {
            color: #fff;
            text-decoration: none;
            svg {
                margin: 0 6px;
                transform: translateY(6px);
            }
            &:hover {
                color: #fabe70;
                svg {
                    path {
                        fill: #fabe70;
                    }
                }
            }
            &.router-link-exact-active {
                color: #f89513;
                svg {
                    path {
                        fill: #f89513;
                    }
                }
            }
        }
    }
    &__graph {
        position: relative;
        color: #f89513;
        p {
            text-align: end;
            text-decoration: underline;
            margin: 0;
        }
        &-timing {
            position: absolute;
            max-width: 150px;
            color: #ccc;
            background-color: #fff;
            box-shadow: 0 0 3px;
            padding: 10px;
            opacity: 0;
            span {
                font-family: OpenSans-Bold;
                font-weight: 700;
                color: #f89513;
            }
        }
        &:hover {
            cursor: default;
            p {
                text-decoration: none;
                color: #ccc;
                transition: color .5s;
            }
            .header__graph-timing{
                opacity: 1;
                transition: opacity .5s;
            }
        }
    }
    &__phone {
        font-family: OpenSans-Bold;
        font-size: 22px;
        font-weight: 600;
        color: #fff;
    }
}
</style>