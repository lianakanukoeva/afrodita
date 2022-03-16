<template>
    <div class="lists">
        <section class="lists_section">
            <TitleView :title="lists_title" />
            <div class="lists__content">
                <ServiceList
                    v-for="(item, index) in services"
                    :key="index"
                    :image="item.image"
                    :titleName="item.titleName"
                    :text="item.text"
                />
            </div>
        </section>
        <section class="partners">
            <TitleView :title="partners_title" />
            <div class="partners__list">
                <PartnerIcon
                v-for="(item, index) in partners"
                :key="index"
                 :image="item" />
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.lists{
    max-width: 90%;
    margin: 50px auto;
    &__content {
        position: relative;
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
}
.partners {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 50px auto;
    }
}
</style>

<script>
import PartnerIcon from '@/components/PartnerIcon.vue'
import TitleView from '@/components/TitleView.vue'
import ServiceList from '@/components/ServicesList.vue'
export default {
    name: 'ListsView',
    data() {
        return {
            lists_title: 'Услуги',
            partners_title: 'Партнеры',
            services: [
                {
                    image: 'fitnes.png',
                    titleName: 'фитнес',
                    text: 'Фитнес - это основное направление в нашем центре. Открыто 6 залов для занятий с 7-00 до 22-00. Работают 24 фитнес-тренера, есть авторские и классические программы для похудения, восстановления фигуры, здоровья и молодости. Занятия с персональным тренером помогут достичь максимального результата в сжатые сроки.'
                },
                {
                    image: 'apple.png',
                    titleName: 'диетолог',
                    text: 'Поможет вам получить более заметный результат от тренировок. Создаст меню на каждый день, с учетом вкусовых предпочтений и особенностей здоровья. Проанализирует текущий рацион и укажет на ошибки. Поможет сделать питание разнообразным и полезным, объяснит доступно о важной роли тех или иных витаминов и микроэлементов.'
                },
                {
                    image: 'yoga.png',
                    titleName: 'йога',
                    text: 'Гармония души и тела – это базовая составляющая здоровья и красоты. Наш зал для занятий йоги открыт для людей всех возрастов без ограничений. Отдельным направлением является йога для беременных с более щадящей программой. Йога тренеры имеют сертификаты и являются победителями международных конкурсов..'
                },
                {
                    image: 'tpx.png',
                    titleName: 'петли tpx',
                    text: 'Новое направление для нашего центра, которое стало одним из самых популярных и востребованных. Программа TRX Suspension Training создана для людей с начальным уровнем подготовки и позволяет эффективно тренироваться, используя нарастающую нагрузку, которая зависит от силы и массы человека. Петли усиливают ловкость, гибкость и подвижность. В нашем центре проводятся индивидуальные и групповые тренировки ТРХ.'
                },
                {
                    image: 'kross.png',
                    titleName: 'кроссфит',
                    text: 'Авторская запатентованная программа тренировки, включающая элементы тяжелой атлетики, занятий с гирями, гимнастики. Данная программа безупречно подходит для ежедневных тренировок людям с сидячим образом жизни. Преимущество кроссфита в том, что он одинаково хорошо воспринимается и мужчинами, и женщинами и подходит для семейных групповых тренировок. Высокая эффективности программы обусловлена чуткими рекомендациями наших сертифицированных тренеров.'
                },
                {
                    image: 'bas.png',
                    titleName: 'бассейн',
                    text: 'Большой 50 метровый бассейн, разделенный на 6 дорожек, позволит заниматься индивидуальным плаванием или аквааэробикой. Занятия проводит сертифицированный тренер – Ситник Ирина Валерьевна, известная своими успехами в школе подготовки олимпийского резерва. В бассейне есть место для занятий с детьми (ежедневно с 12-00 до 14-00), а также проводится аквааэробика для беременных каждый день в 10-00 и 19-00.'
                },
            ],
            partners: [
                'flamingo.png', 'malibu.png', 'lion.png', 'arni.png', 'grif.png', 'atletic.png'
            ]
        }
    },
    components: {
        TitleView,
        ServiceList,
        PartnerIcon
    },
}
</script>