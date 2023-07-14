<template>
  <div>
    <div class="container-principal">
      <Logo></Logo>
      <div class="container-card">
        <div class="title-card">Lg TV - 69% de descuento</div>
        <div>
          <img
            width="100%"
            src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/vue-project/69-plaza-vea-nanocell+1.png"
            alt=""
          />
        </div>
        <div class="contendor-avatar">
          <img
            width="70px"
            src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/vue-project/mirada-ojos-encuadre-primer-plano-sexy-810x540+1.png"
            alt=""
          />
          <div class="name-avatar">
            {{ promocion.user ? promocion.user.firstName : '' }}
            {{ promocion.user ? promocion.user.lastName : '' }}
          </div>
        </div>
        <div class="card-description">{{ promocion.description }}</div>
        <div class="card-fecha">Publicado a las {{ promocion.createdAt }}</div>
      </div>
      <div class="container-comment">
        <div class="title-card">Comentarios</div>
        <div v-for="comment in comentarios.slice(0, 10)" :key="comment.id">
          <div class="container-card color-background">
            <div class="card-title">
              <div class="contendor-avatar">
                <img
                  width="70px"
                  src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/vue-project/mirada-ojos-encuadre-primer-plano-sexy-810x540+1.png"
                  alt=""
                />
                <div class="name-avatar">
                  {{ comment.user ? comment.user.firstName : '' }}
                  {{ comment.user ? comment.user.lastName : '' }}
                </div>
              </div>
            </div>
            <div class="card-description">{{ comment.text }}</div>
          </div>
        </div>
      </div>
      <div>
        <form ref="form" @submit.prevent="sendLead">
          <div class="pagos-form__inputs">
            <v-text-field
              v-model="comentario"
              outlined
              color="#1B76B4"
              placeholder="Escribe un comentario..."
              background-color="#E6E6E6"
              :height="59"
              class="input-text"
            />
          </div>
          <div class="container-button">
            <v-btn
              width="100%"
              :height="50"
              class="btn-generic"
              outlined
              type="submit"
              >Enviar</v-btn
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SharedButton from '@/components/buttons/SharedButton'
import Logo from '@/components/Logo'
import InfiniteScroll from '@/components/InfiniteScroll'
export default {
  name: 'IndexPage',
  components: {
    SharedButton,
    Logo,
    InfiniteScroll,
  },
  data() {
    return {
      loading: null,
      comentario: null,
    }
  },
  methods: {
    sendLead() {
      console.log('SSSSSSSSSSSSSSSSSSSS')
    },
  },
  computed: {
    ...mapGetters('producto', ['promocion', 'comentarios']),
  },
  async mounted() {
    const paylodad = {}
    const id = this.$route.query.id
    console.log('id', id)
    await this.$store.dispatch('producto/getPromocion', id)
  },
}
</script>

<style>
.container-principal {
  max-width: 450px;
  /* background: #f5a623; */
  margin: 100px auto;
}
.title {
  color: #fc2016;
  font-family: Poppins;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
}
.title-card {
  font-weight: 800;
  color: #434343;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.contendor-avatar {
  display: flex;
}
.name-avatar {
  margin-top: 20px;
}
.container-card {
  width: 400px;
  margin: 70px auto;
}
.color-background {
  background: #c4c4c40d;
}
.card-title {
  font-size: 20px;
}
.card-description {
  text-align: justify;
  margin: 30px 0px;
}
</style>
