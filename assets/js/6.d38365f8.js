(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{447:function(t,e,i){},488:function(t,e,i){"use strict";var a=i(447);i.n(a).a},498:function(t,e,i){"use strict";i.r(e);var a={mounted:function(){console.log("BackgroundImg","/background/3.jpg")},beforeRouteUpdate:function(t,e,i){console.log("beforeRouteEnter",this),i()},data:function(){return{showMusic:!1,musics:[{name:"爱的可能-叶倩文",url:"//music.163.com/outchain/player?type=2&id=1829151419&auto=1&height=66"},{name:"明天你好-李成宇",url:"//music.163.com/outchain/player?type=2&id=33955178&auto=1&height=66"},{name:"恋人心-若菲飞",url:"//music.163.com/outchain/player?type=2&id=421110129&auto=1&height=66"},{name:"化身孤岛的鲸-不才",url:"//music.163.com/outchain/player?type=2&id=448184048&auto=1&height=66"}],playIndex:0,opacity:10}},computed:{},methods:{changeMusic:function(t){"after"==t?this.playIndex<this.musics.length-1&&(this.playIndex+=1):this.playIndex>0&&(this.playIndex-=1)},changeImg:function(){this.index=Math.floor(Math.random()*this.list.length)}}},s=(i(488),i(15)),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("div",{staticClass:"container",style:{filter:"opacity("+t.opacity/100+")",background:"url("+t.$page.url+")",backgroundSize:"cover"}}),t._v(" "),i("el-slider",{staticClass:"slider",attrs:{vertical:"",step:5,height:"180px","show-tooltip":!1},model:{value:t.opacity,callback:function(e){t.opacity=e},expression:"opacity"}}),t._v(" "),i("el-switch",{staticClass:"switch",attrs:{"active-text":"Music"},model:{value:t.showMusic,callback:function(e){t.showMusic=e},expression:"showMusic"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showMusic,expression:"showMusic"}],staticClass:"iframe"},[i("iframe",{attrs:{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:t.musics[t.playIndex].url}}),t._v(" "),i("div",{staticClass:"control"},[i("el-link",{attrs:{disabled:0==t.playIndex},on:{click:function(e){return t.changeMusic("before")}}},[t._v("上一首")]),t._v(" "),i("el-link",{attrs:{disabled:t.playIndex==t.musics.length-1},on:{click:function(e){return t.changeMusic("after")}}},[t._v("下一首")])],1)])],1)}),[],!1,null,"5ab82a0c",null);e.default=c.exports}}]);