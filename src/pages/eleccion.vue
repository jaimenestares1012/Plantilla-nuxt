<template>
  <div class="contenedor-general-eleccion">
    <div class="contenedor-group">
      <div class="contenedor-title">¿COMES O BEBES?</div>
      <div class="contenedor-subtitle">O LAS 2 COSAS</div>
    </div>
    <div class="contenedor-eleccion">
      <div class="image-container-eleccion" @click="redirect('/bebidas')">
        <img
          src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/bebida.png"
          alt=""
        />
        <div class="text-container">Bebidas</div>
      </div>
      <div class="image-container-eleccion" @click="redirect('/comidas')">
        <img
          src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/comida.png"
          alt=""
        />
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
.contenedor-group {
  width: 100%;
  text-align: center;
  background: #ffffff;
  padding: 1rem 0;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 4rem;
}
.contenedor-title {
  width: 95%;
  text-align: center;
  font-weight: 700;
  font-size: 4rem;
}
.contenedor-subtitle {
  width: 95%;
  text-align: center;
  margin-top: -30px;
  font-weight: 500;
  font-size: 3rem;
}
.contenedor-eleccion {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.image-container-eleccion {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container-eleccion:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container-eleccion img {
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
