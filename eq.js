var Eq = {
  __eq__: function(other){}
}

Number.prototype.__eq__ = function(other){
  return this.valueOf() === other
}

String.prototype.__eq__ = function(other){
  return this.valueOf() === other
}

Boolean.prototype.__eq__ = function(other){
  return this.valueOf() === other
}

exports.equal = function(one, other){
  return one.__eq__(other)
}
