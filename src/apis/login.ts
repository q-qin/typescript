import axios from "./axios";
/**
 * 发送短信验证码
 * @param mobile
 * @returns {*}
 */
export function sendCode(mobile: string) {
  return axios.get(`common/sendmessagecode/${mobile}`);
}
/**
 * 使用短信验证码登录
 * @param mobile
 * @param code
 * @returns {*}
 */
export function login(data: {
  mobileNumber: string;
  messagecode: string;
  systemType: number;
}): Promise<{
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  iss: string;
  user_info: {
    id: number;
    account: string;
    name: string;
    mobile: string;
    gender: string;
  };
}> {
  return axios.post(`merchant/cloud/login`, data);
}

