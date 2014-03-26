
var Map = {
  __get__: function(key){},
  __set__: function(key, value){},
  __delete__: function(key){},
  __keys__: function(){},
  __values__: function(){},
  __pairs__: function(){}
}

module.exports = {
  get: function(obj, key){
    return obj.__get__(key)
  },
  set: function(obj, key, value){
    obj.__set__(key, value)
  },
  delete: function(obj, key){
    obj.__delete__(key)
  },
  keys: function(obj){
    return obj.__keys__()
  },
  values: function(obj){
    return obj.__values__()
  },
  pairs: function(obj){
    return obj.__pairs__()
  },
  __definition__: Map
}