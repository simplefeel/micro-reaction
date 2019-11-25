<h1 align="center">micro-reactions</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/simplefeel" target="_blank">
    <img alt="Twitter: simplefeel" src="https://img.shields.io/twitter/follow/simplefeel.svg?style=social" />
  </a>
</p>

> one extremely simple observe state library


## Install

```js
npm install --save micro-reaction
```

## Usage

```js
import { observable, observe } from "micro-reaction";

const ob = observable({
    a: {
        b: 1
    }
});

observe(() => console.log(ob.a.b));

// output: 1
// output: 2
ob.a.b = 2;
```