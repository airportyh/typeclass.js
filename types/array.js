var method = require('./_method')(Array.prototype)

method('__map__', function(fn){
  var ret = []
  for (var i = 0; i < this.length; i++){
    ret.push(fn(this[i]))
  }
  return ret
})