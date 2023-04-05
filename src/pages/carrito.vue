<template>
  <div class="contenedor-producto-eleccion">
    <div class="contenedor-producto-title">
      <div>Cuantos quieres</div>
    </div>
    <div class="contenedor-producto">
      <img
        :src="`https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com${this.url}`"
        alt=""
      />
      <div class="text-producto">{{ this.name }}</div>
    </div>
    <div>
      <div class="text-producto-description">{{ this.description }}</div>
    </div>
    <div class="contenedor-botones" @click="adicionProducto">
      <button class="boton-anadir">Añadir</button>
    </div>
    <div class="contenedor-botones" @click="redirect">
      <button class="boton-anadir">ir Carrito</button>
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
      url: null,
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
        url: this.url,
      }
      this.$store.commit('producto/SET_ADD_PRODUCTO', producto)
    },
    redirect() {
      this.$router.push('/carrito-resumen')
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
  margin-bottom: 4rem;
  font-size: 4rem;
}

.contenedor-producto {
  width: 50vw; /* ancho del 90% de la ventana gráfica */
  height: 50vh; /* altura del 50% de la ventana gráfica */
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  text-align: center;
  background: #ffffff;
  border-radius: 50%; /* radio del 50% del ancho del contenedor */
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