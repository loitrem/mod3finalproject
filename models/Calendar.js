const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Add the bcrypt library

const calendarSchema = new Schema(
    {
        name: { type: String, required: true },
        title: {type: String, required: true},
        time: {type: String, required: true},
        date: { type: String, required: true },
    }
);


module.exports = mongoose.model('Calendar', calendarSchema);