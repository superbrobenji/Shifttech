const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const _ = require('lodash');

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
};
