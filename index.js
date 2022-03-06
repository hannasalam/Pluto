const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// var cors = require('cors')
var transactionController= require('./controllers/transactionController');
var userController= require('./controllers/userController');
// dotenv.config(); 

mongoose.connect(
    'mongodb+srv://hanna:testpassword@cluster0.pkyr2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => console.log("Database connected!"))
// app.use(cors())

app.use(express.json());
// app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({extended: true}));
   
transactionController(app);
userController(app);

app.listen(process.env.PORT||3000);
console.log('You are listening to port 3000');