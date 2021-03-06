const mongoose = require('mongoose')

const Todo = new mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        default: false,
        type: Boolean
    },
    completedAt: {
        type: Number,
        default: null,
    },
    _creator: {
        required: true,
        type:  mongoose.Schema.Types.ObjectId
    }
})

module.exports = {
    Todo
}