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

module.exports = {
    newEntry,
    // getCalendarList,
    // editCalendarList,
    // getCalendarById,
    // deleteItem
};