<template>
  <div class="contenedor-carrito-resumen-eleccion">
    <div class="contenedor-carrito-resumen-title">
      <div>MI CARRITO</div>
    </div>
    <div class="contenedor-buttons">
      <div class="contenedor-butt" @click="inicioRefresh">
        <div class="btn-stylos" style="font-size: 31px; padding: 10px">
          Inicio
        </div>
      </div>
      <div class="contenedor-butt" @click="atras">
        <v-btn
          class="btn-stylos"
          style="
            padding: 33px;
            font-size: 31px;
            font-family: 'SAMSUNGSHARPSANS-BOLD';
            background: #ffffff;
            border: none;
            box-shadow: none;
            letter-spacing: 0px;
            text-transform: capitalize;
          "
        >
          <i class="fas fa-undo-alt" style="font-size: 2.5rem"></i>
          volver</v-btn
        >
      </div>
    </div>
    <div class="dafault-message" v-if="condicion == 0">
      Ningún producto seleccionado
    </div>
    <div
      class="contenedor-productos"
      v-for="(dat, index) in carProducto"
      :key="index"
      v-else
    >
      <div class="contendor-iterador">
        <div class="contenedor-img-text">
          <div class="contenedor-img-resumen">
            <img
              :src="`https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com${dat.url}`"
              alt=""
              :style="{ width: tamanored(dat) + '%' }"
            />
          </div>

          <div class="text-description">{{ dat.description }}</div>
        </div>
        <div class="group-contenedores">
          <div class="contenedor-cantidad">{{ dat.cantidad }}</div>
          <div class="contenedor-cantidad" @click="restCantidad(dat)">
            <b>-</b>
          </div>
          <div class="contenedor-cantidad" @click="addCantidad(dat)">
            <b>+</b>
          </div>
          <div class="contenedor-cantidad" @click="quitProducto(dat)">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor-exit">
      <div class="contenedor-butt-exit" @click="home">
        <div class="btn-stylos-exit" style="font-size: 33px; padding: 10px">
          Sigue pidiendo
        </div>
      </div>
      <div class="contenedor-butt-exit" @click="sendData">
        <div class="btn-stylos-exit" style="font-size: 33px; padding: 10px">
          Terminar pedido
        </div>
      </div>

      <div class="contenedor-butt-exit" @click="redirect">
        <v-btn
          class="btn-stylos-exit"
          style="
            padding: 37px;
            font-size: 33px;
            background: #ffffff;
            border: none;
            box-shadow: none;
          "
        >
          <!-- <i class="fas fa-shopping-cart" style="font-size: 2.5rem"></i> -->
          <img
            src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/Carrito.png"
            alt=""
          />
          {{ conteoCanasta }}</v-btn
        >
      </div>
    </div>
    <div class="contenedor-img">
      <img
        src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/samsung/FaldonOK.png"
        alt="Imagen"
        style="width: 100vw; height: 15vw"
      />
    </div>
    <ModalAlert ref="modalAlert" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
// const qz = require('qz-tray')
import ModalAlert from '@/components/modals/ModalAlert'
export default {
  components: {
    ModalAlert,
  },
  data() {
    return {
      id: null,
      name: null,
      description: null,
    }
  },
  methods: {
    restCantidad(data) {
      this.$store.commit('producto/SET_DES_PRODUCTOS', data)
    },
    addCantidad(data) {
      this.$store.commit('producto/SET_ADD_PRODUCTOS', data)
    },
    quitProducto(data) {
      this.$store.commit('producto/SET_DELETE_PRODUCTO', data)
    },
    async sendData() {
      let productosFiltrados = this.carProducto.filter((p) => p.cantidad !== 0)
      if (productosFiltrados.length == 0) {
        let data = {
          img: '😟',
          titulo: 'Estimado usuario',
          message: 'Añade productos a tu carrito.',
        }
        this.$refs.modalAlert.open(data)
      } else if (productosFiltrados.length > 3) {
        let data = {
          img: '😟',
          titulo: 'Estimado usuario',
          message: 'Solo puede elegir 3 productos distintos',
        }
        this.$refs.modalAlert.open(data)
      } else {
        this.$showSpinner(true)
        let paylodad = {
          data: productosFiltrados,
        }
        await this.$store.dispatch('producto/sendDataStore', paylodad)
        try {
          try {
            qz.websocket
              .connect()
              .then(() => {
                return qz.printers.find()
              })
              .then((printers) => {
                console.log(printers)
                const nombre0 = this.limpio[0] ? this.limpio[0].name : ''
                const cantidad0 = this.limpio[0] ? this.limpio[0].cantidad : ''
                const nombre1 = this.limpio[1] ? this.limpio[1].name : null
                const cantidad1 = this.limpio[1]
                  ? this.limpio[1].cantidad
                  : null
                const nombre2 = this.limpio[2] ? this.limpio[2].name : null
                const cantidad2 = this.limpio[2]
                  ? this.limpio[2].cantidad
                  : null
                let config = qz.configs.create('BIXOLON BK3-3')
                let data = []
                data = [
                  `          ID: ${this.idLast} \n`,
                  `                      \n`,
                  `       ${nombre0}     :   ${cantidad0}  \n`,
                  ` \n`,
                  ` \n`,
                  ` \n`,
                  ` \n`,
                  ` \n`,
                  ` \n`,
                  ` \n`,
                  ` \n`,
                  ` \n`,
                ]
                if (nombre1) {
                  data = [
                    `          ID: ${this.idLast} \n`,
                    `                      \n`,
                    `       ${nombre0}     :   ${cantidad0}  \n`,
                    `       ${nombre1}     :   ${cantidad1}  \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                  ]
                }
                if (nombre2) {
                  data = [
                    `          ID: ${this.idLast} \n`,
                    `                      \n`,
                    `       ${nombre0}     :   ${cantidad0}  \n`,
                    `       ${nombre1}     :   ${cantidad1}  \n`,
                    `       ${nombre2}     :   ${cantidad2}  \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                    ` \n`,
                  ]
                }

                return qz.print(config, data)
              })
              .then(() => {
                cutPaper(1)
                return qz.websocket.disconnect()
              })
              .then(() => {
                // process.exit(0);
              })
              .catch((err) => {
                console.error(err)
                // process.exit(1);
              })
          } catch (error) {
            console.log('error IMPRESORA', error)
          }
          const requestURL = 'http://127.0.0.1:18080/WebPrintSDK/BK3-31'
          console.log('DATA-------------LIMPIA', this.limpio)

          const nombre0 = this.limpio[0] ? this.limpio[0].name : ''
          const cantidad0 = this.limpio[0] ? this.limpio[0].cantidad : ''
          const nombre1 = this.limpio[1] ? this.limpio[1].name : ''
          const cantidad1 = this.limpio[1] ? this.limpio[1].cantidad : ''
          const nombre2 = this.limpio[2] ? this.limpio[2].name : ''
          const cantidad2 = this.limpio[2] ? this.limpio[2].cantidad : ''
          const strSubmit = {
            id: 1,
            functions: {
              func0: { clearBuffer: [] },
              func1: {
                cutPaper: [1],
              },
              func2: {
                printBuffer: [],
              },
              func3: {
                cutPaper: [1],
              },
              // func13: {
              //   setAutoCutter: (1, 3),
              // },
            },
          }
          const response = await axios.post(requestURL, strSubmit, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          })
          const res = response.data
          const ret = res.Result
          if (ret.search('ready') >= 0 || ret.search('progress') >= 0) {
            await checkResult(
              'POST',
              strPrinterName,
              res.RequestID,
              res.ResponseID
            )
          } else if (ret.search('duplicated') >= 0) {
            console.log(res.Result)
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.log('xmlHttpReq 404', error.response)
          } else {
            console.log('xmlHttpReq error', error)
          }
        }
        this.$showSpinner(false)
        this.$router.push('/final')
      }
    },
    inicioRefresh() {
      this.$store.commit('producto/SET_CLEAR')
      this.$router.push('/')
    },
    redirect() {
      this.$router.push('/carrito-resumen')
    },
    atras() {
      this.$router.back()
    },
    home() {
      this.$router.push('/eleccion')
    },
    tamanored(data) {
      console.log('data', data)
      if (parseInt(data.taman) > 20) {
        return '105'
      } else if (parseInt(data.taman) == 15) {
        return '65'
      } else {
        return '75'
      }
    },
    // tamanoRedu(data) {
    //   return parseInt(data.taman) - 18
    // },
  },
  computed: {
    ...mapState('producto', ['carProducto', 'idLast', 'limpio']),
    condicion() {
      return this.carProducto.length
    },
    conteoCanasta() {
      return this.carProducto.length == 0 ? '' : this.carProducto.length
    },
    creatorFunction() {},
  },
  mounted() {},
}
</script>

<style>
.contenedor-carrito-resumen-eleccion {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
}

.contenedor-carrito-resumen-title {
  text-align: center;
  font-family: 'SAMSUNGSHARPSANS-BOLD';
  margin-bottom: 4rem;
  padding: 2rem 0;
  font-size: 77px;
  background: rgb(255, 255, 255);
  width: 100%;
}

.contenedor-productos {
  margin-top: 50px;
}
.dafault-message {
  background: rgb(255, 255, 255);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 3.2rem;
  border-radius: 40px;
  font-weight: 600;
  line-height: 1.2;
  width: 60%;
  padding: 3rem;
  margin: 60px auto;
  /* margin-top: 60px; */
}

.contendor-iterador {
  width: 95%;
  margin: auto;
  margin-top: 40px;
  display: flex;
}
.contenedor-img-text {
  width: 40%;
  text-align: center;
}
.group-contenedores {
  width: 60%;
  display: flex;
}
.contenedor-buttons {
  width: 100%;
  display: flex;
  margin-top: 40px;
  text-align: center;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}
.contenedor-exit {
  margin-top: 50px;
  width: 100%;
  display: flex;
  text-align: center;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}
.contenedor-butt-exit {
  margin: auto;
}
.btn-stylos-exit {
  border: 2px solid rgb(0, 0, 0);
  width: 100%;
  letter-spacing: 0px;
  font-family: 'SAMSUNGSHARPSANS-MEDIUM';
  margin: 0 10px;
}

.contenedor-butt {
  margin: auto;
  width: 50%;
}
.btn-stylos {
  border: 2px solid rgb(0, 0, 0);
  font-size: 31px;
  font-family: 'SAMSUNGSHARPSANS-MEDIUM';
  margin: auto;
  width: 50%;
}
.contenedor-img-resumen {
  width: 200px;
  height: 200px;
  margin: auto;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 15px;
  overflow: hidden;
}
.contenedor-img-resumen img {
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  object-fit: cover;
}
.text-description {
  font-size: 37px;
  font-family: 'SAMSUNGSHARPSANS-MEDIUM';
}
.contenedor-cantidad {
  width: 15%;
  margin: auto;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  font-family: 'SAMSUNGSHARPSANS-MEDIUM';
  font-size: 40px;
  padding: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: none;
  color: #000000;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.contenedor-cantidad:hover {
  background-color: #c0c0c0;
}
.contenedor-img {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>