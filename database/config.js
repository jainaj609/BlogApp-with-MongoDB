const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/MoviesData", {useNewUrlParser: true, useUnifiedTopology:true})
        console.log("Datebase connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}