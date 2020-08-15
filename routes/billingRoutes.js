const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Card = mongoose.model('cards');
const BlackListed = mongoose.model('bannedCountries');

module.exports = (app) => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		const { card, id } = req.body;

		const isBanned = await BlackListed.findOne({ country: card.country });
		const existingCard = await Card.findOne({ last4: card.last4 });

		if (existingCard) {
			res.send({ error: 'This card already exists' });
		} else {
			if (isBanned) {
				res.send({
					error: 'This country is on the blacklist',
				});
			}
			try {
				const newCard = await new Card({
					last4: card.last4,
					country: card.country,
					token: id,
					id: card.id,
					_user: req.user.id,
				}).save();
				const { last4, country } = newCard;
				res.send({ last4, country, id: newCard.id });
			} catch (err) {
				console.log(err);
				res.status(500).send(err);
			}
		}
	});

	app.get('/api/cards', requireLogin, async (req, res) => {
		const cards = await Card.find({ _user: req.user.id });
		res.send(cards);
	});
};
