import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisFiltrado : []
  },
  getters: {
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisFiltrado = payload;
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        const res = await fetch('https://restcountries.com/v3/all');
        const datos = await res.json();
        console.log(datos)
        commit('setPaises', datos)
      } catch (error) {
        console.error(error);
      }
    },
     filtrarPaises({commit, state}, region){
      console.log(region)
     const filtro = state.paises.filter(pais =>{
        // if(region === ""){
          //return pais;
        //}
        return pais.region.includes(region)
      });
      console.log(filtro)
      commit('setPaisesFiltrados', filtro);
    },
    filtroNombre({commit, state}, texto){

      const textoCliente = texto.toLowerCase();

      const filtro = state.paises.filter(pais =>{

        const textoApi = pais.name.official.toLowerCase();
        console.log(textoApi)
        if(textoApi.includes(textoCliente)){
          return pais;
        }

      })
      console.log(filtro)
      commit('setPaisesFiltrados', filtro);
    }
  },
  getters:{
    paisesOrdenados(state){
      return state.paisFiltrado.sort((a, b) =>{
        return a.population < b.population ? 1 : -1;
      })
    }
  }
  ,
  modules: {
  }
})
