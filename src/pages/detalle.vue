<template>
  <div class="contenedor-dash">
    <div>
      <div class="refresh-btn" @click="regresar">regresar</div>
    </div>
    <table>
      <thead>
        <tr>
          <th style="text-align: center; height: 80px">ID Pedido</th>
          <th style="text-align: center; height: 80px">Nombre</th>
          <th style="text-align: center; height: 80px">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, index) in dataTurno.data" :key="index">
          <td style="text-align: center; height: 80px">{{ dataTurno.ID }}</td>
          <td style="text-align: center; height: 80px">{{ producto.name }}</td>
          <td style="text-align: center; height: 80px">
            {{ producto.cantidad }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('producto', ['dataTurno']),
  },
  async mounted() {
    this.$showSpinner(true)
    await this.$store.dispatch('producto/getDataStore')
    this.$showSpinner(false)
  },
  methods: {
    regresar(dat) {
      this.$router.push('/dashboard')
    },
    async refrsh() {
      this.$showSpinner(true)
      await this.$store.dispatch('producto/getDataStore')
      this.$showSpinner(false)
    },
  },
}
</script>

<style>
/* Estilos de la tabla */
.contenedor-dash {
  width: 90%;
  height: 100vw;
  background: #f5f6f7;
  font-size: 40px;
  margin: 40px auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #000000;
}
th {
  background-color: #f8e1e1;
}
.botn-ir {
  color: red;
}
.refresh-btn {
  padding: 10px;
  width: 35%;
  text-align: center;
  margin: 20px auto;
  border: 2px solid #000000;
}
</style>
