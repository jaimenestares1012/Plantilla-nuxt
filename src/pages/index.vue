<template>
  <div>
    <div class="contenedor">
      <div @click="redirect">
        <img
          :src="require('../assets/img/fondo.jpg')"
          alt=""
          style="width: 100%; height: 100%"
        />
      </div>
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
}

.titulo {
  font-size: 105px;
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
