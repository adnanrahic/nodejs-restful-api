const express = require('express');
const router = express.Router();

const userHelper = require('./UserHelper');

router.route('/')
    .get(userHelper.getAllUsers)
    .post(userHelper.createUser);

router.route('/:id')
    .get(userHelper.getUser)
    .put(userHelper.updateUser)
    .delete(userHelper.deleteUser);


module.exports = router;