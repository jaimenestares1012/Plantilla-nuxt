<template>
  <div>
    <div class="container-principal">
      <Logo></Logo>
      <div class="title">Registrate para ingresar</div>
      <Form></Form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SharedButton from '@/components/buttons/SharedButton'
import Logo from '@/components/Logo'
import Form from '@/components/Form'
export default {
  name: 'IndexPage',
  components: {
    SharedButton,
    Logo,
    Form,
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
  async mounted() {},
}
</script>

<style>
.container-principal {
  max-width: 450px;
  margin: auto;
}
.title {
  color: #fc2016;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
