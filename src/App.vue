<template>
  <div class="container">

    <h1 class="text-center mt-3" >Paises Api</h1>
    <ContinentesVue />
    <Buscador />
    <Cardbandera />
  </div>
</template>


<script>
import Cardbandera from './components/Cardbandera.vue'
import ContinentesVue from './components/Continentes.vue'
import Buscador from './components/Buscador.vue';
export default {
  components:{
    Cardbandera,
    ContinentesVue,
    Buscador
  }
}
</script>


<style>

</style>
