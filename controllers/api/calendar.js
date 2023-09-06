const Calendar = require('../../models/Calendar');

const newEntry = async (req, res) => {
    try {
        // Add user to database
        const data = await Calendar.create(req.body);

        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const update = async (req, res) => {
    try {
        // Add user to database
        console.log('TESTTTTTT',req.body.id, req.body.data);
        const data = await Calendar.findByIdAndUpdate(req.body.id, req.body.data);
console.log(data);
        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const findByDate = async (req, res) => {
    try {
        // Add user to database
        console.log(req.body.date);
        const data = await Calendar.find({date: req.body.date});

        res.json(data);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
    }
};

const findById = async (req, res) => {
    try {
        // Add user to database
        console.log(req.body.date);
        const data = await Calendar.findById(req.body.id);

        res.json(data);
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
    findById
    // getCalendarById,
    // deleteItem
};