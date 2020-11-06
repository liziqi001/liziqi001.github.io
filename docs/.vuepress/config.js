module.exports = {
    title: '前端代码块',
    description: 'Just playing around',
    // theme: '@vuepress/theme-xxx',
    base:'/',
    plugins: [
        ['vuepress-plugin-code-copy', true],
        '@vuepress/last-updated'
    ],
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 '
    locales: {
        '/': {
          lang: 'zh-CN', 
        }
      },
    themeConfig: {
        lastUpdated: '上次更新',
        sidebarDepth: 2,
        displayAllHeaders: true,//展开所有菜单
        nav : [//顶部导航
            { text: 'elementUI', link: '/elementUI/' },
            { text: 'vue', link: '/vue/' },
            { text: 'js', link: '/js/' },
            { text: 'html', link: '/html/' },
            {
                text: '官方ui文档',
                items: [
                    { 
                        text: 'pc', 
                        items: [
                            { text: 'elementUI', link: 'https://element.eleme.io/#/zh-CN/component/button' },
                            { text: 'echarts', link: 'https://echarts.apache.org/examples/zh/index.html' }
                        ] 
                    },
                    // { 
                    //     text: 'mobile', 
                    //     items: [{}] 
                    // },
                ]
            }
            
        ],
        sidebar:{//侧边栏
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
            '/elementUI/':[
                '/',
                'table',
                'form',
                'dialog',
                'select',
                'input',
                'tree',
                'loading',
                'DatePicker',
                'tooltip',
                'icon',
                'image',
                'message',
                'MessageBox',
                'upload',
            ],
            '/vue/':[
                '/',
                'axios',
                'props',
                'watch',
                'router',
                'template模板',
            ],
            '/html/':[
                '/',
                'table',
                'document',
            ],
            '/js/':[
                '/',
                'Math',
            ],
            '/': [
                '', 
              ]
            },
        // sidebar:'auto'
    }
}
