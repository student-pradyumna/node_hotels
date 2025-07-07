 
const mongoose = require('mongoose');
require('dotenv').config()
// define the mongodb connections URL
//const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL =  process.env.MONGODB_URL;
// setup Mongodb connection
mongoose.connect(mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
const db = mongoose.connection;
db.on('connected', () => {
  console.log("MongoDB connection is successful")
})
db.on('error', (err) => {
  console.log("MongoDB connection error",err)
})
db.on('disconnected', () => {
  console.log("MongoDB connection is disconnected")
});
// exports the database connection
module.exports = db;


