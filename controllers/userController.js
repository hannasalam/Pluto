const User = require('../models/Users');

module.exports = function(app){
 
    app.post("/register", async(req,res)=>{
        try{
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
        });
          const createdUser = await user.save();
          res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            password : createdUser.password
            });
    }catch(error)
      {
        if(error.code===11000)
        {
          return res.json("User already exists. Try Logging in");
        }
        console.log(error);
      }
})

};