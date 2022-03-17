<template>
  <div class="main">
    <section class="bunner"></section>
    <section class="feauteres">
      <TitleView :title="title" />
      <div class="feauteres__content">
      <FeauteresList
        v-for="(item, index) in feauteres" :key="index"
        :icon="item.icon"
        :paragraph="item.paragraph"
        :txt="item.txt"
        :list="item.list"
       />
      </div>
    </section>
    <section class="news">
      <h3 class="news__title">Последние новости</h3>
      <div class="news__content">
        <div class="news__text-info">
          <InfoCard 
            v-for="(item, index) in pageCheck"
            :key="index" 
            :imageName="item.img"
            :date="item.date"
            :titleName="item.title"
            :txt="item.txt"
          />
          <div class="news__pages">
            <button class="news__number" :class="{'active': index === pageNum}" v-for="(item, index) in pages" :key = "index" @click="pageChange(index)">
                <p>{{index + 1}}</p>
            </button>
          </div>
        </div>
        <div class="news__top">
          <h4>топ новостей</h4>
          <div class="news__mounth">за ноябрь</div>
          <img src="../assets/img/ad.png" alt="">
          <img src="../assets/img/ad_2.png" alt="">
          <img src="../assets/img/ad_3.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.main {
  .bunner {
    width: 100%;
    height: 100vh;
    background: url(../assets/img/banner.png) 100% 100% no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #fff;
  }
  .feauteres {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    background-color: #000;
    color: #fff;
    &__content {
      display: flex;
      justify-content: space-between;
    }
  }
  .news {
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
    &__title {
      text-transform: uppercase;
    }
    &__content {
      display: flex;
    }
    &__text-info {
      padding-right: 20px;
    }
    &__pages {
      display: flex;
      justify-content: center;
    }
    &__number {
      width: 40px;
      height: 30px;
      color: #000;
      font-size: 14px;
      background: none;
      border: 0;
      outline: 0;
      p {
        margin: 0;
      }
      &:hover {
        cursor: pointer;
        p {
          color: #f89513;
        }
      }
      &.active {
        background-color: #000;
        color: #f89513;
        border-radius: 5px;
      }
    }
    &__top {
      text-transform: uppercase;
      font-weight: 700;
      h4 {
        font-weight: 700;
        margin: 0;
      }
      img {
        width: 175px;
        transition: all .2s;
        cursor: pointer;
        margin-top: 20px;
        &:hover {
          width: 185px;
        }
      }
    }
    &__mounth {
      color: #ccc;
    }
  }
}
</style>

<script>
import TitleView from '@/components/TitleView.vue'
import InfoCard from '@/components/InfoCard.vue'
import FeauteresList from '@/components/FeauteresList.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      title: 'Особенности',
      pageNum: 0,
      pageInfo: 3,
      feauteres: [
        {
          icon: 'flower.svg',
          paragraph: 'уникальность',
          txt: 'Мы делаем все, для вашего комфорта',
          list: [
            'Питание включено', 'Багаж(5кг)', 'Душ/баня'
          ]
        },
        {
          icon: 'star.svg',
          paragraph: 'премиум класс',
          txt: 'Наш зал оборудован тренажёрами А-класса',
          list: [
            'Качество', 'Продуктивность', 'Результат'
          ]
        },
        {
          icon: 'painter-palette.svg',
          paragraph: 'личный тренер',
          txt: 'Тренер сделает все для вашего результата',
          list: [
            'Программа', 'Питание', 'План тренировок'
          ]
        },
      ],
      news: [
        {
          img: 'some.png',
          date: '12.10.2021',
          title: 'Похудение с помощью бодибилдинга',
          txt: 'Вдыхание одного литра кислорода эквивалентно «сжиганию» 5 калорий, однако в минуту при самом высоком темпе движений атлет способен вдохнуть не более 3-4 литров кислорода. Это крайне важно для каждого начинающего атлета.'
        },
        {
          img: 'pallete.png',
          date: '01.02.2022',
          title: 'Заражай друзей, получай призы!',
          txt: 'Дополнительно для Вас: пользование сауной и предоставление средств личной гигиены, пользование баром, таблица замеров, дружеская атмосфера и постоянная поддержка. Мы запотимся о вашем комфорте и предлагаем испытать это уже сегодня!'
        },
        {
          img: 'notebook.png',
          date: '22.12.2021',
          title: 'Фрилансер? Выпрями спину!',
          txt: 'Создайте рабочее место под себя. Вот этот инструмент поможет определить, что подходит именно вам и вашему организму. Используйте специальную подставку для ноутбука, если вы проводите за ним больше 2 часов. Настройте высоту и яркость монитора!'
        },
        {
          img: 'pallete.png',
          title: 'Заражай друзей, получай призы!',
          date: '12.10.2021',
          txt: 'Дополнительно для Вас: пользование сауной и предоставление средств личной гигиены, пользование баром, таблица замеров, дружеская атмосфера и постоянная поддержка. Мы запотимся о вашем комфорте и предлагаем испытать это уже сегодня!'
        },
        {
          img: 'notebook.png',
          date: '01.02.2022',
          title: 'Фрилансер? Выпрями спину!',
          txt: 'Создайте рабочее место под себя. Вот этот инструмент поможет определить, что подходит именно вам и вашему организму. Используйте специальную подставку для ноутбука, если вы проводите за ним больше 2 часов. Настройте высоту и яркость монитора!'
        },
        {
          img: 'some.png',
          date: '22.12.2021',
          title: 'Похудение с помощью бодибилдинга',
          txt: 'Вдыхание одного литра кислорода эквивалентно «сжиганию» 5 калорий, однако в минуту при самом высоком темпе движений атлет способен вдохнуть не более 3-4 литров кислорода. Это крайне важно для каждого начинающего атлета.'
        },
        {
          img: 'notebook.png',
          date: '12.10.2021',
          title: 'Фрилансер? Выпрями спину!',
          txt: 'Создайте рабочее место под себя. Вот этот инструмент поможет определить, что подходит именно вам и вашему организму. Используйте специальную подставку для ноутбука, если вы проводите за ним больше 2 часов. Настройте высоту и яркость монитора!'
        },
        {
          img: 'some.png',
          date: '01.02.2022',
          title: 'Похудение с помощью бодибилдинга',
          txt: 'Вдыхание одного литра кислорода эквивалентно «сжиганию» 5 калорий, однако в минуту при самом высоком темпе движений атлет способен вдохнуть не более 3-4 литров кислорода. Это крайне важно для каждого начинающего атлета.'
        },
        {
          img: 'pallete.png',
          title: 'Заражай друзей, получай призы!',
          date: '22.12.2021',
          txt: 'Дополнительно для Вас: пользование сауной и предоставление средств личной гигиены, пользование баром, таблица замеров, дружеская атмосфера и постоянная поддержка. Мы запотимся о вашем комфорте и предлагаем испытать это уже сегодня!'
        },
      ],
      top: [
        'ad.png', 'ad_2.png', 'ad_3.png'
      ]
    }
  },
  components: {
    InfoCard,
    FeauteresList,
    TitleView
  },
  computed: {
      pages() {
          return Math.ceil(this.news.length / 3)
      },
      pageCheck() {
          let start = this.pageNum * this.pageInfo
          let end = start + this.pageInfo;
          return this.news.slice(start, end)
      }
  },
  methods: {
      pageChange(index) {
        this.pageNum = index
        console.log('ok')
      },
  }
}
</script>
