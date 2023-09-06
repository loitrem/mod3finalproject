const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Add the bcrypt library

const userGroupsSchema = new Schema(
    {
        user: { type: String, required: true },
        owner: {type: String, required: true},
    }
);


module.exports = mongoose.model('UserGroups', userGroupsSchema);