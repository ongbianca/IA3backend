const express = require('express');
const fileUpload = require('../middleware/file-upload');
const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.post('/', fileUpload.single('image'), placesControllers.createPlace);
router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
