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

.titulo {
  font-size: 105px;
  width: 70%;
  margin: auto;
  text-align: center;
  line-height: 1;
}

.SharedButton {
  font-size: 2rem;
  font-weight: bold;
  background-color: #f5a623;
  color: #fff;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s ease;
}

.SharedButton:hover {
  background-color: #e69100;
}
.samsung-experience-title {
  text-align: center;
}
.samsung-logo {
  text-align: center;
  font-family: 'SamsungOne', sans-serif;
  font-size: 3em;
  color: #0023a3;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.display-experience {
  text-align: center;
  font-family: 'SamsungOne', sans-serif;
  font-size: 2.5em;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 6px #0d3f8d, 0 0 8px #0d3f8d, 0 0 12px #0d3f8d,
    0 0 20px #0d3f8d, 0 0 30px #0d3f8d;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
