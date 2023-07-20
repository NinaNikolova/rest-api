const { Schema, model, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    title: { type: String, required: true, minlength: [3, 'Make must be at least 3 characters long'] },
    ingredients: { type: String, required: true, minlength: [3, 'Model must be at least 3 characters long'] },
    time: {
        type: Number, required: true, validate: {
            validator: value => value >= 0 && value <= 24,
            message: 'Year must be between 0 and 24'
        }
    },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    img: { type: String, required: [true, 'Image URL is required'] },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
});

const Item = model('Item', itemSchema);

module.exports = Item;