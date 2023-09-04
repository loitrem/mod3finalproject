const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Add the bcrypt library

const userGroupSchema = new Schema(
    {
        name: { type: String, required: true },
        owner: {type: String, required: true},
        users: [{name:{type: String}}],
    }
);


module.exports = mongoose.model('UserGroup', userGroupSchema);