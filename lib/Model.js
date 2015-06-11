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

  for(var i = 0; i < DataStore.store.Model.length; i++){
    if(DataStore.store.Model[i].id > highId){
      highId = DataStore.store.Model[i].id;
    }
  }

  return highId+1;





};

//Static Methods
Model.find = function(id) {

  for(var i = 0; i < DataStore.store.Model.length; i++){

    if(id === DataStore.store.Model[i].id){
      return DataStore.store.Model[i];
    }else{
      return false;
    }

  }



};

//Static Methods
Model.extend = function(klass) {

};


Model.prototype.save = function() {

};

Model.prototype.destroy = function() {

};




module.exports = Model;