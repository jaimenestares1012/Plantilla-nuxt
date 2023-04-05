<template>
  <div>
    <div class="contenedor">
      <v-card class="justify-center align-center">
        <div class="titulo">
          Bienvenido a nuestra <br />
          <b>Cafetería</b>
        </div>
        <div class="samsung-experience">
          <div class="samsung-logo">Samsung</div>
          <div class="display-experience">Display</div>
          <div class="display-experience">Experience</div>
          <div class="image-container" @click="redirect">
            <img
              src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/here.png"
              alt=""
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
  async mounted() {
    console.log('INDEXXXXXXXXXXXXXXXXXXXX')
    const paylodad = {}
    await this.$store.dispatch('producto/getId', paylodad)
  },
}
</script>

<style>
.contenedor {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}

.titulo {
  font-size: 4rem;
  text-align: center;
  margin: 2rem;
}

.SharedButton {
  font-size: 2rem;
  font-weight: bold;
  background-color: #f5a623;
  color: #fff;
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
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
  margin-top: 2rem;
}
</style>
