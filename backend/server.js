const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const positionRoutes = express.Router();
const PORT = 4000;

let Position = require('./position.model')

app.use(cors());
app.use(bodyParser());

mongoose.connect('mongodb://127.0.0.1:27017/Positions', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
	console.log("Mongo DB connected");
})

positionRoutes.route('/').get(function(req, res) {
	Position.find(function(err, positions) {
		if (err) {
			console.log(err);
		} else {
			res.json(positions);
		}
	});
});

positionRoutes.route('/:id').get(function(req, res) {
	let id = req.params.id;
	Position.findById(id, function(err, position){
		res.json(position);
	});
});

positionRoutes.route('/update/:id').post(function(req, res) {
	Position.findById(req.params.id, function(err, position) {
		if(!position)
			res.status(404).send("data not found");
		else
			position.position_security = req.body.position_security;
			position.position_portfolio = req.body.position_portfolio;
			position.position_custodian = req.body.position_custodian;
			position.position_type = req.body.position_type;
			position.position_amount = req.body.position_amount;
			position.position_price = req.body.position_price;

			position.save().then(position => {
				res.json('Position Updated');
			})
			.catch(err => {
                res.status(400).send("Update not possible");
			});
	});
});

positionRoutes.route('/add').post(function(req, res) {
	let position = new Position(req.body);
    position.save()
        .then(position => {
            res.status(200).json({'position': 'position added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new position failed');
        });
});

app.use('/positions', positionRoutes);

app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT);
});