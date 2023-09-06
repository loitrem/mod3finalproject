const UserGroups = require('../../models/UserGroups');

const add = async (req, res) => {
    try {
        // Add user to database
        const data = await UserGroups.create(req.body);

        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const remove = async (req, res) => {
    try {
        // Add user to database
        const data = await UserGroups.findByIdAndDelete(req.body.id);

        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

module.exports = {
    add,
    remove,

};