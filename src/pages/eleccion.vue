<template>
  <div class="contenedor-general-eleccion">
    <div class="contenedor-group">
      <div class="contenedor-title">¿COMES O BEBES?</div>
      <div class="contenedor-subtitle">O LAS 2 COSAS</div>
    </div>
    <div class="contenedor-buttons">
      <div class="contenedor-butt" @click="inicioRefresh">
        <div class="btn-stylos" style="font-size: 2rem; padding: 10px">
          Inicio
        </div>
      </div>
      <div class="contenedor-butt" @click="atras">
        <v-btn
          class="btn-stylos"
          style="
            padding: 33px;
            font-size: 1.7rem;
            background: #ffffff;
            border: none;
            box-shadow: none;
            letter-spacing: 0px;
            text-transform: capitalize;
          "
        >
          <i class="fas fa-undo-alt" style="font-size: 2.5rem"></i>
          volver</v-btn
        >
      </div>
    </div>
    <div class="contenedor-eleccion">
      <div class="image-container-eleccion" @click="redirect('/bebidas')">
        <img
          src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/bebida.png"
          alt=""
        />
        <div class="text-container" style="margin-top: 5.3rem">Bebida</div>
      </div>
      <div class="image-container-eleccion" @click="redirect('/comidas')">
        <img
          src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/comida.png"
          alt=""
        />
        <div class="text-container">Comida</div>
      </div>
    </div>
    <div class="contenedor-eleccion-cart">
      <div
        class="contenedor-butt-eleccion-cart"
        @click="redirect('/carrito-resumen')"
      >
        <v-btn
          class="btn-stylos-eleccion-cart"
          style="
            padding: 33px;
            font-size: 2rem;
            box-shadow: none;
            border: none;
            background: #ffffff;
            height: 100px;
          "
        >
          <!-- <i class="fas fa-shopping-cart" style="font-size: 4rem"></i> -->
          <img
            src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/Carrito.png"
            alt=""
          />
          {{ conteoCanasta }}
        </v-btn>
      </div>
    </div>
    <div class="contenedor-img">
      <img
        src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/FaldonOK.png"
        alt="Imagen"
        style="width: 100vw; height: 15vw"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      loading: null,
    }
  },
  methods: {
    redirect(ruta) {
      this.$router.push(ruta)
    },
    inicioRefresh() {
      this.$store.commit('producto/SET_CLEAR')
      this.$router.push('/')
    },
    atras() {
      this.$router.back()
    },
  },
  computed: {
    ...mapState('producto', ['carProducto']),
    conteoCanasta() {
      return this.carProducto.length == 0 ? '' : this.carProducto.length
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
.contenedor-buttons {
  width: 100%;
  margin-top: 80px;
  display: flex;
  text-align: center;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}

.contenedor-butt {
  margin: auto;
  width: 50%;
}
.btn-stylos {
  border: 2px solid rgb(0, 0, 0);
  margin: auto;
  width: 50%;
}
.contenedor-group {
  width: 100%;
  text-align: center;
  background: #ffffff;
  padding: 2rem 0;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 4rem;
}
.contenedor-img {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.contenedor-title {
  width: 95%;
  text-align: center;
  font-weight: 850;
  font-size: 4rem;
}
.contenedor-subtitle {
  width: 95%;
  text-align: center;
  margin-top: -30px;
  font-weight: 720;
  font-size: 2.6rem;
}
.contenedor-eleccion {
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  margin: 120px auto;
}

.contenedor-eleccion-cart {
  margin-top: 50px;
  width: 100%;
  display: flex;
  text-align: center;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}
.contenedor-butt-eleccion-cart {
  margin: auto;
  width: 500px;
}
.btn-stylos-eleccion-cart {
  border-radius: 20px;
  width: 100%;
  margin: 0 20px;
}

.image-container-eleccion {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  padding: 60px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-bottom: 10px;
}

.image-container-eleccion:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.image-container-eleccion img {
  width: 100%;
  height: auto;
}

.text-container {
  font-size: 2.6rem;
  font-weight: bold;
  text-align: center;
  margin: 4rem 0 1rem 0;
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
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
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
