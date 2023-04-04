<template>
  <div class="contenedor-bebidas-eleccion">
    <div class="contenedor-bebidas-title">
      <div>ELIGE TU BEBIDA</div>
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
          <div class="text-container">{{ dat.name }}</div>
        </div>
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
      data: [
        {
          name: 'Cafés',
          description: 'Mini croissants',
          id: 'b01',
          url: '/samsung/bebida.png',
        },
        {
          name: 'Infusiones',
          description: 'Mini croissants',
          id: 'b02',
          url: '/samsung/bebida.png',
        },
        {
          name: 'Chocolates',
          description: 'Mini croissants',
          id: 'b03',
          url: '/samsung/bebida.png',
        },
        {
          name: 'Zumos',
          description: 'Mini croissants',
          id: 'b04',
          url: '/samsung/bebida.png',
        },
        {
          name: 'Refrescos',
          description: 'Mini croissants',
          id: 'b05',
          url: '/samsung/bebida.png',
        },
        {
          name: 'Agua',
          description: 'Mini croissants',
          id: 'b06',
          url: '/samsung/bebida.png',
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
  width: 95%;
  text-align: center;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 4rem;
}
.contenedor-bebidas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.image-container-bebidas {
  flex-basis: calc(33.33% - 50px);
  margin: 15px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container-bebidas:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container-bebidas img {
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
