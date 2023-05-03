const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  console.log(req.body)
  
  // // Validate the input
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ errors: errors.array() });
  // }
  
  try {
    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser =  User({
      fullName,
      email,
      password,
    });

    // Save the new user object to the database
    await newUser.save();

    // Send a response with the new user object
    res.status(201).json({ user: newUser });
  } catch (error) {
    // Log the error to a file or database
    console.error(error);

    // Send a response with an error message
    res.status(500).json({ msg: "Internal server error" });
  }
};









// const User = require ("../models/User");

// exports.register = async(req,res) => {
//     const {fullName ,email,password}=req.body;
//     try {
//     const newUser = new User({
//         fullName ,
//         email,
//         password
//     })
//     await newUser.save();
//     res.send(newUser);
//     } catch (error) {
//         res.status(500).json({msg:error.message});
        
//     }
// }







