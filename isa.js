var assert = require('assert')
var is = require('is-type')

module.exports = function isa(obj, typeClass){
  var typeDef = typeClass.__definition__
  assert(is.object(typeDef))
  for (var key in typeClass){
    var fn = obj[key]
    if (typeof fn !== 'function' ||
        fn.length !== typeClass[key].length){
      return false
    }
  }
  return true
}