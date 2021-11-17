var assign = require('lodash/assign')
var bind = require('lodash/bind')

function bindPropertyDescriptor (descriptor, thisArg) {
  descriptor = assign({}, descriptor)

  var get = descriptor.get
  if (get !== undefined) {
    descriptor.get = bind(get, thisArg)
  }

  var set = descriptor.set
  if (set !== undefined) {
    descriptor.set = bind(set, thisArg)
  }

  var value = descriptor.value
  if (typeof value === 'function') {
    descriptor.value = bind(value, thisArg)
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
