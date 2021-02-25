
import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue, options,router }) => {
  Vue.use(Element);
  /**
   * 路由切换事件处理
   */
  router.beforeEach((to, from, next) => {
    //触发百度的pv统计
    if (typeof _hmt != "undefined") {
      if (to.path) {
        if(location.host=='liziqi001.github.io'){
          _hmt.push(["_trackPageview", to.fullPath]);
        }
      }
    }

    // continue
    next();
  });
};