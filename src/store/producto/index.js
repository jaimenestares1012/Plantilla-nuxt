
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
        if (p.cantidad < 4) {
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
      state.carProducto[index] = { ...state.carProducto[index], cantidad: state.carProducto[index].cantidad + 1 };
    } else {
      state.carProducto.push(data);
    }
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
      const responseSendDataStore = await apiSendDataStore(payload);
      console.log("responseSendDataStore", responseSendDataStore);
      // commit('SET_ID', responseApiIdLast.data.ID);
    }
    
    
};



export const getters = {
    idLast: (state) => state.idLast,
    carProducto: (state) => state.carProducto,
};
