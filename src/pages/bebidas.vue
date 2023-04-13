<template>
  <div class="contenedor-bebidas-eleccion">
    <div class="contenedor-bebidas-title">
      <div>ELIGE TU BEBIDA</div>
    </div>
    <div class="contenedor-buttons">
      <div class="contenedor-butt" @click="inicioRefresh">
        <div class="btn-stylos" style="font-size: 31px; padding: 10px">
          Inicio
        </div>
      </div>
      <div class="contenedor-butt" @click="atras">
        <v-btn
          class="btn-stylos"
          style="
            padding: 33px;
            font-size: 31px;
            font-family: 'SAMSUNGSHARPSANS-BOLD';
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
    <div class="contenedor-bebidas">
      <div
        class="image-container-bebidas"
        v-for="(dat, index) in data"
        :key="index"
      >
        <div @click="accionCar(dat)" class="contendor-image-text">
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
            font-size: 33px;
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
export default {
  data() {
    return {
      loading: null,
      data: [
        {
          name: 'Cafés',
          description: 'Café',
          id: 'b01',
          taman: '25',
          url: '/samsung/cafe-con-leche.png',
        },
        {
          name: 'Infusiones',
          description: 'Infusión',
          id: 'b02',
          taman: '25',
          url: '/samsung/infusiones.png',
        },
        {
          name: 'Chocolates',
          description: 'Chocolate',
          id: 'b03',
          taman: '25',
          url: '/samsung/chocolate.png',
        },
        {
          name: 'Zumos',
          description: 'Zumo',
          id: 'b04',
          taman: '25',
          url: '/samsung/zumos.png',
        },
        {
          name: 'Refrescos',
          description: 'Refresco',
          id: 'b05',
          taman: '15',
          url: '/samsung/refrescos.png',
        },
        {
          name: 'Agua',
          description: 'Agua',
          id: 'b06',
          taman: '18',
          url: '/samsung/agua.png',
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
.contenedor-bebidas-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.contenedor-bebidas-title {
  width: 100%;
  text-align: center;
  font-family: 'SAMSUNGSHARPSANS-BOLD';
  background: rgb(255, 255, 255);
  padding: 2rem 0;
  margin-bottom: 2rem;
  font-size: 77px;
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
  border: 2px solid rgb(0, 0, 0);

  margin: auto;
  width: 50%;
}

.image-container-bebidas {
  flex-basis: calc(30%);
  margin: 15px;
  cursor: pointer;
  background: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.contendor-image-text {
}
.image-container-bebidas:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.image-container-bebidas img {
  padding: 20px;
}

.text-container-2 {
  font-size: 37px;
  font-family: 'SAMSUNGSHARPSANS-BOLD';
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
