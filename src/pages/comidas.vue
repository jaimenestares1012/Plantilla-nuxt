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
          <img :src="require(`../assets/img/${dat.url}.png`)" alt="" />
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
          description: 'Mini croissants',
          id: 'c01',
          url: 'comida',
        },
        {
          name: 'Mini napolitanas',
          description: 'Mini croissants',
          id: 'c02',
          url: 'comida',
        },
        {
          name: 'Mini muffins',
          description: 'Mini croissants',
          id: 'c03',
          url: 'comida',
        },
        {
          name: 'Finger sandwiches',
          description: 'Mini croissants',
          id: 'c01',
          url: 'comida',
        },
        {
          name: 'Mini wraps',
          description: 'Mini croissants',
          id: 'c01',
          url: 'comida',
        },
        {
          name: 'Mini bocadillos',
          description: 'Mini croissants',
          id: 'c01',
          url: 'comida',
        },
      ],
    }
  },
  methods: {
    accionCar(data) {
      this.$router.push(
        `/carrito/?id=${data.id}&name=${data.name}&description=${data.description}`
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
  width: 95%;
  text-align: center;
  margin: 1rem 0;
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
  margin: 30px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container-comidas:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container-comidas img {
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
