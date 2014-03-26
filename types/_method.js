module.exports = function(obj){
  return function(prop, fn){
    Object.defineProperty(obj, prop, {
      value: fn,
      enumerable: false
    })
  }
}