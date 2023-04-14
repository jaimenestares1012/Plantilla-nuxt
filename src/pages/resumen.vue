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
    let detalle = ''
    let total = 0
    this.datos.forEach(function (d) {
      total = total + 1
      detalle += `<tr>
                      <td width="100">2333. </td>
                      <td width="200">3333</td>
                      <td width="450">3</td>
                      <td width="250">3</td>
                      <td width="250">333 </td>
                    </tr>`
    }, this)
    const divToPrint = `<div>
                        <div>
                            <div style="margin-bottom: 12px; text-align: center">
                              <span >PAUCCARA S.A.C</span><br>
                              <span style="margin-bottom: 2px">RUC : 1212121212</span><br>
                              <span style=" margin-bottom: 2px"> CHILCA</span><br><br>
                              <span style=" margin-bottom: 2px">REPORTE DETALLADO DEL MES</span><br>
                            </div>
                            <div style="margin-bottom: 20px">
                              <table style="font-size:18px">
                                <thead style="text-align: left;">
                                  <tr>
                                    <th>N°</th>
                                    <th>FECHA</th>
                                    <th>DESCRIPCION</th>
                                    <th>PRESTADO</th>
                                    <th>PAGADO</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    JAOAL
                                </tbody>
                              </table>
                                _________________
                            </div>
                            <div style="margin-bottom: 25px">
                              <table id="tableImp"style="font-size:22px" >
                                <tbody>
                                  <tr>
                                    <td width="470"><span>TOTALES:</span></td>
                                    <td width="350"><span>S/.2222222}</span></td>
                                    <td width="250"><span>S/.FDSDSD</span></td>
                                  <tr>
                                  <tr>
                                    <td width="200"><span>INTERES GANADO:S/.2394934</span></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                        </div>
                    </div>`
    const newWin = window.open('', '', '')
    newWin.document.open()
    newWin.document.write(
      '<html><body style="font-size:26px; font-family: MS Gothic" onload="window.print()">' +
        divToPrint +
        '</body></html>'
    )
    newWin.document.close()
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
