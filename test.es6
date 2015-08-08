import tape from 'tape'
import createCanvas from 'create-canvas'
import isCanvas from './isCanvas'
import forceCanvas from './'

let canvas = null

function test (description, fn) {
  tape(description, function (t) {

    // beforeEach
    canvas = createCanvas()

    // test
    fn(t)

    // afterEach
    canvas = null
  })
}

test('should return true for a canvas', function (t) {
  t.equal(isCanvas(forceCanvas(canvas)), true)
  t.equal(isCanvas(forceCanvas(canvas.getContext('2d'))), true)
  t.end()
})

test('should error if doesn\'t receive a context or canvas', function (t) {
  let fail = true
  try {
    forceCanvas('not a canvas')
  } catch (e) {
    fail = false
    t.pass('error was produced when giving a string')
  }
  if (fail) {
    t.fail('it should have thrown an error')
  }
  t.end()
})
