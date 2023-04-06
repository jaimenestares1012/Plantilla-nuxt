<template>
  <div class="contenedor-bebidas-eleccion">
    <div class="contenedor-bebidas-title">
      <div>ELIGE TU BEBIDA</div>
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
    <div class="contenedor-bebidas">
      <div
        class="image-container-bebidas"
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
            font-size: 1rem;
            background: #ffffff;
            height: 100px;
          "
        >
          <v-icon dark style="font-size: 4rem"> mdi-cart</v-icon>
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
import { mapGetters, mapState } from 'vuex'
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
          name: 'Cafés',
          description: 'Café con leche',
          id: 'b01',
          url: '/samsung/cafe-con-leche.png',
        },
        {
          name: 'Infusiones',
          description: 'Infusion',
          id: 'b02',
          url: '/samsung/infusiones.png',
        },
        {
          name: 'Chocolates',
          description: 'Chocolate',
          id: 'b03',
          url: '/samsung/chocolate.png',
        },
        {
          name: 'Zumos',
          description: 'Zumo',
          id: 'b04',
          url: '/samsung/zumos.png',
        },
        {
          name: 'Refrescos',
          description: 'Refresco',
          id: 'b05',
          url: '/samsung/refrescos.png',
        },
        {
          name: 'Aguas',
          description: 'Agua',
          id: 'b06',
          url: '/samsung/agua.png',
        },
      ],
    }
  },
  methods: {
    accionCar(data) {
      this.$router.push(
        `/carrito/?id=${data.id}&name=${data.name}&description=${data.description}&url=${data.url}`
      )
    },
    inicioRefresh() {
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
.contenedor-bebidas-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.contenedor-bebidas-title {
  width: 100%;
  text-align: center;
  font-weight: 700;
  background: rgb(255, 255, 255);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 2rem 0;
  margin-bottom: 2rem;
  font-size: 4rem;
}
.contenedor-bebidas {
  margin: 80px 0 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
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
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid rgb(0, 0, 0);
  margin: auto;
  width: 50%;
}

.image-container-bebidas {
  flex-basis: calc(33.33% - 100px);
  margin: 15px;
  cursor: pointer;
  background: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container-bebidas:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container-bebidas img {
  width: 18rem;
  height: 18rem;
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
