<template>
  <div>
    <div class="contenedor">
      <v-card class="d-flex justify-center">
        <span style="font-size: 60px; text-align: center"
          >Bienvenido a tu kiosko "Compras Segura"</span
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
}
</script>
<style >
.contenedor {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
</style>
