const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	last4: String,
	country: String,
	token: String,
	id: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('cards', userSchema);
