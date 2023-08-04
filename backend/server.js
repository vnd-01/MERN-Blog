const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/",(req,res)=>{
    res.send("Welcomw to Home Page")
});


const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server Started on ${port}`);
})