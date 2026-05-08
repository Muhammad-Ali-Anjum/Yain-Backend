// TEMPORARY: bypass auth for testing. Replace with real JWT later.
const protect = (req, res, next) => {
  next();
};

module.exports = { protect };