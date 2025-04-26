// models/user.schema.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // <--- ADD THIS LINE
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date
}, { timestamps: true });

// middkeware for hashing pass
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next(); // <--- Corrected: ensure next() is called here
  }
  const salt = await bcrypt.genSalt(10); // <--- Corrected: use 'bcrypt'
  this.password = await bcrypt.hash(this.password, salt); // <--- Corrected: use 'bcrypt'
  next();
});


module.exports = mongoose.model('User', userSchema);