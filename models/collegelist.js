const mongoose = require('mongoose');
const collegelistSchema= mongoose.Schema({
    college_name:String,
    requested_by:Number,
   
});

module.exports= mongoose.model("products",collegelistSchema);