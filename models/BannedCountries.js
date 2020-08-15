const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	country: String,
});

mongoose.model('bannedCountries', userSchema);
