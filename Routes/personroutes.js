const express=require('express')
const router=express.Router();
const person = require('./../Models/person')

router.post('/',async(req,res)=>{
  try{
   const data=req.body;
              const newperson= new person(data)
              const response= await newperson.save();
              console.log('data saved')
              res.status(200).json(response)
  }catch(err){
    console.log(err);
  res.status(500).json({ err: 'internal server error' });
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
});

router.get('/:worktype',async (req,res)=>{
  try{
   const worktype=req.params.worktype;
   if(worktype=='chef'|| worktype=='manager'||worktype=='waiter'){
          const responce=await person.find({work:worktype})
          console.log('response fetched')
          res.status(200).json(responce)
   }else{
    res.status(400).json({error:'Invalid worktype'})
   }
  }catch(err){
     console.log(err);
   res.status(500).json({error:'internal server error'})
  }
})

router.put('/:personId',async (req,res)=>{
try{
const personId=req.params.personId// extract the id from the url parameter
const updatedPersonData=req.body; // updated data for the person
const response= await person.findByIdAndUpdate(personId,updatedPersonData,{
          new:true,
          runValidators:true,
})
if(!response){
  return res.status(404).json({
    error:'person not found'
  })
}
console.log('data updated')
  res.status(200).json(response)

}catch(err){
   console.log(err);
   res.status(500).json({error:'internal server error'})
}
})

router.delete('/:id',async (req,res)=>{
   try{
   const personId=req.params.id;// extract the id the url parameter
   // assuming you have a person model
   const response=await  person.findByIdAndDelete(personId);
   if(!response){
  return res.status(404).json({
    error:'person not found'
  })
   
}
console.log('data deleted')
  res.status(200).json({message:'person deleted sucessfully'})
   }catch(err){
        console.log(err);
   res.status(500).json({error:'internal server error'})
}
   
})

module.exports=router;