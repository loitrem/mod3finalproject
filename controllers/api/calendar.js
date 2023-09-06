const Calendar = require('../../models/Calendar');

const newEntry = async (req, res) => {
    try {
        // Add user to database
        const data = await Calendar.create(req.body);

        res.status(200).json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const update = async (req, res) => {
    try {
        // Add user to database
        console.log('TESTTTTTT',req.body.id, req.body);
        const data = await Calendar.findByIdAndUpdate(req.body.id, req.body);
console.log(data);
res.status(200).json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const findByDate = async (req, res) => {
    try {
        // Add user to database

        const data = await Calendar.find({date: req.body.date});

        res.status(200).json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const findAll = async (req, res) => {
    try {
        // Add user to database

        const data = await Calendar.find({});

        res.status(200).json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const findById = async (req, res) => {
    try {
        // Add user to database

        const data = await Calendar.findById(req.body.id);

        res.status(200).json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const remove = async (req, res) => {
    try {
        // Add user to database
        console.log('TESRT',req.body);
        const data = await Calendar.findByIdAndDelete(req.body.id);

        res.status(200).json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const edit = async (req, res) => {
    try {
        // Add user to database
console.log('TESRT',req.body._id, req.body);
        const data = await Calendar.findByIdAndUpdate(req.body._id,req.body);

        res.status(200).json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

module.exports = {
    newEntry,
    update,
    findByDate,
    findById,
    remove,
    edit,
    findAll

};