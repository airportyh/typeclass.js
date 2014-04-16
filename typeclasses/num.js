
var Numeric = {
  __add__: function(other){},
  __subtract__: function(other){},
  __multiply__: function(other){},
  __abs__: function(){},
  __negate__: function(){},
  __sign__: function(){}
}

module.exports = {
  add: function(one, other){
    return one.__add__(other)
  },
  subtract: function(one, other){
    return one.__subtract__(other)
  },
  multiply: function(one, other){
    return one.__multiply__(other)
  },
  abs: function(num){
    return num.__abs__()
  },
  negate: function(num){
    return num.__negate__()
  },
  sign: function(num){
    return num.__sign__()
  }
}