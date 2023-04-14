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
        <table>
          <thead>
            <tr>
              <th style="text-align: center">Producto</th>
              <th style="text-align: center">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dat, index) in limpio" :key="index">
              <td style="text-align: center; height: 40px">{{ dat.name }}</td>
              <td style="text-align: center">{{ dat.cantidad }}</td>
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
    window.print() // Envia la tarea de impresion a la cola de impresion
    window.close() // Cierra la ventana actual sin mostrar el cuadro de dialogo de impresion al usuario
    try {
      // Crea un objeto XMLHttpRequest
      var xhr = new XMLHttpRequest()

      // Configura la solicitud para que sea sincrónica y para que envíe los datos en crudo
      xhr.open('POST', 'http://BIXO-3333.local')
      xhr.setRequestHeader('Content-Type', 'application/octet-stream')
      xhr.setRequestHeader(
        'Content-Disposition',
        'attachment;filename="archivo.pdf"'
      )
      xhr.setRequestHeader('Pragma', 'no-cache')
      xhr.setRequestHeader('Cache-Control', 'no-cache')

      // Envía el archivo PDF a la impresora
      xhr.send(
        new Blob(['\x1b\x40', 'contenido del archivo PDF', '\x1d\x56\x41\x00'])
      )

      // Cierra la conexión con la impresora
      xhr.abort()
    } catch (error) {}
    // redirigir al usuario a otra página después de 5 segundos
    setTimeout(() => {
      console.log('Han pasado 5 segundos')
      this.$router.push('/final')
    }, 5000)
  },
}
</script>

<style>
.container {
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
}
</style>
