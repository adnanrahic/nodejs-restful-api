const express = require('express');
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const User = require('./User');

// CREATES A NEW USER
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    User.create({ name, email, password }, (err, user) => {
        if (err) return res.status(500).json({ message: "There was a problem adding the information to the database." });
        return res.status(200).json(user);
    });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).json({ message: "There was a problem finding the users." });
        return res.status(200).json(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', (req, res) => {
    const { id } = req.params;

    User.findById(id, (err, user) => {
        if (err) return res.status(500).json({ message: "There was a problem finding the user." });
        if (!user) return res.status(404).json({ message: "No user found." });
        return res.status(200).json(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    User.findByIdAndRemove(id, (err, user) => {
        if (err) return res.status(500).json({ message: "There was a problem deleting the user." });
        return res.status(200).json({ message: `User: ${user.name} was deleted.` });
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', (req, res) => {
    const { id } = req.params;

    User.findByIdAndUpdate(id, req.body, {new: true}, (err, user) => {
        if (err) return res.status(500).json({ message: "There was a problem updating the user." });
        return res.status(200).json(user);
    });
});


module.exports = router;
