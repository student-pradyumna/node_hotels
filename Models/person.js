const mongoose = require('mongoose');
// define the schema for person
const personSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  age:{
type:Number,
required:true,
  },
  work:{
    type:String,
    enum:['chef','waiter','manager'],
    required:true,
  },
  mobile:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true,

  },
  salary:{
    type:Number,
    required:true,
  }

})
// create person model
const person = mongoose.model('person', personSchema);
module.exports = person;