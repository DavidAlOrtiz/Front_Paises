<template>
 <div class="text-center my-2">
     <h3>Filtrar por continnete</h3>
  <div class="btn-grou">
      <button class="btn btn-primary" @click="filtro('Americas')">AMERICA</button>
      <button class="btn btn-primary" @click="filtro('Europe')">EUROPA</button>
      <button class="btn btn-primary" @click="filtro('Asia')">ASIA</button>
      <button class="btn btn-primary" @click="filtro('Oceania')">OCEANIA</button>
      <button class="btn btn-primary" @click="filtro('Africa')">AFRICA</button>
      <button class="btn btn-primary" @click="filtro('')">ALL</button>
  </div>
 </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore();
        const filtro = (region) =>{
            store.dispatch('filtrarPaises', region);
        }
        return {
            filtro,
        }
    }
}
</script>
