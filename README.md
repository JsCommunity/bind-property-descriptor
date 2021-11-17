# bind-property-descriptor [![Build Status](https://travis-ci.org/JsCommunity/bind-property-descriptor.png?branch=master)](https://travis-ci.org/JsCommunity/bind-property-descriptor)

> Bind a property descriptor (value, getter and setter).

## Install

Installation of the [npm package](https://npmjs.org/package/bind-property-descriptor):

```
> npm install --save bind-property-descriptor
```

## Usage

This test data will be used for the examples:

```js
const emma = {
  firstName: 'Emma',
  lastName: 'Russel',
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}
```

### `bindPropertyDescriptor(descriptor, thisArg) → boundDescriptor`

> Creates a new property descriptor bound to an object.
>
> The value (if a function), getter and/or setter will be called with
> the bound object.

```js
import { bindPropertyDescriptor } from 'bind-property-descriptor'

const obj = {}

const descriptor = Object.getOwnPropertyDescriptor(emma, 'fullName')
const boundDescriptor = bindPropertyDescriptor(descriptor, emma)

Object.defineProperty(obj, 'fullName', boundDescriptor)
obj.fullName
// → Emma Russel
```

### `getBoundPropertyDescriptor(obj, prop, thisArg = obj) → boundDescriptor`

> Because it's a common case to first get the descriptor and then bind
> it, this helper is provided.

```js
import { getBoundPropertyDescriptor } from 'bind-property-descriptor'

const obj = {}

const boundDescriptor = getBoundPropertyDescriptor(emma, 'fullName')

Object.defineProperty(obj, 'fullName', boundDescriptor)
obj.fullName
// → Emma Russel
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/JsCommunity/bind-property-descriptor/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](https://github.com/julien-f)
