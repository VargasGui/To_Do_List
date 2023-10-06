const mongoose = require("mongoose")

const taskScheema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    check: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Task", taskScheema)