const ToDo = require('../../models/ToDo');

const newEntry = async (req, res) => {
    try {
        // Add user to database
        const data = await ToDo.create(req.body);

        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const getToDoList = async (req, res) => {
    try {
        // Find the user by their email
        const todoList = await ToDo.find({});
        res.status(200).json(todoList);
    } catch (err) {
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const editToDoList = async (req, res) => {
    try {
        // Add user to database
        console.log('before data',req.body.id,req.body);
        const data = await ToDo.findByIdAndUpdate(req.body.id,req.body);
        console.log('after data', data);
        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const getToDoById = async (req, res) => {
    try {

        const data = await ToDo.findById(req.body.id);

        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const deleteItem = async (req, res) => {
    try {
        console.log('before data',req.body.id);
        await ToDo.findByIdAndDelete(req.body.id);
        console.log(await ToDo.find({}));
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

module.exports = {
    newEntry,
    getToDoList,
    editToDoList,
    getToDoById,
    deleteItem
};