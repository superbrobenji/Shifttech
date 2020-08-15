const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const _ = require('lodash');
const mongoose = require('mongoose');

const BlackListed = mongoose.model('bannedCountries');

module.exports = (app) => {
	app.get('/api/countries', requireLogin, async (req, res) => {
		let countriesList = [];
		const countrySpec = await stripe.countrySpecs.list({
			limit: 100,
		});

		_.forEach(countrySpec.data, (country, key) => {
			countriesList.push(country.id);
		});

		res.send(countriesList);
	});

	app.post('/api/banned_countries', requireLogin, async (req, res) => {
		const { country } = req.body;

		const existingCountry = await BlackListed.findOne({ country });
		if (!existingCountry) {
			const newEntry = await new BlackListed({
				country,
			}).save();
		}
		BlackListed.find({}, (err, countries) => {
			var countriesList = [];

			countries.forEach((country) => {
				countriesList.push(country.country);
			});
			res.send(countriesList);
		});
	});

	app.get('/api/banned_countries', requireLogin, async (req, res) => {
		BlackListed.find({}, (err, countries) => {
			var countriesList = [];

			countries.forEach((country) => {
				countriesList.push(country.country);
			});
			res.send(countriesList);
		});
	});
};
