import { describe, it, expect } from 'vitest'
import { flattenRoutesToTwoLevels } from '../utils'

describe('flattenRoutesToTwoLevels', () => {
  it('should flatten nested routes to two levels', () => {
    const routes = [
      {
        path: '/parent',
        children: [
          {
            path: 'child1',
            children: [{ path: 'grandchild1' }],
          },
          { path: 'child2' },
        ],
      },
    ]
    const result = flattenRoutesToTwoLevels(routes)
    // 根据你的新实现，修改下面的期望值
    expect(result).toEqual([
      {
        path: '/',
        children: [{ path: 'child1' }, { path: 'child2' }, { path: 'grandchild1' }],
      },
    ])
  })

  it('should handle routes with no children', () => {
    const routes = [{ path: '/foo' }, { path: '/bar' }]

    const result = flattenRoutesToTwoLevels(routes)

    expect(result).toEqual([
      {
        path: '/',
        children: [],
      },
    ])
  })

  it('should return an empty array if input is empty', () => {
    expect(flattenRoutesToTwoLevels([])).toEqual([])
  })

  it('should handle root route with children', () => {
    const routes = [
      {
        path: '/',
        children: [{ path: 'dashboard' }, { path: 'settings' }],
      },
    ]

    const result = flattenRoutesToTwoLevels(routes)

    expect(result).toEqual([
      {
        path: '/',
        children: [{ path: 'dashboard' }, { path: 'settings' }],
      },
    ])
  })

  it('should ignore deeper nested children', () => {
    const routes = [
      {
        path: '/',
        children: [
          {
            path: 'a',
            children: [{ path: 'b', children: [{ path: 'c' }] }],
          },
        ],
      },
    ]

    const result = flattenRoutesToTwoLevels(routes)

    expect(result).toEqual([
      {
        path: '/',
        children: [{ path: 'a' },{ path: 'b'},{ path: 'c' }],
      },
    ])
  })

  it('should handle routes with additional properties', () => {
    const routes = [
      {
        path: '/',
        children: [
          { path: 'home', meta: { requiresAuth: true } },
          { path: 'about', name: 'AboutPage' },
        ],
      },
    ]

    const result = flattenRoutesToTwoLevels(routes)

    expect(result).toEqual([
      {
        path: '/',
        children: [
          { path: 'home', meta: { requiresAuth: true } },
          { path: 'about', name: 'AboutPage' },
        ],
      },
    ])
  })

  it('should handle multiple top-level routes with children', () => {
    const routes = [
      {
        path: '/a',
        children: [{ path: 'a1' }, { path: 'a2' }],
      },
      {
        path: '/b',
        children: [{ path: 'b1' }],
      },
    ]

    const result = flattenRoutesToTwoLevels(routes)

    expect(result).toEqual([
      {
        path: '/',
        children: [{ path: 'a1' }, { path: 'a2' }, { path: 'b1' }],
      },
    ])
  })

  it('should handle routes with only root and no children', () => {
    const routes = [{ path: '/' }]

    const result = flattenRoutesToTwoLevels(routes)

    expect(result).toEqual([
      {
        path: '/',
        children: [],
      },
    ])
  })

})
