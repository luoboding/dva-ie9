export function debounce(fn, delay) {
  let lastTime = null;
  return (args) => {
    if (!lastTime) {
      fn(args);
      lastTime = new Date().getTime();
    } else {
      const now = new Date().getTime();
      const delayed = now - lastTime;
      if (delayed / 1000 > delay) {
        fn(args);
        lastTime = new Date().getTime();
      }
    }
  };
}
/* eslint no-prototype-builtins: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint no-plusplus: 0 */
export function param(input) {
  const isObject = value => value.constructor.name === 'Object';
  const isString = value => typeof value === 'string' && value.constructor.name === 'String';
  const isArray = value => Array.isArray(value) && value.constructor.name === 'Array';
  const isNumber = value => typeof value === 'number';
  let output = '';
  if (isObject(input)) {
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        const element = input[key];
        if (isString(element) || isNumber(element)) {
          output += `&${key}=${encodeURIComponent(element)}`;
        }
        if (isArray(element)) {
          for (let i = 0, length = element.length; i < length; i++) {
            const ele = element[i];
            if (isString(ele) || isNumber(ele)) {
              output += `&${key}=${encodeURIComponent(ele)}`;
            }
          }
        }
      }
    }
  } else {
    throw new TypeError('参数为Object!');
  }
  return output.substring(1);
}
