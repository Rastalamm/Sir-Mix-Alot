var DataStore = require('./DataStore.js');

var dataStore = new DataStore();

function Model(schema){

  this.store = dataStore;

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




}

module.exports = Model;