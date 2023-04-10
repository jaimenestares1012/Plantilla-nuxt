<template>
  <div class="contenedor-dash">
    <div>
      <div class="refresh-btn" @click="refrsh">Refrescar</div>
    </div>
    <table>
      <thead>
        <tr>
          <th style="text-align: center">ID</th>
          <th style="text-align: center">Pedido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dat, index) in dataDashboard" :key="index">
          <td style="text-align: center; height: 80px">{{ dat.ID }}</td>
          <td style="text-align: center" @click="redirectData(dat)">
            <div class="botn-ir">ir</div>
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
    ...mapState('producto', ['dataDashboard']),
  },
  async mounted() {
    this.$showSpinner(true)
    await this.$store.dispatch('producto/getDataStore')
    this.$showSpinner(false)
  },
  methods: {
    redirectData(dat) {
      this.$store.commit('producto/SET_DATA_TURNO', dat)
      this.$router.push('/detalle')
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
  font-size: 40px;
  background: #f5f6f7;
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
  padding: 10px 40px;
  background: #0023a3;
  border-radius: 20px;
  color: rgb(255, 255, 255);
  font-size: 23px;
}
.refresh-btn {
  font-size: 31px;
  padding: 10px;
  width: 35%;
  text-align: center;
  margin: 20px auto;
  border: 2px solid #000000;
}
</style>
