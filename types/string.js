var method = require('./_method')(String.prototype)

method('__map__', function(fn){
  var arr = []
  for (var i = 0; i < this.length; i++){
    var chr = this.charAt(i)
    arr.push(fn(chr))
  }
  return arr.join('')
})

// Eq
method('__eq__', function(other){
  return this.valueOf() === other
})

// Ord
method('__compare__', function(other){
  var one = this.valueOf()
  if (one > other){
    return 1
  }else if(one === other){
    return 0
  }else{
    return -1
  }
})