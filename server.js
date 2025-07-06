const express= require('express')
const app = express();
 const db=require('./db')
 const bodyParser=require('body-parser');
 app.use(bodyParser.json());
const person = require('./Models/person');
const Menuitem = require('./Models/Menu');

app.get('/',(req,res)=>{
  res.send("welcome to our hotel 🤷‍♂️💕") 
})
 

//import the router files
const personRoutes = require('./Routes/personroutes');
const menuitemroutes = require('./Routes/menuRoutes');

// use the routes
app.use('/person',personRoutes)
app.use('/menuitem',menuitemroutes)


// port here
app.listen(3000,()=>{
  console.log('server is running on port 3000')
});