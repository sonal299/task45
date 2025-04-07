var express = require("express");
const empModel = require("./model/employee");
require("./db")
var emp= require('./model/employee');
var app = express();
app.use(express.json())
var port =2000;
//post
app.post('/',(req,res)=>{
    try {
        emp(req.body).save();
        res.send("data added")
    } catch (error) {
        res.send(error)  
    }
})
//get
app.get('/',async(req,res)=>{
    try {
       var data= await empModel.find()
       res.send(data)

    } catch (error) {
        console.log(data)
    }
})
//delete
app.delete('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await empModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    } catch (error) {
        res.send(error)
        
    }
})
//put
app.put('/:id',async(req,res)=>{
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    } catch (error) {
        res.send(error)
    }
})

app.listen(port,()=>{
    console.log(`server is up and running on port ${port}`)
})