
var Ord = {
  __compare__: function(other){}
}

module.exports = {
  compare: compare,
  lt: function(one, other){
    return compare(one, other) < 0
  },
  lte: function(one, other){
    return compare(one, other) <= 0
  },
  gt: function(one, other){
    return compare(one, other) > 0
  },
  gte: function(one, other){
    return compare(one, other) >= 0
  },
  __definition__: Ord
}

function compare(one, other){
  return one.__compare__(other)
}