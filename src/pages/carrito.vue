<template>
  <div class="contenedor-carrito-eleccion">
    <div class="contenedor-carrito-title">
      <div>Cuantos quieres</div>
    </div>
    <div class="contenedor-producto">
      <div class="image-producto">
        <img :src="require('../assets/img/bebida.png')" alt="" />
        <div class="text-producto">{{ this.name }}</div>
      </div>
    </div>
    <div>
      <div class="text-producto-description">{{ this.description }}</div>
    </div>
    <div class="contenedor-botones" @click="adicionProducto">
      <button class="boton-anadir">Añadir</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      description: null,
    }
  },
  methods: {
    adicionProducto() {
      console.log('adicionProducto')
      const producto = {
        name: this.name,
        description: this.description,
        cantidad: 1,
        id: this.id,
      }
      this.$store.commit('producto/SET_ADD_PRODUCTO', producto)
    },
  },
  mounted() {
    const valores = window.location.search
    const urlParams = new URLSearchParams(valores)
    this.id = urlParams.get('id')
    this.name = urlParams.get('name')
    this.description = urlParams.get('description')
    console.log('<----------------------->', this.id)
    console.log('<----------------------->', this.name)
    console.log('<----------------------->', this.description)
  },
}
</script>

<style>
.contenedor-carrito-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.contenedor-carrito-title {
  width: 100%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 4rem;
  font-size: 4rem;
}
.contenedor-carrito {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.image-container-carrito {
  flex-basis: calc(33.33% - 100px);
  margin: 30px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.image-container-carrito:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.image-container-carrito img {
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
.contenedor-producto .image-producto img {
  width: 100%;
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
.contenedor-producto {
  width: 50vw; /* ancho del 90% de la ventana gráfica */
  height: 50vh; /* altura del 50% de la ventana gráfica */
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: #ffffff;
  border-radius: 50%; /* radio del 50% del ancho del contenedor */
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
  margin-top: 2rem;
}

.boton-anadir {
  background-color: #ffffff;
  color: #000000;
  padding: 1rem 2rem;
  border: #000000;
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
</style>