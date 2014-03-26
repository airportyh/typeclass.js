var Ord = require('./ord')
var assert = require('assert')

test('less than', function(){
  assert(Ord.lt(1, 2))
  assert(!Ord.lt(1, 1))
  assert(!Ord.lt(1, 0))
  assert(Ord.lt(new Size(1), new Size(2)))
  assert(!Ord.lt(new Size(1), new Size(1)))
  assert(!Ord.lt(new Size(1), new Size(0)))
})

test('greater than', function(){
  assert(!Ord.gt(1, 2))
  assert(!Ord.gt(1, 1))
  assert(Ord.gt(1, 0))
  assert(!Ord.gt(new Size(1), new Size(2)))
  assert(!Ord.gt(new Size(1), new Size(1)))
  assert(Ord.gt(new Size(1), new Size(0)))
})

test('greater than and equal to', function(){

})

test('less than and equal to', function(){

})

test('max', function(){

})

test('min', function(){

})

test('compare', function(){
})

function Size(n){
  this.n = n
}

Size.prototype.__lt__ = function(other){
  return this.n < other.n
}

Size.prototype.__eq__ = function(other){
  return this.n === other.n
}