/* eslint-env jest */

const getBoundPropertyDescriptor = require('./').getBoundPropertyDescriptor

describe('bindPropertyDescriptor()', function () {
  function createObjectWithBoundProperty (obj, prop) {
    return Object.defineProperty(
      {},
      prop,
      getBoundPropertyDescriptor(obj, prop)
    )
  }

  it('binds value', function () {
    const obj = {
      foo: function () {
        expect(this).toBe(obj)
      }
    }

    createObjectWithBoundProperty(obj, 'foo').foo()
  })

  it('binds getter', function () {
    const obj = Object.defineProperty({}, 'foo', {
      get: function () {
        return this
      }
    })

    expect(createObjectWithBoundProperty(obj, 'foo').foo).toBe(obj)
  })

  it('binds setter', function () {
    const obj = Object.defineProperty({}, 'foo', { // eslint-disable-line accessor-pairs
      set: function () {
        expect(this).toBe(obj)
      }
    })

    createObjectWithBoundProperty(obj, 'foo').foo = 42
  })
})
