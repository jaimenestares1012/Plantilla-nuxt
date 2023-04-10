
import { apiIdLast, apiSendDataStore, apiGetDataStore } from '@/api/serverles';
export const state = () => ({
  isLoading: false,
  productos: '',
  idLast: null ,
  carProducto: [],
  dataDashboard : [],
  dataTurno: []
});

export const mutations = {
  SET_ID(state, data) {
    state.idLast = data
  },
  SET_DES_PRODUCTOS(state, data) {
    state.carProducto = state.carProducto.map(p => {
      if (p.id === data.id) {
        if (p.cantidad > 0) { // Comprobación adicional para asegurarse de que la cantidad nunca sea menor que cero
          return { ...p, cantidad: p.cantidad - 1 };
        }
      }
      return p;
    });
  },
  

  
  SET_ADD_PRODUCTOS(state, data) {
    state.carProducto = state.carProducto.map(p => {
      if (p.id === data.id) {
        return { ...p, cantidad: p.cantidad + 1 };
      }
      return p;
    });
  },


  SET_ADD_PRODUCTO(state, data) {
    const index = state.carProducto.findIndex(p => p.id === data.id);
    if (index !== -1) {
      state.carProducto[index] = { ...state.carProducto[index], cantidad: state.carProducto[index].cantidad + 1 };
    } else {
      state.carProducto.push(data);
    }

  },
  SET_CLEAR(state){
    console.log("LIPIERZA");
    state.carProducto = []
  },
  SET_ERROR(){
    console.log("SET_ERROR");
  },
  SET_DELETE_PRODUCTO(state, data){
    state.carProducto = state.carProducto.filter(p => p.id !== data.id);
  },
  SET_DATA_TURNO(state, data){
    state.dataTurno = data
  },
  SET_DATA_DASHBOARD(state, data){
    state.dataDashboard = data
    data.sort((a, b) => b.ID.localeCompare(a.ID));
    console.log("responseapiGetDataStore", state.dataDashboard);
  }
};

export const actions = {
    async getId({ commit }, payload) {
        const responseApiIdLast = await apiIdLast(payload);
        console.log("responseApiIdLast", responseApiIdLast);
        commit('SET_ID', responseApiIdLast.data.ID);
    },
    async sendDataStore({ commit }, payload){
      console.log("payload", payload);
      try {
        const responseSendDataStore = await apiSendDataStore(payload);
        console.log("responseSendDataStore", responseSendDataStore.codRes);
        if (responseSendDataStore.codRes == "00") {
          console.log("00");
          commit('SET_ID', responseSendDataStore.data.ID);
        }
      } catch (error) {
        commit('SET_ERROR', error);
      }
      
      // commit('SET_ID', responseApiIdLast.data.ID);
    },
    async getDataStore({ commit }) {
      const responseapiGetDataStore = await apiGetDataStore();


      commit('SET_DATA_DASHBOARD', responseapiGetDataStore.data);
  },
    
};



export const getters = {
    idLast: (state) => state.idLast,
    carProducto: (state) => state.carProducto,
    dataDashboard: (state) =>state.dataDashboard,
    dataTurno: (state) =>state.dataTurno,
};
