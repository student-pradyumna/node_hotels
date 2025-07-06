const express=require('express')
const router=express.Router();
const Teacher=require('./../Models/Teacher')

router.post('/',async (req,res)=>{
  try{
        const data=req.body;
        const newteacher=new Teacher(data);
        const response= await newteacher.save();
        console.log('data saved');
        res.status(200).json(response)

  }catch(err){
    console.log('error:', err);
    res.status(500).json({err:'internal server error'});
  }
})
// get method
router.get('/',async (req,res)=>{
  try{
        
        const response= await Teacher.find()
        console.log('data fetched');
        res.status(200).json(response)

  }catch(err){
    console.log('error:', err);
    res.status(500).json({err:'internal server error'});
  }
})
//updated
router.put('/:Teacherid', async (req, res) => {
  try {
    const data = req.body;
    const Teacherid = req.params.Teacherid;
           
    const response = await Teacher.findByIdAndUpdate(
      Teacherid,
      data,
      {
        new: true,
        runValidators: true
      }
      
    );
    if (!response) {
      return res.status(404).json({
        error: 'person not found'
      });
    }
    console.log('data updated');
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
});

// Export the router before handling undefined routes
module.exports = router;

// Handle undefined routes for this router (should be used in the main app, not in the router file)
// If you want to handle 404 for all routes, add this in your main app.js/server.js after all routes
// Example:
// app.use((req, res) => {
//     res.status(404).json({ error: 'Route not found' });
// });
