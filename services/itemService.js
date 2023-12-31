const Item = require('../models/Item');


async function getAll() {
    return Item.find({});
}

async function getByUserId(userId) {
    return Item.find({ _ownerId: userId });
}

async function getById(id) {
    return Item.findById(id);
}

async function create(item) {
    return Item.create(item);
}

async function update(id, item) {
    const existing = await Item.findById(id);

    existing.title = item.title;
    existing.ingredients = item.ingredients;
    existing.time = item.time;
    existing.description = item.description;
    existing.img = item.img;


    return existing.save();
}

async function deleteById(id) {
    return Item.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    update,
    deleteById
};