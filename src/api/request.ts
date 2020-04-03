import $axios from './interceptors';

class ApiRequest {
  // constructor () {}

  private static axios (options: object) {
    return $axios(options);
  }

  public static get (url: string, data: object, options: any) {
    options.url = url;
    options.data = data;
    options.method = 'GET';
    return this.axios(options);
  }

  public static post (url: string, data: object, options: any = {}) {
    options.url = url;
    options.data = data;
    options.method = 'POST';
    return this.axios(options);
  }
}

export default ApiRequest;
