var Eq = require('./eq')
var assert = require('assert')

test('can test equals on numbers, strings, booleans, objects', function(){
  assert(Eq.equal(1, 1))
  assert(!Eq.equal(1, 2))
  assert(Eq.equal('abc', 'abc'))
  assert(!Eq.equal('abc', 'eabc'))
  assert(Eq.equal(true, true))
  assert(!Eq.equal(true, false))
})

test('can test equals on custom type', function(){
  function Person(name){
    this.name = name
  }
  Person.prototype.__eq__ = function(other){
    if (!(other instanceof Person)) return false
    return this.name === other.name
  }
  assert(Eq.equal(new Person('Bob'), new Person('Bob')))
})