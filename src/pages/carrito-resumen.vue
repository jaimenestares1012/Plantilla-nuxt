<template>
  <div class="contenedor-carrito-resumen-eleccion">
    <div class="contenedor-carrito-resumen-title">
      <div>Mi carrito</div>
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
          style="padding: 33px; font-size: 1.4rem; background: #ffffff"
        >
          <v-icon dark style="font-size: 2.5rem"> mdi-arrow-u-left-top </v-icon>
          volver</v-btn
        >
      </div>
    </div>
    <div class="dafault-message" v-if="condicion == 0">
      No cuenta con ningun producto seleccionado
    </div>
    <div
      class="contenedor-productos"
      v-for="(dat, index) in carProducto"
      :key="index"
      v-else
    >
      <div class="contendor-iterador">
        <div class="contenedor-img-text">
          <div class="contenedor-img-resumen">
            <img
              :src="`https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com${dat.url}`"
              alt=""
            />
          </div>

          <div class="text-description">{{ dat.description }}</div>
        </div>
        <div class="group-contenedores">
          <div class="contenedor-cantidad">{{ dat.cantidad }}</div>
          <div class="contenedor-cantidad" @click="restCantidad(dat)">-</div>
          <div class="contenedor-cantidad" @click="addCantidad(dat)">+</div>
        </div>
      </div>
    </div>
    <div class="contenedor-exit">
      <div class="contenedor-butt-exit" @click="home">
        <div class="btn-stylos-exit" style="font-size: 2rem; padding: 10px">
          Sigue pidiendo
        </div>
      </div>
      <div class="contenedor-butt-exit" @click="sendData">
        <div class="btn-stylos-exit" style="font-size: 2rem; padding: 10px">
          Terminar pedido
        </div>
      </div>

      <div class="contenedor-butt-exit" @click="redirect">
        <v-btn
          class="btn-stylos-exit"
          style="padding: 33px; font-size: 1.4rem; background: #ffffff"
        >
          <v-icon dark style="font-size: 2.5rem"> mdi-cart</v-icon>
          {{ conteoCanasta }}</v-btn
        >
      </div>
    </div>
    <div class="contenedor-img">
      <img
        src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/FaldonOK.png"
        alt="Imagen"
        style="width: 100vw; height: 20vw"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      id: null,
      name: null,
      description: null,
    }
  },
  methods: {
    restCantidad(data) {
      this.$store.commit('producto/SET_DES_PRODUCTOS', data)
    },
    addCantidad(data) {
      this.$store.commit('producto/SET_ADD_PRODUCTOS', data)
    },
    async sendData() {
      this.$showSpinner(true)
      let paylodad = {
        data: this.carProducto,
      }
      await this.$store.dispatch('producto/sendDataStore', paylodad)
      this.$showSpinner(false)
      this.$router.push('/final')
    },
    inicioRefresh() {
      this.$router.push('/')
    },
    redirect() {
      this.$router.push('/carrito-resumen')
    },
    atras() {
      this.$router.back()
    },
    home() {
      this.$router.push('/eleccion')
    },
  },
  computed: {
    ...mapState('producto', ['carProducto']),
    condicion() {
      return this.carProducto.length
    },
    conteoCanasta() {
      return this.carProducto.length
    },
  },
  mounted() {},
}
</script>

<style>
.contenedor-carrito-resumen-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}

.contenedor-carrito-resumen-title {
  width: 100%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 4rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 2rem 0;
  font-size: 4rem;
  background: rgb(255, 255, 255);
  width: 100%;
}

.contenedor-productos {
  margin-top: 20px;
}
.dafault-message {
  background: rgb(255, 255, 255);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 4rem;
  width: 60%;
  padding: 3rem;
  margin: auto;
  margin-top: 30px;
}

.contendor-iterador {
  width: 90%;
  margin: auto;
  margin-top: 40px;
  display: flex;
}
.contenedor-img-text {
  width: 40%;
  text-align: center;
}
.group-contenedores {
  width: 60%;
  display: flex;
}
.contenedor-buttons {
  width: 100%;
  display: flex;
  margin-top: 80px;
  text-align: center;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}
.contenedor-exit {
  margin-top: 50px;
  width: 100%;
  display: flex;
  text-align: center;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}
.contenedor-butt-exit {
  margin: auto;
}
.btn-stylos-exit {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
  margin: 0 20px;
}

.contenedor-butt {
  margin: auto;
  width: 50%;
}
.btn-stylos {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid rgb(0, 0, 0);
  margin: auto;
  width: 50%;
}
.contenedor-img-resumen {
  width: 45%;
  margin: auto;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  overflow: hidden;
}
.contenedor-img-resumen img {
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  object-fit: cover;
}
.text-description {
  font-size: 1.5rem;
  font-weight: 500;
}
.contenedor-cantidad {
  width: 10%;
  margin: auto;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  font-weight: 600;
  font-size: 2rem;
  padding: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: none;
  color: #000000;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.contenedor-cantidad:hover {
  background-color: #c0c0c0;
}
.contenedor-img {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>