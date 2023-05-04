const model = require('../models/model')

const findAll = () => model.find()
const addOne = (user) => model.create(user);
const findById = (id) => model.findById({_id: id})
const findByUsername = (username) => model.findOne({username: username})
const updateOne = (id, updatedUser) => model.findOneAndUpdate(
    {_id: id},
    { $set: {
            username: updatedUser.username,
            password: updatedUser.password,
        }},
    { new: true }
);
const deleteOne = (id) => model.findOneAndDelete({_id: id});

module.exports = {
    findAll,
    findById,
    findByUsername,
    addOne,
    updateOne,
    deleteOne
}
