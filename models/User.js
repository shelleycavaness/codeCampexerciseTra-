const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String }
})


mongoose.model('User', UserSchema);
