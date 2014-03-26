var Functor = {
  __map__: function(fn){}
}

module.exports = {
  map: function map(obj, fn){
    return obj.__map__(fn)
  },
  __definition__: Functor
}

