
import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const setImg=()=>{
  let list=[
    'https://imglf5.nosdn.127.net/img/MmU4dzhkalUyS3ZaWXY3YzJxejdZNjF5c2t4UFRXTkwxRXNXbUNwdzFSYWpoM3NuSEZxbTF3PT0.jpg?imageView&thumbnail=2664y2000&type=jpg&quality=96&stripmeta=0&type=jpg',
    'https://imglf6.nosdn.127.net/img/d0lIKy8yVTQvWlZta1ZLaUIzRFJUMmFQVUI3K1pIamFyOUtya2RHR0Q2eHpSKzZ6bnQySWdBPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
    'https://lofter.lf127.net/1611802734076/tata.gif?imageView&stripmeta=0&thumbnail=2000x2000&tostatic=0',
    'https://lofter.lf127.net/1611802494106/JimmyhE.jpg?imageView&type=jpg&quality=80&stripmeta=0&thumbnail=4000x4000'
  ]
  let index=Math.floor(Math.random() * list.length)
  window.document.getElementsByClassName('theme-container')[0].style.background=`url(${list[index]})`
}

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

    // setTimeout(()=>{
    //   setImg()
    // },800)

  });


};