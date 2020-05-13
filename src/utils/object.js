/**
 * Get object nested property by key
 *
 * @example
 *
 * getValueByKey({ a: { b: { c: 5 }}}, 'a.b.c') === 5
 * getValueByKey({ a: { b: { c: 5 }}}, 'a.d.f.g') === undefined
 */

/**
 * Expose
 */

exports = module.exports = function getValueByKey (object, key) {
  const parts = key.split('.');
  const part = parts.shift();
  const value = object[part];
  if (typeof value === 'undefined') return value;
  if (!parts.length) return value;
  return getValueByKey(value, parts.join('.'));
};
