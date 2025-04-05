var mongoose = require('mongoose');
const moduleSchema = mongoose.Schema({
    studentNAME:String,
    studentAge:Number,
    studentDept:String
})
const studentModel= mongoose.model("student",moduleSchema);
module.exports=studentModel;