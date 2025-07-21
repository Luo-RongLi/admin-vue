import { describe, it, expect } from 'vitest'
import { flattenRoutesToTwoLevels } from '../utils'
import { routesConcat } from '..'
import routesArray from '../router'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

describe.only('flattenRoutesToTwoLevels', () => {
  // it('should flatten nested routes to two levels', () => {
  //   const routes = [
  //     {
  //       path: '/parent',
  //       children: [
  //         {
  //           path: 'child1',
  //           children: [{ path: 'grandchild1' }],
  //         },
  //         { path: 'child2' },
  //       ],
  //     },
  //   ]
  //   const result = flattenRoutesToTwoLevels(routes)
  //   // 根据你的新实现，修改下面的期望值
  //   expect(result).toEqual([
  //     {
  //       path: '/',
  //       children: [{ path: 'child1' }, { path: 'child2' }, { path: 'grandchild1' }],
  //     },
  //   ])
  // })
  it('set 静态路由和动态路由', () => {
    const routes: any = [
      {
        path: '/',
        name: 'index',
        component: () => import('@/layout/MainLayout.vue'),
        meta: {
          title: '首页',
          icon: 'home',
          sort: 1, // 使用 RoutesSort 枚举
        },
        children: [],
      },
    ]
    const result = flattenRoutesToTwoLevels([...routes, ...routesArray])
    console.log(JSON.stringify(result, null, 2))

    expect(result).toEqual([
      {
        path: '/',
        name: 'index',
        component: expect.any(Function),
        meta: {
          title: '首页',
          icon: 'home',
          sort: 1, // 使用 RoutesSort 枚举
        },
        children: routesArray.map(x=>({...x,component: expect.any(Function)})),
      },
    ])
  })
})
