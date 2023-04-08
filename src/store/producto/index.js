
import { apiIdLast, apiSendDataStore } from '@/api/serverles';
export const state = () => ({
  isLoading: false,
  productos: '',
  idLast: null ,
  carProducto: [] 
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
        if (p.cantidad < 3) {
          return { ...p, cantidad: p.cantidad + 1 };
        } else {
          return p;
        }
      }
      return p;
    });
  },


  SET_ADD_PRODUCTO(state, data) {
    const index = state.carProducto.findIndex(p => p.id === data.id);
    if (index !== -1) {
      if (state.carProducto[index].cantidad < 3) {
        state.carProducto[index] = { ...state.carProducto[index], cantidad: state.carProducto[index].cantidad + 1 };
      } else {
        // Si ya hay 3 unidades, no se agrega más
        console.log('Este producto ya tiene la cantidad máxima permitida');
      }
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
    }
    
    
};



export const getters = {
    idLast: (state) => state.idLast,
    carProducto: (state) => state.carProducto,
};
