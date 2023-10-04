const Task = require("../models/Task.js")

const getAll = async (req, res) => {
    try {
        const tasksList = await Task.find()
        return res.render("index", {tasksList});
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

const createTask = async (req,res) => {
    const task = req.body
    if(!task.task){
        return res.redirect("/")
    }
    try {
        await Task.create(task)
        return res.redirect("/")
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = {
    getAll,
    createTask,
}