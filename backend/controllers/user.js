const UserModel = require('../models/user.js')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

module.exports.userSignUp = async (req,res) => {
    
       try{
        const {name, email, password} = req.body;
          let user = await UserModel.findOne({email});
          if(user){
            return res.status(404).json({message:'user exist'})
          }
          const hashPwd = await bcrypt.hash(password,10);
           UserModel.create({name,email,password:hashPwd})
           .then(user => res.json({status:"ok"}))
           .catch(err=>res.json(err))
       }
       catch(error){
        res.status(500).json({message:error.message}) 
        }
    }
   
module.exports.userSignIn = async (req,res) => {
        const { email, password } = req.body;
        await UserModel.findOne({email}).select("+password")
        .then(user => {
          if(user){
            bcrypt.compare(password, user.password, (err, response)=> {
              if(response){
                const token = jwt.sign({email:user.email, role:user.role},
                 "jwt-secret-key",{expiresIn: '1d'})
                 res.cookie('token', token)
                 return res.status(200).json("success")
              }else{
                return res.status(404).json({
                  success:false,
                  message:"Invalid email or password"
              })
            }
          })
    } else{
            return res.status(404).json({
              success:false,
              message:"Record not found"
          })
        }
    })
  }

      
    module.exports.userPassword = async (req,res) => {
       const {email} = req.body;
       UserModel.findOne({email: email})
       .then(user => {
        if(!user){
            return res.send({Status: "user not exit"})
        }
        const token = jwt.sign({id: user._id},"jwt-secret-key",{expiresIn:"1d"})
       

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'hritikgaur44@gmail.com',
            pass: 'efwtrkwjjbuxgmsx'
          }
        });
        
        var mailOptions = {
          from: 'hritikgaur44@gmail.com',
          to: 'nikita44gaur@gmail.com',
          subject: 'Reset Password',
          text: `http://localhost:3000/reset_password/${user._id}/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            return res.send({Status: "Success"})
          }
        });
       })
    }

    module.exports.resetPassword = async (req,res) => {

        const{id, token} =  req.params;
        const {password} = req.body;

        jwt.verify(token, "jwt-secret-key", (err, decoded)=>{
            if(err){
                return res.json({Status:"Error with token"})
            }
            else{
                bcrypt.hash(password,10)
                .then(hash => {
                    UserModel.findByIdAndUpdate({_id:id}, {password:hash})
                    .then(u => res.send({Status:"Success"}))
                    .catch(err => res.send({Status:err}))                
                })
                .catch(err => res.send({Status:err})) 
            }
        })
    }