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
    let result = await College.find({
      "$or":[
        {
          college_name:{$regex:req.params.college, $options:"i"},
          college_uuid:{$regex:req.params.college, $options:"i"}
        }
      ]
    })

    res.status(200).send(result)
  } catch(err){
    console.log(err);
    res.status(500).json({error:true, message:"Internal Server Error"})
  }

    res.status(200).send(result)
})
app.get("/",async (req,res)=>{
  res.send("OK");
  
});

app.get("/add",(req,res)=>{
  res.send("ok");
//   const college = new College({
//     college_name: "IIT-BHU",
//     header_photo_link :
// "https://lh3.googleusercontent.com/p/AF1QipP9D06xtt7nFHnI7IQ8XyVUC_60L8…",
// college_logo_link:
// "https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.p…",
// overview:
// "IIT BHU is one of the oldest engineering colleges in India, Founded in…",
// nirf:
// 29,
// mode_of_admission:
// "JOSAA",
// exams:
// "JEE Mains, JEE Advanced",
// connectivity:
// "RAILWAY abcd, AIRPORT abcd, METRO abcd, BUS abcd",
// scholarships:
// "1) 100% Tuition Fee waiver for SC/ST/PH students. 2) Full remission o…",
// positives:
// "Average package of about 13 LPU - strong Alumni base being one of the …",
// negatives:
// "Most of the hostels are decades old and are congested. Which are regre…",
// highest_package:
// 10,
// average_package:
// 10,
// median_package:
// 10,
// top_recruiters:
// "Amazon, Google, Microsoft",
// review_video_link:
// "https://www.youtube.com/watch?v=_gcgwGikYdk",
//   });
  // college.save((err,res)=>{
  //   if(!err){
  //     console.log("Successfully added");
  //   }
  //   else{
  //     console.log(err);
  //   }
  // });
})

const PORT= process.env.PORT || 5000
app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
