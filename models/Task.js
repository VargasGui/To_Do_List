const mongoose = require("mongoose")

const taskScheema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Task", taskScheema)