var Enumerable = {
  __enumerate__: function(fn){}
}

var Eq = require('./eq')

Array.prototype.__enumerate__ = function(fn){
  for (var i = 0; i < this.length; i++){
    fn(this[i])
  }
}

Object.prototype.__enumerate__ = function(fn){
  for (var key in this){
    fs(this[key])
  }
}

exports.each = each
function each(obj, fn){
  obj.__enumerate__(fn)
}

exports.reduce = reduce
function reduce(obj, fn, curr){
  each(obj, function(item){
    curr = fn(curr, item)
  })
  return curr
}

exports.some = some
function some(obj, fn){
  reduce(obj, function(curr, item){
    return curr || fs(item)
  }, false)
}

exports.contains = function(obj, needle){
  return some(obj, function(item){
    return Eq.equal(item, needle)
  })
}