<template>
  <div class="about">
    <section class="comments">
      <TitleView :title="title" />
      <div class="comments__content">
        <InfoCard 
          v-for="(item, index) in pageCheck"
          :key="index" 
          :imageName="item.img"
          :date="item.date"
          :titleName="item.title"
          :txt="item.txt"
        />
        <div class="comments__pages">
          <button class="comments__number" :class="{'active': index === pageNum}" v-for="(item, index) in pages" :key = "index" @click="pageChange(index)">
              <p>{{index + 1}}</p>
          </button>
        </div>
      </div>
    </section>
    <div class="attantion">
      <div class="attantion__text">
        Помимо перечисленных услуг, мы предоставляем консультации профессиональных диетологов, тренеров, психологов. Также есть кабинет массажа, зал спа рядом с бассейном и возможность арендовать центр для проведения массовых мероприятий. <span>Ждем ваших заявок!</span>
      </div>
    </div>
    <section class="comment-form">
      <FormView />
    </section>
  </div>
</template>

<style lang="scss">
.about {
  .comments {
      width: 90%;
      margin: 0 auto;
      padding: 50px 0;
      &__title {
        text-transform: uppercase;
        font-size: 48px;
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
  }
  .attantion {
    background: url(../assets/img/pattern.png) 100% 100%;
    background-color: #000;
    color: #fff;
    &__text {
      width: 40%;
      padding: 30px 0;
      margin: 0 auto;
      span {
        font-weight: 700;
        color: #f89513;
      }
    }
  }
  .comment-form {
    display: flex;
    justify-content: center;
    padding: 90px 0;
  }
}
</style>

<script>
import TitleView from '@/components/TitleView.vue'
import InfoCard from '@/components/InfoCard.vue'
import FormView from '@/components/FormView.vue'
export default {
  name: 'AboutView',
  data() {
    return {
      title: 'Отзывы',
      pageNum: 0,
      pageInfo: 3,
      news: [
        {
          img: 'voronov.png',
          date: '12.10.2021',
          title: 'Алексей Воронов',
          txt: 'Пришел, чтобы похудеть немного к лету, но благодаря тренеру Александру Ковалеву, получилось накачать нормальные банки. Втянулся, теперь занимаюсь регулярно, 2 раза в неделю, доволен и всем советую. Кстати, польза от тренировок намного заметнее, если придерживаться ПП. Рацион мне составили на неделю, но я его повторяю, не надоедает.'
        },
        {
          img: 'smolnaya.png',
          date: '01.02.2022',
          title: 'Ирина Смолина',
          txt: 'Подарили на день рождения абонемент в бассейн, пришлось воспользоваться. Сама бы я сюда не пришла, не очень нравится плавать с мужиками, которые пялятся постоянно, администрации следует обратить внимание на этот вопрос! Еще бросилось в глаза хамство обслуживающего персонала. Уборщица в раздевалке вела себя, как будто это к ней в гости пришли.'
        },
        {
          img: 'logo_1.png',
          date: '22.12.2021',
          title: 'Владимир Савельев',
          txt: 'Норм клуб, железа хватает, но техника устаревшая. За эту цену – прокатит. Если хотите большего, то обращайтесь в специализированные тренажерки с новым железом и европейской техникой.'
        },
        {
          img: 'savina.png',
          date: '12.10.2021',
          title: 'Ирина Савина',
          txt: 'Занимаюсь 4й месяц на петлях ТРХ и очень нравится результат. Даже знакомые отметили, что я помолодела, появилась талия, ножки постройнели. Нагрузка сначала была непривычная, но втягиваешься быстро, тем более, что отражение в зеркале радует. Цены приятные, а если платить на полгода вперед, то вообще выгодно получается, скидка почти 30%.'
        },
        {
          img: 'logo_1.png',
          date: '01.02.2022',
          title: 'Мисчеслав Стилински',
          txt: 'Норм клуб, железа хватает, но техника устаревшая. За эту цену – прокатит. Если хотите большего, то обращайтесь в специализированные тренажерки с новым железом и европейской техникой.'
        }
      ]
    }
  },
  components: {
    InfoCard,
    FormView,
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