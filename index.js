const express = require("express");
const connectDB = require("./db");
const cors = require('cors');
const College = require("./models/collegeInfo.js");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/college/:college",(req,res)=>{
  const college = req.params.college;
  console.log(college);
  // College.find({college_name : college},(err,docs)=>{
  College.find({college_uuid : college},(err,docs)=>{

    if(!err){
      console.log(docs);
      if(docs.length==0){
        res.send("404");
      }
      else{

        res.send(docs);
      }
    }
    else{
      res.status(404);
    }
  })
})

app.get("/colleges",(req,res)=>{
  College.find({},(err,docs)=>{
    if(!err){
      console.log(docs);
      res.send(docs);
    }
    else{
      res.send("404");
    }
  });
});

app.get("/",async (req,res)=>{
  res.send("OK");
  
});

app.get("/add",(req,res)=>{
  res.send("ok");
})

const PORT= process.env.PORT || 5000
app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
