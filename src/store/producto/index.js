
import { apiIdLast } from '@/api/serverles';
export const state = () => ({
  isLoading: false,
  productos: '',
  idLast: null  
});

export const mutations = {
  SET_ID(state, data) {
    state.idLast = data
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
};
