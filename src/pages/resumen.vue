<template>
  <div>
    <div style="margin: auto; width: 50%; text-align: center; margin-top: 20px">
      Samsung experience
    </div>
    <div style="margin: auto; width: 50%; text-align: center; margin-top: 20px">
      Nro ticket : {{ idLast }}
    </div>
    <div style="margin: auto; width: 50%; text-align: center; margin-top: 20px">
      <table>
        <thead>
          <tr>
            <th style="text-align: center">Producto</th>
            <th style="text-align: center">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dat, index) in limpio" :key="index">
            <td style="text-align: center; height: 80px">{{ dat.name }}</td>
            <td style="text-align: center">{{ dat.cantidad }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('producto', ['limpio', 'idLast']),
  },
  mounted() {
    window.print() // Envia la tarea de impresion a la cola de impresion
    window.close() // Cierra la ventana actual sin mostrar el cuadro de dialogo de impresion al usuario

    // redirigir al usuario a otra página después de 5 segundos
    setTimeout(() => {
      console.log('Han pasado 5 segundos')
      this.$router.push('/final')
    }, 5000)
  },
}
</script>

<style>
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
</style>
