var express = require("express")
require("./db")


var app = express()
var port =4000;
var sModel = require('./model/student')

app.use(express.json())

app.post('/',(req,res)=>{
    try {
        sModel(req.body).save();
        res.send("Data added")
    } catch (error) {
        res.send(error)
    }
})
//api to read data from db
app.get('/',async(req,res)=>{
    try {
        var data =await sModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

// delete
app.delete('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await sModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    } catch (error) {
        res.send(error)
        
    }
})




app.listen(port,()=>{
    console.log(`server connected and running on port ${port}`)
})