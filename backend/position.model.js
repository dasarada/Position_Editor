const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Position = new Schema({
	position_security: {
		type: String
	},
	position_portfolio: {
		type: String
	},
	position_custodian: {
		type: String
	},
	position_type: {
		type: String
	},
	position_amount: {
		type: String
	},
	position_price: {
		type: String
	}
});

module.exports = mongoose.model('Position', Position);