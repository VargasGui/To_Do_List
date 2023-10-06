const Task = require("../models/Task.js")

const getAll = async (req, res) => {
    try {
        const tasksList = await Task.find()
        return res.render("index", { tasksList, taskId: null, taskDelete: null });
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const createTask = async (req, res) => {
    const task = req.body
    if (!task.task) {
        return res.redirect("/")
    }
    try {
        await Task.create(task)
        return res.redirect("/")
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const tasksList = await Task.find()
        if (req.params.method == "update") {
            const taskId = await Task.findOne({ _id: req.params.id })
            res.render("index", { taskId, tasksList, taskDelete: null })
        } else {
            const taskDelete = await Task.findOne({ _id: req.params.id })
            res.render("index", { taskId: null, tasksList, taskDelete })
        }
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const task = req.body
        await Task.updateOne({ _id: req.params.id }, task)
        res.redirect("/")
    } catch (error) {
        res.status(500).send({ error: message })
    }
}

const confirmDelete = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id })
        res.redirect("/")
    } catch (error) {
        res.status(500).send({ error: message })
    }
}

module.exports = {
    getAll,
    createTask,
    getById,
    updateTask,
    confirmDelete
}