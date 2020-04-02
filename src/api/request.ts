import $axios from './interceptors'
const BASE_URL = process.env.VUE_APP_BASE_API;

class request{
  constructor(){
  }

  private static axios(options:object){
    return $axios(options)
  }

  public static get(url:string, data:object, options:any={}) {
    options.url = BASE_URL + url;
    options.data = data;
    options.method = 'GET';
    return this.axios(options);
  }

  public static post(url:string, data:object, options:any={}) {
    options.url = BASE_URL + url;
    options.data = data;
    options.method = 'POST';
    return this.axios(options);
  }
}

export default request