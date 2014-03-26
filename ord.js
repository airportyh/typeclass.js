require('./eq')

Number.prototype.__lt__ = function(other){
  return this.valueOf() < other
}

exports.lt = function(one, other){
  if (one.__lt__){
    return one.__lt__(other)
  }
  return !one.__gt__(other) && !one.__eq__(other)
}

exports.gt = function(one, other){
  if (one.__gt__){
    return one.__gt__(other)
  }
  return !one.__lt__(other) && !one.__eq__(other)
}