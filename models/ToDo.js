const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Add the bcrypt library

const todoSchema = new Schema(
    {
        name: { type: String, required: true },
        title: {
        type: String,
        trim: true,
        required: true,
        },
        details: {
        type: String,
        },
        date: { type: Date, required: true },
    }
);


module.exports = mongoose.model('ToDo', todoSchema);0