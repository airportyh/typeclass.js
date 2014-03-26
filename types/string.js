
String.prototype.__map__ = function(fn){
  var arr = []
  for (var i = 0; i < this.length; i++){
    var chr = this.charAt(i)
    arr.push(fn(chr))
  }
  return arr.join('')
}