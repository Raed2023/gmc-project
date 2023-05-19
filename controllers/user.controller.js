const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt =require ('jsonwebtoken');
const config = require ('config');
const secret = config.get('secret')

exports.register = async (req, res) => {
  const { fullName, email, password,userRole } = req.body;
  
  // if email already exists
  const existantUser = await User.findOne({email});
  if (existantUser)res.status(409).json({msg:"User already exists!"});
  
  // Validate the input
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ errors: errors.array() });
  // }
  
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      userRole
    });

    // Save the new user object to the database
    await newUser.save();

    // token
    const payload={
      id : newUser._id,
    };
    let token = jwt.sign(payload , secret);
    res.send({
      token,
      user:{
      id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      userRole:newUser.userRole
    }
    });
    // // Generate a JWT token with an expiration time of 1 hour (3600 seconds)
    // const payload = { id: newUser._id };
    // const secret = process.env.JWT_SECRET;
    // const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    // // Send the token in an HTTP-only cookie for better security
    // res.cookie("token", token, { httpOnly: true });

    // // Send a response with the new user object and token
    // res.status(201).json({
    //   user: {
    //     id: newUser.id,
    //     fullName: newUser.fullName,
    //     email: newUser.email,
    //   },
    //   token,
    // });

    // Send a response with the new user object
    // res.status(201).json({ user: newUser });
  } catch (error) {
    // Log the error to a file or database
    console.error(error);

    // Send a response with an error message
    res.status(500).json({ msg: error.message });
  }
};



exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "Invalid email or password" });

    const payload = { id: user._id };
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    res.json({
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


exports.auth = (req,res) =>{
  res.send(req.user);
};




// exports.login = async (req,res) => {
//   const {email,password} =req.body
//   try {
//     const user = await User.findOne({email});
//     if (!user) return res.status(404).json({msg:'wrong infos'});
//     const isMatch = await bcrypt.compare(password,user.password);
//    if (!isMatch) return res.status(404).json({msg:'wrong infos'});

//   } catch (error) {
//     res.status(500).json({ msg: error.message});
    
//   }
// }









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







