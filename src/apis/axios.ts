import axios from "axios";
import router from "../router";
import { session } from "@/utils/store";
// @ts-ignore
import { Toast } from "vue-ydui/dist/lib.rem/dialog";
const instance = axios.create();
//可能出现多个端不同接口地址
const Root: Host = {
  "a.3keji.com": "http://a.3keji.com",
  "b.3keji.com": "http://b.3keji.com", 
};
interface Host {
  "a.3keji.com": string;
  "b.3keji.com": string;
}
const rootApi: string = Root[<keyof Host>window.location.host];
instance.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/" : rootApi + "/api";
instance.defaults.timeout = 10000;
instance.interceptors.request.use(
  config => {
    config.headers.common["storeid"] = 0;
    if (!!session.get("access_token")) {
      config.headers.common["Authorization"] =
        "Bearer " + session.get("access_token");
      config.headers.common["token"] = session.get("access_token");
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  response => {
    if (response.data.code === 20000) {
      return response.data.data;
    } else {
      Toast({
        mes: response.data.message,
        timeout: 1500
      });
      return Promise.reject(response.data);
    }
  },
  err => {
    if (err.message && err.message.indexOf("timeout") !== -1) {
      Toast({
        mes: "连接超时,请稍后再试！",
        timeout: 1500
      });
    } else {
      if (err.response.status === 401) {
        router.push("/login");
        Toast({
          mes: "您的账号在其他地方登录，请重新登录！",
          timeout: 1500
        });
        return new Promise(() => {});
      }
      Toast({
        mes: "网络异常,请稍后再试！",
        timeout: 1500
      });
    }

    return Promise.reject(err);
  }
);

export default instance;
