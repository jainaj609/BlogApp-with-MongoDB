const mongoose = require('mongoose')


const connectDB = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.UserName}:${process.env.PassWord}@cluster0.0juvczz.mongodb.net/${process.env.DataBase}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology:true})
        console.log("Datebase connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}