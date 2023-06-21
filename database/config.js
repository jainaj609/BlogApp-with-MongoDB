const mongoose = require('mongoose')


const connectDB = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.0juvczz.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology:true})
        console.log("Datebase connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}