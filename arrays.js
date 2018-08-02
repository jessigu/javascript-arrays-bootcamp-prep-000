var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  array.unshift(...array, 'foo')
  return array
}

function destructivelyAddElementToBeginningOfArray(array, ement) {
  array.unshift('foo')
  return array
}

function addElementToEndofArray() {
  
}

function destructivelyAddElementToEndOfArray() {
  
}