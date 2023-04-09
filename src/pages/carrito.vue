<template>
  <div class="contenedor-producto-eleccion">
    <div class="contenedor-producto-title">
      <div>¿CUANTOS QUIERES?</div>
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
            border: none;
            box-shadow: none;
            background: #ffffff;
            letter-spacing: 0px;
            text-transform: capitalize;
          "
        >
          <i class="fas fa-undo-alt" style="font-size: 2.5rem"></i>
          volver</v-btn
        >
      </div>
    </div>
    <div class="contendor-car-selected">
      <div class="contenedor-img-text-car">
        <div class="contenedor-imagen-selected">
          <img
            :src="`https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com${this.url}`"
            alt=""
            :style="{ width: tamano + 'rem' }"
          />
        </div>
        <div class="text-description-secu">{{ this.description }}</div>
      </div>
    </div>
    <div class="contenedor-botones" @click="adicionProducto">
      <v-btn
        class="boton-anadir"
        :loading="loading"
        style="
          padding: 30px 26px 30px 26px;
          font-family: SAMSUNGSHARPSANS-MEDIUM;
          font-size: 39px;
          background: #ffffff;
        "
      >
        <span class="simbolo">+ </span> Añadir</v-btn
      >
    </div>
    <div class="contenedor-exit">
      <div class="contenedor-butt-exit" @click="home">
        <div class="btn-stylos-exit" style="font-size: 33px; padding: 10px">
          Sigue pidiendo
        </div>
      </div>
      <div class="contenedor-butt-exit" @click="redirect">
        <div class="btn-stylos-exit" style="font-size: 33px; padding: 10px">
          Terminar pedido
        </div>
      </div>

      <div class="contenedor-butt-exit" @click="redirect">
        <v-btn
          class="btn-stylos-exit"
          style="
            font-size: 1.4rem;
            background: #ffffff;
            border: none;
            box-shadow: none;
          "
        >
          <!-- <i class="fas fa-shopping-cart" style="font-size: 2.5rem"></i> -->
          <img
            src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/Carrito.png"
            alt=""
          />
          {{ conteoCanasta }}</v-btn
        >
      </div>
    </div>
    <div class="contenedor-img">
      <img
        src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/FaldonOK.png"
        alt="Imagen"
        style="width: 100vw; height: 15vw"
      />
    </div>
    <ModalAlert ref="modalAlert" />
  </div>
</template>

<script>
import ModalAlert from '@/components/modals/ModalAlert'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      id: null,
      name: null,
      description: null,
      url: null,
      loading: false,
      taman: '20',
    }
  },
  components: {
    ModalAlert,
  },
  methods: {
    adicionProducto() {
      this.loading = true
      console.log('adicionProducto')
      setTimeout(() => {
        this.loading = false
      }, 600)
      const producto = {
        name: this.name,
        description: this.description,
        cantidad: 1,
        taman: this.taman,
        id: this.id,
        url: this.url,
      }
      this.$store.commit('producto/SET_ADD_PRODUCTO', producto)
    },

    home() {
      this.$router.push('/eleccion')
    },
    redirect() {
      this.$router.push('/carrito-resumen')
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
    tamano() {
      return this.taman
    },
  },

  mounted() {
    this.$showSpinner(true)
    const valores = window.location.search
    const urlParams = new URLSearchParams(valores)
    this.id = urlParams.get('id')
    this.name = urlParams.get('name')
    this.description = urlParams.get('description')
    this.url = urlParams.get('url')
    this.taman = urlParams.get('taman')
    console.log('<----------------------->', this.id)
    console.log('<----------------------->', this.name)
    console.log('<----------------------->', this.description)
    console.log('<----------------------->', this.url)
    console.log('<----------------------->', this.taman)
    this.$showSpinner(false)
  },
}
</script>

<style>
.contenedor-producto-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.contenedor-producto-title {
  width: 100%;
  text-align: center;
  font-weight: 850;
  padding: 2rem 0;
  background: rgb(255, 255, 255);
  margin-bottom: 4rem;
  font-size: 4rem;
}
.simbolo {
  font-size: 2.7rem;
  border: 2px solid rgb(0, 0, 0);
  background-color: #fff;
  position: absolute;
  padding: 0px 10px 0px 10px;
  margin-right: 210px;
  /* margin-bottom: 0.4px; */
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

.contendor-car-selected {
  width: 100%;
  margin: auto;
  margin-top: 80px;
  display: flex;
}
.contenedor-img-text-car {
  width: 100%;
  text-align: center;
}

.contenedor-imagen-selected {
  width: 450px;
  height: 450px;
  display: flex;
  margin: auto;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 0px;
  overflow: hidden;
}
.contenedor-imagen-selected img {
  margin: auto;
  text-align: center;
  object-fit: cover;
}
.text-description-secu {
  margin-top: 20px;
  font-size: 2.8rem;
  font-weight: 700;
}

.contenedor-butt {
  margin: auto;
  width: 50%;
}

.contenedor-exit {
  margin-top: 100px;
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
  border: 2px solid rgb(0, 0, 0);
  width: 100%;
  letter-spacing: 0px;
  font-family: 'SAMSUNGSHARPSANS-MEDIUM';
  margin: 0 10px;
}
.btn-stylos {
  border: 2px solid rgb(0, 0, 0);
  margin: auto;
  width: 50%;
}
.contenedor-producto .image-producto img {
  width: 100%;
  margin: auto;
}
.text-producto {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  color: #333;
}
.text-producto-description {
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
  color: #333;
}

.contenedor-botones {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  /* border: 1px solid rgb(0, 0, 0); */
}

.boton-anadir {
  background-color: #ffffff;
  padding: 0.4rem 0;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 0px;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.boton-anadir:hover {
  background-color: #fff;
  color: #000;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.boton-anadir:active {
  background-color: #0023a3;
  color: #fff;
}
.contenedor-img {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>