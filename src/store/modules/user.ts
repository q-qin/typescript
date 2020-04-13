import { login } from '@/api/user';

const state = {
  token: '123'
};

const mutations = {
  SET_TOKEN: (state: any, token: string) => {
    state.token = token;
  }
};
const actions = {
  login ({ commit }: any, param: any) {
    return new Promise((resolve, reject) => {
      // todo 清理缓存
      login(param).then((res: any) => {
        // 保存缓存
        commit('SET_TOKEN', param.phone);
        // todo js-cookie
        resolve();
      }).catch((e: ExceptionInformation) => {
        reject(e);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
