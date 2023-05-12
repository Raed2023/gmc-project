const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

const secret = config.get('secret');

const verifyAuth = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ msg: 'Authorization header missing' });
    }

    // Verify the token
    const decoded = await jwt.verify(token, secret);
    if (!decoded) {
      return res.status(401).json({ msg: 'Invalid token' });
    }

    // Find the user associated with the token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }

    // Attach the user object to the request
    req.user = user;

    // Move to the next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = verifyAuth;








// const jwt = require('jsonwebtoken');
// const config = require('config');
// const secret = config.get('secret');


// const verifyauth = async (req,res,next)=>{
//     let token =req.headers.authorization;

  
// try {
//     const decoded= await jwt.verify(token , secret);
//     if (!decoded) return res.status(400).json({msg:'invalid token'})
//     const user = await User.findById(decoded.id)
//     if (!user) return res.status(400).json({msg:'invalid token'})
//     else {
//         res.send(user);
//         next()

//     }
// } catch (error) {
//     res.status(500).json({msg:error.message});
// }
// };

// module.exports = verifyauth