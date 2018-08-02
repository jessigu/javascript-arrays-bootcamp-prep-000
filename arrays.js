var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  array.unshift('foo', 1, ...array)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
  return array
}

function addElementToEndofArray() {
  
}

function destructivelyAddElementToEndOfArray() {
  
}