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

// function createJWT(user) {
//     return jwt.sign(
//         // data payload
//         { user },
//         process.env.SECRET,
//         { expiresIn: '24h' }
//     );
// }

// function checkToken(req, res) {
//     console.log('req.user', req.user);
//     res.json(req.exp);
// }

module.exports = {
    newEntry,
    getToDoList
    // checkToken,
};