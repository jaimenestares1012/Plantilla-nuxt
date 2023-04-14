<template>
  <div>
    <div style="container">
      <div
        style="margin: auto; width: 50%; text-align: center; margin-top: 20px"
      >
        Samsung experience
      </div>
      <div
        style="margin: auto; width: 50%; text-align: center; margin-top: 20px"
      >
        Nro ticket : {{ idLast }}
      </div>
      <div
        style="margin: auto; width: 50%; text-align: center; margin-top: 20px"
      >
        <table style="border-collapse: collapse; width: 100%">
          <thead>
            <tr>
              <th style="text-align: center">Producto</th>
              <th style="text-align: center">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dat, index) in limpio" :key="index">
              <td
                style="
                  text-align: center;
                  height: 40px;
                  text-align: left;
                  border-bottom: 1px solid #000000;
                "
              >
                {{ dat.name }}
              </td>
              <td
                style="
                  text-align: center;
                  text-align: left;
                  border-bottom: 1px solid #000000;
                "
              >
                {{ dat.cantidad }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
    // window.print()
    // window.close()
    setTimeout(function () {
      newWin.close()
    }, 10)
  },

  // redirigir al usuario a otra página después de 5 segundos
  // setTimeout(() => {
  //   console.log('Han pasado 5 segundos')
  //   this.$router.push('/final')
  // }, 5000)
}
</script>

<style>
/* .container {
  max-width: none !important;
  height: 200px;
  padding: 0px;
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
} */
</style>
