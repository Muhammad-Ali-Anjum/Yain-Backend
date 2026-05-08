const app = require('./src/app');  // or './src/app' depending on your structure
const dotenv = require('dotenv');

require('dotenv').config();
console.log('Loaded MONGO_URI:', process.env.MONGO_URI);
console.log('Loaded PORT:', process.env.PORT);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});