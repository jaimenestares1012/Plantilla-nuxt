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
            background: #ffffff;
            font-family: sans-serif;
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
          />
          <div class="text-description">{{ this.name }}</div>
        </div>

        <div class="text-description-secu">{{ this.description }}</div>
      </div>
    </div>
    <div class="contenedor-botones" @click="adicionProducto">
      <v-btn
        class="boton-anadir"
        :loading="loading"
        style="
          padding: 45px;
          font-weight: 800;
          font-size: 2rem;
          background: #ffffff;
        "
        >Añadir</v-btn
      >
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
          style="padding: 37px; font-size: 1.4rem; background: #ffffff"
        >
          <i class="fas fa-shopping-cart" style="font-size: 2.5rem"></i>
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
        id: this.id,
        url: this.url,
      }
      this.$store.commit('producto/SET_ADD_PRODUCTO', producto)
    },
    async sendData() {
      if (this.carProducto.length == 0) {
        let data = {
          img: '😟',
          titulo: 'Estimado usuario',
          message: 'debe elegir al menos un producto',
        }
        this.$refs.modalAlert.open(data)
      } else {
        this.$showSpinner(true)
        let paylodad = {
          data: this.carProducto,
        }
        await this.$store.dispatch('producto/sendDataStore', paylodad)
        this.$showSpinner(false)
        this.$router.push('/final')
      }
    },
    home() {
      this.$router.push('/eleccion')
    },
    redirect() {
      this.$router.push('/carrito-resumen')
    },
    inicioRefresh() {
      this.$router.push('/')
    },
    atras() {
      this.$router.back()
    },
  },
  computed: {
    ...mapState('producto', ['carProducto']),
    conteoCanasta() {
      return this.carProducto.length
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
    console.log('<----------------------->', this.id)
    console.log('<----------------------->', this.name)
    console.log('<----------------------->', this.description)
    console.log('<----------------------->', this.url)
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
  font-weight: 700;
  padding: 2rem 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);
  margin-bottom: 4rem;
  font-size: 4rem;
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
  margin-top: 40px;
  display: flex;
}
.contenedor-img-text-car {
  width: 100%;
  text-align: center;
}

.contenedor-imagen-selected {
  width: 46%;
  margin: auto;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 30px;
  overflow: hidden;
}
.contenedor-imagen-selected img {
  width: 20rem;
  /* height: 15rem; */
  margin: auto;
  text-align: center;
  object-fit: cover;
}
.text-description {
  font-size: 1.5rem;
  font-weight: 700;
  width: 70%;
  margin: auto;
}
.text-description-secu {
  margin-top: 20px;
  font-size: 2rem;
  font-weight: 500;
}

.contenedor-butt {
  margin: auto;
  width: 50%;
}

.contenedor-exit {
  margin-top: 160px;
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
.btn-stylos {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid rgb(0, 0, 0);
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
  margin-top: 6rem;
  /* border: 1px solid rgb(0, 0, 0); */
}

.boton-anadir {
  background-color: #ffffff;
  color: #000000;
  padding: 0.4rem 2rem;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
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