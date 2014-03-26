
var Eq = {
  __eq__: function(other){}
}

module.exports = {
  equal: function(one, other){
    return one.__eq__(other)
  }
}