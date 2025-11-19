// controllers/places-controllers.js
const fs = require('fs');
const { v4: uuid } = require('uuid');

// super simple in-memory array instead of DB
let PLACES = [];

const createPlace = (req, res, next) => {
  console.log('FILE RECEIVED:', req.file);

  // Multer puts text fields in req.body automatically
  const { title, description, address, creator } = req.body;

  if (!title || !description || !address) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "No image provided" });
  }

  const newPlace = {
    id: uuid(),
    title,
    description,
    address,
    creator,
    image: req.file.path
  };

  PLACES.push(newPlace);

  res.status(201).json({ place: newPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;

  const place = PLACES.find(p => p.id === placeId);

  if (!place) {
    return res.status(404).json({ message: 'Place not found.' });
  }

  // remove from array
  PLACES = PLACES.filter(p => p.id !== placeId);

  const imagePath = place.image;

  fs.unlink(imagePath, err => {
    if (err) {
      console.log('Error deleting file:', err);
    }
  });

  res.status(200).json({ message: 'Deleted place.' });
};

exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
