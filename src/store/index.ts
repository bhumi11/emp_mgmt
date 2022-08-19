import Vuex from 'vuex'

// Create Vuex data store
 const store = new Vuex.Store({
    state: {
        loader: false,
        callGetAll: false,
    },
    mutations: {
        LOADER(state, display) {
            state.loader = display;
        },
        CALLGETALL(state, value) {
            state.callGetAll = value;
        }
    },
    getters: {
        getLoader: state => {
            return state.loader;
        },
        callGetAll: state => {
            return state.callGetAll;
        },
        
    },
    actions: {
        ['showLoader']({ commit }) {
            commit('LOADER', true);
        },
        ['hideLoader']({ commit }) {
            commit('LOADER', false);
        },
        ['setGetAll'](context,value) {
            context.commit('CALLGETALL', value);
        }
    }
});
 export default store;