# force-canvas

sanity check to get the canvas if input happens to be the context; errors if it can't return a canvas

[![Build Status](https://travis-ci.org/willhoag/force-canvas.svg)](https://travis-ci.org/willhoag/force-canvas)
[![npm version](https://badge.fury.io/js/force-canvas.svg)](http://badge.fury.io/js/force-canvas)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install force-canvas --save
```

## Usage

```js
var forceCanvas = require('force-canvas');

let canvas = document.createElement('canvas')

canvas = forceCanvas(canvas)
canvas = forceCanvas(canvas.getContext('2d'))
canvas = forceCanvas('not a canvas or context') // Error

```

## API

`forceCanvas(canvas:canvas):canvas`

## License

MIT
