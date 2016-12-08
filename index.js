Object.defineProperty(exports, '__esModule', {
  value: true
})

var assign = require('lodash/assign')
var bind = require('lodash/bind')

function bindPropertyDescriptor (descriptor, thisArg) {
  descriptor = assign({}, descriptor)

  var get = descriptor.get
  if (get) {
    descriptor.get = bind(get, thisArg)
  }

  var set = descriptor.set
  if (set) {
    descriptor.set = bind(set, thisArg)
  }

  var value = descriptor.value
  if (typeof value === 'function') {
    descriptor.value = bind(value, thisArg)
  }

  return descriptor
}
exports.default = bindPropertyDescriptor

function getBoundPropertyDescriptor (obj, prop, thisArg) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  return descriptor && bindPropertyDescriptor(descriptor, thisArg || obj)
}
exports.getBoundPropertyDescriptor = getBoundPropertyDescriptor
