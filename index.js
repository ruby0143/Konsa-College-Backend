const express = require("express");
const connectDB = require("./db");
const cors = require('cors');
const College = require("./models/collegeInfo.js");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/college/:college",async(req,res)=>{
  try{
     let result = await College.findOne({
      "$or":[
        
          {college_name:{$regex: new RegExp(req.params.college), $options:"i"}},
          {college_uuid:{$regex:req.params.college, $options:"i"}}
        
      ]
    })
    res.status(200).send(result)
  } catch(err){
    console.log(err);
    res.status(500).json({error:true, message:"Internal Server Error"})
  }
});

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
