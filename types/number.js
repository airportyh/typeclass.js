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

// Numeric
method('__add__', function(other){
  return this.valueOf() + other
})

method('__subtract__', function(other){
  return this.valueOf() - other
})

method('__multiply__', function(other){
  return this.valueOf() * other
})

method('__abs__', function(){
  return Math.abs(this.valueOf())
})

method('__negate__', function(){
  return -this.valueOf()
})

method('__sign__', function(){
  return this.valueOf() >= 0 ? '+' : '-'
})
