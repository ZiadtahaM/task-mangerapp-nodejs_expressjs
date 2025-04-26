// mongoose.js
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.mongourl, {
  // useNewUrlParser: true,   <--- REMOVE THIS LINE
  // useUnifiedTopology: true <--- REMOVE THIS LINE
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// No export needed - connection is established when file is required
console.log(process.env.mongourl);
