import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dev: window.location.host == 'localhost:8080' ? true : false,
    scrolledDown: false,
    scrolledBottom: false
  },
  mutations: {
    updateScrolledDown: function(state, scrolledDown){
      state.scrolledDown = scrolledDown;
    },
    updateScrolledBottom: function(state, scrolledBottom){
      state.scrolledBottom = scrolledBottom;
    }
  }
});

/*
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Assume we have a universal API that returns Promises
// and ignore the implementation details
import { fetchItem } from './api';

export function createStore () {
  return new Vuex.Store({
    // IMPORTANT: state must be a function so the module can be
    // instantiated multiple times
    state: () => ({
      dev: window.location.host == 'localhost:8080' ? true : false,
      scrolledDown: false,
      scrolledBottom: false
    }),
    actions: {
      fetchItem ({ commit }, id) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        return fetchItem(id).then(item => {
          commit('setItem', { id, item });
        })
      }
    },
    mutations: {
      updateScrolledDown(state, scrolledDown){
        Vue.set(state.scrolledDown, scrolledDown);
      },
      updateScrolledBottom(state, scrolledBottom){
        Vue.set(state.scrolledBottom, scrolledBottom);
      }
    }
  });
};
*/
