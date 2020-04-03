import request from './request';

// 登录
export function login (data: object) {
  return request.post('/login', data);
}
