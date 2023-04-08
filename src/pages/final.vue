<template>
  <div>
    <div class="contenedor-group-final">
      <div class="contenedor-title-final">PEDIDO COMPLETADO</div>
    </div>
    <div class="contenedor-subgroup-final">
      <div class="contenedor-subtitle-final">Gracias</div>
    </div>
    <div class="contenedor-subgroup-final">
      <div class="contenedor-subtitle-final">Disfruta tu desayuno</div>
    </div>
    <!-- <div class="contenedor-buttons" style="margin-top: 200px">
      <div class="contenedor-butt" @click="inicioRefresh">
        <div class="btn-stylos" style="font-size: 2rem; padding: 10px">
          Inicio
        </div>
      </div>
    </div> -->

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
    }
  },
  methods: {
    // inicioRefresh() {
    //   this.$router.push('/')
    //   this.$store.commit('producto/SET_CLEAR')
    // },
  },
  computed: {
    ...mapState('producto', ['carProducto']),
    conteoCanasta() {
      return this.carProducto.length == 0 ? '' : this.carProducto.length
    },
  },
  mounted() {
    setTimeout(() => {
      // Código que se ejecutará después de esperar 3 segundos
      console.log('Han pasado 5  segundos')
      this.$router.push('/')
      this.$store.commit('producto/SET_CLEAR')
    }, 5000) // Esperar 3 segundos (3000 milisegundos)
  },
}
</script>

<style>
.contenedor-group-final {
  width: 100%;
  text-align: center;
  background: #ffffff;
  padding: 2rem 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 4rem;
}

.contenedor-subgroup-final {
  width: 100%;
  text-align: center;
  margin-top: 12rem;
  margin-bottom: 2rem;
}

.contenedor-img {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.contenedor-title-final {
  width: 60%;
  text-align: center;
  margin: auto;
  font-weight: 900;
  line-height: 1.4;
  padding: 30px 0;
  font-size: 4rem;
}

.contenedor-subtitle-final {
  width: 60%;
  text-align: center;
  margin: auto;
  font-weight: 500;
  line-height: 1.1;
  padding: 0;
  font-size: 7rem;
}
.contenedor-subtitle {
  width: 95%;
  text-align: center;
  margin-top: -30px;
  font-weight: 600;
  font-size: 2.6rem;
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
  border: 2px solid rgb(0, 0, 0);
  margin: auto;
  width: 50%;
}
</style>
