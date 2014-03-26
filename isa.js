var assert = require('assert')
var is = require('is-type')

module.exports = function isa(obj, typeClass){
  var typeDef = typeClass.__definition__
  assert(is.object(typeDef))
  for (var key in typeDef){
    var fn = obj[key]
    if (typeof fn !== 'function' ||
        fn.length !== typeDef[key].length){
      return false
    }
  }
  return true
}