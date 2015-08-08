import isCanvas from './isCanvas'
export default function forceCanvas (canvas) {

  // convert context to canvas
  if (!isCanvas(canvas) && canvas.hasOwnProperty('canvas')) {
    canvas = canvas.canvas
  }

  // error if not canvas
  if (!isCanvas(canvas)) throw Error('Could not force context')

  return canvas
}
