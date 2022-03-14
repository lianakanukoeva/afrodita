<template>
  <div class="home">
    <Header />
    <!-- <nav>
      <router-link to="/main">Главная</router-link> |
      <router-link to="/about">Отзывы</router-link> |
      <router-link to="/lists">Услуги</router-link>
    </nav> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>
