import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';

import { createLogger } from '@/plugins/vue-logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    user
  },
  getters,
  plugins: debug ? [createLogger()] : []
});
