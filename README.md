<h1 align="center">micro-reaction</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/build-passing-brightgreen" />
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/simplefeel" target="_blank">
    <img alt="Twitter: simplefeel" src="https://img.shields.io/bundlephobia/minzip/micro-reaction" />
  </a>
  <a href="https://twitter.com/simplefeel" target="_blank">
    <img alt="Twitter: simplefeel" src="https://img.shields.io/twitter/follow/simplefeel.svg?style=social" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> one extremely simple observe state library, it's small, but strong.

## Motivation

The project is inspired by [observer-util](https://github.com/nx-js/observer-util) and [wana](https://github.com/alloc/wana), but they is too large and not cleary read, so I refactor it. to be simple and better learn.


## Install

```js
npm install --save micro-reaction
```

## Usage

### Nested properties
```js
import { observable, observe } from "micro-reaction";

const ob = observable({
    a: {
        b: 1
    }
});

observe(() => console.log(ob.a.b));

// logs: 1
// logs: 2
ob.a.b = 2;
```
### Dynamic properties
```js
import { observable, observe } from "micro-reaction";

const ob = observable();

observe(() => console.log(ob.a));

// logs undefined
// logs 2
ob.a = 2;
```

### Arrays
```js
import { observable, observe } from "micro-reaction";

const ob = observable([]);

observe(() => console.log(ob));

// logs []
// logs [2]
ob.push(2);
```

## API

- observable(object)

    create a observable object, return a proxy object with es6 proxy.

- observe(function)

    pass a function ,reaction auto run when it use a observable state.
