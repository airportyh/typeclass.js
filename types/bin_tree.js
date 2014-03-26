module.exports = BinTree

var map = require('../typeclasses/functor').map

function BinTree(data, left, right){
  this.data = data
  this.left = left
  this.right = right
}

BinTree.prototype = {
  __map__: function(fn){
    var left = this.left && map(this.left, fn)
    var right = this.right && map(this.right, fn)
    return new BinTree(fn(this.data), left, right)
  },
  toString: function(){
    return '[' + [
      this.data,
      (this.left && String(this.left) || ''),
      (this.right && String(this.right) || ''),
    ].filter(Boolean).join(' ') + ']'
  }
}