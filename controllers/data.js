const { categoryModel } = require("../model/projectmodel");



const bollywood = async(req, res) => {
    const Bollywood = await categoryModel.find({category: "Bollywood"})
    return res.send({Bollywood});
}
const hollywood = async(req, res) => {
    const Hollywood = await categoryModel.find({category: "Hollywood"})
    return res.send({Hollywood})
}
const technology = async(req, res) => {
    const Technology = await categoryModel.find({category: "Technology"})
    return res.send({Technology})
}
const fitness = async(req, res) => {
    const Fitness = await categoryModel.find({category: "Fitness"})
    return res.send({Fitness})
}
const food = async(req, res) => {
    const Food = await categoryModel.find({category: "Food"})
    return res.send({Food})
}

module.exports = {
    bollywood, hollywood, technology, fitness, food
}