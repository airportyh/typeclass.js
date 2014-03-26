var method = require('./_method')(Object.prototype)

method('__get__', function(key){
  return this[key]
})

method('__set__', function(key, value){
  this[key] = value
})

method('__delete__', function(key){
  delete this[key]
})

method('__keys__', function(){
  return Object.keys(this)
})

method('__values__', function(){
  var ret = []
  for (var key in this){
    ret.push(this[key])
  }
  return ret
})

method('__pairs__', function(){
  var ret = []
  for (var key in this){
    ret.push([key, this[key]])
  }
  return ret
})

