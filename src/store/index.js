import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        kj_day: String,
    },
    mutations: {
        set_kj_day(state, e) {
            state.kj_day = e;
        },
    },
    actions: {},
    modules: {},
});
