const UserModel = require('../models/user.js')

module.exports.userSignUp =  (req,res) => {
    
    
        const newUser = new UserModel({
            email:req.body.email,
            password:req.body.password
        });

        newUser.save().then(()=>{
            res.send('success')
        }).catch((err)=>{
            res.send(err);
        })

    }
   
   
