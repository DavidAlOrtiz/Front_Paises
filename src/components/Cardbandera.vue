<template>
  <div class="row">
      <div class="col-md-6"
      v-for="pais in paises" :key="pais.name">
          <CardPais :paisV="pais" />
      </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import {useStore}  from 'vuex';
import CardPais from './CardPais.vue'
export default {
    components:{
        CardPais
    },
    setup(){
        const store = useStore();

        const paises = computed(()=>{
            return store.getters.paisesOrdenados;
        })


        onMounted(async ()=>{
            await store.dispatch('getPaises');
            await store.dispatch('filtrarPaises', 'Oceania');
        })
        
        return{paises}
    }
}
</script>

<style>

</style>