/**
 * 驼峰转下划线
 * @param {*} data
 * @returns
 */
export const camelCase2UnderScoreCase = (data) => {
  const target = data;
  if (target === null) return null;
  if (typeof target !== 'object') {
    return target;
  }
  const result = Array.isArray(target) ? [] : {};
  Object.keys(target).forEach((key) => {
    if ([undefined, ''].includes(target[key])) {
      delete target[key];
    } else {
      const prop = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        result[prop] = camelCase2UnderScoreCase(target[key]);
      }
    }
  });
  return result;
};

export const a = '';
