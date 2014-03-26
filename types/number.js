var method = require('./_method')(Number.prototype)

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

method('__lt__', function(other){
  return this.valueOf() < other
})

method('__gt__', function(other){
  return this.valueOf() > other
})

method('__lte__', function(other){
  return this.valueOf() <= other
})

method('__gte__', function(other){
  return this.valueOf() >= other
})