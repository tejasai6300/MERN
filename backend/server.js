const express = require('express')
const app = express();
const todoRoute = require('./router/todoRouter');
const dotenv=require("dotenv");
const userRoute = require('./router/userRouter');
const connectDB = require("./config/db")

const cors = require('cors');
dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/todo",todoRoute)
app.use("/api/user",userRoute);
const PORT=process.env.PORT ||3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
 })


// app.get("/",(req,res)=>{
//     res.send("Get Route is Working")
// })
// app.post("/create",(req,res)=>{
//     res.json({
//         message:"Post Route is working"
//     })
// })
// app.put("/",(req,res)=>{
//     res.status(200).json({
//         message:"Put Route is Working"
//     })
// })
//     app.delete("/",(req,res)=>{
//     res.status(200).json({
//         message:"delete Route is Working"
//     })
// })
app.listen(3000,()=>{
     console.log(`Server running on ser  http://localhost:${3000}`);
})