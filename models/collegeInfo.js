const mongoose = require('mongoose');
const collegeInfoSchema = mongoose.Schema({
    college_name: String,
    college_full_name: String,
    header_photo_link: String,
    college_logo_link: String,
    overview: String,
    nirf: Number,
    mode_of_admission: [String],
    exams: [String],
    connectivity: [{trans:String,icon:String,dist:String}],
    scholarships: [String],
    positives: [String],
    negatives: [String],
    highest_packages: Number,
    average_package: Number,
    medium_package: Number,
    top_recruiters: [String],
    review_video_link: String,
});

module.exports = mongoose.model("collegeInfo", collegeInfoSchema);