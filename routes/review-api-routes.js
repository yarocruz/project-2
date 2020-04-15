// *********************************************************************************
// review-api-routes.js - this file offers a set of routes for displaying and saving review data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = (app) => {
	// GET route for getting all of the reviews
	app.get('/api/reviews', (req, res) => {
		db.Review.findAll({}).then((dbReview) => res.json(dbReview));
	});

	// Get route for retrieving a single review
	app.get('/api/reviews/:id', (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		db.Review
			.findOne({
				where: {
					id: req.params.id
				}
			})
			.then((dbReview) => res.json(dbReview));
	});

	// POST route for saving a new user
	app.post('/api/reviews', (req, res) => {
		// Using parseInt to change user input from string to integer
		const payload = { ...req.body, rating: parseInt(req.body.rating) };

		db.Review.create(payload).then((dbReview) => res.json(dbReview));
	});

	// DELETE route for deleting reviews
	app.delete('/api/reviews/:id', (req, res) => {
		db.Review
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((dbReview) => res.json(dbReview));
	});
};
