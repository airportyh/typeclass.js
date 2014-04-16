require('./types/natives')
var Range = require('./types/range')
var map = require('./typeclasses/functor').map
var Tree = require('./types/bin_tree')
var Map = require('./typeclasses/map')
var Hash = require('./types/hash')
var equal = require('./typeclasses/eq').equal
var isa = require('./isa')
var Ord = require('./typeclasses/ord')
var Fraction = require('./types/fraction')
var Num = require('./typeclasses/num')

var r = new Range(2, 4)

var r2 = map(r, function(n){ return n * 2 })

show(r)
show(r2)

var t1 = new Tree(1)
var t2 = new Tree(2)
var t3 = new Tree(3, t1, t2)

show(map(t3, function(n){
  return n * 2
}))

var bob = new Hash()
Map.set(bob, 'age', 4)
Map.set(bob, 'name', 'Robert')
show(Map.pairs(bob))
show(isa(bob, Map))
show(equal('abc', 'abc'))

show(['a', 'd', 'c', 'b'].sort(Ord.compare))

var f1 = new Fraction(1, 3)
var f2 = new Fraction(1, 2)
var f3 = new Fraction(2, 3)
show(Num.add(f1, f2))
show(Num.add(new Fraction(1, 2), new Fraction(1, 2)).simplify())
show(Num.multiply(f1, f2))
show(Num.multiply(f1, f3))
show(Num.subtract(f1, f2))
show(Num.sign(Num.subtract(f1, f2)))
show(new Fraction(1, 0))

show(Num.multiply(Num.add(1, 2), 3))

function show(thing){
  console.log(String(thing))
}