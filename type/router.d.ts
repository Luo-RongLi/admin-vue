import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 页面级别的权限
     * */
    auth?: string[]
    /**
     * 图标
     */
    icon?: string[]
    /**
     * 标题
     *  */
    title?: string
    /**
     * 页面缓存
     * */
    keepAlive?: boolean
    /**
     * 是否显示这个菜单
     */
    showLink?: boolean
    /** 将某个菜单激活
     * （主要用于通过`query`或`params`传参的路由，当它们通过配置`showLink: false`后不在菜单中显示，就不会有任何菜单高亮，
     * 而通过设置`activePath`指定激活菜单即可获得高亮，`activePath`为指定激活菜单的`path`）
     * */
    activePath?: string
    /** 页面加载动画（两种模式，第二种权重更高，第一种直接采用`vue`内置的`transitions`动画，第二种是使用`animate.css`编写进、离场动画，平台更推荐使用第二种模式，已经内置了`animate.css`，直接写对应的动画名即可）`可选` */
    transition?: {
      /**
       * @description 当前路由动画效果
       * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
       * @see animate.css {@link https://animate.style}
       */
      name?: string;
      /** 进场动画 */
      enterTransition?: string;
      /** 离场动画 */
      leaveTransition?: string;
    }|string;
  }
}
