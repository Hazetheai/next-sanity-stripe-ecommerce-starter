/**
 * @description Remove a single property from an onject
 * @param obj Object to be altered
 * @param prop Name of property to remove
 */
export function removeObjectProperty<T, K extends keyof T>(
  obj: T,
  prop: K
): Omit<T, K> {
  const { [prop]: omit, ...res } = obj;
  return res;
}

export function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
}
