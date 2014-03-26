module.exports = Range

var assert = require('assert')
var is = require('is-type')

function Range($1, $2){
  if (arguments.length === 1){
    this.start = 0
    this.end = $1
  }else if (arguments.length === 2){
    this.start = $1
    this.end = $2
  }else{
    throw new Error('Wrong number of arguments: expected 1 or 2, got ' + 
      arguments.length)
  }
  assert(is.number(this.start))
  assert(is.number(this.end))
}

Range.prototype = {
  __map__: function(fn){
    return new Range(fn(this.start), fn(this.end))
  },
  toString: function(){
    return '{' + this.start + ', ' + this.end + '}'
  }
}