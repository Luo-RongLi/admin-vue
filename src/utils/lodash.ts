/**
 * Checks if a value is empty.
 * - For arrays, strings, or arguments objects, returns true if length is 0.
 * - For objects, returns true if it has no own enumerable properties.
 * - For null or undefined, returns true.
 * - For other types, returns false.
 */
export function empty(value: any): boolean {
  if (value == null) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}
