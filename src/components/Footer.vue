<template>
    <footer class="footer">
        <div class="footer__txt">
            Сделано с любовью и старанием <br>
            на курсе "HTML+CSS" в <a href="http://">Loftschool</a>. <br>
            Автор работы: <a href="http://">Канукоева Лиана</a>
        </div>
        <div class="footer__logo">Афродита</div>
        <div class="footer__socials">Наши социальные сети</div>
    </footer>
</template>

<style lang="scss">
.footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 15px 0;
    &__txt {
        a {
            font-family: OpenSans-Bold;
            color: #fff;
            font-weight: 600;
            transition: color .25s;
            &:hover {
                color:#f89513;
                text-decoration: none;
            }
        }
    }
    &__logo {
        font-family: Gora-Free;
        color: #f89513;
    }
    &__socials {
        font-family: OpenSans-Bold;
    }
}
</style>