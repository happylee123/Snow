//引入vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import A_store from './A_store'
import B_store from './B_store'
import C_store from './C_store'
import VuexPersistence from 'vuex-persist';
//引入之后，对vuex进行引用
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})


export default new Vuex.Store({
    modules:{
        A_store,
        B_store,
        C_store
    },
    plugins: [vuexLocal.plugin]
})