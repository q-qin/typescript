import request from './request'

export function login(data:object){
  return request.get('/login',data)
}