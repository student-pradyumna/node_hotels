const express=require('express')
const app=express()
const db=require('./db')

const teacher= require('./Models/Teacher');

app.get('/',(req,res)=>{
    res.send("Welcome to school 🤷‍♂️💕")
})
 const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// import routes file
const teacherroute= require('./Routes/teacherroutes');
// use routes
app.use('/Teacher',teacherroute)


// port here
app.listen(3000,()=>{
  console.log('server is running on port 3000')
});