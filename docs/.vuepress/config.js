module.exports = {
    title: '前端代码块',
    description: 'Just playing around',
    // theme: '@vuepress/theme-xxx',
    base: '/',
    plugins: [
        ['vuepress-plugin-code-copy', true],
        '@vuepress/last-updated',
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine', 
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'ovEDOqPNCp4iOvSiffKTKH4v-gzGzoHsz',
                    appKey: 'wiW4pV04wTcAC1bKApBxRdgC'
                }
            }
        ],
        "vuepress-plugin-auto-sidebar"
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
        repoLabel: '我的github',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ',

        lastUpdated: '上次更新',

        sidebarDepth: 2,
        displayAllHeaders: true, //展开所有菜单
        nav: [ //顶部导航
            { text: 'elementUI', link: '/elementUI/' },
            { text: 'vue', link: '/vue/' },
            { text: 'js', link: '/js/' },
            { text: 'html', link: '/html/' },
            { text: '实例', link: '/example/' },
            { text: '我的项目', link: '/myProject.html' },
            { text: '随笔', link: '/blog/' },
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
                    }
                ]
            }

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