const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const User = require('../model/user');
const route = require('express').Router();
require('dotenv').config();


// Route to handle user registration
route.post('/register',async(req,res)=>{
    
    try{
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email })
    
        // if user exist
        if (existingUser) {
            res.status(400).json({succes: false, message: "User already exist"})
          }
    
          const hashPassword = await bcrypt.hash(password, 10)
       
          const newUser = User({
            username,
            email,
            password: hashPassword
          })
          await newUser.save()

    res.status(201).json({ sucess: true, message: 'User Created Successfully' })
    }  
    catch(error){
        console.error('Error registering new user:', error);
        res.status(500).json({ message: 'Error registering new user', error: error.message });
    }
})

// Route to handle login
route.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
  
      const isPassword = await bcrypt.compare(password, user.password);
  
      if (isPassword) {
        return res.status(400).json({ message: 'Incorrect Password' });
      }
      //console.log("isPassword",isPassword)
      const token = jwt.sign({ user: user._id }, "fsd", {
        expiresIn: '1hr',
      });
  
      // Set the token in the cookie
      res.cookie('usertoken', token, { maxAge: 1000 * 60 * 60 * 24 * 3 });
      return res.status(200).json({ message: 'Login Successfull', token, user });
    } catch (error) {
      console.error('Error in login user:', error);
      return res.status(500).json({ message: 'Error in login user', error: error.message });
    }
  });
  
route.get('/allusers',async(req,res)=>{
    try{
        const user = await User.find()
        // console.log(user)
        res.status(202).json({success: true, user})
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'While getting all data', error: error.message });
    }
})

module.exports = route;