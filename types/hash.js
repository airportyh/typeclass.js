module.exports = Hash

var hasOwnProperty = Object.prototype.hasOwnProperty

function Hash(){
  this.data = Object.create(null)
}

Hash.prototype = {
  __get__: function(key){
    if (has(this.data, key)){
      return this.data[key]
    }else{
      return null
    }
  },
  __set__: function(key, value){
    this.data[key] = value
  },
  __delete__: function(key){
    delete this.data[key]
  },
  __keys__: function(){
    Object.keys(this.data)
  },
  __values__: function(){
    var ret = []
    for (var key in this.data){
      ret.push(this.data[key])
    }
    return ret
  },
  __pairs__: function(){
    var ret = []
    for (var key in this.data){
      ret.push([key, this.data[key]])
    }
    return ret
  }
}

function has(obj, prop){
  return hasOwnProperty.call(obj, prop)
}