var assert = require('assert')
var Enum = require('./enumerable')

test('arrays', function(){
  var results = []
  Enum.each([1, 2, 3], function(n){
    results.push(n)
  })
  assert.deepEqual(results, [1, 2, 3])
})

test('custom', function(){
  var results = []
  Enum.each(new Range(1, 5), function(n){
    results.push(n)
  })
  assert.deepEqual(results, [1, 2, 3, 4])
})

test('map', function(){
  assert.equal(Enum.map(new Range(1, 4), function(n){
    return n * 2
  }).join(','), '2,4,6')
})

function Range(start, end){
  this.start = start
  this.end = end
}

Range.prototype.__enumerate__ = function(fn){
  for (var i = this.start; i < this.end; i++){
    fn(i)
  }
}