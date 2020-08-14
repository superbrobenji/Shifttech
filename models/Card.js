const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	card: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('cards', userSchema);
