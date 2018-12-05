import Vue from 'vue'
import Vuex from 'vuex'
import VsAdmin from './modules/VsAdmin'

Vue.use(Vuex)

const _Store = {
    modules: {
        VsAdmin
    }
}
// console.log(_Store);

export default new Vuex.Store(_Store)
