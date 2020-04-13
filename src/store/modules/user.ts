import { login } from '@/api/user';
import { setToken, clearToken } from '@/utils/jscookie';

export interface State{
  token: string;
}

const state = {
  token: '123'
};

const mutations = {
  SET_TOKEN: (state: State, token: string) => {
    state.token = token;
  }
};
const actions = {
  login ({ commit }: any, param: any) {
    return new Promise((resolve, reject) => {
      // 清理cookie
      clearToken();
      login(param).then((res: any) => {
        // 更新store
        commit('SET_TOKEN', res.token);
        // 保存cookie
        setToken(res.token);
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
