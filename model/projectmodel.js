const mongoose = require("mongoose")


const categorySchema =new mongoose.Schema({
        id:{
            type: Number,
            required: true
        } ,
        heading: {
            type: String,
            required:true
        },
        released: {
            type: String,
            required: true
        },
        category: {
            type:String,
            required:true
        },
        image: {
            one: {
                type:String,
                required:true
            },
            two: {
                type:String,
                required:true
            }
        },
        contentLine: {
            type:String,
            required:true
        },
        content: {
            para1: {
                type:String,
                required:true
            },
            para2: {
                type:String,
                required:true
            }
        }  
})

const categoryModel = mongoose.model("movies", categorySchema)

module.exports = {
    categoryModel
}