<template>

  <div class="card mb-2">
      <div class="card-body">
          <h5 class="text-center">{{paisV.name.common}}</h5>
          <p class="text-center">
              <img :src="paisV.flags[0]"  :alt="`bandera-${paisV.name.common}`" class="img-fluid w-50" />
          </p>
          <p class="card-text"> 
              <span class="badge badge-dark d-block text-dark " >Continente: <strong> {{paisV.region}} </strong></span>
               <span class="badge  badge-info p-3 d-block text-dark " >Poblacion: <strong> {{formatoNumero(paisV.population || 1)}}</strong> </span>
          </p>
          <!--
          <p class="card-text ">
             
              <span class="badge  badge-info p-3 d-block text-dark " >{{formatoNumero(paisV.population || 1)}}</span>
              <span class="badge badge-dark d-block text-dark " >{{paisV.capital[0]}}</span>
              <span class="badge badge-dark d-block text-dark " >{{paisV.region}}</span>
          </p>
          -->
      </div>
  </div>
</template>

<script>
export default {
    props : ['paisV'],
    setup(){
        const  formatoNumero = (numero) =>{
            return Intl.NumberFormat("es-MX").format(numero);
        }
        return{
            formatoNumero
        }
    }
}
</script>

<style>

</style>