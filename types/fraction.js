module.exports = Fraction

var assert = require('assert')
var is = require('is-type')

function Fraction(top, bottom){
  assert(is.number(top))
  assert(is.number(bottom))
  assert(bottom >= 0)
  this.top = top
  this.bottom = bottom
}

Fraction.prototype = {
  toString: function(){
    if (this.bottom === 1) return this.top
    return this.top + '/' + this.bottom
  },
  simplify: function(){
    var gcf = greatestCommonFactor(this.top, this.bottom)
    return new Fraction(this.top / gcf, this.bottom / gcf)
  },
  // Eq
  __eq__: function(other){
    return this.top === other.top &&
      this.bottom === other.bottom
  },
  // Ord
  __compare__: function(other){
    var oneTop = this.top * other.bottom
    var otherTop = other.top * this.bottom
    if (oneTop > otherTop) return 1
    else if (oneTop === otherTop) return 0
    else return -1
  },
  // Numeric
  __add__: function(other){
    var bottom = this.bottom * other.bottom
    var top = this.top * other.bottom +
      other.top * this.bottom
    return new Fraction(top, bottom)
  },
  __subtract__: function(other){
    var bottom = this.bottom * other.bottom
    var top = this.top * other.bottom -
      other.top * this.bottom
    return new Fraction(top, bottom)
  },
  __multiply__: function(other){
    var bottom = this.bottom * other.bottom
    var top = this.top * other.top
    return new Fraction(top, bottom)
  },
  __negate__: function(){
    return new Fraction(-this.top, this.bottom)
  },
  __abs__: function(){
    return new Fraction(Math.abs(this.top), this.bottom)
  },
  __sign__: function(){
    return this.top >= 0 ? '+' : '-'
  }
}

function greatestCommonFactor(n1, n2){
  var i = Math.min(n1, n2)
  while (i > 1){
    if (n1 % i === 0 && n2 % i === 0){
      return i
    }
    i--
  }
  return i
}