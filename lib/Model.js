var DataStore = require('./DataStore.js');

function Model(schema){

  this.schema = schema;
  this.id = null;

  for(var i in schema){
    if(schema.hasOwnProperty(i)){
      this[i] = schema[i];
    }
  }

  if(!DataStore.store.hasOwnProperty(this.constructor.name)){
    DataStore.store[this.constructor.name] = [];
  }

}

//Static Method
Model.getNextId = function() {

  var highId = 0;

  for(var i = 0; i < DataStore.store[this.name].length; i++){
    if(DataStore.store[this.name][i].id > highId){
      highId = DataStore.store[this.name][i].id;
    }
  }

  return highId + 1;

};

//Static Method
Model.find = function(id) {

  for(var i = 0; i < DataStore.store[this.name].length; i++){
    if(id === DataStore.store[this.name][i].id){
      return DataStore.store[this.name][i];
    }
  }

  return null;

};

//Static Method
Model.extend = function(klass) {

//Extendes the static methods on Model
  for(var key in this){
    if(this.hasOwnProperty(key)){
      klass[key] = this[key];
    }
  }

//Extends the prototype methods of Model
  for(var k in this.prototype){
    if(this.prototype.hasOwnProperty(k)){
      klass.prototype[k] = this.prototype[k];
    }
  }

return klass;

};


Model.prototype.save = function() {

  if(this.id === null){
    this.id = this.constructor.getNextId();
    DataStore.store[this.constructor.name].push(this);
  }

};

Model.prototype.destroy = function() {
  //makes sure the id is what you are talking about
  if(this.id){
  //find the id/object in the system
    var theId = this.constructor.find(this.id);
  //Get the index of the id/object in the system
    var index = DataStore.store[this.constructor.name].indexOf(theId);
  //Remove the object from the model
    DataStore.store[this.constructor.name].splice(index, 1);
  }

  return null;

 };

module.exports = Model;