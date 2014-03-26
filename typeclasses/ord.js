
var Ord = {
  __compare__: function(other){},
  __lt__: function(other){},
  __lte__: function(other){},
  __gt__: function(other){},
  __gte__: function(other){}
}

module.exports = {
  compare: function(one, other){
    return one.__compare__(other)
  },
  lt: function(one, other){
    return one.__lt__(other)
  },
  lte: function(one, other){
    return one.__lte__(other)
  },
  gt: function(one, other){
    return one.__gt__(other)
  },
  gte: function(one, other){
    return one.__gte__(other)
  }
}