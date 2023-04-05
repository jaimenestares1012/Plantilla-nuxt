<template>
  <div class="contenedor-comidas-eleccion">
    <div class="contenedor-comidas-title">
      <div>ELIGE TU COMIDA</div>
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
          name: 'Mini croissants',
          description: 'Mini croissant',
          id: 'c01',
          url: '/samsung/mini-croissants.png',
        },
        {
          name: 'Mini napolitanas',
          description: 'Mini manpolitana',
          id: 'c02',
          url: '/samsung/mini-napolitana.png',
        },
        {
          name: 'Mini muffins',
          description: 'Mini muffin',
          id: 'c03',
          url: '/samsung/mini-muffin.png',
        },
        {
          name: 'Finger sandwiches',
          description: 'Finger sandwich',
          id: 'c04',
          url: '/samsung/finger-sandwich.png',
        },
        {
          name: 'Mini wraps',
          description: 'Mini wrap',
          id: 'c05',
          url: '/samsung/mini-wrap.png',
        },
        {
          name: 'Mini bocadillos',
          description: 'Mini bocadillo',
          id: 'c06',
          url: '/samsung/mini-bocadillo.png',
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
  padding: 1rem 0;
  font-weight: 700;
  font-size: 4rem;
}
.contenedor-comidas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.image-container-comidas {
  flex-basis: calc(33.33% - 100px);
  margin: 15px;
  cursor: pointer;
  background: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container-comidas:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container-comidas img {
  width: 18rem;
  height: 15rem;
  padding: 20px;
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
