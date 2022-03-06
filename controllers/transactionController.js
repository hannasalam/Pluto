const Transaction = require('../models/Transactions');
const User = require('../models/Users');

module.exports = function(app){

    app.post("/newTransfer", async (req, res) => {
        const newTransfer = new Transaction(req.body);

        try {
            // await User.findOneAndUpdate( {_id: req.body.recieverId}, 
            //     {$balance : { $balance: {$add : ['$balance', req.body.amount]}}}, 
            //     function(err, response) { 
            //         console.log(err);
            //         console.log(response);
            //     }).clone().catch(function(err){ console.log(err)});
            // await User.findOneAndUpdate( {_id: req.body.userId}, 
            //     {$balance : { $balance:{$subtract : ['$balance' , req.body.amount]}}}, 
            //     function(err, response) { 
            //         console.log(response);
            //     }).clone().catch(function(err){ console.log(err)});
            const savedTransfer = await newTransfer.save();
            res.status(200).json(savedTransfer);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
      });
        

    app.get("/getTransactions/:userId", async(req,res)=>{
        try {
            const cart = await Transaction.find({ userId: req.params.userId});
            res.status(200).json(cart);
          } catch (err) {
            res.status(500).json(err);
          }
        
})


};
