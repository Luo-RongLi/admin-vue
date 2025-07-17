export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj; // 如果是基本类型或null，直接返回
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as unknown as T; // 递归克隆数组
  }

  const clonedObj: Record<string, unknown> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone((obj as Record<string, unknown>)[key]); // 递归克隆对象属性
    }
  }
  return clonedObj as T; // 返回克隆后的对象
}
