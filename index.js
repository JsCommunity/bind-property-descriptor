function bindPropertyDescriptor (descriptor, thisArg) {
  descriptor = Object.assign({}, descriptor)

  var get = descriptor.get
  if (get !== undefined) {
    descriptor.get = get.bind(thisArg)
  }

  var set = descriptor.set
  if (set !== undefined) {
    descriptor.set = set.bind(thisArg)
  }

  var value = descriptor.value
  if (typeof value === 'function') {
    descriptor.value = value.bind(thisArg)
  }

  return descriptor
}
exports.bindPropertyDescriptor = bindPropertyDescriptor

function getBoundPropertyDescriptor (obj, prop, thisArg) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
  if (descriptor !== undefined) {
    return bindPropertyDescriptor(descriptor, thisArg !== undefined ? thisArg : obj)
  }
}
exports.getBoundPropertyDescriptor = getBoundPropertyDescriptor
