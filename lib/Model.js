var DataStore = require('./DataStore.js');

function Model(schema){

  this.schema = schema;
  this.id = null;

  for(var i in schema){
    if(schema.hasOwnProperty(i)){
      this[i] = schema[i];
    }
  }

  if(!DataStore.store.hasOwnProperty('Model')){
    DataStore.store.Model = [];
  }

// console.log('DataStore', DataStore);
// console.log('DataStore.store', DataStore.store);
// console.log('DataStore.store.model', DataStore.store.Model);
// console.log('DataStore.store.model.id', DataStore.store.Model[0]);

}

//Static Methods
Model.getNextId = function() {

  var highId = 0;

  for(var i = 0; i < DataStore.store[this.name].length; i++){
    if(DataStore.store[this.name][i].id > highId){
      highId = DataStore.store[this.name][i].id;
    }
  }

  return highId + 1;

};

//Static Methods
Model.find = function(id) {

  for(var i = 0; i < DataStore.store[this.name].length; i++){

    if(id === DataStore.store[this.name][i].id){
      return DataStore.store[this.name][i];
    }
  }
  return null;

};

//Static Methods
Model.extend = function(klass) {

};


Model.prototype.save = function() {

  if(this.id === null){
    this.id = this.constructor.getNextId();
    DataStore.store[this.constructor.name].push(this);
  }

};

Model.prototype.destroy = function() {

// //makes sure the id is what you are talking about
//   if(this.id){
// //find the id in the system
//   Model.find(this.id) //returns the boject that matches the id
// //Remove the object from the model

//  }


};




module.exports = Model;