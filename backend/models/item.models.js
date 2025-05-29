//item.models.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, default: 'active' },
    createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;