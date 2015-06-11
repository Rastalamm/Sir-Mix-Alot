var DataStore = require('./DataStore.js');

var db = new DataStore();

function Model(schema){

  this.store = db;
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

//Static Methods
Model.getNextId = function() {

  // console.log('dsafkjhgsdajhgfkjahdsgfjkhsadghjfgaskdjghfjasd', DataStore);




  // if(!this.id){
  //   this.id = 1;
  //   return this.id;
  // }else{
  //   this.id++;
  //   return this.id;
  // }

};

//Static Methods
Model.find = function(id) {

// var giveMeId = dataStore.id
//   .filter(function (id){

//     return
//   })


};

//Static Methods
Model.extend = function(klass) {

};


Model.prototype.save = function() {

};

Model.prototype.destroy = function() {

};




module.exports = Model;