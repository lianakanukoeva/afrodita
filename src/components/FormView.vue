<template>
    <form @submit.prevent="" action="" class="form">
        <h2 class="form__title">Оставить отзыв</h2>
        <div class="form__info">
            <div class="form__person">
                <label for="">Ваше имя</label>
                <input type="text" id="" placeholder="Имя">
            </div>
            <div class="form__person">
                <label for="">Ссылка на профиль VK</label>
                <input type="text" id="" placeholder="vk.com\example">
            </div>
        </div>
        <div class="form__person">
            <label for="">Текст отзыва</label>
            <input type="text" name="" id="">
        </div>
        <div class="form__buttons">
            <div class="form__radio">
                <div>Отображать фото в отзыве?</div>
                <input type="radio" name="" id=""><label for="">Да </label>
                <input type="radio" name="" id=""><label for="">Нет</label>
            </div>
            <button type="submit">Отправить</button>
        </div>
    </form>
</template>

<style lang="scss">
.form {
    width: 55%;
    background-color: rgb(238, 238, 238);
    padding: 50px 150px;
    &__title {
        font-size: 48px;
        font-weight: 700;
        text-align: center;
    }
    &__info {
        display: flex;
    }
    &__person {
        display: flex;
        flex-direction: column;
        width: 100%;
        input {
            transition: all .7s;
            padding: 15px;
            border: 0;
            border-radius: 3px;
            &:focus {
                border: 0;
                outline: 1px solid orange;
            }
        }
        &:nth-child(1) {
            margin-right: 10px;
        }
        &:nth-child(2) {
            margin-left: 10px;
        }
        &:nth-child(3) {
            margin-top: 30px;
            input {
                height: 120px;
            }
        }
    }
    &__buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        button {
            padding: 15px;
            background-color: #000;
            color: #fff;
            outline: none;
            border: 0;
            border-radius: 3px;
            font-weight: 700;
            cursor: pointer;
            transition: all .2s;
            &:hover {
                color: #f89513;
                padding: 17px;
            }
        }
    }
    &__radio {
        input:checked,
        input:not(:checked){
            display: inline-block;
            line-height: 20px;
            margin: -5px 5px 0 0;
            height: 20px;
            width: 20px;
            vertical-align: middle;
        }
    }
}
</style>