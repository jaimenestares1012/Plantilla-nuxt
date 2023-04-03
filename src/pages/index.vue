<template>
  <div>
    <div class="contenedor">
      <v-card class="d-flex justify-center align-center">
        <span class="titulo"
          >Bienvenido a tu kiosko "Compras Segura" {{ idLast }}</span
        >
      </v-card>
      <v-card class="py-4 d-flex justify-center">
        <SharedButton
          type="submit"
          text="Comprar"
          :total-width="90"
          :radius="10"
          :height="70"
          :loading="loading"
          @click="redirect"
        />
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
</style>
