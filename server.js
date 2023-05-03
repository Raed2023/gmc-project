const express=require("express");
const connectDb=require("./config/connectDb");
const  user  = require("./routes/user");

const app=express();
// app.use(express.jason());
app.use('/user', user);
connectDb()



const PORT=process.env.PORT||5000;
app.listen(PORT,error=>error?console.log(error):console.log(`server is running successfuly on ${PORT} `))