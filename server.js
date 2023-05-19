const express=require("express");
const connectDb=require("./config/connectDb");
const  user  = require("./routes/user");
const taskRoutes = require ("./routes/taskRoutes")


const app=express();
app.use(express.json());
app.use('/user', user);
app.use('/TaskRoutes' , taskRoutes);
connectDb()



const PORT=process.env.PORT||5000;
app.listen(PORT,error=>error?console.log(error):console.log(`server is running successfuly on ${PORT} `))