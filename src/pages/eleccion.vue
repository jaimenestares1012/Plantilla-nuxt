<template>
  <div class="contenedor-general-eleccion">
    <!-- font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  color: #333; -->
    <div class="contenedor-title">
      <div>¿COMES O BEBES?</div>
      <div>O LAS 2 COSAS</div>
    </div>
    <div class="contenedor-eleccion">
      <div class="image-container" @click="redirect('/bebidas')">
        <img :src="require('../assets/img/bebida.png')" alt="" />
        <div class="text-container">Bebidas</div>
      </div>
      <div class="image-container" @click="redirect('/comidas')">
        <img :src="require('../assets/img/comida.png')" alt="" />
        <div class="text-container">Comidas</div>
      </div>
    </div>
    <div class="contenedor-carrito" @click="redirect('/carrito')">
      <div class="carrito-compras">
        <img :src="require('../assets/img/carrito.png')" alt="" />
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

<style>
.contenedor-general-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.contenedor-title {
  width: 95%;
  text-align: center;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 2rem;
}
.contenedor-eleccion {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container img {
  width: 100%;
  height: auto;
}

.text-container {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  color: #333;
}

.contenedor-carrito {
  width: 86%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 4rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.contenedor-carrito:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}
.carrito-compras img {
  width: 100%;
  height: auto;
}
</style>
