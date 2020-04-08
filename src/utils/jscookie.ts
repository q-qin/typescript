import Cookies from 'js-cookie';

const KEY_TOKEN = 'js_pc_token'; // access_token
const EXPIRES = 0.5; // cookie过期时间(h)，0=session

// 获取access_token
export function getToken () {
  return Cookies.get(KEY_TOKEN);
};

// 设置access_token
export function setToken (value: string) {
  if (EXPIRES) {
    return Cookies.set(KEY_TOKEN, value, { expires: EXPIRES });
  }
  return Cookies.set(KEY_TOKEN, value);
}
