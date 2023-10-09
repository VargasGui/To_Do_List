const Task = require("../models/Task.js")

let message = "";
let typeMessage = "";



const getAll = async (req, res) => {
    try {
        setTimeout(() => {
            message = ""
        }, 2000)
        const tasksList = await Task.find()
        return res.render("index", {
             tasksList,
             taskToUpdate: null,
             taskDelete: null,
             message,
             typeMessage,
             });
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const createTask = async (req, res) => {
    const task = req.body
    if (!task.task) {
        message = "Insira um nome para sua Task!"
        typeMessage = "danger"
        return res.redirect("/")
    }
    try {
        await Task.create(task)
        message = "Task criada com sucesso!"
        typeMessage = "success"
        return res.redirect("/")
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const tasksList = await Task.find()
        if (req.params.method == "update") {
            const taskToUpdate = await Task.findOne({ _id: req.params.id })
            res.render("index", { taskToUpdate, tasksList, taskDelete: null, message, typeMessage })
        } else {
            const taskDelete = await Task.findOne({ _id: req.params.id })
            res.render("index", { taskToUpdate: null, tasksList, taskDelete, message, typeMessage })
        }
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const task = req.body
        await Task.updateOne({ _id: req.params.id }, task)
        message = "Task atualizada com sucesso!"
        typeMessage = "success"
        res.redirect("/")
    } catch (error) {
        res.status(500).send({ error: message })
    }
}

const confirmDelete = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id })
        message = "Task apagada com sucesso!"
        typeMessage = "success"
        res.redirect("/")
    } catch (error) {
        res.status(500).send({ error: message })
    }
}

const taskChecker = async (req, res) => {
    try {
        const taskCheck = await Task.findOne({_id: req.params.id})
        taskCheck.check ? taskCheck.check = false : taskCheck.check = true
        await Task.updateOne({_id: req.params.id}, taskCheck)
        res.redirect("/")
    } catch (error) {
        res.status(500).send({error: message})
    }
}

module.exports = {
    getAll,
    createTask,
    getById,
    updateTask,
    confirmDelete,
    taskChecker
}