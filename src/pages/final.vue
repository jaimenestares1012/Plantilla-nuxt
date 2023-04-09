<template>
  <div>
    <div class="contenedor-group-final">
      <div class="contenedor-title-final">PEDIDO COMPLETADO</div>
    </div>
    <div class="contenedor-subgroup-final">
      <div class="contenedor-subtitle-final">Gracias</div>
    </div>
    <div class="contenedor-subgroup-final">
      <div class="contenedor-subtitle-final">
        Disfruta <br />
        tu desayuno
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
    }
  },
  computed: {
    ...mapState('producto', ['carProducto']),
  },
  mounted() {
    setTimeout(() => {
      // Código que se ejecutará después de esperar 3 segundos
      console.log('Han pasado 5  segundos')
      this.$router.push('/')
      this.$store.commit('producto/SET_CLEAR')
    }, 5000)
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
  font-family: 'SAMSUNGSHARPSANS-BOLD';
  line-height: 1.4;
  padding: 30px 0;
  font-size: 77px;
}

.contenedor-subtitle-final {
  width: 74%;
  text-align: center;
  margin: auto;
  font-family: 'SAMSUNGSHARPSANS-MEDIUM';
  line-height: 1.1;
  padding: 0;
  font-size: 121px;
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
</style>
