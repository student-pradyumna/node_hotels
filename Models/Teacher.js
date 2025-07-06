
const mongoose=require('mongoose');


const Teacherschema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  age:{
    type:Number,

  },
  subject:{
    type:String,
    enum:['math','eng','phy','chem'],
    required:true,
  },
  salary:{
    type:Number,
    
  },
  experience:{
    type:Number,
    required:true,
  }
})

const Teacherlist=mongoose.model('Teacherdeatils',Teacherschema);
module.exports=Teacherlist;