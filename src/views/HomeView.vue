<template>
  <div class="home">
    <nav>
      <router-link to="/main">Главная</router-link> |
      <router-link to="/about">Отзывы</router-link> |
      <router-link to="/lists">Услуги</router-link>
    </nav>
    home
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
