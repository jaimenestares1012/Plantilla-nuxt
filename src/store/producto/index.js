
import { apiIdLast } from '@/api/serverles';
export const state = () => ({
  isLoading: false,
  productos: '',
  idLast: null ,
  carProducto: [{
    name: 'Mini croissants',
    description: 'Mini croissants',
    id: 'c01',
    cantidad: 1,
    url: '/samsung/bebida.png',
  },] 
});

export const mutations = {
  SET_ID(state, data) {
    state.idLast = data
  },
  SET_DES_PRODUCTOS(state, data) {
    const index = state.carProducto.findIndex(p => p.id === data.id);
    state.carProducto[index]  = { ...state.carProducto[index], cantidad: state.carProducto[index].cantidad - 1 };
    console.log("SET_ADD_PRODUCTOS", state.carProducto );
  },
  SET_ADD_PRODUCTOS(state, data) {
    const index = state.carProducto.findIndex(p => p.id === data.id);
    state.carProducto[index]  = { ...state.carProducto[index], cantidad: state.carProducto[index].cantidad + 1 };
    console.log("SET_ADD_PRODUCTOS", state.carProducto );
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
    
    
};



export const getters = {
    idLast: (state) => state.idLast,
    carProducto: (state) => state.carProducto,
};
