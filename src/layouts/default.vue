<template>
  <v-app dark>
    <v-main class="HomeLayout container">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.HomeLayout {
  background: rgb(255, 255, 255);
  height: 3000px;
}
@media (min-width: 960px) {
  .container {
    max-width: none !important;
    padding-top: 50px;
  }
}
</style>
