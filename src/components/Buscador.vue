<template>
    <input type="text" placeholder="Ingrese el pais" class="form-control my-3"  v-model="texto"
     @keyup="procesarValor" />
</template>

<script>
import { ref } from '@vue/reactivity'
import {useStore}  from 'vuex'
export default {
    setup(){
        const texto = ref("");
        const store = useStore();
        const procesarValor = () =>{
            console.log(texto.value);
            store.dispatch('filtroNombre', texto.value);
        } 
        return{ texto, procesarValor}
    }
}
</script>

<style>

</style>