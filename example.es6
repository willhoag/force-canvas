import forceCanvas from './'

let canvas = document.createElement('canvas')

canvas = forceCanvas(canvas)
canvas = forceCanvas(canvas.getContext('2d'))
canvas = forceCanvas('not a canvas or context') // Error
