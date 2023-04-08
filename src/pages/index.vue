<template>
  <div>
    <div class="contenedor">
      <v-card class="justify-center align-center">
        <div class="titulo" style="padding-top: 50px; font-weight: 600">
          Bienvenido a nuestra
        </div>
        <div
          class="titulo"
          style="font-size: 7rem; padding-top: 20px; font-weight: 800"
        >
          <b>Cafetería</b>
        </div>
        <div class="samsung-experience">
          <div class="image-container">
            <img
              src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/LogoSamsungDigitalExperience.png"
              alt=""
              style="width: 100vw; height: 60vw"
            />
          </div>
          <div
            class="image-container"
            style="margin-top: 4rem"
            @click="redirect"
          >
            <img
              src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/here.png"
              alt=""
              style="width: 25vw; height: 44vw"
            />
          </div>
          <div
            class="image-container"
            style="margin-top: -4rem"
            @click="redirect"
          >
            <img
              src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/Pulsa.png"
              alt=""
              style="width: 30vw; height: 7vw"
            />
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SharedButton from '@/components/buttons/SharedButton'
export default {
  name: 'IndexPage',
  components: {
    SharedButton,
  },
  data() {
    return {
      loading: null,
    }
  },
  methods: {
    redirect() {
      this.$router.push('/eleccion')
    },
  },
  computed: {
    ...mapGetters('producto', ['idLast']),
  },
  async mounted() {},
}
</script>

<style>
.contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.titulo {
  font-size: 6rem;
  width: 70%;
  margin: auto;
  text-align: center;
  line-height: 1;
}

.SharedButton {
  font-size: 2rem;
  font-weight: bold;
  background-color: #f5a623;
  color: #fff;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s ease;
}

.SharedButton:hover {
  background-color: #e69100;
}
.samsung-experience-title {
  text-align: center;
}
.samsung-logo {
  text-align: center;
  font-family: 'SamsungOne', sans-serif;
  font-size: 3em;
  color: #0023a3;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.display-experience {
  text-align: center;
  font-family: 'SamsungOne', sans-serif;
  font-size: 2.5em;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 6px #0d3f8d, 0 0 8px #0d3f8d, 0 0 12px #0d3f8d,
    0 0 20px #0d3f8d, 0 0 30px #0d3f8d;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
