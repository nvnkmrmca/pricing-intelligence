const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
	website: String,
	name: String,
	url: String,
	brand: String,
	imageURL: String,
	price: Number,
	mrp: Number,
	packingQty: String,
	moq: String,
	discount: Number,
	category: String,
	categoryPath: String,
	isActive: Boolean,
	createdBy: { type: Schema.Types.ObjectId, default: null },
	updatedBy: { type: Schema.Types.ObjectId, default: null }
}, {
	timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);