const express=require('express')
const router=express.Router();
const menuitem = require('./../Models/Menu')


router.post('/', async (req, res) => {
 try {
    const data = req.body; // menuitem data
  const newMenuitem = new menuitem(data);
    const response = await newMenuitem.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch (err) {
console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
}); router.get('/:tasty', async (req, res) => {  
   try {
    const tasty=req.params.tasty
    if(tasty=='sweet'||tasty=='spicy'||tasty=='sour'){
        const responce=await menuitem.find({taste:tasty})
          console.log('response fetched')
          res.status(200).json(responce)
    }else{
          res.status(400).json({error:'invalid your choice'})

    }
    // const data = await menuitem.find();   
    //   console.log('data fetched');   
    // res.status(200).json(data);
  } catch (error) {    
     console.log(error);  
   res.status(500).json({ error: 'Internal server error' }); 


} });


module.exports=router