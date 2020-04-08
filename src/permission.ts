import router from './router';
import store from './store';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import { getToken } from '@/utils/jscookie'; // get token from cookie
import getPageTitle from '@/utils/get-page-title';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login', '/register']; // no redirect whitelist
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // set page title
  document.title = getPageTitle(to.meta.title);
  // todo 判断是否登录
  const hasToken = getToken();
  next();
  NProgress.done();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
