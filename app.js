const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const usersRoutes = require('./routes/users-routes');
const placesRoutes = require('./routes/places-routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

// Debug incoming requests
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use('/api/users', usersRoutes);
app.use('/api/places', placesRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => console.log(err));
  }
  res.status(error.code || 500).json({ message: error.message || 'Something went wrong.' });
});

app.listen(5005, () => console.log('Server running on port 5005'));
