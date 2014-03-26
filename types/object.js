

def('__get__', function(key){
  return this[key]
})

def('__set__', function(key, value){
  this[key] = value
})

def('__delete__', function(key){
  delete this[key]
})

def('__keys__', function(){
  return Object.keys(this)
})

def('__values__', function(){
  var ret = []
  for (var key in this){
    ret.push(this[key])
  }
  return ret
})

def('__pairs__', function(){
  var ret = []
  for (var key in this){
    ret.push([key, this[key]])
  }
  return ret
})

function def(prop, fn){
  Object.defineProperty(Object.prototype, prop, {
    value: fn,
    enumerable: false
  })
}