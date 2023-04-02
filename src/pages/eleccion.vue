<template>
  <div>
    <div class="contenedor">
      <div class="image-container" @click="redirect('/bebidas')">
        <img :src="require('../assets/img/bebidas.png')" alt="" />
        <div class="text-container">Bebidas</div>
      </div>
      <div class="image-container" @click="redirect('/comidas')">
        <img :src="require('../assets/img/comidas.png')" alt="" />
        <div class="text-container">Comidas</div>
      </div>
    </div>
  </div>
</template>

<script>
import SharedButton from '@/components/buttons/SharedButton'
export default {
  name: 'IndexPage',
  components: {
    SharedButton,
  },
  data() {
    return {
      loading: null,
    }
  },
  methods: {
    redirect(ruta) {
      this.$router.push(ruta)
    },
  },
}
</script>
<style >
.contenedor {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
.image-container {
  display: inline-block;
  text-align: center;
  border: 2px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.text-container {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
}
</style>
