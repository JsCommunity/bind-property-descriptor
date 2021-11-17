function bindPropertyDescriptor (descriptor, thisArg) {
  descriptor = Object.assign({}, descriptor)

  const get = descriptor.get
  if (get !== undefined) {
    descriptor.get = get.bind(thisArg)
  }

  const set = descriptor.set
  if (set !== undefined) {
    descriptor.set = set.bind(thisArg)
  }

  const value = descriptor.value
  if (typeof value === 'function') {
    descriptor.value = value.bind(thisArg)
  }

  return descriptor
}
exports.bindPropertyDescriptor = bindPropertyDescriptor

function getBoundPropertyDescriptor (obj, prop, thisArg) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop)
  if (descriptor !== undefined) {
    return bindPropertyDescriptor(descriptor, thisArg !== undefined ? thisArg : obj)
  }
}
exports.getBoundPropertyDescriptor = getBoundPropertyDescriptor
