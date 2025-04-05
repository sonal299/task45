var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sonalrk299:sonal@cluster0.o1pe09y.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
})