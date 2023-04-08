<template>
  <div class="contenedor-comidas-eleccion">
    <div class="contenedor-comidas-title">
      <div>ELIGE TU COMIDA</div>
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
    <div class="contenedor-comidas">
      <div
        class="image-container-comidas"
        v-for="(dat, index) in data"
        :key="index"
      >
        <div @click="accionCar(dat)">
          <img
            :src="`https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com${dat.url}`"
            alt=""
          />
          <div class="text-container-2">{{ dat.name }}</div>
        </div>
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
            background: #ffffff;
            box-shadow: none;
            border: none;
            height: 100px;
          "
        >
          <!-- <i class="fas fa-shopping-cart" style="font-size: 4rem"></i> -->
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SharedButton from '@/components/buttons/SharedButton'
export default {
  name: 'IndexPage',
  components: {
    SharedButton,
  },
  data() {
    return {
      loading: null,

      data: [
        {
          name: 'Mini croissants',
          description: 'Mini croissant',
          id: 'c01',
          taman: '25',
          url: '/samsung/mini-croissants.png',
        },
        {
          name: 'Mini napolitanas',
          description: 'Mini manpolitana',
          id: 'c02',
          taman: '25',
          url: '/samsung/mini-napolitana.png',
        },
        {
          name: 'Mini muffins',
          description: 'Mini muffin',
          id: 'c03',
          taman: '20',
          url: '/samsung/mini-muffin.png',
        },
        {
          name: 'Finger sandwiches',
          description: 'Finger sandwich',
          id: 'c04',
          taman: '20',
          url: '/samsung/finger-sandwich.png',
        },
        {
          name: 'Mini wraps',
          description: 'Mini wrap',
          id: 'c05',
          taman: '27',
          url: '/samsung/mini-wrap.png',
        },
        {
          name: 'Mini bocadillos',
          description: 'Mini bocadillo',
          id: 'c06',
          taman: '28',
          url: '/samsung/mini-bocadillo.png',
        },
      ],
    }
  },
  methods: {
    accionCar(data) {
      this.$router.push(
        `/carrito/?id=${data.id}&name=${data.name}&description=${data.description}&url=${data.url}&taman=${data.taman}`
      )
    },
    inicioRefresh() {
      this.$store.commit('producto/SET_CLEAR')
      this.$router.push('/')
    },
    atras() {
      this.$router.back()
    },
    redirect(ruta) {
      this.$router.push(ruta)
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
.contenedor-comidas-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.contenedor-comidas-title {
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  background: rgb(255, 255, 255);
  padding: 2rem 0;
  font-weight: 750;
  font-size: 4rem;
}
.contenedor-comidas {
  margin: 80px 0 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
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
.image-container-comidas {
  flex-basis: calc(30%);
  margin: 15px;
  cursor: pointer;
  background: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container-comidas:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container-comidas img {
  /* width: 18rem;
  height: 17rem; */
  padding: 20px;
}

.text-container-2 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  width: 70%;
  text-align: center;
  padding: 20px 0px;
  margin: auto;
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
.contenedor-img {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
