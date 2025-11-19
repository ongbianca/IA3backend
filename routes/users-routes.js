const express = require('express');
const fileUpload = require('../middleware/file-upload');
const usersControllers = require('../controllers/users-controllers');

const router = express.Router();

router.post('/signup', fileUpload.single('image'), usersControllers.signup);

module.exports = router;
