import { RouteRecordRaw } from 'vue-router'

/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: () => import('/@/layout/index.vue'),
    redirect: '/home',
    meta: {
      isKeepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: 'message.router.home',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-shouye'
        }
      },
      {
        path: '/system',
        name: 'system',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/system/menu',
        meta: {
          title: 'message.router.system',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-xitongshezhi'
        },
        children: [
          {
            path: '/system/menu',
            name: 'systemMenu',
            component: () => import('/@/views/system/menu/index.vue'),
            meta: {
              title: 'message.router.systemMenu',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'iconfont icon-caidan'
            }
          },
          {
            path: '/system/role',
            name: 'systemRole',
            component: () => import('/@/views/system/role/index.vue'),
            meta: {
              title: 'message.router.systemRole',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'elementColdDrink'
            }
          },
          {
            path: '/system/user',
            name: 'systemUser',
            component: () => import('/@/views/system/user/index.vue'),
            meta: {
              title: 'message.router.systemUser',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'iconfont icon-icon-'
            }
          },
          {
            path: '/system/dept',
            name: 'systemDept',
            component: () => import('/@/views/system/dept/index.vue'),
            meta: {
              title: 'message.router.systemDept',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'elementOfficeBuilding'
            }
          },
          {
            path: '/system/dic',
            name: 'systemDic',
            component: () => import('/@/views/system/dic/index.vue'),
            meta: {
              title: 'message.router.systemDic',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'elementSetUp'
            }
          }
        ]
      },
      {
        path: '/limits',
        name: 'limits',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/limits/frontEnd',
        meta: {
          title: 'message.router.limits',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-quanxian'
        },
        children: [
          {
            path: '/limits/frontEnd',
            name: 'limitsFrontEnd',
            component: () => import('/@/layout/routerView/parent.vue'),
            redirect: '/limits/frontEnd/page',
            meta: {
              title: 'message.router.limitsFrontEnd',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: ''
            },
            children: [
              {
                path: '/limits/frontEnd/page',
                name: 'limitsFrontEndPage',
                component: () => import('/@/views/limits/frontEnd/page/index.vue'),
                meta: {
                  title: 'message.router.limitsFrontEndPage',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: ''
                }
              },
              {
                path: '/limits/frontEnd/btn',
                name: 'limitsFrontEndBtn',
                component: () => import('/@/views/limits/frontEnd/btn/index.vue'),
                meta: {
                  title: 'message.router.limitsFrontEndBtn',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: ''
                }
              }
            ]
          },
          {
            path: '/limits/backEnd',
            name: 'limitsBackEnd',
            component: () => import('/@/layout/routerView/parent.vue'),
            meta: {
              title: 'message.router.limitsBackEnd',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: ''
            },
            children: [
              {
                path: '/limits/backEnd/page',
                name: 'limitsBackEndEndPage',
                component: () => import('/@/views/limits/backEnd/page/index.vue'),
                meta: {
                  title: 'message.router.limitsBackEndEndPage',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: ''
                }
              }
            ]
          }
        ]
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/menu/menu1',
        meta: {
          title: 'message.router.menu',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-caidan'
        },
        children: [
          {
            path: '/menu/menu1',
            name: 'menu1',
            component: () => import('/@/layout/routerView/parent.vue'),
            redirect: '/menu/menu1/menu11',
            meta: {
              title: 'message.router.menu1',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-caidan'
            },
            children: [
              {
                path: '/menu/menu1/menu11',
                name: 'menu11',
                component: () => import('/@/views/menu/menu1/menu11/index.vue'),
                meta: {
                  title: 'message.router.menu11',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'iconfont icon-caidan'
                }
              },
              {
                path: '/menu/menu1/menu12',
                name: 'menu12',
                component: () => import('/@/layout/routerView/parent.vue'),
                redirect: '/menu/menu1/menu12/menu121',
                meta: {
                  title: 'message.router.menu12',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'iconfont icon-caidan'
                },
                children: [
                  {
                    path: '/menu/menu1/menu12/menu121',
                    name: 'menu121',
                    component: () => import('/@/views/menu/menu1/menu12/menu121/index.vue'),
                    meta: {
                      title: 'message.router.menu121',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin', 'common'],
                      icon: 'iconfont icon-caidan'
                    }
                  },
                  {
                    path: '/menu/menu1/menu12/menu122',
                    name: 'menu122',
                    component: () => import('/@/views/menu/menu1/menu12/menu122/index.vue'),
                    meta: {
                      title: 'message.router.menu122',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin', 'common'],
                      icon: 'iconfont icon-caidan'
                    }
                  }
                ]
              },
              {
                path: '/menu/menu1/menu13',
                name: 'menu13',
                component: () => import('/@/views/menu/menu1/menu13/index.vue'),
                meta: {
                  title: 'message.router.menu13',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'iconfont icon-caidan'
                }
              }
            ]
          },
          {
            path: '/menu/menu2',
            name: 'menu2',
            component: () => import('/@/views/menu/menu2/index.vue'),
            meta: {
              title: 'message.router.menu2',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-caidan'
            }
          }
        ]
      },
      {
        path: '/fun',
        name: 'funIndex',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/fun/tagsView',
        meta: {
          title: 'message.router.funIndex',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-crew_feature'
        },
        children: [
          {
            path: '/fun/tagsView',
            name: 'funTagsView',
            component: () => import('/@/views/fun/tagsView/index.vue'),
            meta: {
              title: 'message.router.funTagsView',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementPointer'
            }
          },
          {
            path: '/fun/countup',
            name: 'funCountup',
            component: () => import('/@/views/fun/countup/index.vue'),
            meta: {
              title: 'message.router.funCountup',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementOdometer'
            }
          },
          {
            path: '/fun/echartsTree',
            name: 'funEchartsTree',
            component: () => import('/@/views/fun/tree/index.vue'),
            meta: {
              title: 'message.router.funEchartsTree',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementConnection'
            }
          },
          {
            path: '/fun/selector',
            name: 'funSelector',
            component: () => import('/@/views/fun/selector/index.vue'),
            meta: {
              title: 'message.router.funSelector',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-xuanzeqi'
            }
          },
          {
            path: '/fun/noticeBar',
            name: 'funNoticeBar',
            component: () => import('/@/views/fun/noticeBar/index.vue'),
            meta: {
              title: 'message.router.funNoticeBar',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementBell'
            }
          },
          {
            path: '/fun/wangEditor',
            name: 'funWangEditor',
            component: () => import('/@/views/fun/wangEditor/index.vue'),
            meta: {
              title: 'message.router.funWangEditor',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-fuwenbenkuang'
            }
          },
          {
            path: '/fun/cropper',
            name: 'funCropper',
            component: () => import('/@/views/fun/cropper/index.vue'),
            meta: {
              title: 'message.router.funCropper',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-caijian'
            }
          },
          {
            path: '/fun/qrcode',
            name: 'funQrcode',
            component: () => import('/@/views/fun/qrcode/index.vue'),
            meta: {
              title: 'message.router.funQrcode',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-ico'
            }
          },
          {
            path: '/fun/echartsMap',
            name: 'funEchartsMap',
            component: () => import('/@/views/fun/echartsMap/index.vue'),
            meta: {
              title: 'message.router.funEchartsMap',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-ditu'
            }
          },
          {
            path: '/fun/printJs',
            name: 'funPrintJs',
            component: () => import('/@/views/fun/printJs/index.vue'),
            meta: {
              title: 'message.router.funPrintJs',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementPrinter'
            }
          },
          {
            path: '/fun/clipboard',
            name: 'funClipboard',
            component: () => import('/@/views/fun/clipboard/index.vue'),
            meta: {
              title: 'message.router.funClipboard',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementDocumentCopy'
            }
          },
          {
            path: '/fun/screenShort',
            name: 'funScreenShort',
            component: () => import('/@/views/fun/screenShort/index.vue'),
            meta: {
              title: 'message.router.funScreenShort',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementCrop'
            }
          },
          {
            path: '/fun/gridLayout',
            name: 'funGridLayout',
            component: () => import('/@/views/fun/gridLayout/index.vue'),
            meta: {
              title: 'message.router.funGridLayout',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-tuodong'
            }
          },
          {
            path: '/fun/splitpanes',
            name: 'funSplitpanes',
            component: () => import('/@/views/fun/splitpanes/index.vue'),
            meta: {
              title: 'message.router.funSplitpanes',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon--chaifenlie'
            }
          },
          {
            path: '/fun/dragVerify',
            name: 'funDragVerify',
            component: () => import('/@/views/fun/dragVerify/index.vue'),
            meta: {
              title: 'message.router.funDragVerify',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementPromotion'
            }
          }
        ]
      },
      {
        path: '/pages',
        name: 'pagesIndex',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/pages/filtering',
        meta: {
          title: 'message.router.pagesIndex',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-fuzhiyemian'
        },
        children: [
          {
            path: '/pages/filtering',
            name: 'pagesFiltering',
            component: () => import('/@/views/pages/filtering/index.vue'),
            meta: {
              title: 'message.router.pagesFiltering',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementSell'
            },
            /**
						 * 注意此处详情写法：
						 * 1、嵌套进父级里时，面包屑显示为：首页/页面/过滤筛选组件/过滤筛选组件详情
						 * 2、不嵌套进父级时，面包屑显示为：首页/页面/过滤筛选组件/过滤筛选组件详情
						 * 3、想要父级不高亮，面包屑显示为：首页/页面/过滤筛选组件详情，设置路径为：/pages/filteringDetails
						 */
            children: [
              {
                path: '/pages/filtering/details',
                name: 'pagesFilteringDetails',
                component: () => import('/@/views/pages/filtering/details.vue'),
                meta: {
                  title: 'message.router.pagesFilteringDetails',
                  isLink: '',
                  isHide: true,
                  isKeepAlive: false,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'elementSunny'
                }
              }
            ]
          },
          {
            path: '/pages/filtering/details1',
            name: 'pagesFilteringDetails1',
            component: () => import('/@/views/pages/filtering/details1.vue'),
            meta: {
              title: 'message.router.pagesFilteringDetails1',
              isLink: '',
              isHide: true,
              isKeepAlive: false,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementSunny'
            }
          },
          {
            path: '/pages/iocnfont',
            name: 'pagesIocnfont',
            component: () => import('/@/views/pages/iocnfont/index.vue'),
            meta: {
              title: 'message.router.pagesIocnfont',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementPresent'
            }
          },
          {
            path: '/pages/element',
            name: 'pagesElement',
            component: () => import('/@/views/pages/element/index.vue'),
            meta: {
              title: 'message.router.pagesElement',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementEleme'
            }
          },
          {
            path: '/pages/awesome',
            name: 'pagesAwesome',
            component: () => import('/@/views/pages/awesome/index.vue'),
            meta: {
              title: 'message.router.pagesAwesome',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementSetUp'
            }
          },
          {
            path: '/pages/cityLinkage',
            name: 'pagesCityLinkage',
            component: () => import('/@/views/pages/cityLinkage/index.vue'),
            meta: {
              title: 'message.router.pagesCityLinkage',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-jiliandongxuanzeqi'
            }
          },
          {
            path: '/pages/formAdapt',
            name: 'pagesFormAdapt',
            component: () => import('/@/views/pages/formAdapt/index.vue'),
            meta: {
              title: 'message.router.pagesFormAdapt',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-biaodan'
            }
          },
          {
            path: '/pages/formI18n',
            name: 'pagesFormI18n',
            component: () => import('/@/views/pages/formI18n/index.vue'),
            meta: {
              title: 'message.router.pagesFormI18n',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-diqiu'
            }
          },
          {
            path: '/pages/formRules',
            name: 'pagesFormRules',
            component: () => import('/@/views/pages/formRules/index.vue'),
            meta: {
              title: 'message.router.pagesFormRules',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-shuxing'
            }
          },
          {
            path: '/pages/listAdapt',
            name: 'pagesListAdapt',
            component: () => import('/@/views/pages/listAdapt/index.vue'),
            meta: {
              title: 'message.router.pagesListAdapt',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-chazhaobiaodanliebiao'
            }
          },
          {
            path: '/pages/waterfall',
            name: 'pagesWaterfall',
            component: () => import('/@/views/pages/waterfall/index.vue'),
            meta: {
              title: 'message.router.pagesWaterfall',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-zidingyibuju'
            }
          },
          {
            path: '/pages/steps',
            name: 'pagesSteps',
            component: () => import('/@/views/pages/steps/index.vue'),
            meta: {
              title: 'message.router.pagesSteps',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-step'
            }
          },
          {
            path: '/pages/preview',
            name: 'pagesPreview',
            component: () => import('/@/views/pages/preview/index.vue'),
            meta: {
              title: 'message.router.pagesPreview',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-15tupianyulan'
            }
          },
          {
            path: '/pages/waves',
            name: 'pagesWaves',
            component: () => import('/@/views/pages/waves/index.vue'),
            meta: {
              title: 'message.router.pagesWaves',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-bolangneng'
            }
          },
          {
            path: '/pages/tree',
            name: 'pagesTree',
            component: () => import('/@/views/pages/tree/index.vue'),
            meta: {
              title: 'message.router.pagesTree',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-shuxingtu'
            }
          },
          {
            path: '/pages/drag',
            name: 'pagesDrag',
            component: () => import('/@/views/pages/drag/index.vue'),
            meta: {
              title: 'message.router.pagesDrag',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'elementPointer'
            }
          },
          {
            path: '/pages/lazyImg',
            name: 'pagesLazyImg',
            component: () => import('/@/views/pages/lazyImg/index.vue'),
            meta: {
              title: 'message.router.pagesLazyImg',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'elementPictureFilled'
            }
          },
          {
            path: '/pages/dynamicForm',
            name: 'pagesDynamicForm',
            component: () => import('/@/views/pages/dynamicForm/index.vue'),
            meta: {
              title: 'message.router.pagesDynamicForm',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'iconfont icon-diannao'
            }
          },
          {
            path: '/pages/workflow',
            name: 'pagesWorkflow',
            component: () => import('/@/views/pages/workflow/index.vue'),
            meta: {
              title: 'message.router.pagesWorkflow',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'elementConnection'
            }
          }
        ]
      },
      {
        path: '/params',
        name: 'paramsIndex',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/params/common',
        meta: {
          title: 'message.router.paramsIndex',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-zhongduancanshu'
        },
        children: [
          {
            path: '/params/common',
            name: 'paramsCommon',
            component: () => import('/@/views/params/common/index.vue'),
            meta: {
              title: 'message.router.paramsCommon',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'iconfont icon-putong'
            }
          },
          {
            path: '/params/common/details',
            name: 'paramsCommonDetails',
            component: () => import('/@/views/params/common/details.vue'),
            meta: {
              title: 'message.router.paramsCommonDetails',
              isLink: '',
              isHide: true,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'elementComment'
            }
          },
          {
            path: '/params/dynamic',
            name: 'paramsDynamic',
            component: () => import('/@/views/params/dynamic/index.vue'),
            meta: {
              title: 'message.router.paramsDynamic',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'iconfont icon-dongtai'
            }
          },
          {
            path: '/params/dynamic/details/:t/:id',
            name: 'paramsDynamicDetails',
            component: () => import('/@/views/params/dynamic/details.vue'),
            meta: {
              title: 'message.router.paramsDynamicDetails',
              isLink: '',
              isHide: true,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'elementLightning'
            }
          }
        ]
      },
      {
        path: '/visualizing',
        name: 'visualizingIndex',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/visualizing/visualizingLinkDemo1',
        meta: {
          title: 'message.router.visualizingIndex',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'elementChatLineRound'
        },
        children: [
          {
            path: '/visualizing/visualizingLinkDemo1',
            name: 'visualizingLinkDemo1',
            component: () => import('/@/layout/routerView/link.vue'),
            meta: {
              title: 'message.router.visualizingLinkDemo1',
              isLink: `${import.meta.env.VITE_API_URL}#/visualizingDemo1`,
              isHide: false,
              isKeepAlive: false,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'iconfont icon-caozuo-wailian'
            }
          },
          {
            path: '/visualizing/visualizingLinkDemo2',
            name: 'visualizingLinkDemo2',
            component: () => import('/@/layout/routerView/link.vue'),
            meta: {
              title: 'message.router.visualizingLinkDemo2',
              isLink: `${import.meta.env.VITE_API_URL}#/visualizingDemo2`,
              isHide: false,
              isKeepAlive: false,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'iconfont icon-caozuo-wailian'
            }
          }
        ]
      },
      {
        path: '/chart',
        name: 'chartIndex',
        component: () => import('/@/views/chart/index.vue'),
        meta: {
          title: 'message.router.chartIndex',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-ico_shuju'
        }
      },
      {
        path: '/personal',
        name: 'personal',
        component: () => import('/@/views/personal/index.vue'),
        meta: {
          title: 'message.router.personal',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-gerenzhongxin'
        }
      },
      {
        path: '/tools',
        name: 'tools',
        component: () => import('/@/views/tools/index.vue'),
        meta: {
          title: 'message.router.tools',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-gongju'
        }
      },
      {
        path: '/link',
        name: 'layoutLinkView',
        component: () => import('/@/layout/routerView/link.vue'),
        meta: {
          title: 'message.router.layoutLinkView',
          isLink: 'https://element-plus.gitee.io/#/zh-CN/component/installation',
          isHide: false,
          isKeepAlive: false,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-caozuo-wailian'
        }
      },
      {
        path: '/iframes',
        name: 'layoutIfameView',
        component: () => import('/@/layout/routerView/iframes.vue'),
        meta: {
          title: 'message.router.layoutIfameView',
          isLink: 'https://wdd.js.org/jsplumb-chinese-tutorial/#/',
          isHide: false,
          isKeepAlive: false,
          isAffix: true,
          isIframe: true,
          roles: ['admin'],
          icon: 'iconfont icon-neiqianshujuchucun'
        }
      }
    ]
  }
]

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('/@/views/error/404.vue'),
    meta: {
      title: 'message.staticRoutes.notFound'
    }
  },
  {
    path: '/401',
    name: 'noPower',
    component: () => import('/@/views/error/401.vue'),
    meta: {
      title: 'message.staticRoutes.noPower'
    }
  },
  /**
	 * 提示：写在这里的为全屏界面，不建议写在这里
	 * 请写在 `dynamicRoutes` 路由数组中
	 */
  {
    path: '/visualizingDemo1',
    name: 'visualizingDemo1',
    component: () => import('/@/views/visualizing/demo1.vue'),
    meta: {
      title: 'message.router.visualizingLinkDemo1'
    }
  },
  {
    path: '/visualizingDemo2',
    name: 'visualizingDemo2',
    component: () => import('/@/views/visualizing/demo2.vue'),
    meta: {
      title: 'message.router.visualizingLinkDemo2'
    }
  }
]
