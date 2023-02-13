import { mutableHandlers } from './baseHandlers'

/**
 * 常量枚举
 * 响应标识
 */
export const enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive'
}

/**
 * 响应式Map响应对象
 * key: target
 * value: proxy ?
 */
export const reactiveMap = new WeakMap<object, any>()

/**
 * 为复杂类型创建响应式对象
 * @param target
 */
export function reactive(target: object) {
  return createReactiveObject(target, mutableHandlers, reactiveMap)

}

function createReactiveObject(
  target: object,
  baseHandler: ProxyHandler<any>,
  proxyMap: WeakMap<object, any>
) {
  const exitingProxy = proxyMap.get(target)
  if (exitingProxy) {
    return exitingProxy
  }

  const proxy = new Proxy(target, baseHandler)

  proxy[ReactiveFlags.IS_REACTIVE] = true

  proxyMap.set(target, proxy)

  return proxy
}