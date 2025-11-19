const signup = (req, res, next) => {
  console.log('Signup hit. File:', req.file);

  res.status(201).json({
    message: 'Signup successful',
    file: req.file
  });
};

exports.signup = signup;
