export default [
    {
        path: '/',
        name: 'index',
        component: resolve => require(['./views/index.vue'], resolve),
    }, {
        path: '*',
        name: '404',
        redirect: '/',
    }, {
        path: '/guide',
        name: 'guide',
        component: resolve => require(['./views/guide.vue'], resolve),
        children: [
            {
                path: 'easy',
                name: 'easy',
                component: resolve => require(['./docs/zh-cn/easy.md'], resolve),
            }, {
                path: 'efficient',
                name: 'efficient',
                component: resolve => require(['./docs/zh-cn/efficient.md'], resolve),
            }, {
                path: 'safety',
                name: 'safety',
                component: resolve => require(['./docs/zh-cn/safety.md'], resolve),
            }, {
                path: 'tech',
                name: 'tech',
                component: resolve => require(['./docs/zh-cn/tech.md'], resolve),
            }, {
                path: 'color',
                name: 'color',
                component: resolve => require(['./docs/zh-cn/color.md'], resolve),
            }, {
                path: 'font',
                name: 'font',
                component: resolve => require(['./docs/zh-cn/font.md'], resolve),
            }, {
                path: 'icon',
                name: 'icon',
                component: resolve => require(['./docs/zh-cn/icon.md'], resolve),
            }, {
                path: 'buttonDoc',
                name: 'buttonDoc',
                component: resolve => require(['./docs/zh-cn/buttonDoc.md'], resolve),
            }, {
                path: 'biz05',
                name: 'biz05',
                component: resolve => require(['./docs/zh-cn/biz05.md'], resolve),
            }, {
                path: 'biz06',
                name: 'biz06',
                component: resolve => require(['./docs/zh-cn/biz06.md'], resolve),
            }, {
                path: 'biz07',
                name: 'biz07',
                component: resolve => require(['./docs/zh-cn/biz07.md'], resolve),
            },
        ],
    }, {
        path: '/components',
        name: 'components',
        component: resolve => require(['./views/components.vue'], resolve),
        children: [{
            path: 'start',
            name: 'start',
            component: resolve => require(['./docs/zh-cn/start.md'], resolve),
        }, {
            path: 'contribute',
            name: 'contribute',
            component: resolve => require(['./docs/zh-cn/contribute.md'], resolve),
        }, {
            path: 'button',
            name: 'button',
            component: resolve => require(['./docs/zh-cn/button.md'], resolve),
        }, {
            path: 'layout',
            name: 'layout',
            component: resolve => require(['./docs/zh-cn/layout.md'], resolve),
        }, {
            path: 'whiteSpace',
            name: 'whiteSpace',
            component: resolve => require(['./docs/zh-cn/whiteSpace.md'], resolve),
        }, {
            path: 'wingBlank',
            name: 'wingBlank',
            component: resolve => require(['./docs/zh-cn/wingBlank.md'], resolve),
        }, {
            path: 'badge',
            name: 'badge',
            component: resolve => require(['./docs/zh-cn/badge.md'], resolve),
        }, {
            path: 'grid',
            name: 'grid',
            component: resolve => require(['./docs/zh-cn/grid.md'], resolve),
        }, {
            path: 'icon',
            name: 'icon',
            component: resolve => require(['./docs/zh-cn/icon.md'], resolve),
        }, {
            path: 'list',
            name: 'list',
            component: resolve => require(['./docs/zh-cn/list.md'], resolve),
        }, {
            path: 'progress',
            name: 'progress',
            component: resolve => require(['./docs/zh-cn/progress.md'], resolve),
        }, {
            path: 'activityIndicator',
            name: 'activityIndicator',
            component: resolve => require(['./docs/zh-cn/activityIndicator.md'], resolve),
        }, {
            path: 'toast',
            name: 'toast',
            component: resolve => require(['./docs/zh-cn/toast.md'], resolve),
        }, {
            path: 'tabbar',
            name: 'tabbar',
            component: resolve => require(['./docs/zh-cn/tabbar.md'], resolve),
        }, {
            path: 'card',
            name: 'card',
            component: resolve => require(['./docs/zh-cn/card.md'], resolve),
        }, {
            path: 'switch',
            name: 'switch',
            component: resolve => require(['./docs/zh-cn/switch.md'], resolve),
        }, {
            path: 'radio',
            name: 'radio',
            component: resolve => require(['./docs/zh-cn/radio.md'], resolve),
        }, {
            path: 'tabs',
            name: 'tabs',
            component: resolve => require(['./docs/zh-cn/tabs.md'], resolve),
        }, {
            path: 'popup',
            name: 'popup',
            component: resolve => require(['./docs/zh-cn/popup.md'], resolve),
        }, {
            path: 'checkbox',
            name: 'checkbox',
            component: resolve => require(['./docs/zh-cn/checkbox.md'], resolve),
        }, {
            path: 'modal',
            name: 'modal',
            component: resolve => require(['./docs/zh-cn/modal.md'], resolve),
        }, {
            path: 'loadingBar',
            name: 'loadingBar',
            component: resolve => require(['./docs/zh-cn/loadingBar.md'], resolve),
        }],
    }];
