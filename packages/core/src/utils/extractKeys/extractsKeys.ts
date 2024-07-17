type AnyObject = { [key: string]: any };

function extractKeys(
  obj: AnyObject,
  parentKey = '',
  prefix = 'childs.props'
): string[] {
  const keys: string[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      //   console.log('obj?.key?.isFLow', obj?.key);

      keys.push(prefix + '.' + newKey);

      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // console.log('obj?.key?.isFLowBBBB', obj[key], obj);
        // if (!obj[key]?.isFlow)
        keys.push(...extractKeys(obj[key], newKey, prefix));
      }
    }
  }

  return keys;
}

export default extractKeys;
