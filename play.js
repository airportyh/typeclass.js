require('./types/natives')
var Range = require('./types/range')
var map = require('./typeclasses/functor').map
var Tree = require('./types/bin_tree')
var Map = require('./typeclasses/map')
var Hash = require('./types/hash')
var equal = require('./typeclasses/eq').equal
var isa = require('./isa')
var Ord = require('./typeclasses/ord')

var r = new Range(2, 4)

var r2 = map(r, function(n){ return n * 2 })

console.log(String(r))
console.log(String(r2))

var t1 = new Tree(1)
var t2 = new Tree(2)
var t3 = new Tree(3, t1, t2)

console.log(String(map(t3, function(n){
  return n * 2
})))

var bob = new Hash()
Map.set(bob, 'age', 4)
Map.set(bob, 'name', 'Robert')
console.log(Map.pairs(bob))
console.log(isa(bob, Map))
console.log(equal('abc', 'abc'))

console.log(['a', 'd', 'c', 'b'].sort(Ord.compare))