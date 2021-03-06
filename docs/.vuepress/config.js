
const getImg=()=>{
    // let list=[
    //     'http://img.netbian.com/file/2017/0306/40e2d32a8f9151ed26a4edc19e38a145.gif',
    //     'http://img.netbian.com/file/20130418/4687ef6ce22285458a2375798bf0faaa.jpg',
    //     'http://img.netbian.com/file/2015/1111/23ae150fed1d9068495cedc0ec0a4003.jpg',
    //     'http://img.netbian.com/file/20150407/a9c7c5e8934d0ab39a0325c48c37fe41.jpg'
    // ]
    let list=[
        '/background/1.gif',
        '/background/2.jpg',
        '/background/3.jpg',
        '/background/4.jpg',
    ]
    let index= Math.floor(Math.random() * list.length)
    return list[index]
    // import('axios').then(module => {
    //   module.default.post('https://v1.alapi.cn/api/acg',{format:'json'}).then(res=>{
    //       return res.data.url
    //   }).catch(err=>console.log(err))
    // })
    // window.document.getElementsByClassName('theme-container')[0].getElementsByClassName.background=`url(${list[index]})`
}
module.exports = {
    title: '前端代码块',
    description: '前端,代码块,liziqi001,liziqi,前端代码块,vuepress,主题,vuepress主题,blog,vuepress-blog',
    // theme: '@vuepress/theme-xxx',
    base: '/',
    head:[
        ['meta', {name:"baidu-site-verification", content:"code-PUEizRChjl" }],
        ['meta', { name: 'keywords', content: '前端,代码块,liziqi001,liziqi,前端代码块,vuepress,主题,vuepress主题,blog,vuepress-blog' }],
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }],
        [
            //或者 `<script>var _hmt=...})();</script>`
            'script',{},
            `var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?6a09acd2b178586b5d5989d71fd4a92c";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();`
        ]
    ],
    globalUIComponents: [
        'BackgroundImg',
    ],
    clientDynamicModules() {
        return {
            name: 'constants.js',
            content: `export const url = '${getImg()}'`
        }
    },
    extendPageData ($page) {
        let url=getImg()
        $page.url = url
    },
    plugins: [
        // './plugin.js',
        ['vuepress-plugin-code-copy', true],
        '@vuepress/last-updated',
        '@vuepress/back-to-top',
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine', 
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'ovEDOqPNCp4iOvSiffKTKH4v-gzGzoHsz',
                    appKey: 'wiW4pV04wTcAC1bKApBxRdgC',
                    path:'window.location.pathname',
                    visitor: true // 阅读量统计
                }
            }
        ],
        "vuepress-plugin-auto-sidebar",
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    themeConfig: {
        repo: 'liziqi001/liziqi001.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ',

        lastUpdated: '上次更新',

        sidebarDepth: 3,
        displayAllHeaders: true, //展开所有菜单
        nav: [ //顶部导航
            { text: 'elementUI', link: '/elementUI/' },
            { text: 'vue', link: '/vue/' },
            { text: 'js', link: '/js/' },
            { text: 'html', link: '/html/' },
            { text: '实例', link: '/example/' },
            { text: '数据集', link: '/dataSet/' },
            {
                text: '官方文档',
                items: [
                    {
                        text: 'ui库',
                        items: [
                            { text: 'elementUI', link: 'https://element.eleme.io/#/zh-CN/component/button' },
                            { text: 'echarts', link: 'https://echarts.apache.org/examples/zh/index.html' },
                            { text: 'Mint UI', link: 'http://mint-ui.github.io/#!/zh-cn' }
                        ]
                    },
                    {
                        text: '工具库',
                        items: [
                            { text: 'axios', link: 'http://www.axios-js.com/zh-cn/docs/#axios-request-config' }
                        ]
                    }
                ]
            }, 
            {text:'技术文章',link: '/blog/'},
            {text:'随笔',link: '/note/'},
            { 
                text: '本站维护', 
                items:[
                    {text:'百度统计',link: 'https://tongji.baidu.com/web/10000318855/overview/index?siteId=16296916'},
                    {text:'评论数据',link: 'https://console.leancloud.cn/apps/ovEDOqPNCp4iOvSiffKTKH4v-gzGzoHsz/storage/data/Comment?tab=table&env=production'},
                    {text:'自动部署',link: 'https://travis-ci.com/github/liziqi001/liziqi001.github.io'},
                    {text:'接口平台',link: 'http://rap2.taobao.org'},
                ]
            },
            { 
                text: '关于我', 
                items:[
                    {text:'我的项目',link: '/project/online.html'},
                    {text:'联系我',link: '/contactMe.html'},
                ]
            },

        ],
        sidebar: { //侧边栏
            // {
            //     title: 'elementUI',   // 必要的
            //     path: '/elementUI/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //     collapsable: false, // 可选的, 标题合起来,默认值是 true,
            //     // sidebarDepth: 1,    // 可选的, 默认值是 1
            //     children: [
            //       "/elementUI/table",
            //       "/elementUI/message",
            //       "/elementUI/select",
            //       "/elementUI/form",
            //       "/elementUI/icon",
            //     ]
            // },
            // {
            //     title: 'vue',   
            //     path: '/vue/',        
            //     collapsable: false,
            //     children: [
            //       "/vue/watch",
            //       "/vue/router",
            //       "/vue/axios",
            //       "/vue/template模板",
            //     ]
            // },
            // '/elementUI/': [
            //     '/',
            //     'table',
            //     'form',
            //     'dialog',
            //     'select',
            //     'input',
            //     'tree',
            //     'loading',
            //     'DatePicker',
            //     'tooltip',
            //     'popover',
            //     'icon',
            //     'image',
            //     'message',
            //     'MessageBox',
            //     'upload',
            //     '其他技巧',
            // ],
            // '/vue/': [
            //     '/',
            //     'axios',
            //     'props',
            //     'watch',
            //     'router',
            //     'template模板',
            // ],
            // '/html/': [
            //     '/',
            //     'table',
            //     'document',
            // ],
            // '/js/': [
            //     '/',
            //     'Math',
            //     'Date',
            // ],
            // '/example/': [
            //     '/',
            //     '基于vue',
            // ],
            // '/': [
            //     '',
            // ]
        },
        // sidebar:'auto'
    }
}